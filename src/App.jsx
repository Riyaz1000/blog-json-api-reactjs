import { Outlet } from "react-router-dom";
import NavBarPage from "./Layout/NavBar";

function App() {
  return (
    // <div className="bg-[#daa467e0] border shadow text-blue-950 font-poppines text-center font-bold text-4xl p-7 mx-auto max-w-5xl rounded mb-12">
    //   <h1>Blog-Api</h1>
    // </div>

    <div>
      <NavBarPage />
      <Outlet />
    </div>
  );
}

export default App;
