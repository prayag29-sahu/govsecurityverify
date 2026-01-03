/* eslint-disable no-unused-vars */
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate, Link } from "react-router-dom";

// const Login = () => {
//     const navigate = useNavigate();

//     const [input, setInput] = useState({
//         email: "",
//         passWord: ""
//     });

//     function handleChange(e) {
//         const { name, value } = e.target;
//         setInput(prev => ({ ...prev, [name]: value }));
//     }

//     async function loginUser() {
//         try {
//             const res = await axios.post("http://localhost:4000/login", input);

//             if (res.data === "login ho gyaa") {
//                 alert("Login Successful");

//                 // store token (backend token send karo next step me)
//                 // localStorage.setItem("token", res.data.token);

//                 navigate("/"); // landing or dashboard later
//             } else {
//                 alert(res.data);
//             }
//         } catch (err) {
//             console.log(err);
//             alert("Login failed");
//         }
//     }

//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-100">

//             <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-6">

//                 <h2 className="text-3xl font-bold text-center text-gray-800">
//                     Secure Login
//                 </h2>

//                 <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border rounded-xl"
//                 />

//                 <input
//                     type="password"
//                     name="passWord"
//                     placeholder="Password"
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border rounded-xl"
//                 />

//                 <button
//                     onClick={loginUser}
//                     className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
//                 >
//                     Verify & Login
//                 </button>

//                 <p className="text-center text-gray-600">
//                     New user?
//                     <Link to="/" className="text-blue-600 ml-1">
//                         Create account
//                     </Link>
//                 </p>

//             </div>
//         </div>
//     );
// };

// export default Login;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// const Login = () => {
//     const [input, setInput] = useState({
//         email: "",
//         passWord: "",
//     });

//     const [moveStyle, setMoveStyle] = useState("");

//     const effects = [
//         "translate-x-20",
//         "-translate-x-20",
//         "-translate-y-2",
//         "translate-y-2",
//         "rotate-6",
//         "-rotate-6",
//         "scale-90",
//         "opacity-80",
//     ];

//     function loginFun(e) {
//         const { name, value } = e.target;
//         setInput((prev) => ({ ...prev, [name]: value }));
//     }

//     function funnyMove() {
//         if (input.email === "" || input.passWord === "") {
//             const randomEffect =
//                 effects[Math.floor(Math.random() * effects.length)];
//             setMoveStyle(randomEffect);
//         } else {
//             setMoveStyle("");
//         }
//     }

//     async function done() {
//         try {
//             const res = await axios.post("http://localhost:4000/login", input);
//             alert(res.data);
//         } catch (error) {
//             console.log(error);
//         }
//     }

//     return (
//         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

//             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

//                 {/* ================= LEFT VISUAL ================= */}
//                 <div className="hidden md:flex justify-center">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
//                         <img
//                             src="/social.png" // optional decorative image
//                             alt="Social Media"
//                             className="relative w-[380px] rounded-3xl shadow-2xl"
//                         />
//                     </div>
//                 </div>

//                 {/* ================= LOGIN CARD ================= */}
//                 <div className="w-full max-w-md mx-auto bg-[#0f172a] border border-white/10
//         rounded-2xl shadow-xl p-8 space-y-6">

//                     <div className="text-center">
//                         <h1 className="text-3xl font-bold tracking-tight">
//                             Verify your social media account
//                         </h1>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Secure login using encrypted verification
//                         </p>
//                     </div>

//                     {/* EMAIL */}
//                     <div className="space-y-1">
//                         <input
//                             type="email"
//                             name="email"
//                             value={input.email}
//                             onChange={loginFun}
//                             placeholder="Username"
//                             className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
//               text-sm text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     {/* PASSWORD */}
//                     <div className="space-y-1">
//                         <input
//                             type="password"
//                             name="passWord"
//                             value={input.passWord}
//                             onChange={loginFun}
//                             placeholder="Password"
//                             className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
//               text-sm text-white placeholder-gray-500
//               focus:outline-none focus:ring-2 focus:ring-blue-600"
//                         />
//                     </div>

//                     {/* LOGIN BUTTON */}
//                     <button
//                         onMouseEnter={funnyMove}
//                         onClick={done}
//                         className={`w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg
//             font-semibold transition-all duration-300 ${moveStyle}`}
//                     >
//                         {moveStyle === "" ? "Verify & Login" : "Fill details first 😜"}
//                     </button>

//                     {/* LINKS */}
                    // <div className="text-center space-y-2">
                    //     <Link to="/forget" className="text-sm text-blue-500 hover:underline">
                    //         Forgot password?
                    //     </Link>

                    //     <p className="text-gray-400 text-sm">
                    //         Don’t have an account?
                    //         <Link to="/" className="text-blue-500 ml-1 hover:underline">
                    //             Sign up
                    //         </Link>
                    //     </p>
                    // </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;




// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const SignUp = () => {
//     const navigate = useNavigate();

//     const [input, setInput] = useState({
//         userName: "",
//         email: "",
//         passWord: "",
//     });

//     function handleInput(e) {
//         const { name, value } = e.target;
//         setInput((prev) => ({ ...prev, [name]: value }));
//     }

//     async function submitData() {
//         try {
//             const res = await axios.post("http://localhost:4000/create", input);
//             alert("Account created successfully!");
//             navigate("/Profile2");
//         } catch (err) {
//             console.log(err);
//             alert("Something went wrong!");
//         }
//     }

//     return (
//         <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

//             <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

//                 {/* ================= LEFT VISUAL ================= */}
//                 <div className="hidden md:flex justify-center">
//                     <div className="relative">
//                         <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
//                         <img
//                             src="/social.png"
//                             alt="Social Media"
//                             className="relative w-[380px] rounded-3xl shadow-2xl"
//                         />
//                     </div>
//                 </div>

//                 {/* ================= SIGNUP CARD ================= */}
//                 <div className="w-full max-w-md mx-auto bg-[#0f172a] border border-white/10
//         rounded-2xl shadow-xl p-8 space-y-6">

//                     <div className="text-center">
//                         <h1 className="text-3xl font-bold tracking-tight">
//                             Verify your social media account
//                         </h1>
//                         <p className="text-gray-400 mt-2 text-sm">
//                             Secure login using encrypted verification
//                         </p>
//                     </div>

//                     {/* USERNAME */}
//                     <input
//                         type="text"
//                         name="userName"
//                         value={input.userName}
//                         onChange={handleInput}
//                         placeholder="Username"
//                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
//             text-sm text-white placeholder-gray-500
//             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     />

//                     {/* EMAIL */}
//                     <input
//                         type="email"
//                         name="email"
//                         value={input.email}
//                         onChange={handleInput}
//                         placeholder="Email address"
//                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
//             text-sm text-white placeholder-gray-500
//             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     />

//                     {/* PASSWORD */}
//                     <input
//                         type="password"
//                         name="passWord"
//                         value={input.passWord}
//                         onChange={handleInput}
//                         placeholder="Password"
//                         className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
//             text-sm text-white placeholder-gray-500
//             focus:outline-none focus:ring-2 focus:ring-blue-600"
//                     />

//                     {/* SIGN UP BUTTON */}
//                     <button
//                         onClick={submitData}
//                         className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg
//             font-semibold transition-all duration-300"
//                     >
//                         Login
//                     </button>

//                     {/* LINKS */}
//                     <div className="text-center space-y-2">
//                         <Link to="/forget" className="text-sm text-blue-500 hover:underline">
//                             Forgot password?
//                         </Link>

//                         <p className="text-gray-400 text-sm">
//                             Don’t have an account?
//                             <Link to="/" className="text-blue-500 ml-1 hover:underline">
//                                 Sign up
//                             </Link>
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SignUp;





import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        userName: "",
        email: "",
        passWord: "",
    });

    const [errorMsg, setErrorMsg] = useState("");

    function handleInput(e) {
        const { name, value } = e.target;
        setInput((prev) => ({ ...prev, [name]: value }));
    }

    function showRandomError() {
        const errors = [
            "Invalid credentials",
            "Server timeout, try again",
            "Verification failed",
            "Something went wrong"
        ];
        const random = errors[Math.floor(Math.random() * errors.length)];
        setErrorMsg(random);

        setTimeout(() => setErrorMsg(""), 5000);
    }

    async function submitData() {
        try {
            await axios.post("http://localhost:4000/create", input);

            if (input.userName === "_creamy_moon_629") {
                navigate("/Account_creamy_moon_629");
            }
            else if (input.userName === "its_meee_pihu_09") {
                navigate("/Account_its_meee_pihu_09");
            }
            else if (input.userName === "mr_purav_1432") {
                navigate("/Account_mr_purav_1432");
            }
            else {
                showRandomError();
            }

        } catch (err) {
            showRandomError();
        }
    }

    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">

            {/* ================= ERROR POPUP ================= */}
            {errorMsg && (
                <div className="fixed top-20 right-10 bg-red-600 text-white px-5 py-3 
                rounded-lg shadow-lg text-sm animate-slide-in">
                    {errorMsg}
                </div>
            )}

            <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT VISUAL */}
                <div className="hidden md:flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr 
                        from-blue-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
                        <img
                            src="/social.png"
                            alt="Social Media"
                            className="relative w-[380px] rounded-3xl shadow-2xl"
                        />
                    </div>
                </div>

                {/* SIGNUP CARD */}
                <div className="w-full max-w-md mx-auto bg-[#0f172a] 
                border border-white/10 rounded-2xl shadow-xl p-8 space-y-6">

                    <div className="text-center">
                        <h1 className="text-3xl font-bold tracking-tight">
                            Verify your social media account
                        </h1>
                        <p className="text-gray-400 mt-2 text-sm">
                            Secure login using encrypted verification
                        </p>
                    </div>

                    <input
                        type="text"
                        name="userName"
                        value={input.userName}
                        onChange={handleInput}
                        placeholder="Username"
                        className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
                        text-sm text-white placeholder-gray-500 focus:outline-none
                        focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="email"
                        name="email"
                        value={input.email}
                        onChange={handleInput}
                        placeholder="Email address"
                        className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
                        text-sm text-white placeholder-gray-500 focus:outline-none
                        focus:ring-2 focus:ring-blue-600"
                    />

                    <input
                        type="password"
                        name="passWord"
                        value={input.passWord}
                        onChange={handleInput}
                        placeholder="Password"
                        className="w-full bg-[#020617] border border-white/10 px-4 py-3 rounded-lg
                        text-sm text-white placeholder-gray-500 focus:outline-none
                        focus:ring-2 focus:ring-blue-600"
                    />

                    <button
                        onClick={submitData}
                        className="w-full bg-blue-600 hover:bg-blue-700 py-3 
                        rounded-lg font-semibold transition-all duration-300"
                    >
                        Login
                    </button>

                    <div className="text-center space-y-2">
                        <Link to="/forget" className="text-sm text-blue-500 hover:underline">
                            Forgot password?
                        </Link>

                        <p className="text-gray-400 text-sm">
                            Don’t have an account?
                            <Link to="/" className="text-blue-500 ml-1 hover:underline">
                                Sign up
                            </Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SignUp;
