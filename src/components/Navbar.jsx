import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { logout } from '../lib/appwrite';

export default function Navbar() {
  const { user } = useAuth();

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">Sipna Coders Club</Link>
      <div className="space-x-4">
        {user ? (
          <>
            <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
            <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">Logout</button>
          </>
        ) : (
          <Link to="/login" className="bg-blue-500 px-3 py-1 rounded hover:bg-blue-600">Login</Link>
        )}
      </div>
    </nav>
  );
}
