//@ts-check

import { LitElement, html } from 'lit';

class litInput extends LitElement {

    static get properties() {
        return {
            input: {},
            name: {}
        };
    }

    constructor() {
        super();
        this.input = ``;
        this.name = ``;
    }

    inputChanged(e) {
        this.name = e.target.value
            ? `Hello ${e.target.value}`
            : ``;
    }

    render() {
        return html`
            <div>
                <p><strong>Lit Element</strong></p>
                <input value="${this.input}" @input="${this.inputChanged}" placeholder="Please enter your name"/>
                <span>${this.name}</span>
            </div>
        `;
    }

}

customElements.define(`lit-input`, litInput);
