import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from 'src/app/card.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  @Input() card: Card;
  @Output() pickedCard$= new EventEmitter(null);
  constructor() { }

  ngOnInit(): void {
  }

  selectedAnswer(card){
    this.pickedCard$.emit(card);
  }

}
