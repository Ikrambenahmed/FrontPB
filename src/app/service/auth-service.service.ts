
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthServiceService {

  public getToken(): string {

    return localStorage.getItem('token');
    
  }
  jwtHelper : JwtHelperService ; 

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    // return a boolean indicating whether or not the token is expired
    console.log("getting token in auth service",this.jwtHelper.isTokenExpired(token));
   
    return this.jwtHelper.isTokenExpired(token);
  }

}
