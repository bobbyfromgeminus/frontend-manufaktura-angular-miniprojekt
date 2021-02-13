import { Component } from '@angular/core';
import { Mask } from './model/mask';
import { MaskService } from './service/mask.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'maszkmester maszkok';

  maskList: Mask[] = this.maskService.list;

  constructor(private maskService: MaskService) {

  }

}
