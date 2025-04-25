function setup() {  //設定函數
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB
  colorMode(HSB, 360, 100, 100);
  //畫布顏色白色
  background(255);
}

function draw() {
  background(255);
  
  // 計算色相和亮度
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);
  
  // 設定圓形的顏色
  fill(hue, 100, brightness);
  noStroke();
  
  // 繪製圓形
  ellipse(mouseX, mouseY, 200, 200);
}

// 當視窗大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}