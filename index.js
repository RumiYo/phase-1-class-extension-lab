// Your code here
class Polygon{
    constructor(array){
        this.array = array;
    }

    get countSides(){
        return this.array.length;
    }
    get perimeter(){
        return this.array.reduce((x,y) => x+y);
    }
}

class Triangle extends Polygon {
    get isValid(){
        let perimeter = this.perimeter; 
        let isValid = true;
        for(const item of this.array){
            if ((perimeter-item) < item){
                isValid = false;
            }
        }
        return isValid;
    }
}

class Square extends Polygon {
    get isValid(){
        let oneSide = this.perimeter/4; 
        let isValid = true;
        for (const item of this.array){
            if(item !== oneSide){
                isValid = false;
            }
        }
        return isValid;
    }
    get area(){
        return this.array[0] * this.array[1];
    }
}