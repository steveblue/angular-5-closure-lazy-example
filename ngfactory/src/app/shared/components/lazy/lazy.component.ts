import { Component, OnDestroy } from '@angular/core';

@Component({

  selector: 'cmp-prefix1-app-lazy',
  templateUrl: 'lazy.component.html',
  styleUrls: ['lazy.component.css']
})

export class LazyComponent implements OnDestroy {

  angularMode: string;

  constructor() {

    this.angularMode = 'active';

  }

  ngOnDestroy() {

    this.angularMode = 'inactive';

  }

}
