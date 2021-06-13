import './ExpenseItem.scss';
function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date}</div>
            <div className="expense-item_description">
                <h2>{props.title}</h2>
                <div className="expense-item_amount">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;