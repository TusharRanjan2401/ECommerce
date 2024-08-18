import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([]);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get products
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API}/api/v1/products/get-product/${params.slug}`
      );
      setProduct(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${product._id}`}
            className="card-img-top "
            alt={product.name}
            height={"300px"}
            width={"300px"}
          />
        </div>
        <div className="col-md-6">
          <h1 className="text-center">Product Details</h1>
          <h4>Name: {product.name}</h4>
          <h4>Description: {product.description}</h4>
          <h4>Price: {product.price}</h4>
          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
