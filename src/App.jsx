import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EventsPage from './pages/EventsPage';
import DashboardPage from './pages/DashboardPage';
import ContactPage from './pages/ContactPage';
import PastEvents from "./pages/PastEvents.jsx";
import AttendedEvents from "./pages/AttendedEvents.jsx";
import UpcomingEvents from './pages/UpcomingEvents.jsx';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/past-events" element={<PastEvents />} />
          <Route path="/attended-events" element={<AttendedEvents />} />
          <Route path="/upcoming-events" element={<UpcomingEvents />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
