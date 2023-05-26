import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-element',
  templateUrl: './sidenav-element.component.html',
  styleUrls: ['./sidenav-element.component.less']
})
export class SidenavElementComponent {

  @Input("title") public title: String = "";
  @Input("icon") public icon: String =  "assignment_late";
  @Input("href") public href: Array<String> = ["/"];



}
