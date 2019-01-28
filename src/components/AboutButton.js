import React from 'react'

export const AboutButton = (props) => {
    return (
        <a href={props.link} class="contactButton">
            {props.children}
        </a>
    )
}