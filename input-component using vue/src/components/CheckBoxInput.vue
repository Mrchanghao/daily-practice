<template>
  <div id="checkbox-input">
    <h4>회사에서 사용하시고 있는 backEnd 언어는?</h4>
     <!-- <input type="checkbox"><label for="backend">javascript(node.js)</label>  
      <input type="checkbox"><label for="backend">java</label>  
      <input type="checkbox"><label for="backend">python</label>  
      <input type="checkbox"><label for="backend">ruby</label>  -->
      <div class="checkbox" v-for="(v, i) in options">
         <input type="radio" :name="name" :options="options">
         {{ v }}
      </div>
     
      
  </div>

</template>

<script>

export default {
  props: ['name', "options"]
}

</script>
