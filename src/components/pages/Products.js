import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Products.css';
import Swal from 'sweetalert2'
import axios from 'axios';

function Products() {
  let [products, setProducts] = useState([])

  function fetchData() {
    fetch("http://localhost:9000/products")
      .then(res => res.json())
      .then(data => setProducts(data))
  }
  function fetchByAxios() {
    axios.get("https://fakestoreapi.com/products")
      .then(res => setProducts(res.data))
  }

  function deleteProduct(product) {
    Swal.fire({
      title: `Are You Sure Deleteing ${product.title}?`,
      showCancelButton: true
    }).then(data => {
      if (data.isConfirmed) {
        fetch(`http://localhost:9000/products/${product.id}`,
          {
            "method": "DELETE",
          }
        )
          .then(res => res.json())
          .then(data => fetchData());
      }
    })
  }

  useEffect(() => {
    fetchData();

  }, [])
  return (
    <>
      <h1>Products Page</h1>
      <Link to={"/products/add"} className="btn btn-success mt-3">Add New Product</Link>
      <div className="responsive-table">

        <table className="table table-striped mt-5 products-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
              products.length > 0 ?
                products.map((product) => {
                  return (

                    <tr key={product.id}>
                      <td>{product.id}</td>
                      <td>{product.title}</td>
                      <td>{product.description.slice(0, 30)}...</td>
                      <td>{product.price}$</td>
                      <td>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => {
                            deleteProduct(product);
                          }}
                        >Delete</button>
                        <Link to={`/products/veiw/${product.id}`} className="btn btn-info btn-sm">Veiw</Link>
                        <Link to={`/products/edit/${product.id}`} className="btn btn-primary btn-sm">Edit</Link>
                      </td>
                    </tr>

                  )
                })
                : <>
                  <h3>Loading...</h3>
                  < i class="fa-solid fa-spinner spin"></i>
                </>
            }
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;