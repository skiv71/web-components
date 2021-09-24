<svelte:options tag="svelte-input"/>

<script>
    var name = ``
    $: greeting = name ? `Hello, ${name}` : ``
</script>

<div>
    <p><strong>Svelte Element</strong></p>
    <input bind:value={name} placeholder="Please enter your name"/>
    <span>{greeting}</span>
</div>
