import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "./Container";
const ShippingPolicy = () => {
  return (
    <>
      <Meta title={"Shipping Pplicy"} />
      <BreadCrumb title="Shipping Pplicy" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="col-12">
          <div className="policy"></div>
        </div>
      </Container>
    </>
  );
};

export default ShippingPolicy;
