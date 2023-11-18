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
        <input required type="text" name="name" />
        <input required type="text" name="post" />
        <input required type="phone" name="phone" />
        <input required type="email" name="email" />
        <button type="submit">Add</button>
      </form>
    </>
  )
}