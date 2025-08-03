import React from "react";
import "../../styles/ViewStudents.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaUsers, FaTrophy, FaEdit, FaBook } from "react-icons/fa";

const students = [
  {
    name: "Apatan, Nick Andrei",
    username: "Natanukkin04",
    gender: "Male",
    email: "nickandrei.apatan@normi.edu.ph",
  },
  {
    name: "Capon, Rosa Angelica C.",
    username: "Rosa14",
    gender: "Female",
    email: "rosaangelica.capon@normi.edu.ph",
  },
  {
    name: "Guy-ab, Julse",
    username: "Circle",
    gender: "Male",
    email: "julse.guy-ab@normi.edu.ph",
  },
  {
    name: "Bengin Nanales",
    username: "Pato40",
    gender: "Male",
    email: "bengin.nanales@normi.edu.ph",
  },
  {
    name: "Devilleres, Prince Angelo A.",
    username: "Masuek14",
    gender: "Male",
    email: "princeangelo.devilleres@normi.edu.ph",
  },
  {
    name: "Maraveles, Mika Althea",
    username: "Miks<3",
    gender: "Female",
    email: "mikaalthea.maraveles@normi.edu.ph",
  },
  {
    name: "Balacuit, Jhuvin",
    username: "JhuvinNgaPala",
    gender: "Male",
    email: "jhuvin.balacuit@normi.edu.ph",
  },
];

const ViewStudents = () => {
  const navigate = useNavigate();

  return (
    <div className="view-students-page">
      <aside className="sidebar">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <FaArrowLeft />
          BACK
        </button>
        <div className="profile">
          <div className="avatar" />
          <h3>Mr. John</h3>
          <span className="role">TEACHER</span>
        </div>
        <nav className="menu">
          <button className="menu-item active">
            <FaUsers />
            VIEW STUDENTS
          </button>
          <button className="menu-item">
            <FaTrophy />
            LEADERBOARDS
          </button>
          <button className="menu-item">
            <FaEdit />
            CREATE QUIZ
          </button>
          <button className="menu-item">
            <FaBook />
            MY QUIZZES
          </button>
        </nav>
      </aside>

      <main className="main-content">
        <h1 className="section-title">STUDENTS</h1>
        <table className="students-table">
          <thead>
            <tr>
              <th>#</th>
              <th>NAME</th>
              <th>USERNAME</th>
              <th>GENDER</th>
              <th>EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}.</td>
                <td>{student.name}</td>
                <td>{student.username}</td>
                <td>{student.gender}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default ViewStudents;
