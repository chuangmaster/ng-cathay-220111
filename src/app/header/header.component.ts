import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  sitename = 'The Will Will Web';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.sitename = 'Hello Zhan!';
    }, 2000);
  }

  changeSiteName(event: MouseEvent) {
    alert('you click me');
    if (event.ctrlKey) {
      this.sitename = 'you press ctrl and change name';
    }
  }
  pressEnter(event: KeyboardEvent) {
    alert("you press enter!");
  }
}
