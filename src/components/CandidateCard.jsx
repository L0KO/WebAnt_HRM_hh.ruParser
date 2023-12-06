import "../../public/css/CandidateCard.scss"

export function CandidateCard({ candidat, setCandidat, saveCandidate }) {

  let index = 0;

  function handleSave(e) {
    e.preventDefault();
    saveCandidate(candidat)
  }

  return (
    <div className="card">
      <form onSubmit={handleSave}>
        <div className="card-body">
          <div style={{ display: "flex", gap: "20px" }} className="FIO-info-card">
            <div className="form__group field">
              <input type="text" name="personal_name" className="form__field" value={candidat.personal_name} onChange={e =>
                setCandidat({ ...candidat, personal_name: e.target.value })} />
              <label htmlFor="personal_name" className="form__label">Name</label>
            </div>
            <div className="form__group field">
              <input type="text" name="phone" className="form__field" value={candidat.contacts.phone} onChange={e =>
                setCandidat({ ...candidat, contacts: { email: candidat.contacts.email, phone: e.target.value } })} />
              <label htmlFor="phone" className="form__label">Phone</label>
            </div>
            <div className="form__group field">
              <input type="text" name="email" className="form__field" value={candidat.contacts.email} onChange={e =>
                setCandidat({ ...candidat, contacts: { phone: candidat.contacts.phone, email: e.target.value } })} />
              <label htmlFor="email" className="form__label">Email</label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <div className="form__group field">
              <select name="gender" id="greyText" className="form__field" value={candidat.gender} onChange={e =>
                setCandidat({ ...candidat, gender: e.target.value })} required>
                <option hidden value="">Your Gender</option>
                <option value="Мужчина">Мужчина</option>
                <option value="Женщина">Женщина</option>
                <option value="Ламинат">Ламинат</option>
              </select>
              <label htmlFor="gender" className="form__label">Gender</label>
            </div>
            <div className="form__group field">
              <input type="date" name="birth_date" className="form__field" value={candidat.birth_date} onChange={e =>
                setCandidat({ ...candidat, birth_date: e.target.value })} />
              <label htmlFor="birth_date" className="form__label">Birth date</label>
            </div>
            <div className="form__group field">
              <input type="text" name="area" className="form__field" value={candidat.area} onChange={e =>
                setCandidat({ ...candidat, area: e.target.value })} />
              <label htmlFor="area" className="form__label">Area</label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
          <div className="form__group field">
              <input type="text" name="title" className="form__field" value={candidat.title} onChange={e =>
                setCandidat({ ...candidat, title: e.target.value })} />
              <label htmlFor="title" className="form__label">Post</label>
            </div>
            <ul>
              {candidat.specialization?.map((specialization) => {
                return <li key={index++}>
                  {/* {specialization.profarea_name} */}
                  <div className="form__group field">
                    <input type="text" name="specialization" className="form__field" value={specialization.name} onChange={e =>
                      setCandidat({ ...candidat, specialization: [{ profarea_name: candidat.specialization[0].profarea_name, name: e.target.value }] })} />
                    <label htmlFor="specialization" className="form__label">Specialization</label>
                  </div>
                </li>
              }
              )}
            </ul>
            <div className="form__group field">
              <input type="number" name="salaryAmount" className="form__field" value={candidat.salary.amount} onChange={e =>
                setCandidat({ ...candidat, salary: { currency: candidat.salary.currency, amount: e.target.value } })} />
              <label htmlFor="salaryAmount" className="form__label">Salary amount</label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            {/* <p className="card-title">{candidat.salary?.currency}</p> */}
            <div className="form__group field">
              <select name="education_level" id="greyText" className="form__field" value={candidat.education_level} onChange={e =>
                setCandidat({ ...candidat, education_level: e.target.value })}>
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
              <label htmlFor="education_level" className="form__label">Education level</label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.education?.map((education) => {
                return <li key={index++}>
                  <div className="form__group field">
                    <input type="number" name="education_year" className="form__field" value={education.year} onChange={e =>
                      setCandidat({ ...candidat, education: [{ name: candidat.education[0].name, organization: candidat.education[0].organization, year: e.target.value }] })} />
                    <label htmlFor="education_year" className="form__label">Education year</label>
                  </div>
                  <div className="form__group field">
                    <input type="text" name="education_name" className="form__field" value={education.name} onChange={e =>
                      setCandidat({ ...candidat, education: [{ year: candidat.education[0].year, organization: candidat.education[0].organization, name: e.target.value }] })} />
                    <label htmlFor="education_name" className="form__label">Education name</label>
                  </div>
                  <div className="form__group field">
                    <input type="text" name="education_organization" className="form__field" value={education.organization} onChange={e =>
                      setCandidat({ ...candidat, education: [{ name: candidat.education[0].name, year: candidat.education[0].year, organization: e.target.value }] })} />
                    <label htmlFor="education_organization" className="form__label">Education organization</label>
                  </div>
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.language?.map((language) => {
                return <li key={index++}>
                  <div className="form__group field">
                    <input type="text" name="language_name" className="form__field" value={language.name} onChange={e =>
                      setCandidat({ ...candidat, language: [{ level: candidat.language[0].level, name: e.target.value }] })} />
                    <label htmlFor="language_name" className="form__label">Language name</label>
                  </div>
                  <div className="form__group field">
                    <select name="language_level" id="greyText" className="form__field" value={language.level} onChange={e =>
                      setCandidat({ ...candidat, language: [{ name: candidat.language[0].name, level: e.target.value }] })}>
                      <option hidden value="">Ваш уровень языка</option>
                      <option value="A1 - Начальный">A1 - Начальный</option>
                      <option value="A2 - Элементарный">A2 - Элементарный</option>
                      <option value="B1 - Средний">B1 - Средний</option>
                      <option value="B2 - Средне-продвинутый">B2 - Средне-продвинутый</option>
                      <option value="C1 - Продвинутый">C1 - Продвинутый</option>
                      <option value="C2 - В совершенстве">C2 - В совершенстве</option>
                      <option value="Родной">Родной</option>
                    </select>
                    <label htmlFor="language_level" className="form__label">Language level</label>
                  </div>
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.experience?.map((experience) => {
                return <li key={index++}>
                  <div className="form__group field">
                    <input type="text" name="experience_organization" className="form__field" value={experience.organization} onChange={e =>
                      setCandidat({
                        ...candidat, experience: candidat.experience.map(obj =>
                        (obj.id === experience.id ? obj = {
                          organization: e.target.value,
                          position: experience.position,
                          start: experience.start,
                          end: experience.end,
                          description: experience.description
                        } : obj))
                      })} />
                    <label htmlFor="experience_organization" className="form__label">Experience organization</label>
                  </div>
                  <div className="form__group field">
                    <input type="text" name="experience_position" className="form__field" value={experience.position} onChange={e =>
                      setCandidat({
                        ...candidat, experience: candidat.experience.map(obj =>
                        (obj.id === experience.id ? obj = {
                          organization: experience.organization,
                          position: e.target.value,
                          start: experience.start,
                          end: experience.end,
                          description: experience.description
                        } : obj))
                      })} />
                    <label htmlFor="experience_position" className="form__label">Experience position</label>
                  </div>
                  <div className="form__group field">
                    <input type="date" name="experience_start" className="form__field" value={experience.start} onChange={e =>
                      setCandidat({
                        ...candidat, experience: candidat.experience.map(obj =>
                        (obj.id === experience.id ? obj = {
                          organization: experience.organization,
                          position: experience.position,
                          start: e.target.value,
                          end: experience.end,
                          description: experience.description
                        } : obj))
                      })} />
                    <label htmlFor="experience_start" className="form__label">Experience start date</label>
                  </div>
                  <div className="form__group field">
                    <input type="date" name="experience_end" className="form__field" value={experience.end} onChange={e =>
                      setCandidat({
                        ...candidat, experience: candidat.experience.map(obj =>
                        (obj.id === experience.id ? obj = {
                          organization: experience.organization,
                          position: experience.position,
                          start: experience.start,
                          end: e.target.value,
                          description: experience.description
                        } : obj))
                      })} />
                    <label htmlFor="experience_end" className="form__label">Experience end date</label>
                  </div>
                  <div className="form__group field">
                    <input type="text" name="experience_description" className="form__field" value={experience.description} onChange={e =>
                      setCandidat({
                        ...candidat, experience: candidat.experience.map(obj =>
                        (obj.id === experience.id ? obj = {
                          organization: experience.organization,
                          position: experience.position,
                          start: experience.start,
                          end: experience.end,
                          description: e.target.value,
                        } : obj))
                      })} />
                    <label htmlFor="experience_description" className="form__label">Experience description</label>
                  </div>
                </li>
              }
              )}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <ul>
              {candidat.skill_set?.map((skill_set) => {
                return <li key={index++}>
                  <div className="form__group field">
                    <input type="text" name="skill_set" className="form__field" value={skill_set} onChange={e =>
                      setCandidat({
                        ...candidat, skill_set: candidat.skill_set.map(obj =>
                          (obj.id === skill_set.id ? obj = e.target.value : obj))
                      })} />
                    <label htmlFor="skill_set" className="form__label">Skill set</label>
                  </div>
                </li>
              })}
            </ul>
          </div>
          <div style={{ display: "flex", gap: "20px" }} className="personal-info-card">
            <div className="form__group field">
              <textarea name="candidat_skills" className="form__field" cols="90" rows="3" value={candidat.skills} onChange={e =>
                setCandidat({ ...candidat, skills: e.target.value })}></textarea>
              <label htmlFor="candidat_skills" className="form__label">Skills</label>
            </div>
          </div>
          <p className="card-title">{candidat.rejection}</p>
        </div>
        <button className="button-36" role="button" type="submit">Save changes</button>
      </form>
    </div>
  )
}