import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
// import {router} from "./router/Routing.jsx"
import Navigation from "./components/layout/navigation/index.jsx";
import Footer from "./components/layout/footer/index.jsx";
import Home from "./components/pages/start/index.jsx";
import Userpage from "./components/pages/userpage/index.jsx";
import Login from "./components/pages/login/index.jsx";
import Signup from "./components/pages/signup/index.jsx";
import Detail from "./components/pages/detail/index.jsx";
import ErrorPage from "./components/pages/errorPage/index.jsx";
import ScrollToTopButton from "./components/assets/scrollToTop/scrollToTopButton.jsx";

import ContentfulContext from "./components/ContentfulData/ContentfulContext.jsx";

function App() {
    return (
        <div className="App">
            <ContentfulContext>
                <Navigation />
                <Routes>
                    <Route path="/index" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/userpage" element={<Userpage />} />
                    <Route path="/index/:id" element={<Detail />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
                <ScrollToTopButton />
                <Footer />
            </ContentfulContext>
        </div>
    );
}

export default App;
