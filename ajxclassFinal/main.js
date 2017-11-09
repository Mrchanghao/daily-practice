var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


var fetchBtn = document.querySelector('#fetch');
var quote = document.querySelector('#quote');
fetchBtn.addEventListener('click', function(){
  fetch(url)
  .then(function(res){
    if(!res.ok) {
      throw Error(res.status);
    } else {
      return res;
    }
  })
  .then(function(res){
    return res.json();
  })
  .then(function(data){
    console.log(data)
    quote.innerHTML = data;
  })
});
// axios  method
var axiosBtn = document.querySelector('#axios');

axiosBtn.addEventListener('click', function(){
  axios.get(url)
  .then(function(res){
    console.log(res.data[0]);
    quote.innerHTML = res.data[0];
  })
  .catch(function(err){
    console.log(err.status);
  })
})

//jquery method
$(document).ready(function () {
var $quote = $('#quote');
var url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
$('#jquery').click(function(){
  $.get(url)
  .done(function(data){
    console.log(data[0]);
$quote.html(data[0]);
  }).fail(function(err){
    console.log(err);
  })
})



})