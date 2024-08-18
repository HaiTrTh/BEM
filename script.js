function toast({
  title="",
  content="",
  type ="",
  duration = 3000,
  fadeTime = 1000
}){
  const main = document.getElementById('main')
  const toast = document.createElement('div');
  toast.classList.add('toast', `toast--${type}`)
  const delay = (duration/1000).toFixed(2);
  const fade = (fadeTime/1000).toFixed(2);
  toast.style.animation = `slideIn 0.5s ease-in, fadeIn ${fade}s ${delay}s ease-in forwards`;
  const icons = {
    success : "fa-solid fa-circle-check",
    info : "fa-solid fa-circle-exclamation",
    warning: "fa-solid fa-triangle-exclamation",
    error: "fa-solid fa-xmark"
  }
  const icon = icons[type];
  toast.innerHTML = `
    <div class="toast__icon">
        <i class="${icon}"></i>
      </div>
      <div class="toast__body">
        <h2 class="toast__title">${title}</h2>
        <p class="toast__content">${content}</p>
      </div>
      <div class="toast__close">
        <i class="fa-solid fa-xmark"></i>
      </div>
  `
  main.appendChild(toast);
  toast.onclick = function(e){
     if(e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(timeRemove);
     }
  }

  
  const timeRemove = setTimeout(function(){
    main.removeChild(toast)
  },duration + fadeTime )
  
}

const btnSuccess = document.querySelector('.btn.btn--success')
const btnError = document.querySelector('.btn.btn--error')
btnSuccess.addEventListener('click', ()=>{
  toast({
    title:"Success",
    content:"Success Lorem ipsum dolor sit amet consectetur.",
    type: "success",
    duration: 3000
  })
})

btnError.addEventListener('click', ()=>{
  toast({
    title:"Error",
    content:"Error Lorem ipsum dolor sit amet consectetur.",
    type: "error",
    duration: 3000
  })
})