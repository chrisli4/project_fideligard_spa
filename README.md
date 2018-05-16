# Project Fideligard SPA Client

A React frontend portfolio simulator.

## About

User is able to make trades using historical stock market prices. Information is pulled from the Express backend server.


### Making Trades

The simulator starts with a balance of $100,000, user is able to make trades, `BUY or `SELL` under the `Trades` tab. To initiate a trade, click on the button under the `Trade ?` column in the stock list table. Cost and price are automatically based on date and quantity. All trades are validated before they are submitted. 

### Viewing Transactions

All trades made will be recorded under the `Transactions` tab.

### Viewing Portfolio

The portfolio view displays the user's current balance, cost basis, portfolio value, and the quantity of each stock owned. 



# Project Fideligard SPA API Server

An express server hosting the API endpoint for the client React application.

## How to Use

This API makes request to https://www.quandl.com/ and retrieves historical stock data for a specific date. 
The response returned is an array of objects.

The call to Quandl will be returned as an array of arrays, with each having the following properties:

```
['symbol', 'date', 'price']
```

The server will transform this data to a more readily usable format, as an array of objects.

Each object will have the following properties:

```
{
	symbol: 'ticker of the stock',
	today: 'today's closing price',
	oneDay: 'closing price one day ago',
	sevenDays: 'closing price seven days ago',
	thirtyDays: 'closing price thirty days ago'
}
```

Example API call:

```
api/v1/stocks?symbols=AAPL,INTL,GOOG&end_date=2017-01-01
```

Query Parameters:

```
symbols:    comma separated string of stock symbols. ex. AAPL,INTL,GOOG,VLO           
end_date:   date in the form of YYYY-MM-DD. ex. 2018-04-04
```

Client demo   :   https://damp-cliffs-64245.herokuapp.com/

Source code   :   https://github.com/chrisli4/project_fideligard_spa

Documentation :   https://github.com/chrisli4/project_fideligard_spa_server/README.md


## Running Locally

Make sure you have [Node.js](http://nodejs.org/) installed.

```sh
$ git clone git@github.com:chrisli4/project_fideligard_spa_server.git # or clone your own fork
$ cd project_fideligard_spa_server.git
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
