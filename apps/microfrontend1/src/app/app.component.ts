import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  title = 'microfrontend1';
}
