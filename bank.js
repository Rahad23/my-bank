   
// Deposit money
document.getElementById('deposit-btn').addEventListener('click', function(){

    const depositInput = document.getElementById('deposit');
    
        const depositValue = depositInput.value;
        const depostiValueConvartNumber = parseFloat(depositValue);
        // console.log(depostiValueConvartNumber);
        depositInput.value = "";
        if(depostiValueConvartNumber < 0){
        alert("something worng");
        return;
    }
        const depositMoney = document.getElementById('depostiMoney');
        const depositMoneyChack = depositMoney.innerText;
        const depositMoneyConsvartNumber = parseFloat(depositMoneyChack);
            // console.log(depositMoneyConsvartNumber);
        const number =  depostiValueConvartNumber + depositMoneyConsvartNumber;
        depositMoney.innerText = number;
    
        // Total balance
        const totalBalance = document.getElementById('totalbalace');
        const totalBalanceText = totalBalance.innerText;
        const ConvartNumber = parseFloat(totalBalanceText);
    
        const totalBalnceSet = depostiValueConvartNumber + ConvartNumber;
        totalBalance.innerText = totalBalnceSet;
    
    });
    
    // withdrow money
    
    // Withdrow section js
        document.getElementById('withdrow-btn').addEventListener('click', function(){
            const inputId = document.getElementById('withdrow-input');
            const inputValue = inputId.value;
            const inputValueConvart = parseFloat(inputValue);
            // console.log(inputValueConvart);
            // set withdrow ammount
            // Total balance
            const totalBalance = document.getElementById('totalbalace');
            const totalBalanceInertext = totalBalance.innerText;
            const totalBalanceConvart = parseFloat(totalBalanceInertext);
            inputId.value = "";
            if(inputValueConvart < 0){
                alert("something worng");
                return;
            }else if(inputValueConvart > totalBalanceConvart){
                alert("Apnar eto taka nai");
                return;
            }
    
            const setMoneyWithdrow = document.getElementById('withdrowSet');
            const getInerText = setMoneyWithdrow.innerText;
            const convartNumber = parseFloat(getInerText);
            // console.log(convartNumber);
    
            const calculateTotal = inputValueConvart + convartNumber;
            setMoneyWithdrow.innerText = calculateTotal;
    
            
            
            const setWithdrow = totalBalanceConvart - inputValueConvart;
            totalBalance.innerText = setWithdrow;
            
        });