import React from 'react';

const TransactionListEntry = (props) => {
  let style = {
    color: props.total > 0 ? 'green' : 'red',
  };

  return (
    <div className="divTableRow">
      <div className="divTableCell">
{props.transaction.amount}
{' '}
 </div>
      <div className="divTableCell"> 
{' '}
{props.transaction.description}
</div>
      <div className="divTableCell">
{props.transaction.category}
</div>
    </div>
  );
};
// ${props.total.toFixed(2)}
export default TransactionListEntry;
