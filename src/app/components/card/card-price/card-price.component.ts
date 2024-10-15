import { Component, Input, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrl: './card-price.component.css'
})
export class CardPriceComponent implements OnInit {

  @Input()
  gameType:string = "Digital PS4";
  @Input()
  gamePrice:string = "R$ 399,90";


  constructor() {

  }

  ngOnInit(): void {
      
  }

}
