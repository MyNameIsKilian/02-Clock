document.addEventListener("DOMContentLoaded", (e) => {
  
  const secondHand = document.querySelector(".second")
  const minHand = document.querySelector('.min')
  const hourHand = document.querySelector('.hour')
  

  const setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds()
    const secondsDegrees = (seconds * 6) + 90
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    
    const mins = now.getMinutes()
    const minsDegrees = (mins * 6) + 90
    minHand.style.transform = `rotate(${minsDegrees}deg)`

    const hours = now.getHours()
    const hoursDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
  }

  setInterval(setDate, 1000);
})
