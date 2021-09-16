import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UrlService } from './url.service';
import { HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AjendaService {

  constructor(private readonly UrlServicePro:UrlService,private httpClient : HttpClient) { }
  

  postAgenda(data:object){
 
    return this.httpClient.post(`${this.UrlServicePro.link}ajenda`,data,);
  }
}
