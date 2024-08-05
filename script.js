
var arr = document.querySelectorAll(".con");
arr.forEach(function (val) {
  var nav = val.querySelector(".nav");
  var two = val.querySelector("#icontwo");
  var one = val.querySelector("#iconone");
  var block = val.querySelector("#block");
    var flag = 0;
    nav.addEventListener("click",function () {
    if (flag == 0) {
      block.style.display = "block";
      two.style.display = "block";
      one.style.display = "none";
      flag = 1;
    } else { 
      block.style.display = "none";
      two.style.display = "none";
      one.style.display = "block";
      flag = 0 ;
    }
  });
});
