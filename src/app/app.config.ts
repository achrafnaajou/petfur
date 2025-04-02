import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { CloudinaryModule, provideCloudinary } from '@cloudinary/angular-5.x';


import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClient, provideHttpClient, withFetch} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes), provideClientHydration(),
    provideHttpClient(withFetch())
    ]
};
