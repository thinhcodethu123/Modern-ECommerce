import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Container from "./Container";

const SingleBlog = () => {
  return (
    <>
      <Meta title={"Dynamic Blog Name"} />
      <BreadCrumb title="Dynamic Blog Name" />
      <Container class1="blog-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="single-blog-card">
              <Link to="/" className="d-flex align-items-center gap-10">
                <HiOutlineArrowLeft className="fs-4" />
                Go back to Blogs
              </Link>
              <h3 className="title">A Beautiful Sunday Morning Renaissance</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                laudantium, dignissimos itaque neque modi odit, delectus aliquam
                cupiditate officia officiis adipisci deserunt odio id iste,
                perferendis quae error laboriosam provident.
              </p>
              <img
                src="images/blog-3.webp"
                className="img-fluid w-100 my-4"
                alt="blog"
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SingleBlog;
