import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import Container from "./Container";
const TermAndContion = () => {
  return (
    <>
      <Meta title={"Term And Conditions"} />
      <BreadCrumb title="Term And Conditions" />
      <Container class1="policy-wrapper py-5 home-wrapper-2">
        <div className="col-12">
          <div className="policy"></div>
        </div>
      </Container>
    </>
  );
};

export default TermAndContion;
