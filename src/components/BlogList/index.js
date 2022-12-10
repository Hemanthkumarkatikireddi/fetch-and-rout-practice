// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import BlogItem from '../BlogItem'

import './index.css'

class BlogsList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount = () => {
    this.getBlogList()
  }

  getBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogDetails = await response.json()

    const updateBlogList = blogDetails.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))
    this.setState({blogList: updateBlogList, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <ul className="blogList-container">
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
          blogList.map(each => <BlogItem key={each.id} details={each} />)
        )}
      </ul>
    )
  }
}

export default BlogsList
