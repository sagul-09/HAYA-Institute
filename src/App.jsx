import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DrawerAppBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AllCourse from './components/AllCourses/AllCourses';
import Footer from './components/Footer/Footer';
import International from './components/International/International';
import MiddleSchoolMath from './components/Math/Middle/MiddleMath'; 
import HighSchoolMath from './components/Math/High/HighMath'; 
import MathAll from './components/Math/MathAll/MathAll';
import MiddleSchoolEnglish from './components/English/Middle/MiddleEnglish';
import HighSchoolEnglish from './components/English/High/HighEnglish';
import EnglishAll from './components/English/EnglishAll/EnglishAll';

function App() {
  return (
    <>
      <Router>
        <DrawerAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses" element={<AllCourse />} />
          <Route path="/courses/maths/all" element={<MathAll />} />
          <Route path="/courses/maths/middle" element={<MiddleSchoolMath />} /> 
          <Route path="/courses/maths/high" element={<HighSchoolMath />} /> 
          <Route path="/courses/english/all" element={<EnglishAll />} />
          <Route path="/courses/english/middle" element={<MiddleSchoolEnglish />} /> 
          <Route path="/courses/english/high" element={<HighSchoolEnglish />} /> 
          <Route path="/international-students" element={<International />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
