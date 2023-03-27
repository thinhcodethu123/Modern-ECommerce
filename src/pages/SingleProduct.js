import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { TbGitCompare } from "react-icons/tb";
import { AiOutlineHeart } from "react-icons/ai";
import Container from "./Container";
const SingleProduct = () => {
  const props = {
    width: 650,
    height: 600,
    zoomWidth: 600,
    img: "https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg",
  };
  const [orderProduct, setorderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log("text", text);
    var textField = document.createElement("textarea");
    textField.innerText = text;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();
  };
  return (
    <>
      <Meta title={"Product Name"} />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <ReactImageZoom {...props} />
              </div>
            </div>
            <div className="other-product-images d-flex flex-wrap gap-15">
              <div>
                <img
                  src="https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg"
                  className="img-fluid"
                />
              </div>
              <div>
                <img
                  src="https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title">
                  Jacob & Co. reveals four new iterations of the Bugatti Chiron
                  Tourbillon Watch
                </h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 10.000.000 DOLLAR</p>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0 t-review">( 100 Reviews )</p>
                </div>
                <a href="#review" className="review-btn">
                  Write a Review
                </a>
              </div>
              <div className=" py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand :</h3>
                  <p className="product-data"> Jacob & Co.</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags :</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Availablity :</h3>
                  <p className="product-data">In Stock</p>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">Size :</h3>
                  <div className="d-flex flex-wrap gap-15">
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      S
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      M
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      XL
                    </span>
                    <span className="badge border-1 bg-white text-dark border-secondary">
                      XXL
                    </span>
                  </div>
                </div>
                <div className="d-flex gap-10 flex-column mt-2 mb-3">
                  <h3 className="product-heading">
                    Color : <Color />
                  </h3>
                </div>
                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity :</h3>
                  <div className="">
                    <input
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      className="form-control"
                      style={{ width: "70px" }}
                      id=""
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <button className="button border-0" type="submit">
                      Add to Cart
                    </button>
                    <button to="/signup" className="button signup text-white">
                      Buy It Now
                    </button>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <div>
                    <TbGitCompare className="fs-5 me-2" /> Add to Compare
                  </div>
                  <div>
                    <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                  </div>
                </div>
                <div className="d-flex gap-10 flex-columns my-3">
                  <h3 className="product-heading">Shipping & Returns :</h3>
                  <p className="product-data">
                    Free shipping and returns available on all orders! <br />
                    We ship all US domestic orders within
                    <b>5-10 business days!</b>
                  </p>
                </div>
                <div className="d-flex gap-10 flex-columns my-3">
                  <h3 className="product-heading">Product Link:</h3>
                  <a
                    href="javascript:void(0);"
                    onClick={() => {
                      copyToClipboard(
                        "https://luxurylaunches.com/wp-content/uploads/2020/12/Jacob-and-Co-Chiron-Tourbillon-Epitomizes-Bugatti-5.jpg"
                      );
                    }}
                  >
                    Copy Product Link
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h4 className="">Description</h4>
            <div className="bg-white p-3">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                laudantium, dignissimos itaque neque modi odit, delectus aliquam
                cupiditate officia officiis adipisci deserunt odio id iste,
                perferendis quae error laboriosam provident.
              </p>
            </div>
          </div>
        </div>
      </Container>
      <Container id="review" class1="reviews-wrapper  home-wrapper-2">
        <div className="col-12">
          <h3 id="review">Reviews</h3>
          <div className="review-inner-wrapper">
            <div className="review-head d-flex justify-content-between align-items-end">
              <div>
                <h4 className="mb-2">Customer Reviews</h4>
                <div className="d-flex align-items-center gap-10">
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="mb-0">Based on 2 Reviews</p>
                </div>
              </div>
              {orderProduct && (
                <div>
                  <a className="text-dark text-decoration-underline" href="">
                    Write a Reviews
                  </a>
                </div>
              )}
            </div>
            <div className="review-form py-4">
              <h4>Write a Reviewr</h4>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={true}
                    activeColor="#ffd700"
                  />
                </div>
                <div>
                  <textarea
                    name=""
                    id=""
                    className="w-100 form-control"
                    cols="30"
                    rows="4"
                    placeholder="Comments"
                  ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="button border-0">Submit Review</button>
                </div>
              </form>
            </div>
            <div className="reviews mt-4">
              <div className="review">
                <div className="d-flex gap-10 align-items-center">
                  <h6 className="mb-0">Navdeep</h6>
                  <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                  />
                </div>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum laudantium, dignissimos itaque neque modi odit,
                  delectus aliquam cupiditate officia officiis adipisci deserunt
                  odio id iste, perferendis quae error laboriosam provident.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleProduct;
