function showInfo(user: any): void{
    console.log("user info", user.id, user.username, user.firstname)
}

console.log(showInfo)

showInfo({id:1, username:"daniel", firstname:"molina"})

function handleError(code:number, message:string): never{
    throw new Error("");
}

handleError(404, "not found");

function sumNumbers(limit: number): never{
    let sum = 0
    while(true){
        sum++;
    }
}

