import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
export default function AdminHome() {
    return (
        <>
            <AdminMenu />
            <div className="container">
  <div className="row mt-5">
    <div className="col-12">
      <div className="h1 border-bottom pb-2 mb-2" />
      <div className="card">
        <div className="card-header text-bg-primary">
          <h3>Dashboard</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="card text-bg-info">
                <div className="row g-0">
                  <div className="col-12 col-sm-9">
                    <div className="card-body">
                      <Link to="/admin-category" className="card-link text-white">
                        <div className="display-4">
                          25 Categories
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-bg-success">
                <div className="row g-0">
                  <div className="col-12 col-sm-9">
                    <div className="card-body">
                      <Link to="/admin-product" className="card-link text-white">
                        <div className="display-4">
                          125 Products
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="card text-bg-warning">
                <div className="row g-0">
                  <div className="col-12 col-sm-9">
                    <div className="card-body">
                      <Link to="/admin-user" className="card-link text-white">
                        <div className="display-4">
                          1500 Users
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="card text-bg-secondary">
                <div className="row g-0">
                  <div className="col-12 col-sm-9">
                    <div className="card-body">
                      <Link to="/admin-order" className="card-link text-white">
                        <div className="display-4">
                          5000 Orders
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        </>
    );
}