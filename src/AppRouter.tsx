import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';

import { HelmetProvider  } from 'react-helmet-async';
import { PageNotFound } from './pages/PageNotFound';
import { Navbar } from './assets/components/Navbar';
import { Footer } from './assets/components/Footer';
import { BiLoaderCircle } from 'react-icons/bi';
import Alert from './assets/components/Alert';
import Services from './pages/services/Services';
import { Team } from './pages/team/Team';
// import BlogsPage from './pages/blogs/BlogsPage';
// import BlogPage from './pages/blogs/BlogPage';


const HomePage = lazy(() => import("./pages/home/page"))
const AboutPage = lazy(() => import("./pages/About/AboutPage"))
const ContactPage = lazy(() => import("./pages/Contact/ContactPage"))


export const AppRouter = () => {  
    return (
        <HelmetProvider>
            <Router>
                <Alert />
                <ToTop />
                <Suspense fallback={<Loader />}>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/about-us" element={<AboutPage />}/>
                        <Route path="/contact" element={<ContactPage />}/>
                        <Route path="/products" element={<Services />}/>
                        <Route path="/our-team" element={<Team />}/>
                        <Route path="/*" element={<PageNotFound />} />
                    </Routes>
                    <Footer />
                </Suspense>
            </Router>
        </HelmetProvider>
    );
  };

const Loader= () => {
    return(
        <div className="center h-screen w-full bg-primary flex-col gap-5">
            <div className="center h-[90vh] w-11/12   flex-col gap-5 rounded-xl">
                <BiLoaderCircle  
                    className="text-5xl text-zinc-900 animate-spin"
                />
                <h1 className="text-zinc-900 font-bold text-3xl lg:text-4xl text-center">Famadan International Limited</h1>
            </div>
        </div>
    )
}

const ToTop = () => {
    const location = useLocation()
    useEffect(() => {
        scrollTo({
          top: 0,
          behavior: 'smooth'
      })
      }, [location])
      
      return(<></>)
}