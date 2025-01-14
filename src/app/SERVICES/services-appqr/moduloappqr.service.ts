
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAppQr {

  // Node/Express API
  //REST_API: string = 'http://localhost:3000/API';
  REST_API:string='http://localhost:3000/API';

  // Http Header
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor (private httpClient: HttpClient) { }

  // -----------------------Plantas-----------------
  //obtener todos los datos de las plantas
  GetPlantas () {
    let API_URL = `${this.REST_API}/plantas`;
    return this.httpClient.get(API_URL , { headers: this.httpHeaders });
    
  }
  // Obtener una sola planta
  GetPlanta (id: any): Observable<any> {
    let API_URL = `${this.REST_API}/plantas/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
        return res || {}
      }),
        catchError(this.handleError)
      )
  }

  //------------------------------condigo qr------------------------------------
  GetCodigos() {
    let API_URL = `${this.REST_API}/codigo_qr`;
    return this.httpClient.get(API_URL , { headers: this.httpHeaders });

  }



handleError (error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Handle client error
    errorMessage = error.error.message;
  } else {
    // Handle server error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

  }