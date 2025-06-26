import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { HistoriqueSection } from './section/historique-section/historique-section';
import { InfoPatientSection } from './section/info-patient-section/info-patient-section';
import { HeaderSection } from './section/header-section/header-section';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule,HeaderSection,PatientComponent,HistoriqueSection,InfoPatientSection],
  templateUrl: './patient.html',
  styleUrls: ['./patient.css']
})
export class PatientComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  private chart!: Chart;

  public heartRateData: ChartConfiguration['data'] = {
    labels: ['J-6', 'J-5', 'J-4', 'J-3', 'J-2', 'Hier', 'Aujourd’hui'],
    datasets: [
      {
        data: [72, 75, 78, 74, 70, 73, 76],
        label: 'Fréquence cardiaque (bpm)',
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: false,
        tension: 0.4,
        pointBackgroundColor: '#3b82f6',
        pointRadius: 4,
      }
    ]
  };

  public chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#111827',
          font: {
            size: 14,
            family: 'Arial'
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        title: {
          display: true,
          text: 'BPM',
          color: '#6b7280',
          font: { size: 14 }
        }
      },
      x: {
        title: {
          display: true,
          text: 'Jours',
          color: '#6b7280',
          font: { size: 14 }
        }
      }
    }
  };

  public chartType: 'line' = 'line';

  async ngAfterViewInit() {
    const { Chart } = await import('chart.js/auto');
    this.chart = new Chart(this.chartCanvas.nativeElement, {
      type: this.chartType,
      data: this.heartRateData,
      options: this.chartOptions
    });
  }
}
