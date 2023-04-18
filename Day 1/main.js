function playSound (e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //termina la funcion para evitar reproducir todos los audios
    audio.currentTime = 0; //rebobina el audio al principio
    audio.play();
    key.classList.add('playing');
    
}

function removeTransition(e){
    if(e.propertyName !== 'transform') return; // lo saltea si no es un transform en el css 
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
window.addEventListener('keydown', playSound); 