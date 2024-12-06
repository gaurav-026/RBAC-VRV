import React, { useState } from "react";

function RoleForm({ onClose, onAdd }) {
  const [name, setName] = useState("");
  const [permissions, setPermissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Role name is required!");
      return;
    }
    onAdd({ id: Date.now(), name, permissions });
    onClose();
  };

  const handlePermissionChange = (e) => {
    const value = e.target.value;
    setPermissions((prev) =>
      prev.includes(value) ? prev.filter((p) => p !== value) : [...prev, value]
    );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-full max-w-md">
        <h3 className="text-xl font-bold mb-4">Add Role</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Role Name
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter role name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Permissions
            </label>
            <div className="flex flex-wrap gap-3">
              {["Read", "Write", "Delete"].map((perm) => (
                <label
                  key={perm}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={perm}
                    onChange={handlePermissionChange}
                  />
                  <span>{perm}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Save Role
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RoleForm;
