import './App.scss';
import Card from './components/Card/Card';

import NewExpense from './components/NewExpense/NewExpense';
import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
    const expenses = [
        { id: 'exp1', title: 'Current Bill', amount: 2000, date: new Date(2021, 5, 1) },
        { id: 'exp2', title: 'Petrol', amount: 3000, date: new Date(2021, 5, 2) },
        { id: 'exp3', title: 'Groceries', amount: 4000, date: new Date(2021, 5, 3) }
    ]
    return (
        <div className="App">
            <Card>
                <NewExpense />
            </Card>

            <Card>
                {expenses.map(expense =>
                    <ExpenseItem id={expense.id} key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date.toISOString()} />
                )}
            </Card>
        </div>
    );
}

export default App;
