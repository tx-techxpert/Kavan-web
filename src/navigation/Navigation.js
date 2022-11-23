import React from "react";
import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as Viewers from '../pages/viewers';

const Navigation = () => {
    const Navigate = useNavigate();
    useEffect(() => {
        Navigate("/");
    }, [])
    return (
        <Routes>
            <Route path="/" element={<Viewers.HomePage />} />
            <Route path="/about" element={<Viewers.AboutUs />} />
            <Route path="/contactUs" element={<Viewers.ContactUs />} />
            <Route path="/signUp" element={<Viewers.SignUp />} />
            <Route path="/signIn" element={<Viewers.SignIn />} />
            <Route path="/fillOutForm" element={<Viewers.FillOutForm />} />
            <Route path="/createProfile" element={<Viewers.CreateProfile />} />
            <Route path="/registrationPending" element={<Viewers.RegistrationPending />} />
            <Route path="/registrationSuccessfull" element={<Viewers.RegistrationSuccessfull />} />
        </Routes>
    );
};

export default Navigation;
