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
      <form className="fetchForm" onSubmit={handleParse}>
        <input type="url" name="resume_link" required />
        <button className="button-36" role="button" type="submit">Parse Candidate</button>
      </form>
      <form onSubmit={handleFetch}>
        <input type="text" name="name" defaultValue={parsedCandidat.personal_name} required />
        <input type="email" name="email" defaultValue={parsedCandidat.contacts.email} required />
        <input type="phone" name="phone" defaultValue={parsedCandidat.contacts.phone} required />
        <input type="date" name="birth_date" defaultValue={parsedCandidat.birth_date} required />
        <select name="gender" id="gender" value={gender} onChange={e => setGender(e.target.value)} required>
          <option hidden value="">Ваш пол</option>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
          <option value="Ламинат">Ламинат</option>
        </select>
        <input type="text" name="specialization" defaultValue={parsedCandidat.specialization.name} />
        <input type="text" name="area" defaultValue={parsedCandidat.area} />
        <input type="text" name="post" defaultValue={parsedCandidat.title} />
        <input type="text" name="salary" defaultValue={parsedCandidat.salary.amount} />
        <select name="education_level" id="education_level" value={education_level} onChange={e => setEducation_level(e.target.value)}>
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
        <input type="text" name="education_name" defaultValue={parsedCandidat.education[0].name} />
        <input type="number" min="1900" max="2099" step="1" name="education_year" defaultValue={parsedCandidat.education[0].year} />
        <input type="text" name="education_organization" defaultValue={parsedCandidat.education[0].organization} />
        <input type="text" name="language_name" defaultValue={parsedCandidat.language[0].name} />
        <select name="language_level" id="language_level" value={language_level} onChange={e => setLanguage_level(e.target.value)}>
          <option hidden value="">Ваш уровень языка</option>
          <option value="A1 - Начальный">A1 - Начальный</option>
          <option value="A2 - Элементарный">A2 - Элементарный</option>
          <option value="B1 - Средний">B1 - Средний</option>
          <option value="B2 - Средне-продвинутый">B2 - Средне-продвинутый</option>
          <option value="C1 - Продвинутый">C1 - Продвинутый</option>
          <option value="C2 - В совершенстве">C2 - В совершенстве</option>
          <option value="Родной">Родной</option>
        </select>
        <input type="date" name="experience_start" defaultValue={parsedCandidat.experience[0].start} />
        <input type="date" name="experience_end" defaultValue={parsedCandidat.experience[0].end} />
        <input type="text" name="experience_position" defaultValue={parsedCandidat.experience[0].position} />
        <input type="text" name="experience_organization" defaultValue={parsedCandidat.experience[0].organization} />
        <input type="text" name="experience_description" defaultValue={parsedCandidat.experience[0].description} />
        <input type="text" name="skill_set" defaultValue={parsedCandidat.skill_set[0]} />
        <input type="text" name="skills" defaultValue={parsedCandidat.skills} />
        <button className="button-36" role="button" type="submit">Add new Candidate</button>
      </form>
    </>
  )
}