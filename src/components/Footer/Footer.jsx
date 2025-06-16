import React from 'react';
import footerLogo from "../../assets/C001-assets/logo.png"
import { NavLink } from 'react-router';
const Footer = () => {
    return (
      <footer className="footer footer-horizontal footer-center bg-white text-black p-10">
        <aside className="flex">
          <img src={footerLogo} alt="" />
          <p className="font-extrabold plus-jakarta-sans-font text-3xl">
            Phudu
          </p>
        </aside>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <NavLink to="/my-bookings">My-Bookings</NavLink>
            </li>
            <li>
              <NavLink to="/blogs">Blogs</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="w-2/3 border-t-2  border-gray-200 my-6" />
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://www.github.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.807 1.304 3.492.996.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.312.468-2.382 1.236-3.222-.124-.303-.536-1.523.116-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.771.84 1.235 1.91 1.235 3.222 0 4.61-2.807 5.628-5.479 5.922.43.37.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="https://x.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="fill-current">
                <path d="M18.22 2H21L14.06 10.07L22.26 22H15.55L10.58 15.18L4.92 22H2L9.43 13.32L1.99 2H8.86L13.37 8.27L18.22 2ZM16.91 20H18.66L7.21 3.66H5.35L16.91 20Z" />
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;