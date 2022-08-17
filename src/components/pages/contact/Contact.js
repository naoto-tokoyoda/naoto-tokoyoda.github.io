import React from 'react'
import { useMatchMedia } from "../../useMatchMedia";


//UI component
import Container from "../../UI/container/Container"

//css
import classes from './Contact.module.css'



function Contact() {
    const isMobileScreen = useMatchMedia("(min-width:960px)", true);
  return (
    <div className={classes.contact} id="contact">
        <div className={classes.contact_title}>
            <h1>Contact</h1>
        </div>

        {isMobileScreen 
        ?   <Container className={classes.contact_container}>
                    <form className={classes.form}>

                        <div className={classes.name_email}>
                            <input type="text"  placeholder='Your Name*'/>
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
        :  <Container className={classes.form_container}>
                <form className={classes.form}>
                    <div className={classes.name_email}>
                        <input type="text"  placeholder='Your Name*'/>
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
    }
        

       
    </div>
  )
}

export default Contact