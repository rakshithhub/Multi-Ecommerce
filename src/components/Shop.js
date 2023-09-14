import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductList from "./ProductList";
import { useSelector } from "react-redux";

const Shop = () => {
  const { proByCat } = useSelector((state) => state.product);
  const [ratioData, setRatioData] = useState("");

  console.log(ratioData);

  return (
    <>
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark" to="/">
                Home
              </Link>
              <Link className="breadcrumb-item text-dark" href="/shop">
                Shop
              </Link>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      <>
        {/* Shop Start */}
        <div className="container-fluid">
          <div className="row px-xl-5">
            {/* Shop Sidebar Start */}
            <div className="col-lg-3 col-md-4">
              {/* Price Start */}
              <h5 className="section-title position-relative text-uppercase mb-3">
                <span className="bg-secondary pr-3">Filter by price</span>
              </h5>
              <div className="bg-light p-4 mb-30">
                <form>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      checked= {ratioData === ""}
                      onChange={() => setRatioData("")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      All
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                      onChange={() => setRatioData("50")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      $0 - $50
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault3"
                      onChange={() => setRatioData("150")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      $50 - $150
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault4"
                      onChange={() => setRatioData("250")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault4"
                    >
                      $150 - $250
                    </label>
                  </div>
                  <div className="form-check mb-3">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault5"
                      onChange={() => setRatioData("350")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault5"
                    >
                      $250 - $350
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault6"
                      onChange={() => setRatioData("450")}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      $350 - $450
                    </label>
                  </div>
                </form>
              </div>
              {/* Price End */}
            </div>
            {/* Shop Sidebar End */}
            {/* Shop Product Start */}
            <div className="col-lg-9 col-md-8">
              <div className="row pb-3">
                <div className="col-12 pb-1">
                  <div className="d-flex align-items-center justify-content-between mb-4">
                    <div>
                      <button className="btn btn-sm btn-light">
                        <i className="fa fa-th-large" />
                      </button>
                      <button className="btn btn-sm btn-light ml-2">
                        <i className="fa fa-bars" />
                      </button>
                    </div>
                    <div className="ml-2">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-light dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Sorting
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            Latest
                          </a>
                          <a className="dropdown-item" href="#">
                            Popularity
                          </a>
                          <a className="dropdown-item" href="#">
                            Best Rating
                          </a>
                        </div>
                      </div>
                      <div className="btn-group ml-2">
                        <button
                          type="button"
                          className="btn btn-sm btn-light dropdown-toggle"
                          data-toggle="dropdown"
                        >
                          Showing
                        </button>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="#">
                            10
                          </a>
                          <a className="dropdown-item" href="#">
                            20
                          </a>
                          <a className="dropdown-item" href="#">
                            30
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {proByCat && proByCat
                .filter((curEle) => {
                  if(ratioData === "50"){
                    return curEle.price <= 50;
                  }else if(ratioData === "150"){
                    return curEle.price <= 150 && curEle.price >= 50; 
                  }else if(ratioData === "250"){
                    return curEle.price <= 250 && curEle.price >= 150;
                  }else if(ratioData === "350"){
                    return curEle.price <= 350 && curEle.price >= 250;
                  }else if(ratioData === "450"){ 
                    return curEle.price <= 450 && curEle.price >= 350;
                  }else{
                    return curEle;
                  }
                })
                .map((curElem, index) => (
                  <ProductList key={index} curElem={curElem} />
                ))}
              </div>
            </div>
            {/* Shop Product End */}
          </div>
        </div>
        {/* Shop End */}
      </>
    </>
  );
};

export default Shop;
