import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Error from "./pages/error/Error";
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import ViewBlog from "./pages/admin/layouts/components/viewelearning/ViewElearning";
import Category from "./pages/admin/layouts/components/category/Category";
import AddBlog from "./pages/admin/layouts/components/addelearning/AddElearning";
import EditBlog from "./pages/admin/layouts/components/editelearning/EditElearning";
import Version from "./pages/admin/layouts/components/version/Version";
import Update from "./pages/admin/layouts/components/editelearning/components/Update";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <div className="flex gap-9 bg-e8f2fc h-100 overflow-hidden ">
          <div className="w-side">
            <Sidebar />
          </div>
          <div className="w-route">
            <Header />
            <Routes>
              {/* ======================= Start-pages ======================= */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/viewblog" element={<ViewBlog />} />
              <Route path="/category" element={<Category />} />
              <Route path="/add-blogs" element={<AddBlog />} />
              <Route path="/edit-blogs" element={<EditBlog />} />
              <Route path="/update/:id" element={<Update />} />
              <Route path="/version" element={<Version />} />
              {/* ======================= End-pages ======================= */}

              {/* ======================= Start-Error ======================= */}
              <Route path="*" element={<Error />} />
              {/* ======================= End-Error ======================= */}
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
