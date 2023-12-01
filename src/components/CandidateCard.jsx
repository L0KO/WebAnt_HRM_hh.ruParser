import { InfoListItem } from './InfoListItem';

export function CandidateCard({ candidat }) {

  let index = 0;

  return (
    <div className="card">
      <div className="card-body">
        <div style={{ display: "flex", gap: "20px" }} className="FIO-info-card">
          <p className="card-title">{candidat.name}</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="contact-info-card">
          <p className="card-title">{candidat.phone}</p>
          <p className="card-title">{candidat.email}</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <p className="card-title">{candidat.gender}</p>
          <p className="card-title">{candidat.dateOfBirth}</p>
          <p className="card-title">{candidat.area}</p>
          <p className="card-title">{candidat.post}</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <ul>
            {candidat.specialization?.map((specialization) => {
              return <li key={index++}>
                {specialization.profarea_name}
                {specialization.name}
              </li>
            }
            )}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <p className="card-title">{candidat.salary?.currency}</p>
          <p className="card-title">{candidat.salary?.amount}</p>
          <p className="card-title">{candidat.education_level}</p>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <ul>
            {candidat.education?.map((education) => {
              return <li key={index++}>
                {education.year}
                {education.name}
                {education.organization}
              </li>
            }
            )}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <ul>
            {candidat.language?.map((language) => {
              return <li key={index++}>
                {language.name}
                {language.level}
              </li>
            }
            )}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <ul>
            {candidat.experience?.map((experience) => {
              return <li key={index++}>
                {experience.organization}
                {experience.position}
                {experience.start}
                {experience.end}
                {experience.description}
              </li>
            }
            )}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <ul>
            {candidat.skill_set?.map((skill_set) => {
              return <li key={index++}>
                {skill_set}
              </li>
            }
            )}
          </ul>
        </div>
        <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <p className="card-title">{candidat.skills}</p>
        </div>
        {/* <div style={{display: "flex", gap: "20px"}} className="contact-info-card">
          <p className="card-title">{candidat.vacancyStatus}</p>
          <p className="card-title">{candidat.contactStatus}</p>
          <p className="card-title">{candidat.hrInterviewStatus}</p>
          <p className="card-title">{candidat.customerInterviewStatus}</p>
          <p className="card-title">{candidat.testStatus}</p>
          <p className="card-title">{candidat.offerStatus}</p>
          <p className="card-title">{candidat.workStatus}</p>
        </div> */}
        <p className="card-title">{candidat.rejection}</p>
      </div>
    </div>
  )
}