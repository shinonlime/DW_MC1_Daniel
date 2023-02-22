import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/home-page";
import Profile from "./pages/profile";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/profile/:id" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
