import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const history = useNavigate("");
  const [inpval, setInpval] = useState({
    img: "",
    title: "",
    category: "",
    desc: "",
  });
  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const addUserdata = async (e) => {
    e.preventDefault();
    const { category } = inpval;

    const data = await fetch(
      "http://localhost:8000/api/elearncategoryregister",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
        }),
      }
    );
    const res = await data.json();

    if (res.status === 201) {
      alert("fill the data");
    } else {
      history("/");
      setInpval({
        ...inpval,
        img: "",
        title: "",
        category: "",
        desc: "",
      });
    }
  };
  return (
    <div>
      <div className="mtpx6 grid-cols-1 gap-12">
        <div className="w-full">
          <label className="fsize13 textforth">Category</label>
          <div>
            <input
              className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
              placeholder="Enter Category"
              type="text"
              value={inpval.category}
              onChange={setVal}
              name="category"
              id="category"
            />
          </div>
        </div>
      </div>
      <div className="mtpx15 flex justify-center">
        <button
          className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          onClick={addUserdata}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddCategory;
