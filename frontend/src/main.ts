import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { App } from './app/app'; // <-- le composant racine
import { appConfig } from './app/app.config'; // <-- ta config globale

bootstrapApplication(App, appConfig);