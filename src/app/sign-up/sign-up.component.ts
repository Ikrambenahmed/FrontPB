import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'app/helpers/must-match.validator';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  submitted:boolean =false ;

  constructor(private fb : FormBuilder,private loginservice: UserService) { }
  
  userForm = this.fb.group({
    email:['',Validators.compose([Validators.required,Validators.minLength(4),Validators.email])],
    password :['',Validators.required]  , 
    username :['',Validators.required],
    plainPassword :['',Validators.required],
}, 
{
  validator: MustMatch('password', 'plainPassword')
});
  ngOnInit(): void {

  }


  Register()
  { this.submitted=true ;
    console.log('register') ; 
    const m = this.userForm.value ;
    console.log(m) ; 
    if(this.userForm.value.username=='' || this.userForm.value.email =='')
    {
      alert('add username and email');  }
else {
  if(this.userForm.value.password=='' || this.userForm.value.plainPassword =='')
  {
    alert('add passwords');  }
    else {
   if(this.userForm.value.password != this.userForm.value.plainPassword)
    {
  alert ('Please enter matching passwords') ; 
    }
   
  else
    {
    console.log('creation form :',m) ; 

    this.loginservice.create(m).subscribe(
      res => {
      console.log('the result',res) ; 
  
          alert('The add was done successfully') ; 
          this.userForm.reset({}) ;    
          this.ngOnInit();  
         },
         error=>{console.log(error);
          alert('Please verify your inputs') ; 
          ;}
    );}
  }}}
    
    }
  