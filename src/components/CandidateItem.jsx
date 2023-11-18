import { Link } from "react-router-dom"

export function CandidateItem({ id, name, status, post, phone, email, deleteCandidate }) {

  return (
    
    <li style={{ display: "flex", gap: "20px" }} className="candidate-item">
      <p>{name}</p>
      <p>{post}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{status}</p>
      <Link to="/info" state={{id:id}}>Edit</Link>
      <button onClick={() => deleteCandidate(id)}>Delete</button>
    </li>
  )
}