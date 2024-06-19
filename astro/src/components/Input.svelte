<script>
  export let label;

  let value = "";
</script>

<div class="field">
  <label class="label" for="text">{label}</label>
  <input class="input" id="text" type="text" bind:value />
  <p class="text">Value: {value}</p>
</div>

<style>
  .field {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .label {
    color: orangered;
    font-weight: bold;
  }

  .input {
    @apply ring-orange-500 border-orange-500;
  }

  .text {
    color: orangered;
    font-weight: bold;
  }
</style>
