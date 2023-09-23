import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { Component } from 'react';

export default class AdminUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        }
    }
    componentDidMount() {
        let ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/users.php";
        var context=this;
        axios({
            method: 'get',
            url: ApiAddress,
            responseType: 'json'
        }).then(function (response) {
            console.log(response.status)
            console.log(response.statusText)
            if(response.status===200)
            {
                console.log(response.data)
                let error=response.data[0]['error']
                console.log(error)
                if( error !='no')
                {
                    alert(error)
                }
                else 
                {
                let total = response.data[1]['total']
                if(total===0)
                {
                    alert('no user found')
                }
                else
                {
                    let data = response.data
                    data.splice(0,2)
                    console.log(data)
                    context.setState({
                        users :data
                    })

                    
                }
                }
            }
        });
    }
    render() {
        return (
            <>
                <AdminMenu />

                <div class="container">
                    <div class="row mt-5">
                        <div class="col-12">
                            <div class="h1 border-bottom pb-2 mb-2">User Management</div>
                            <div class="card">
                                <div class="card-header text-bg-primary">
                                    <h3>Existing Users</h3>
                                </div>
                                <div class="card-body">
                                    <table class="table table-striped table-bordered">
                                        <tr>
                                            <th width="8%">id</th>
                                            <th>Email</th>
                                            <th width="40%">Mobile</th>
                                            <th width="15%">View Orders</th>
                                        </tr>
                                        {this.state.users.map(function(item){
                                            return(
                                                <tr>
                                            <td>{item.id}</td>
                                            <td>{item.email}</td>
                                            <td>{item.mobile}</td>
                                            <td>
                                                <Link to="/admin-order"><i class="fa fa-eye fa-2x"></i></Link>
                                            </td>
                                        </tr>
                                    
                                            )
                                        })
                                        }
                                        </table>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }
    ;
}