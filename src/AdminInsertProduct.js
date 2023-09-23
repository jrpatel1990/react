import AdminMenu from "./AdminMenu";
import axios from "axios";
import { useState, useEffect } from "react";
export default function AdminInsertProduct() {
    let [title, setName] = useState()
    let [photo, setPhoto] = useState()
    let [price, setPrice] = useState()
    let [stock, setStock] = useState()
    let [detail, setDetail] = useState()
    let [categoryid, setCategoryid] = useState()
    let [categories, setCategories] = useState([])

    let InsertProduct = function (event) {
        event.preventDefault()
        console.log( title,price, stock, categoryid, detail, photo)
        let ApiAddress = "http://www.theeasylearnacademy.com/shop/ws/insert_product.php"
        let formData = new FormData();
        formData.append("name", title);
        formData.append("price", price);
        formData.append("stock", stock);
        formData.append("detail", detail);
        formData.append("categoryid", categoryid);
        formData.append("photo", photo);

        axios({
            method: 'post',
            url: ApiAddress,
            responseType: 'json',
            data: formData,
            config: { headers: { 'Content-Type': 'multipart/form-data' } }
        }).then((response)=>
        {
            console.log(response)
        })

    }
    useEffect(() => {
        if (categories.length == 0) {
            let ApiAddress = "http://www.theeasylearnacademy.com/shop/ws/category.php"
            axios({

                method: 'get',
                responseType: 'json',
                url: ApiAddress,
            }).then((response) => {
                if (response.status == 200) {
                    let data = response.data
                    if (data[0]['error'] != "no") {
                        alert(data[0]['error'])
                        console.log("This is running ");
                    }
                    else if (data[1]['total'] == 0) {
                        alert('no category found')
                    }
                    else {
                        data.splice(0, 2)
                        console.log(data);
                        setCategories(data)
                    }

                }
            })

        }
    })
    return (
        <>
            <AdminMenu />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="h1 border-bottom pb-2 mb-2">Product Management</div>
                        <div className="card shadow">
                            <div className="card-header text-bg-primary">
                                <h3>Add new product</h3>
                            </div>
                            <div className="card-body">
                                <form action="" onSubmit={(event) => InsertProduct(event)} encType="multipart/form-data" >
                                    <div className="row">
                                        <div className="col">
                                            <div className="form-floating mb-3">
                                                <input type="text" className="form-control" id="title" placeholder="Product title" name="title" required
                                                    onChange={(event) => setName(event.target.value)} value={title} />
                                                <label htmlFor="title">Product title</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <select className="form-select form-select-lg" aria-label="Large select" name="categoryid"
                                                onChange={(event) => setCategoryid(event.target.value)} required>
                                                <option>Select</option>
                                                {categories.map(function (item) {
                                                    return (
                                                        <option value={item.id} >{item.title}</option>)
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="photo" className="form-label">Select Photo</label>
                                            <input className="form-control" type="file" id="photo" name="photo" accept="image/*" required
                                                onChange={(event) => setPhoto(event.target.files[0])} />
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" className="form-control" id="price" placeholder="Product price"
                                                    value={price} onChange={(event => setPrice(event.target.value))} name="price" required />
                                                <label htmlFor="price">Price</label>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-floating mb-3 mt-3">
                                                <input type="number" className="form-control" id="stock" placeholder="Product stock"
                                                    value={stock} onChange={(event) => setStock(event.target.value)} name="stock" required />
                                                <label htmlFor="stock">Stock</label>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-9">
                                                <div className="form-floating">
                                                    <textarea className="form-control" placeholder="Product description" id="detail"
                                                        onChange={(event) => setDetail(event.target.value)} style={{ "height": "100px" }} name="detail" defaultValue={""} required />
                                                    <label htmlFor="detail">Detail</label>
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <div className="col pt-4">
                                                    <button type="submit" className="btn btn-primary w-100">Save</button>
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
    )
}