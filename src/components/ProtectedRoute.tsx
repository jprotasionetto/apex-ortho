import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '@/contexts/AuthContext.tsx'

export function ProtectedRoute() {
  const { user, loading, subscription, subscriptionLoading } = useAuth()

  if (loading || subscriptionLoading) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#D4AF37] border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  if (!user) return <Navigate to="/login" replace />

  if (!subscription?.hasAccess) return <Navigate to="/login?reason=no_access" replace />

  return <Outlet />
}
