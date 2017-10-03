import { Component, OnDestroy } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cmp-prefix1-app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css']
})

export class HomeComponent implements OnDestroy {

  stealthMode: string;

  constructor() {

    this.stealthMode = 'active';

  }

  ngOnDestroy() {

    this.stealthMode = 'inactive';

  }

}
