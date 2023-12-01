import "../../public/css/Form.scss"

export function NewCandidateForm({ addCandidate, id }) {

  // function handleSubmit(e) {
  //   // e.preventDefault()
  //   const name = e.target.name.value
  //   const post = e.target.post.value
  //   const phone = e.target.phone.value
  //   const email = e.target.email.value
  //   addCandidate(name, post, phone, email)

  //   e.target.name.value = ""
  //   e.target.post.value = ""
  //   e.target.phone.value = ""
  //   e.target.email.value = ""
  // }

  function handleFetch(e) {
    e.preventDefault()
    const objectToSend = {
      id: id,
      state: {
        state:"Ожидание рассмотрения"
      },
      name: e.target.name.value,
      contacts: {
        email: e.target.email.value,
        phone: e.target.phone.value
      },
      birth_date: e.target.birth_date.value,
      gender: e.target.gender.value,
      area: e.target.area.value,
      post: e.target.post.value,
      specialization: {
        name: e.target.specialization.value,
        profarea_name: "Специализации:"
      },
      salary: {
        amount: e.target.salary.value,
        currency: "₽ на руки"
      },
      education_level: e.target.education_level.value,
      education: {
        name: e.target.education_name.value,
        year: e.target.education_year.value,
        organization: e.target.education_organization.value
      },
      language: [{
        name: e.target.language_name.value,
        level: e.target.language_level.value
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
      {/* <form onSubmit={handleSubmit} method="post" action="http://localhost:3000/resume/">
        <div className="input-container">
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Name" name="name" id='name' required />
          <label htmlFor="name" className="form__label">Name</label>
        </div>
        <div className="form__group field">
          <input type="input" className="form__field" placeholder="Post" name="post" id='post' required />
          <label htmlFor="Post" className="form__label">Post</label>
        </div>
        <div className="form__group field">
          <input type="phone" className="form__field" placeholder="Phone" name="phone" id='phone' required />
          <label htmlFor="Phone" className="form__label">Phone</label>
        </div>
        <div className="form__group field">
          <input type="email" className="form__field" placeholder="Email" name="email" id='email' required />
          <label htmlFor="Email" className="form__label">Email</label>
        </div>
        </div>        
        <button className="button-36" role="button" type="submit">Add new Candidate</button>
      </form> */}
      <form onSubmit={handleFetch}>
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <input type="phone" name="phone" required />
        <input type="date" name="birth_date" />
        <select name="gender" id="gender">
          <option hidden value="">Ваш пол</option>
          <option value="Мужчина">Мужчина</option>
          <option value="Женщина">Женщина</option>
          <option value="Ламинат">Ламинат</option>
        </select>
        <input type="text" name="specialization"/>
        <input type="text" name="area"/>
        <input type="text" name="post"/>
        <input type="text" name="salary"/>
        <select name="education_level" id="education_level">
          <option hidden value="">Ваш уровень образования</option>
          <option value="Среднее">Среднее</option>
          <option value="Среднее специальное">Среднее специальное</option>
          <option value="Неоконченное высшее">Неоконченное высшее</option>
          <option value="Высшее">Высшее</option>
          <option value="Бакалавр">Бакалавр</option>
          <option value="Магистр">Магистр</option>
          <option value="Кандидат наук">Кандидат наук</option>
          <option value="Доктор наук">Доктор наук</option>
        </select>
        <input type="text" name="education_name"/>
        <input type="number" min="1900" max="2099" step="1" name="education_year"/>
        <input type="text" name="education_organization"/>
        <input type="text" name="language_name"/>
        <select name="language_level" id="language_level">
          <option hidden value="">Ваш уровень языка</option>
          <option value="A1 - Начальный">A1 - Начальный</option>
          <option value="A2 - Элементарный">A2 - Элементарный</option>
          <option value="B1 - Средний">B1 - Средний</option>
          <option value="B2 - Средне-продвинутый">B2 - Средне-продвинутый</option>
          <option value="C1 - Продвинутый">C1 - Продвинутый</option>
          <option value="C2 - В совершенстве">C2 - В совершенстве</option>
        </select>
        <input type="date" name="experience_start" />
        <input type="date" name="experience_end" />
        <input type="text" name="experience_position"/>
        <input type="text" name="experience_organization"/>
        <input type="text" name="experience_description"/>
        <input type="text" name="skill_set"/>
        <input type="text" name="skills"/>
        <button className="button-36" role="button" type="submit">Add new Candidate</button>
      </form>
    </>
  )
}