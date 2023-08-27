import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))
    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="list-container">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          blogData.map(eachItem => (
            <BlogItem blogData={eachItem} key={eachItem.id} />
          ))
        )}
      </div>
    )
  }
}
export default BlogList
