import axios from "axios";

const loginApi = async (obj) => {
    const res = await axios.post('/api/EmployeeLeave/Login', obj);
    return res.data;
}

const getAllLeavesByEmpId = async (id) => {
    const res = await axios.get('/api/EmployeeLeave/GetAllLeavesByEmployeeId?id=' + id);
    return res.data;
}

const applyLeave = async (obj) => {
    const res = await axios.post('/api/EmployeeLeave/AddLeave', obj);
    return res.data;
}

const getAllLeaves = async () => {
    const res = await axios.get('/api/EmployeeLeave/GetAllLeaves');
    return res.data;
}

const getEmployees = async () => {
    const res = await axios.get('/api/EmployeeLeave/GetEmployees');
    return res.data;
}

const getDepartments = async () => {
    const res = await axios.get('/api/EmployeeLeave/GetDepartments');
    return res.data
}

export { loginApi, getAllLeavesByEmpId, applyLeave, getAllLeaves, getEmployees, getDepartments };