import React from "react";
import PropTypes from "prop-types";
import { Header, Footer, ScrollUp } from "../../components";

import { Helmet } from "react-helmet";

const HelmetLayout = ({ children, title, metaDescription }) => {
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <>
        <Header />
        <ScrollUp />
        {children}
      </>
    </>
  );
};

HelmetLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any.isRequired,
  metaDescription: PropTypes.string,
};

export default HelmetLayout;
