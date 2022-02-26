

// MODE = "triangleStrip"
// COLOR = "(0.0, 1.0, 0.0, .5)"
// draw()

// MODE = "lines"
// COLOR = "(0.0, 0.0, 0.0, 1.0)"


function draw(mode_draw,color_draw,vertex_data_draw)
{
    const canvas = document.querySelector( "#glcanvas" );

    canvas.width = 600;
    canvas.height = 600;
    
	const gl = canvas.getContext( "webgl" );

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

     // Set clear color to black, fully opaque
     gl.clearColor(1.0, 1.0, 1.0, 0.5);
     // Clear the color buffer with specified clear color
     gl.clear(gl.COLOR_BUFFER_BIT);

	// var vertices = [
	// 	-0.5, -0.2, 0.0,
	// 	-0.1, 0.7, 0.0,
	// 	0.2, 0.6, 0.0,
	// 	0.7, -0.9, 0.0,
	// 	0.7, 0.9, 0.0,
	// 	-0.3, -0.3, 0.0,
	// ];

	var vertex_buffer = gl.createBuffer( );

	gl.bindBuffer( gl.ARRAY_BUFFER, vertex_buffer );

	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertex_data_draw ), gl.STATIC_DRAW );

	gl.bindBuffer( gl.ARRAY_BUFFER, null );

	var vertCode = 
		'attribute vec3 coordinates;' +
		'void main(void)' +
		'{' +
			' gl_Position = vec4(coordinates, 1.0);' +
		'}';


    // var vertCode = 
    // `
    // attribute vec2 a_pos;
    // uniform vec2 u_resolution;

    // void main() {
    //     vec2 clipSpace = (a_pos / u_resolution) * 2.0 - 1.0;
    //     gl_Position = vec4(clipSpace, 0.0, 1.0);
    // }
    // `

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
            gl_FragColor = vec4${color_draw};
        }`;
		'void main(void)' +
		'{' +
			' gl_FragColor = vec4' + color_draw +
		'}';

    // var fragCode = 
    // `
    // precision mediump float;
    
    // uniform vec4 u_fragColor;
    // void main() {
    //   gl_FragColor = u_fragColor;
    // }
    // `
		

	var fragShader = gl.createShader( gl.FRAGMENT_SHADER );

	gl.shaderSource( fragShader, fragCode);

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
    
    // gl.drawArrays( gl.TRIANGLE_STRIP, 0, 3 );
    // gl.drawArrays( gl.LINES, 3, 2 );

    // console.log(mode_draw)
    switch (mode_draw) {
        case "lines":
            gl.drawArrays( gl.LINES, 0, vertex_data_draw.length/3);
            break;
        case "triangles":
            gl.drawArrays( gl.TRIANGLES, 0, vertex_data_draw.length/3 );
            break;
        case "polygon":
            gl.drawArrays( gl.TRIANGLE_STRIP, 0, vertex_data_draw.length/3);
            break;
    }
	// gl.drawArrays( gl.TRIANGLE_FAN, 0, 6 );
}



let MODE
let COLOR
let VERTEX_DATA
var draw_information = {
    "MODE" : "",
    "COLOR" : "",
    "VERTEX_DATA" : []
}

// var draw_information = {
//     MODE = "mode",
//     COLOR = "color",
//     VERTEX_DATA = []
// }



function line_btn(){
    console.log("yuhuu line")
    
    draw_information["MODE"] = "lines"
    draw_information["COLOR"] = "(0.0, 1.0, 0.0, .5)"
    draw_information["VERTEX_DATA"] = [
        -0.5, -0.2, 0.0,
		-0.1, 0.7, 0.0,
    ]
    console.log(draw_information)

    draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA)
}

// console.log(draw_information)
// console.log(draw_information.MODE)

// draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA)

