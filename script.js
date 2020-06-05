
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("span");
  // \u00D7 refer to small x
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  //add the text to the span tag
  span.appendChild(txt);
  //appen span close to all li tag
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
//get all which belongs to the class name close
var close = document.getElementsByClassName("close");
var i;
//iterate through it
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    //refer to li tag
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    //when using tagName must be in capital letters
  if (ev.target.tagName === 'LI') {
    //changes between to class
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  //add the text to li element
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    //add the generated li to ul
    document.getElementById("myUL").appendChild(li);
  }
  //make the input empty back
  document.getElementById("myInput").value = "";

  //add close button to the new created list
  var span = document.createElement("span");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      //this.parentElement refer to the li which the span belongs
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
