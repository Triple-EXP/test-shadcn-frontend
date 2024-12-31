import { AppLayout } from "@/components/layout/AppLayout";
import useAuthStore from "@/data-store";
import { Navigate } from "react-router-dom";

export function PrivateRoute({children}) {
  const authUser = useAuthStore((state) => state.data);

  if (!authUser?.token) {
    return <Navigate to='/' replace={true} />;
  }

  return <AppLayout>{children}</AppLayout>
}