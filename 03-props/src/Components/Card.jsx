import React from 'react'

const Card = (props) => {
    return(
        <div className="card">
        <h1>{props.user}</h1>
        <img src="https://images.unsplash.com/photo-1776846320499-ca654ebe2659?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <p>{props.paragraph}</p>
        <button>View Profile</button>
      </div>
    )
}
export default Card