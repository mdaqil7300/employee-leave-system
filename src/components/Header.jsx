import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
    const location = useLocation();
    const navigate = useNavigate();

    const onLogoutClick = () => {
        setUser(null);
        navigate('/login')
    }

    useEffect(() => {
        const offcanvas = document.getElementById("offcanvasDarkNavbar");

        offcanvas.addEventListener("shown.bs.offcanvas", () => {
            document.body.classList.add("offcanvas-open");
        });

        offcanvas.addEventListener("hidden.bs.offcanvas", () => {
            document.body.classList.remove("offcanvas-open");
        });
    }, [location.pathname]);

    return (
        <>
            <nav className="navbar navbar-dark bg-dark fixed-top" style={{ height: "56px" }}>
                <div className="container-fluid">
                    <div className="d-flex align-items-center gap-2">
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasDarkNavbar"
                            aria-controls="offcanvasDarkNavbar"
                            disabled={!user}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <span className="navbar-brand mb-0">Employee Leave System</span>

                    </div>
                    {user && (
                        <div className="d-flex gap-2">
                            <span className="navbar-text">{user.employeeName}</span>
                            <button className="btn btn-success btn-sm" onClick={() => onLogoutClick()}>Logout</button>
                        </div>
                    )}
                </div>
            </nav>
            <Sidebar user={user} />
        </>
    )
}

export default Header;