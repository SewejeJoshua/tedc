import React from "react";
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

export default function CallPage() {
  const { roomID } = useParams();

  const myMeeting = async (element) => {
    const appID = 780646230; // from ZegoCloud dashboard
    const serverSecret = "07898b7c3a99fa0cf4ec7609aa8c4811"; // from ZegoCloud dashboard

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "User" // Could be Teacher or Student
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      scenario: { mode: ZegoUIKitPrebuilt.GroupCall },
    });
  };

  return <div ref={myMeeting} style={{ width: "100vw", height: "100vh" }}></div>;
}
