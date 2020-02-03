import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'microfrontends-demo-root-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'shell';
  public selectedElement: string;

  config = {
    microfrontend1: {
      loaded: false,
      path: 'http://localhost:4231/main.js',
      element: 'microfrontends-demo-root'
    },
    microfrontend2: {
      loaded: false,
      path: 'http://localhost:4232/main.js',
      element: 'microfrontends-demo-root'
    },
    search: {
      loaded: false,
      path: 'http://localhost:4233/main.js',
      element: 'gs-nx-root'
    }
  };

  ngOnInit() {
    this.load('microfrontend1');
  }

  load(name: string) {
    this.selectedElement = name;
    const configItem = this.config[name];

    if (configItem.loaded) {
      return;
    }

    const content = document.getElementById('content');
    const script = document.createElement('script');

    content.innerHTML = '';

    script.src = configItem.path;
    content.appendChild(script);

    const element: HTMLElement = document.createElement(configItem.element);
    content.appendChild(element);
  }
}
