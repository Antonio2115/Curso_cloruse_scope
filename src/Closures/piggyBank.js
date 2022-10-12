// function moneyBox(coins) {
//   let saveCoins = 0;
//   saveCoins += coins;
//   console.log(`MoneyBox: $${saveCoins}`);
// }

// moneyBox(5);
// moneyBox(5);

function moneyBox() {
    let saveCoins = 0;
    return {
        saveMoney: function (coins) {
            saveCoins += coins;
            console.log(`MoneyBox: $${saveCoins}`)
        },
        removeMoney: function (coins) {
            if(coins < saveCoins) {
                saveCoins -= coins;
                console.log(`MoneyBox: $${saveCoins}`)
            }
            else{
                console.log('No puedes retirar esa candidad')
            }
        },
        checkMoney:function () {
            console.log(`MoneyBox: $${saveCoins}`)
        },
    };
  }
  
const myMoneyBox = moneyBox();
myMoneyBox.saveMoney(50);
myMoneyBox.saveMoney(50);
myMoneyBox.removeMoney(10);
myMoneyBox.removeMoney(120);
myMoneyBox.checkMoney();
 