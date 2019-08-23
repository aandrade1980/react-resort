import React from "react";
import { Link } from "react-router-dom";

// Components
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          Return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Error;
