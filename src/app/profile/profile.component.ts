import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userList: any[] = [];
  constructor(private api: RegisterService) { }
  ngOnInit(): void {
    this.getUserList();
  }

  getUserList() {
    this.api.userList().subscribe((res: any) => {
      if(res){

        this.userList = res
      }
    })
  }


}
