let images = [
    'url("./images/clr01.png")',
    'url("./images/clr02.png")',
    'url("./images/clr02.png")',
    'url("./images/clr03.png")',
    'url("./images/clr04.png")',
    'url("./images/clr05.png")',
    'url("./images/clr06.png")',
    'url("./images/clr07.png")',
    'url("./images/clr08.png")',
    'url("./images/clr09.png")',
    'url("./images/clr10.png")',
    'url("./images/clr11.png")',
    'url("./images/clr12.png")',
    'url("./images/clr13.png")',
    'url("./images/clr14.png")',
    'url("./images/clr15.png")',
    'url("./images/clr16.png")',
];
let body = document.querySelector("body");
body.onclick = function(e) {
    let x = e.pageX - e.target.offsetLeft;
    let y = e.pageY - e.target.offsetTop;

    let splash = document.createElement('span');
    splash.style.left = x + 'px';
    splash.style.top = y + 'px';

    let bg = images[Math.floor(Math.random() * 
    images.length)];
    splash.style.backgroundImage = bg;

    this.appendChild(splash);

    setTimeout(() => {
        splash.remove();
    }, 4000);
}