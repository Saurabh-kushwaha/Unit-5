class CarBazar{
    constructor(brand) {
        this.brand = brand;
    }
    present() {
       return  `Yes That Present ${this.brand}`
    }
}

class Desire extends CarBazar{
    constructor(brand, Model) {
        super(brand);
        this.Model = Model;
    }
    Final() {
        return `${this.present()} Model ${ this.Model } ` 
    }
}

//

class Desire_1 extends CarBazar{
    constructor(brand, Model_1) {
        super(brand);
        this.Model_1 = Model_1;
    }
    Final_1() {
        return `${this.present()} Model ${ this.Model_1 } ` 
    }
}

var outPut = new Desire('TATA', 'PUNCH');
console.log(outPut.Final());
var outPut_1 = new Desire_1('BMW', 'AUDI Q3');
console.log(outPut_1.Final_1());