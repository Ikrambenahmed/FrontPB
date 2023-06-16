import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PowerbiService {

private apiServer:""
httpOptions = {
    headers: new HttpHeaders({
      'CONTENT_TYPE': 'application/json'
    })
  }


  constructor(private httpClient: HttpClient) { 

   
   
  
  }



  /*getApiToken(formDataParams:any): Observable<any> {

    return this.httpClient.post<any>('https://login.microsoftonline.com/common/oauth2/token', formDataParams,
    {
    headers:new HttpHeaders()
    .set('Content-Type','application/json') 
    })
  

}

getApiToken(formDataParams:any): Observable<any> {
console.log('formDataParams',formDataParams) ; 
const headers2 = new HttpHeaders({
  'Content-Type': 'application/x-www-form-urlencoded'
});
  return this.httpClient.post<any>('https://login.microsoftonline.com/common/oauth2/token',formDataParams,{headers2})


}
*/

getApiToken(formDataParams: FormData): Observable<any> {
  
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  return this.httpClient.post<any>('https://login.microsoftonline.com/common/oauth2/token', 
  formDataParams, { headers });
}

}
