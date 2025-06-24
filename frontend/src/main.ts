import { provideHttpClient, withFetch } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { RegisterComponent } from './app/register/register';



bootstrapApplication(RegisterComponent, {
  providers: [
    provideHttpClient(withFetch())
  ]
});
