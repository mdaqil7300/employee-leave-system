import { useEffect, useState } from "react";
import { getAllLeaves, getDepartments, getEmployees } from "../../api/ApiCalls";

const AdminDashboard = () => {

    const [empData, setEmpData] = useState([]);
    const [deptData, setDeptData] = useState([]);
    const [leaveData, setleaveData] = useState(0);

    const employeeCount = () => {
        getEmployees().then((res) => {
            setEmpData(res.data)
        });
    }

    const departmentCount = () => {
        getDepartments().then((res) => {
            setDeptData(res.data)
        });
    }

    const empLeaveCount = () => {
        getAllLeaves().then((res) => {
            const data = res.data;
            let total = 0;

            {
                if (data && data.length > 0) {
                    data.forEach((item) => {
                        total += item.noOfDays
                    })
                }
            }
            setleaveData(total)
        });
    }

    useEffect(() => {
        employeeCount();
        departmentCount();
        empLeaveCount();
    }, [])
    return (
        <>
            <h2>Admin Dashboard Page</h2>
            <div className="row">
                <div className="col-sm-4 mb-3 mb-sm-0">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Employees Count: </h5>
                            <a href="#" className="btn btn-primary">{empData.length}</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Department Count: </h5>
                            <a href="#" className="btn btn-primary">{deptData.length}</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Leaves Count:</h5>
                            <a href="#" className="btn btn-primary">{leaveData}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminDashboard;