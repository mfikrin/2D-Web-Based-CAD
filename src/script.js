let MODE
let COLOR

// let FLAG_UPLOAD = false
// // let VERTICES
// if (!FLAG_UPLOAD){
// 	VERTICES = []
// }


// let FLAG_UPLOAD = false
// // let VERTICES
// if (!FLAG_UPLOAD){
// 	VERTICES = []
// }

// VERTICES = []

let DRAWN =

{
    "VERTICES" : []
    ,
    "OBJECT" : []
	,
	"COUNT_SHAPE" : 0
}

console.log("DILUARRRR")

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
COLOR = "(0,0,0,0.5)"
draw()

// let COUNT_SHAPE = 0
let TYPE 
let COUNTER_POINT // cek sudah berapa titik
let TEMP_POINT
let START_IDX
let COUNT // berapa index yang digunakan
let SCALE = 1


const setWidth = (e) => {
	console.log("set width",e)
	const temp = parseInt(e.target.value);
	console.log(temp)
	SCALE = (temp/100) + 0.5
	console.log("scale",SCALE);
	// SCALE_FLAG = true


	changeWidth(SCALE)

	// render(DRAWN)
};

function changeWidth(scales){
	console.log("change width")
	DRAWN.OBJECT[0].scale = scales // nanti ganti jd id selected object

	if (DRAWN.OBJECT[0].type == "square"){
		// var distanceX = Math.abs(DRAWN.pivotPoint.x - otherPoint.x)
		// var distanceY = Math.abs(pivotPoint.y - otherPoint.y)

		console.log("lg di change widthh")
		// console.log("DistanceX Y",distanceX,distanceY)

		// Ikutin yg lebih kecil

		console.log("length",DRAWN.OBJECT[0].sqr_length)
		console.log("length",DRAWN.OBJECT[0].scale)

		const lengthSquare = DRAWN.OBJECT[0].sqr_length * DRAWN.OBJECT[0].scale

		console.log("lenth square after slider",lengthSquare)

		var ARAH

		// DRAWN.COUNT_SHAPE ++

		// var info_obj = 
		// {
		// 	"id" : DRAWN.COUNT_SHAPE,
		// 	"type" : TYPE,
		// 	"start_idx" : START_IDX,
		// 	"count" : COUNT,
		// 	"color" : COLOR,
		// 	"scale" : 1,
		// 	"pivot_point" : pivotPoint,
		// 	"sqr_length" : lengthSquare,
		// }

		DRAWN.OBJECT[0].sqr_length = lengthSquare

		// DRAWN.OBJECT.push(info_obj)

		// REFER -> INDEKS
		// let VERTICES = [
		// 	-0.5,-0.5,0, // 0
		// 	-0.5,0.5,0, // 1
		// 	0.5,-0.5,0, // 2
		// 	0.5,0.5,0, // 3			
		// ];
		if (DRAWN.OBJECT[0].pivotPoint.x < DRAWN.OBJECT[0].otherPoint.x){
			ARAH = "KANAN"

			if (DRAWN.OBJECT[0].pivotPoint.y < DRAWN.OBJECT[0].otherPoint.y){
				ARAH += "ATAS" // INDEKS 0
				// DRAWN.VERTICES = []

				console.log("BEFORE",DRAWN.VERTICES)

				const temp_arr = [
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 0
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 1
					DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 2
					DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y+lengthSquare, 0, // 3
				]

				let iter = 0
				for (let index = DRAWN.OBJECT[0].start_idx; index < DRAWN.OBJECT[0].start_idx + DRAWN.OBJECT[0].count * 3 ; index++) {
					DRAWN.VERTICES.splice(index, 1, temp_arr[iter]);
					iter++
				}

				console.log("AFTER",DRAWN.VERTICES)

				// DRAWN.VERTICES.push(
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 0
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 1
				// 	DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 2
				// 	DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y+lengthSquare, 0, // 3
				// )
				// DRAWN.VERTICES = VERTICES
				draw()
			}else{
				ARAH += "BAWAH" // INDEKS 1
				// DRAWN.VERTICES = []
				// DRAWN.VERTICES.push(
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 0
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 1
				// 	DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 2
				// 	DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 3
				// )
				console.log("BEFORE",DRAWN.VERTICES)
				const temp_arr = [
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 0
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 1
					DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 2
					DRAWN.OBJECT[0].pivotPoint.x+lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 3
				]

				let iter = 0
				for (let index = DRAWN.OBJECT[0].start_idx; index < DRAWN.OBJECT[0].start_idx + DRAWN.OBJECT[0].count * 3 ; index++) {
					DRAWN.VERTICES.splice(index, 1, temp_arr[iter]);
					iter++
				}
				console.log("AFTER",DRAWN.VERTICES)
				// DRAWN.VERTICES = VERTICES
				draw()
			}
		}else{
			ARAH = "KIRI"
			if (DRAWN.OBJECT[0].pivotPoint.y < DRAWN.OBJECT[0].otherPoint.y){
				ARAH += "ATAS" // INDEKS 2
				// DRAWN.VERTICES = []
				// DRAWN.VERTICES.push(
				// 	DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 0
				// 	DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 1
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 2
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 3
				// )
				// DRAWN.VERTICES = VERTICES
				console.log("BEFORE",DRAWN.VERTICES)

				const temp_arr = [
					DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 0
					DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 1
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 2
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y + lengthSquare, 0, // 3
				]

				let iter = 0
				for (let index = DRAWN.OBJECT[0].start_idx; index < DRAWN.OBJECT[0].start_idx + DRAWN.OBJECT[0].count * 3 ; index++) {
					DRAWN.VERTICES.splice(index, 1, temp_arr[iter]);
					iter++
				}

				console.log("AFTER",DRAWN.VERTICES)

				draw()
			}else{
				ARAH += "BAWAH" // INDEKS 3
				// DRAWN.VERTICES = []
				// DRAWN.VERTICES.push(
				// 	DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 0
				// 	DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 1
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 2
				// 	DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 3
				// )
				// DRAWN.VERTICES = VERTICES

				console.log("BEFORE",DRAWN.VERTICES)
				const temp_arr = [
					DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 0
					DRAWN.OBJECT[0].pivotPoint.x - lengthSquare, DRAWN.OBJECT[0].pivotPoint.y, 0, // 1
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y - lengthSquare, 0, // 2
					DRAWN.OBJECT[0].pivotPoint.x, DRAWN.OBJECT[0].pivotPoint.y, 0, // 3
				]

				console.log("start idx",DRAWN.OBJECT[0].start_idx)
				console.log("start idx",DRAWN.OBJECT[0].start_idx)
				console.log("start idx",DRAWN.OBJECT[0].start_idx)

				let iter = 0
				for (let index = DRAWN.OBJECT[0].start_idx; index < DRAWN.OBJECT[0].start_idx + DRAWN.OBJECT[0].count * 3 ; index++) {
					DRAWN.VERTICES.splice(index, 1, temp_arr[iter]);
					iter++
				}

				console.log("AFTER",DRAWN.VERTICES)

				draw()
			}
		}

		console.log(ARAH)

		console.log("DRAWNN")
		console.log(DRAWN)



	// render(DRAWN)
	}
	
}

function clr_btn(){
	console.log("uyy clear")
	DRAWN.VERTICES = []
	DRAWN.OBJECT = []
	DRAWN.COUNT_SHAPE = 0

	console.log(DRAWN)
	draw()
}

function sqr_btn(){
	alert('Klik 2 titik')
	TYPE = "square"
	COUNTER_POINT = 0
	TEMP_POINT = []
	COUNT = 4
	var last_idx = (DRAWN.VERTICES.length / 3) - 1
	START_IDX = last_idx + 1  
}

function rec_btn(){
	alert('Klik 2 titik')
	TYPE = "rectangle"
	COUNTER_POINT = 0
	TEMP_POINT = []
	COUNT = 4
	var last_idx = (DRAWN.VERTICES.length / 3) - 1
	START_IDX = last_idx + 1

    
}

function line_btn(){
	alert('Klik 2 titik')
	TYPE = "line"
	COUNTER_POINT = 0
	TEMP_POINT = []
	COUNT = 2

	// get last idx vertices

	var last_idx = (DRAWN.VERTICES.length / 3) - 1
	START_IDX = last_idx + 1


    
}

function onDrawStart(currX,currY){

	console.log("ON_DRAW_START")
	if (TYPE == "square"){
		
		console.log("posisi",COUNTER_POINT,currX,currY)
		var vertex_position = getVerticePosition(currX,currY)		
		console.log(vertex_position)
		TEMP_POINT.push([vertex_position.x,vertex_position.y])
		COUNTER_POINT += 1
		console.log(TEMP_POINT)

		// TEMP_POINT = [[x1,y1],[x2,y2]]

		if (COUNTER_POINT == 2){
			// cari panjang persegi
			// var hypotenuseSquare = Math.sqrt(Math.pow(TEMP_POINT[0][0]-TEMP_POINT[1][0],2) + Math.pow(TEMP_POINT[0][1]-TEMP_POINT[1][1],2) )

			// pivot point = titik pertama yg diclick user
			console.log("WOI")
			console.log(TEMP_POINT)

			

			const pivotPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
			const otherPoint = {x : TEMP_POINT[1][0], y : TEMP_POINT[1][1]}
			
			var distanceX = Math.abs(pivotPoint.x - otherPoint.x)
			var distanceY = Math.abs(pivotPoint.y - otherPoint.y)

			console.log("DistanceX Y",distanceX,distanceY)

			// Ikutin yg lebih kecil

			const lengthSquare = Math.min(distanceX,distanceY)
			console.log("lenth square before slider",lengthSquare)

			var ARAH

			DRAWN.COUNT_SHAPE ++

			var info_obj = 
			{
				"id" : DRAWN.COUNT_SHAPE,
				"type" : TYPE,
				"start_idx" : START_IDX,
				"count" : COUNT,
				"color" : COLOR,
				"scale" : SCALE,
				"pivotPoint" : pivotPoint,
				"otherPoint" : otherPoint,
				"sqr_length" : lengthSquare,
			}
			DRAWN.OBJECT.push(info_obj)

			// REFER -> INDEKS
			// let VERTICES = [
			// 	-0.5,-0.5,0, // 0
			// 	-0.5,0.5,0, // 1
			// 	0.5,-0.5,0, // 2
			// 	0.5,0.5,0, // 3			
			// ];
			if (pivotPoint.x < otherPoint.x){
				ARAH = "KANAN"

				if (pivotPoint.y < otherPoint.y){
					ARAH += "ATAS" // INDEKS 0
					DRAWN.VERTICES.push(
						pivotPoint.x, pivotPoint.y, 0, // 0
						pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 1
						pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 2
						pivotPoint.x+lengthSquare, pivotPoint.y+lengthSquare, 0, // 3
					)
					// DRAWN.VERTICES = VERTICES
					draw()
				}else{
					ARAH += "BAWAH" // INDEKS 1
					DRAWN.VERTICES.push(
						pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 0
						pivotPoint.x, pivotPoint.y, 0, // 1
						pivotPoint.x+lengthSquare, pivotPoint.y - lengthSquare, 0, // 2
						pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 3
					)
					// DRAWN.VERTICES = VERTICES
					draw()
				}
			}else{
				ARAH = "KIRI"
				if (pivotPoint.y < otherPoint.y){
					ARAH += "ATAS" // INDEKS 2
					DRAWN.VERTICES.push(
						pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 0
						pivotPoint.x - lengthSquare, pivotPoint.y + lengthSquare, 0, // 1
						pivotPoint.x, pivotPoint.y, 0, // 2
						pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 3
					)
					// DRAWN.VERTICES = VERTICES
					draw()
				}else{
					ARAH += "BAWAH" // INDEKS 3
					DRAWN.VERTICES.push(
						pivotPoint.x - lengthSquare, pivotPoint.y - lengthSquare, 0, // 0
						pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 1
						pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 2
						pivotPoint.x, pivotPoint.y, 0, // 3
					)
					// DRAWN.VERTICES = VERTICES
					draw()
				}
			}

			console.log(ARAH)

			console.log("DRAWNN")
			console.log(DRAWN)
		}
	}else if (TYPE == "rectangle"){
		console.log("posisi",COUNTER_POINT,currX,currY)
		var vertex_position = getVerticePosition(currX,currX)		
		console.log(vertex_position)
		TEMP_POINT.push([vertex_position.x,vertex_position.y])
		COUNTER_POINT += 1
		console.log(TEMP_POINT)

		// TEMP_POINT = [[x1,y1],[x2,y2]]

		if (COUNTER_POINT == 2){
			// cari panjang persegi
			// var hypotenuseSquare = Math.sqrt(Math.pow(TEMP_POINT[0][0]-TEMP_POINT[1][0],2) + Math.pow(TEMP_POINT[0][1]-TEMP_POINT[1][1],2) )

			// pivot point = titik pertama yg diclick user
			console.log("WOI")
			console.log(TEMP_POINT)

			const FirstPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
			const SecondPoint = {x : TEMP_POINT[1][0], y : TEMP_POINT[1][1]}
			
			var distanceX = Math.abs(FirstPoint.x - SecondPoint.x)
			var distanceY = Math.abs(FirstPoint.y - SecondPoint.y)

			// Ikutin yg lebih kecil

			// const lengthSquare = Math.min(distanceX,distanceY)

			var ARAH


			// REFER -> INDEKS
			// let VERTICES = [
			// 	-0.5,-0.5,0, // 0
			// 	-0.5,0.5,0, // 1
			// 	0.5,-0.5,0, // 2
			// 	0.5,0.5,0, // 3			
			// ];
			if (pivotPoint.x < otherPoint.x){
				ARAH = "KANAN"

				if (pivotPoint.y < otherPoint.y){
					ARAH += "ATAS" // INDEKS 0
					DRAWN.VERTICES.push(
						FirstPoint.x, FirstPoint.y, 0, // 0
						pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 1
						pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 2
						pivotPoint.x+lengthSquare, pivotPoint.y+lengthSquare, 0, // 3
					)
					draw()
				}else{
					ARAH += "BAWAH" // INDEKS 1
					DRAWN.VERTICES.push(
						pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 0
						pivotPoint.x, pivotPoint.y, 0, // 1
						pivotPoint.x+lengthSquare, pivotPoint.y - lengthSquare, 0, // 2
						pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 3
					)
					draw()
				}
			}else{
				ARAH = "KIRI"
				if (pivotPoint.y < otherPoint.y){
					ARAH += "ATAS" // INDEKS 2
					DRAWN.VERTICES.push(
						pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 0
						pivotPoint.x, pivotPoint.y, 0, // 1
						pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 2
						pivotPoint.x-lengthSquare, pivotPoint.y + lengthSquare, 0, // 3
					)
					draw()
				}else{
					ARAH += "BAWAH" // INDEKS 3
					DRAWN.VERTICES.push(
						pivotPoint.x - lengthSquare, pivotPoint.y - lengthSquare, 0, // 0
						pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 1
						pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 2
						pivotPoint.x, pivotPoint.y, 0, // 3
					)
					draw()
				}
			}

			console.log(ARAH)
	}

	}else if (TYPE == "line"){
		console.log("posisi",COUNTER_POINT,currX,currY)
		var vertex_position = getVerticePosition(currX,currY)		
		console.log(vertex_position)
		TEMP_POINT.push([vertex_position.x,vertex_position.y])
		COUNTER_POINT += 1
		console.log(TEMP_POINT)

		// TEMP_POINT = [[x1,y1],[x2,y2]]

		if (COUNTER_POINT == 2){
			console.log("WOI")
			console.log(TEMP_POINT)
			
			DRAWN.COUNT_SHAPE ++
			var info_obj = 
			{
				"id" : DRAWN.COUNT_SHAPE,
				"type" : TYPE,
				"start_idx" : START_IDX,
				"count" : COUNT,
				"color" : COLOR,
				"scale" : 1
			}

			const FirstPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
			const SecondPoint = {x : TEMP_POINT[1][0], y : TEMP_POINT[1][1]}
			
			DRAWN.VERTICES.push(
				FirstPoint.x,FirstPoint.y,0,
				SecondPoint.x,SecondPoint.y,0,
			)
			// DRAWN.VERTICES = VERTICES
			DRAWN.OBJECT.push(info_obj)

			draw()

		}

	}
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

	var widthSlider = document.getElementById("width");
	widthSlider.addEventListener("change", (e) => setWidth(e));
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

	for (var vi = 0; vi < DRAWN.VERTICES.length; vi += 3){
		const vx = vi
		const vy = vi + 1
		const canvasPosition = getCanvasPosition(DRAWN.VERTICES[vx], DRAWN.VERTICES[vy])
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
		DRAWN.VERTICES[verticeX] = verticePos.x
		DRAWN.VERTICES[verticeY] = verticePos.y
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


function draw()
{
    
	const gl = canvas.getContext( "webgl" );

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	gl.clear(gl.COLOR_BUFFER_BIT);

	var vertices = DRAWN.VERTICES

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

	gl.clearColor( 0.0, 0.0, 0.0, .25 );

	gl.enable( gl.DEPTH_TEST );

	gl.clear( gl.COLOR_BUFFER_BIT );

	gl.viewport( 0, 0, canvas.width, canvas.height );

	var drawn = DRAWN

	console.log("HMMM")

	console.log(drawn)
	console.log(drawn.OBJECT)
	console.log(drawn.OBJECT.length)

	console.log("BANYAK OBJECT", drawn.OBJECT.length)
	for (let index = 0; index < drawn.OBJECT.length; index++) {
		console.log("type")
		console.log(drawn.OBJECT[index].type)

		var bool = ((drawn.OBJECT[index].type) === "line")
		console.log(bool)

		switch (drawn.OBJECT[index].type) {
			case "line":
				console.log("MASUK LINE")
				gl.drawArrays( gl.LINES, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count);
				break;
			case "square":
				console.log("MASUK SQR")
				gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
				break;
			case "rectangle":
				console.log("MASUK RTL")
				gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
				break;
		}
	}
}

function saveFile(){

	console.log("in save file")
	console.log(DRAWN)
	console.log(DRAWN.VERTICES)
	console.log(DRAWN.OBJECT)
    
    const a = document.createElement("a");

    const file = new Blob([JSON.stringify(DRAWN)], { type: "json" });
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
        DRAWN = JSON.parse(e.target.result)
		console.log("onloadddd")
        console.log(DRAWN)

		// draw()
		render(DRAWN)
    }
  
    reader.readAsText(file);
}

function render(data){
	const gl = canvas.getContext( "webgl" );

	FLAG_UPLOAD = true

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	gl.clear(gl.COLOR_BUFFER_BIT);

	var vertices = data.VERTICES

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
            gl_FragColor = vec4${data.OBJECT[0].color};
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

	gl.clearColor( 0.0, 0.0, 0.0, .25 );

	gl.enable( gl.DEPTH_TEST );

	gl.clear( gl.COLOR_BUFFER_BIT );

	gl.viewport( 0, 0, canvas.width, canvas.height );

	var drawn = DRAWN

	console.log("HMMM")

	console.log(drawn)
	console.log(drawn.OBJECT)
	console.log(drawn.OBJECT.length)

	console.log("BANYAK OBJECT", drawn.OBJECT.length)
	for (let index = 0; index < drawn.OBJECT.length; index++) {
		console.log("type")
		console.log(drawn.OBJECT[index].type)

		var bool = ((drawn.OBJECT[index].type) == "line")
		console.log(bool)

		switch (drawn.OBJECT[index].type) {
			case "line":
				console.log("MASUK LINE")
				gl.drawArrays( gl.LINES, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count);
				break;
			case "square":
				console.log("MASUK SQUARE")
				gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
				break;
			case "rectangle":
				console.log("MASUK RECTANGLE")
				gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
				break;
		}
	}

	DRAWN.VERTICES = data.VERTICES
	DRAWN.OBJECT = data.OBJECT
	DRAWN.COUNT_SHAPE = data.COUNT_SHAPE

	console.log("YG PLG BAWAH")
	console.log(DRAWN)
}

