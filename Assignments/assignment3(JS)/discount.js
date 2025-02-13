function discount(amt){
    if(amt<=500){
        return amt;
    }
    else if(amt>500 && amt<=1000){
        return (amt-(amt*0.1));
    }
    else if(amt>1000 && amt<=2000){
        return (amt-(amt*0.2));
    }
    else if(amt>2000){
        return (amt-(amt*0.3));
    }
    else{
        return "Enter valid amount";
    }
}

console.log(discount(5000))