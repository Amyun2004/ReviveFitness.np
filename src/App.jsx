import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './CSS/global.css'
import Layout     from './components/Layout/Layout';
import AuthLayout from './components/Layout/AuthLayout';

import Home        from './Pages/Home';
import About       from './Pages/AboutPage';
import Programs    from './Pages/Programs';
import Contact     from './Pages/Contact';

import SignUp      from './components/LoginPage/SignupReviveFitness';
import Login       from './components/LoginPage/login';
import AdminLogin  from './components/LoginPage/AdminLogin';

function App2() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public pages get Navbar + Footer */}
        <Route element={<Layout />}>
          <Route index           element={<Home />} />
          <Route path="about"    element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact"  element={<Contact />} />
        </Route>

        {/* Auth pages get no chrome */}
        <Route element={<AuthLayout />}>
          <Route path="signup"      element={<SignUp />} />
          <Route path="login"       element={<Login />} />
          <Route path="admin-login" element={<AdminLogin />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App2;
