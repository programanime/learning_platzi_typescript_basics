
function createPicture(title:string, date:string, level:number = 1, size?:Size):object{
    return {
        title, 
        date
    }
}

createPicture("", "")

function handleErrorTwo(code:number, message:string) : never | string {
    if(message=="error"){
        throw new Error(`the error is : ${code}`)
    }else{
        return message;
    }
}