enum Orientation {
    Landscape, 
    Portrait,
    Square,
    Panorama
}

interface Image {
    size?:Size
}

interface Picture{
    readonly id: number;
    title:string;
    date:string; 
    orientation?: Orientation;
}

function showPicture(picture:Picture){
    console.log(picture)    
}

showPicture({id:10, title:"the book", date:"12 dic 2021"})