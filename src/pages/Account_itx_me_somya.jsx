
import React from "react";
import { Lock, MoreHorizontal, Bell, ShieldCheck } from "lucide-react";

const ProfileSecurityStatus = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-[#020617] text-white">

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* ================= PROFILE HEADER ================= */}
                <div className="flex flex-col md:flex-row gap-10 items-start">

                    {/* PROFILE IMAGE */}
                    <img
                        src="/prof.jpeg"
                        alt="profile"
                        className="w-36 h-36 rounded-full object-cover border border-white/20"
                    />

                    {/* PROFILE INFO */}
                    <div className="flex-1 space-y-4">

                        {/* USERNAME + FOLLOW STATUS */}
                        <div className="flex flex-wrap items-center gap-3">
                            <h2 className="text-xl font-semibold">
                                itx_me_somya
                            </h2>
                            <MoreHorizontal className="text-gray-400 cursor-pointer" />
                        </div>

                        {/* STATS */}
                        <div className="flex gap-6 text-sm">
                            <span><strong>0</strong> posts</span>
                            <span><strong>Not found</strong> followers</span>
                            <span><strong>Not found</strong> following</span>
                        </div>

                        {/* BIO */}
                        <div className="text-sm text-gray-300 leading-relaxed space-y-1">
                            <p className="font-medium text-white">itx_me_somya</p>
                            {/* <p>👀 Be better in real life then on social media 💕</p> */}
                        </div>

                        {/* FOLLOW BUTTON */}
                        {/* <button className="mt-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-lg text-sm font-semibold">
                            Follow
                        </button> */}

                    </div>
                </div>

                {/* DIVIDER */}
                <div className="my-12 border-t border-white/10"></div>

                {/* ================= SECURITY RESULT ================= */}
                <div className="rounded-2xl border border-green-600/40 
        bg-gradient-to-r from-[#021c14] via-[#032f22] to-[#021c14]
        p-10 text-center shadow-lg">

                    <ShieldCheck size={42} className="mx-auto text-green-400 mb-4" />

                    <h2 className="text-5xl font-bold text-green-400">0</h2>
                    <p className="text-2xl font-semibold mt-2 text-green-300">
                        Data Breaches
                    </p>

                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                        Good news — this account appears safe.
                        No known security breaches were detected.
                    </p>
                </div>

                {/* ================= STAY PROTECTED ================= */}
                <div className="mt-8 rounded-xl border border-blue-500/20
        bg-gradient-to-r from-[#041c2d] via-[#062d46] to-[#041c2d]
        p-6 flex flex-col md:flex-row items-center justify-between gap-4">

                    <div className="flex items-center gap-4">
                        <Bell size={26} className="text-blue-400" />
                        <div>
                            <h3 className="font-semibold text-lg">
                                Stay Protected
                            </h3>
                            <p className="text-sm text-gray-400">
                                Get notified if this account appears in future security incidents
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileSecurityStatus;
