import React from "react";
import "./opcionnns.css";
import Pomodoro from "./Pomodoro"
import { ContextoProv } from "./Context"



export default function PomodoroClock() {
  return (
    <ContextoProv>
        <Pomodoro />
    </ContextoProv>
     
  );
}
