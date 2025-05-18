import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const TransactionsPage = React.lazy(() => import('./pages/TransactionsPage'));
const BudgetPage = React.lazy(() => import('./pages/BudgetPage'));
const SettingsPage = React.lazy(() => import('./pages/SettingsPage'));

const App = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 text-gray-900">
        <Sidebar />
        <main
          className="flex-1 p-3 md:p-4 overflow-auto pt-[80px] md:pt-0"
        >
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/transactions" element={<TransactionsPage />} />
              <Route path="/budget" element={<BudgetPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<div>Page Not Found</div>} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
};

export default App;
