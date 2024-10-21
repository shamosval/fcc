function checkCashRegister(price, cash, cid) {
    let priceInCents = price * 100;
    let cashInCents = cash * 100;
    let sumCidInCents = 0;

    for (let i = 0; i < cid.length; i++) {
        sumCidInCents += Math.ceil(cid[i][1] * 100);
    }

    let changeInCents = cashInCents - priceInCents;

    let change;

    if (changeInCents > sumCidInCents) {
        change = {status: "INSUFFICIENT_FUNDS", change: []};
        return change;
    }

    if (changeInCents == sumCidInCents) {
        change = {status: "CLOSED", change: cid};
        return change;
    }

    if (changeInCents < sumCidInCents) {
        console.log(changeInCents)
        console.log(cid[7])
        let arrChange = [];

        if (changeInCents > 2000 && cid[7][1] >= 20) {

        }

    }




}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);