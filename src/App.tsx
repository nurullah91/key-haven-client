import { Outlet } from "react-router-dom";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <title>Key Haven</title>
      </Helmet>
      <div>
        <Navbar />
        <div className="min-h-[calc(100vh-68px)]">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
