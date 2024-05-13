import React from "react";
import { Routes, Route} from "react-router-dom";

import SignTn from "../pages/SignIn";
import RegisterUser from "../pages/RegisterUser";

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignTn />} />
        <Route path="/Register" element={<RegisterUser />} />
    </Routes>
);

export default AuthRoutes;