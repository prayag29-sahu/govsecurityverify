import {
    Search,
    Globe,
    Key,
    Bell,
    Code,
    DollarSign,
    Shield,
    Users,
    HelpCircle,
    FileText,
    Scale,
    Gift,
    Heart,
    Twitter,
    Facebook,
    Linkedin,
    Github,
    Rss
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-[#020617] to-black text-gray-400 border-t border-blue-900">

            {/* MAIN FOOTER */}
            <div className="max-w-7xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-4">

                {/* COLUMN 1 */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                        Secure Verification
                    </h3>

                    <p className="text-sm leading-relaxed mb-6">
                        Verify whether your account credentials have been exposed and
                        protect yourself using government-grade security practices.
                    </p>

                    <button className="flex items-center gap-2 border border-blue-500 
            text-blue-400 px-4 py-2 rounded-lg hover:bg-blue-500/10 transition">
                        <Search size={16} />
                        Verify Account
                    </button>
                </div>

                {/* COLUMN 2 */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Services</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer flex gap-2"><Search size={14} /> Account Check</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Globe size={14} /> Domain Monitoring</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Key size={14} /> Password Safety</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Bell size={14} /> Breach Alerts</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Code size={14} /> API Access</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><DollarSign size={14} /> Pricing</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Shield size={14} /> Dashboard</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Users size={14} /> Partners</li>
                    </ul>
                </div>

                {/* COLUMN 3 */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Information</h4>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer flex gap-2"><HelpCircle size={14} /> FAQ</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><FileText size={14} /> Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Scale size={14} /> Terms of Use</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Shield size={14} /> Data Protection</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Gift size={14} /> Donate</li>
                        <li className="hover:text-white cursor-pointer flex gap-2"><Heart size={14} /> Support</li>
                    </ul>
                </div>

                {/* COLUMN 4 */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Connect With Us</h4>
                    <div className="flex gap-4 text-gray-400">
                        <Twitter className="hover:text-white cursor-pointer" />
                        <Facebook className="hover:text-white cursor-pointer" />
                        <Linkedin className="hover:text-white cursor-pointer" />
                        <Github className="hover:text-white cursor-pointer" />
                        <Rss className="hover:text-white cursor-pointer" />
                    </div>
                </div>

            </div>

            {/* BOTTOM BAR */}
            <div className="border-t border-blue-900 text-center py-6 text-sm text-gray-500">
                © 2026 Secure Verification Platform. All rights reserved.
            </div>

        </footer>
    );
};

export default Footer;
