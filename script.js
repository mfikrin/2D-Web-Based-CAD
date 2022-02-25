
function loadfile(filename)
 {
  const file = filename;
  console.log(file);
 }


function main() {

  
    const canvas = document.querySelector("#glCanvas");
    canvas.width = 550;
    canvas.height = 550;

    // Initialize the GL context
    const gl = canvas.getContext("webgl");
  
    // Only continue if WebGL is available and working
    if (gl === null) {
      alert("Unable to initialize WebGL. Your browser or machine may not support it.");
      return;
    }
  
    const rectangleData = [
      -0.25,0.5,0.0,
      -0.25,-0.5,0.0,
      0.25,-0.5,0.0,
      0.25,0.5,0.0 
    ]

    indices = [3,2,1,3,1,0];

    // Create an empty buffer object to store vertex buffer
    var vertex_buffer = gl.createBuffer();

    // Bind appropriate array buffer to it
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Pass the vertex data to the buffer
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(rectangleData), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    // Create an empty buffer object to store Index buffer
    var Index_Buffer = gl.createBuffer();

    // Bind appropriate array buffer to it
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer);

    // Pass the vertex data to the buffer
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

    // Unbind the buffer
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

    const vert = `attribute vec3 a_pos;

    void main() {
      gl_Position = vec4(a_pos,1);
    }`
    
    const frag = `precision mediump float;
    
    uniform vec4 u_fragColor;
    void main() {
      gl_FragColor = u_fragColor;
    }`
    
    
    const vertShader = gl.createShader(gl.VERTEX_SHADER)
    gl.shaderSource(vertShader, vert)
    gl.compileShader(vertShader)
    
    const fragShader = gl.createShader(gl.FRAGMENT_SHADER)
    gl.shaderSource(fragShader, frag)
    gl.compileShader(fragShader)
    
    const shaderProgram = gl.createProgram()
    gl.attachShader(shaderProgram, vertShader)
    gl.attachShader(shaderProgram, fragShader)
    gl.linkProgram(shaderProgram)
    
    gl.useProgram(shaderProgram) // always use the program on the beginning


    // Bind vertex buffer object
    gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);

    // Bind index buffer object
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, Index_Buffer); 



    const vertexPos = gl.getAttribLocation(shaderProgram, 'a_pos')
    gl.vertexAttribPointer(vertexPos, 3, gl.FLOAT, false, 0, 0)

    const uniformCol = gl.getUniformLocation(shaderProgram, 'u_fragColor')
    gl.uniform4fv(uniformCol, [1.0, 0.0, 0.0, 0.5])

    
    // Activate the vertex shader attribute to access the buffer object in a vertex shader
    gl.enableVertexAttribArray(vertexPos) 

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.drawElements(gl.TRIANGLES, indices.length,gl.UNSIGNED_SHORT,0)


  }
  
  window.onload = main;