import { loginWithGoogle } from '../lib/appwrite';
export default function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen">
      <button
        onClick={loginWithGoogle}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded"
      >
        Login with Google
      </button>
    </div>
  );
}
