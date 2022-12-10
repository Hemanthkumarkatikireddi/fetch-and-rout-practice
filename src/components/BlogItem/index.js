// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {details} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = details

  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item-container">
        <div>
          <img className="img-item" src={imageUrl} alt={`item${id}`} />
        </div>
        <div className="description">
          <p className="react">{topic}</p>
          <p className="title-name">{title}</p>

          <div className="author-container">
            <img className="img-logo" src={avatarUrl} alt={`avatar${id}`} />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
