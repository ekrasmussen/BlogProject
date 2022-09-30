import { Component } from 'react'

import Header from "../components/header.js"
import Footer from "../components/footer.js"
import HeadMetaData from '../components/headMetaData.js'

export default class extends Component {
    static getInitialProps({ req, res, err}) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null

        return {
            statusCode: statusCode
        }
    }

    render() {
        return(
            <div className="layout-wrapper">
                <HeadMetaData
                    title="Error | Coding Blog"
                />
                <Header />
                <div className="error-container">
                    {
                        this.props.statusCode === 404 ?
                        <>
                            <h1>404 Page not found</h1>
                            <p>We cant seem to find the page youre looking for</p>
                        </> :
                        <>
                            <h1>An error Occurred</h1>
                            <p>An error occurred when trying to fulfill your request. Please try reloading</p>
                        </>
                    }
                </div>
                <Footer />
            </div>
        )
    }
}