import "../../public/css/Form.scss"

export function NewCandidateForm({ addCandidate, parseCandidate, setGender, gender, language_level, setLanguage_level, setEducation_level, education_level, parsedCandidat, id }) {

  function handleParse(e) {
    e.preventDefault();
    let dataToSend = {
      resume_link: e.target.resume_link.value
    };
    parseCandidate(dataToSend)
  }

  function handleFetch(e) {
    const objectToSend = {
      id: id,
      state: {
        state: "Ожидание рассмотрения"
      },
      personal_name: e.target.name.value,
      contacts: {
        email: e.target.email.value,
        phone: e.target.phone.value
      },
      birth_date: e.target.birth_date.value,
      gender: gender,
      area: e.target.area.value,
      title: e.target.post.value,
      specialization: [{
        name: e.target.specialization.value,
        profarea_name: "Специализации:"
      }],
      salary: {
        amount: e.target.salary.value,
        currency: "₽ на руки"
      },
      education_level: education_level,
      education: [{
        name: e.target.education_name.value,
        year: e.target.education_year.value,
        organization: e.target.education_organization.value
      }],
      language: [{
        name: e.target.language_name.value,
        level: language_level
      }],
      experience: [{
        end: e.target.experience_end.value,
        start: e.target.experience_start.value,
        position: e.target.experience_position.value,
        description: e.target.experience_description.value,
        organization: e.target.experience_organization.value,
      }],
      skill_set: [e.target.skill_set.value],
      skills: e.target.skills.value
    }
    console.log(`ObjectToSend: ${objectToSend}`)
    addCandidate(objectToSend)
  }

  return (
    <>
      <div className="formContainer">
        <form className="candidatForm" onSubmit={handleFetch}>
          <div className="inputContainerGroup">
            <div className="inputContainer">
              <div className="form__group field">
                <input type="text" name="name" className="form__field" placeholder="Name" defaultValue={parsedCandidat.personal_name} required />
                <label htmlFor="name" className="form__label">Name</label>
              </div>
              <div className="form__group field">
                <select name="gender" id="greyText" className="form__field" value={gender} onChange={e => setGender(e.target.value)} required>
                  <option hidden value="">Your Gender</option>
                  <option value="Мужчина">Мужчина</option>
                  <option value="Женщина">Женщина</option>
                  <option value="Ламинат">Ламинат</option>
                </select>
                <label htmlFor="gender" className="form__label">Gender</label>
              </div>
              <div className="form__group field">
                <input type="email" name="email" className="form__field" placeholder="email" defaultValue={parsedCandidat.contacts.email} required />
                <label htmlFor="email" className="form__label">Email</label>
              </div>
              <div className="form__group field">
                <input type="phone" name="phone" className="form__field" placeholder="phone" defaultValue={parsedCandidat.contacts.phone} required />
                <label htmlFor="phone" className="form__label">Phone</label>
              </div>
              <div className="form__group field">
                <input type="date" name="birth_date" id="date" className="form__field" defaultValue={parsedCandidat.birth_date} required />
                <label htmlFor="birth_date" className="form__label">Birth date</label>
              </div>
              <div className="form__group field">
                <input type="text" name="area" className="form__field" placeholder="Area" defaultValue={parsedCandidat.area} />
                <label htmlFor="area" className="form__label">Area</label>
              </div>
            </div>
            <div className="inputContainer">
              <div className="form__group field">
                <input type="date" name="experience_start" id="date" className="form__field" defaultValue={parsedCandidat.experience[0].start} />
                <label htmlFor="experience_start" className="form__label">Eperience Start Date</label>
              </div>
              <div className="form__group field">
                <input type="date" name="experience_end" id="date" className="form__field" defaultValue={parsedCandidat.experience[0].end} />
                <label htmlFor="experience_end" className="form__label">Eperience End Date</label>
              </div>
              <div className="form__group field">
                <input type="text" name="experience_position" className="form__field" placeholder="experience_position" defaultValue={parsedCandidat.experience[0].position} />
                <label htmlFor="experience_position" className="form__label">Eperience Position</label>
              </div>
              <div className="form__group field">
                <input type="text" name="experience_organization" className="form__field" placeholder="experience_organization" defaultValue={parsedCandidat.experience[0].organization} />
                <label htmlFor="experience_organization" className="form__label">Eperience Organization</label>
              </div>
              <div className="form__group field">
                <input type="text" name="experience_description" className="form__field" placeholder="experience_description" defaultValue={parsedCandidat.experience[0].description} />
                <label htmlFor="experience_description" className="form__label">Eperience Description</label>
              </div>
            </div>
            <div className="inputContainer">
              <div className="form__group field">
                <select name="education_level" id="greyText" className="form__field" value={education_level} onChange={e => setEducation_level(e.target.value)}>
                  <option hidden value="">Your Education Level</option>
                  <option value="Среднее образование">Среднее образование</option>
                  <option value="Среднее специальное образование">Среднее специальное образование</option>
                  <option value="Неоконченное высшее образование">Неоконченное высшее образование</option>
                  <option value="Высшее образование">Высшее образование</option>
                  <option value="Бакалавр">Бакалавр</option>
                  <option value="Магистр">Магистр</option>
                  <option value="Кандидат наук">Кандидат наук</option>
                  <option value="Доктор наук">Доктор наук</option>
                </select>
                <label htmlFor="education_level" className="form__label">Education Level</label>
              </div>
              <div className="form__group field">
                <input type="text" name="education_name" className="form__field" placeholder="education_name" defaultValue={parsedCandidat.education[0].name} />
                <label htmlFor="education_name" className="form__label">Education Name</label>
              </div>
              <div className="form__group field">
                <input type="number" min="1900" max="2099" step="1" name="education_year" className="form__field" placeholder="education_name" defaultValue={parsedCandidat.education[0].year} />
                <label htmlFor="education_year" className="form__label">Education Year</label>
              </div>
              <div className="form__group field">
                <input type="text" name="education_organization" className="form__field" placeholder="education_organization" defaultValue={parsedCandidat.education[0].organization} />
                <label htmlFor="education_organization" className="form__label">Education Organization</label>
              </div>
            </div>
            <div className="inputContainer">
              <div className="form__group field">
                <input type="text" name="specialization" className="form__field" placeholder="specialization" defaultValue={parsedCandidat.specialization.name} />
                <label htmlFor="specialization" className="form__label">Specialization</label>
              </div>
              <div className="form__group field">
                <input type="text" name="post" className="form__field" placeholder="post" defaultValue={parsedCandidat.title} />
                <label htmlFor="post" className="form__label">Post</label>
              </div>
              <div className="form__group field">
                <input type="text" name="salary" className="form__field" placeholder="salary" defaultValue={parsedCandidat.salary.amount} />
                <label htmlFor="salary" className="form__label">Salary</label>
              </div>
            </div>
            <div className="inputContainer">
              <div className="form__group field">
                <input type="text" name="language_name" className="form__field" placeholder="language_name" defaultValue={parsedCandidat.language[0].name} />
                <label htmlFor="language_name" className="form__label">Language Name</label>
              </div>
              <div className="form__group field">
                <select name="language_level" id="greyText" className="form__field" value={language_level} onChange={e => setLanguage_level(e.target.value)}>
                  <option hidden value="">Your Language Level</option>
                  <option value="A1 - Начальный">A1 - Начальный</option>
                  <option value="A2 - Элементарный">A2 - Элементарный</option>
                  <option value="B1 - Средний">B1 - Средний</option>
                  <option value="B2 - Средне-продвинутый">B2 - Средне-продвинутый</option>
                  <option value="C1 - Продвинутый">C1 - Продвинутый</option>
                  <option value="C2 - В совершенстве">C2 - В совершенстве</option>
                  <option value="Родной">Родной</option>
                </select>
                <label htmlFor="language_level" className="form__label">Language Level</label>
              </div>
            </div>
            <div className="inputContainer">
              <div className="form__group field">
                <input type="text" name="skill_set" className="form__field" placeholder="skill_set" defaultValue={parsedCandidat.skill_set[0]} />
                <label htmlFor="skill_set" className="form__label">Skill Set</label>
              </div>
              <div className="form__group field">
                <input type="text" name="skills" className="form__field" placeholder="skills" defaultValue={parsedCandidat.skills} />
                <label htmlFor="skills" className="form__label">Skills</label>
              </div>
            </div>
          </div>
          <button className="button-36" role="button" type="submit">Add new Candidate</button>
        </form>
        <form className="fetchForm" onSubmit={handleParse}>
          <div className="form__group field">
            <input type="url" name="resume_link" id="resume_link" className="form__field" placeholder="resume_link" required />
            <label htmlFor="resume_link" className="form__label">Link to Parse</label>
          </div>
          <button className="button-36" role="button" id="resume_link_button" type="submit">Parse Candidate</button>
        </form>
      </div>
    </>
  )
}