var slide = 1;

document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
        case 37: 
            slide--;
            console.log(slide);
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
    slide++;
    console.log(slide);
    var slideName = 'slide' + slide;
    var el = document.getElementById(slideName);
    if(el) {
      el.className += el.className ? ' ' + slideName  : slideName;
    }
}