import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

export function About() {
  return (
    <div>
      <h4>정보회사임</h4>
      <Outlet></Outlet>
    </div>
  );
}
