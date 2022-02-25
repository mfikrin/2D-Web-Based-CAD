class glObject{
    
    constructor(id, shader, gl){
        this.id = id
        // this.vertex_array = vertex_array
        this.shader = shader
        // this.position =  position
        // this.rotation = rotation
        // this.scale = scale
        this.gl = gl
    }

    getId(){
        return this.id;
    }

    setVertexArray(va) {
        this.vertex_array = va;
    }

    setPosition(x, y, z) {
        this.position = [x,y,z];
    }


    setRotation(rotation) {
        this.rotation = rotation;
    }

    

    // setScale(x, y) {
    //     this.scale = [x,y];
    // }
}

