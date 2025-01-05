// LoadingScreen.jsx
import { Loader2 } from "lucide-react"; // Lucide icon for loading
import React from "react";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white -z-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="animate-spin h-12 w-12 text-blue-500" />
        <p className="text-lg font-semibold text-gray-300">Fetching the latest news...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
