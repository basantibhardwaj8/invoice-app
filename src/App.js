import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './component/login/Login';
import Register from './component/register/Register';
import Dashboard from './component/dashboard/Dashboard';
import Home from './component/dashboard/Home';
import Invoice from './component/dashboard/Invoice';
import NewInvoice from './component/dashboard/NewInvoice';
import Settings from './component/dashboard/Settings';
import InvoiceDetail from './component/dashboard/InvoiceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/dashboard/home" element={<Home />} /> */}
        <Route path="/dashboard/home" element={<Home />} />
        {/* <Route path="/dashboard/home" element={<Home />} /> */}
        <Route path="/dashboard/invoice" element={<Invoice />} />
        <Route path="/dashboard/newInvoice" element={<NewInvoice />} />
        <Route path="/dashboard/settings" element={<Settings />} />
        <Route path="/dashboard/invoiceDetail" element={<InvoiceDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
