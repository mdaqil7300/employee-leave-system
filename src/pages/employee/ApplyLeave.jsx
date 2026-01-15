import { useEffect, useState } from "react";
import { applyLeave } from "../../api/ApiCalls";
import { useNavigate } from "react-router-dom";
import { Toast } from "bootstrap";

const ApplyLeave = ({ user }) => {
    const navigate = useNavigate();
    const [submitPayload, setSubmitPayload] = useState(
        {
            "leaveId": 0,
            "employeeId": user.employeeId,
            "fromDate": '',
            "toDate": '',
            "noOfDays": 0,
            "leaveType": "",
            "details": "",
            "isApproved": false,
            "approvedDate": ""
        }
    );

    const calculateDays = () => {
        if (submitPayload.fromDate && submitPayload.toDate) {
            const fromDate = new Date(submitPayload.fromDate)
            const toDate = new Date(submitPayload.toDate);
            const diffTime = Math.abs(toDate - fromDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
            setSubmitPayload((oldObj) => ({ ...oldObj, noOfDays: diffDays }))
        }
    }

    const updateFormValue = (event, key) => {
        let value = event.target.value;
        if (key === 'fromDate' || key === 'toDate') {
            value = new Date(event.target.value).toISOString()
        }
        setSubmitPayload((oldObj) => ({ ...oldObj, [key]: value }))
    }

    useEffect(() => {
        calculateDays();
    }, [submitPayload.fromDate, submitPayload.toDate]);

    const onApplyLeave = () => {
        const applyLeaveToastModal = document.getElementById('applyLeaveToast');
        applyLeave(submitPayload).then((res) => {
            if (res.result === true) {
                const toastBootstrap = Toast.getOrCreateInstance(applyLeaveToastModal);
                toastBootstrap.show();
                applyLeaveToastModal.addEventListener('hidden.bs.toast', () => {
                    navigate('/empDashboard');
                }, { once: true });
            }
        })
    }

    const onCancelClick = () => {
        setSubmitPayload(
            {
                "leaveId": 0,
                "employeeId": user.employeeId,
                "fromDate": '',
                "toDate": '',
                "noOfDays": 0,
                "leaveType": "",
                "details": "",
                "isApproved": false,
                "approvedDate": ""
            }
        )
    }

    return (
        <>
            <div className="row justify-content-center">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            Apply Leave
                        </div>
                        <div className="card-body bg-secondary-subtle">
                            <div className="mb-3">
                                <label className="form-label">Leave Type</label>
                                <select className="form-select" onChange={(event) => updateFormValue(event, 'leaveType')} value={submitPayload.leaveType}>
                                    <option defaultValue={"Select"}>Select Leave Type</option>
                                    <option value="Sick">Sick Leave</option>
                                    <option value="Personal">Personal Leave</option>
                                    <option value="Annual">Annual Leave</option>
                                </select>
                            </div>
                            <div className="d-flex mb-3 gap-2">
                                <div className="col-md-6">
                                    <label className="form-label">From Date</label>
                                    <input type="date" className="form-control" value={submitPayload.fromDate.split('T')[0] || ''} onChange={(event) => updateFormValue(event, 'fromDate')} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label">To Date</label>
                                    <input type="date" className="form-control" value={submitPayload.toDate.split('T')[0] || ''} onChange={(event) => updateFormValue(event, 'toDate')} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Reason</label>
                                <textarea className="form-control" rows="3" value={submitPayload.details} onChange={(event) => updateFormValue(event, 'details')}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary me-2" onClick={onApplyLeave}>Submit</button>
                            <button type="button" className="btn btn-secondary" onClick={onCancelClick}>Clear</button>
                        </div>
                    </div>
                </div>
            </div >

            <div className="toast-container position-fixed top-0 end-0 translate-middle-x p-3">
                <div id="applyLeaveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="toast-header bg-dark">
                        <strong className="me-auto">Info!</strong>
                        <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                    </div>
                    <div className="toast-body">
                        Leave Applied Successfully.
                        <div className="mt-2 pt-2 border-top">
                            <button type="button" id="toasAction" className="btn btn-secondary btn-sm" data-bs-dismiss="toast">Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApplyLeave;