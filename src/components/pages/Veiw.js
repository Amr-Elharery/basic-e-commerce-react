import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Veiw() {
  let [product, setProduct] = useState({})
  let { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [])
  return (
    <>
      <h1>Product Details</h1>
      <h3>ID: {product.id}</h3>
      <h4>Titel: {product.title}</h4>
      <img src={product.image} alt="Product" />
      <h4>Description: {product.description}</h4>
      <h4>Price: {product.price}</h4>
    </>
  );
}
export default Veiw;