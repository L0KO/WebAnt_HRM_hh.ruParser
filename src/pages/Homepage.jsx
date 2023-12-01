import { useEffect, useState } from "react"
import { CandidatList } from "../components/CandidateList"
import { NewCandidateForm } from "../components/NewCandidateForm"

export function Homepage() {

  const [candidat, setCandidat] = useState([])

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

  function deleteCandidate(id) {
    setCandidat(candidat.filter(candidate => candidate.id !== id))
  }

  return (
    <>
      <NewCandidateForm addCandidate={addCandidate} id={candidat.length}/>
      <CandidatList candidat={candidat} deleteCandidate={deleteCandidate} />
    </>
  )
}