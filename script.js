const gems = [
    {name: 'ruby', price: 10},
    {name: 'emerald', price: 20},
    {name: 'diamond', price: 30},
];
const store = [
    {gem: 'ruby', amount: 10},
    {gem: 'emerald', amount: 10},
    {gem: 'diamonds', amount: 10},
];

const db = window.openDatabase('data', '1.0', 'data', 1*1024*1024);
db.transaction(t => 
{
    t.executeSql('CREATE TABLE gems (name TEXT, price INTEGER)');
    t.executeSql('CREATE TABLE store (gem TEXT, amount INTEGER)');

    for (let g of gems) 
    {
        t.executeSql('INSERT INTO gems (name, price) VALUES (?, ?)', [g.name, g.price]);  
    }

    for (let s of store) 
    {
        t.executeSql('INSERT INTO store (name, amount) VALUES (?, ?)', [s.gem, s.amount]);  
    }

}, e => console.error(e));
