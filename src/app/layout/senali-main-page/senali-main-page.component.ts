import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-senali-main-page',
  templateUrl: './senali-main-page.component.html',
  styleUrls: ['./senali-main-page.component.scss']
})
export class SenaliMainPageComponent {
  isHomepage: boolean = window.location.pathname == "/" ? true : false;
}
