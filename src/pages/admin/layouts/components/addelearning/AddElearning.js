import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

const AddElearning = () => {
  const [category, setSelectedOption] = useState("");
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const [Title, StepTitle] = useState("");
  const [Desc, StepDesc] = useState("");

  const getdata = async () => {
    const res = await fetch("http://localhost:8000/api/getdatacategoryelearn", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      console.log("error");
    } else {
      setUserdata(data);
      console.log("get data");
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]);
  };
  const [file, setFile] = useState(null);
  useEffect(() => {
    getdata();
  }, []);

  // Event handler for option change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
  };

  const history = useNavigate("");

  const addUserdata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", Title);
    formData.append("desc", Desc);
    formData.append("category", category);
    const data = await axios.post("http://localhost:8000/api/elearnregister", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    const res = await data.json();

    
  };

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
        Add Elearning
      </h6>
      <p className="mtpx2 textgray fsize13">
        In publishing and graphic design, Lorem ipsum is a placeholder text
        commonly used to content.
      </p>
      <div className="mtpx18">
        <div className="grid-cols-1 w-60 gap-12">
          <div className="w-full">
            <label className="fsize13 textforth">Image</label>
            <div>
              <input
                className="side-input mtpx5 h-input fsize13 rounded-5 plpx10 border-ec"
                placeholder="Enter"
                type="file"
                onChange={handleFileChange}
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
                onChange={(e) => StepTitle(e.target.value)}
                name="title"
                id="title"
              />
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Category</label>
            <div>
              <select
                className="w-full p5"
                value={category}
                onChange={handleOptionChange}
                name="category"
                id="category"
              >
                {getuserdata.map((option, index) => (
                  <option key={index} value={option._id}>
                    {option.category}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full">
            <label className="fsize13 textforth">Description</label>
            <div>
              <textarea
                className="textarea-input mtpx5 h-input fsize13 rounded-5 p10 border-ec"
                placeholder="Enter Description"
                type="text"
                onChange={(e) => StepDesc(e.target.value)}
                name="desc"
                id="desc"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="mtpx15">
          <button
            onClick={addUserdata}
            className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx6 pbpx6 plpx25 prpx25 fsize13 bgprimary"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddElearning;
