<template>
  <div id="radio-input">
    <h4>사용하시는 프론트 라이브러리나 프레임워크는?</h4>
    <select>
      <option v-for="(v, i) in options" :options="options" :name="name" :id="i">{{v}}</option>
    </select>

  </div>

</template>

<script>

export default {
 props: ['options', 'id', 'name']


}

</script>
<style scoped>
  
  select {
    width: 14%;
    font-size: 1rem;
  }

</style>