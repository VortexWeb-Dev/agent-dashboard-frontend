// import { useState } from 'react'
// import React from 'react'
// import DarkModeToggle from './components/DarkModeToggle'
// import './App.css'
// import {ThemeProvider} from './context/ThemeContext'

// function App() {


//   return (
//     <>
//     <ThemeProvider>
//     <DarkModeToggle/>
//      <div className='text-4xl text-green-600 dark:text-blue-700 text-center my-auto'>
//       sample text
//      </div>
//     </ThemeProvider>
//     </>
//   )
// }

// export default App


// App.jsx
// App.jsx
import { useState } from 'react'
import React from 'react'
import DarkModeToggle from './components/DarkModeToggle'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Profile from './components/Profile'
import './App.css'
import AgentRankingDashboard from './Pages/AgentRanking'
import PerformanceReport from './Pages/PerformanceReports'
import { ThemeProvider } from './context/ThemeContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <Router>

    <ThemeProvider>
      <div className="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Navbar toggleProfile={toggleProfile} />
          <main className="flex-1 overflow-x-hidden overflow-y-auto p-4">
          <Routes>
                <Route path="/ranking" element={<AgentRankingDashboard />} />
                <Route path="/reports" element={<PerformanceReport />} />
                {/* <Route path="*" element={<Properties data={properties} />} /> */}
                {/* <Route path="/reports" element={<PropertyResolver />} /> */}
              </Routes>
            {/* Your page content goes here */}
          </main>
        </div>
        {isProfileOpen && <Profile onClose={toggleProfile} />}
      </div>
    </ThemeProvider>
    </Router>
  )
}

export default App