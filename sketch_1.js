function setup() {  //設定函數
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //畫布顏色faf3dd
    background(250, 243, 221);
    //畫布中心點
    //createCanvas(400, 400); //創建畫布
  }
  
  function draw() {
    background(220);
    //畫布顏色faf3dd
    background(250, 243, 221);
    //在視窗的中間畫一個圓，圓的寬高為200
    //ellipse(windowWidth/2, windowHeight/2, 200, 200);
    //畫圓的顏色為ffa69e()
    fill(255, 166, 158);
    //畫圓的邊框為f7b267
    stroke(247, 178, 103);
    //畫圓的邊框寬度為10
    strokeWeight(10);
    //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最左邊
    for (let i = 0; i < windowWidth; i += 200) {
      ellipse(i, windowHeight/2, 200, 200);
    }
  }
  //當視窗大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }