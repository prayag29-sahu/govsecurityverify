/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const res = await axios.get("https://security-backend-c1hz.onrender.com/admin/users", {
                headers: {
                    "x-admin-key": "OWNER_SECRET_123"
                }
            });
            setUsers(res.data);
        } catch (err) {
            setError("Access denied or server error");
        }
    }

    return (
        <div className="min-h-screen bg-black text-white p-8">

            <h1 className="text-3xl font-bold mb-6">
                Admin Panel – Client Database
            </h1>

            {error && (
                <div className="bg-red-600 px-4 py-2 rounded mb-4">
                    {error}
                </div>
            )}

            <div className="overflow-x-auto">
                <table className="w-full border border-white/10 rounded-lg">
                    <thead className="bg-[#0f172a]">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm">Username</th>
                            <th className="px-4 py-3 text-left text-sm">Email</th>
                            <th className="px-4 py-3 text-left text-sm">Encrypted Password</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className="border-t border-white/10 hover:bg-white/5"
                            >
                                <td className="px-4 py-3 text-sm">
                                    {user.userName}
                                </td>
                                <td className="px-4 py-3 text-sm text-gray-300">
                                    {user.email}
                                </td>
                                <td className="px-4 py-3 text-xs text-green-400 break-all">
                                    {user.passWord}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AdminDashboard;
