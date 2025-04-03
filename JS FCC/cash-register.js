//Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
//
// cid is a 2D array listing available currency.
//
// The checkCashRegister() function should always return an object with a status key and a change key.
//
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
//
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
//
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.


// Passed:1. checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return an object.
// Passed:2. checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["QUARTER", 0.5]]}.
// Passed:3. checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]) should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// Passed:4. checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Passed:5. checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "INSUFFICIENT_FUNDS", change: []}.
// Passed:6. checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]) should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.


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

        if (giveExactChange(changeInCents,cid) == 'no_exact_change') {
            change = {status: "INSUFFICIENT_FUNDS", change: []}
            console.log(change)
            return change;
        } else {
            change = {status: "OPEN", change: giveExactChange(changeInCents,cid)}

            return change;
        }


    }



    function giveExactChange (numInCents, cid) {
        let changeArr = [];

        //Twenties

        if (numInCents / (cid[7][1] * 100) > 1 && cid[7][1] != 0) {
            changeArr.push(cid[7]);
            numInCents = numInCents - (cid[7][1] * 100);

        } else {
            let billsToGive = Math.floor(numInCents / 2000);
            if (billsToGive >= 1 && cid[7][1] != 0) {

                changeArr.push([cid[7][0], 20*billsToGive]);
                numInCents = numInCents - (2000*billsToGive);
            }

        }

        //Tens
        if (numInCents / (cid[6][1] * 100) > 1 && cid[6][1] != 0) {
            changeArr.push(cid[6]);
            numInCents = numInCents - (cid[6][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 1000);
            if (billsToGive >= 1 && cid[6][1] != 0) {
                changeArr.push([cid[6][0], 10*billsToGive]);
                numInCents = numInCents - (1000*billsToGive);
            }

        }
        //Fives
        if (numInCents / (cid[5][1] * 100) > 1 && cid[5][1] != 0) {
            changeArr.push(cid[5]);
            numInCents = numInCents - (cid[5][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 500);
            if (billsToGive >= 1 && cid[5][1] != 0) {
                changeArr.push([cid[5][0], 5*billsToGive]);
                numInCents = numInCents - (500*billsToGive);
            }

        }

        //Ones
        if (numInCents / (cid[4][1] * 100) > 1 && cid[4][1] != 0) {
            changeArr.push(cid[4]);
            numInCents = numInCents - (cid[4][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 100);
            if (billsToGive >= 1 && cid[4][1] != 0) {
                changeArr.push([cid[4][0], 1*billsToGive]);
                numInCents = numInCents - (100*billsToGive);
            }

        }
        //Quarters

        if (numInCents / (cid[3][1] * 100) > 1 && cid[3][1] != 0) {
            changeArr.push(cid[3]);
            numInCents = numInCents - (cid[3][1] * 100);

        } else {

            let billsToGive = Math.floor(numInCents / 25);

            if (billsToGive >= 1 && cid[3][1] != 0) {
                changeArr.push([cid[3][0], .25*billsToGive]);
                numInCents = numInCents - (25*billsToGive);
            }

        }

        //Dimes
        if (numInCents / (cid[2][1] * 100) > 1 && cid[2][1] != 0) {
            changeArr.push(cid[2]);
            numInCents = numInCents - (cid[2][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 10);
            if (billsToGive >= 1 && cid[2][1] != 0) {
                changeArr.push([cid[2][0], .1*billsToGive]);
                numInCents = numInCents - (10*billsToGive);
            }

        }
        //Nickels
        if (numInCents / (cid[1][1] * 100) > 1 && cid[1][1] != 0) {
            changeArr.push(cid[1]);
            numInCents = numInCents - (cid[1][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 5);
            if (billsToGive >= 1 && cid[1][1] != 0) {
                changeArr.push([cid[1][0], .05*billsToGive]);
                numInCents = numInCents - (5*billsToGive);
            }
        }

        //Pennies
        if (numInCents / (cid[0][1] * 100) > 1 && cid[0][1] != 0) {
            changeArr.push(cid[0]);
            numInCents = numInCents - (cid[0][1] * 100);
        } else {
            let billsToGive = Math.floor(numInCents / 1);
            if (billsToGive >= 1 && cid[0][1] != 0) {
                changeArr.push([cid[0][0], .01*billsToGive]);
                numInCents = numInCents - (1*billsToGive);
            }
        }
        if (numInCents == 0) {
            return changeArr;
        } else {
            return 'no_exact_change';
        }

    }






}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])