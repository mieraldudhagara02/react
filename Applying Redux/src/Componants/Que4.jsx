import React from 'react'


export default function Que4() {

  return (
    <>
    
    <h3>Que 4: What is the second argument that can optionally be passed tosetState and what is its purpose?</h3>
    <h4>Answer:</h4>
    
    <p>In React, the setState method can take two arguments:</p>
    <ol>
            <li><b>New state:</b> The first argument is the new state you want to set.</li>
            <li><b>Callback function:</b>The second argument is an optional function that runs after the state has been updated and the component has re-rendered.</li>
            
        </ol>

        <p>The callback is useful if you want to do something right after the state changes, like logging a message or updating another part of your app. Here's a simple example:</p>
    

    
    </>
    
  )
        
  
}
