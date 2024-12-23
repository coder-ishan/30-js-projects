window.addEventListener('keydown',function(e){
        let audio =  this.document.querySelector(`audio[${e}]`);
        console.log(e);
        audio.play();
})

console.log('a')

