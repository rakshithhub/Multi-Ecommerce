import React from "react";
import { getDiscountByPrice } from "./utility";
import { useDispatch } from "react-redux";
import { deleteCart } from "../features/addProductSlice";

const CartItem = ({curElem}) => {
    const {title,thumbnail,price,discountPercentage} = curElem;
    const dispatch = useDispatch();
    
    const deleteItem = (data) => {
        dispatch(deleteCart(data));
    }
  return (
    <>
      <tr>
        <td className="align-middle">
          <img src={thumbnail} alt="" style={{ width: 50 }} /> {title}
        </td>
        <td className="align-middle">{getDiscountByPrice(discountPercentage,price)}</td>
        <td className="align-middle">
          <div className="input-group quantity mx-auto" style={{ width: 100 }}>
            <div className="input-group-btn">
              <button className="btn btn-sm btn-primary btn-minus">
                <i className="fa fa-minus" />
              </button>
            </div>
            <input
              type="text"
              className="form-control form-control-sm bg-secondary border-0 text-center"
              defaultValue={1}
            />
            <div className="input-group-btn">
              <button className="btn btn-sm btn-primary btn-plus">
                <i className="fa fa-plus" />
              </button>
            </div>
          </div>
        </td>
        <td className="align-middle">$150</td>
        <td className="align-middle">
          <button className="btn btn-sm btn-danger" onClick={() => deleteItem(curElem.title)}>
            <i className="fa fa-times" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
