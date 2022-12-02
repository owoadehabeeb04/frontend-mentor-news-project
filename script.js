const hamburger = document.querySelector(".hamburger")
const linksdiv = document.querySelector(".navs")
hamburger.addEventListener('click', () => {
    linksdiv.classList.add('show');
    console.log("done") 
  })
  const closebutton = document.querySelector(".button")
  closebutton.addEventListener('click', () => {
    linksdiv.classList.remove('show');
    console.log("done") 
  })