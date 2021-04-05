/*
Complete this class so that the test cases shown below work as intended. You are free to add any properties you need.

You may assume that the input will always fit in your terminal window.

Test Cases

let banner1 = new Banner('To boldly go where no one has gone before.');
banner1.displayBanner();
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

let banner2 = new Banner('');
banner2.displayBanner();
+--+
|  |
|  |
|  |
+--+
*/

class Banner {
  constructor(message = "", width) {
    this.message = message;
    this.width = width <= this.message.length ? width : this.message.length;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+${'-'.repeat((this.width || this.message.length) + 2)}+`;
  }

  emptyLine() {
    return `|${' '.repeat((this.width || this.message.length) + 2)}|`;
  }

  messageLine() {
    if (this.width) this.message = this.message.slice(0, this.width);
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner('To boldly go where no one has gone before.', 75);
banner1.displayBanner();

let banner2 = new Banner('');
banner2.displayBanner();