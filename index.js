window.onload=function(){
    setInterval(function(){
        const splash=document.getElementById('splash');
        splash.style.animationDelay="6s"
        document.querySelector('video').classList.add('splashToFadeOut');
    },);
    clearInterval;
    setInterval(() => {
        splash.style.display='none';
    },9000);
    clearInterval;
    
}
