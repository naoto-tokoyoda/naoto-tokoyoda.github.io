import React from 'react'
import ReactTooltip from "react-tooltip";


//UI component
import Container from "../../UI/container/Container"

//css
import classes from './Contact.module.css'

//image
import Copy from '../../images/copy_icon.png'

function Contact() {
  return (
    <div className={classes.contact}>
        <div className={classes.contact_title}>
            <h1>Contact</h1>
        </div>
        <Container className={classes.contact_container}>
            <div className={classes.email_me_container}>
                <div className={classes.email_me}>
                    <h5>Email me</h5>
                    <div className={classes.email_button} onClick={() =>  navigator.clipboard.writeText('tokoyoda.naoto@gmail.com')}>
                        <input 
                            type="text" 
                            name="name" 
                            value="tokoyoda.naoto@gmail.com" 
                        />

                        <img 
                            src={Copy} 
                            alt="Copy" 
                            data-tip="Copied!"
                            data-for='clickme' 
                            data-event='click' 
                        />


                        <ReactTooltip 
                            id='clickme' 
                            place='top' 
                            effect='solid' 
                            delayHide={1000}
                            className={classes.reactToolTip}
                            textColor="black"
                            backgroundColor='#FCFCFD'
                            border='1px solid'
                            borderColor='black'
                        />
                    </div>
                </div>
            </div>

            <Container className={classes.form_container}>
                <form className={classes.form}>

                    <div className={classes.name_email}>
                        <input type="text"  placeholder='Your name*'/>
                        <input type="text"  placeholder='Your Email*'/>
                    </div>

                    <div className={classes.subj_message}>
                        <input type="text"  placeholder='Subject*'/>
                        <textarea type="text"  placeholder='Your message*'/>
                    </div>
                    
                    <div className={classes.submit_button}>
                        <input type="submit" value="Send" />
                    </div>
                    
                </form>
            </Container>
        </Container>

       
    </div>
  )
}

export default Contact