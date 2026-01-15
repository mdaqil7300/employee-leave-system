import axios from "axios";

const loginApi = async (obj) => {
    const res = await axios.post('/api/EmployeeLeave/Login', obj);
    return res.data
}

const getAllLeavesByEmpId = async (id) => {
    const res = await axios.get('/api/EmployeeLeave/GetAllLeavesByEmployeeId?id=' + id);
    return res.data
}

const applyLeave = async (obj) => {
    const res = await axios.post('/api/EmployeeLeave/AddLeave', obj);
    return res.data
}

export { loginApi, getAllLeavesByEmpId, applyLeave };