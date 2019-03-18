var express = require('express')
var router = express.Router();

const stocks = [
  {name: 'Test Stock Company', code: 'TSC', price: 85, previousPrice: 80, exchange: 'NASDAQ', favorite: false},
  {name: 'Second Stock Company', code: 'SSC', price: 10, previousPrice: 20, exchange: 'NSE', favorite: false},
  {name: 'Last Stock Company', code: 'LSC', price: 876, previousPrice: 765, exchange: 'NYSE', favorite: false},
];

const employees = [

  {name: 'Peter', age : 35, role: 'Developer', email: 'peter@gmail.com', languages: 'java python html', os: ''},
  {name: 'Jane', age : 22, role: 'Admin', email: 'jane@gmail.com', languages: '', os: 'windows linux'},
  {name: 'Steven', age : 28, role: 'Developer', email: 'steven@gmail.com', languages: 'python javascript', os: ''},
  {name: 'Ann', age : 38, role: 'Admin', email: 'ann@gmail.com', languages: '', os: 'macos windows'},
]

router.get('/', (req, res) => {
  var query = (req.query['q'] || '').toLowerCase();
  if (query) {
	console.log('Returning specific employee');
    const foundStocks = stocks.filter(
      (stock) => stock.name.toLowerCase().indexOf(query) != -1);
    return res.status(200).json(foundStocks);
  }
  console.log('Returning list of employees');
  return res.status(200).json(employees);
});

router.post('/', (req, res) => {
  console.log("Attempting to add new employee");	
  let employee = req.body;
  let foundEmployee = employees.find(each => each.name === employee.name);
  if (foundEmployee) {
    return res.status(400)
        .json({msg: 'Employee with name ' + employee.name + ' already exists'});
  }
  employees.push(employee);
  return res.status(200).json({msg: 'Employee with name ' + employee.name + ' successfully created'});
});

router.patch('/:code', (req, res) => {
  let stockCode = req.params.code;
  let foundStock = stocks.find(each => each.code === stockCode);
  if (foundStock) {
    foundStock.favorite = req.body.favorite;
    let msg = 'Stock with code ' + stockCode + ' is now ';
    msg += foundStock.favorite ? ' favorited.' : ' unfavorited';
    return res.status(200).json({msg: msg});
  }
  return res.status(400).json({msg: 'Stock with code ' + stockCode + ' not found!'});
});

module.exports = router;