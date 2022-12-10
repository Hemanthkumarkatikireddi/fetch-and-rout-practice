// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount = () => {
    this.getBlog()
  }

  getBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const blogs = await response.json()
    const updateBlog = {
      id: blogs.id,
      imageUrl: blogs.image_url,
      avatarUrl: blogs.avatar_url,
      title: blogs.title,
      topic: blogs.topic,
      content: blogs.content,
      author: blogs.author,
    }
    this.setState({blogData: updateBlog, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {imageUrl, avatarUrl, content, topic, author, title} = blogData
    return (
      <div className="blog-item-details">
        {isLoading ? (
          <div testid="loader">
            <Loader
              className="loader"
              type="TailSpin"
              color="blue"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div>
            <p className="title-name title">{title}</p>
            <div className="author-container">
              <img className="img-logo" src={avatarUrl} alt={author} />
              <p className="author-name">{author}</p>
            </div>
            <div className="img">
              <img className="img-item2" src={imageUrl} alt={title} />
            </div>
            <div className="content">
              <p>{content}</p>
            </div>

            <p>{topic}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
