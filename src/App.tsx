import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import Contact from './pages/Contact';

// 1. Reusable wrapper that applies the entry/exit animations to any page
const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full h-full flex flex-col"
    >
      {children}
    </motion.div>
  );
};

// 2. We extract the routes into a separate component so we can use the useLocation hook!
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" ensures the old page fully fades out before the new one fades in
    // onExitComplete ensures the user is scrolled to the very top of the new page
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
        <Route path="/privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
        <Route path="/terms" element={<PageWrapper><TermsOfUse /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
          
          <Navbar />
          
          <main className="flex-grow flex flex-col relative overflow-hidden">
            <AnimatedRoutes />
          </main>

          <Footer />
          
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;