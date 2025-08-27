// TeacherProfile.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "./teacherProfile.css";

export default function TeacherProfile() {
  const navigate = useNavigate();

  const startMeeting = () => {
    const meetingID = Date.now().toString();

    // Detect repo name from GitHub Pages URL
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const repoName = pathParts.length > 0 ? pathParts[0] : ""; // "tedc" when deployed

    // Student link
    const studentLink = repoName
      ? `${window.location.origin}/${repoName}#/student-call/${meetingID}`
      : `${window.location.origin}#/student-call/${meetingID}`;

    // Copy link to clipboard
    navigator.clipboard
      .writeText(studentLink)
      .then(() =>
        alert(`Student join link copied to clipboard:\n${studentLink}`)
      )
      .catch(() =>
        alert(`Failed to copy. Here is the link:\n${studentLink}`)
      );

    // Teacher joins their own call
    navigate(`/teacher-call/${meetingID}`);
  };

  return (
    <main className="teacher-container">
      <section className="header-section">
        <h1 className="title">Welcome Back, Teacher</h1>
        <p className="subtitle">
          Start a new virtual class session and share the join link with your
          students.
        </p>
      </section>
      <section className="action-section">
        <button className="btn-primary" onClick={startMeeting}>
          Start New Class
        </button>
      </section>
    </main>
  );
}
