import './ExpenseDate.scss';

function ExpenseDate(props) {
    const month = new Date(props.date).toLocaleString('en-us', { month: 'long' });
    const day = new Date(props.date).toLocaleString('en-us', { day: '2-digit' });
    const year = new Date(props.date).getFullYear();
    return (
        <div className="expense-item_date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </div>

    );
}

export default ExpenseDate;