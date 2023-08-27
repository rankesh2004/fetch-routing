import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, imageUrl, topic, title, avatarUrl, author} = blogData
  console.log(blogData)
  return (
    <Link to={`/blogs/${id}`} className="blog-route">
      <div className="course-detail-container">
        <div>
          <img src={imageUrl} alt={topic} className="course-img" />
        </div>
        <div className="course-details">
          <p className="topic">{topic}</p>
          <p className="title">{title}</p>
          <div className="author-container">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar-img" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
