import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import { CandidateCard } from "../components/CandidateCard";

export function Infopage() {

  let { state } = useLocation();
  // console.log(state);

  const [candidat, setCandidat] = useState({})

  useEffect(() => {
    fetch(`http://localhost:3000/resume/list/${state.id}`)
    .then(response => response.json())
    .then(data => {
    const newCandidat = {
    name: data.personal_name,
    phone: data.contacts.phone,
    email: data.contacts.email,
    dateOfBirth: data.birth_date,
    gender: data.gender,
    area: data.area,
    post: data.title,
    specialization: data.specialization,
    salary: data.salary,
    education_level: data.education_level,
    education: data.education,
    language: data.language,
    experience: data.experience,
    skill_set: data.skill_set,
    skills: data.skills,
    status: "", 
    };
    setCandidat(newCandidat);
    })
    .catch(error => console.log('Ошибка:', error));
    }, []);

    console.log(candidat);

  return (
    <div className="infopage">
      <CandidateCard candidat={candidat} />
      <Link to="/">Home</Link>
    </div>
  )
}