import AdminMenu from "./AdminMenu";
export default function AdminChangePassword() {
    return (
        <>
            <AdminMenu />
            <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
      <div className="card shadow">
        <div className="card-header text-bg-primary">
          <h3>Edit product</h3>
        </div>
        <div className="card-body">
          <form action>
            <div className="row">
              <div className="col">
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="title" placeholder="Product title" name="title" />
                  <label htmlFor="title">Edit product title</label>
                </div>
              </div>
              <div className="col">
                <select className="form-select form-select-lg" aria-label="Large select" name="categoryid">
                  <option>Select</option>
                  <option>Laptop</option>
                  <option>Mobile</option>
                  <option>Camera</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="photo" className="form-label">Change Photo</label>
                <input className="form-control" type="file" id="photo" name="photo" accept="image/*" />
              </div>
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="price" placeholder="Product price" name="price" />
                  <label htmlFor="price">Edit price</label>
                </div>
              </div>
              <div className="col">
                <div className="form-floating mb-3 mt-3">
                  <input type="number" className="form-control" id="stock" placeholder="Product stock" name="stock" />
                  <label htmlFor="stock">Edit stock</label>
                </div>
              </div>
              <div className="row">
                <div className="col-9">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Product description" id="detail" style={{"height":"100px"}} name="detail" defaultValue={""} />
                    <label htmlFor="detail">Edit detail</label>
                  </div>
                </div>
                <div className="col-3">
                  <div className="col pt-4">
                    <button type="submit" className="btn btn-primary w-100">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

            
                   </>
    );
}