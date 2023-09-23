import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminProduct() {
  let onerror = function (error) {
    alert('it seems either you are not connected with internet or server is not available, please try after sometime');
  }
  let onsuccess = function (response) {
    console.log(response);
    console.log(response.status);
    console.log(response.statusText);
    if (response.status === 200) {
      if (response.data[0]['error'] != 'no') {
        alert(response.data[0]['error']);
      }
      else if (response.data[1]['total'] == 0) {
        alert('no product found');
      }
      else {
        let data = response.data;
        data.splice(0, 2);
        setProduct(data);
      }
    }

  }

  let DisplayProduct = function (item) {
    return (<tr>
      <td>{item.id}</td>
      <td>{item.categoryid}</td>
      <td>{item.categorytitle}</td>
      <td>{item.title}</td>
      <td>
        <img src={"http://www.theeasylearnacademy.com/shop/images/product/" + item.photo} className="img-fluid" />
      </td>
      <td>
        {item.price}
      </td>
      <td>
        {item.stock}
      </td>
      <td>
        {item.detail}
      </td>
      <td>
        <span   style={{cursor : ''}}  onClick={()=> DeleteProduct(item.id)}><i className="fa fa-trash fa-2x" /></span>
        <Link to="/admin-edit-product"><i className="fa fa-pencil fa-2x" /></Link>
      </td>
    </tr>);

  }
  let [product, setProduct] = useState([])
  useEffect(() => {
    if (product.length == 0) {
    let ApiAddress = "https://theeasylearnacademy.com/shop/ws/product.php"
    
      axios({
        method: 'get',
        responseType: 'json',
        url: ApiAddress
      }).then((response) => {
        console.log(response);
        console.log(response.status);
        console.log(response.statusText);
        if (response.status === 200) {
          if (response.data[0]['error'] != 'no') {
            alert(response.data[0]['error']);
          }
          else if (response.data[1]['total'] == 0) {
            alert('no product found')
          }
          else {
            let data = response.data
            data.splice(0, 2)
            setProduct(data)
          }
        }
      }).catch((error) => onerror(error));
    }
  })
  
 let DeleteProduct = function(ProductId){
  let apiAddress ="http://www.theeasylearnacademy.com/shop/ws/delete_product.php?id=" + ProductId
  axios({
    method:'get',
    url: apiAddress,
    responseType:'json'
  }).then((response)=>
  {
    console.log(response.data)
    if(response.status==200)
    {
      if(response.data[0]['error']!='no')
      {
        alert(response.data[0]['error'])
      }
      else{
        alert(response.data[1]['message'])
        let  temp=product.filter((item)=>{
          if(item.id != ProductId)
          return item
        })
        setProduct(temp)
      }

    }
  })



}


  return (
    <>
      <AdminMenu />
      <div className="container">
        <div className="row mt-5">
          <div className="col-12">
            <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
            <p className="text-end">
              <Link to="/admin-insert-product" className="btn btn-primary">Add Product</Link>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Product</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                    <th width="8%">Sr No</th>
                    <th width="10%">Category</th>
                    <th width="20%">Title</th>
                    <th>Photo</th>
                    <th width="8%">Price</th>
                    <th width="8%">Stock</th>
                    <th>Detail</th>
                    <th width="8%">Operation</th>
                  </tr>
                    
                    {product.map((item) => DisplayProduct(item))}
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}