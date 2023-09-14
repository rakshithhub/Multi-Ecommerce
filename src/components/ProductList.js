import React from "react";
import { getDiscountByPrice } from "./utility";
import { useDispatch } from "react-redux";
import { addProduct } from "../features/addProductSlice";
import { Link } from "react-router-dom";

const ProductList = ({curElem}) => {
    const {thumbnail,title,price,discountPercentage} = curElem;
    const dispatch = useDispatch();

    const addElement = (data) => {
      dispatch(addProduct(data));
    }

    return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100 pro-img" src={thumbnail} alt="" />
            <div className="product-action">
              <Link className="btn btn-outline-dark btn-square" onClick={() => addElement(curElem)}>
                <i className="fa fa-shopping-cart"/>
              </Link>
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
            <a className="h6 text-decoration-none text-truncate" href="">
              {title}
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>${getDiscountByPrice(discountPercentage,price)}</h5>
              <h6 className="text-muted ml-2">
                <del>${price}</del>
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
    </>
  );
};

export default ProductList;
