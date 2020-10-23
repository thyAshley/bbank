const users = [
  {
    id: 1,
    name: "John",
    username: "john@example.com",
    password: 123123,
  },
  {
    id: 2,
    name: "James",
    username: "james@example.com",
    password: 123123,
  },
  {
    id: 3,
    name: "Joe",
    username: "joe@example.com",
    password: 123123,
  },
  {
    id: 4,
    name: "Jenny",
    username: "jenny@example.com",
    password: 123123,
  },
];

const accountDetails = [
  {
    id: 1,
    userId: 3,
    bank: [
      {
        bankId: 1,
        bankName: "Dbs",
        accountType: "Dbs savings",
        amount: 1234.5,
        accountNumber: "123-053-222-123",
      },
      {
        bankId: 2,
        bankName: "Citi Bank",
        accountType: "Citi savings",
        amount: 1200.12,
        accountNumber: "321-123-321-123",
      },
    ],
    creditCard: [
      {
        cardId: 1,
        bankName: "test",
        accountType: "test card",
        amount: 1234.5,
        cardNumber: "1234-5678-9012-3456",
      },
      {
        cardId: 2,
        bankName: "test 2",
        accountType: "test card 2",
        amount: 100,
        cardNumber: "1234-5678-9012-3456",
      },
    ],
  },
  {
    id: 2,
    userId: 1,
    bank: [
      {
        bankId: 1,
        bankName: "Citi Bank",
        accountType: "Citi savings",
        amount: 500.12,
        accountNumber: "321-123-321-123",
      },
    ],
    creditCard: [
      {
        cardId: 1,
        bankName: "test 2",
        accountType: "test card 2",
        amount: 150,
        cardNumber: "1234-5678-9012-3456",
      },
    ],
  },
  {
    id: 3,
    userId: 4,
    bank: [
      {
        bankId: 1,
        bankName: "Dbs",
        accountType: "Dbs savings",
        amount: 1234.5,
        accountNumber: "123-053-222-123",
      },
    ],
    creditCard: [],
  },
  {
    id: 4,
    userId: 2,
    bank: [],
    creditCard: [],
  },
];

const getAccountDetailsById = (userId) => {
  return accountDetails.find((account) => account.userId === userId);
};

const login = (email, password) => {
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === email) {
      if (users[i].password === password) {
        return "success";
      }
    }
    return "fail";
  }
};

const transferBank = (userId, fundBankId, targetBankId, amount) => {
  const account = accountDetails.find((account) => account.userId === userId);
  const { bank: banks } = account;
  const targetBank = banks.find((bank) => bank.bankId === targetBankId);
  const fundBank = banks.find((bank) => bank.bankId === fundBankId);
  if (targetBank && fundBank && fundBank.amount > amount) {
    targetBank.amount = +(targetBank.amount - amount).toFixed(2);
    fundBank.amount = +(fundBank.amount + amount).toFixed(2);
  }
  return account;
};

const transferCard = (userId, fundBankId, targetCardId, amount) => {
  const account = accountDetails.find((account) => account.userId === userId);
  const { bank: banks, creditCard: card } = account;
  const fundBank = banks.find((bank) => bank.bankId === fundBankId);
  const targetCard = card.find((card) => card.cardId === targetCardId);
  if (targetCard && fundBank && fundBank.amount > amount) {
    fundBank.amount = +(fundBank.amount - amount).toFixed(2);
    targetCard.amount = +(fundBank.amount - amount).toFixed(2);
  }
  return account;
};

console.log(transferCard(3, 1, 2, 1000));

module.exports = {
  getAccountDetailsById,
  login,
  transferBank,
};
