export function CandidateCard({ candidat }) {
  return (
    <div className="card">
      <div className="card-body">
        <div style={{display: "flex", gap: "20px"}} className="FIO-info-card">
          <p className="card-title">{candidat.surname}</p>
          <p className="card-title">{candidat.name}</p>
          <p className="card-title">{candidat.middlename}</p>
        </div>
        <div style={{display: "flex", gap: "20px"}} className="personal-info-card">
          <p className="card-title">{candidat.gender}</p>
          <p className="card-title">{candidat.dateOfBirth}</p>
        </div>
        <div style={{display: "flex", gap: "20px"}} className="contact-info-card">
          <p className="card-title">{candidat.phone}</p>
          <p className="card-title">{candidat.email}</p>
          <p className="card-title">{candidat.whatsApp}</p>
          <p className="card-title">{candidat.telegram}</p>
        </div>
        <div style={{display: "flex", gap: "20px"}} className="contact-info-card">
          <p className="card-title">{candidat.vacancyStatus}</p>
          <p className="card-title">{candidat.contactStatus}</p>
          <p className="card-title">{candidat.hrInterviewStatus}</p>
          <p className="card-title">{candidat.customerInterviewStatus}</p>
          <p className="card-title">{candidat.testStatus}</p>
          <p className="card-title">{candidat.offerStatus}</p>
          <p className="card-title">{candidat.workStatus}</p>
        </div>
        <p className="card-title">{candidat.rejection}</p>
      </div>
    </div>
  )
}