export class SeverityIcon extends HTMLElement {
  connectedCallback() {
    this.renderSeverityIcon();
  }

  private renderSeverityIcon() {
    this.innerHTML = `<p>severity-Icon...</p>`;
  }
}

customElements.define('microfrontends-demo-severity-icon', SeverityIcon);
