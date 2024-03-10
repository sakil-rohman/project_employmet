import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../cms/components/Header';
import TopNavbar from '../cms/components/TopNavbar';
import FooTer from '../cms/components/Footer';
import '../App2.css';
import '../bootstrap.min.css';
import Login from '../cms/components/Login';
import Dashboard from '../cms/components/Dashboard';
import Ministry_view from '../cms/components/Ministry_view';
import Ministry_add from '../cms/components/Ministry_add';
import Ministry_edit from '../cms/components/Ministry_edit';
import SliderImage_view from '../cms/components/SliderImage_view';
import SliderImage_add from '../cms/components/SliderImage_add';
import SliderImage_edit from '../cms/components/SliderImage_edit';
import Guideline_add from '../cms/components/Guideline_add';
import Guideline_view from '../cms/components/Guideline_view';
import Guideline_edit from '../cms/components/Guideline_edit';
import FooterAddress_add from '../cms/components/FooterAddress_add';
import FooterAddress_view from '../cms/components/FooterAddress_view';
import FooterAddress_edit from '../cms/components/FooterAddress_edit';
import ContactUs_add from '../cms/components/ContactUs_add';
import ContactUs_view from '../cms/components/ContactUs_view';
import ContactUs_edit from '../cms/components/ContactUs_edit';
import ContactTable_add from '../cms/components/ContactTable_add';
import ContactTable_view from '../cms/components/ContactTable_view';
import ContactTable_edit from '../cms/components/ContactTable_edit';
import AboutUs_view from '../cms/components/AboutUs_view';
import AboutUs_add from '../cms/components/AboutUs_add';
import AboutUs_edit from '../cms/components/AboutUs_edit';
import Schemes_view from '../cms/components/Schemes_view';
import Schemes_add from '../cms/components/Schemes_add';
import Schemes_edit from '../cms/components/Schemes_edit';
import Resources_view from '../cms/components/Resources_view';
import Resources_add from '../cms/components/Resources_add';
import Resources_edit from '../cms/components/Resources_edit';
import Notification_view from '../cms/components/Notification_view';
import Notification_add from '../cms/components/Notification_add';
import Notification_edit from '../cms/components/Notification_edit';
import EventCards_view from '../cms/components/EventCards_view';
import EventCards_edit from '../cms/components/EventCards_edit';
import EventCards_add from '../cms/components/EventCards_add';
import Gallery_image_view from '../cms/components/Gallery_image_view';
import Gallery_image_add from '../cms/components/Gallery_image_add'
import Gallery_image_edit from '../cms/components/Gallery_image_edit';




function CMSApp() {
  return (
    <div>
        <div id="wrapper">
          <Header />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              <TopNavbar />
              <Routes>
                {/* <Route path="/login" element={<Login />} /> */}
                <Route path="/" element={<Dashboard />} />
                <Route path="/ministry-view" element={<Ministry_view />} />
                <Route path="/ministry-add" element={<Ministry_add />} />
                <Route path="/:id/ministry-edit" element={<Ministry_edit />} />

                <Route path="/galleryimage-view" element={<Gallery_image_view />} />
                <Route path="/galleryimage-add" element={<Gallery_image_add />} />
                <Route path="/:id/galleryimage-edit" element={<Gallery_image_edit />} />
                <Route path="/sliderimage-view" element={<SliderImage_view />} />
                <Route path="/sliderimage-add" element={<SliderImage_add />} />
                <Route path="/:id/sliderimage-edit" element={<SliderImage_edit />} />
                <Route path="/guideline-view" element={<Guideline_view />} />
                <Route path="/guideline-add" element={<Guideline_add />} />
                <Route path="/:id/guideline-edit" element={<Guideline_edit />} />
                <Route path="/footeraddress-view" element={<FooterAddress_view />} />          
                <Route path="/footeraddress-add" element={<FooterAddress_add />} />
                <Route path="/:id/footeraddress-edit" element={<FooterAddress_edit />} />
                <Route path="/contactus-view" element={<ContactUs_view />} />          
                <Route path="/contactus-add" element={<ContactUs_add />} />
                <Route path="/:id/contactus-edit" element={<ContactUs_edit />} />
                <Route path="/contacttable-view" element={<ContactTable_view />} />          
                <Route path="/contacttable-add" element={<ContactTable_add />} />
                <Route path="/:id/contacttable-edit" element={<ContactTable_edit />} />
                <Route path="/aboutus-view" element={<AboutUs_view />} />          
                <Route path="/aboutus-add" element={<AboutUs_add />} />
                <Route path="/:id/aboutus-edit" element={<AboutUs_edit />} />
                <Route path="/schemes-view" element={<Schemes_view />} />          
                <Route path="/schemes-add" element={<Schemes_add />} />
                <Route path="/:id/schemes-edit" element={<Schemes_edit />} />
                <Route path="/resources-view" element={<Resources_view />} />          
                <Route path="/resources-add" element={<Resources_add />} />
                <Route path="/:id/resources-edit" element={<Resources_edit />} />
                <Route path="/notification-view" element={<Notification_view />} />          
                <Route path="/notification-add" element={<Notification_add />} />
                <Route path="/:id/notification-edit" element={<Notification_edit />} />
                <Route path="/eventcards-view" element={<EventCards_view />} />          
                <Route path="/eventcards-add" element={<EventCards_add />} />
                <Route path="/:id/eventcards-edit" element={<EventCards_edit />} />
              </Routes>
            </div>
            <FooTer />
          </div>
        </div>
    </div>
  );
}

export default CMSApp;
