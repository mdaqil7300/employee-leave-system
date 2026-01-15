import { Link } from "react-router-dom";

const Sidebar = ({ user }) => {
    return (
        <>
            <div
                className="offcanvas offcanvas-start text-bg-dark"
                tabIndex="-1"
                id="offcanvasDarkNavbar"
                data-bs-backdrop="false"
                data-bs-scroll="true"
                style={{ top: "56px", height: "calc(100% - 56px)", width: "220px" }}
            >
                <div className="offcanvas-body text-start">
                    {
                        user && user.role.toLowerCase() === 'employee' &&
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/empDashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/applyLeave'>Apply Leave</Link>
                            </li>
                        </ul>
                    }
                    {
                        user && user.role === 'Department Head' &&
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/managerDashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/leaveApprovals'>Leave Approvals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/teamLeaves'>Team Leaves</Link>
                            </li>
                        </ul>
                    }
                    {
                        user && user.role === 'Admin Department Employee' &&
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to='/adminDashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/employees'>All Employees</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/allLeaves'>All Leaves</Link>
                            </li>
                        </ul>
                    }
                </div>
            </div>
        </>
    )
}

export default Sidebar;