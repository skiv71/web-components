<svelte:options tag="svelte-input-b"/>

<script>
    var input = {
        name: ``,
        get greeting() {
            return this.name ? `Hello, ${this.name}` : ``
        }
    }
</script>

<div>
    <p><strong>Svelte Element B</strong></p>
    <input bind:value={input.name} placeholder="Please enter your name"/>
    <span>{input.greeting}</span>
</div>
