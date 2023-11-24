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

  function addCandidate(name, post, phone, email) {
    setCandidat([...candidat, {
      id: candidat.length,
      name: name,
      status: "En cours",
      post: post,
      phone: phone,
      email: email
    }])
  }

  function deleteCandidate(id) {
    setCandidat(candidat.filter(candidate => candidate.id !== id))
  }

  return (
    <>
      <NewCandidateForm addCandidate={addCandidate} />
      <CandidatList candidat={candidat} deleteCandidate={deleteCandidate} />
    </>
  )
}