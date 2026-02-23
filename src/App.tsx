import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AppShell } from '@/components/layout/AppShell.tsx';
import { useAppStore } from '@/store/appStore.ts';
import { ProtectedRoute } from '@/components/ProtectedRoute.tsx';

const HomePage = lazy(() => import('@/pages/HomePage.tsx'));
const ModulePage = lazy(() => import('@/pages/ModulePage.tsx'));
const ToolPage = lazy(() => import('@/pages/ToolPage.tsx'));
const FavoritesPage = lazy(() => import('@/pages/FavoritesPage.tsx'));
const RecentPage = lazy(() => import('@/pages/RecentPage.tsx'));
const LandingPage = lazy(() => import('@/pages/LandingPage.tsx'));
const LoginPage = lazy(() => import('@/pages/LoginPage.tsx'));

export default function App() {
  const theme = useAppStore((s) => s.theme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/" element={<Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}><LandingPage /></Suspense>} />
      <Route path="/login" element={<Suspense fallback={<div className="min-h-screen bg-[#0A0A0A]" />}><LoginPage /></Suspense>} />

      {/* Protected app routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/app" element={<AppShell />}>
          <Route index element={<HomePage />} />
          <Route path="module/:moduleId" element={<ModulePage />} />
          <Route path="module/:moduleId/:toolId" element={<ToolPage />} />
          <Route path="favorites" element={<FavoritesPage />} />
          <Route path="recent" element={<RecentPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
