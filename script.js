

// import { rectangle, rectangle } from './Object/glObject';
//  import {initShaderProgram} from './shader'

function main() {

  
    const canvas = document.querySelector("#glCanvas");
    canvas.width = 350;
    canvas.height = 350;

    // Initialize the GL context
    const gl = canvas.getContext("webgl");
  
    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }

      // Set clear color to black, fully opaque
      gl.clearColor(0.0, 0.0, 0.0, 0.5);
      // Clear the color buffer with specified clear color
      gl.clear(gl.COLOR_BUFFER_BIT);

    const vert = `
    attribute vec2 a_pos;
    uniform vec2 u_resolution;

    void main() {
        vec2 clipSpace = (a_pos / u_resolution) * 2.0 - 1.0;
        gl_Position = vec4(clipSpace, 0.0, 1.0);
    }
    `
    
    const frag = `
    precision mediump float;
    
    uniform vec4 u_fragColor;
    void main() {
      gl_FragColor = u_fragColor;
    }`

    const shaderProgram = initShaderProgram(gl, vert, frag);

    gl.useProgram(shaderProgram) // always use the program on the beginning




  
    const rectangleData = [
      -0.5,0.5,
      -0.5,-0.5,
      0.5,-0.5,
      0.5,0.5,
    ]

    // indices = [3,2,1,3,1,0];
    
    var rectangle = rectangle(1,shaderProgram,gl)
    rectangle.setVertexArray(rectangleData)
    rectangle.bind()
    rectange.draw()



    console.log(rectangle.getDrawType())


    // // Bind vertex buffer object
    // gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // // Bind index buffer object
    // gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer); 



    // const vertexPos = gl.getAttribLocation(shaderProgram, 'a_pos')
    // gl.vertexAttribPointer(vertexPos, 3, gl.FLOAT, false, 0, 0)

    // const uniformCol = gl.getUniformLocation(shaderProgram, 'u_fragColor')
    // gl.uniform4fv(uniformCol, [1.0, 0.0, 0.0, 0.5])

    
    // // Activate the vertex shader attribute to access the buffer object in a vertex shader
    // gl.enableVertexAttribArray(vertexPos) 

  

    // gl.drawElements(gl.TRIANGLES, indices.length,gl.UNSIGNED_SHORT,0)


  }
  
  window.onload = main;