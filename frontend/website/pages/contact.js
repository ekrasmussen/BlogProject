import { Component } from 'react'

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from '../components/headMetaData.js'

export default class extends Component {
    render() {
        return(
            <div className="layout-wrapper">
                <HeadMetaData
                title="Contact | Coding Blog"
                metaDescription="If you have any comments, ideas, critiques, or you just want to say hi, you can contact me via email or the links listed below."
                />
                <Header />
                <div className="contact-container">
                    <div className="contact-section">
                        <h1>Contact</h1>
                        <p>i promise ill finish a contact page when i make the real thing</p>
                    </div>
                    <div className="contact-section">
                        <h2>Around the web</h2>
                        <ul>
                            <li><strong>Email</strong>: nyker.emil@gmail.com</li>
                            <li><strong>Github</strong>: <a href="https://github.com">Githubbies</a></li>
                            <li><strong>Twitter</strong>: <a href="https://twitter.com">Twitties</a></li>
                            <li><strong>Linkedin</strong>: <a href="https://linkedin.com">Linkedinnies</a></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}