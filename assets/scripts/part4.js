function namedFuncion() {
  console.log("named function");
}

const anonFunc = function () {
  console.log("anonymous function");
};

const arrowFunc = () => {
  console.log("arrow function");
};

namedFuncion();
anonFunc();
arrowFunc();

const piggy = {
  total: 0,
  deposit: (money) => {
    console.log(money);
    console.log(this.total);
    this.total = this.total + money;
  },
  withdraw: (money) => {
    this.total = this.total - money;
  },
  checkBalance: () => {
    return this.total;
  },
};

piggy.deposit(25);
console.log(piggy.checkBalance());
