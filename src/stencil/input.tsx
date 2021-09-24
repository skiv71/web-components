import { Component, Prop } from '@stencil/core';

@Component({
    tag: 'stencil-input',
})

export class MyComponent {

    @Prop() input: string;
    @Prop() name: string;
    
    inputChanged(e) {
        this.name = e.target.value
            ? `Hello ${e.target.value}`
            : ``;
    }

    render() {
        return (
            <div>
                <p><strong>Stencil Element</strong></p>
                <input value={this.input} onInput={this.inputChanged} placeholder="Please enter your name"/>
                <p>${this.name}</p>
            </div>
        )
    }
}
