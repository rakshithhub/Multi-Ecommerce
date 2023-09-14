import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, fetchProductByCategory } from "../features/productSlice";
import { Link } from "react-router-dom";

const CategoriesFeatures = () => {
  const { categories } = useSelector((state) => state.ecomm);
  const dispatch = useDispatch();

  const handleClick = (cat) => {
    dispatch(fetchProductByCategory(cat));
  }
  return (
    <>
      {/* Categories Start */}
      <div className="container-fluid pt-5" >
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Categories</span>
        </h2>
        <div className="row px-xl-5 pb-3">
          {categories &&
            categories.map((currElem, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index} >
                <Link className="text-decoration-none" onClick={() => handleClick(currElem)}>
                  <div className="cat-item d-flex align-items-center mb-4">
                    <div
                      className="overflow-hidden"
                      style={{ width: 100, height: 100 }}
                    >
                      <img className="img-fluid" src="https://www.finplus.co.in/wp-content/uploads/2017/10/Top-Categories-In-Online-Retail-In-India.jpg" alt="" />
                    </div>
                    <div className="flex-fill pl-3">
                      <h6>{currElem}</h6>
                      <small className="text-body">100 Products</small>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
        </div>
      </div>
      {/* Categories End */}
    </>
  );
};

export default CategoriesFeatures;
