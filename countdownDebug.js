let time = 5;

 let set=setInterval(() => {
  if (time >= 0) {
    console.log(`Time left: ${time} seconds`);
    time--;
    
  } else {
    console.log('Countdown finished!');
    clearInterval(set);
  }
}, 1000);

