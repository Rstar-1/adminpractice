import React, { useState, useEffect, useContext } from "react";
import FeatherIcon from "feather-icons-react";
import { deldata } from "../../../../../ContextProvider/Context";
import { NavLink } from "react-router-dom";

const EditElearning = () => {
  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);
  const { dltdata, setDLTdata } = useContext(deldata);
  console.log(dltdata);

  const getdata = async () => {
    const res = await fetch("http://localhost:8000/api/getdataelearn", {
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

  useEffect(() => {
    getdata();
  }, []);

  const deleteuser = async (id) => {
    const res2 = await fetch(
      `http://localhost:8000/api/deletedataelearn/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const deletedata = await res2.json();
    console.log(deletedata);

    if (res2.status === 422 || !deletedata) {
      console.log("error");
    } else {
      console.log("user deleted");
      setDLTdata(deletedata);
      getdata();
    }
  };

  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">
        Edit Elearning
      </h6>
      <div className="mtpx18 rounded-10 border-ec p20">
        <div className="mtpx5 mbpx15 flex gap-12 items-center">
          <div className="w-60">
            <div className="relative">
              <input
                className="w-full h-input fsize14 rounded-5 plpx10 border-ec"
                placeholder="Search"
              />
              <div className="absolute top-0 right-0 mtpx9 mrpx2">
                <FeatherIcon
                  icon="search"
                  className="textgray cursor-pointer"
                  size={20}
                />
              </div>
            </div>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Image</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Title</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Description</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Category</p>
              </th>
              <th className="fsize13 w-20 textwhite font-300">
                <p>Created Date</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Status</p>
              </th>
              <th className="fsize13 w-10 textwhite font-300">
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {getuserdata.map((e, id) => {
              return (
                <>
                  {e.status === true ? (
                    <>
                      <tr>
                        <td className="fsize13 w-10 textforth">
                          <img
                            src={`http://localhost:8000/uploads/${e.img}`}
                            alt="logo"
                            className="edit-img bg-light-primary rounded-5 object-contain"
                          />
                        </td>
                        <td className="fsize13 w-10 textforth">
                          <p>{e.title}</p>
                        </td>
                        <td className="fsize13 w-20 textforth">
                          <p className="line-clamp2">{e.desc}</p>
                        </td>
                        <td className="w-10 textforth">
                          <p className="prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 textwarning bg-light-warning w-max">
                            {e.category}
                          </p>
                        </td>
                        <td className="fsize12 w-20 textforth">
                          <p>{e.createdAt}</p>
                        </td>
                        <td className="w-10 textforth">
                          <p
                            className={
                              e.status === true
                                ? "prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 capitalize textsuccess bg-light-success w-max"
                                : "prpx15 plpx15 ptpx3 pbpx3 fsize12 rounded-20 capitalize textdanger bg-light-danger w-max"
                            }
                          >
                            {e.status.toString()}
                          </p>
                        </td>
                        <td className="fsize13 w-10 textforth plpx15">
                          <div className="flex items-center gap-5">
                            <NavLink className="mtpx7" to={`/update/${e._id}`}>
                              <FeatherIcon
                                icon="edit"
                                className="textgray cursor-pointer"
                                size={16}
                              />
                            </NavLink>
                            <FeatherIcon
                              onClick={() => deleteuser(e._id)}
                              icon="trash"
                              className="textgray cursor-pointer"
                              size={16}
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  ) : null}
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditElearning;
