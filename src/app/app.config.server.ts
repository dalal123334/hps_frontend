import {mergeApplicationConfig, ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {HttpClientModule, provideHttpClient} from "@angular/common/http";
import {BackendService} from "./service/forms-back/backend.service";
import {FilesBackService} from "./service/files-back/files-back.service";

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    BackendService,
    FilesBackService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
