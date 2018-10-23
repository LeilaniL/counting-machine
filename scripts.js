$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var startNumber = parseInt(($("input#startNumber")).val());
    var byNumber = parseInt(($("input#byNumber")).val());
    var endNumber = parseInt(($("input#endNumber")).val());
    for(var i = startNumber; i <=endNumber; i += byNumber){
      alert(startNumber);
      startNumber += byNumber;
    };
  })
})