import './ExpenseItem.scss';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
function ExpenseItem(props) {
    return (
        <Card className="expense-item" id={props.id}>
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_amount">{props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;