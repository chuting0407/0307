function setup() {  //設定函數
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight);
    //設定顏色模式為HSB
    colorMode(HSB, 360, 100, 100);
    //畫布顏色faf3dd
    background(250, 243, 221);
  }
  
  function draw() {
    background(250, 243, 221);
    
    // 根據滑鼠的 X 軸位置計算大小，範圍從 100 到 500
    let size = map(mouseX, 0, windowWidth, 100, 500);
    
    // 計算每個形狀之間的間距
    let cols = floor(windowWidth / size);
    let rows = floor(windowHeight / size);
    let spacingX = windowWidth / cols;
    let spacingY = windowHeight / rows;
    
    // 繪製一整排的方形和圓形
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let x = spacingX * i + spacingX / 2;
        let y = spacingY * j + spacingY / 2;
        
        // 繪製方形
        fill((i * 30) % 360, 100, 100); // 使用HSB顏色格式
        stroke((i * 30 + 180) % 360, 100, 100); // 使用HSB顏色格式
        rectMode(CENTER);
        rect(x, y, size, size);
        
        // 繪製圓形
        fill((j * 30) % 360, 100, 100); // 使用HSB顏色格式
        stroke((j * 30 + 180) % 360, 100, 100); // 使用HSB顏色格式
        strokeWeight(10);
        ellipse(x, y, size, size);
      }
    }
  }
  
  // 當視窗大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }