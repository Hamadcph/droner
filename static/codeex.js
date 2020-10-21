
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
    x: -100, 
    y: 100, 
    z: 100
    } 
  }, 
  canvas, 
  navigator
);

canvas.scene.add(cube.line);
canvas.render();
circles.push(cube);
console.log(cube)

let cube2 = new Cube({ 
  size: 100, 
  color: "blue", 
  position: { 
    x: 200, 
    y: -100, 
    z: 0
    } 
  }, 
  canvas, 
  navigator
);
canvas.scene.add(cube2.line);
canvas.render();
circles.push(cube2);




function handleAllVector(listOfPoints) {

  return listOfPoints.map(this.handleOneVector);
}

function handleOneVector(singlePoint) {
  let value = new THREE.Vector3(singlePoint.a, singlePoint.b, singlePoint.c);
  return value;
}

function convertLocalVectorToWorld(listOfVectors, cube) {
  console.log("inside convertLocalVectorToWorld - cube", cube);
  console.log("inside convertLocalVectorToWorld - list", listOfVectors);

  let output = [];
  //return listOfVectors.map(mesh.localToWorld);
  for (let index = 0; index < listOfVectors.length; index++) {
    let temp = cube.line.localToWorld(listOfVectors[index]);
    output.push(temp);
  }

  return output;
}

console.log("the cube array", cube.geometry.faces[0]);

let value = this.handleOneVector(cube.geometry.faces[0]);
console.log("new vector", value);
console.log("the cube line - local to world",  cube.line.localToWorld(value));
console.log("the cube mesh - local to world", cube.mesh.localToWorld(value));
let listOfVectors = this.handleAllVector(cube.geometry.faces);

let listOfRealPoints = this.convertLocalVectorToWorld(listOfVectors, cube);

console.log("all local vectors points", listOfVectors);
console.log("all world points in the world", listOfRealPoints);
//console.log("single convert", cube.mesh.localToWorld(listOfVectors[0]));


let circle2 = new Circle({ 
  size: 10, 
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
circle2.name = 'circle2';
circle2.goals = [];
circle2.visitedGoal1 = false;
circle2.visitedGoal2 = false;
circle2.visitedGoal3 = false;
circle2.visitedGoal4 = false;
circle2.visitedGoal5 = false;
circle2.visitedGoal6 = false;
circle2.visitedGoal7 = false;
circle2.visitedGoal8 = false;
circle2.visitedGoal9 = false;
circle2.visitedGoal10 = false;
circle2.visitedGoal11 = false;
circle2.visitedGoal12 = false;
canvas.scene.add(circle2.line);
canvas.render();
circles.push(circle2);



function check_if_collision(drone_pos, obstacle_pos, tolerance) {

  // x = Math.abs((drone_pos.line.position.x - obstacle_pos.line.position.x)^2);
  // y = Math.abs((drone_pos.line.position.y - obstacle_pos.line.position.y)^2);
  // var distance = Math.abs(Math.sqrt(x + y))
  //     //  console.log(distance, tolerance)

  //   if (distance < tolerance) {
  //     console.log(x > y)
  //       if(x > y){
  //         return "X";
  //       } else if(x < y) {
  //         return "Y";
  //       } else {
  //         return "="
  //       }
  //   }
  //   else {

  //       return false;

  // }
}

// #region old code

// function goto(circle, obj, speed) {
  
//     //speed is units pr frame
//     if(circles[circles.length-1].goals.length < 1){
//       var tGoals = [
//         {x: obj.line.position.x + obj.size, y: obj.line.position.y - obj.size}, 
//         {x: obj.line.position.x - obj.size, y: obj.line.position.y - obj.size}, 
//         {x: obj.line.position.x - obj.size, y: obj.line.position.y + obj.size}, 
//         {x: obj.line.position.x + obj.size, y: obj.line.position.y + obj.size},
//       ]
//       console.log(tGoals)
        
//       var goals = []
//       tGoals.forEach((pos) => {
//         var tdist_x = (pos.x-circles[circles.length-1].line.position.x);
//         var tdist_y = (pos.y-circles[circles.length-1].line.position.y);
//         var tnorm = Math.sqrt(tdist_x*tdist_x+ tdist_y*tdist_y);
//         goals.push({dist: tnorm, pos: pos});
//       });
  
//       goals.sort((a, b) => (a.dist > b.dist) ? 1: -1);
  
//       circles[circles.length-1].goals = goals;
//     }

//     var goal_x = circles[circles.length-1].goals[0].pos.x;
//     var goal_y = circles[circles.length-1].goals[0].pos.y;

//     var goal_x1 = circles[circles.length-1].goals[1].pos.x;
//     var goal_y1 = circles[circles.length-1].goals[1].pos.y;

//     var goal_x2 = circles[circles.length-1].goals[3].pos.x;
//     var goal_y2 = circles[circles.length-1].goals[3].pos.y;

//     var goal_x3 = circles[circles.length-1].goals[2].pos.x;
//     var goal_y3 = circles[circles.length-1].goals[2].pos.y;

//     if(!circles[circles.length-1].visitedGoal1) {
//       var dist_x = (goal_x-circles[circles.length-1].line.position.x);
//       var dist_y = (goal_y-circles[circles.length-1].line.position.y);
//       var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y);

//       if(norm == 0){
//         norm = 0.1;
//       }      

//       var velocity_x = dist_x/norm * speed;
//       var velocity_y = dist_y/norm * speed;
  
//       circles[circles.length-1].roamX = velocity_x;
//       circles[circles.length-1].roamY = velocity_y;
//       if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//         circles[circles.length-1].visitedGoal1 = true;
//       } 
      

//     } else if(!circles[circles.length-1].visitedGoal2){
//       var dist_x = (goal_x1-circles[circles.length-1].line.position.x);
//       var dist_y = (goal_y1-circles[circles.length-1].line.position.y);
//       var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y);

//       if(norm == 0){
//         norm = 0.1;
//       }      
      
//       var velocity_x = dist_x/norm * speed;
//       var velocity_y = dist_y/norm * speed;
  
//       circles[circles.length-1].roamX = velocity_x;
//       circles[circles.length-1].roamY = velocity_y;
//       if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//         circles[circles.length-1].visitedGoal2 = true;
//         circles[circles.length-1].roamX = 0;
//         circles[circles.length-1].roamY = 0;
//       } 
//     }
//     else if(!circles[circles.length-1].visitedGoal3){
//       var dist_x = (goal_x2-circles[circles.length-1].line.position.x);
//       var dist_y = (goal_y2-circles[circles.length-1].line.position.y);
//       var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y);
//       if(norm == 0){
//         norm = 0.1;
//       }      
//       var velocity_x = dist_x/norm * speed;
//       var velocity_y = dist_y/norm * speed;
  
//       circles[circles.length-1].roamX = velocity_x;
//       circles[circles.length-1].roamY = velocity_y;
//       if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//         circles[circles.length-1].visitedGoal3 = true;
//         circles[circles.length-1].roamX = 0;
//         circles[circles.length-1].roamY = 0;
//       } 
//     }
//     else if(!circles[circles.length-1].visitedGoal4){
//       var dist_x = (goal_x3-circles[circles.length-1].line.position.x);
//       var dist_y = (goal_y3-circles[circles.length-1].line.position.y);
//       var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y);
//       if(norm == 0){
//         norm = 0.1;
//       }
//       var velocity_x = dist_x/norm * speed;
//       var velocity_y = dist_y/norm * speed;
  
//       circles[circles.length-1].roamX = velocity_x;
//       circles[circles.length-1].roamY = velocity_y;
//       if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//         circles[circles.length-1].roamX = 0;
//         circles[circles.length-1].roamY = 0;
//         circles[circles.length-1].visitedGoal1 = false;
//         circles[circles.length-1].visitedGoal2 = false;
//         circles[circles.length-1].visitedGoal3 = false;
//         circles[circles.length-1].visitedGoal4 = false;
//       } 
//     } 
// }
//#endregion
function gotowall(circle, listOfPoints, speed) {
  
  
  //speed is units pr frame 
  if(circles[circles.length-1].goals.length < 1){
    var tGoals = [
      {x: listOfPoints[0].x, y: listOfPoints[0].y, z:listOfPoints[0].z}, 
      {x: listOfPoints[1].x, y: listOfPoints[1].y, z:listOfPoints[1].z}, 
      {x: listOfPoints[2].x, y: listOfPoints[2].y, z:listOfPoints[2].z}, 
      {x: listOfPoints[3].x, y: listOfPoints[3].y, z:listOfPoints[3].z}, 
      {x: listOfPoints[4].x, y: listOfPoints[4].y, z:listOfPoints[4].z}, 
      {x: listOfPoints[5].x, y: listOfPoints[5].y, z:listOfPoints[5].z}, 
      {x: listOfPoints[6].x, y: listOfPoints[6].y, z:listOfPoints[6].z}, 
      {x: listOfPoints[7].x, y: listOfPoints[7].y, z:listOfPoints[7].z}, 
      {x: listOfPoints[8].x, y: listOfPoints[8].y, z:listOfPoints[8].z}, 
      {x: listOfPoints[9].x, y: listOfPoints[9].y, z:listOfPoints[9].z}, 
      {x: listOfPoints[10].x, y: listOfPoints[10].y, z:listOfPoints[10].z}, 
      {x: listOfPoints[11].x, y: listOfPoints[11].y, z:listOfPoints[11].z}, 
    ] 

    // console.log("Position: ", listOfPoints.line.position)
    // console.log("Size: ", listOfPoints.size)

      
    var goals = []
    tGoals.forEach((pos) => {
      var tdist_x = (pos.x-circles[circles.length-1].line.position.x);
      var tdist_y = (pos.y-circles[circles.length-1].line.position.y);
      var tdist_z = (pos.z-circles[circles.length-1].line.position.z);
      var tnorm = Math.sqrt(tdist_x*tdist_x+ tdist_y*tdist_y + tdist_z*tdist_z);
      goals.push({dist: tnorm, pos: pos});
    });

    // goals.sort((a, b) => (a.dist > b.dist) ? 1: -1);

    circles[circles.length-1].goals = goals;

  }

  var goal_x = circles[circles.length-1].goals[0].pos.x;
  var goal_y = circles[circles.length-1].goals[0].pos.y;
  var goal_z = circles[circles.length-1].goals[0].pos.z;

  var goal_x1 = circles[circles.length-1].goals[1].pos.x;
  var goal_y1 = circles[circles.length-1].goals[1].pos.y;
  var goal_z1 = circles[circles.length-1].goals[1].pos.z;

  var goal_x2 = circles[circles.length-1].goals[2].pos.x;
  var goal_y2 = circles[circles.length-1].goals[2].pos.y;
  var goal_z2 = circles[circles.length-1].goals[2].pos.z;

  var goal_x3 = circles[circles.length-1].goals[3].pos.x;
  var goal_y3 = circles[circles.length-1].goals[3].pos.y;
  var goal_z3 = circles[circles.length-1].goals[3].pos.z;

  var goal_x4 = circles[circles.length-1].goals[4].pos.x;
  var goal_y4 = circles[circles.length-1].goals[4].pos.y;
  var goal_z4 = circles[circles.length-1].goals[4].pos.z;

  var goal_x5 = circles[circles.length-1].goals[5].pos.x;
  var goal_y5 = circles[circles.length-1].goals[5].pos.y;
  var goal_z5 = circles[circles.length-1].goals[5].pos.z;


  if(!circles[circles.length-1].visitedGoal1) {
    var dist_x = (goal_x-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y +dist_z*dist_z);

    if(norm == 0){
      norm = 0.1;
    }      

    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;
    

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].visitedGoal1 = true;
      console.log("ramte punkt1")
    } 
    

  } else if(!circles[circles.length-1].visitedGoal2){
    var dist_x = (goal_x1-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y1-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z1-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y+ dist_z*dist_z);

    if(norm == 0){
      norm = 0.1;
    }      
    
    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].visitedGoal2 = true;
      circles[circles.length-1].roamX = 0;
      circles[circles.length-1].roamY = 0;
      circles[circles.length-1].roamZ = 0;
    } 
  }
  else if(!circles[circles.length-1].visitedGoal3){
    var dist_x = (goal_x2-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y2-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z2-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y+ dist_z*dist_z);
    if(norm == 0){
      norm = 0.1;
    }      
    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].visitedGoal3 = true;
      circles[circles.length-1].roamX = 0;
      circles[circles.length-1].roamY = 0;
      circles[circles.length-1].roamZ = 0;
    } 
  }
  else if(!circles[circles.length-1].visitedGoal4){
    var dist_x = (goal_x3-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y3-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z3-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
    if(norm == 0){
      norm = 0.1;
    }
    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].roamX = 0;
      circles[circles.length-1].roamY = 0;
      circles[circles.length-1].roamZ = 0;
      circles[circles.length-1].visitedGoal4 = true;
    } 
  } 
  else if(!circles[circles.length-1].visitedGoal5){
    var dist_x = (goal_x4-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y4-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z4-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
    if(norm == 0){
      norm = 0.1;
    }
    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].roamX = 0;
      circles[circles.length-1].roamY = 0;
      circles[circles.length-1].roamZ = 0;
      circles[circles.length-1].visitedGoal5 = true;
    } 
  } 
  else if(!circles[circles.length-1].visitedGoal6){
    var dist_x = (goal_x5-circles[circles.length-1].line.position.x);
    var dist_y = (goal_y5-circles[circles.length-1].line.position.y);
    var dist_z = (goal_z5-circles[circles.length-1].line.position.z);
    var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
    if(norm == 0){
      norm = 0.1;
    }
    var velocity_x = dist_x/norm * speed;
    var velocity_y = dist_y/norm * speed;
    var velocity_z = dist_z/norm * speed;

    circles[circles.length-1].roamX = velocity_x;
    circles[circles.length-1].roamY = velocity_y;
    circles[circles.length-1].roamZ = velocity_z;
    if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
      circles[circles.length-1].roamX = 0;
      circles[circles.length-1].roamY = 0;
      circles[circles.length-1].roamZ = 0;
      circles[circles.length-1].visitedGoal1 = false;
      circles[circles.length-1].visitedGoal2 = false;
      circles[circles.length-1].visitedGoal3 = false;
      circles[circles.length-1].visitedGoal4 = false;
      circles[circles.length-1].visitedGoal5 = false;
      circles[circles.length-1].visitedGoal6 = false;
    } 
  } 
}


// function gotowall(circle, obj, speed) {
  
  
//   //speed is units pr frame 
//   if(circles[circles.length-1].goals.length < 1){
//     var tGoals = [
//       {x: obj.geometry.vertices[0].x-75, y: obj.geometry.vertices[0].y, z:obj.geometry.vertices[0].z}, 
//       {x: obj.geometry.vertices[1].x-75, y: obj.geometry.vertices[1].y+100, z:obj.geometry.vertices[1].z}, 
//       // {x: obj.geometry.vertices[4].x-25, y: obj.geometry.vertices[4].y+10, z:obj.geometry.vertices[4].z}, 
//       // {x: obj.geometry.vertices[4].x-25, y: obj.geometry.vertices[4].y+110, z:obj.geometry.vertices[4].z},
//       {x: obj.geometry.vertices[4].x-(20/2), y: obj.geometry.vertices[4].y+8, z:obj.geometry.vertices[4].z},
//       {x: obj.geometry.vertices[4].x-(20/2), y: obj.geometry.vertices[4].y+110, z:obj.geometry.vertices[4].z},
//       {x: obj.geometry.vertices[4].x-25, y: obj.geometry.vertices[4].y+12, z:obj.geometry.vertices[4].z}, 
//       {x: obj.geometry.vertices[4].x-25, y: obj.geometry.vertices[4].y+110, z:obj.geometry.vertices[4].z}

//     ] 

//     console.log("Position: ", obj.line.position)
//     console.log("Size: ", obj.size)

      
//     var goals = []
//     tGoals.forEach((pos) => {
//       var tdist_x = (pos.x-circles[circles.length-1].line.position.x);
//       var tdist_y = (pos.y-circles[circles.length-1].line.position.y);
//       var tdist_z = (pos.z-circles[circles.length-1].line.position.z);
//       var tnorm = Math.sqrt(tdist_x*tdist_x+ tdist_y*tdist_y + tdist_z*tdist_z);
//       goals.push({dist: tnorm, pos: pos});
//     });

//     // goals.sort((a, b) => (a.dist > b.dist) ? 1: -1);

//     circles[circles.length-1].goals = goals;

//   }

//   var goal_x = circles[circles.length-1].goals[0].pos.x;
//   var goal_y = circles[circles.length-1].goals[0].pos.y;
//   var goal_z = circles[circles.length-1].goals[0].pos.z;

//   var goal_x1 = circles[circles.length-1].goals[1].pos.x;
//   var goal_y1 = circles[circles.length-1].goals[1].pos.y;
//   var goal_z1 = circles[circles.length-1].goals[1].pos.z;

//   var goal_x2 = circles[circles.length-1].goals[3].pos.x;
//   var goal_y2 = circles[circles.length-1].goals[3].pos.y;
//   var goal_z2 = circles[circles.length-1].goals[3].pos.z;

//   var goal_x3 = circles[circles.length-1].goals[2].pos.x;
//   var goal_y3 = circles[circles.length-1].goals[2].pos.y;
//   var goal_z3 = circles[circles.length-1].goals[2].pos.z;

//   var goal_x4 = circles[circles.length-1].goals[4].pos.x;
//   var goal_y4 = circles[circles.length-1].goals[4].pos.y;
//   var goal_z4 = circles[circles.length-1].goals[4].pos.z;

//   var goal_x5 = circles[circles.length-1].goals[5].pos.x;
//   var goal_y5 = circles[circles.length-1].goals[5].pos.y;
//   var goal_z5 = circles[circles.length-1].goals[5].pos.z;


//   if(!circles[circles.length-1].visitedGoal1) {
//     var dist_x = (goal_x-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y +dist_z*dist_z);

//     if(norm == 0){
//       norm = 0.1;
//     }      

//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;
    

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].visitedGoal1 = true;
//       console.log("ramte punkt1")
//     } 
    

//   } else if(!circles[circles.length-1].visitedGoal2){
//     var dist_x = (goal_x1-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y1-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z1-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y+ dist_z*dist_z);

//     if(norm == 0){
//       norm = 0.1;
//     }      
    
//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].visitedGoal2 = true;
//       circles[circles.length-1].roamX = 0;
//       circles[circles.length-1].roamY = 0;
//       circles[circles.length-1].roamZ = 0;
//     } 
//   }
//   else if(!circles[circles.length-1].visitedGoal3){
//     var dist_x = (goal_x2-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y2-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z2-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y+ dist_z*dist_z);
//     if(norm == 0){
//       norm = 0.1;
//     }      
//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].visitedGoal3 = true;
//       circles[circles.length-1].roamX = 0;
//       circles[circles.length-1].roamY = 0;
//       circles[circles.length-1].roamZ = 0;
//     } 
//   }
//   else if(!circles[circles.length-1].visitedGoal4){
//     var dist_x = (goal_x3-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y3-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z3-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
//     if(norm == 0){
//       norm = 0.1;
//     }
//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].roamX = 0;
//       circles[circles.length-1].roamY = 0;
//       circles[circles.length-1].roamZ = 0;
//       circles[circles.length-1].visitedGoal4 = true;
//     } 
//   } 
//   else if(!circles[circles.length-1].visitedGoal5){
//     var dist_x = (goal_x4-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y4-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z4-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
//     if(norm == 0){
//       norm = 0.1;
//     }
//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].roamX = 0;
//       circles[circles.length-1].roamY = 0;
//       circles[circles.length-1].roamZ = 0;
//       circles[circles.length-1].visitedGoal5 = true;
//     } 
//   } 
//   else if(!circles[circles.length-1].visitedGoal6){
//     var dist_x = (goal_x5-circles[circles.length-1].line.position.x);
//     var dist_y = (goal_y5-circles[circles.length-1].line.position.y);
//     var dist_z = (goal_z5-circles[circles.length-1].line.position.z);
//     var norm = Math.sqrt(dist_x*dist_x+ dist_y*dist_y + dist_z*dist_z);
//     if(norm == 0){
//       norm = 0.1;
//     }
//     var velocity_x = dist_x/norm * speed;
//     var velocity_y = dist_y/norm * speed;
//     var velocity_z = dist_z/norm * speed;

//     circles[circles.length-1].roamX = velocity_x;
//     circles[circles.length-1].roamY = velocity_y;
//     circles[circles.length-1].roamZ = velocity_z;
//     if(Math.abs(dist_x) < 0.7 && Math.abs(dist_y) < 0.7) {
//       circles[circles.length-1].roamX = 0;
//       circles[circles.length-1].roamY = 0;
//       circles[circles.length-1].roamZ = 0;
//       circles[circles.length-1].visitedGoal1 = false;
//       circles[circles.length-1].visitedGoal2 = false;
//       circles[circles.length-1].visitedGoal3 = false;
//       circles[circles.length-1].visitedGoal4 = false;
//       circles[circles.length-1].visitedGoal5 = false;
//       circles[circles.length-1].visitedGoal6 = false;
//     } 
//   } 
// }



function animation(){
  let collission = false;

  circles[circles.length-1].roam();
  for (var x = 0, xl = circles.length; x != xl; ++x) {
    //circles[x].roam();
    if(!circles[x].name){
      let tempCollision = check_if_collision(circles[x],circles[circles.length-1],5);
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

    // Now you have to check if it has reached its goal. If yes, then give it a new goal. 
    // Do not hardcode the goal position like bellow, but make a function that takes the drone position and the box and returns a list of goal positoins that should be visited in that order. 
    // Note that this overrides the collision avoidance. How to make the collision avoidance work again?
    // Also, the drone flies all the way to the corner of the box. How to make it keep  a distance of say 2m to  it?

    gotowall(circles[circles.length-1], listOfRealPoints, 1)    

  requestAnimationFrame(animation);
}

requestAnimationFrame(animation);


window.addEventListener("resize", () => { 
  canvas.update(window.innerWidth, window.innerHeight);
  navigator.update(window.innerWidth / 2, window.innerHeight / 2);
}, false);

document.body.appendChild(canvas.renderer.domElement);