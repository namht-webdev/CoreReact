import React from 'react';
import { UserIcon } from './Icons';
export const Header = () => (
  <div className="header">
    <a href="./">Q & A</a>
    <input
      className="border p-1 rounded focus:outline-gray-400"
      type="text"
      placeholder="Search..."
    />
    <a className="flex justify-between" href="./signin">
      <UserIcon />
      <span className="px-3">Sign In</span>
    </a>
  </div>
);

export default Header;
