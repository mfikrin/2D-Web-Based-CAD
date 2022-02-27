function draw(mode_draw,color_draw,vertex_data_draw,index_data_draw)
{
    const canvas = document.querySelector( "#glcanvas" );

    canvas.width = 575;
    canvas.height = 575;
    
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


     // ========== VERTEX BUFFER ==========

	var vertex_buffer = gl.createBuffer( );

	gl.bindBuffer( gl.ARRAY_BUFFER, vertex_buffer );

	gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertex_data_draw ), gl.STATIC_DRAW );

	gl.bindBuffer( gl.ARRAY_BUFFER, null );


    // ========== INDEX BUFFER ==========


    // if (mode_draw == "square" || true){
    //     // Create an empty buffer object to store Index buffer
       
    // }

    console.log("MASUK create buffer index")
    let Index_Buffer = gl.createBuffer();

    // Bind appropriate array buffer to it
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Index_Buffer );

    // Pass the vertex data to the buffer
    gl.bufferData( gl.ELEMENT_ARRAY_BUFFER, new Uint16Array (index_data_draw), gl.STATIC_DRAW );
    
    // Unbind the buffer
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, null );

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

    // if (mode_draw == "square" || true){
    //     // // Bind index buffer object
    //     // console.log("MASUK bind index")
    //     // gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Index_Buffer );
    // }

    // Bind index buffer object
    console.log("MASUK bind index")
    gl.bindBuffer( gl.ELEMENT_ARRAY_BUFFER, Index_Buffer );

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
        case "square":
            gl.drawElements( gl.TRIANGLES, index_data_draw.length, gl.UNSIGNED_SHORT, 0)
            // gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6);
            break;
        case "rectangle":
            gl.drawElements( gl.TRIANGLES, index_data_draw.length, gl.UNSIGNED_SHORT, 0)
            // gl.drawArrays( gl.TRIANGLE_STRIP, 0, 6);
            break;
        case "polygon":
            gl.drawArrays( gl.TRIANGLE_STRIP, 0, vertex_data_draw.length/3);
            break;
    }
	// gl.drawArrays( gl.TRIANGLE_FAN, 0, 6 );
}






var obj_tracking = {}

var draw_information = {
    "MODE" : "",
    "COLOR" : "",
    "VERTEX_DATA" : [],
    "INDICES" : []
}

// var obj_tracking = {
//     "id" : 0,
//     "info" : draw_information
    
// }
// console.log("obj_tracking")
// console.log(obj_tracking)

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
    draw_information["INDICES"] = []
    console.log(draw_information)

    draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA,draw_information.INDICES)
}

function sqr_btn(){
    console.log("yuhuu sqr")
    
    draw_information["MODE"] = "square"
    draw_information["COLOR"] = [0.0, 1.0, 0.0, 0.5]
    draw_information["VERTEX_DATA"] = [
        -0.5, 0.5,0,
		-0.5, -0.5,0,
        0.5, -0.5,0,
		0.5, 0.5,0,

    ]

    draw_information["INDICES"] = [3, 2, 1, 3, 1, 0]
    
    console.log(draw_information)

    draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA,draw_information.INDICES)
}


function rect_btn(){
    console.log("yuhuu rec")
    
    draw_information["MODE"] = "rectangle"
    draw_information["COLOR"] = [0.0, 1.0, 0.0, 0.5]
    draw_information["VERTEX_DATA"] = [
        -0.8, 0.5,0,
		-0.8, -0.5,0,
        0.8, -0.5,0,
		0.8, 0.5,0,

    ]

    draw_information["INDICES"] = [3, 2, 1, 3, 1, 0]
    
    console.log(draw_information)

    draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA,draw_information.INDICES)
}

function poly_btn(){

    console.log("yuhuu poly")
    
    draw_information["MODE"] = "polygon"
    draw_information["COLOR"] = [0.0, 1.0, 0.0, 0.5]
    draw_information["VERTEX_DATA"] = [
		-0.5, -0.2, 0.0,
		-0.1, 0.7, 0.0,
		0.2, 0.6, 0.0,
		0.7, -0.9, 0.0,
		0.7, 0.9, 0.0,
		-0.3, -0.3, 0.0,
    ]
    draw_information["INDICES"] = []

    draw(draw_information.MODE,draw_information.COLOR,draw_information.VERTEX_DATA,draw_information.INDICES)

}

function clr_btn(){

    console.log("yuhuu clear")
    
}

function loadfile() {
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

function saveFile(content,filename,contentType){
    const a = document.createElement("a");
    const file = new Blob([content], { type: contentType });
    a.href = URL.createObjectURL(file);
    a.download = filename;
    a.click();
    URL.revokeObjectURL(a.href);
  };

