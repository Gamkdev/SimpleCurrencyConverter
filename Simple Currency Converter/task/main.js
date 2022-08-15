const input = require('sync-input');
console.log("Welcome to Currency Converter!");
console.log(`1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`);

const array = ["JPY", "EUR", "RUB", "USD", "GBP"];
let fromCurrency;
let toCurrency;
let amount;
let converted;
let fromCurrAmount;
let toCurrAmount;
let menu;

do {
    console.log("What do you want to do?");
    menu = input('1-Convert currencies 2-Exit program\n');
    if (menu == 2) {
        console.log("Have a nice day!")
        break;
    }
    if (menu == 1) {
        getFromCurrency();
        continue;
    }
    console.log("Unknown input")
}
    while (true);


function getFromCurrency() {
    fromCurrency = input('What do you want to convert?\nFrom: ').toUpperCase();
    if (array.includes(fromCurrency) === true) {
        getToCurrency();
    } else {
        console.log("Unknown currency");
    }
}

function getToCurrency() {
    toCurrency = input('To: ').toUpperCase();
    if (array.includes(toCurrency) === true) {
        getAmount();
          } else {
        console.log("Unknown currency");
    }
}

function getAmount () {
    amount = Number(input('Amount: '));
    if ( amount < 1 ) {
        console.log("The amount cannot be less than 1");
    } else if (Number.isNaN(amount)) {
        console.log("The amount has to be a number");
    } else {
        conversion();
    }
}

function fromConversion () {
    switch (fromCurrency) {
        case "JPY":
            fromCurrAmount = 1 / 113.5;
            break;
        case "EUR":
            fromCurrAmount = 1 / 0.89;
            break;
        case "RUB":
            fromCurrAmount = 1 / 74.36;
            break;
        case "GBP":
            fromCurrAmount = 1 / 0.75;
            break;
        case "USD":
            fromCurrAmount = 1;
            break;
    }
}

function toConversion () {
    switch (toCurrency) {
        case "JPY":
            toCurrAmount = 113.5;
            break;
        case "EUR":
            toCurrAmount = 0.89;
            break;
        case "RUB":
            toCurrAmount = 74.36;
            break;
        case "GBP":
            toCurrAmount = 0.75;
            break;
        case "USD":
            toCurrAmount = 1;
            break;
    }
}

function conversion () {
    fromConversion();
    toConversion();
    converted = fromCurrAmount * amount * toCurrAmount;
    console.log(`Result: ${amount} ${fromCurrency} equals ${converted.toFixed(4)} ${toCurrency}`);
}
/*
switch (currency) {
    case "JPY":
        converted = amount * 113.5;
        console.log("Result: " + amount + " USD equals " + converted.toFixed(4) + " JPY");
        break;
    case "EUR":
        converted = amount * 0.89;
        console.log("Result: " + amount + " USD equals " + converted.toFixed(4) + " EUR");
        break;
    case "RUB":
        converted = amount * 74.36;
        console.log("Result: " + amount + " USD equals " + converted.toFixed(4) + " RUB");
        break;
    case "GBP":
        converted = amount * 0.75;
        console.log("Result: " + amount + " USD equals " + converted.toFixed(4) + " GBP");
        break;
    case "USD":
        converted = amount * 1;
        console.log("Result: " + amount + " USD equals " + converted.toFixed(4) + " USD");
        break;
    default:
        break;
}
*/
