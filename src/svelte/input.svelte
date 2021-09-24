<svelte:options tag="svelte-input"/>

<script>
    // with context (object), greeting is getter
    var input = {
        name: ``,
        get greeting() {
            return this.name ? `Hello, ${this.name}` : ``
        }
    }
    // OR native (me like)
    var name = ``
    $: greeting = name ? `Hello, ${name}` : ``
</script>

<div>
    <p><strong>Svelte Element 1</strong></p>
    <input bind:value={input.name} placeholder="Please enter your name"/>
    <span>{input.greeting}</span>
    <p>or</p>
    <p><strong>Svelte Element 2</strong></p>
    <input bind:value={name} placeholder="Please enter your name"/>
    <span>{greeting}</span>
</div>
