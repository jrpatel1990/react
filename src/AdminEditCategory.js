import AdminMenu from "./AdminMenu";
export default function AdminEditCategory() {
    return (
        <>
            <AdminMenu />
            <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
      <div className="card">
        <div className="card-header text-bg-primary">
          <h3>Edit category</h3>
        </div>
        <div className="card-body">
          <form action>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="title" placeholder="Category title" name="title" />
              <label htmlFor="title">Edit category title</label>
            </div>
            <div className="row">
              <div className="col">
                <label htmlFor="photo" className="form-label">Change Photo</label>
                <input className="form-control" type="file" id="photo" name="photo" accept="image/*" />
              </div>
              <div className="col">
                <p><b>is this category Live?</b></p>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" id="yes" defaultChecked />
                  <label className="form-check-label" htmlFor="yes">Yes</label>
                </div>
                <div className="form-check form-check-inline">
                  <input className="form-check-input" type="radio" name="status" id="no" />
                  <label className="form-check-label" htmlFor="no">No</label>
                </div>
              </div>
              <div className="col pt-4 d">
                <button type="submit" className="btn btn-primary w-100">Save changes</button>
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