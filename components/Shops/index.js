import React from "react";
import CardShop from "../../components/product";
function index(props) {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <br />
            <div class="row">
              <div class="aa-product-area">
                <div class="aa-product-inner">
                  <div class="tab-content">
                    <ul class="aa-product-catg"></ul>
                    <div className="row">
                      {/* card one */}
                      {props.data.map((data) => (
                        <CardShop data={data} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default index;
