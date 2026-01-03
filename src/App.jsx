// import React from 'react'
// import SignUp from './SignUp'
// import Login from './Login'
// import { Route, Routes } from 'react-router-dom'
// import Forget from './Forget'
// import Reset from './Reset'
// import Navbar from './components/Navbar'
// // import Otp from './Otp'

// const App = () => {
//   return (
//     <div>

//       <Navbar />
//       <Routes>
//         {/* <Route  path='/' element={<Otp/>}/> */}
//         <Route path='/' element={<SignUp />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/forget' element={<Forget />} />
//         <Route path='/reset/:resetToken' element={<Reset />} />





//       </Routes>
//     </div>
//   )
// }

// export default App

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import  Account_creamy_moon_629 from "./pages/Account_creamy_moon_629";
import Account_its_meee_pihu_09 from "./pages/Account_its_meee_pihu_09";
import Account_mr_purav_1432 from "./pages/Account_mr_purav_1432";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Account_creamy_moon_629" element={<Account_creamy_moon_629 />} />
        <Route path="/Account_its_meee_pihu_09" element={<Account_its_meee_pihu_09 />} />
        <Route path="/Account_mr_purav_1432" element={<Account_mr_purav_1432 />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
