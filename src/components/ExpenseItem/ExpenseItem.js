import { useState } from 'react';

import './ExpenseItem.scss';

import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const onClickHandler = () => {
        setTitle("updated...");
    }
    return (
        <Card className="expense-item" id={props.id}>
            <ExpenseDate date={props.date} />
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_amount">{props.amount}</div>
            </div>
            <button onClick={onClickHandler}>Change Button</button>
        </Card>
    );
}

export default ExpenseItem;