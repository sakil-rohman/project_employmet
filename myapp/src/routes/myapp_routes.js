import React from 'react';
import Header from '../components/Header';
import Home from '../components/Home';
import FooTer from '../components/Footer';
import Mapelocation from '../components/Mapelocation';
import Guidelines from '../components/Guidelines';
import Guidelines2 from '../components/Guidelines2 copy';
import Contactus from '../components/Contactus';
import Gallery from '../components/gallery';
import Login from '../components/Login';
import Registration from '../components/Registration';
import AboutUs from '../components/Aboutus';
import AboutUs_view from '../components/Aboutus_view';
import AboutusTitles from '../components/AboutusTitles';
import Schemes from '../components/Schemes';
import Schemes_view from '../components/Schemes_view';
import SchemesTitles from '../components/SchemesTitles';
import NotificationTitles from '../components/Notification';
import Notification_view from '../components/Notification_view';
import Login_page from '../components/Login_page';
import Mini_about_us from '../components/Mini_about_us';
import Guidelines_view from '../components/Guidelines_view';
import GuidelinesTitles from '../components/GuidelinesTitles';
import { Routes, Route } from 'react-router-dom';

function MyApp() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/guidelines-view/:id" element={<Guidelines_view />} /> 
        <Route path="/guideline-titles" element={<GuidelinesTitles />} />
        <Route path="/guidelines2" element={<Guidelines2 />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/aboutus-view/:id" element={<AboutUs_view />} /> 
        <Route path="/aboutus-titles" element={<AboutusTitles />} /> 
        <Route path="/schemes" element={<Schemes />} />
        <Route path="/schemes_view/:id" element={<Schemes_view />} />
        <Route path="/schemes-titles" element={<SchemesTitles />} /> 
        <Route path="/:id/notification-view" element={<Notification_view />} /> 
        <Route path="/notification-titles" element={<NotificationTitles />} /> 
        <Route path="/login_part" element={<Login_page />} /> 
        <Route path="/mini_about_us" element={<Mini_about_us />} /> 
      </Routes>
      <FooTer />
    </div>
  );
}

export default MyApp;
