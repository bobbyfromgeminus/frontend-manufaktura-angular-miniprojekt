import { Component, Input, OnInit } from '@angular/core';
import { Mask } from 'src/app/model/mask';

@Component({
  selector: 'app-mask-card',
  templateUrl: './mask-card.component.html',
  styleUrls: ['./mask-card.component.scss']
})
export class MaskCardComponent implements OnInit {

  @Input() msk: Mask = new Mask;
  
  constructor() { }

  ngOnInit(): void {
  }

}
