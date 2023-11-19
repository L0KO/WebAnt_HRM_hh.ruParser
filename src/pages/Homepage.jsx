import { useState } from "react"
import { CandidatList } from "../components/CandidateList"
import { NewCandidateForm } from "../components/NewCandidateForm"

export function Homepage() {

  const [candidat, setCandidat] = useState([
    {
      id: 0,
      name: "Viktor",
      status: "En cours",
      post: "Front-End Developer",
      phone: "+7 (961) 418 16 16",
      email: "<EMAIL>"
    },
    {
      id: 1,
      name: "Evgeniy",
      status: "En cours",
      post: "Back-End Developer",
      phone: "+7 (906) 000 13 13",
      email: "<EMAIL>"
    },
    {
      id: 2,
      name: "Olga",
      status: "En cours",
      post: "Manager",
      phone: "+7 (808) 101 15 15",
      email: "<EMAIL>"
    },
  ])

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