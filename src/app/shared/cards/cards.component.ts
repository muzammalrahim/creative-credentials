import { Component, OnInit, Input } from '@angular/core';
import { inputs } from '@syncfusion/ej2-angular-richtexteditor/src/rich-text-editor/richtexteditor.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  constructor() { }
  @Input() statCardData;
  @Input() no;
  ngOnInit() {
    console.log("In cards.........",this.statCardData);
  }

}
