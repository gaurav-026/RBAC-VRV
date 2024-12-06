import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard">
      <nav className="dashboard-nav flex justify-center bg-gray-800 py-4">
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "users"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("users")}
        >
          User Management
        </button>
        <button
          className={`mx-2 px-6 py-2 rounded-full font-semibold ${
            activeTab === "roles"
              ? "bg-green-500 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setActiveTab("roles")}
        >
          Role Management
        </button>
      </nav>

      <div className="dashboard-content p-6">
        {activeTab === "users" ? <UserTable /> : <RoleTable />}
      </div>
    </div>
  );
}

export default Dashboard;
