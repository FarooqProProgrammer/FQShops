import React from 'react'

export default function LoadingSpinner({loading}) {

    

  return (
   <div className="flex items-center justify-center min-h-screen">
      {loading ? (
        <svg
          className="animate-spin -ml-1 mr-3 h-10 w-10 text-indigo-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          {/* SVG content */}
        </svg>
      ) : (
        <div>
          {/* Content to display after loading */}
          <h1 className="text-2xl font-semibold text-gray-800">Data Loaded!</h1>
          {/* Additional content */}
        </div>
      )}
    </div>
  )
}
