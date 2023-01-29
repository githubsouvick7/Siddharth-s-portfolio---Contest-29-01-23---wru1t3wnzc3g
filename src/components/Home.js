import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { Link } from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div id='home-page'>

            <h1>Home page</h1>
            <h2>Hi, my name is Siddharth </h2>
            <h2>and I work at <a href="https://www.newtonschool.co/">Newton School</a></h2>
            <button id="home-to-blog" onClick={() => navigate('/blog')}> Go to Blog</button>
            <button id="home-to-info" onClick={() => navigate('/info')}> Go to Info</button>

        </div>
    )
}
export default Home
