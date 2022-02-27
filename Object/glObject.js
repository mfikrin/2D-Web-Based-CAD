class glObject{
    
    constructor(id, shader, gl){
        this.id = id
        this.shader = shader
        this.color = [1.0,1.0,1.0,1.0] // default black
        this.gl = gl
    }

    getId(){
        return this.id
    }

    getDrawType() {
        return this.gl.TRIANGLES
    }

    getObjectType(){
        return "gLObject";
    }

    setVertexArray(va) {
        this.vertex_array = va
    }

    setColor(color){
        this.color = color
    }

    bind() {
        const gl_bind = this.gl
        const vbo = gl_bind.createBuffer()
        gl_bind.bindBuffer(gl.ARRAY_BUFFER, vbo)
        gl_bind.bufferData(gl.ARRAY_BUFFER, new Float32Array(this.vertex_array), gl.STATIC_DRAW)
    }

    draw() {
        const gl_draw = this.gl
        gl_draw.useProgram(this.shader)
        const u_resolution = gl_draw.getUniformLocation(this.shader, "u_resolution")
        gl_draw.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height)
        var vertexPos = gl_draw.getAttribLocation(this.shader, 'a_pos')
        var uniformCol = gl_draw.getUniformLocation(this.shader, 'u_fragColor')
        gl_draw.vertexAttribPointer(vertexPos, 2, gl.FLOAT, false, 0, 0)
        gl_draw.uniform4fv(uniformCol, this.col)
        gl_draw.enableVertexAttribArray(vertexPos)
        gl_draw.drawArrays(this.getDrawType(), 0, this.va.length/2)
    }

    var uniformCol = gl_draw.getUniformLocation(this.shader, 'u_fragColor')
        gl_draw.uniform4fv(uniformCol, this.col)


}

// module.exports = glObject

// // const gl = new glObject(1,"shader","gl")

// // gl.setRotation(120)

// // console.log(gl.rotation)


class line extends glObject{
    
    getDrawType(){
        return this.gl.LINES
    }

    getObjectType(){
        return "line";
    }
}

class square extends glObject{
    
    getDrawType() {
        return this.gl.TRIANGLE_FAN;
      }
    
    getObjectType(){
        return "square";
    }
}

class rectangle extends glObject{
    constructor(id, shader, gl){
        super(id, shader, gl)
    }    
    getDrawType() {
        return this.gl.TRIANGLE_FAN;
      }
    
    getObjectType(){
        return "rectangle";
    }
}

class poligon extends glObject{
    getDrawType() {
        return this.gl.TRIANGLE_FAN;
    }

    getObjectType(){
        return "polygon";
    }
}
