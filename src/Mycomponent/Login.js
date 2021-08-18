import React from 'react'

export default function login() {
    return (
        <form>
          <nav>
            <li>home</li>
            <li>about</li>
          </nav>
          <label>
            Number:
            <input type="number" name="Number" placeholder="enter your number"/><br/>
            <input type="text" className="text" />
          </label>       </form>

    )
}
