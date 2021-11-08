import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import Context from "./Products/context";
import "../src/addProduct.css";

const AddProduct = ({ onCreate }) => {
  const { SetActiveForm } = useContext(Context);

  function submitHandler(event) {
    event.preventDefault();
    if (validate()) {
      const product = {
        id: Date.now(),
        imageUrl: img,
        name: name,
        count: count,
        width: width,
        heigth: heigth,
        weigth: weigth,
      };
      onCreate(product);
      setName("");
      setImg("");
      SetCount("");
      SetWidth("");
      SetHeight("");
      SetWeigth("");
      SetActiveForm(false);
    } else {
      alert("Invalid Data. Please fill all field");
    }
  }

  const validate = () => {
    if (
      name.length &&
      img.length &&
      count.length &&
      width.length &&
      heigth.length &&
      weigth.length
    ) {
      return true;
    }
  };

  const cancelCreating = () => {
    setName("");
    setImg("");
    SetCount("");
    SetWidth("");
    SetHeight("");
    SetWeigth("");
    SetActiveForm(false);
  };

  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [count, SetCount] = useState();
  const [width, SetWidth] = useState();
  const [heigth, SetHeight] = useState();
  const [weigth, SetWeigth] = useState("");

  return (
    <div className="create">
      <form style={{ marginBottom: "1rem" }} onSubmit={submitHandler}>
        <h3>Fill out the form</h3>
        <input
          placeholder="Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <br />
        <input
          placeholder="Link to img"
          value={img}
          onChange={(event) => setImg(event.target.value)}
        />
        <br />
        <input
          placeholder="count"
          type="number"
          value={count}
          onChange={(event) => SetCount(event.target.value)}
        />
        <br />
        <input
          placeholder="width"
          type="number"
          value={width}
          onChange={(event) => SetWidth(event.target.value)}
        />
        <br />
        <input
          placeholder="height"
          type="number"
          value={heigth}
          onChange={(event) => SetHeight(event.target.value)}
        />
        <br />
        <input
          placeholder="weigth"
          value={weigth}
          onChange={(event) => SetWeigth(event.target.value)}
        />
        <br />
        <button style={{ margin: "10px" }} type="submit">
          Add
        </button>
        <button style={{ margin: "10px" }} onClick={cancelCreating}>
          Cancel
        </button>
      </form>
    </div>
  );
};

AddProduct.prototype = {
  onCreate: PropTypes.func.isRequired,
};

export default AddProduct;
