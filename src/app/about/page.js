"use client";
import React from "react";
import { useContext } from "react";
import { TaskContext } from "../../context/TaskContext";

function Aboutpage() {
  const values = useContext(TaskContext);
  return <div>About Page</div>;
}

export default Aboutpage;
