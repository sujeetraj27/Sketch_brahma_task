import React from 'react'

export default function Recipes({title, calories, image, ingeridents}) {
    return (
        <div>
            <h1>{title}</h1>
            <ol>
                {ingeridents.map(ingerident =>(
                    <li>
                        {ingerident.text}
                    </li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}
