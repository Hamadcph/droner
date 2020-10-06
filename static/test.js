
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
    let x = Math.random() * 2 + 1;
    return x *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  }

  update(boundryX, boundryY) {
    this.boundryX;
    this.boundryY;
  }
}

//Main
const canvas = new Canvas(window.innerWidth, window.innerHeight);
const navigator = new Navigator(window.innerWidth / 2, window.innerHeight / 2, canvas);
const circles = [];

for(var x = 0, xl = 10; x != xl; ++x){
  var number = (Math.floor(Math.random()*500) - 500)
  let circle = new Circle({ 
    size: 30, 
    color: "white", 
    position: { 
      x: Math.floor(Math.random()*500) + number,
      y: Math.floor(Math.random()*500) + number,
      z: 0
      } 
    }, 
    canvas, 
    navigator
  );

  canvas.scene.add(circle.line);
  canvas.render();
  circles.push(circle);
}

let circle2 = new Circle({ 
  size: 30, 
  color: "green", 
  position: { 
    x: 0, 
    y: 0, 
    z: 0 
    } 
  }, 
  canvas, 
  navigator
);
circle2.name = 'circle2'
canvas.scene.add(circle2.line);
canvas.render();
circles.push(circle2);



function check_if_collision(drone_pos, obstacle_pos, tolerance) {

  x = Math.abs((drone_pos.line.position.x - obstacle_pos.line.position.x)^2);
  y = Math.abs((drone_pos.line.position.y - obstacle_pos.line.position.y)^2);
  var distance = Math.abs(Math.sqrt(x + y))
      //  console.log(distance, tolerance)

    if (distance < tolerance) {
      console.log(x > y)
        if(x > y){
          return "X";
        } else if(x < y) {
          return "Y";
        } else {
          return "="
        }
    }
    else {

        return false;

  }
}


function animation(){
  let collission = false;

  circles[circles.length-1].roam();
  for (var x = 0, xl = circles.length; x != xl; ++x) {
    //circles[x].roam();
    if(!circles[x].name){
      let tempCollision = check_if_collision(circles[x],circles[circles.length-1],10);
      if(tempCollision){
        collission = tempCollision;
      }
    }
  }
    if(collission){
      console.log(collission)
      if(collission == "X"){
        console.log("RAMTE X")
        circles[circles.length-1].roamX = -circles[circles.length-1].roamX;
      } else if(collission == "Y"){
        console.log("RAMTE Y")
        circles[circles.length-1].roamY = -circles[circles.length-1].roamY;
      } else {
        console.log("RAMTE =")
        circles[circles.length-1].roamX = -circles[circles.length-1].roamX;
        circles[circles.length-1].roamY = -circles[circles.length-1].roamY;
      }
    }
    // console.log(collission)
    // console.log(check_if_collision(circles[0],circles[1],5))
    // console.log(circles)
  
  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);


window.addEventListener("resize", () => { 
  canvas.update(window.innerWidth, window.innerHeight);
  navigator.update(window.innerWidth / 2, window.innerHeight / 2);
}, false);

document.body.appendChild(canvas.renderer.domElement);