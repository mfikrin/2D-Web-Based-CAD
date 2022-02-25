let MODE
let COLOR

MODE = "triangleStrip"
COLOR = "(0.0, 1.0, 0.0, .5)"
draw()

// MODE = "lines"
// COLOR = "(0.0, 0.0, 0.0, 1.0)"
// draw()

function draw( )
{
    const canvas = document.querySelector( "#glcanvas" );
    
	const gl = canvas.getContext( "webgl" );

	if ( !gl )
	{
		alert( "Unable to setup WebGL. Your browser or computer may not support it." );

		return;
	}

	var vertices = [
		-0.5, -0.2, 0.0,
		-0.1, 0.7, 0.0,
		0.2, 0.6, 0.0,
		0.7, -0.9, 0.0,
		0.7, 0.9, 0.0,
		-0.3, -0.3, 0.0,
	];

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


    
    gl.drawArrays( gl.TRIANGLE_STRIP, 0, 3 );
    gl.drawArrays( gl.LINES, 3, 2 );

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


