import React from "react";
import { Routes, Route} from "react-router-dom";

import SignTn from "../pages/SignIn";

const AuthRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<SignTn />} />
    </Routes>
);

export default AuthRoutes;