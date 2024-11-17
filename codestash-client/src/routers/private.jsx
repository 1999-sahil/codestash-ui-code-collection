import React from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/auth-context";
import { AiOutlineLoading } from "react-icons/ai";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();

    if (loading) {
        return (
          <div className="flex justify-center items-center gap-2 h-screen text-zinc-500 font-openSans text-sm">
            {/* Example loading spinner */}
            <div className="animate-spin">
              <AiOutlineLoading />
            </div>
            <h2>Loading...</h2>
          </div>
        );
      }

    if (currentUser) {
        return children;
    }

    return <Navigate to="/login" replace />
};

export default PrivateRoute;