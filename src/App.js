import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupForm from "./Components/LoginForm/SignupForm";
import LoginForm from "./Components/LoginForm/LoginForm";
import AccountType from "./Components/LoginForm/AccountType";
import AccountTypeStudent from "./Components/LoginForm/AccountTypeStudent";
import StudentPasswordPage from "./Components/LoginForm/StudentPasswordPage";
import StudentVerifyPage from "./Components/LoginForm/StudentVerifyPage";
import StudentHome from "./Components/LoginForm/StudentHome";
import Shop from "./Components/LoginForm/Shop";
import JoinClass from "./Components/LoginForm/JoinClass";
import MyClass from "./Components/LoginForm/MyClass";
import ViewClass from "./Components/LoginForm/ViewClass";
import Settings from "./Components/LoginForm/Settings";
import StudentClass from "./Components/LoginForm/StudentClass";
import SetProfile from "./Components/LoginForm/SetProfile";
import CharacterSelection from "./Components/LoginForm/CharacterSelection";
import Leaderboards from "./Components/LoginForm/Leaderboards";
import JoinGame from "./Components/LoginForm/JoinGame";
import Lobby from "./Components/LoginForm/Lobby";
import Teacher from "./Components/LoginForm/Teacher";
import TeacherMyClass from "./Components/LoginForm/TeacherMyClass";
import TeacherViewClass from "./Components/LoginForm/TeacherViewClass";
import ViewStudents from "./Components/LoginForm/ViewStudents";
import TeacherLeaderboards from "./Components/LoginForm/TeacherLeaderboards";
import MyQuizzes from "./Components/LoginForm/MyQuizzes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/account-type" element={<AccountType />} />
          <Route path="/student" element={<AccountTypeStudent />} />
          <Route path="/student-password" element={<StudentPasswordPage />} />
          <Route path="/student-verify" element={<StudentVerifyPage />} />
          <Route path="/student-home" element={<StudentHome />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/join-class" element={<JoinClass />} />
          <Route path="/my-class" element={<MyClass />} />
          <Route path="/view-class" element={<ViewClass />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/student-class" element={<StudentClass />} />
          <Route path="/set-profile" element={<SetProfile />} />
          <Route path="/character-selection" element={<CharacterSelection />} />
          <Route path="/leaderboards" element={<Leaderboards />} />
          <Route path="/join-game" element={<JoinGame />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/my-class-teacher" element={<TeacherMyClass />} />
          <Route path="/view-class-teacher" element={<TeacherViewClass />} />
          <Route path="/view-students" element={<ViewStudents />} />
          <Route
            path="/teacher-leaderboards"
            element={<TeacherLeaderboards />}
          />
          <Route path="/my-quizzes" element={<MyQuizzes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
