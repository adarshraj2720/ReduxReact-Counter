
export function increment(){
    return{
        type:"increment"
    };
}

export function decrement(){
    return{
        type:"decrement"
    };
}
export function reset(){
    return{
        type:"reset",
        count:0
    };
}
export function updatestep(step){
    return{
        type:"changestep",
        payload:step,
    };
}