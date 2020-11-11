score = 0;
cross = true;
document.onkeydown = function(e){
    console.log("Key code is:" , e.keyCode)
    if(e.keyCode==38){
        sinchan = document.querySelector('.sinchan');
        sinchan.classList.add('animateSinchan');
        setTimeout(()=> {
            sinchan.classList.remove('animateSinchan')

        }, 700);        
    }
    if(e.keyCode==39){
        sinchan = document.querySelector('.sinchan');
        sinchanX = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('left'));
        sinchan.style.left = sinchanX + 112 + "px"        
    }
    if(e.keyCode==37){
        sinchan = document.querySelector('.sinchan');
        sinchanX = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('left'));
        sinchan.style.left = (sinchanX - 112) + "px"        
    }
}

setInterval(() => {
    sinchan = document.querySelector('.sinchan');
    gameOver =  document.querySelector('.gameOver');
    obstacle =  document.querySelector('.obstacle');

    sx = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('left'));
    sy = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(sinchan,null).getPropertyValue('top'));

    offsetX = Math.abs(sx-ox);
    offsetX = Math.abs(sy-oy);
    console.log(offsetX, offsetY)
    if(offsetX< 93 && offsetY<52){
        gameOver.style.visibility = 'visible';
        obstacle.classList.remove('obstacleLion')
    }
    else if(cross){
        score+=1;
        updateScore(score)
    }
}, 100);

function updateScore(score){
    scoreCont.innerHTML = "Your score:" + score
}