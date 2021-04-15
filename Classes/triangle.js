
class Point {
    constructor(x, y){
        if(x === undefined){x = 0;}
        if(y === undefined){y = 0;}
        this.x = x
        this.y = y
    }
}

class Triangle {
    constructor(point1,point2,point3){
        this.point1 = point1
        this.point2 = point2
        this.point3 = point3
    }
    get edgeA() {
        const x = this.point1.x - this.point2.x;
        const y = this.point1.y - this.point2.y;
        return Math.sqrt(x * x + y * y);
    }
    get edgeB() {
        const x = this.point1.x - this.point3.x;
        const y = this.point1.y - this.point3.y;
        return Math.sqrt(x * x + y * y);
    }
    get edgeC() {
        const x = this.point2.x - this.point3.x;
        const y = this.point2.y - this.point3.y;
        return Math.sqrt(x * x + y * y);
    }
    isTriangle() {
        [this.edgeA, this.edgeB, this.edgeC].sort((a, b) => a - b);
        if (this.edgeA <= 0 || this.edgeB <= 0 || this.edgeC <= 0) {
          return false;
        }
        if (this.edgeC >= this.edgeA + this.edgeB) {
          return false;
        }
      return true;
    }
    
    get perimeter() {
        if (!this.isTriangle()) return "Not a Triangle";
        return (this.edgeA + this.edgeB + this.edgeC)/2
    }
    get area(){
        const p = this.perimeter
        if (!this.isTriangle()) return "Not a Triangle";
        return Math.sqrt(p * (p - this.edgeA) * (p - this.edgeB) * (p - this.edgeC))
    } 
}
