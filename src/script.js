let MODE
let COLOR
let IS_DRAWING = false
let SELECTED_ITEM = null
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
COLOR = "(0.0,0.0,0.0,1.0)"
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

function changeColor() {
	if (SELECTED_ITEM != null){
		console.log(SELECTED_ITEM.id)
		for (let i = 0; i<DRAWN.OBJECT.length; i++){
			if (DRAWN.OBJECT[i].id == SELECTED_ITEM.id){
				console.log(DRAWN.OBJECT[i].color, "<-", COLOR)
				DRAWN.OBJECT[i].color = COLOR.substring(1,COLOR.length-1).split(",").map((el) => Number(el));
				draw();
				break;
			}
		}
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

function rect_btn(){
	alert('Klik 2 titik sudut yang berseberangan')

	// setting global variables
	TYPE = "rectangle"
	COUNTER_POINT = 0
	TEMP_POINT = []
	COUNT = 2

	// setting flag
	IS_DRAWING = true   
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


function poly_btn(){
	const polygonNodes = document.getElementById("nodePolygon").value

	// setting global variables
	TYPE = "polygon"
	COUNTER_POINT = 0
	TEMP_POINT = []
	COUNT = polygonNodes

	// setting flag
	IS_DRAWING = true
}


function colorpickHandler(){
	function hexToRGB(hex, alpha=1) {
		var r = parseInt(hex.slice(1, 3), 16)/255,
			g = parseInt(hex.slice(3, 5), 16)/255,
			b = parseInt(hex.slice(5, 7), 16)/255;
	
		return `(${r},${g},${b},${alpha})`;
	}
	const newColor = document.getElementById("color").value
	COLOR = hexToRGB(newColor)
	
	alert("!")
	const selectingCheckbox = document.getElementById("isSelecting")
	if (selectingCheckbox.checked){
		alert("checked")
	} else{
		alert("unchecked")
	}
}


function selectedItemHandler(){
	const selectedItemComponent = document.getElementById("Selected-item")
	const selectedVertex = getMovedVerticeIndex(currX, currY, 5)
	SELECTED_ITEM = null
	let index = ""
	if (selectedVertex != null){
		let drawnObjectVertexCounter = 0
		let selectedObject = null
		for (let i = 0; i<DRAWN.OBJECT.length; i++){
			drawnObjectVertexCounter += DRAWN.OBJECT[i].count
			if (drawnObjectVertexCounter > selectedVertex){
				selectedObject = DRAWN.OBJECT[i]
				index = String(i)
				break
			}
		}
		SELECTED_ITEM = selectedObject
	}
	if (SELECTED_ITEM == null){
		selectedItemComponent.innerHTML = "None"
	} else {
		selectedItemComponent.innerHTML = `${SELECTED_ITEM.type} ${index}`				
	}
}



function onDrawStart(currX,currY){

	console.log("ON_DRAW_START")
	if (TYPE == "square"){
		COUNTER_POINT += 1

		// fetching data
		const currentVertexPos = getVerticePosition(currX, currY)

		// storing data
		if (COUNTER_POINT == 1){
			TEMP_POINT.push(currentVertexPos.x)	// x value
			TEMP_POINT.push(currentVertexPos.y) // y value
			TEMP_POINT.push(0)					// z value	
		} else {
			TEMP_POINT.push(Math.min(currentVertexPos.x, TEMP_POINT[0]+Math.abs(currentVertexPos.y-TEMP_POINT[1])))	// x value
			TEMP_POINT.push(Math.min(currentVertexPos.y, TEMP_POINT[1]+Math.abs(currentVertexPos.x-TEMP_POINT[0]))) // y value
			TEMP_POINT.push(0)																						// z value	
		}
		
		// checking {deleted on production}
		console.assert(-1 <= currentVertexPos.x && currentVertexPos.x <= 1, "[!] INVALID x VALUE")
		console.assert(-1 <= currentVertexPos.y && currentVertexPos.y <= 1, "[!] INVALID y VALUE")
		console.log("TEMP_POINT:",TEMP_POINT)
		if (COUNTER_POINT == 2){
			// storing temporary data
			var currentObjectId
			if (DRAWN.OBJECT.length == 0){
				currentObjectId = 1
			} else {
				currentObjectId = Number(DRAWN.OBJECT[DRAWN.OBJECT.length-1].id) + 1
			}
			const currentDrawnObject = {
				"id" : currentObjectId,
				"type" : "square",
				"start_idx" : DRAWN.VERTICES.length,
				"count" : 4,
				"color" : COLOR.substring(1,COLOR.length-1).split(",").map((el) => Number(el))
			}
			// --- INFO ---
			// acquired points: (a,b,z1) and (c,d,z2)
			// ------------
			// storing 1st node
			DRAWN.VERTICES.push(TEMP_POINT[0]) // point a
			DRAWN.VERTICES.push(TEMP_POINT[1]) // point b
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z1
			// storing 2nd node
			DRAWN.VERTICES.push(TEMP_POINT[0]) // point a
			DRAWN.VERTICES.push(TEMP_POINT[4]) // point d
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z1
			// storing 3rd node
			DRAWN.VERTICES.push(TEMP_POINT[3]) // point c
			DRAWN.VERTICES.push(TEMP_POINT[4]) // point d
			DRAWN.VERTICES.push(TEMP_POINT[5]) // z2
			// storing 4th node
			DRAWN.VERTICES.push(TEMP_POINT[3]) // point c
			DRAWN.VERTICES.push(TEMP_POINT[1]) // point b
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z2
			// storing object info
			DRAWN.OBJECT.push(currentDrawnObject)


			// reset global vars and flags
			TYPE = ""
			COUNTER_POINT = 0
			TEMP_POINT = []
			COUNT = 0
			IS_DRAWING = false

			// drawing objects
			draw()
		}
		// console.log("posisi",COUNTER_POINT,currX,currY)
		// var vertex_position = getVerticePosition(currX,currY)		
		// console.log(vertex_position)
		// TEMP_POINT.push([vertex_position.x,vertex_position.y])
		// COUNTER_POINT += 1
		// console.log(TEMP_POINT)

		// // TEMP_POINT = [[x1,y1],[x2,y2]]

		// if (COUNTER_POINT == 2){
		// 	// cari panjang persegi
		// 	// var hypotenuseSquare = Math.sqrt(Math.pow(TEMP_POINT[0][0]-TEMP_POINT[1][0],2) + Math.pow(TEMP_POINT[0][1]-TEMP_POINT[1][1],2) )

		// 	// pivot point = titik pertama yg diclick user
		// 	console.log("WOI")
		// 	console.log(TEMP_POINT)

			

		// 	const pivotPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
		// 	const otherPoint = {x : TEMP_POINT[1][0], y : TEMP_POINT[1][1]}
			
		// 	var distanceX = Math.abs(pivotPoint.x - otherPoint.x)
		// 	var distanceY = Math.abs(pivotPoint.y - otherPoint.y)

		// 	console.log("DistanceX Y",distanceX,distanceY)

		// 	// Ikutin yg lebih kecil

		// 	const lengthSquare = Math.min(distanceX,distanceY)
		// 	console.log("lenth square before slider",lengthSquare)

		// 	var ARAH

		// 	DRAWN.COUNT_SHAPE ++

		// 	var info_obj = 
		// 	{
		// 		"id" : DRAWN.COUNT_SHAPE,
		// 		"type" : TYPE,
		// 		"start_idx" : START_IDX,
		// 		"count" : COUNT,
		// 		"color" : COLOR,
		// 		"scale" : SCALE,
		// 		"pivotPoint" : pivotPoint,
		// 		"otherPoint" : otherPoint,
		// 		"sqr_length" : lengthSquare,
		// 	}
		// 	DRAWN.OBJECT.push(info_obj)

		// 	// REFER -> INDEKS
		// 	// let VERTICES = [
		// 	// 	-0.5,-0.5,0, // 0
		// 	// 	-0.5,0.5,0, // 1
		// 	// 	0.5,-0.5,0, // 2
		// 	// 	0.5,0.5,0, // 3			
		// 	// ];
		// 	if (pivotPoint.x < otherPoint.x){
		// 		ARAH = "KANAN"

		// 		if (pivotPoint.y < otherPoint.y){
		// 			ARAH += "ATAS" // INDEKS 0
		// 			DRAWN.VERTICES.push(
		// 				pivotPoint.x, pivotPoint.y, 0, // 0
		// 				pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 1
		// 				pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 2
		// 				pivotPoint.x+lengthSquare, pivotPoint.y+lengthSquare, 0, // 3
		// 			)
		// 			// DRAWN.VERTICES = VERTICES
		// 			draw()
		// 		}else{
		// 			ARAH += "BAWAH" // INDEKS 1
		// 			DRAWN.VERTICES.push(
		// 				pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 0
		// 				pivotPoint.x, pivotPoint.y, 0, // 1
		// 				pivotPoint.x+lengthSquare, pivotPoint.y - lengthSquare, 0, // 2
		// 				pivotPoint.x+lengthSquare, pivotPoint.y, 0, // 3
		// 			)
		// 			// DRAWN.VERTICES = VERTICES
		// 			draw()
		// 		}
		// 	}else{
		// 		ARAH = "KIRI"
		// 		if (pivotPoint.y < otherPoint.y){
		// 			ARAH += "ATAS" // INDEKS 2
		// 			DRAWN.VERTICES.push(
		// 				pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 0
		// 				pivotPoint.x - lengthSquare, pivotPoint.y + lengthSquare, 0, // 1
		// 				pivotPoint.x, pivotPoint.y, 0, // 2
		// 				pivotPoint.x, pivotPoint.y + lengthSquare, 0, // 3
		// 			)
		// 			// DRAWN.VERTICES = VERTICES
		// 			draw()
		// 		}else{
		// 			ARAH += "BAWAH" // INDEKS 3
		// 			DRAWN.VERTICES.push(
		// 				pivotPoint.x - lengthSquare, pivotPoint.y - lengthSquare, 0, // 0
		// 				pivotPoint.x - lengthSquare, pivotPoint.y, 0, // 1
		// 				pivotPoint.x, pivotPoint.y - lengthSquare, 0, // 2
		// 				pivotPoint.x, pivotPoint.y, 0, // 3
		// 			)
		// 			// DRAWN.VERTICES = VERTICES
		// 			draw()
		// 		}
		// 	}

		// 	console.log(ARAH)

		// 	console.log("DRAWNN")
		// 	console.log(DRAWN)
		// }
	}else if (TYPE == "rectangle"){		
		COUNTER_POINT += 1

		// fetching data
		const currentVertexPos = getVerticePosition(currX, currY)

		// storing data
		TEMP_POINT.push(currentVertexPos.x)	// x value
		TEMP_POINT.push(currentVertexPos.y) // y value
		TEMP_POINT.push(0)					// z value
		
		// checking {deleted on production}
		console.assert(-1 <= currentVertexPos.x && currentVertexPos.x <= 1, "[!] INVALID x VALUE")
		console.assert(-1 <= currentVertexPos.y && currentVertexPos.y <= 1, "[!] INVALID y VALUE")
		
		if (COUNTER_POINT == COUNT){
			// storing temporary data
			var currentObjectId
			if (DRAWN.OBJECT.length == 0){
				currentObjectId = 1
			} else {
				currentObjectId = Number(DRAWN.OBJECT[DRAWN.OBJECT.length-1].id) + 1
			}
			const currentDrawnObject = {
				"id" : currentObjectId,
				"type" : "rectangle",
				"start_idx" : DRAWN.VERTICES.length,
				"count" : 4,
				"color" : COLOR.substring(1,COLOR.length-1).split(",").map((el) => Number(el))
			}
			// --- INFO ---
			// acquired points: (a,b,z1) and (c,d,z2)
			// ------------
			// storing 1st node
			DRAWN.VERTICES.push(TEMP_POINT[0]) // point a
			DRAWN.VERTICES.push(TEMP_POINT[1]) // point b
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z1
			// storing 2nd node
			DRAWN.VERTICES.push(TEMP_POINT[0]) // point a
			DRAWN.VERTICES.push(TEMP_POINT[4]) // point d
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z1
			// storing 3rd node
			DRAWN.VERTICES.push(TEMP_POINT[3]) // point c
			DRAWN.VERTICES.push(TEMP_POINT[4]) // point d
			DRAWN.VERTICES.push(TEMP_POINT[5]) // z2
			// storing 4th node
			DRAWN.VERTICES.push(TEMP_POINT[3]) // point c
			DRAWN.VERTICES.push(TEMP_POINT[1]) // point b
			DRAWN.VERTICES.push(TEMP_POINT[2]) // z2
			// storing object info
			DRAWN.OBJECT.push(currentDrawnObject)


			// reset global vars and flags
			TYPE = ""
			COUNTER_POINT = 0
			TEMP_POINT = []
			COUNT = 0
			IS_DRAWING = false

			// drawing objects
			draw()
		}

	}else if (TYPE == "line"){

		COUNTER_POINT += 1

		// fetching data
		const currentVertexPos = getVerticePosition(currX, currY)

		// storing data
		TEMP_POINT.push(currentVertexPos.x)	// x value
		TEMP_POINT.push(currentVertexPos.y) // y value
		TEMP_POINT.push(0)					// z value
		
		// checking {deleted on production}
		console.assert(-1 <= currentVertexPos.x && currentVertexPos.x <= 1, "[!] INVALID x VALUE")
		console.assert(-1 <= currentVertexPos.y && currentVertexPos.y <= 1, "[!] INVALID y VALUE")
		
		if (COUNTER_POINT == COUNT){
			// storing temporary data
			var currentObjectId
			if (DRAWN.OBJECT.length == 0){
				currentObjectId = 1
			} else {
				currentObjectId = Number(DRAWN.OBJECT[DRAWN.OBJECT.length-1].id) + 1
			}
			const currentDrawnObject = {
				"id" : currentObjectId,
				"type" : "line",
				"start_idx" : DRAWN.VERTICES.length,
				"count" : COUNT,
				"color" : COLOR.substring(1,COLOR.length-1).split(",").map((el) => Number(el))
			}

			DRAWN.VERTICES = DRAWN.VERTICES.concat(TEMP_POINT)
			DRAWN.OBJECT.push(currentDrawnObject)


			// reset global vars and flags
			TYPE = ""
			COUNTER_POINT = 0
			TEMP_POINT = []
			COUNT = 0
			IS_DRAWING = false

			// drawing objects
			draw()
		}

		// console.log("posisi",COUNTER_POINT,currX,currY)
		// var vertex_position = getVerticePosition(currX,currY)		
		// console.log(vertex_position)
		// TEMP_POINT.push([vertex_position.x,vertex_position.y])
		// COUNTER_POINT += 1
		// console.log(TEMP_POINT)

		// // TEMP_POINT = [[x1,y1],[x2,y2]]

		// if (COUNTER_POINT == 2){
		// 	console.log("WOI")
		// 	console.log(TEMP_POINT)
			
		// 	DRAWN.COUNT_SHAPE ++
		// 	var info_obj = 
		// 	{
		// 		"id" : DRAWN.COUNT_SHAPE,
		// 		"type" : TYPE,
		// 		"start_idx" : START_IDX,
		// 		"count" : COUNT,
		// 		"color" : COLOR,
		// 		"scale" : 1
		// 	}

		// 	const FirstPoint = {x : TEMP_POINT[0][0], y : TEMP_POINT[0][1]}
		// 	const SecondPoint = {x : TEMP_POINT[1][0], y : TEMP_POINT[1][1]}
			
		// 	DRAWN.VERTICES.push(
		// 		FirstPoint.x,FirstPoint.y,0,
		// 		SecondPoint.x,SecondPoint.y,0,
		// 	)
		// 	// DRAWN.VERTICES = VERTICES
		// 	DRAWN.OBJECT.push(info_obj)

		// 	draw()

		// }

	}else if (TYPE == "polygon"){
		
		COUNTER_POINT += 1

		// fetching data
		const currentVertexPos = getVerticePosition(currX, currY)

		// storing data
		TEMP_POINT.push(currentVertexPos.x)	// x value
		TEMP_POINT.push(currentVertexPos.y) // y value
		TEMP_POINT.push(0)					// z value
		
		// checking {deleted on production}
		console.assert(-1 <= currentVertexPos.x && currentVertexPos.x <= 1, "[!] INVALID x VALUE")
		console.assert(-1 <= currentVertexPos.y && currentVertexPos.y <= 1, "[!] INVALID y VALUE")
		
		if (COUNTER_POINT == COUNT){
			// storing temporary data
			var currentObjectId
			if (DRAWN.OBJECT.length == 0){
				currentObjectId = 1
			} else {
				currentObjectId = Number(DRAWN.OBJECT[DRAWN.OBJECT.length-1].id) + 1
			}
			const currentDrawnObject = {
				"id" : currentObjectId,
				"type" : "polygon",
				"start_idx" : DRAWN.VERTICES.length,
				"count" : COUNT,
				"color" : COLOR.substring(1,COLOR.length-1).split(",").map((el) => Number(el))
			}

			DRAWN.VERTICES = DRAWN.VERTICES.concat(TEMP_POINT)
			DRAWN.OBJECT.push(currentDrawnObject)


			// reset global vars and flags
			TYPE = ""
			COUNTER_POINT = 0
			TEMP_POINT = []
			COUNT = 0
			IS_DRAWING = false

			// drawing objects
			draw()
		}
	}
}
	



function init(){

	canvas.width = 550
	canvas.height = 550

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

	const getColor = (hex) => {
		console.log(hex);
		const [_, rgb] = hex.split("#");
		const red = parseInt(rgb.slice(0, 2), 16);
		const green = parseInt(rgb.slice(2, 4), 16);
		const blue = parseInt(rgb.slice(4, 6), 16);
		const alpha = 1;
		COLOR = `(${red/255}, ${green/255}, ${blue/255}, ${alpha})`;
		console.log(COLOR);
	};

	var widthSlider = document.getElementById("width");
	widthSlider.addEventListener("change", (e) => setWidth(e));

	var m = document.getElementById("color");
  	m.addEventListener("change", (e) => getColor(e.target.value));
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

			// if not drawing, "grab vertice" enabled
			if (IS_DRAWING == false){
				movedVerticeIndex = getMovedVerticeIndex(currX, currY)
			} else {
				console.log("IS DRAWING")
			} 
			
			if (movedVerticeIndex != null){
				// console.log(movedVerticeIndex)
				const selectingActive = document.getElementById("isSelecting")
				if (selectingActive.checked){
					alert("selecting item")
					selectedItemHandler()
				}else{
					console.log("+++++")
					setVERTICE(movedVerticeIndex, currX, currY);
					console.log("=====")
				}
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
    
	console.log(".......\nDRAWING\n.......")




	const gl = canvas.getContext( "webgl" );

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	console.log("VERTICES: ", DRAWN.VERTICES)

	var vertices = DRAWN.VERTICES

	gl.clearColor( 0.0, 0.0, 0.0, .25 );

	gl.enable( gl.DEPTH_TEST );

	gl.clear( gl.COLOR_BUFFER_BIT );

	gl.viewport( 0, 0, canvas.width, canvas.height );


	// drawing objects
	for (let i = 0; i<DRAWN.OBJECT.length; i++){

		// SETTING UP SHADER
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
		const objectColor = DRAWN.OBJECT[i].color;
		console.log(">>",objectColor)
		var fragCode = 
        `void main(void){
            gl_FragColor = vec4(${objectColor[0]},${objectColor[1]},${objectColor[2]},${objectColor[3]});
        }`;
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
	

		// drawing object
		let drawingType = gl.LINE_LOOP, startIndex=0, count = DRAWN.VERTICES.length/3
		switch (DRAWN.OBJECT[i].type) {
			case "line":
				drawingType = gl.LINES
				break;
			case "square":
				drawingType = gl.TRIANGLE_FAN
				break;
			case "rectangle":
				drawingType = gl.TRIANGLE_FAN
				break;
			case "polygon":
				drawingType = gl.LINE_LOOP
				break;
		}
		startIndex = DRAWN.OBJECT[i].start_idx/3
		count = DRAWN.OBJECT[i].count
		console.log(startIndex, count, DRAWN.VERTICES.length)
		gl.drawArrays( drawingType, startIndex, count);
	}
	// switch (drawn.OBJECT[index].type) {
	// 	case "line":
	// 		console.log("MASUK LINE")
	// 		gl.drawArrays( gl.LINES, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count);
	// 		break;
	// 	case "square":
	// 		console.log("MASUK SQR")
	// 		gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
	// 		break;
	// 	case "rectangle":
	// 		console.log("MASUK RTL")
	// 		gl.drawArrays( gl.TRIANGLE_STRIP, drawn.OBJECT[index].start_idx, drawn.OBJECT[index].count );
	// 		break;
	// }
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
		console.log(DRAWN.OBJECT)

		// draw()
		render(DRAWN)
    }
  
    reader.readAsText(file);
}

function render(data) {
	const gl = canvas.getContext( "webgl" );

	FLAG_UPLOAD = true

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	gl.clear(gl.COLOR_BUFFER_BIT);

	var vertices = data.VERTICES

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

		const objectColor = DRAWN.OBJECT[index].color;
		console.log(">>",objectColor)
		var fragCode = 
        `void main(void){
            gl_FragColor = vec4(${objectColor[0]},${objectColor[1]},${objectColor[2]},${objectColor[3]});
        }`;
		// var fragCode = 
		// 	`void main(void){
		// 		gl_FragColor = vec4${data.OBJECT[index].color};
		// 	}`;
			

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
	draw()
}

