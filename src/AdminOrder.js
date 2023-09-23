import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminOrder() {
    let [user, setUser] = useState([])
let status=['','Confirmed','Dispatched','Delivered','Canceled']
    useEffect(() => {
            let ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/orders.php"
            if (user.length == 0) {
                axios({
                    method: 'get',
                responseType: 'json',
                url: ApiAddress
            }).then((response) => {
                console.log(response)
                if (response.status === 200) {
                    let data = response.data
                    if (data[0]['error'] != 'no') {
                        alert(data[0]['error'])
                    }
                    else if (data[1]['total'] == 0) {
                        alert('no order found')
                    }
                    else {
                        data.splice(0, 2)
                        setUser(data);
                        console.log(data);
                    }
                }
            }
            )

        }
    })
    return (
        <>
            <AdminMenu />
            <div class="container">
                <div class="row mt-5">
                    <div class="col-12">
                        <div class="h1 border-bottom pb-2 mb-2">User Management</div>
                        <div class="card">
                            <div class="card-header text-bg-primary">
                                <h3>Existing Orders</h3>
                            </div>
                            <div class="card-body">
                                <table class="table table-striped table-bordered">
                                    <tr>
                                        <th width="8%">Sr No</th>
                                        <th width="40%">Customer Detail</th>
                                        <th width="10">Date</th>
                                        <th width="10">Amount</th>
                                        <th width="10">Status</th>
                                        <th width="15%">View Detail</th>
                                    </tr>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            Ram Kumar  <br />
                                            Hill Drive, opp aksharwadi temple <br />
                                            Waghawadi Road <br />
                                            Bhavnagar - 364001
                                        </td>
                                        <td>01-01-2023</td>
                                        <td>25000</td>
                                        <td>Confirmed</td>
                                        <td>
                                            <Link to="/admin-view-order-detail">
                                                <i class="fa fa-eye fa-2x"></i>
                                            </Link>
                                        </td>
                                    </tr>
                                    {user.map(function (item) {
                                        return (<tr>
                                            <td>{item.id}</td>
                                            <td>
                                                {item.fullname}  <br />
                                                {item.address1}  <br />
                                                {item.address2} <br />
                                                {item.city} - {item.pincode}
                                            </td>
                                            <td>01-01-2023</td>
                                            <td>{item.billdate}</td>
                                            <td>{item.amount}</td>
                                            <td>Confirmed</td>
                                            <td>{status[item.orderstatus]}</td>
                                            <td>
                                                <Link to="/admin-view-order-details">
                                                    <i className="fa fa-eye fa-2x" />
                                                </Link>
                                            </td>
                                        </tr>
                                             )
                                    })}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}