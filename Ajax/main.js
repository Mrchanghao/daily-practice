$(document).ready(function () {
  //your code here
var url = 'https://baconipsum.com/api/?type=meat-and-filler'  
$("#btn").click(function(){
  
  $.ajax({
    method: "GET",
    url: url
  })
  .done(addP)
  .fail(function(err){
    console.log(err);
  })

});

function addP(data) {
  $('p').text(data[2]);
}

// $("#getBtn").click(function(){
//   $.get('https://api.github.com/users/Mrchanghao').done(function(data){
//     console.log(data);
//   }).fail(function(err){
//     console.log(err);
//     console.log('err');
//     })
// });

// $('#postBtn').click(function(){
//   var data = {name: 'changhao'};
//   $.post('www.catsarecoolandsoaredogs.com', data).done(function(data){
//     console.log(data);
//   }).fail(function(){
//     console.log('error');
//   })
// });

// $("#getJSONBtn").click(function(){

// });

var $image = $('img');
var catUrl = 'https://random.cat/meow';
$('.btn-click').click(function(){
  $.get(catUrl)
  .done(function(data){
    console.log(data.file);
    var catPhoto = $image.attr('src', data.file);
    // console.log(catPhoto);
    $image.src = catPhoto;
  }).fail(function(err){
    console.log(err);
  })
})



});
// ajax 문법
// $.ajax({
//   method: "GET",
//   url: 'some.api.com'
// })
// .done(function(res){
//   console.log(res);
// })
// .fail(function(){
//   // do code error handling
// })