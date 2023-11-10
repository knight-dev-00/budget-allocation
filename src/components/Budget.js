import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { /*expenses, */Location, Budget } = useContext(AppContext);
    /*const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.unitprice * item.quantity));
    }, 0);*/
    
    const [ InputBudget, setInput ] = useState(0);
    
    return (
        <div className="container">
            <div className='alert alert-info'>
                <span>Budget: {Location}
                    <input value={InputBudget} onChange={e => setInput(e.target.value)}></input>
                </span>
            </div>
            <div className="alert alert-success" role="alert">
                <span>Remaining: {Location}{InputBudget - Budget}
                </span>
            </div>
            <div className="alert alert-primary" role="alert">
                <span>Spent so far: {Location}{Budget}
                </span>
            </div>
        </div>
    );
};

export default Budget;