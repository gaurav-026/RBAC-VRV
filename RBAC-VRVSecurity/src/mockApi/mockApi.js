let users = [
  { id: 1, name: "Gaurav", email: "gauravchakrawarti8@gmail.com", role: "Admin" },
  { id: 2, name: "Gaurav", email: "gauravchakrawarti8@gmail.com", role: "Editor" },
];

export const getUsers = () => Promise.resolve(users);

export const addUser = (user) => {
  user.id = Date.now();
  users.push(user);
  return Promise.resolve(user);
};

export const deleteUser = (id) => {
  users = users.filter((user) => user.id !== id);
  return Promise.resolve();
};

export const getRoles = () => Promise.resolve([
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
]);

export const addRole = (role) => {
  role.id = Date.now();
  return Promise.resolve(role);
};
