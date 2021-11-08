import React from "react";
import PropTypes from "prop-types";
import TodoItem from "./Product";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function Products(props) {
  return (
    <ul style={styles.ul}>
      {props.products.map((product, index) => {
        return <TodoItem product={product} key={product.id} index={index} />;
      })}
    </ul>
  );
}

Products.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Products;
