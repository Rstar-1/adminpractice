import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updatedata } from "../../../../../../ContextProvider/Context";

const Update = () => {
  const { updata, setUPdata } = useContext(updatedata);
  console.log(updata);
  const history = useNavigate("");

  const [inpval, setINP] = useState({
    img: "",
    status:"",
    title: "",
    category: "",
    desc: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setINP((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const { id } = useParams("");
  console.log(id);

  const getdata = async () => {
    const res = await fetch(
      `http://localhost:8000/api/getsingledataelearn/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error ");
    } else {
      setINP(data);
      console.log("get data");
    }
  };

  useEffect(() => {
    getdata();
  },[]);

  const updateuser = async (e) => {
    e.preventDefault();

    const { img, status, title, category, desc } = inpval;

    const res2 = await fetch(
      `http://localhost:8000/api/updatedataelearn/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          img,
          status,
          title,
          category,
          desc,
        }),
      }
    );

    const data2 = await res2.json();
    console.log(data2);

    if (res2.status === 422 || !data2) {
      alert("fill the data");
    } else {
      history("/edit-blogs");
      setUPdata(data2);
    }
  };

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
        Edit Elearning
      </h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
        <div className="grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Status</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                type="text"
                value={inpval.status}
                onChange={setdata}
                name="status"
                id="status"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Image</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                type="text"
                value={inpval.img}
                onChange={setdata}
                name="img"
                id="img"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Title</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Title"
                type="text"
                value={inpval.title}
                onChange={setdata}
                name="title"
                id="title"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Category</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter Category"
                type="text"
                value={inpval.category}
                onChange={setdata}
                name="category"
                id="category"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Description</label>
            <div>
              <textarea
                className="textarea-input mtpx5 h-input fsize13 rounded-5 p10 border-ec"
                placeholder="Enter Description"
                type="text"
                value={inpval.desc}
                onChange={setdata}
                name="desc"
                id="desc"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mtpx15">
          <button
            onClick={updateuser}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Update;
