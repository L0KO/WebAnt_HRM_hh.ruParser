import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react"
import { CandidateCard } from "../components/CandidateCard";

export function Infopage() {

  let { state } = useLocation();
  // console.log(state);

  // const [candidat, setCandidat] = useState({})
  const [candidat, setCandidat] = useState({
    id: 0,
    state: {
      state: "Ожидание рассмотрения"
    },
    personal_name: '',
    contacts: {
      email: '',
      phone: ''
    },
    birth_date: '',
    gender: '',
    area: '',
    title: '',
    specialization: [{
      name: '',
      profarea_name: "Специализации:"
    }],
    salary: {
      amount: '',
      currency: "₽ на руки"
    },
    education_level: '',
    education: [{
      name: '',
      year: '',
      organization: ''
    }],
    language: [{
      name: '',
      level: ''
    }],
    experience: [{
      end: '',
      start: '',
      position: '',
      description: '',
      organization: '',
    }],
    skill_set: [''],
    skills: ''
  })
  
  useEffect(() => {
    fetch(`http://localhost:3000/resume/list/${state.id}`)
    .then(response => response.json())
    .then(data => setCandidat(data))
    .catch(error => console.log('Ошибка:', error));
    }, []);

    function saveCandidate(objectToSend) {
      let url = `http://localhost:3000/resume/list/update/${state.id}`;
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(objectToSend),
      })
    }

    console.log(candidat);

  return (
    <div className="infopage">
      <CandidateCard candidat={candidat} setCandidat={setCandidat} saveCandidate={saveCandidate}/>
      <Link to="/">Home</Link>
    </div>
  )
}