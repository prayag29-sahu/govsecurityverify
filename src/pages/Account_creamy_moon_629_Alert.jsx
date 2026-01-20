import React, { useState } from "react";
import {
    Lock,
    MoreHorizontal,
    Bell,
    ShieldCheck,
    AlertTriangle
} from "lucide-react";

const ProfileSecurityStatus = () => {

    const [showActionConfirm, setShowActionConfirm] = useState(false);

    return (
        <div className="min-h-screen bg-gradient-to-b from-black to-[#020617] text-white">

            <div className="max-w-5xl mx-auto px-6 py-12">

                {/* ================= PROFILE HEADER ================= */}
                <div className="flex flex-col md:flex-row gap-10 items-start">

                    <img
                        src="/profile.jpg"
                        alt="profile"
                        className="w-36 h-36 rounded-full object-cover border border-white/20"
                    />

                    <div className="flex-1 space-y-4">

                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-semibold">
                                _creamy_moon_629
                            </h2>
                            <MoreHorizontal className="text-gray-400 cursor-pointer" />
                        </div>

                        <div className="flex gap-6 text-sm">
                            <span><strong>0</strong> posts</span>
                            <span><strong>103</strong> followers</span>
                            <span><strong>75</strong> following</span>
                        </div>

                        <div className="text-sm text-gray-300 leading-relaxed space-y-1">
                            <p className="font-medium text-white">
                                ꧁𓊈𒆜 𝕻𝖆𝖑𝖆𝖐 𝖘𝖔𝖓𝖎 𒆜𓊉꧂
                            </p>
                            <p>@_creamy_moon_629</p>
                            <p>💖 शिवम सदा सहायते 💖</p>
                            <p>✧ Smile make your life is more beautiful ✧</p>
                        </div>

                    </div>
                </div>

                {/* ================= ATTACHED SECURITY ALERT ================= */}
                <div className="mt-10 rounded-2xl border border-red-600/40
                    bg-gradient-to-br from-[#3a0000] to-[#1a0000]
                    p-6 shadow-xl animate-fade-in">

                    <div className="flex items-center gap-3 mb-3">
                        <AlertTriangle className="text-red-400" size={26} />
                        <h3 className="text-lg font-bold text-red-400">
                            Security Alert Detected
                        </h3>
                    </div>

                    <p className="text-sm text-gray-200 leading-relaxed">
                        Your account with the same credentials has been detected on
                        <span className="font-semibold text-white"> 1 iOS device </span>
                        and
                        <span className="font-semibold text-white"> 1 additional device</span>.
                    </p>

                    <p className="mt-2 text-sm text-gray-300">
                        If this activity was not initiated by you, immediate action
                        is recommended to secure your account.
                    </p>

                    <div className="mt-5 flex justify-end">
                        <button
                            onClick={() => setShowActionConfirm(true)}
                            className="px-6 py-2 rounded-lg bg-red-600 hover:bg-red-700
                            text-sm font-semibold transition-all"
                        >
                            Take Action
                        </button>
                    </div>
                </div>

                {/* ================= ACTION CONFIRM POPUP ================= */}
                {showActionConfirm && (
                    <div className="fixed top-20 right-3 z-50
                        bg-black border border-red-500
                        rounded-xl p-5 max-w-sm shadow-2xl">

                        <h4 className="text-red-400 font-semibold mb-2">
                            Action Initiated
                        </h4>

                        <p className="text-sm text-gray-200 leading-relaxed">
                            We will take action against the detected devices.
                            The collected information will be sent to your
                            registered email address.
                        </p>

                        <p className="mt-2 text-sm text-yellow-300">
                            For now, please change your password immediately
                            to ensure account safety.
                        </p>

                        <button
                            onClick={() => setShowActionConfirm(false)}
                            className="mt-4 w-full bg-red-600 hover:bg-red-700
                            py-2 rounded-lg text-sm font-semibold"
                        >
                            OK
                        </button>
                    </div>
                )}

                {/* ================= RECOMMENDATION ================= */}
                <div className="mt-10 rounded-xl border border-yellow-500/30
                    bg-gradient-to-r from-[#2a2000] via-[#3a2f00] to-[#2a2000]
                    p-6 flex gap-4 items-start">

                    <Lock className="text-yellow-400 mt-1" />

                    <div>
                        <h3 className="font-semibold text-lg text-yellow-300">
                            Recommended Action
                        </h3>
                        <p className="text-sm text-gray-200 mt-1">
                            Please change your password and re-verify your account
                            on our website to enable future security detections.
                        </p>
                    </div>
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
                                Get notified if this account appears in future
                                security incidents.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProfileSecurityStatus;
