import React, { Component } from 'react'
import { Link } from '@reach/router'
import '../Style/Contact.css'

export default function Contact(props) {

    return (
        <div id="contact-body">
            <div id="contact-head">
                Let's Make Things Happen...
           </div>

            <div id="link-container">
                <a href='https://www.jpdgallery.com/' target="_blank">jpdgallery.com</a>

                <a href='https://www.linkedin.com/in/jena-durell-b5044b89/' target="_blank">Linkedin</a>

                <a href='https://www.instagram.com/snowy_vt/?hl=en' target="_blank">Instagram</a>
            </div>

            <div id="right-bottom-corner">
                <div className="phone-and-email">
                    <div>Jena Durell</div>
                    <div>802.391.4048</div>
                    <div>jena.durell@gmail.com</div>

                </div>
            </div>

        </div>
    )
}

