import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetaData.js"
import getFiveNewestPosts from "../api/getFiveNewestPosts.js"

export default class extends Component {
    static async getInitialProps() {
        const apiResult = await getFiveNewestPosts()

        return {
            posts: apiResult && apiResult.posts
        }
    }
    
    render() {
        return(
            <div className="layout-wrapper">
                <HeadMetaData
                    title="Coding Blog"
                    metaDescription="Emil Rasmussen is a student studying to become a full stack software developer" />
                <Header />
                <div className="homepage-container">
                    <div className="homepage-introduction">
                    <h1>Hello! This is a test of a blog using the MERN stack!</h1>
                    <p>and this is a paragraph</p>
                    </div>

                    <div className="homepage-latest-blog-posts">
                        {
                            this.props.posts ?
                            this.props.posts.map((post, index) => {
                                return(
                                    <a key={index} href={`/blog/${post.urlTitle}`}>
                                        <div className="homepage-latest-blog-post">
                                            <div className="homepage-latest-thumbnail">
                                                <img src={post.thumbnailImageUrl} />
                                            </div>
                                            <div className="homepage-latest-blog-post-title">
                                                <h3>{post.title}</h3>
                                            </div>
                                        </div>
                                    </a>
                                )
                            }) : null
                        }
                    </div>
                    <div className="homepage-projects">
                        <h2>My Projects</h2>
                        <div className="homepage-projects-list">
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/discourse/discourse">
                                        <div className="homepage-project-icon">📞</div>
                                        <div className="homepage-project-title">Discourse</div>
                                    </a>
                                </h3>
                                <p>A test platform</p>
                                <div className="homepage-projects-btns">
                                    <a className="homepage-project-view-btns" href="https://github.com/discourse/discourse">View</a>
                                </div>
                            </div>
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/discourse/discourse">
                                        <div className="homepage-project-icon">📞</div>
                                        <div className="homepage-project-title">Discourse</div>
                                    </a>
                                </h3>
                                <p>A test platform</p>
                                <div className="homepage-projects-btns">
                                    <a className="homepage-project-view-btns" href="https://github.com/discourse/discourse">View</a>
                                </div>
                            </div>
                            <div className="homepage-project">
                                <h3>
                                    <a href="https://github.com/discourse/discourse">
                                        <div className="homepage-project-icon">📞</div>
                                        <div className="homepage-project-title">Discourse</div>
                                    </a>
                                </h3>
                                <p>A test platform</p>
                                <div className="homepage-projects-btns">
                                    <a className="homepage-project-view-btns" href="https://github.com/discourse/discourse">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}