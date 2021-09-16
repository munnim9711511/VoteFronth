import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  link:string ="http://localhost:64900/api/";
  constructor() { }
}
