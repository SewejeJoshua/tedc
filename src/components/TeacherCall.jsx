// TeacherCall.jsx
import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function TeacherCall() {
  const { meetingID } = useParams();

  const myMeeting = async (element) => {
    if (!meetingID) {
      alert("No meeting ID provided in URL");
      return;
    }

    const appID = 780646230; // Replace with your Zego App ID
    const serverSecret = "07898b7c3a99fa0cf4ec7609aa8c4811"; // Replace with your Zego Server Secret

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      meetingID,
      Date.now().toString(),
      "Teacher"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // Generate student join link with repo name for GitHub Pages
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    const repoName = pathParts.length > 0 ? pathParts[0] : "";
    const studentLink = repoName
      ? `${window.location.origin}/${repoName}#/student-call/${meetingID}`
      : `${window.location.origin}#/student-call/${meetingID}`;

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: "Student Join Link",
          url: studentLink,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
    });
  };

  return (
    <div
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
}
