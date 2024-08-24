import {mergeApplicationConfig, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {BackendService} from "./service/backend.service";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    BackendService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
