import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { CandidateCard } from "../components/CandidateCard";

export function Infopage() {

  let { state } = useLocation();
  console.log(state);

  const [candidat, setCandidat] = useState([
    {
      id: 0,
      post: "Front-End Developer",
      surname: "Solonnikov",
      name: "Viktor",
      middlename: "Alexeevich",
      gender: "Male",
      dateOfBirth: "1990-01-01",
      phone: "06 00 00 00 00",
      email: "<EMAIL>",
      vacancyStatus: "Awaiting",
      contactStatus: "Not Contacted",
      hrInterviewStatus: "Not Interviewed",
      customerInterviewStatus: "Not Interviewed",
      testStatus: "Not Started",
      offerStatus: "No offer",
      workStatus: "Not Accepted",
      rejection: ""
    },
    {
      id: 1,
      post: "Back-End Developer",
      surname: "Evgeniyev",
      name: "Evgeniy",
      middlename: "Evgenievich",
      gender: "Male",
      dateOfBirth: "1990-01-01",
      phone: "06 00 00 00 00",
      email: "<EMAIL>",
      vacancyStatus: "Awaiting",
      contactStatus: "Not Contacted",
      hrInterviewStatus: "Not Interviewed",
      customerInterviewStatus: "Not Interviewed",
      testStatus: "Not Started",
      offerStatus: "No offer",
      workStatus: "Not Accepted",
      rejection: ""
    },
    {
      id: 2,
      post: "Manager",
      surname: "Olgavna",
      name: "Olga",
      middlename: "Olgavna",
      gender: "Male",
      dateOfBirth: "1990-01-01",
      phone: "06 00 00 00 00",
      email: "<EMAIL>",
      vacancyStatus: "Awaiting",
      contactStatus: "Not Contacted",
      hrInterviewStatus: "Not Interviewed",
      customerInterviewStatus: "Not Interviewed",
      testStatus: "Not Started",
      offerStatus: "No offer",
      workStatus: "Not Accepted",
      rejection: ""
    }
  ])

  return (
    <div className="infopage">
      <CandidateCard candidat={candidat[state.id]} />
      <Link to="/">Home</Link>
    </div>
  )
}