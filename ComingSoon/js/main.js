//countdown element
const countdown = document.querySelector(".countdown");

//set Launch Date w/ get time to get milliseconds
const launchDate = new Date("Jan 1, 2019 13:00:00").getTime();

//update every second -- intervals counted in milliseconds
const interval = setInterval(() => {
  //get today's date and time
  const now = new Date().getTime();

  //calculate distance btwn now and launchdate
  const distance = launchDate - now;

  //Time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //display calculations in countdown el
  countdown.innerHTML = `
  <div>${days} <span>days</span></div>
  <div>${hours} <span>hours</span></div>
  <div>${minutes} <span>mins</span></div>
  <div>${seconds} <span>seconds</span></div>`;

  //check for launch date
  if (distance < 0) {
    //stop countdown
    clearInterval(interval);
    countdown.style.color = "#17a2b8";
    countdown.innerHTML = "Launched!";
  }
}, 1000);
