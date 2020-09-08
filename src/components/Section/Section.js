import React from "react";
import PropTypes from "prop-types";

import s from "./Section.module.scss";

const Section = ({ title, children }) => {
  return (
    <section className={s.container}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
