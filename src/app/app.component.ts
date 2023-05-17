import { Component } from '@angular/core';
import {UsersdataService} from './services/usersdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';
  userData:any=[];
  constructor(private userdataService:UsersdataService){
    this.userdataService.getuserData().subscribe(data=>{
      this.userData=data;
      console.log(data)
    })
  }
}
