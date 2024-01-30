import React from "react";
import { NavLink } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

const Portfolio = () => {
  return (
    <div className="bgwhite border-d mtpx9 cust-scroll p20">
      <div className="">
        <h6 className="fsize20 textprimary mtpx1 mbpx1 font-600">Portfolio</h6>
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
            <div className="w-40 flex justify-end">
              <button className="border-0 cursor-pointer font-500 textwhite rounded-5 ptpx10 pbpx10 plpx25 prpx25 fsize14 bgprimary">
                Add Portfolio
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th className="fsize13 textforth w-20 font-300">
                  <p>Image</p>
                </th>
                <th className="fsize13 textforth w-20 font-300">
                  <p>Title</p>
                </th>
                <th className="fsize13 textforth w-20 font-300">
                  <p>Sub Title</p>
                </th>
                <th className="fsize13 textforth w-30 font-300">
                  <p>Description</p>
                </th>
                <th className="fsize13 textforth w-10 font-300">
                  <p>Actions</p>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fsize13 textgray w-20 font-300">
                  <p>fgd</p>
                </td>
                <td className="fsize13 textgray w-10 font-300">
                  <p>fds</p>
                </td>
                <td className="fsize13 textgray w-20 font-300">
                  <p>fds</p>
                </td>
                <td className="fsize13 textgray w-30 font-300">
                  <p>fds</p>
                </td>
                <td className="fsize13 textgray w-10">
                  <NavLink>
                    <FeatherIcon
                      icon="edit"
                      className="textgray cursor-pointer"
                      size={15}
                    />
                  </NavLink>

                  <FeatherIcon
                    icon="trash"
                    className="textgray mlpx3 cursor-pointer"
                    size={15}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
