import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { Link } from '../models/link';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LinkService {

  linksDataUrl = environment.backendServerUrl + '/api/v1/links';

  constructor(private httpClient: HttpClient) { }

  findAllLinks(): Observable<Link[]>{
    return this.httpClient.get<Link[]>(this.linksDataUrl);
  }
}
