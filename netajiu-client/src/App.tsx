import "./App.css";
import NavBar from "./appcomponents/navBar";
import { Routes, Route, Navigate } from "react-router-dom";
// import ContributorProfile from "./pages/ContributorProfile";
import LoginPage from "./pages/LoginPage";
import OpinionCard from "./appcomponents/opinionCard";
import OpinionPage from "./pages/OpinionPage";
import EditorPage from "./pages/EditorPage";
import NetaCard from "./appcomponents/netaCard";

function App() {
  // const loggedIn = useUserStore((state) => state.loggedIn);
  const loggedIn = false;
  return (
    <div>
      <Routes>
        {/* <Route
          path="/"
          element={
            loggedIn == true ? <Home /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="profile"
          element={
            loggedIn == true ? <Profile /> : <Navigate replace to={"/login"} />
          }
        /> */}
        <Route
          path="opinion"
          element={
            <>
              <NavBar /> 
              <OpinionPage />
            </>
          }
        />
        <Route
          path="editor"
          element={
            <>
              <NavBar /> <EditorPage />
            </>
          }
        />
        <Route path="test" element={<NetaCard />} />
        <Route
          path="auth"
          element={
            loggedIn == false ? <LoginPage /> : <Navigate replace to={"/"} />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
