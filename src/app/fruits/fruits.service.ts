import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fruits } from './fruits';

@Injectable({
  providedIn: 'root'
})
export class FruitsService {

  apiURL: string = 'http://localhost/4200';

  constructor(private http: HttpClient) { }

  getAll(resource:string){
    return this.http.get<Fruits[]>(this.apiURL+ resource);
  }

}
