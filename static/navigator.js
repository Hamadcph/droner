 class Navigator{
    constructor(boundryX, boundryY, canvas){
      this.boundryX = boundryX;
      this.boundryY = boundryY;
      this.canvas = canvas;
    }
  
    isOutOfBoundsX(x){
      return ((x >= this.boundryX) || (x <= (0 - this.boundryX)));
    }
  
    isOutOfBoundsY(y){
      return ((y >= this.boundryY) || (y <= (0 - this.boundryY))); 
    }
  
    randCoOrd(){
      let x = 10;
      return x 
    }
  
    update(boundryX, boundryY) {
      this.boundryX;
      this.boundryY;
    }
  }
  