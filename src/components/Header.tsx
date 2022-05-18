import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1 className="text-xl">Expense Tracker</h1>
    <div className="space-x-3">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="create"
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        Add Expense
      </NavLink>
      <NavLink
        to="edit"
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        Edit Expense
      </NavLink>
      <NavLink
        to="help"
        className={({ isActive }) => (isActive ? "text-red-500" : "text-black")}
      >
        Help
      </NavLink>
    </div>
  </header>
);

export default Header;
