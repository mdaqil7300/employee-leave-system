import { useEffect, useState } from "react";
import { getAllLeavesByEmpId } from "../../api/ApiCalls";
import { Link } from "react-router-dom";

const EmpDashboard = ({ user }) => {
    const [empData, setEmpData] = useState();
    const [totalLeaves, setTotalLeaves] = useState(0);
    const [approvedLeaves, setApprovedLeaves] = useState(0);
    const [pendingLeaves, setPendingLeaves] = useState(0);

    const getEmpDataById = () => {
        getAllLeavesByEmpId(user.employeeId).then((result) => {
            const data = result.data;
            setEmpData(data);

            let total = 0;
            let approved = 0;
            let pending = 0;

            if (data && data.length > 0) {
                data.forEach(item => {
                    total += item.noOfDays;
                    if (!item.isApproved) {
                        pending += item.noOfDays
                    } else {
                        approved += item.noOfDays
                    }
                })
            }

            setTotalLeaves(total);
            setApprovedLeaves(approved);
            setPendingLeaves(pending)
        })
    }

    const formatDate = (date) => {
        if (!date) return "-";
        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    const styleText = (text) => {
        if (text === 'APPROVED') {
            return 'bg-success text-white'
        } else if (text === 'PENDING') {
            return 'bg-warning text-white'
        }
        return ''
    }


    useEffect(() => {
        if (user) {
            getEmpDataById();
        }
    }, [user])

    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-info-subtle p-2 mb-2 rounded-2">
                <div>
                    <button type="button" className="btn btn-info btn-lg me-2">Total Leaves <span className="badge text-bg-secondary">{totalLeaves}</span></button>
                    <button type="button" className="btn btn-success btn-lg me-2">Approved <span className="badge text-bg-secondary">{approvedLeaves}</span></button>
                    <button type="button" className="btn btn-warning btn-lg me-2">Pending <span className="badge text-bg-secondary">{pendingLeaves}</span></button>
                    {/* <button type="button" className="btn btn-danger btn-lg">Rejected {rejectedLeaves}</button> */}
                </div>
                <button type="button" className="btn btn-primary d-flex align-items-center gap-1" >
                    <i className="bi bi-plus-lg"></i>
                    <Link className="nav-link" to='/applyLeave'>Apply Leave</Link>
                </button>
            </div>

            <div className="card">
                <div className="card-header">
                    All Leaves
                </div>
                <div className="card-body">
                    <table className="table table-hover table-bordered">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Leave Type</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Status</th>
                                <th scope="col">Leave Count</th>
                                <th scope="col">Approved Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                empData && empData.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{formatDate(item.fromDate)}</td>
                                            <td>{formatDate(item.toDate)}</td>
                                            <td>{item.leaveType}</td>
                                            <td>{item.details}</td>
                                            <td className={`${styleText(item.isApproved ? 'APPROVED' : 'PENDING')}`}>
                                                {item.isApproved ? 'APPROVED' : 'PENDING'}
                                            </td>
                                            <td>{item.noOfDays}</td>
                                            <td>{formatDate(item.approvedDate)}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmpDashboard;