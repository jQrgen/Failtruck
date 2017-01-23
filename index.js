console.log("HELLO");
document.addEventListener("DOMContentLoaded", function(event) {
  console.log("HALLA");
  var elementOne = document.getElementById('one');
  var elementTwo = document.getElementById('two');
  var elementThree = document.getElementById('three');
  var elementFour = document.getElementById('four');
  var elementFive = document.getElementById('five');
  var elementSix = document.getElementById('six');
  var elements = [elementOne, elementTwo, elementThree, elementFour, elementFive, elementSix];


  for (var j = 0; j < elements.length; j++) {
      console.log(elements[j]);
      //Do something

      var string1 = elements[j].innerHTML;
      var first = true;
      for (var i = 0, len = string1.length; i < len; i++) {
        console.log(isSpace(string1[i]));
        if(first){
          elements[j].innerHTML = string1[0];
          first = false;
        }else{
          if(isSpace(string1[i])){
            elements[j].innerHTML += "&nbsp;";
          }else{
            elements[j].innerHTML += string1[i];
          }

        }
      }
  }

  function isSpace(string){
    if(string === " "){
      return true;
    }
    return false;
  }

  //elementOne.innerHTML = string1;
  // iterate string
  // replace whitespace with &nbsp;
});
