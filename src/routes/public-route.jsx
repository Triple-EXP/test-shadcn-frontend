import useAuthStore from "@/data-store";
import { Navigate } from "react-router-dom";

export function PublicRoute({children}) {
  const authUser = useAuthStore((state) => state.data);

  if (authUser && authUser?.token) {
    return <Navigate to='/dashboard' replace={true} />;
  }

  return children;
}