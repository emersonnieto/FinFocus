import React from "react";

interface ChildrenProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <h1>Dashboard</h1>
  );
}

export default Dashboard;