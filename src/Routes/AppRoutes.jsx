import MainLayout from '@/layouts/MainLayout.jsx';
import AuthLayout from '@/layouts/AuthLayout.jsx';
import HomePage from '@/pages/dashboard/HomePage.jsx';
import LoginPage from '@/pages/auth/LoginPage.jsx';
import { Routes, Route } from 'react-router-dom';
export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
}
