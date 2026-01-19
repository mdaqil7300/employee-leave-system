const ManagerDashboard = () => {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center bg-info-subtle p-2 mb-2 rounded-2">
                <div>
                    <button type="button" className="btn btn-info btn-lg me-2">Pending Leave Requests <span className="badge text-bg-secondary">8</span></button>
                    <button type="button" className="btn btn-success btn-lg me-2">Approved <span className="badge text-bg-secondary">4</span></button>
                    <button type="button" className="btn btn-danger btn-lg">Rejected  <span className="badge text-bg-secondary">0</span></button>
                </div>
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
                                <th scope="col">Employee Name</th>
                                <th scope="col">From</th>
                                <th scope="col">To</th>
                                <th scope="col">Leave Type</th>
                                <th scope="col">Reason</th>
                                <th scope="col">Leave Count</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            No Records
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ManagerDashboard;