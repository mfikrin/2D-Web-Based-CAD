let MODE
let COLOR
// let VERTICES = [
// 	-0.5, -0.0, 0.0, // 0
// 	-0.3, -0.3, 0.0, // 1
// 	-0.1, 0.7, 0.0, // 2
// 	0.7, -0.9, 0.0, // 3
// 	0.96, 0.0, 0.0, // 4
// 	0.7, 0.9, 0.0, // 5
// ];

let VERTICES = [
	-0.5,-0.5,0, // 1
	-0.5,0.5,0, // 0
	0.5,-0.5,0, // 2
	0.5,0.5,0, // 3
	
	
];

let DRAWN =

{
    "VERTICES" : VERTICES
    ,
    "OBJECT" :
    [
        {
            "id" : 1,
            "type" : "square",
            "start_idx" : 0,
            "count" : 2,
            "color" : [1,1,1,1]
        },   
    ]
}

// let VERTICES_ = [
	
// 	[0.5,-0.5,0], 
// 	[-0.5,-0.5,0],	
// 	[0.5,0.5,0],
// 	[-0.5,0.5,0],
// ];

// function sortVERTICES(VERTICES,start_idx,count){
	
	
// 	// var idx_array = 3*start_idx

// 	// var max_idx = 3*count

// 	let max_idx = start_idx + count

// 	for (let i = start_idx; i < max_idx; i++) {
		
// 		var current_point = idx_array
// 		var next_point = idx_array+3


// 		if (VERTICES[idx_array + 3] < VERTICES[idx_array]){


// 			VERTICES[current_point] = VERTICES[next_point]
// 			VERTICES[current_point+1] = VERTICES[next_point+1]
// 			VERTICES[current_point+2] = VERTICES[next_point+2]

// 			VERTICES[current_point] = VERTICES[next_point]
// 			VERTICES[current_point+1] = VERTICES[next_point+1]
// 			VERTICES[current_point+2] = VERTICES[next_point+2]
// 		}else{

// 		}
		
// 	}
// }




const canvas = document.querySelector( "#glcanvas" );

var prevX = 0,
	currX = 0,
	prevY = 0,
	currY = 0,
	flag = false,
	dot_flag = false,
	movedVerticeIndex = null;

var x = "black",
	y = 8;

init()
COLOR = "(0,1,0,1)"
draw()


let TYPE 
let COUNT
let TEMP_POINT
function sqr_btn(){
    // console.log("yuhuu sqr")
	alert('Klik 2 titik')

	// var first_pointX = 50
	// var first_pointY = 50




	// console.log("point",first_pointX,first_pointY)

	TYPE = "square"
	COUNT = 0
	TEMP_POINT = []

    
}

function onDrawStart(currX,currY){

	console.log("ON_DRAW_START")
	if (TYPE == "square"){
		
		console.log("posisi",COUNT,currX,currY)
		var vertex_position = getVerticePosition(currX,currX)
		console.log(vertex_position)
		TEMP_POINT.push([vertex_position.x,vertex_position.y])
		COUNT += 1
		console.log(TEMP_POINT)

		// TEMP_POINT = [[x1,y1],[x2,y2]]

		if (COUNT == 2){
			// cari panjang persegi
			// var hypotenuseSquare = Math.sqrt(Math.pow(TEMP_POINT[0][0]-TEMP_POINT[1][0],2) + Math.pow(TEMP_POINT[0][1]-TEMP_POINT[1][1],2) )

			const pivotPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
			
			var distanceX = Math.abs(TEMP_POINT[0][0] - TEMP_POINT[1][0])
			var distanceY = Math.abs(TEMP_POINT[0][1] - TEMP_POINT[1][1])

			// Ikutin yg lebih kecil

			const lengthSquare = Math.min(distanceX,distanceY)

			
			
			



			

		}
	}

}

function detLengthSquare(arr){

}


function init(){

	canvas.addEventListener("mousemove", function (e) {
		findxy('move', e)
	}, false);
	canvas.addEventListener("mousedown", function (e) {
		findxy('down', e)
	}, false);
	canvas.addEventListener("mouseup", function (e) {
		findxy('up', e)
	}, false);
	canvas.addEventListener("mouseout", function (e) {
		findxy('out', e)
	}, false);
}

function getVerticePosition(canvasPositionX, canvasPositionY){
	return {
		x: (canvasPositionX-canvas.width/2)*2/canvas.width,
		y: (canvasPositionY-canvas.height/2)*2/canvas.height * (-1)
	}
}

function getCanvasPosition(verticePositionX, verticePositionY){
	return {
		x: ((verticePositionX + 1) * canvas.width) / 2,
		y: canvas.height - (((verticePositionY + 1) * canvas.height) / 2)
	}
}

function getMovedVerticeIndex(currX, currY, clickTolerance = 15){

	for (var vi = 0; vi < VERTICES.length; vi += 3){
		const vx = vi
		const vy = vi + 1
		const canvasPosition = getCanvasPosition(VERTICES[vx], VERTICES[vy])
		if ((canvasPosition.x-clickTolerance<=currX && currX<=canvasPosition.x+clickTolerance) && (canvasPosition.y-clickTolerance<=currY && currY<=canvasPosition.y+clickTolerance)){
			console.log("RETURN", vi/3);
			return vi/3
		}
	}
	return null
}

function setVERTICE(idx, canvasPositionX, canvasPositionY){
	if (idx != null){
		const verticeX = 3*idx
		const verticeY = 3*idx + 1
		const verticePos = getVerticePosition(canvasPositionX, canvasPositionY);
		
		console.log(canvasPositionX, canvasPositionY, verticePos);
		VERTICES[verticeX] = verticePos.x
		VERTICES[verticeY] = verticePos.y
		draw()
	}else{
		console.log("NULL")

	}
}


function findxy(res, e) {

	if (res == 'down') {
		prevX = currX;
		prevY = currY;
		currX = e.clientX - canvas.offsetLeft;
		currY = e.clientY - canvas.offsetTop;

		flag = true;
		dot_flag = true;
		if (dot_flag) {
			// ctx.beginPath();
			// ctx.fillStyle = x;
			// ctx.fillRect(currX, currY, y,y);
			// ctx.closePath();
			console.log("KK CLICK",currX,currY);
			movedVerticeIndex = getMovedVerticeIndex(currX, currY)
			if (movedVerticeIndex != null){
				// console.log(movedVerticeIndex)
				console.log("+++++")
				setVERTICE(movedVerticeIndex, currX, currY);
				console.log("=====")
			}

			onDrawStart(currX,currY)

			dot_flag = false;
		}
	}
	if (res == 'up' || res == "out") {
		console.log("UP or OUT");
		flag = false;
		movedVerticeIndex = null
	}
	if (res == 'move') {
		if (flag) {
			prevX = currX;
			prevY = currY;
			currX = e.clientX - canvas.offsetLeft;
			currY = e.clientY - canvas.offsetTop;
			
			console.log("MOVE", currX, currY);
			if (movedVerticeIndex != null){
				setVERTICE(movedVerticeIndex, currX, currY);
			}
		}
	}
}


function draw( )
{
    
	const gl = canvas.getContext( "webgl" );

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	var vertices = VERTICES

	var vertex_buffer = gl.createBuffer( );

	gl.bindBuffer( gl.ARRAY_BUFFER, vertex_buffer );

	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

	gl.bindBuffer( gl.ARRAY_BUFFER, null );

	var vertCode = 
		'attribute vec3 coordinates;' +
		'void main(void)' +
		'{' +
			' gl_Position = vec4(coordinates, 1.0);' +
		'}';

	var vertShader = gl.createShader( gl.VERTEX_SHADER );

	gl.shaderSource( vertShader, vertCode );

	gl.compileShader( vertShader );


	// const frag = `precision mediump float;
    
    // uniform vec4 u_fragColor;
    // void main() {
    //   gl_FragColor = u_fragColor;
    // }`

	var fragCode = 
        `void main(void){
            gl_FragColor = vec4${COLOR};
        }`;
		// 'void main(void)' +
		// '{' +
		// 	' gl_FragColor = vec4' + COLOR +
		// '}';
		

	var fragShader = gl.createShader( gl.FRAGMENT_SHADER );

	gl.shaderSource( fragShader, fragCode );

	gl.compileShader( fragShader );

	var shaderProgram = gl.createProgram( );

	gl.attachShader( shaderProgram, vertShader );

	gl.attachShader( shaderProgram, fragShader );

	gl.linkProgram( shaderProgram );

	gl.useProgram( shaderProgram );

	gl.bindBuffer( gl.ARRAY_BUFFER, vertex_buffer );

	var coord = gl.getAttribLocation( shaderProgram, "coordinates" );

	gl.vertexAttribPointer( coord, 3, gl.FLOAT, false, 0, 0 );

	gl.enableVertexAttribArray( coord );

	gl.clearColor( 1.0, 0.0, 0.0, 1.0 );

	gl.enable( gl.DEPTH_TEST );

	gl.clear( gl.COLOR_BUFFER_BIT );

	gl.viewport( 0, 0, canvas.width, canvas.height );


    
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 4);
    // gl.drawArrays( gl.LINES, 0, 6 );

    // console.log(MODE)
    // switch (MODE) {
    //     case "lines":
    //         gl.drawArrays( gl.LINES, 0, 6 );
    //         break;
    //     case "triangles":
    //         gl.drawArrays( gl.TRIANGLES, 0, 6 );
    //         break;
    //     case "triangleStrip":
    //         gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
    //         break;
    // }
	// gl.drawArrays( gl.TRIANGLE_FAN, 0, 6 );
}




function saveFile(drawn){
    
    const a = document.createElement("a");

    const file = new Blob([JSON.stringify(drawn)], { type: "json" });
    a.href = URL.createObjectURL(file);
    a.download = "filename.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };


function loadFile() {
    console.log("MASUKK PAK EKO")
    let input = document.getElementById("load");
    let files = input.files; 
  
    if (files.length == 0) return;

    const file = files[0]; 
  
    let reader = new FileReader();

    reader.onload = (e) => {
        const data = JSON.parse(e.target.result)
        console.log(data)

        
    }
  
    reader.readAsText(file);
}


