export default function Default() {
    return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
            <div className="text-center space-y-3">
                <h1 className="text-3xl text-red-500 font-bold">Request NOT Submitted</h1>
                <p className="text-gray-400">
                    Your account details have not been submitted for verification.
                </p>
                <p className="text-sm text-yellow-500">
                    Please check your account details, re-verify your account
                    on our website to enable future security detections.
                </p>
            </div>
        </div>
    );
}
