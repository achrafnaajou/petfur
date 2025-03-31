import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideCloudinary } from '@cloudinary/angular-5.x';
import { Cloudinary } from '@cloudinary/url-gen';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
   
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
