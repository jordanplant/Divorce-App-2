import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      {/* Navbar */}
      <div className="navbar">
        {/* Left side title or logo */}
        <hl className="nav-title">Save Your Marriage</hl>
        {/* Right side dropdown menu */}
        {/* <!-- USER DROPDOWN --> */}
        <div className="user-dropdown">
          <label htmlFor="user-toggler" className="user-toggle toggle-button">
            <svg
              className="user-dropdown-img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                d="M 15 13 h -0.4 c 1.9 -1.2 3.3 -3.3 3.4 -5.8 c 0.1 -3.8 -3.1 -7.2 -6.9 -7.2 C 7.1 0 4 3.1 4 7 c 0 2.6 
                    1.3 4.8 3.4 6 H 7 c -3.9 0 -7 3.1 -7 7 v 1 c 0 1.7 1.3 3 3 3 h 16 c 1.7 0 3 -1.3 3 -3 v -1 c 0 -3.9 -3.1 -7 -7
                     -7 Z M 6 7 c 0 -2.8 2.2 -5 5 -5 s 5 2.2 5 5 s -2.2 5 -5 5 s -5 -2.2 -5 -5 Z m 13 15 H 3 c -0.6 0 -1 -0.4 -1 
                     -1 v -1 c 0 -2.8 2.2 -5 5 -5 h 8 c 2.8 0 5 2.2 5 5 v 1 c 0 0.6 -0.4 1 -1 1 Z"
              ></path>
            </svg>
            <p className="user-text">User</p>
          </label>
          <input type="checkbox" id="user-toggler" className="toggle-input" />

          {/* <!-- USER DROPDOWN MENU --> */}
          <div className="user-toggled-content toggled-content">
            {/* <!-- User Dropdown Menu Links --> */}
            <div className="user-main-container">
              {/* user image */}
              <div className="user-image">
                <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1443&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </div>
              {/* username */}
              <a href="#" className="user-dropdown-link username">
                Username
              </a>
              {/* logout */}
              <a href="#" className="user-dropdown-link log-out">
                Log Out
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
