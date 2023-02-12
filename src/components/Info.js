import React from "react";
import { useHistory } from "react-router-dom";

const Info = () => {
    const navigate = useHistory()
    return (
        <div id="info-page">
            <h1> Info page </h1>
            <h2>I am born in India</h2>
            <h2>and I like to play Cricket </h2>
            <button id="info-to-blog" onClick={() => navigate.push('/blog')}> Go to Blog</button>
            <button id="info-to-home" onClick={() => navigate.push('/')}> Go to Home</button>
        </div>
    )
}
export default Info