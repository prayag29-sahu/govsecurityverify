// import { Link } from "react-router-dom";
// import { ShieldCheck } from "lucide-react";

// const Navbar = () => {
//     return (
//         <nav className="bg-white border-b shadow-sm">
//             <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

//                 <div className="flex items-center gap-2 text-blue-600">
//                     <ShieldCheck size={28} />
//                     <span className="text-xl font-bold">
//                         Govt Secure Verification
//                     </span>
//                 </div>

//                 <Link
//                     to="/login"
//                     className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
//                 >
//                     Login
//                 </Link>

//             </div>
//         </nav>
//     );
// };

// export default Navbar;



import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] text-white">

            <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

                {/* ================= LEFT: LOGO ================= */}
                <Link to="/" className="flex items-center gap-2">
                    {/* 🔹 LOGO IMAGE (replace src with your logo) */}
                    <img
                        src="/logo.png"        // 👉 put logo in public/logo.png
                        alt="Platform Logo"
                        className="h-8 w-auto object-contain"
                    />

                    {/* 🔹 Optional Text (remove if you want image only) */}
                    <span className="text-white text-xl font-bold tracking-tight">
                        SecureVerify
                    </span>
                </Link>

                {/* ================= CENTER: NAV LINKS ================= */}
                <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">

                    <Link to="/check" className="hover:text-white transition">
                        Account Check
                    </Link>

                    <Link to="/passwords" className="hover:text-white transition">
                        Password Safety
                    </Link>

                    <Link to="/notify" className="hover:text-white transition">
                        Notify Me
                    </Link>

                    <Link to="/api" className="hover:text-white transition">
                        API
                    </Link>

                    <Link to="/pricing" className="hover:text-white transition">
                        Pricing
                    </Link>

                    <Link to="/about" className="hover:text-white transition">
                        About
                    </Link>
                </div>

                {/* ================= RIGHT: DASHBOARD ================= */}
                <Link
                    to="/login"
                    className="bg-[#0b2a3d] hover:bg-[#0f3a52] text-white 
          px-5 py-2 rounded-full text-sm font-medium transition shadow-md"
                >
                    Dashboard
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
