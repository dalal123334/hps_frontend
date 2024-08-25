import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilesBackService {
  constructor(private http: HttpClient) {}

  getFile(filename: string): Observable<Blob> {
    const url = `http://localhost:8081/download?filename=${filename}`;
    return this.http.get(url, { responseType: 'blob' });
  }

}
