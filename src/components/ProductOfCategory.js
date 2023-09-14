import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductByCategory } from "../features/productSlice";
import { getDiscountByPrice } from "./utility";

const ProductOfCategory = () => {
  const { proByCat, loading} = useSelector((state) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductByCategory("smartphones"));
  }, []);



  if(loading){
    return (<h1>Loading..</h1>)
  }else{
  return (
    <>
      {/* Products Start */}
      <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">Featured Products</span>
        </h2>
        <div className="row px-xl-5">
          {proByCat &&
            proByCat.map((currElem, index) => (
              <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={index}>
                <div className="product-item bg-light mb-4">
                  <div className="product-img position-relative overflow-hidden">
                    <img
                      className="img-fluid w-100 pro-img"
                      src={currElem.thumbnail}
                      alt=""
                    />
                    <div className="product-action">
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="far fa-heart" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-sync-alt" />
                      </a>
                      <a className="btn btn-outline-dark btn-square" href="">
                        <i className="fa fa-search" />
                      </a>
                    </div>
                  </div>
                  <div className="text-center py-4">
                    <a
                      className="h6 text-decoration-none text-truncate"
                      href=""
                    >
                        {currElem.title}
                    </a>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                      <h5>${getDiscountByPrice(currElem.discountPercentage,currElem.price)}</h5>
                      <h6 className="text-muted ml-2">
                        <del>${currElem.price}</del>
                      </h6>
                    </div>
                    <div className="d-flex align-items-center justify-content-center mb-1">
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small className="fa fa-star text-primary mr-1" />
                      <small>(99)</small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* Products End */}
    </>
  );
}
};

export default ProductOfCategory;
