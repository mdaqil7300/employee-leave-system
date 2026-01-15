import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../api/ApiCalls";

const Login = ({ setUser }) => {
    const navigate = useNavigate();

    const [loginPayload, setLoginPayload] = useState(
        {
            "emailId": "",
            "password": ""
        }
    );

    const onLoginClick = async () => {
        loginApi(loginPayload).then((result) => {
            const role = result?.data?.role;
            const data = result?.data;

            if (result.result === true) {
                setUser(data);

                if (role.toLowerCase() === 'employee') {
                    navigate('/empDashboard');
                }
                if (role === 'Department Head') {
                    navigate('/managerDashboard');
                }
                if (role === 'Admin Department Employee') {
                    navigate('/adminDashboard');
                }
            }
        })
    }

    const onCancelClick = () => {
        setLoginPayload({
            "emailId": "",
            "password": ""
        })
    }

    const onChangeFormValue = (event, key) => {
        setLoginPayload((oldObj) => ({ ...oldObj, [key]: event.target.value }))
    }

    return (
        <>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <div className="card w-25">
                        <div className="card-header bg-success text-white">
                            Login Page
                        </div>
                        <div className="card-body bg-secondary-subtle">
                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Email:</label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" id="staticEmail" value={loginPayload.emailId} onChange={(event) => onChangeFormValue(event, 'emailId')} placeholder="Enter Your Email..." />
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label className="col-sm-4 col-form-label">Password:</label>
                                <div className="col-sm-8">
                                    <input type="password" className="form-control" id="inputPassword" value={loginPayload.password} onChange={(event) => onChangeFormValue(event, 'password')} placeholder="Enter Password..." />
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-center bg-info-subtle">
                            <button className="btn btn-primary me-2" onClick={onLoginClick}>Login</button>
                            <button className="btn btn-info" onClick={onCancelClick}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;