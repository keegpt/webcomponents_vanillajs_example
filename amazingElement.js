export default class AmazingElement extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }

    get props() {
        return this._props;
    }

    set props(value) {
        this._props = value;
        this.html = this.render();
    }

    set html(value) {
        this.shadow.innerHTML = value;
    }

    connectedCallback() {
        this.html = this.render();
    }

    render() {
        return /*html*/``;
    }

}