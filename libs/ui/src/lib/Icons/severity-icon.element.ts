import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export class SeverityIcon extends HTMLElement {
  connectedCallback() {
    this.renderSeverityIcon();
  }

  private renderSeverityIcon() {
    this.innerHTML = `<p style="background: blue; width: 200px; height: 200px; color: white">This is a shared component...</p>`;
  }
}

if (!customElements.get('microfrontends-demo-severity-icon')) {
  customElements.define('microfrontends-demo-severity-icon', SeverityIcon);
}
