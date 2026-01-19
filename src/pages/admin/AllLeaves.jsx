import { useEffect, useState } from "react"
import { getAllLeaves } from "../../api/ApiCalls";

const AllLeaves = () => {
    const [empLeaves, setEmpLeaves] = useState([]);

    const styleText = (text) => {
        if (text === 'APPROVED') {
            return 'bg-success text-white'
        } else if (text === 'PENDING') {
            return 'bg-warning text-white'
        }
        return ''
    };

    const formatDate = (date) => {
        if (!date) return "-";
        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
    };

    useEffect(() => {
        getAllLeaves().then((res) => {
            setEmpLeaves(res.data);
        })
    }, [])

    return (
        <>
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
                                empLeaves && empLeaves.map((item, index) => {
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
                    <nav aria-label="Page navigation example">
                        <ul className="pagination justify-content-end">
                            <li className="page-item disabled">
                                <a className="page-link">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default AllLeaves;