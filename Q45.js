function car_info(val)
{
    var car={}
    car.manufacturer=val.manufacturer
    car.model=val.model
    car.Color=val.Color
    car.Year=val.Year
    return car
}


var car_n={}
    car_n.manufacturer='Toyota'
    car_n.model='Corolla'
    car_n.Color='Black'
    //car_n.Year=2015
var up_car=car_info(car_n)
console.log(up_car)





