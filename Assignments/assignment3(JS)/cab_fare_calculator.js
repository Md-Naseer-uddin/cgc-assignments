function fare_calculator(distance){
    if(distance>=0 && distance<=5){
        return distance*10;
    }
    else if(distance>5 && distance<=15){
        return (50+((distance-5)*8));
    }
    else if(distance>15){
        return (130+((distance-15)*5));
    }
    else{
        return "Enter valid distance";
    }
}

console.log(fare_calculator(18))