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
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Name" name="name" id='name' required />
          <label for="name" class="form__label">Name</label>
        </div>
        <div class="form__group field">
          <input type="input" class="form__field" placeholder="Post" name="post" id='post' required />
          <label for="Post" class="form__label">Post</label>
        </div>
        <div class="form__group field">
          <input type="phone" class="form__field" placeholder="Phone" name="phone" id='phone' required />
          <label for="Phone" class="form__label">Phone</label>
        </div>
        <div class="form__group field">
          <input type="email" class="form__field" placeholder="Email" name="email" id='email' required />
          <label for="Email" class="form__label">Email</label>
        </div>
        </div>        
        <button class="button-36" role="button" type="submit">Add new Candidate</button>
      </form>
    </>
  )
}