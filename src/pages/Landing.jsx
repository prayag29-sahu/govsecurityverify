// import { useNavigate } from "react-router-dom";
// import { ShieldCheck, Lock, CheckCircle } from "lucide-react";

// const Landing = () => {
//     const navigate = useNavigate();

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

//             <div className="max-w-5xl mx-auto px-6 py-20 text-center">

//                 <ShieldCheck size={90} className="mx-auto text-blue-600 mb-6" />

//                 <h1 className="text-5xl font-bold text-gray-800 mb-4">
//                     Government Approved Digital Verification Platform
//                 </h1>

//                 <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
//                     This platform is officially designed to help users securely verify their
//                     accounts using government-grade authentication and encrypted systems.
//                 </p>

//                 <div className="flex justify-center gap-4">
//                     <button
//                         onClick={() => navigate("/login")}
//                         className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
//                     >
//                         Verify Your Account
//                     </button>
//                 </div>

//                 {/* Trust cards */}
//                 <div className="mt-16 grid md:grid-cols-3 gap-8 text-left">

//                     <div className="bg-white p-6 rounded-xl shadow">
//                         <CheckCircle className="text-green-600 mb-3" size={32} />
//                         <h3 className="font-semibold text-lg">Government Verified</h3>
//                         <p className="text-gray-600 text-sm">
//                             Identity verification aligned with national security standards.
//                         </p>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow">
//                         <Lock className="text-blue-600 mb-3" size={32} />
//                         <h3 className="font-semibold text-lg">Encrypted Data</h3>
//                         <p className="text-gray-600 text-sm">
//                             Passwords encrypted using industry-grade hashing.
//                         </p>
//                     </div>

//                     <div className="bg-white p-6 rounded-xl shadow">
//                         <ShieldCheck className="text-indigo-600 mb-3" size={32} />
//                         <h3 className="font-semibold text-lg">Secure Login</h3>
//                         <p className="text-gray-600 text-sm">
//                             JWT-based authentication & role protection.
//                         </p>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Landing;


import { ShieldCheck, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">

            {/* ================= HERO ================= */}
            <section className="pt-28 pb-24 text-center relative">

                <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-blue-400">
                    Secure Account Verification
                </h1>

                <h2 className="mt-3 text-4xl md:text-5xl font-bold">
                    Government Approved Platform
                </h2>

                <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
                    Verify your account securely using government-grade authentication
                    standards and encrypted identity protection systems.
                </p>

                {/* CTA BUTTON */}
                <div className="mt-10">
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-blue-600 hover:bg-blue-700 transition 
            px-10 py-4 rounded-xl text-lg font-semibold shadow-lg"
                    >
                        Verify Your Account
                    </button>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                    Secure • Encrypted • Privacy-First
                </p>
            </section>

            {/* ================= STATS ================= */}
            <section className="max-w-6xl mx-auto px-6 pb-10">
                <div className="grid md:grid-cols-2 gap-8 bg-[#020617] border border-blue-900 rounded-2xl p-8 text-center">

                    <div>
                        <p className="text-4xl font-bold text-blue-400">100%</p>
                        <p className="text-gray-400 mt-1">Government Compliant</p>
                    </div>

                    <div>
                        <p className="text-4xl font-bold text-blue-400">JWT</p>
                        <p className="text-gray-400 mt-1">Secure Authentication</p>
                    </div>

                </div>
            </section>

            <section className="max-w-7xl mx-auto px-6 pb-10">
                <div
                    className="flex flex-col md:flex-row items-center justify-between gap-4
        bg-gradient-to-r from-[#020617] via-[#0b2a3d] to-[#020617]
        border border-blue-900 rounded-2xl px-6 py-5 text-gray-300 shadow-lg"
                >

                    {/* LEFT CONTENT */}
                    <div className="flex items-center gap-4">
                        {/* Sponsored tag */}
                        <span className="text-xs uppercase tracking-wider text-blue-400">
                            Sponsored
                        </span>

                        {/* Brand icon placeholder */}
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black font-bold">
                            P
                        </div>

                        {/* Text */}
                        <p className="text-sm md:text-base">
                            Use a password manager to generate and store strong,
                            unique passwords for all your accounts.
                        </p>
                    </div>

                    {/* CTA */}
                    <button
                        className="flex items-center gap-2 text-blue-400 border border-blue-500
          px-4 py-2 rounded-full hover:bg-blue-500/10 transition"
                    >
                        Try Secure Manager
                        <ArrowRight size={16} />
                    </button>

                </div>
            </section>

            {/* ================= TRUST FEATURES ================= */}
            <section className="max-w-6xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-10">

                <div className="bg-[#020617] border border-blue-900 p-6 rounded-xl">
                    <ShieldCheck size={36} className="text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                        Verified & Trusted
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Built following national data security and verification standards.
                    </p>
                </div>

                <div className="bg-[#020617] border border-blue-900 p-6 rounded-xl">
                    <Lock size={36} className="text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                        Encrypted Data
                    </h3>
                    <p className="text-gray-400 text-sm">
                        Passwords protected using bcrypt hashing and JWT authentication.
                    </p>
                </div>

                <div className="bg-[#020617] border border-blue-900 p-6 rounded-xl">
                    <CheckCircle size={36} className="text-blue-500 mb-4" />
                    <h3 className="font-semibold text-lg mb-2">
                        Privacy First
                    </h3>
                    <p className="text-gray-400 text-sm">
                        No third-party data sharing. User information remains private.
                    </p>
                </div>

            </section>
        </div>
    );
};

export default Landing;
