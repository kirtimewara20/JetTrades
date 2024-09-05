import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './app/components/header/header';
import Footer from './app/components/footer/footer';
import Scrol from './app/components/Scroller/Scrol';
import { ToastContainer } from 'react-toastify';

import './App.css';

const Home = lazy(() => import('./app/pages/home/home'));
const About = lazy(() => import('./app/pages/about/about'));
const Service = lazy(() => import('./app/pages/service/service'));
const TransportService = lazy(() => import('./app/pages/transportService/transportService'));
const ProjectBased = lazy(() => import('./app/pages/ProjectBased/ProjectBased'));
const ResourceCenter = lazy(() => import('./app/pages/ResourceCenter/ResourceCenter'));
const ProductPage = lazy(() => import('./app/pages/product/product'));
const DimensionalCargo = lazy(() => import('./app/pages/DimensionalCargo/DimensionalCargo'));
const ContactUs = lazy(() => import('./app/pages/ContactUs/ContactUs'));
const Login = lazy(() => import('./app/pages/Login/Login'));
const Dashboard = lazy(() => import('./app/pages/dashboard/Dashboard'));
const CreateBlog = lazy(() => import('./app/pages/CreateBlog/CreateBlog'));
const SingleEBook = lazy(() => import('./app/pages/SingleEBook/SingleEBook'));
const SingleBlogPage = lazy(() => import('./app/pages/SingleBlogPage/SingleBlog'));
const CreateEbook = lazy(() => import('./app/pages/CreateEBook/CreateEbook'));
const CreateCaseStudies = lazy(() => import('./app/pages/CreateCaseStudies/CreateCaseStudies'));
const SingleBlog = lazy(() => import('./app/pages/SingleBlogPage/SingleBlog'));
const SingleCaseStudies = lazy(() => import('./app/pages/SingleCaseStudies/SingleCaseStudies'));
const Gallery = lazy(() => import('./app/pages/Gallery/Gallery'));
const PrivacyPolicy = lazy(() => import('./app/pages/privacyPolicy/PrivacyPolicy'));
const TermsandConditions = lazy(() => import('./app/pages/termsAndConditions/TermsAndConditions'));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/transportservice" element={<TransportService />} />
          <Route path="/projectbased" element={<ProjectBased />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/resource" element={<ResourceCenter />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/dimensional" element={<DimensionalCargo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/createBlog" element={<CreateBlog />} />
          <Route path="/ebook" element={<SingleEBook />} />
          <Route path="/blog" element={<SingleBlogPage />} />
          <Route path="/createCaseStudies" element={<CreateCaseStudies />} />
          <Route path="/createEbook" element={<CreateEbook />} />
          <Route path="/blog/:id" element={<SingleBlog />} />
          <Route path="/E-book/:id" element={<SingleEBook />} />
          <Route path="/caseStudy/:id" element={<SingleCaseStudies />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/termsAndConditions" element={<TermsandConditions />} />
          <Route path="*" element={<h1>404</h1>} />
        </Routes>
      </Suspense>
      <Footer />
      <Scrol />
      <ToastContainer />
    </Router>
  );
}

export default App;
