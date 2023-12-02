import React from 'react'
import Button from './Button'

const Form = ({request, setRequest}) => {
  return (
    <form onSubmit={(e)=> e.PreventDafault()}>

      <Button request={request} setRequest={setRequest} buttonText= "Posts"></Button> 
      <Button request={request} setRequest={setRequest} buttonText= "Comments"></Button> 
      <Button request={request} setRequest={setRequest} buttonText= "Users"></Button> 
    </form>
  )
}

export default Form