<template>
  <div id="app">
    <h1>Javascript 프레임워크 선호도 조사</h1>
    <h3>{{ msg }}</h3>
    <div class="questionInput">
      <TextInput 
      placeholder="성함은 어떻게 되십니까?"></TextInput>
      <SelectInput name="frontend"
      :options="['react', 'vue', 'angular', 'backbone', 'meteor.js']"></SelectInput>
      <CheckBoxInput name="backend" :options="['ruby', 'node.js', 'python', 'java']"
       >
      </CheckBoxInput>
    </div>
    <div class="eventHandler"></div>
    <button type="button" class="btn" @click="submitData">SUBMIT</button>
  </div>
</template>

<script>
import TextInput from './components/TextInput';
import SelectInput from './components/SelectInput';
import CheckBoxInput from './components/CheckBoxInput';

export default {
  name: 'app',
  components: {
    TextInput,
    SelectInput,
    CheckBoxInput
  },
  data () {
    return {
      msg: '설문 조사에 응해 주신 여러분께 감사 드리며 설문 조사를 시작 하겠습니다',
      // frontEnds: ['react', 'vue', 'angular', 'backbone', 'meteor.js']
    }
  },
  methods: {
    submitData() {
      console.log('data 전송')
    }
  }
}
</script>

<style>
  #app {
    background: #00d2ff; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #00d2ff, #928dab); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #00d2ff, #928dab); 
    color: #fff;
    height: 100vh;
  }
  .eventHandler {
    margin-top: 2rem;
    border-bottom: 2px solid #fff;
  }
  .questionInput {
    margin-top: 2rem;

  }
  .btn {
    margin: 1rem;
    border: 2px solid transparent;
    border-radius: 10%;
    width: 8rem;
    height: 3rem;
  }

</style>
