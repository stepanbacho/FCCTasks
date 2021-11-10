const DENOMINATIONS = [
    ["PENNY", 1], ["NICKEL", 5], ["DIME", 10], ["QUARTER", 25], ["ONE", 100], ["FIVE", 500], ["TEN", 1000], ["TWENTY", 2000], ["ONE HUNDRED", 10000]
  ]
  function checkCashRegister(price, cash, cid) {
    let amountReturn = Math.round((cash - price) * 100);
    let cashOnHand = {};
    let cashToGive = {};
    cid.forEach(function (denomination) {
      cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
    })
  
    let index = DENOMINATIONS.length - 1;
    while (index >= 0) {
      let moneyName = DENOMINATIONS[index][0];
      let moneyValue = DENOMINATIONS[index][1];
  
      if (amountReturn - moneyValue > 0) {
        cashToGive[moneyName] = 0;
        while (cashOnHand[moneyName] > 0 && amountReturn - moneyValue >= 0) {
          cashOnHand[moneyName] -= moneyValue;
          cashToGive[moneyName] += moneyValue;
          amountReturn -= moneyValue;
        }
      }
      index -= 1;
    }
    if (amountReturn === 0) {
      let isRegisterEmpty = true;
      Object.keys(cashOnHand).forEach(function (moneyType) {
        if (cashOnHand[moneyType] > 0) {
          isRegisterEmpty = false;
        }
        console.log(isRegisterEmpty);
      })
        if (isRegisterEmpty) {
          return { status: "CLOSED", change: cid }
        }
        else {
          let changeArr = [];
          Object.keys(cashToGive).map(moneyType => {
            if (cashToGive[moneyType] > 0) {
              changeArr.push([moneyType, cashToGive[moneyType] / 100])
            }
          });
          return { status: "OPEN", change: changeArr };
        }
  
    }
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }
  let cid = [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
  
//   let res = checkCashRegister(19.5, 20, cid);
//   console.log(res);