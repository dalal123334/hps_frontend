import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilesBackService {
  constructor(private httpClient: HttpClient) {
  }

  getIPMFile(): Observable<Blob> {
    return this.httpClient.get('http://localhost:8081/api/ipm/downloadIPM', {responseType: 'blob'});
  }

}
