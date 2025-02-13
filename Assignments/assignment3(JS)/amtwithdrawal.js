function withdraw(amt,withdrawal_amt){
    if (amt>withdrawal_amt){
        return "Insufficient Balance";
    }
    else if((amt%100==0 || amt%200==0 || amt%500==0 || amt%2000==0) && amt<withdrawal_amt){
        return withdrawal_amt-amt;
    }
    else{
        return "Enter valid amount";
    }
}

console.log(withdraw(5200,20000));