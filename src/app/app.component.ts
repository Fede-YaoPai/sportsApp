import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'sportsApp';
  public loading: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe(e => {
      this.setLoadingState(e);
    })
  }

  private setLoadingState(routingEvent: any): void {
    if (routingEvent instanceof NavigationStart) {
      this.loading = true;
    }
    else if (routingEvent instanceof NavigationEnd ||
      routingEvent instanceof NavigationCancel ||
      routingEvent instanceof NavigationError) {
      this.loading = false;
    }
  }

}


