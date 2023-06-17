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


getApiToken(formDataParams: FormData): Observable<any> {
  
  const headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  return this.httpClient.post<any>('https://login.microsoftonline.com/common/oauth2/token', 
  formDataParams, { headers });
}




generateToken(): void {
  const url = 'https://api.powerbi.com/v1.0/myorg/GenerateToken';

  const body = {
    datasets: [{ id: 'd6941810-9a97-4520-9fd9-586e620638e8' }],
    reports: [{ id: 'd6df88fb-4c59-4031-b3fd-b66f81a0c206' }],
    targetWorkspaces: [{ id: 'a3ad1cd6-0318-44bc-9182-ad227dd18457' }]
  };

  const headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNTEzNDg2ZWMtNjY0My00ZjE3LWE1MDgtNzY0NzgzMTFiZTQyLyIsImlhdCI6MTY4Njk1MTczNSwibmJmIjoxNjg2OTUxNzM1LCJleHAiOjE2ODY5NTY2NTIsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VEFBQUE1OFdad0Z5VGUxUUFLRkJmTGJrSUxuU1lMTWxjcFd6ckk3dnZQNmpsc1J1UTlQank5WHUrbFcxTjdnZ3J6bUlKIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6ImJjOTU1ZDJjLWVjNDMtNGZkNy1hYzI1LTRhMTg5YjZmZDBmYSIsImFwcGlkYWNyIjoiMSIsImZhbWlseV9uYW1lIjoibWVkIGFtaW4iLCJnaXZlbl9uYW1lIjoidGhlbWkiLCJpcGFkZHIiOiI0MS4yMjUuOTQuMjI1IiwibmFtZSI6InRoZW1pIG1lZCBhbWluIiwib2lkIjoiYzFlZWU0ZjQtMTE4MC00YjEwLWIyNWUtMmQ4NGU4ZTU0YzNlIiwicHVpZCI6IjEwMDMyMDAyQjIwQ0U5NTgiLCJyaCI6IjAuQVY4QTdJWTBVVU5tRjAtbENIWkhneEctUWdrQUFBQUFBQUFBd0FBQUFBQUFBQUJmQUhZLiIsInNjcCI6IkFwcC5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkLkFsbCBDYXBhY2l0eS5SZWFkV3JpdGUuQWxsIENvbnRlbnQuQ3JlYXRlIERhc2hib2FyZC5SZWFkLkFsbCBEYXNoYm9hcmQuUmVhZFdyaXRlLkFsbCBEYXRhZmxvdy5SZWFkLkFsbCBEYXRhZmxvdy5SZWFkV3JpdGUuQWxsIERhdGFzZXQuUmVhZC5BbGwgRGF0YXNldC5SZWFkV3JpdGUuQWxsIEdhdGV3YXkuUmVhZC5BbGwgR2F0ZXdheS5SZWFkV3JpdGUuQWxsIFJlcG9ydC5SZWFkLkFsbCBSZXBvcnQuUmVhZFdyaXRlLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkLkFsbCBTdG9yYWdlQWNjb3VudC5SZWFkV3JpdGUuQWxsIFdvcmtzcGFjZS5SZWFkLkFsbCBXb3Jrc3BhY2UuUmVhZFdyaXRlLkFsbCIsInN1YiI6InlBbE8xOWRLSE1DdVQzcS1OUFZocnB3SWhraHRhTnJtb2s5a2M4Y1dyeDgiLCJ0aWQiOiI1MTM0ODZlYy02NjQzLTRmMTctYTUwOC03NjQ3ODMxMWJlNDIiLCJ1bmlxdWVfbmFtZSI6InRoZW1pLm1lZGFtaWpuQGVzcHJpdC50biIsInVwbiI6InRoZW1pLm1lZGFtaWpuQGVzcHJpdC50biIsInV0aSI6Il9ROEg3aEhVd1VDU0tJamtRT2dZQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.BztPCvQRq7-_1TRq1NYeiiv37-UyxthObBJvAuZzCa1xmEsA9Bevxf-jI6HRWyzSX5VFN17VXSlokJ-P9bEvMp9aX_T_JT7UG319Rt0hwIU4LA1iuLreZYbzUXn32T1BbdhVzrVEIC__v_FTusNbxgYCGDRJfZJ35IjWp2fFmVTHoF9S7r4MPo-nGI2vYdIxwHF7U8Bsr7GAUE_vjSgqX3XqqdwgDQ0b-iwhW413jKiIv7GR-UkwfdWwpK4cmxUKjld7sgqgp6Of2_C7UsdHdIiBSzdnfiXHusa6Za0eMBYW9hORDXYbv521UMUf_TghYSRB8Kprc75GAa5QKe6OdQ'

  });
  const requestOptions = { headers: headers };

  this.httpClient.post(url, body,  requestOptions ).subscribe(
    response => {
      console.log('GenerateToken API response:', response);
    },
    error => {
      // Handle any errors
      console.error('GenerateToken API error:', error);
    }
  );
}

























}
