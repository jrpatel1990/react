import AdminMenu from "./AdminMenu";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminCategory() {
  let [category, setCategory] = useState([])
  useEffect(() => {
    if(category.length==0)
    {
      let ApiAddress = "https://www.theeasylearnacademy.com/shop/ws/category.php"
    axios({
      method: 'get',
      responseType: 'json',
      url: ApiAddress

    }).then(function (response) {
      console.log(response)
      console.log(response.status)
      console.log(response.statusText)
      if (response.status === 200) {
        let data = response.data
        if (data[0]['error'] != "no") {
          alert(data[0]['error'])
        }
        else if (data[1]['total'] == 0) {
          alert('no category found')

        }
        else {
          data.splice(0, 2)
          setCategory(data);

        }
      }


    })
    }
  })
  let DeleteCategory = function(CategoryId){
    let apiAddress ="http://www.theeasylearnacademy.com/shop/ws/delete_category.php?id=" + CategoryId
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
          let  temp=category.filter((item)=>{
            if(item.id != CategoryId)
            return item
          })
          setCategory(temp)
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
            <div className="h1 border-bottom pb-2 mb-2">Category Management</div>
            <p className="text-end">
              <Link to="/admin-insert-category" className="btn btn-primary">Add Category</Link>
            </p>
            <div className="card">
              <div className="card-header text-bg-primary">
                <h3>Existing Cateories</h3>
              </div>
              <div className="card-body">
                <table className="table table-striped table-bordered">
                  <tbody><tr>
                    <th width="8%">Sr No</th>
                    <th>Title</th>
                    <th>Photo</th>
                    <th width="8%">Is Live</th>
                    <th width="8%">Edit</th>
                    <th width="8%">Delete</th>
                  </tr>
                    {category.map(function(item){
                      return(
                        <tr>
                      <td>{item.id}</td>
                      <td>{item.title}</td>
                      <td width='20%'>
                        <img src={"https://www.theeasylearnacademy.com/shop/images/category/"+ item.photo} className="img-fluid" />
                      </td>
                      <td>
                        Yes
                      </td>
                      <td>
                        <Link to={"/admin-edit-category/"+ item.id }><i className="fa fa-pencil fa-2x" /></Link>
                      </td>
                      <td>
                        <span style={{cursor : ''}}  onClick={()=> DeleteCategory(item.id)}><i className="fa fa-trash fa-2x" /></span>
                      </td>
                    </tr> 
                      )
                    })}
                  </tbody></table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}