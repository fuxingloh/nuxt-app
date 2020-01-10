<template>
    <section>
      <h3>Text Input</h3>
      <text-input label="Label" placeholder="Place Holder" value="Value"/>
    </section>
</template>

<script>
  import TextInput from "../utils/TextInput";
  export default {
    name: "ExampleTextInput",
    components: {TextInput}
  }
</script>
