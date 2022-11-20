import Post from '../post/Post'
import './posts.scss'

function Posts() {
  //dummy data
  const posts = [
    {
      id : 1,
      name: "john doe",
      userId: 1,
      profilePic : "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis?",
      img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
  },
  {
    id : 2,
    name: "john doe",
    userId: 2,
    profilePic : "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
    desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis?",
    img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
},
{
  id : 3,
  name: "john doe",
  userId: 3,
  profilePic : "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600",
  desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, facilis?",
  img: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?auto=compress&cs=tinysrgb&w=1600"
},
  ]
  return (
    <div className='posts'>
      {posts.map(post=>(
        <Post post={post} key={post.id}/>
      ))}

    </div>
  )
}

export default Posts