var size = document.getElementById('content').clientHeight;
alert('ok');
if(size > 235) {
  document.getElementById('side').style.height = size+"px";
} else {
  alert((235-size)+"px");
  document.getElementById('content').style.paddingBottom = (235-size)+"px";

}
