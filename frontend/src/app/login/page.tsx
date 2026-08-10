"use client";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleGuestLogin = () => {
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Let&apos;s get back on track
        </h1>
        <p className="text-gray-500 mb-6 text-sm">
          Enter your email below to login to your account.
        </p>

        <button
          onClick={handleGuestLogin}
          className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mb-3"
        >
          Continue as Guest
        </button>

        <button className="w-full bg-white text-gray-700 py-3 rounded-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
          <span className="text-red-500 font-bold">G</span>
          <span className="text-blue-500 font-bold">o</span>
          <span className="text-yellow-500 font-bold">o</span>
          <span className="text-blue-500 font-bold">g</span>
          <span className="text-green-500 font-bold">l</span>
          <span className="text-red-500 font-bold">e</span>
          <span className="text-sm ml-1">Log in with Google</span>
        </button>

        <p className="text-xs text-gray-400 mt-6">
          By clicking continue, you agree to our Terms of Service and Privacy
          Policy.
        </p>
      </div>
    </div>
  );
}