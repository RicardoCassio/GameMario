const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const image_gameover = document.querySelector('.container-gameover');

const jump = () => {

    new Audio('./sounds/maro-jump.mp3').play();
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    },500);
};

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    
    console.log(marioPosition)

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition + 25}px`;

        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '40px';

        new Audio('./sounds/super-mario-bros-gameover.mp3').play();

        image_gameover.style.opacity = '100%';
        image_gameover.style.animation = 'gameover-animation 2s linear';

        clearInterval(loop);
    };
}, 10);

document.addEventListener('keydown', jump);