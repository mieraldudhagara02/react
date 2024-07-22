import React from 'react'

export default function Que1() {
  return (
    <>
    
        <h3>Que 1: What is Redux?</h3>
        <h4>Answer:</h4>

        <p>Redux is a tool used to manage the state, or data, of an application. It's especially popular with React apps but can work with any JavaScript project.</p>
        <br />
        <p>Here are the basics:</p>
        <ol>
            <li><b>Store: </b> A single place where all the data of the app is kept.
</li>
            <li><b>Actions: </b>These are simple objects that tell the store what kind of changes need to happen.</li>
            <li><b>Reducers:</b> Functions that decide how the data in the store should change based on the actions.</li>
            <li><b>Dispatch:</b> A way to send actions to the store so it can update the data.</li>
        </ol>
        <br />

        <p>The main idea of Redux is to keep your data in one place, making it easier to manage and debug your application.</p>

    </>
  )
}
