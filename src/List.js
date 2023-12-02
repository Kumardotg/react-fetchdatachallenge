import React from 'react'
import ListItem from './ListItem'

const List = ({items}) => {
  return (
    
    <div className='col-md-12'> 
       <ul>
         {
            items.map(item => (
                <ListItem key={item.id} item={item}></ListItem>
            ))
         }
       </ul>
    </div>
  )
}

export default List