window.onload=function(){
    setInterval(function(){
        const splash=document.getElementById('splash');
        splash.style.animationDelay="6s";
        document.querySelector('video').classList.add('splashToFadeOut');
    },);
    clearInterval;
    setInterval(() => {
        splash.style.display='none';
        document.getElementsByClassName('cont-f1')[0].style.display='block';
        document.querySelector('body').style.backgroundImage='url(./images/bg_intro.png)'
    },9000);
    clearInterval;
}
