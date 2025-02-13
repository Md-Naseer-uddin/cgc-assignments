function conversion(units) {
    var fifty_units = 125;
    var hundred_units = 325;
    var two_hundred_units = 925;

    if (units >= 0 && units <= 50) {
        return (units * 2.5);
    }
    else if (units > 50 && units <= 100) {
        return (fifty_units + ((units - 50) * 4));
    }
    else if (units > 100 && units <= 200) {
        return (hundred_units + ((units - 100) * 6));
    }
    else if (units > 200) {
        return (two_hundred_units + ((units - 200) * 8));
    }
    else {
        return 'Enter valid units';
    }
}

console.log(conversion(260));