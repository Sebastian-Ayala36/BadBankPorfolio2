function AllData() {
    const ctx = React.useContext(UserContext);
    const users = ctx.users.map((user, index) => {
        return (
            <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.balance}</td>
            </tr>
        );
    });
    return (

        <container>
    <div className="card">
    <div className="container-fluid" font-size="4em">
        <br />
        <h1>User Data</h1>
        </div>
        <br />
        <table className="table table-hover">
            <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>   
                <th scope="col">Balance</th>
            </tr>
            </thead>
            <tbody>
                {users}
            </tbody>
        </table>
    </div>
</container>


    );
}