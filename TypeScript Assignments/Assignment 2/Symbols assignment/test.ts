class genFibonacci{
    private previourNo : number;
    private currentNo: number; 
    constructor(prev: number, curr: number){
        this.previourNo = prev;
        this.currentNo = curr;
    }

    next(){ 
        return this.previourNo+this.currentNo;
    }
}

let obj1 = new genFibonacci(1, 2); 
console.log(obj1.next());