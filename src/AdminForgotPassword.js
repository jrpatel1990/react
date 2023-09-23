function AdminForgotPassword ()
{
    return (<div className="container">
    <div className="row mt-5">
      <div className="col-6 offset-3">
        <div className="card shadow">
          <div className="card-header text-bg-danger">
            <h2>Recover Account</h2>
          </div>
          <div className="card-body">
            <form action method="post">
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">Email address</label>
              </div>
              <button type="button" className="btn btn-danger w-100">Recover Account</button> <br /><br />
              <p className="text-center"><a href="login.html">Login</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
export default AdminForgotPassword;