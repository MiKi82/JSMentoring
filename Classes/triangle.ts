class PointTs {
  
    constructor(readonly x: number, readonly y: number){
        if(x === undefined){x = 0;}
        if(y === undefined){y = 0;}
        this.x = x
        this.y = y
    }
}

class TriangleTs {
    
    constructor(readonly point1: PointTs, readonly point2: Point, readonly point3: Point){
        this.point1 = point1
        this.point2 = point2
        this.point3 = point3
    }

    get edgeA(): number {
        const x = this.point1.x - this.point2.x;
        const y = this.point1.y - this.point2.y;
        return Math.sqrt(x * x + y * y);
    }

    get edgeB(): number {
        const x = this.point1.x - this.point3.x;
        const y = this.point1.y - this.point3.y;
        return Math.sqrt(x * x + y * y);
    }

    get edgeC(): number {
        const x = this.point2.x - this.point3.x;
        const y = this.point2.y - this.point3.y;
        return Math.sqrt(x * x + y * y);
    }

    isTriangle(): boolean {
        [this.edgeA, this.edgeB, this.edgeC].sort((a, b) => a - b);
        if (this.edgeA <= 0 || this.edgeB <= 0 || this.edgeC <= 0) {
          return false;
        }
        if (this.edgeC >= this.edgeA + this.edgeB) {
          return false;
        }
      return true;
    }
    
    get perimeter(): any {
        if (!this.isTriangle()) return "Not a Triangle";
        return (this.edgeA + this.edgeB + this.edgeC)
    }

    get area(): any {
        if (!this.isTriangle()) return "Not a Triangle";
        const p: number = this.perimeter / 2
        return Math.sqrt(p * (p - this.edgeA) * (p - this.edgeB) * (p - this.edgeC))
    } 
}