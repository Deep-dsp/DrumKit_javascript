(() =>{
  // add an event listener to the window
  //and capture al the keyboard key process

  let keys = Array.from(document.querySelectorAll('.key'));

  keys.forEach(key => key.addEventListener('transitionend', resetkey));

  function resetkey()
  {
    this.classList.remove('playing');
  }

  function playsound(event)
  {
    // debugger;
    let audioElement = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    // ! is check for inequality
    // also called bang operator
    //if there is not matching audio element, then kill the funtion and do nothing
    if(!audioElement)
    {
      return;
    }

    audioElement.currentTime = 0;
    audioElement.play();

    key.classList.add('playing');
  }

  window.addEventListener('keydown', playsound);
})();
