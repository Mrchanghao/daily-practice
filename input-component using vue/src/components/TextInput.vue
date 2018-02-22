<template>
  <div id="input-text">
    <h4>성함은 어떻게 되시나요?</h4>
    <input type="text" :placeholder="placeholder">
  </div>

</template>

<script>
  
export default {
  props: ['placeholder']
}


</script>

<style scoped>
  
  input {
    font-size: 20px;
    border: 2px solid black;
    padding: 1rem;
    min-width: 30%; 
  }


</style>