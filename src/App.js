import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

import Welcome from './components/welcome-page.jsx';
import UserLog from './components/login.jsx';
import TeacherForm from './components/teacherForm.jsx';
import StudentForm from './components/studentForm.jsx';
import CounselorForm from './components/counselorForm.jsx';
import LancerForm from './components/lancerForm.jsx'; 
import Unity from './components/unity.jsx';
import Real from './components/welcome.jsx';
import StudentProfile from './components/studentProfile.jsx';
import TeacherProfile from './components/teacherProfile.jsx';
import TeacherCall from './components/TeacherCall.jsx';
import StudentCall from './components/StudentCall.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/welcome" />} /> 
        <Route path="/welcome" element={<Real/>} />  
        <Route path="/login" element={<UserLog />} />
        <Route path="/teacherForm" element={<TeacherForm />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/counselorForm" element={<CounselorForm />} />
        <Route path="/lancerForm" element={<LancerForm />} />
        <Route path="/unity" element={<Unity/>} />
        <Route path="/studentProfile" element={<StudentProfile />} />
        <Route path="/teacherProfile" element={<TeacherProfile />} />

       
        <Route path="/teacher-call/:meetingID" element={<TeacherCall />} />
        <Route path="/student-call/:meetingID" element={<StudentCall />} />
      </Routes>
    </div>
  );
}

export default App;
