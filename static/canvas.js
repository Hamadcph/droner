 class Canvas

{
  constructor(width, height){
    this.width = width;
    this.height = height;   
    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(this.width / - 2, this.width / 2, this.height / 2, this.height / - 2, 1, 10000);
    this.renderer = new THREE.WebGLRenderer({ alpha: true });
    this.renderer.setSize(this.width, this.height);
    this.camera.position.z = 1000;
    this.raycaster = new THREE.Raycaster();
  }

  update(width, height){
    this.width = width;
    this.height = height;

    this.renderer.setSize(this.width, this.height);
    this.camera.left = (this.width / - 2);
    this.camera.right = (this.width / 2);
    this.camera.top = (this.height / 2);
    this.camera.bottom = (this.height / - 2);
    this.camera.position.z = 1000;
    this.camera.updateProjectionMatrix();
  }

  render(){
    this.renderer.render(this.scene, this.camera);
  }
}