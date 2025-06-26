import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, ChartConfiguration, ChartType } from 'chart.js';
import { HistoriqueSection } from './section/historique-section/historique-section';
import { InfoPatientSection } from './section/info-patient-section/info-patient-section';
import { HeaderSection } from './section/header-section/header-section';
import { NoteSection } from './section/note-section/note-section';
import { AssuranceSection } from './section/assurance-section/assurance-section';
import { OperationSubieSection } from './section/operation-subie-section/operation-subie-section';
import { SuiviTraitementsSection } from './section/suivi-traitements-section/suivi-traitements-section';

@Component({
  selector: 'app-patient',
  standalone: true,
  imports: [CommonModule,HeaderSection,HistoriqueSection,InfoPatientSection,NoteSection,AssuranceSection,OperationSubieSection,SuiviTraitementsSection
  ],
  templateUrl: './patient.html',
  styleUrls: ['./patient.css']
})
export class PatientComponent  {
  
}
