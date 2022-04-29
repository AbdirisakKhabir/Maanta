import React from 'react'
import "../Pages/contact.css"
function Contact() {
    return (
        <div className='contact' id='Contact'>
            <h2 className="title">Contact Me</h2>
            <div className='contact-content'>
                <div className="column-left">
                    <div>
                        <h2>Get In Touch</h2>
                    </div>
                    <div>
                        <p>If You Have a Question or Just want to get In Touch Use The Form.
                            I Look Forward To Hearing From You.</p>
                    </div>
                    <div className='row'>
                        <i class="fas fa-user"></i>
                        <div className='info'>

                            <div className='title'>Abdirisak Ahmed </div>
                        </div>
                    </div>
                    <div className='row'>
                        <i class="fas fa-envelope"></i>
                        <div className='info'>

                            <div className='title'>Khubaro2017@gmail.com</div>
                        </div>


                    </div>

                    <div className='row'>
                        <i class="fas fa-map-marker-alt"></i>
                        <div className='info'>

                            <div className='title'>Burao Sheikh Bashir Area</div>
                        </div>
                    </div>
                </div>
                <div className='column-right'>
                    <div>
                        <h2>Message Me</h2>
                    </div>
                    <form>
                        <div className='fields'>
                            <input type='text' placeholder="Name" ></input>
                            <input type='text' placeholder="Email" ></input>
                        </div>
                        <div className='field'>
                            <input type='text' placeholder="Subject" ></input>
                        </div>

                        <div className='textArea'>
                            <textarea cols="30" rows="10" placeholder="Message.."></textarea>
                        </div>
                        <div class="button-area">
                            <button type="submit">Send message</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Contact;