 class Circle
{
  constructor(box, canvas, navigator){
    this.geometry = new THREE.SphereBufferGeometry(box.size, box.size);
    this.edges = new THREE.EdgesGeometry(this.geometry);
    this.line = new THREE.LineSegments(this.edges, new THREE.LineBasicMaterial({ color: box.color }));
    this.mesh = new THREE.Mesh(this.geometry, this.line)
    
    this.line.position.x = box.position.x;
    this.line.position.y = box.position.y;
    this.line.position.z = box.position.z;

    this.canvas = canvas;
    this.navigator = navigator;

    //animation
    this.moveAnimation = false;

    this.roamX = this.navigator.randCoOrd();
    this.roamY = this.navigator.randCoOrd();

    this.ray = false;
  }

  spin(){
    this.line.rotation.x += 0.09;
    this.line.rotation.y += 0.09;
  }

  roam(){
    let x = this.roamX;
    let y = this.roamY;

    let v = new THREE.Vector3(x, y, 0);

    this.spin();
    this.line.position.add(v);
    this.canvas.render();
    

    if(this.navigator.isOutOfBoundsX(this.line.position.x)){
      this.roamX = x = (x < 0) ? (x * -1) : (0 - x);
    }

    if(this.navigator.isOutOfBoundsY(this.line.position.y)){
      this.roamY = y = (y < 0) ? (y * -1) : (0 - y);
    }
  }
}

