import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Add() {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [description, setDescription] = useState("");
  let [category, setCategory] = useState("");
  let navigate = useNavigate()
  
  return (
    <>
      <h1>Add Product</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        axios.post("http://localhost:9000/products",
          {
            title: title,
            price: price,
            description: description,
            category: category,
          }
        ).then(data => {
          console.log(data);
          navigate("/products");
        });
        axios.post(`http://localhost:9000/${category}`,
          {
            title: title,
            price: price,
            description: description,
            category: category,
          }
        ).then(data => {
          console.log(data);
          navigate("/products");
        });
        // Fetch Not Send All Data
        // fetch("http://localhost:9000/products",
        //   {
        //     method: "POST",
        //     body: JSON.stringify(
        // {
        //   title: title,
        //   price: price
        // }
        //     )
        //   }
        // ).then(res => res.json()
        //   .then(data => console.log(data)))
      }}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>

          <input type="text"
            className="form-control"
            id="productTitle"
            aria-describedby="Product title"
            placeholder="Product Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="productPrice" className="form-label">
            Price
          </label>

          <input type="number"
            className="form-control"
            id="productPrice"
            aria-describedby="Product price"
            placeholder="Product Price"
            onChange={(e) => setPrice(+e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productDescription" className="form-label">
            Description
          </label>

          <input type="text"
            className="form-control"
            id="productDescription"
            aria-describedby="Product Description"
            placeholder="Product Description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="productCategory" className="form-label">
            Category
          </label>

          <input type="text"
            className="form-control"
            id="productCategory"
            aria-describedby="Product Category"
            placeholder="Product Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Add;