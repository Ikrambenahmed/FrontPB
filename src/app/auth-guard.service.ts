import { Injectable  } from "@angular/core";
import { Router  } from "@angular/router";
@Injectable({
    providedIn: 'root'
  })
  export class AuthGuardService {
  
    constructor(public router:Router) { }
    loged : any;
    canActivate():boolean{
        this.loged = localStorage.getItem('isLoggedin');
        if (!this.loged) {
            this.router.navigate(['/login']);
            return this.loged;
        }else{
            return true ;

        }
    }
  }