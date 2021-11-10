import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "./context";

const styles = {
  li: {
    textAlign: "center",
    padding: ".5rem 1rem",
    border: "1px solid",
    borderRadius: "4px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight: "1rem",
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
  },
};

const Product = ({ product }) => {
  const { removeProduct } = useContext(Context);
  const { updateProduct } = useContext(Context);

  return (
    <div>
      <li style={styles.li}>
        <button
          onClick={() => {
            updateProduct(product);
          }}
          style={{ marginLeft: "530px" }}
        >
          Edit
        </button>
        <div>
          <strong>{product.name}</strong>
        </div>
        <div style={styles.head}>
          <img src={product.imageUrl} alt='product'/>
          <button className={"rm"} onClick={() => removeProduct(product.id)}>
            &times;
          </button>
        </div>
        <p>
          <strong>Weigth:</strong> {product.weigth}
        </p>
        <p>
          <strong>Count:</strong> {product.count}
        </p>
        <span>
          <strong>Size:</strong>(heigth:{product.size.heigth} , width:
          {product.size.width} )
        </span>
      </li>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  index: PropTypes.number,
};

export default Product;
