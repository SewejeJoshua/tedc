// StudentProfile.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./studentProfile.css";
import TedLogo from './images/tedlogo.jpg';
import Logout from './images/logout.png';

export default function StudentProfile() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const joinMeeting = () => {
    let meetingID = input.trim();

    if (!meetingID) {
      alert("Please enter a meeting ID or link.");
      return;
    }

    // Extract meeting ID if full URL is entered
    if (meetingID.includes("/student-call/")) {
      const parts = meetingID.split("/student-call/");
      meetingID = parts[1] || "";
    }

    if (!meetingID) {
      alert("Invalid meeting ID or link.");
      return;
    }

    navigate(`/student-call/${meetingID}`);
  };

  return (
    <> 
    <img src={TedLogo} className='ted-logo'/>
    <main className="student-container">
        
      <section className="header-section">
        <img src={TedLogo} className='ted-logo'/>
        <h1 className="title">Welcome Student</h1>
        <p className="subtitle">Enter your meeting ID or link below to join the class.</p>
      </section>
      <section className="input-section"> 
        <input
          type="text"
          placeholder="Meeting ID or Join Link"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="input-field"
          aria-label="Meeting ID or Join Link"
        />
        <button className="btn-primary" onClick={joinMeeting}>
          Join Class
        </button>
      </section>
    </main>
    </>
  );
}
