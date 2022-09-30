import { Component } from "react"

export default class extends Component {
    render() {
        return(
            <footer className="footer-wrapper">
                <div className="footer-links">
                    <a href="/blog">Blog</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
                <div className="footer-bottom-msg">
                    <p>My first time attempting to build a proper MERN application, work for my portfolio</p>
                </div>
            </footer>
        )
    }
}