import { WindowRefService } from './../window-ref.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private windowRef: WindowRefService) { }

  ngOnInit(): void {
  }

}
