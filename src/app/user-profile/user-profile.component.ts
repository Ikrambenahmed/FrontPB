import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/models/user/User';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {
  role: string;
  submitted:boolean=false;
  result:any;
  Myuser: User ;
  u:any; 
  id : any; 

  constructor(private loginservice: UserService, private formBuilder:FormBuilder) { 

  }

  myProfile=this.formBuilder.group({
    id:[],
    email:[''],
    username:[''],});

roles: any ; 

  ngOnInit() {
  this.id= localStorage.getItem('username') ; 

  this.loginservice.getOneUser(this.id).subscribe(
  data => {  
      console.log("my user profil", data);
      this.Myuser=data;
      this.myProfile.setValue({
        id: this.Myuser.id,
        email:this.Myuser.email,
        username:this.Myuser.username
            });});
  }

Update()
{
  this.u = new User() ; 
  this.u.id = this.myProfile.value['id'] ; 
  this.u.username=this.myProfile.value['username'] ; 
  this.u.email=this.myProfile.value['email'] ;

  console.log('uuu'+this.u);
this.u = JSON.stringify(this.u) ; 
console.log('uuu'+this.u);

  this.loginservice.updateProfile(this.u).subscribe((res)=>{
    alert('Update profile is done');
  });

}
}

