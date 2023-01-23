import { useEffect, useState } from 'react';

const ReviewForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  })

  const id = 1

  const [games, setgames] = useState([])

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(`http://localhost:8000/api/games/${id}`);


      if (response.ok) {
        const data = await response.json();
        setgames(data.response);
      } else {
        console.log("Error");
      }
    }

    loadData()
  }, [])

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
    console.log(formData)
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const ReviewUrl = 'http://localhost:8000/api/reviews';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await fetch(ReviewUrl, fetchConfig);
    if (response.ok) {
      const newReview = await response.json();
      console.log(newReview);
      setFormData({
        title: '',
        body: '',
      });
    }
  }
return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new Review</h1>
          <form onSubmit={handleSubmit} id="create-Review-form">

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.title} placeholder="Review Title" required type="text" name="title" className="form-control" />
              <label htmlFor="title">Title</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.body} placeholder="Leave a review!" required type="text" name="body" className="form-control" />
              <label htmlFor="body">Body</label>
            </div>

            <button className="btn btn-dark">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm;
