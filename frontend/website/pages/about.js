import { Component } from "react"

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from "../components/headMetaData.js"

export default class extends Component {
  render () {
    return (
      <div className="layout-wrapper">
        <HeadMetaData
          title="About Me | Coding Blog"
          metaDescription="Nick Major is a full stack software developer that also writes about modern NodeJS and JavaScript."
        />
        <Header />
        <div className="about-container">
            <h1>Under Construction</h1>
        </div>
        <Footer />
      </div>
    )
  }
}