import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badguy',
  templateUrl: './badguy.component.html',
  styleUrls: ['./badguy.component.css']
})
export class BadguyComponent  {

    name= 'Billie Eilish';
    
  constructor() { }

  ngOnInit(): void {
  }

}
