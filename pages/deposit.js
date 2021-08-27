function Deposit() {
    const ctx = React.useContext(UserContext);
    const [deposit, setDeposit] = React.useState(0);    
    let user;
    for (const eachUser of ctx.users) {
        if (eachUser.name === ctx.loggedInUser) {
        user = eachUser;
        }
    }
    function validate(){
        if (deposit > user.balance) return false;
        if (deposit < 1) return false;
        return true;
    }
    function handleCreate(){
        if (!validate()) {
            if( deposit > user.balance) {
                alert('The amount exceeds the balance on the account.');
            } 
            if (deposit < 1) {
                alert('The amount cannot be 0 or a negative number');
            }
            clearForm();
            return;
        }
        user.balance += Number(deposit);
        alert(`Successfully deposited $${deposit} to your account`);
        clearForm();
        
    }
    function clearForm(){
        setDeposit(0);
    }
    return (

<div className="container">  
    <div className="card text-center">
    <div className="card-header">
       <h1>Deposit</h1> 
    </div>
    <div className="card-body">
      
        <h5 className="card-title">Insert the amount of money you want to deposit to this acccount</h5>
       
        Amount<br/>
        <input type="number" className="form-control" id="deposit" placeholder="Enter amount to deposit" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
        <p className="card-text">Your balance is: ${user.balance}.</p>
        <button type="submit" className="btn btn-primary" onClick={handleCreate} >Deposit</button>
   
   

        
    </div>
    <div className="card-footer text-muted">
        Full Stack Development with MERN
    </div>
    </div>
</div>


    );
}