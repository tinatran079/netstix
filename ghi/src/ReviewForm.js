import { useEffect, useState } from 'react';
import { useToken } from './auth';

const ReviewForm = () => {
  const  [token]  = useToken()
  // #console.log(token.access_token)
  const [formData, setFormData] = useState({
    subject: '',
    description: '',
    account_id:5,
    game_id:3796,
    game_title:'test',

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
    console.log(token)
    const ReviewUrl = 'http://localhost:8000/api/reviews';
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
    };

    const response = await fetch(ReviewUrl, fetchConfig);
    if (response.ok) {
      const newReview = await response.json();
      console.log(newReview);
      setFormData({
        title: '',
        body: '',
        account_id:'',
        game_id:'',
        game_title:'',
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
              <input onChange={handleFormChange} value={formData.subject} placeholder="Review Title" required type="text" name="subject" className="form-control" />
              <label htmlFor="subject">Title</label>
            </div>

            <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.description} placeholder="Leave a review!" required type="text" name="description" className="form-control" />
              <label htmlFor="description">description</label>
            </div>
              <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.account_id} placeholder="Leave!" required type="number" name="Account Id" className="form-control" />
              <label htmlFor="Account Id">Account Id</label>
            </div>

  <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.game_id} placeholder="Lea a review!" required type="number" name="Game Id" className="form-control" />
              <label htmlFor="game_id">Game Id</label>
            </div>

  <div className="form-floating mb-3">
              <input onChange={handleFormChange} value={formData.game_title} placeholder="!" required type="text" name="Game Title" className="form-control" />
              <label htmlFor="game_title">Game Title</label>
            </div>


            <button className="btn btn-dark">Create</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ReviewForm;
