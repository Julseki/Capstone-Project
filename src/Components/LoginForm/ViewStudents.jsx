import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/ViewStudent.css";
import {
  FaArrowLeft,
  FaUsers,
  FaTrophy,
  FaGamepad,
  FaClipboardList,
  FaUserGraduate,
} from "react-icons/fa";

const ViewStudents = () => {
  const navigate = useNavigate();

  const students = [
    {
      id: 1,
      name: "Apatan, Nick Andrei",
      username: "Natanukin04",
      gender: "Male",
      email: "nickandrei.apatan@normi.edu.ph",
    },
    {
      id: 2,
      name: "Capon, Rosa Angelica C.",
      username: "Rosa14",
      gender: "Female",
      email: "rosaangelica.capon@normi.edu.ph",
    },
    {
      id: 3,
      name: "Guy-ab, Julse",
      username: "Circle",
      gender: "Male",
      email: "julse.guy-ab@normi.edu.ph",
    },
    {
      id: 4,
      name: "Nanales, Bengin",
      username: "Pato40",
      gender: "Male",
      email: "bengin.nanales@normi.edu.ph",
    },
    {
      id: 5,
      name: "Devilleres, Prince Angelo A.",
      username: "Masuke14",
      gender: "Male",
      email: "princeangelo.devilleres@normi.edu.ph",
    },
    {
      id: 6,
      name: "Maraveles, Mika Althea",
      username: "Miks69",
      gender: "Female",
      email: "mikaalthea.maraveles@normi.edu.ph",
    },
    {
      id: 7,
      name: "Balacuit, Jhuvin",
      username: "JhuvinNgaPala",
      gender: "Male",
      email: "jhuvin.balacuit@normi.edu.ph",
    },
  ];

  const handleProfile = (student) => {
    alert(`Viewing profile of ${student.name}`);
  };

  const handleRemove = (studentId) => {
    alert(`Removing student with ID: ${studentId}`);
  };

  return (
    <div className="view-student-container">
      <aside className="sidebar10">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft /> BACK
        </button>

        <div className="profile-section">
          <img src="/Assets/avatar.png" alt="avatar" className="avatar-image" />
          <h2 className="teacher-name">Mr. John</h2>
          <p className="role">TEACHER</p>
        </div>

        <div className="menu">
          <div
            className="menu-item active"
            onClick={() => navigate("/view-students")}
          >
            <FaUsers /> VIEW STUDENTS
          </div>
          <div
            className="menu-item"
            onClick={() => navigate("/teacher-leaderboards")}
          >
            <FaTrophy /> LEADERBOARDS
          </div>
          <div className="menu-item" onClick={() => navigate("/create-quiz")}>
            <FaGamepad /> CREATE QUIZ
          </div>
          <div className="menu-item" onClick={() => navigate("/my-quizzes")}>
            <FaClipboardList /> MY QUIZZES
          </div>
        </div>
      </aside>
      <main className="students-section">
        <h1 className="students-title">
          <FaUserGraduate className="student-logo" /> STUDENTS
        </h1>
        <div className="table-wrapper">
          <table className="students-table">
            <thead>
              <tr>
                <th>NAME</th>
                <th>USERNAME</th>
                <th>GENDER</th>
                <th>EMAIL</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={s.id}>
                  <td>
                    {i + 1}. {s.name}
                  </td>
                  <td>{s.username}</td>
                  <td>{s.gender}</td>
                  <td>{s.email}</td>
                  <td className="action-cell">
                    <button
                      className="profile-btn"
                      onClick={() => handleProfile(s)}
                    >
                      Profile
                    </button>
                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(s.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default ViewStudents;
