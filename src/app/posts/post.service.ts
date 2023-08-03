import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL:string = "http://localhost:3000/posts";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAll() : Observable<Post[]>{
    return this.http.get<Post[]>(this.apiURL);
  }

  getById(id:number) : Observable<Post>{
    return this.http.get<Post>(this.apiURL+`/${id}`);
  }

  create(post:Post): Observable<Post>{
    return this.http.post<Post>(this.apiURL, post, this.httpOptions).pipe(
      catchError(this.errorHandler)
    );
  }

  update(id:number, post:Post){
    return this.http.put<Post>(this.apiURL + `/${id}`, post, this.httpOptions);
  }

  delete(id: number){
    return this.http.delete<Post>(this.apiURL+`/${id}`, this.httpOptions);
  }

  errorHandler(error){
    let errorMessage='';

    if (error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    return throwError(errorMessage);

  }

}
