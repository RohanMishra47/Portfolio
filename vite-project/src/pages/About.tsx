import PageTransition from "../components/PageTransition";

const About: React.FC = () => {
    return(
        <PageTransition>
            <div>
            <h1>I'm a Freelance Web Developer.</h1>
            <h2>I've experience in the following fields</h2>
            <ul>
                <li style={{fontSize: "20px"}}>HTML, CSS, and JavaScript</li>
                <li style={{fontSize: "20px"}}>React.js</li>
                <li style={{fontSize: "20px"}}>Next.js</li>
            </ul>
        </div>
        </PageTransition>
    );
};

export default About;