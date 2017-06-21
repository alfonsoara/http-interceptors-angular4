import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  providers: [ HomeService ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private _homeService: HomeService
  ) { }

  ngOnInit() { 

    this.getTodos()
  }

  getTodos(){
    this._homeService.getTodos().subscribe(
      data => {
        console.log(data,'data');
      },
      err => {
        console.log(err,'this is err');
      })
    }

}
