import AmazingElement from "./amazingElement.js";

export default class Hello extends AmazingElement {
    render() {
        return /*html*/`<span>Hello, ${this.props.name}!</span>`;
    }
}

window.customElements.define('hello-component', Hello);