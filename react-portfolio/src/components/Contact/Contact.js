import Loader from 'react-loaders'
import './index.scss'
const Contact = () => {

  return (
    <div className='container contsct-page'>
        <div className='text-zone'>
            <h1>
                Contact Me
            </h1>
            <div className='contact-form'>
                <form>
                    <ul>
                        <li className='half'>
                            <input type='text' name='name' placeholder='Name' required>
                            </input>
                        </li>
                        <li className='half'>
                            <input type='text' name='email' placeholder='Email' required>
                            </input>
                        </li>
                        <li>
                            <Input type='text' name='subject' placeholder='Subject' required />
                        </li>
                        <li className='half'>
                            <textarea type='text' name='message' placeholder='Message' required>
                            </textarea>
                        </li>
                        <li className='half'>
                            <input type='submit' className='flat-button' value='send'>
                            </input>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact