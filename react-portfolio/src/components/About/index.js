import { Link } from 'react-router-dom'
import './index.scss'

const About = () => {
  return (
    <div className='container home-page'>
        <img src="self.jpeg" alt="self"></img>
        <div className='text-zone'>
            <h1> Hi, <br />
            I'm Mateo
            <br />
            </h1>
            <h2> I am Full Stack Web Developer
                <br />
                <br />
                I have experience working with robotic medical devices, proficient in collaborating with engineers and other cross functional teams to test new product designs, analyze performance and product issues, and maintain accurate project records.
                <br />
                <br />
                I am UC San Diego graduate with a B.S. in Cognitive Neuroscience. Currently a full time student at UC Berkeley Extension working to become a Full Stack Web Developer.
            </h2>
            <Link to='#contact' className='flat-button'> CONTACT ME</Link>
        </div>

        <h2>Projects</h2>
        </div>
  )
}

export default About