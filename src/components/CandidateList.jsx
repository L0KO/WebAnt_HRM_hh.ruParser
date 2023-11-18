import { CandidateItem } from "./CandidateItem"

export function CandidatList({ candidat, deleteCandidate }) {
  return (
    <div className="candidat-list">
      <ul>{candidat.map(candidat =>
        <CandidateItem
          {...candidat}
          key={candidat.id}
          deleteCandidate={deleteCandidate}
        />
      )}
      </ul>
    </div>
  )
}