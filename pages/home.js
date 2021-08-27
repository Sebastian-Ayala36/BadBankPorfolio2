function Home() {

    return (

        <div className="container">  
    <div className="card text-center">
    <div className="card-header">
       <h1>Home</h1> 
    </div>
    <div className="card-body">
    <img src="../bank.png" style={{width: '250px'}} className="img-fluid" alt="Responsive img"/>
        <h3 className="card-title">Bad Bank Application.</h3>
        <h5 className="card-title">Save your money with us at your own risk</h5>
        {/* <p className="card-text">Hello world</p> */}
     
    </div>
    <div className="card-footer text-muted">
       Full Stack Development with MERN
    </div>
    </div>
</div>
        
    );
}