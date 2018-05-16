# Project Fideligard SPA Client

A React frontend portfolio simulator.

## About

User is able to make trades using historical stock market prices. Information is pulled from the Express backend server.


### Making Trades

The simulator starts with a balance of $100,000, user is able to make trades, `BUY` or `SELL` under the `Trades` tab. To initiate a trade, click on the button under the `Trade ?` column in the stock list table. Cost and price are automatically based on date and quantity. All trades are validated before they are submitted. 

### Viewing Transactions

All trades made will be recorded under the `Transactions` tab.

### Viewing Portfolio

The portfolio view displays the user's current balance, cost basis, portfolio value, and the quantity of each stock owned. 