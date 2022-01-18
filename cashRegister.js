function checkCashRegister(price, cash, cid) {
  let change =[];
  let debt = cash - price;
  cid = cid.reverse();
  let temp = 0;
  let dolarValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1.0,
    FIVE: 5.0,
    TEN: 10.0,
    TWENTY: 20.0,
    'ONE HUNDRED': 100
  };
  let totalCidValue = cid.reduce((sum, [type, value]) => {
    if (dolarValues[type] <= debt) {
      temp = Math.floor(debt/dolarValues[type]) * dolarValues[type];
      if (temp > value) {
        debt -= value;
        debt = Math.round(debt * 100) / 100;
        change.push([type, value]);
        return sum = sum + value;
      }
      else {
        debt -= temp;
        debt = Math.round(debt * 100) / 100;
        change.push([type, temp]);
        return sum = sum + temp;
      }
    }
      return sum = sum;
    }, 0);
  if (totalCidValue < (cash - price)) {
    return {status: "INSUFFICIENT_FUNDS", change: []};
  }
  else {
    if (cid.reduce((sum, [_, value]) => sum + value, 0) == (cash - price)) {
      return {status: "CLOSED", change: cid.reverse()};
    }
    else {
      return {status: "OPEN", change: change};
    }
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
