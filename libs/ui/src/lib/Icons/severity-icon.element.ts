import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

export class SeverityIcon extends HTMLElement {
  connectedCallback() {
    this.renderSeverityIcon();
  }

  private renderSeverityIcon() {
    this.innerHTML = `<p>severity-Icon...</p>`;
  }
}

if (!customElements.get('microfrontends-demo-severity-icon')) {
  customElements.define('microfrontends-demo-severity-icon', SeverityIcon);
}
