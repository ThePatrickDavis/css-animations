var slide = 0;

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: 
            moveBackward();
            break;
        case 39:
            moveForward();
            break;
        default:
            console.log(e.keyCode);
            break;  
    }
}

function moveForward() {
    var curSlide = slide;

    slide++;
    console.log(slide);
    var slideName = 'slide' + slide;
    var el = document.getElementById(slideName);
    if(el) {
      el.className += el.className ? ' ' + slideName  : slideName;
    }

    el = document.getElementById(curSlide);
    if(el) {
        el.className = 'slide';
    }
}

function moveBackward() {
    var curSlide = slide;
    if(curSlide > 1) {
        slide--;
        console.log(slide);
    
        var slideName = 'slide' + slide;
        var el = document.getElementById(slideName);
        if(el) {
          el.className += el.className ? ' ' + slideName  : slideName;
        }
    
        el = document.getElementById('slide' + curSlide);
        if(el) {
            el.className = 'slide';
        }
    }
    
}