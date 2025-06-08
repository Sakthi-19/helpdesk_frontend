import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Dashboard() {
  const { user, logoutUser } = useContext(AuthContext);

  const getRoleBadge = (role) => {
    const colors = {
      admin: 'bg-purple-100 text-purple-800',
      agent: 'bg-blue-100 text-blue-800',
      employee: 'bg-green-100 text-green-800'
    };
    return (
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors[role] || 'bg-gray-100 text-gray-800'}`}>
        {role}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Welcome to the Dashboard</h1>
              <p className="mt-2 text-gray-600">
                You are successfully logged in as {getRoleBadge(user?.role)}.
              </p>
            </div>
            <button
              onClick={logoutUser}
              className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <h2 className="text-xl font-semibold text-gray-900">Quick Actions</h2>
            <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(user?.role === "admin" || user?.role === "agent" || user?.role === "employee") && (
                <Link 
                  to="/ai-assistant" 
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors"
                >
                  <div className="flex-shrink-0 bg-blue-100 p-3 rounded-full">
                    <span className="text-blue-600 text-xl">🤖</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">AI Assistant</h3>
                    <p className="text-sm text-gray-500">Get help from our AI</p>
                  </div>
                </Link>
              )}

              {(user?.role === "admin") && (
                <Link 
                  to="/admin/articles/new" 
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors"
                >
                  <div className="flex-shrink-0 bg-purple-100 p-3 rounded-full">
                    <span className="text-purple-600 text-xl">📄</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Create Article</h3>
                    <p className="text-sm text-gray-500">Add to knowledge base</p>
                  </div>
                </Link>
              )}

              {(user?.role === "employee") && (
                <Link 
                  to="/tickets/new" 
                  className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors"
                >
                  <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                    <span className="text-green-600 text-xl">🎫</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="font-medium text-gray-900">Create Ticket</h3>
                    <p className="text-sm text-gray-500">Request support</p>
                  </div>
                </Link>
              )}

              {(user?.role === "agent" || user?.role === "admin" || user?.role === "employee") && (
                <>
                  <Link 
                    to="/tickets" 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
                  >
                    <div className="flex-shrink-0 bg-indigo-100 p-3 rounded-full">
                      <span className="text-indigo-600 text-xl">📋</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">View Tickets</h3>
                      <p className="text-sm text-gray-500">Manage support tickets</p>
                    </div>
                  </Link>

                  <Link 
                    to="/search" 
                    className="flex items-center p-4 border border-gray-200 rounded-lg hover:border-yellow-500 hover:bg-yellow-50 transition-colors"
                  >
                    <div className="flex-shrink-0 bg-yellow-100 p-3 rounded-full">
                      <span className="text-yellow-600 text-xl">🔍</span>
                    </div>
                    <div className="ml-4">
                      <h3 className="font-medium text-gray-900">Search Articles</h3>
                      <p className="text-sm text-gray-500">Find solutions</p>
                    </div>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;