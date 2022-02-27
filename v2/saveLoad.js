/*
 Example json

 {
    vertices : VERTICES,
    object : 
        {
            id : 1,
            type : "square" / "rectangle" / "line" / "polygon"
            start_idx : 0
            count : 2
            color : [1,1,1,1]
        }
        ,
        {
            id : 2,
            type : "square" / "rectangle" / "line" / "polygon"
            start_idx : 0
            count : 2
            color : [1,1,1,1]
        }
        ,

    ]
 }


*/

var drawn =

{
    "VERTICES" : 
    [
        -0.5,-0.5,0, // 1
        -0.5,0.5,0, // 0
        0.5,-0.5,0, // 2
        0.5,0.5,0, // 3
    ]
    ,
    "OBJECT" :
    [
        {
            "id" : 1,
            "type" : "square",
            "start_idx" : 0,
            "count" : 2,
            "color" : [1,1,1,1]
        },   
    ]
}

function saveFile(drawns){
    
    const a = document.createElement("a");

    const file = new Blob([JSON.stringify(drawns)], { type: "json" });
    a.href = URL.createObjectURL(file);
    a.download = "filename.json";
    a.click();
    URL.revokeObjectURL(a.href);
  };

// saveFile(drawn)




//   downloadToFile(JSON.stringify(json_string),"anjay.json","json")


  

