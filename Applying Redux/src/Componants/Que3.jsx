import React from 'react'

export default function Que3() {
  return (
    <>
    
    <h3>Que 3: What is Pure Component? When to use Pure Component over Component?</h3>
    <h4>Answer:</h4>
    
    <p>A Pure Component in React is a type of component that only re-renders if its props or state change. This helps improve performance by avoiding unnecessary re-renders.</p>
    

    <h3>Key Points:</h3>
        

        <ol>
            <li><b>Shallow Comparison:</b> It checks if the props or state have changed using a simple, shallow comparison </li>
            <li><b>Efficiency:</b>If nothing has changed, it skips re-rendering, which makes your app faster.</li>
            <li><b>Use Case:</b>  Use Pure Component when you want to optimize performance and your props and state are simple.</li>
            
        </ol>
       

        <h3>When to Use Pure Component:</h3>
        

        
        <ul>
            <li>When your component's props and state don't change often. </li>
            <li>When you want to avoid unnecessary re-renders to make your app faster.</li>
            <li>When your data is simple and easy to compare.</li>
            
        </ul>
        

        <h3>When to Use Pure Component:</h3>
       

        
        <ul>
            <li><b>Component:</b> Re-renders every time its parent re-renders, regardless of whether props or state have changed.</li>
            <li><b>Pure Component:</b> Only re-renders if props or state have actually changed.</li>
        </ul>
        

        <p>By using Pure Component, you can make your React application more efficient and responsive.</p>

    </>
  )
}
