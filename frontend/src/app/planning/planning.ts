import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { startOfDay } from 'date-fns';
import { CalendarUtils } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { CalendarA11y } from 'angular-calendar';

@Component({
  selector: 'app-planning',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, CalendarModule],
  templateUrl: './planning.html',
  providers: [
    CalendarUtils,
    {
      provide: DateAdapter,
      useFactory: adapterFactory,
    },
    CalendarA11y,
  ],
})
export class PlanningComponent implements OnInit {
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  services: any[] = [];
  medecins: any[] = [];
  filter = { service: '', medecin: '', equipe: '' };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<any[]>('/api/medecins/')
      .subscribe((m) => (this.medecins = m));
    this.http
      .get<any[]>('/api/services/')
      .subscribe((s) => (this.services = s));
    this.loadEvents();
  }

  loadEvents() {
    const params: any = {};
    if (this.filter.service) params['medecin__service'] = this.filter.service;
    if (this.filter.medecin) params['medecin'] = this.filter.medecin;
    if (this.filter.equipe) params['equipe'] = this.filter.equipe;
    this.http
      .get<any[]>('/api/interventions/', { params })
      .subscribe((ints) => {
        this.events = ints.map((i) => ({
          id: i.id,
          title: `${i.title} – Dr ${i.medecin.name}`,
          start: new Date(i.start),
          end: new Date(i.end),
          meta: { room: i.room, equipe: i.equipe, notes: i.notes },
        }));
      });
  }

  onFilterChange() {
    this.loadEvents();
  }

  eventClicked({ event }: { event: CalendarEvent }) {
    const meta = event.meta as any;
    alert(`Salle: ${meta.room}\nEquipe: ${meta.equipe}\nNotes: ${meta.notes}`);
  }
}
