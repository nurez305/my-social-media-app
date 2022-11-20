import { useContext } from 'react';
import { AuthContext } from '../../context/authContext';
import './stories.scss'

function Stories() {
  const {currentUser} = useContext(AuthContext);
  //Dummy data for now
  const stories = [
    {
      id: 1,
      name: "John doe",
      img : "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 2,
      name: "John doe",
      img : "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 3,
      name: "John doe",
      img : "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    {
      id: 4,
      name: "John doe",
      img : "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
    },
    
  ]
  return (
    <div className='stories'>
      <div className="story">
          <img src={currentUser.profilePics} alt="" />
          <span>{currentUser.name}</span>
          <button>+</button>
        </div>
      {stories.map(story=>(
        <div className="story">
          <img src={story.img} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}

export default Stories
