<script lang="ts">
  export let label: string;

  let value: string = "";
</script>

<div>
  <label for="text">{label}</label>
  <input id="text" type="text" bind:value />
  <p>{value}</p>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
</style>
