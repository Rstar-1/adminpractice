import React from "react";
import FeatherIcon from "feather-icons-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const sidebarmenu = [
    {
      id: 1,
      name: "Dashboard",
      icon: "grid",
      route: "dashboard",
    },
    {
      id: 2,
      name: "User Stories",
      icon: "user",
      route: "userstory",
    },
  ];
  const sidebarmenu2 = [
    {
      id: 1,
      name: "Elearning View",
      icon: "folder",
      route: "viewblog",
    },
    {
      id: 2,
      name: "Add Elearning",
      icon: "plus",
      route: "add-blogs",
    },
    {
      id: 3,
      name: "Edit Elearning",
      icon: "edit",
      route: "edit-blogs",
    },
    {
      id: 4,
      name: "Category",
      icon: "edit",
      route: "category",
    },
  ];
  const sidebarmenu3 = [
    {
      id: 1,
      name: "Elearning Version",
      icon: "folder-plus",
      route: "version",
    },
    {
      id: 2,
      name: "Documentation",
      icon: "file",
      route: "documentation",
    },
  ];
  return (
    <div className="bgwhite h-100 relative">
      <div className="">
        <div className="flex justify-center w-full ptpx20 pbpx20">
          <img
            src="https://nexuscluster.blob.core.windows.net/server01/HOMECLIQ/multipleImage/poster-FZS682kyRPvBUM2gmdHQt-1697720366"
            alt="logo"
            className="sidebar-logo"
          />
        </div>
        <div className="ptpx10 pbpx10 plpx10 prpx10">
          <div className="accordion">
            <div className="tab">
              <input type="checkbox" name="accordion-1" id="cb1" />
              <label
                for="cb1"
                className="p10 hover-col cursor-pointer flex justify-between items-center fsize15 textforth mtpx2 font-300"
              >
                <div className="flex items-center gap-4">
                  <FeatherIcon
                    icon="home"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                  Home
                </div>
                <div className="flex items-center gap-4">
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
                    {sidebarmenu.length}
                  </p>
                  <FeatherIcon size="16" icon="chevron-right" />
                </div>
              </label>
              <div className="tab__content">
                <div className="grid grid-cols-1 p9 gap-12">
                  {sidebarmenu.map((e) => (
                    <NavLink
                      activeClassName="active"
                      className="flex items-center activesidebar pbpx7 gap-9"
                      to={e.route}
                    >
                      <FeatherIcon
                        icon={e.icon}
                        className=" cursor-pointer"
                        size={16}
                      />
                      <p className="fsize14  mtpx2 font-300">{e.name}</p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
            <div className="tab">
              <input type="checkbox" name="accordion-2" id="cb2" />
              <label
                for="cb2"
                className="p10 hover-col cursor-pointer flex justify-between items-center fsize15 textforth mtpx2 font-300"
              >
                <div className="flex items-center gap-4">
                  <FeatherIcon
                    icon="briefcase"
                    className="textgray cursor-pointer"
                    size={16}
                  />
                  Management
                </div>
                <div className="flex items-center gap-4">
                  <p className="fsize12 dot-dash rounded-full flex items-center justify-center textwhite bgprimary">
                    {sidebarmenu2.length}
                  </p>
                  <FeatherIcon size="16" icon="chevron-right" />
                </div>
              </label>
              <div className="tab__content">
                <div className="grid grid-cols-1 p9 gap-12">
                  {sidebarmenu2.map((e) => (
                    <NavLink
                      activeClassName="active"
                      className="flex items-center activesidebar pbpx7 gap-9"
                      to={e.route}
                    >
                      <FeatherIcon
                        icon={e.icon}
                        className=" cursor-pointer"
                        size={16}
                      />
                      <p className="fsize14  mtpx2 font-300">{e.name}</p>
                    </NavLink>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 p9 gap-12">
            {sidebarmenu3.map((e) => (
              <NavLink
                activeClassName="active"
                className="flex items-center activesidebar pbpx7 gap-9"
                to={e.route}
              >
                <FeatherIcon
                  icon={e.icon}
                  className=" cursor-pointer"
                  size={16}
                />
                <p className="fsize14  mtpx2 font-300">{e.name}</p>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="ptpx10 pbpx10 plpx20 prpx20 grid grid-cols-1 gap-12">
          <div className="flex items-center pbpx7 gap-9">
            <FeatherIcon
              icon="log-out"
              className="textgray cursor-pointer"
              size={16}
            />
            <p className="fsize14 textgray mtpx2 font-300">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
