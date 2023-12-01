import { useEffect, useState } from "react"
import { CandidatList } from "../components/CandidateList"
import { NewCandidateForm } from "../components/NewCandidateForm"

export function Homepage() {

  const [candidat, setCandidat] = useState([])
  const [parsedCandidat, setParsedCandidat] = useState({
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
    fetch('http://localhost:3000/resume/list/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const newCandidat = data.map(element => ({
          id: element.id,
          name: element.personal_name,
          status: "",
          post: element.title,
          phone: element.contacts.phone,
          email: element.contacts.email
        }));
        setCandidat(newCandidat);
      })
      .catch(error => console.log('Ошибка:', error));
  }, []);

  function addCandidate(objectToSend) {
    let url = 'http://localhost:3000/resume/add/';
    let data = objectToSend;
    console.log(`data: ${data}`)
    console.log(data)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
  }

  function parseCandidate(objectToSend) {
    let url = 'http://localhost:3000/resume/add/parse';
    let data = objectToSend;
    console.log(`data: ${data}`)
    console.log(data)
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        // let parsedData = JSON.parse(JSON.stringify(data));
        // let parsedData = JSON.parse(JSON.stringify(data));
        // console.log(parsedData);
        setParsedCandidat(data)
        console.log(parsedCandidat)
      })
  }

  function deleteCandidate(id) {
    // setCandidat(candidat.filter(candidate => candidate.id !== id))
    fetch(`http://localhost:3000/resume/list/delete/${id}`, { method: 'POST' })
  }

  return (
    <>
      <NewCandidateForm parseCandidate={parseCandidate} addCandidate={addCandidate} parsedCandidat={parsedCandidat} id={candidat.length} />
      <CandidatList candidat={candidat} deleteCandidate={deleteCandidate} />
    </>
  )
}