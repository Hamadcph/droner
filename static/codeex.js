
//Main
const canvas = new Canvas(window.innerWidth, window.innerHeight);
const navigator = new Navigator(window.innerWidth / 2, window.innerHeight / 2, canvas);
const circles = [];

// for(var x = 0, xl = 10; x != xl; ++x){
//   var number = (Math.floor(Math.random()*500) - 500)
//   let circle = new Circle({ 
//     size: 30, 
//     color: "white", 
//     position: { 
//       x: Math.floor(Math.random()*500) + number,
//       y: Math.floor(Math.random()*500) + number,
//       z: 0
//       } 
//     }, 
//     canvas, 
//     navigator
//   );

//   canvas.scene.add(circle.line);
//   canvas.render();
//   circles.push(circle);
// }
let cube = new Cube({ 
  size: 100, 
  color: "blue", 
  position: { 
    x: -200, 
    y: 200, 
    z: 0
    } 
  }, 
  canvas, 
  navigator
);
canvas.scene.add(cube.line);
canvas.render();
circles.push(cube);



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
      let tempCollision = check_if_collision(circles[x],circles[circles.length-1],13);
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
        // circles[circles.length-1].roamX = -circles[circles.length-1].roamX;
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