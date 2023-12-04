export function CandidateCard({ candidat, setCandidat, saveCandidate }) {

  let index = 0;

  return (
    <div className="card">
      <form onSubmit={saveCandidate(candidat)}>
        <div className="card-body">
          <div style={{ display: "flex", gap: "20px" }} className="FIO-info-card">
            {/* <p className="card-title">{candidat.personal_name}</p> */}
            <input type="text" value={candidat.personal_name} onChange={e => setCandidat({ ...candidat, personal_name: e.target.value })} />
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="contact-info-card">
            {/* <p className="card-title">{candidat.contacts.phone}</p> */}
            <input type="text" value={candidat.contacts.phone} onChange={e => setCandidat({ ...candidat, contacts: { email: candidat.contacts.email, phone: e.target.value } })} />
            {/* <p className="card-title">{candidat.contacts.email}</p> */}
            <input type="text" value={candidat.contacts.email} onChange={e => setCandidat({ ...candidat, contacts: { phone: candidat.contacts.phone, email: e.target.value } })} />
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            {/* <p className="card-title">{candidat.gender}</p> */}
            <input type="text" value={candidat.gender} onChange={e => setCandidat({ ...candidat, gender: e.target.value })} />
            {/* <p className="card-title">{candidat.birth_date}</p> */}
            <input type="text" value={candidat.birth_date} onChange={e => setCandidat({ ...candidat, birth_date: e.target.value })} />
            {/* <p className="card-title">{candidat.area}</p> */}
            <input type="text" value={candidat.area} onChange={e => setCandidat({ ...candidat, area: e.target.value })} />
            {/* <p className="card-title">{candidat.title}</p> */}
            <input type="text" value={candidat.title} onChange={e => setCandidat({ ...candidat, title: e.target.value })} />
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.specialization?.map((specialization) => {
                return <li key={index++}>
                  {specialization.profarea_name}
                  {/* {specialization.name} */}
                  <input type="text" value={specialization.name} onChange={e => setCandidat({ ...candidat, specialization: [{ profarea_name: candidat.specialization[0].profarea_name, name: e.target.value }] })} />
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <p className="card-title">{candidat.salary?.currency}</p>
            {/* <p className="card-title">{candidat.salary?.amount}</p> */}
            <input type="number" value={candidat.salary.amount} onChange={e => setCandidat({ ...candidat, salary: { currency: candidat.salary.currency, amount: e.target.value } })} />
            {/* <p className="card-title">{candidat.education_level}</p> */}
            <select name="education_level" id="education_level" value={candidat.education_level} onChange={e => setCandidat({ ...candidat, education_level: e.target.value })}>
              <option hidden value="">Ваш уровень образования</option>
              <option value="Среднее образование">Среднее образование</option>
              <option value="Среднее специальное образование">Среднее специальное образование</option>
              <option value="Неоконченное высшее образование">Неоконченное высшее образование</option>
              <option value="Высшее образование">Высшее образование</option>
              <option value="Бакалавр">Бакалавр</option>
              <option value="Магистр">Магистр</option>
              <option value="Кандидат наук">Кандидат наук</option>
              <option value="Доктор наук">Доктор наук</option>
            </select>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.education?.map((education) => {
                return <li key={index++}>
                  {/* {education.year} */}
                  <input type="text" value={education.year} onChange={e => setCandidat({ ...candidat, education: [{ name: candidat.education[0].name, organization: candidat.education[0].organization, year: e.target.value }] })} />
                  {/* {education.name} */}
                  <input type="text" value={education.name} onChange={e => setCandidat({ ...candidat, education: [{ year: candidat.education[0].year, organization: candidat.education[0].organization, name: e.target.value }] })} />
                  {/* {education.organization} */}
                  <input type="text" value={education.organization} onChange={e => setCandidat({ ...candidat, education: [{ name: candidat.education[0].name, year: candidat.education[0].year, organization: e.target.value }] })} />
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.language?.map((language) => {
                return <li key={index++}>
                  {/* {language.name} */}
                  <input type="text" value={language.name} onChange={e => setCandidat({ ...candidat, language: [{ level: candidat.language[0].level, name: e.target.value }] })} />
                  {/* {language.level} */}
                  <select name="language_level" id="language_level" value={language.level} onChange={e => setCandidat({ ...candidat, language: [{ name: candidat.language[0].name, level: e.target.value }] })}>
                    <option hidden value="">Ваш уровень языка</option>
                    <option value="A1 - Начальный">A1 - Начальный</option>
                    <option value="A2 - Элементарный">A2 - Элементарный</option>
                    <option value="B1 - Средний">B1 - Средний</option>
                    <option value="B2 - Средне-продвинутый">B2 - Средне-продвинутый</option>
                    <option value="C1 - Продвинутый">C1 - Продвинутый</option>
                    <option value="C2 - В совершенстве">C2 - В совершенстве</option>
                    <option value="Родной">Родной</option>
                  </select>
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.experience?.map((experience) => {
                return <li key={index++}>
                  {/* {experience.organization} */}
                  <input type="text" value={experience.organization} onChange={e => setCandidat({ ...candidat, experience: [{ position: candidat.experience[0].position, start: candidat.experience[0].start, end: candidat.experience[0].end, description: candidat.experience[0].description, organization: e.target.value }] })} />
                  {/* {experience.position} */}
                  <input type="text" value={experience.position} onChange={e => setCandidat({ ...candidat, experience: [{ organization: candidat.experience[0].organization, start: candidat.experience[0].start, end: candidat.experience[0].end, description: candidat.experience[0].description, position: e.target.value }] })} />
                  {/* {experience.start} */}
                  <input type="text" value={experience.start} onChange={e => setCandidat({ ...candidat, experience: [{ position: candidat.experience[0].position, organization: candidat.experience[0].organization, end: candidat.experience[0].end, description: candidat.experience[0].description, start: e.target.value }] })} />
                  {/* {experience.end} */}
                  <input type="text" value={experience.end} onChange={e => setCandidat({ ...candidat, experience: [{ position: candidat.experience[0].position, start: candidat.experience[0].start, organization: candidat.experience[0].organization, description: candidat.experience[0].description, end: e.target.value }] })} />
                  {/* {experience.description} */}
                  <input type="text" value={experience.description} onChange={e => setCandidat({ ...candidat, experience: [{ position: candidat.experience[0].position, start: candidat.experience[0].start, end: candidat.experience[0].end, organization: candidat.experience[0].organization, description: e.target.value }] })} />
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.skill_set?.map((skill_set) => {
                return <li key={index++}>
                  {/* {skill_set} */}
                  <input type="text" value={skill_set} onChange={e => 
                    setCandidat({ ...candidat, skill_set: candidat.skill_set.map(obj => 
                    (obj.id === skill_set.id ? obj = e.target.value : obj))})} />
                </li>
              })}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            {/* <p className="card-title">{candidat.skills}</p> */}
            <input type="text" value={candidat.skills} onChange={e => setCandidat({ ...candidat, skills: e.target.value })} />
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
        <button className="button-36" role="button" type="submit">Save changes</button>
      </form>
    </div>
  )
}