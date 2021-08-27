function NavBar(){


    const homeHover = 'Bad bank\'s Home Page. Here you will find the banks information';
    const createaccountHover = 'Create your new account for this bank'
    const withdrawHover = 'Withdraw money from your bank account';
    const depositHover = 'Deposit money from your bank account';
    const alldataHover = 'Receive a json file from all the accounts generated';
    return(
        <>
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">BadBank</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#" title={homeHover}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/CreateAccount/" title={createaccountHover} >CreateAccount</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/withdraw/" title={withdrawHover}>Withdraw</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/deposit/" title={depositHover}>Deposit</a>
                        </li>   
                        <li className="nav-item">
                            <a className="nav-link" href="#/alldata/" title={alldataHover}>AllData</a>
                        </li>          
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}