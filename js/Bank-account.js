/* Напиши скрипт управління особистим кабінетом інтернет банку. Є об'єкт 'account`
   в якому необхідно реалізувати методи для работи з балансом та історією
   транзакцій.
*/

/*
   * Типів транзакцій всього два.
   * Можно покласти чи зняти грощі з рахунку.
*/

const TRANSACTION = {
    DEPOSIT: 'deposit', //покласти
    WITHDRAW: 'withdraw', //зняти
};


/*
    Кожна транзакція це об'єкт із властивостями: id '', type '' та amount ''.
*/

const account = {
    // Поточний баланс рахунку
    balance: 0,

    // Історія транзакцій
    transactions: [],


/*
    Метод створює та повертає об'єкт транзакції.
    Приймає сумму та тип транзакції.
*/
createTransaction(amount, type) {
    // console.log('createTransaction', amount, type);
    return {
        type,
        amount,
        id: this.transactions.length,
    };
},

/*
    Метод що відповідає за додавання суми до балансу.
    Приймає сумму транзакції.
    Викликає createTransaction для створення об'єкта транзакції.
    після чого додє його до історії транзакцій.
*/

deposit(amount) {
    this.balance += amount;
    
    const transaction = this.createTransaction(amount, TRANSACTION.DEPOSIT);
    this.transactions.push(transaction);
},

/*
    Метод, що відповідає за зняття суми з балансу.
    Приймає суму транзакцї.
    Викликає createTransaction для створення об'єкта транзакції.
    після чого додє його до історії транзакцій.

    Якщо amount більше ніж поточний баланс, виводь повідомлення
    про те, що зняття такох сумми не можливе, недостатньо коштів.
*/
withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
        const transaction = this.createTransaction(amount, TRANSACTION.WITHDRAW);
        this.transactions.push(transaction);
    } else {
        // console.error('Недостатньо коштів на рахунку');
    }
 
},

/*
    Метод повертає поточний баланс
*/
getBalance() {
    return this.balance;
},

getTransactions() {
    return this.transactions;
},

/*
    Метод шукає та повертає об'єкт транзакції по id
*/
getTransactionDetails(id) {
    console.log(id);

    for (const transaction of this.transactions) {
        if (transaction.id === id) {
           return transaction;
        }
    }

    console.error(`Транзакція з ID: ${id} не знайдена`)
    return null;
},

/*
    Метод повертає кількість коштів
    певного типу транзакцій з усієї транзакції
*/
getTransactionTotal(type) {
    let totalAmout = 0;

    for (const transaction of this.transactions) {
        if (transaction.type === type) {
            totalAmout +=   transaction.amount;
        }
    }

    return totalAmout;
},
};


// console.log('getBalance ', account.getBalance())

// console.log('deposit transactions')
account.deposit(120);
account.withdraw(340);
account.withdraw(10);
account.deposit(20);
// console.log('getBalance ', account.getBalance())
// console.log('getTransactions ', account.getTransactions())

// console.log('withdraw transactions')
account.deposit(34);
account.withdraw(77);
account.deposit(230);
account.withdraw(620);
// console.log('getTransactions ', account.getTransactions())
// console.log('getBalance ', account.getBalance())

// console.log(account.getTransactionDetails(11))

console.log(account.getTransactionTotal(TRANSACTION.DEPOSIT));