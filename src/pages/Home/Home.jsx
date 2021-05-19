import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className="body">
            <div className="row">
                <div className="text-column"><h2>The best way to improve your spelling</h2>
                <p>Hey! This is the place for your kids to improve their spelling. We offer amazing spelling challenges, and incentives to stay motivated.</p></div>
            <div className="img-column"> <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621450699/hugo-284_4_vkueup.svg' height="200" width="auto" alt="Hugo logo"/></div>
            </div>
            <div className="row">
                <div className="button-column">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>
            </div>
        <div className="row">
                <div className="img-column"><img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621458446/grade-levels.svg' height="200" width="auto" alt="pencil clipboard" /></div><div className="text-column"><h2>We offer different grade level difficulties</h2>
                <p>Bearcabulary offers games for kindergarten through 6th grade students. Each game incorporates interactive stories and fun quizzes for your child to have an educational adventure!</p></div>
                
            </div>
        <div className="row">
                <div className="text-column"><h2>Step-by-Step Learning Path</h2>
                <p>Each step of the way your child will learn to spell 10 new sight words for their everyday use! They’ll learn it in the game and then immediately be able to apply them to their daily conversation!</p></div>
                <div className="img-column"><img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621451375/Letter_Matching_xlc2n0.svg' height="200" width="auto" alt="spelling page" /></div>
            </div>
        <div className="row">
                <div className="img-column"><img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621458466/progress-tracker.svg' height="200" width="auto" alt="spelling page" /></div><div className="text-column"><h2>Progress tracking</h2>
                <p>Each step of the way your child will learn to spell 10 new sight words for their everyday use! They’ll learn it in the game and then immediately be able to apply them to their daily conversation!</p></div>
                
            </div>
        <div className="row">
                <div className="text-column"><h2>Customizable Avatar</h2>
                <p>Your child will be able to choose their animal avatar and customize it according to features and accessories available in the shop. Your child will be able to earn coins based on correct answers as they spell new words.</p></div>
                <div className="img-column"><img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621453684/Group_376_i8cira.svg' height="200" width="50%" alt="avatars" />
                <img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621453688/Group_377_jkvsl6.svg' height="200" width="50%" alt="shop" /></div>
            </div>
         <div className="row">
                <div className="img-column"><img src='https://res.cloudinary.com/dsfqk4cg8/image/upload/v1621454325/responsive-website.svg' height="200" width="auto" alt="learn anywhere" /></div>
                <div className="text-column"><h2>Learn Anywhere</h2>
                <p>Traveling on vacation? Taking your child to school? Sitting at home on the couch? No matter where you are, if you have an internet connection and a device with a browser, your child can progress in their learning.</p></div>
                

            </div>
        </div>
    )
}

export default Home
