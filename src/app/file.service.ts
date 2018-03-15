import { Injectable } from '@angular/core';
import { HttpEvent, HttpClient, HttpHeaders, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { File } from './file';

@Injectable()
export class FileService {
  private filesUrl = 'http://localhost:8080/files/';
  audioUrl = 'http://locahost:8080/files/audio';
  contentHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Requested-With,content-type'
  });

  constructor(private http: HttpClient) { }

  getFiles(url): Observable<File[]> {
    return this.http.get<File[]>(this.filesUrl + url);
  }
  downloadFile(data: Response) {
    var blob = new Blob([data], { type: 'text/csv' });
    var url= window.URL.createObjectURL(blob);
    window.open(url);
  }

}
