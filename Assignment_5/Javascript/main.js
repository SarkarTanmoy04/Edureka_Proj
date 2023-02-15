var a=["C++","Python","HTML","CSS","Javascript"];
function myFunc1(){
  alert(a);
}

function find_largest(){
    var first_num=parseInt(document.getElementById("test").value);
    var second_num=parseInt(document.getElementById("second_value").value);
    var third_num=parseInt(document.getElementById("third_value").value);
    var result=Math.max(first_num,second_num,third_num);
    console.log(result);
}
function mousehover(){
    alert("You have moved the mouse on the button");
}
function collect_name(){
    var name = prompt("Enter your name: ");
    if (name === ""){
      alert("Sorry, you have not entered any name");
    }
    else{
      var store_name = document.querySelector("#stored_name");
      stored_name.innerHTML = `Hello ${name} Welcome`;
    }
}