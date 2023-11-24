import "../../public/css/Form.scss"

export function NewCandidateForm({ addCandidate }) {

  function handleSubmit(e) {
    e.preventDefault()
    const name = e.target.name.value
    const post = e.target.post.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    addCandidate(name, post, phone, email)

    e.target.name.value = ""
    e.target.post.value = ""
    e.target.phone.value = ""
    e.target.email.value = ""
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
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
      </form>
    </>
  )
}