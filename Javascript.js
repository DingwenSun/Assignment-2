var tempX = 0;
var tempY = 0;
var item = document.getElementsByTagName('div');

function getMouseXY(e) {
    tempX = e.pageX;
    tempY = e.pageY;

  if (tempX < 0){tempX = 0;}
  if (tempY < 0){tempY = 0;}

  tempX = Math.floor(scale(tempX, 0, window.innerWidth, 20, 80));
  tempY = Math.floor(scale(tempY, 0, window.innerHeight, 20, 100));

  item[9].style.backgroundColor = `hsl(1, ${tempY}%, ${tempX}%)`;
  item[10].style.backgroundColor = `hsl(${tempX}, ${tempY}%, 20%)`;
  item[15].style.backgroundColor = `hsl(43, ${tempY}%, ${tempX}%)`;
  item[16].style.backgroundColor = `hsl(216, ${tempY}%, ${tempX}%)`;
  item[17].style.backgroundColor = `hsl(43, ${tempY}%, ${tempX}%)`;
  item[19].style.backgroundColor = `hsl(43, ${tempY}%, ${tempX}%)`;
  item[24].style.backgroundColor = `hsl(216, ${tempY}%, ${tempX}%)`;
  item[25].style.backgroundColor = `hsl(1, ${tempY}%, ${tempX}%)`;
  item[26].style.backgroundColor = `hsl(${tempX}, ${tempY}%, 5%)`;


  return true;
}

function scale(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

document.addEventListener("mousemove", getMouseXY);
