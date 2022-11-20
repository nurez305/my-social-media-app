import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import './comments.scss'

function Comments() {
  const {currentUser} = useContext(AuthContext)
  //dummy data

  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, velit?",
      name: "john doe",
      userId: 1,
      profilePics: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, velit?",
      name: "john doe",
      userId: 2,
      profilePics: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, velit?",
      name: "john doe",
      userId: 3,
      profilePics: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ]

  return (
    <div className='comments'>
      <div className="write">
        <img src={currentUser.profilePics} alt="" />
        <input type="text" placeholder='write a comment...'/>
        <button>send</button>
      </div>
      {comments.map(comment=>(
        <div className="comment" key={comment.id}>
          <img src={comment.profilePics} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className='date'>1 hour ago</span>
        </div>
      ))}
    </div>
  )
}

export default Comments