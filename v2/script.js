let MODE
let COLOR
let VERTICES = [
	-0.5, -0.0, 0.0,
	-0.1, 0.7, 0.0,
	0.2, 0.6, 0.0,
	0.7, -0.9, 0.0,
	0.7, 0.9, 0.0,
	-0.3, -0.3, 0.0,
];

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
			console.log("CLICK");
			movedVerticeIndex = getMovedVerticeIndex(currX, currY)
			if (movedVerticeIndex != null){
				// console.log(movedVerticeIndex)
				console.log("+++++")
				setVERTICE(movedVerticeIndex, currX, currY);
				console.log("=====")
			}


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


    
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6 );
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


