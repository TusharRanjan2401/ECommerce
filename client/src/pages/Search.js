import Layout from "../components/Layout/Layout";
import React from "react";
import { useSearch } from "../context/Search";

const Search = () => {
  const [values, setValues] = useSearch();

  return (
    <Layout>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No products found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap m-4">
            {values?.results.map((p) => (
              <div className="card mx-2 my-2" style={{ width: "18rem" }}>
                <img
                  src={`${process.env.REACT_APP_API}/api/v1/products/product-photo/${p._id}`}
                  className="card-img-top"
                  style={{ height: "20rem" }}
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description.substring(0, 30)}</p>
                  <p className="card-text">$ {p.price}</p>
                  <button class="btn btn-primary ms-1">More Details</button>
                  <button class="btn btn-secondary ms-1">Add to cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
