import React from 'react';
import { UserIcon } from './Icons';
export const Header = () => (
  <div className="header">
    <a className="text-[24px] font-bold text-[#383737]" href="./">
      Q & A
    </a>
    <input className="search-box" type="text" placeholder="Search..." />
    <a className="sign-in" href="./signin">
      <UserIcon />
      <span>Sign In</span>
    </a>
  </div>
);

export default Header;
