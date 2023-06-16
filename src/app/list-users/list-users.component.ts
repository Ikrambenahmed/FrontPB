import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'app/models/user/User';
import { UserService } from 'app/service/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  searchText;
  role_User:string ='' ;
   listUsers: User[] = new Array();
   sortbyParam="";
   sortDirection="";
   totalRows=0;
   users : any = [];
   radioStatus: boolean;
  constructor(private fb:FormBuilder, private loginService: UserService) { }

  ngOnInit(): void {

    this.loginService.GetAllUsers().subscribe(
      data => { 
        console.log('dataa',data) ;
        this.users =  data;
        console.log(this.users);
     this.totalRows=this.users.length;
       } ,
       error => console.log(error) 
       ) ; 
  }

}
