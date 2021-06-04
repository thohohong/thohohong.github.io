window.onload = function() {
  var temp = location.href.split("?");
  changeContents("newpage", temp[1]);
  
}

function changeContents(id, filename){
  document.getElementById(id).innerHTML="<object type='text/html' width='100%' data='/article/"+ filename +".html'></object>";
}