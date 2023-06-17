import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'app/models/user/User';
import { PowerbiService } from 'app/service/powerbi.service';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-demandecreation',
  templateUrl: './demandecreation.component.html',
  styleUrls: ['./demandecreation.component.css']
})
export class DemandecreationComponent implements OnInit {
  role: string;
  submitted: boolean = false;
  result: any;
  Myuser: User;
  u: any;


  id: any;
  constructor(private loginservice: UserService, private formBuilder: FormBuilder, private powerBiservice: PowerbiService, private router: Router) {
   // this.GetAPIReport();
   // powerBiservice.generateToken() ; 

  }


  GetAPIReport() {

    const formDataParams = new FormData();
    formDataParams.append('client_id', 'bc955d2c-ec43-4fd7-ac25-4a189b6fd0fa');
    formDataParams.append('client_secret', 'XaF8Q~o2Wt2YgzKbKT_fRSUmeCIjK3B7p0njKaiH');
    formDataParams.append('grant_type', 'password');
    formDataParams.append('resource', 'https://analysis.windows.net/powerbi/api');
    formDataParams.append('scope', 'openid');
    formDataParams.append('username', 'themi.medamijn@esprit.tn');
    formDataParams.append('password', 'Amine22031997');



    this.powerBiservice.getApiToken(formDataParams).subscribe(
      data => {
        console.log("token", data);
      },
      error => {
        alert('TOKEN NOT TAKEN');
        console.log('Token not taken', error);
        console.log('Token not taken formDataParams', formDataParams);

      })
      ;
  }



  myProfile = this.formBuilder.group({
    id: [],
    email: [''],
    username: [''],
  });

  ngOnInit() {
    this.id = localStorage.getItem('username');

    this.loginservice.getOneUser(this.id).subscribe(
      data => {
        this.Myuser = data;
        this.myProfile.setValue({
          id: this.Myuser.id,
          email: this.Myuser.email,
          username: this.Myuser.username
        });


      });

  }


}
