import Navbar from "./components/shared/Navbar";
import { Helmet } from "react-helmet-async";
function App() {
  return (
    <>
      <Helmet>
        <title>Key Haven | Home</title>
      </Helmet>
      <Navbar />
      <h1 className="text-center text-4xl bg-rose-50 py-6">
        Welcome to Key Haven
      </h1>
    </>
  );
}

export default App;
