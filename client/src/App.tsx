import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PaperTrader from './components/paperTrader';
import Chat from './components/Chat';
import Roadmap from './components/Roadmap';

const App: React.FC = () => {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/roadmap" replace />} />
           <Route path="/papertrade" element={<PaperTrader />} />

           <Route path="/chat" element={<Chat />} />
           <Route path="/roadmap" element={<Roadmap />} />
           
        </Routes>
      </Router>

  );
};

export default App;