var bank_accounts = [
    {
        accountNumber: 9843,
        accountName: "James",
        balance: "INR 50000",
        transactions: [
            { type: "W", amount: "INR 4000" },
            { type: "D", amount: "INR 32000" }
        ]
    },
    {
        accountNumber: 7231,
        accountName: "Sarah",
        balance: "INR 75000",
        transactions: [
            { type: "W", amount: "INR 10000" },
            { type: "D", amount: "INR 5000" },
            { type: "W", amount: "INR 2000" }
        ]
    },
    {
        accountNumber: 2897,
        accountName: "John",
        balance: "INR 30000",
        transactions: [
            { type: "D", amount: "INR 15000" }
        ]
    },
    {
        accountNumber: 5326,
        accountName: "Emily",
        balance: "INR 40000",
        transactions: [
            { type: "D", amount: "INR 20000" },
            { type: "W", amount: "INR 5000" },
            { type: "D", amount: "INR 10000" }
        ]
    },
    {
        accountNumber: 1874,
        accountName: "Michael",
        balance: "INR 60000",
        transactions: [
            { type: "D", amount: "INR 3000" },
            { type: "W", amount: "INR 7000" },
            { type: "D", amount: "INR 15000" },
            { type: "W", amount: "INR 10000" }
        ]
    }
];


/* Q1. print only accont holder name and balance */
for (var i = 0; i < bank_accounts.length; i++) {
    console.log(bank_accounts[i].accountName + "  " + bank_accounts[i].balance);
}

/* Q2. print account holders name in ascending order */
var users = [];
for (var i = 0; i < bank_accounts.length; i++) {
    users.push(bank_accounts[i].accountName);
}

users.sort();
console.log(users);

/* Q3. print how much amount each account holder withdraw as per the given dataset */
for (var i = 0; i < bank_accounts.length; i++) {

    var sum = 0;
    for (var j = 0; j < bank_accounts[i].transactions.length; j++) {
        if (bank_accounts[i].transactions[j].type == "W") {
            sum += Number(bank_accounts[i].transactions[j].amount.split(" ")[1]);
        }
    }
    console.log(bank_accounts[i].accountName + "    " + sum);
}

/* Q4. print usernames in capital case escaping users whose name contains letter M/m */
for (let i = 0; i < bank_accounts.length; i++) {

    if (!(bank_accounts[i].accountName.includes("M") || bank_accounts[i].accountName.includes("m"))) {
        console.log(bank_accounts[i].accountName.toUpperCase())
    }
}

/* Q5. print grand total deposit amount */
var sum = 0;
for (var i = 0; i < bank_accounts.length; i++) {

    for (var j = 0; j < bank_accounts[i].transactions.length; j++) {
        if (bank_accounts[i].transactions[j].type == "D") {
            sum += Number(bank_accounts[i].transactions[j].amount.split(" ")[1]);
        }
    }
}
console.log(" grand total deposit amount  " + sum + "\n");


/* Q6. delete account whose balance is less than 45000 */
for (let i = 0; i < bank_accounts.length; i++) {
    if (Number(bank_accounts[i].balance.split(" ")[1]) < 45000) {

        var name = bank_accounts[i].accountName;

        // delete bank_accounts[i];

        bank_accounts.splice(i, 1)
        i--;
        console.log("\nBankAccount of " + name + " Deleted");

    }

}

var arrnew = []
/* Q7. create a copy of account at the end of the bank_accouts whose total number of transactions are more than or 
   equal to 4 */

for (let i = 0; i < bank_accounts.length; i++) {
    if (bank_accounts[i].transactions.length >= 4) {
        arrnew.push(bank_accounts[i]);
        // console.log(i);
    }
}

console.log("\nBankAcounnt With Copy");
bank_accounts = bank_accounts.concat(arrnew)

console.log(bank_accounts)

/* Q8. print accountNumber, account holder name order by their accountNumber */

bank_accounts.sort(function (a, b) {
    return a.accountNumber - b.accountNumber;
});

for (let i = 0; i < bank_accounts.length; i++) {
    console.log(bank_accounts[i].accountNumber + " " + bank_accounts[i].accountName);
}
