import React from "react";

function index(props) {
  const { data } = props;
  return (
    <>
      <div class="card"></div>
      <div class="col-md-3">
        <a class="aa-product-img" href="#">
          <img src={data.product_img} width="260" height="295" />
        </a>
        <h3 class="text-center">
          <b>{data.product_name}</b>
        </h3>
        <h4 class="text-center">
          <b>{data.product_price} ฿</b>
        </h4>
        <br></br>
        <center>
          <div class="col-md-12">
            <button type="button" class="btn">
              Add to Cart
            </button>
          </div>
        </center>
        <br></br>
        <br></br>
      </div>
    </>
  );
}

export default index;
