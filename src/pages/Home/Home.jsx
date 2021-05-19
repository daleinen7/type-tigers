import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="homepage">
            <div>
                <h2>The best way to improve your spelling</h2>
                <p>Hey! This is the place for your kids to improve their spelling. We offer amazing spelling challenges, and incentives to stay motivated.</p>
            <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621450699/hugo-284_4_vkueup.svg' height="180" width="auto" alt="Hugo logo"/>
            <button>Login</button>
            <button>Sign Up</button></div>
        <div>
                <h2>We offer different grade level difficulties</h2>
                <p>Bearcabulary offers games for kindergarten through 6th grade students. Each game incorporates interactive stories and fun quizzes for your child to have an educational adventure!</p>
                <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621385820/hugo-list-is-empty_z1tsn1.svg' height="200" width="auto" alt="pencil clipboard" />
            </div>
            <div>
                <h2>Step-by-Step Learning Path</h2>
                <p>Each step of the way your child will learn to spell 10 new sight words for their everyday use! They’ll learn it in the game and then immediately be able to apply them to their daily conversation!</p>
                <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621451375/Letter_Matching_xlc2n0.svg' height="200" width="auto" alt="spelling page" />
            </div>
            <div>
                <h2>Progress tracking</h2>
                <p>Each step of the way your child will learn to spell 10 new sight words for their everyday use! They’ll learn it in the game and then immediately be able to apply them to their daily conversation!</p>
                <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621451752/Group_375_p2sahj.svg' height="200" width="auto" alt="spelling page" />
            </div>
            <div>
                <h2>Customizable Avatar</h2>
                <p>You will be able to track your child's learning progress with grade levels, a progress tracker, and information about words they have learned and stories they have read.</p>
                <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621451752/Group_375_p2sahj.svg' height="200" width="auto" alt="tracker dashboard" />
            </div>
        </div>
    )
}

export default Home
