import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment.prod';
import { APIResponse, Video } from '../models';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {

  }

  getVideoList(
    q: string
  ): Observable<APIResponse<Video>> {
    let params = new HttpParams().set('q', q);

    return this.http.get<APIResponse<Video>>(`${env.BASE_URL}`, {params: params});
  }
}
