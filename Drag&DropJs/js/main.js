// get filled box
const fill = document.querySelector(".fill");
//get all empty boxes in a node list with All
const empties = document.querySelectorAll(".empty");

//fill listener events
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);
//mobile fill listener events
fill.addEventListener("touchend", touchEnd);
fill.addEventListener("touchstart", touchStart);

//loop through empties and call drag events
for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
  empty.addEventListener("touchmove", touchMove);
}

//drag functions
function dragStart() {
  console.log("start");
  //append hold class
  this.className += " hold";
  setTimeout(() => (this.className = "invisible"), 0);
}

function dragEnd() {
  console.log("end");
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}

function dragEnter(e) {
  e.preventDefault();
  console.log("enter");
  //add class
  this.className += " hovered";
}

function dragLeave() {
  console.log("leave");
  // replace class with just one
  this.className = "empty";
}

function dragDrop() {
  console.log("drop");
  this.className = "empty";
  //append fill element
  this.append(fill);
}

//mobile touch functions
function touchStart(e) {
  console.log("mobile start");
  this.className += " hold";
}

function touchMove(e) {
  //grab touch locaiton
  const touchLocation = e.targetTouches[0];
  //assign fill to new location
  fill.style.left = touchLocation.pageX + "px";
  fill.style.top = touchLocation.pageY + "px";
  console.log(touchLocation);
}

function touchEnd(e) {
  this.className = "fill";
  //position when dropped
  const x = parseInt(fill.style.left);
  const y = parseInt(fill.style.top);
}
