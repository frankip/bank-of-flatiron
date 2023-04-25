import Fillter from "./Fillter";
import NewEntry from "./NewEntry";
import TransctionList from "./TransactionList";

function AccountContainer() {
    
    return (
    <>
    <h3>account</h3>
    <Fillter/>
    <NewEntry />
    <TransctionList />        
    </> 
    );
}

export default AccountContainer;