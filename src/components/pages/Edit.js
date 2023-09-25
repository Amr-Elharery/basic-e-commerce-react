import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

function Edit() {
  let [title, setTitle] = useState("");
  let [price, setPrice] = useState(0);
  let [description, setDescription] = useState("");
  let [product, setProduct] = useState({});
  let navigate = useNavigate()
  let { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`,
      {
        "method": "GET",

      }
    )
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <>
      <h1>Edit Product</h1>
      <form onSubmit={(e) => {
        e.preventDefault();
        axios.put(`http://localhost:9000/products/${id}`,
          {
            title: title,
            price: price,
            description: description
          }
        ).then(data => {
          console.log(data);
          navigate("/products");
        });
      }}>
        <div className="mb-3">
          <label htmlFor="productTitle" className="form-label">
            Title
          </label>

          <input type="text"
            className="form-control"
            id="productTitle"
            aria-describedby="Product title"
            placeholder={product.title}
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
            placeholder={product.price}
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
            placeholder={product.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Product
        </button>
      </form>
    </>
  );
}

export default Edit;