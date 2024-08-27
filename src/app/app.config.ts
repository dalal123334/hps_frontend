import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {BackendService} from "./service/forms-back/backend.service";
import {FilesBackService} from "./service/files-back/files-back.service";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    BackendService,
    FilesBackService
  ]
};
