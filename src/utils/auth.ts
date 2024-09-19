export const isAuthenticated = (): boolean => {
  const token = localStorage.getItem("authToken");
  return !!token;
};

export const getUserRole = (): string => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  return user.role || "guest";
};
export const getAdminRole = (): string => {
  const admin = JSON.parse(localStorage.getItem("admin") || "{}");
  return admin.role || "user";
};
