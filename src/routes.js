import { createBrowserRouter } from "react-router-dom";

import LandingPage from './pages/LandingPage';
import ServicePage from './pages/ServicePage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage/>
    },
    {
      path: "/services",
      element: <ServicePage/>
    },
    {
        path: "/about-us",
        element: <AboutPage/>
    },
    {
        path: "/contact-us",
        element: <ContactPage/>
    }
])
  
export default router