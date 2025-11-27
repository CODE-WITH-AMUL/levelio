import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  return (
    <nav
      className="navbar-container"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 40px",
        background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid rgba(0,0,0,0.05)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "12px",
            height: "12px",
            background: "linear-gradient(135deg, #0D6EFD 0%, #0dcaf0 100%)",
            borderRadius: "3px",
            transform: "rotate(45deg)",
          }}
        />
        <h1
          className="logo"
          style={{
            fontSize: "26px",
            fontWeight: "800",
            background: "linear-gradient(135deg, #0D6EFD 0%, #0dcaf0 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            cursor: "pointer",
            margin: 0,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "-0.5px",
          }}
        >
          Levelio
        </h1>
      </div>

      {/* NAV LINKS */}
      <div
        className="nav-links"
        style={{
          display: "flex",
          gap: "32px",
          alignItems: "center",
        }}
      >
        <a style={linkStyle} href="/home">
          Home
        </a>
        <a style={linkStyle} href="#">
          Contact
        </a>
        <a style={linkStyle} href="#">
          About
        </a>
        <a style={linkStyle} href="#">
          Study
        </a>


        {/* DROPDOWN MENU */}
        <Dropdown>
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            style={{
              borderRadius: "10px",
              padding: "8px 20px",
              background: "linear-gradient(135deg, #0D6EFD 0%, #0dcaf0 100%)",
              border: "none",
              fontWeight: "600",
              fontSize: "14px",
              boxShadow: "0 2px 12px rgba(13, 110, 253, 0.3)",
              transition: "all 0.3s ease",
            }}
            className="dropdown-toggle-custom"
          >
            Menu
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              borderRadius: "12px",
              border: "none",
              boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
              padding: "8px",
              marginTop: "8px",
              background: "white",
            }}
          >
            <Dropdown.Item 
              href="/profile" 
              style={dropdownItemStyle}
            >
              Profile
            </Dropdown.Item>
            <Dropdown.Item 
              href="/Settings" 
              
              style={dropdownItemStyle}
            >
             Settings
            </Dropdown.Item>
            <div style={dropdownDivider}></div>
            <Dropdown.Item 
              href="#logout" 
              style={{ ...dropdownItemStyle, color: "#dc3545" }}
            >
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontSize: "15px",
  fontWeight: "600",
  color: "#495057",
  transition: "all 0.3s ease",
  padding: "8px 12px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "6px",
  fontFamily: "'Inter', sans-serif",
};


const dropdownItemStyle = {
  padding: "10px 16px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "14px",
  fontWeight: "500",
  transition: "all 0.2s ease",
  fontFamily: "'Inter', sans-serif",
};


const dropdownDivider = {
  height: "1px",
  background: "linear-gradient(90deg, transparent, #e9ecef, transparent)",
  margin: "6px 0",
};

// Add hover effects
const style = document.createElement('style');
style.textContent = `
  .nav-links a:hover {
    background: rgba(13, 110, 253, 0.08);
    color: #0D6EFD !important;
    transform: translateY(-1px);
  }
  .nav-links a:hover span {
    transform: scale(1.1);
  }
  .dropdown-toggle-custom:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(13, 110, 253, 0.4) !important;
  }
  .dropdown-item:hover {
    background: linear-gradient(135deg, #edeeef 0%, #d4d4d4 100%) !important;
    color: white !important;
    transform: translateX(4px);
  }
  }
`;
document.head.appendChild(style);

export default Navbar;