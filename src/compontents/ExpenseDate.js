function ExpenseDate(){
    const month= props.date.toLocalString('en-US', {month: 'long'})
    const year = props.date.getFullYear();
    const day = props.date.toLocalString('en-US', {day: '2-digit'});
}

export default ExpenseDate