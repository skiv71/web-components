<svelte:options tag="svelte-input-a"/>

<script>
    var name = ``
    $: greeting = name ? `Hello, ${name}` : `` // reactive (computed) property
</script>

<div>
    <p><strong>Svelte Element A</strong></p>
    <input bind:value={name} placeholder="Please enter your name"/>
    <span>{greeting}</span>
</div>
