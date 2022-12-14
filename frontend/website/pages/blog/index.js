import { Component } from 'react'
import moment from "moment"

import Header from "../../components/header.js"
import Footer from "../../components/footer.js"
import HeadMetaData from '../../components/headMetaData.js'
import getAllBlogPosts from '../../api/getAllBlogPosts.js'

export default class extends Component {

  static async getInitialProps() {
    const apiResult = await getAllBlogPosts()

    return {
      posts: apiResult && apiResult.posts,
      getDataError: apiResult && apiResult.getDataError
    }
  }

    render () {
      return (
        <div className="layout-wrapper">
          <HeadMetaData
            title="Coding Blog"
            metaDescription="Emil Rasmussen is a student studying to become a full stack software developer" />

          <Header />
          <div className="blog-posts-container">
            <h1>Blog posts</h1>
            <div className="blog-posts-list">
              {
                this.props.posts ?
                this.props.posts.map((post, index) => {
                  return(
                    <a key={index} href={`/blog/${post.urlTitle}`}>
                      <div className='blog-posts-list-item'>
                        <div className='blog-posts-thumbnail'>
                          <img src={post.thumbnailImageUrl} />
                        </div>
                        <div className='blog-posts-list-item-title-and-date'>
                          <h2>{post.title}</h2>
                          <div className='blog-posts-list-item-date'>
                            <span>{moment.unix(post.dateTimestamp).format("MMMM Do, YYYY")}</span>
                          </div>
                        </div>
                      </div>
                    </a>
                  )
                }) : 
                <div className="blog-posts-get-data-error-msg">
                  <span>An error occurred.</span>
                  </div>
              }
            </div>
          </div>
          <Footer />
        </div>
      )
    }
  }