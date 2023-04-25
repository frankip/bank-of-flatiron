function TransactionItem({transactionItem}) {
    console.log('transaction item', transactionItem);
    return (  <>
     <tr key={transactionItem.id}>
        <td>{transactionItem.date}</td>
        <td>{transactionItem.description}</td>
        <td>{transactionItem.category}</td>
        <td>{transactionItem.amount}</td>
      </tr>
    </>);
}

export default TransactionItem;