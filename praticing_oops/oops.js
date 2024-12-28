class Car{
    constructor(model,color){
        this.model=model;
        this.color=color;
        this.getMethod=function(){
            return `car is ${this.model} and color is ${this.color}`;
        }

    }
}

class SuperCar extends Car{
    constructor(features,model,color){
        super(model,color);
        this.features=features;

    }
}

const bmwCar= new SuperCar("sport_mode","f1","red");
console.log(bmwCar.getMethod())