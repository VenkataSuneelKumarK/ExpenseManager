import './App.scss';

import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
    const expenses = [
        { id: 'exp1', title: 'Current Bill', amount: 2000, date: new Date(2021, 5, 12) },
        { id: 'exp2', title: 'Petrol', amount: 3000, date: new Date(2021, 5, 12) },
        { id: 'exp3', title: 'Groceries', amount: 2000, date: new Date(2021, 5, 12) }
    ]
    return (
        <div className="App">
            { expenses.map(expense =>
                <ExpenseItem
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date.toDateString()}>
                </ExpenseItem>)}
        </div>
    );
}

export default App;
