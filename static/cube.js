 class Cube
{
  constructor(box, canvas, navigator){
    this.geometry = new THREE.BoxBufferGeometry(box.size, box.size, box.size);
    this.edges = new THREE.EdgesGeometry(this.geometry);
    this.line = new THREE.LineSegments(this.edges, new THREE.LineBasicMaterial({ color: box.color }));
    this.mesh = new THREE.Mesh(this.geometry, this.line)
    
    this.line.position.x = box.position.x;
    this.line.position.y = box.position.y;
    this.line.position.z = box.position.z;

    this.canvas = canvas;
    this.navigator = navigator;
    this.moveAnimation = false;

    this.roamX = this.navigator.randCoOrd();
    this.roamY = this.navigator.randCoOrd();
    this.size = box.size;

    this.ray = false;

  }
}
