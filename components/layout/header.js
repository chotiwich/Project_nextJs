import Head from "next/head";
function header() {
  return (
    <header id="aa-header">
      {/* <!-- Header Start --> */}
      <div class="aa-header-top">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-header-top-area">
                <div class="aa-header-top-left"></div>
                <div class="aa-header-top-right">
                  <ul class="aa-head-top-nav-right">
                    <li>
                      <a href="account.html">My Account</a>
                    </li>
                    <li class="hidden-xs">
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li class="hidden-xs">
                      <a href="cart.html">My Cart</a>
                    </li>
                    <li class="hidden-xs">
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="" data-toggle="modal" data-target="#login-modal">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="aa-header-bottom">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-header-bottom-area">
                <div class="aa-logo">
                  <a href="/">
                    <span class="fa fa-camera"></span>
                    <p>
                      Camera<strong> Shop</strong>{" "}
                      <span>By Chotiwich Waradach</span>
                    </p>
                  </a>
                </div>
                <div class="aa-cartbox">
                  <a class="aa-cart-link" href="/cart">
                    <span class="fa fa-shopping-basket"></span>
                    <span class="aa-cart-title">SHOPPING CART</span>
                  </a>
                </div>

                <div class="aa-search-box">
                  <form action="">
                    <input type="text" name="" id="" placeholder="Search  " />
                    <button type="submit">
                      <span class="fa fa-search"></span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section id="menu">
        <div class="container">
          <div class="menu-area">
            <div class="navbar navbar-default" role="navigation">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle"
                  data-toggle="collapse"
                  data-target=".navbar-collapse"
                >
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div class="navbar-collapse collapse">
                <ul class="nav navbar-nav">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="#">
                      Users <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="/shop">All Product</a>
                      </li>
                      <li>
                        <a href="/Digital_Cameras">Digital Cameras</a>
                      </li>
                      <li>
                        <a href="/Lenses">Lenses</a>
                      </li>
                      <li>
                        <a href="/Flashes">Flashes</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      Admin <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu">
                      <li>
                        <a href="/insert">Insert</a>
                      </li>
                      <li>
                        <a href="/products">Updates</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default header;
