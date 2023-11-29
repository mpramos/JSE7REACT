import React from 'react'

const UserCard = (props) => {
  return (
    <>
    <div>UserCard</div>
    <img src={props.urlImage} alt="" />
    <p>{props.nameCharacter}</p>
    </>
  )
}

export default UserCard