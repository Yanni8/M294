import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-element',
  templateUrl: './sidenav-element.component.html',
  styleUrls: ['./sidenav-element.component.less']
})
export class SidenavElementComponent {

  @Input() public title = "";
  @Input() public icon =  "assignment_late";
  @Input() public href: Array<string> = ["/"];


  @Output() public changeRef = new EventEmitter<void>(); 

}
