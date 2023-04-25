import { useEffect, useState } from "react";
import Fillter from "./Fillter";
import NewEntry from "./NewEntry";
import TransctionList from "./TransactionList";

function AccountContainer() {
    const [transactionList, setTransactionList] = useState([])

    const baseUrl = `http://localhost:8081/transactions`;
    useEffect(() =>{
        fetch(baseUrl)
        .then((res) => res.json())
        .then((data) => setTransactionList(data))
    },[]);
    console.log('container component');
    return (
    <>
    <h3>account</h3>
    <Fillter/>
    <NewEntry />
    <TransctionList transaction={transactionList}/>        
    </> 
    );
}

export default AccountContainer;