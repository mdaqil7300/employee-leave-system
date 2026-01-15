# Employee Leave Tracker

Simple React + Vite app to manage employee leave requests with three dashboard roles:
- Admin Department Employee
- Employee
- Department Head

## What this project does
- Employees can apply for leave (from/to dates, type, reason).
- Dashboards show leave lists and approval workflow depending on role.
- Uses Bootstrap for UI and axios for API calls (see src/api/ApiCalls.jsx).

## Local setup

1. Install dependencies
   npm install

2. Run dev server
   npm run dev

3. Build
   npm run build

## Login test data (use these for the three dashboards)

```json
[
  {
    "message": "",
    "result": true,
    "data": {
      "employeeId": 333,
      "employeeName": "Yash Sharma",
      "contactNo": "1234567890",
      "emailId": "yash@gmail.com",
      "deptId": 180,
      "password": "123456",
      "gender": "Male",
      "role": "Admin Department Employee"
    }
  },
  {
    "message": "",
    "result": true,
    "data": {
      "employeeId": 490,
      "employeeName": "johnson",
      "contactNo": "111111",
      "emailId": "johnson@gmail.com",
      "deptId": 177,
      "password": "123456",
      "gender": "Male",
      "role": "Employee"
    }
  },
  {
    "message": "",
    "result": true,
    "data": {
      "employeeId": 337,
      "employeeName": "pratikgirl",
      "contactNo": "9876543212",
      "emailId": "pratu@gmail.com",
      "deptId": 179,
      "password": "44444456",
      "gender": "female",
      "role": "Department Head"
    }
  }
]
```

## Notes
- Protected routes check user.role — ensure role strings match (use case-insensitive comparison).
- API base: https://freeapi.miniprojectideas.com/index.html -- adjust axios base URL if backend runs on a different host/port.
