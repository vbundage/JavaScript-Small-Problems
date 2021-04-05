const OPERATIONSARR = ['PUSH', 'ADD', 'SUB', 'MULT', 'DIV', 'MOD', 'POP', 'PRINT'];

/* eslint-disable max-lines-per-function */
let minilang = function(operations) {
  let register = 0;
  const stack = [];

  let operationsList = operations.split(' ');

  let determineOperation = function(op) {
    switch (true) {
      case !Number.isNaN(Number(op)) :
        register = parseInt(op, 10);
        break;
      case op === 'PUSH':
        stack.push(register);
        break;
      case op === 'ADD':
        register += stack.pop();
        break;
      case op === 'SUB':
        register -= stack.pop();
        break;
      case op === 'MULT':
        register *= stack.pop();
        break;
      case op === 'DIV':
        register = Math.floor(register / stack.pop());
        break;
      case op === 'MOD':
        register %= Math.floor(stack.pop());
        break;
      case op === 'POP':
        register = stack.pop();
        break;
      case op === 'PRINT':
        console.log(register);
        break;
    }
  };

  operationsList.forEach(op => {
      determineOperation(op);
  });

  return undefined;
};

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)