function carWash(input) {
    
    class carInfo {
        constructor(brand, model, category, length) {
            this.brand = brand;
            this.model = model;
            this.category = category;
            this.length = length
        }
        priceInfo() {
            if(this.length >=5.20){
                this.category = truck 
                console.log(console.log(`Hello, your ${this.brand} ${this.model} is in category ${this.category} and the price for your CarWash is 8 lv`));
            }
            if (this.category === "car") {
                console.log(`Hello, your ${this.brand} ${this.model} is in category ${this.category} and the price for your CarWash is 4 lv`);
            }else if(this.category === "bus"){
                console.log(`Hello, your ${this.brand} ${this.model} is in category ${this.category} and the price for your CarWash is 6 lv`);
            }else if(this.category === "truck"){
                console.log(`Hello, your ${this.brand} ${this.model} is in category ${this.category} and the price for your CarWash is 8 lv`);
            }else{
                console.log(`Hello, your vehicle is in not in list, and it is too small, and the price for your CarWash will be 2 lv`);
            }

        }
    }
let vehicleInfo = 
`
Fiat Punto is a car with 3.75m length.
Subaru Outback is a car with a 5.25m length.
Land Rober Discovery  is a truck wtih a 5.25m length.
Renault Megane is a car with 5.15m length.
Alfa Romeo Giulietta is a car with a 4.85m length.
`
let car = ``
let brand = ``
let model = `` 
for (let i=0; i<input.length; i++){
car = input[i]
let lastIndex = car.lastIndexOf(` `)
brand = input[i].substring(0, lastIndex) 
model = input[i].substring(lastIndex)

}
let vehicleInfoArr = vehicleInfo.split(`, `)
for(let i=0; i<vehicleInfoArr.length; i++){
    let vehicleRow = vehicleInfoArr[i];
    length = vehicleRow.substring(vehicleRow.length-14, vehicleRow.length-8)
    console.log(length);
}
console.log(model);
}
carWash([`Fiat Punto`, `Subaru Outback`, `Alfa Romeo Giulietta`, `Renault Megane`]);


//Напишете програма, която да определя броя на колите изчакващи за всяка клетка - кола, джип, бус.
// Програмата определя  цената спрямо дължината на автомобила. 