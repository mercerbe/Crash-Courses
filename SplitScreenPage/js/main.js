document.addEventListener("DOMContentLoaded", function() {
  let wrapper = document.getElementById("wrapper");
  // grab any selector with the class of '.x' the wrapper variable
  let topLayer = wrapper.querySelector(".top");
  let handle = wrapper.querySelector(".handle");
  let skew = 0;
  let delta = 0;

  // wrapper skew
  if (wrapper.className.indexOf("skewed") != -1) {
    skew = 1000;
  }

  // wrapper mouse move
  wrapper.addEventListener("mousemove", function(e) {
    delta = (e.clientX - window.innerWidth / 2) * 0.5;
    //grab position of mouse
    //console.log(e.clientX);
    //console.log(e.clientY)

    handle.style.left = e.clientX + delta + "px";

    topLayer.style.width = e.clientX + skew + delta + "px";
  });
});
