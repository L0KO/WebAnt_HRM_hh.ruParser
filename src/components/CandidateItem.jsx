import { Link } from "react-router-dom"
import "../../public/css/CandidateItem.scss"

export function CandidateItem({ id, name, status, post, phone, email, deleteCandidate }) {

  return (

    <li style={{ display: "flex", gap: "20px" }} className="candidate-item">
      <div style={{ display: "flex"}} className="info-container">
      <p>{name}</p>
      <p>{post}</p>
      <p>{phone}</p>
      <p>{email}</p>
      <p>{status}</p>
      </div>
      <div style={{ display: "flex", gap: "20px" }} className="btns-container">
      <Link to="/info" state={{ id: id }}>
        <button className="button-36" role="button" type="submit">Edit</button>
      </Link>
      <button onClick={() => deleteCandidate(id)} className="button-36-delete" role="button" type="submit">Delete</button>
      </div>      
    </li>
  )
}