import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./pages/admin/sidebar/Sidebar";
import Header from "./pages/admin/layouts/header/Header";
import Dashboard from "./pages/admin/layouts/components/dashboard/Dashboard";
import Error from "./pages/error/Error";
import Portfolio from "./pages/admin/layouts/components/portfolio/Portfolio";
import CmsPages from "./pages/admin/layouts/components/cms/CmsPages";
import Billing from "./pages/admin/layouts/components/billing/Billing";
import Seo from "./pages/admin/layouts/components/seo/Seo";
import Services from "./pages/admin/layouts/components/services/Services";

const  App = () => {
  return (
    <div className="App relative">
      <Router>
        <div className="flex gap-9 bg-f4f5f6 h-100 overflow-hidden ">
          <div className="w-side">
            <Sidebar />
          </div>
          <div className="w-route">
            <Header />
            <Routes>
              {/* ======================= Start-pages ======================= */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/services" element={<Services />} />
              <Route path="/cms" element={<CmsPages />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/seo" element={<Seo />} />
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
