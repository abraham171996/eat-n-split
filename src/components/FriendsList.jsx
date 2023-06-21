import React from 'react'

import Button from './Button';


const FriendsList = ({friends,onSelectFriend,selectedFriend}) => {
    
  return (
    <ul>
        {friends.map((friend)=>(<Friend 
        friend={friend}  
        key={friend.id} 
        selectedFriend={selectedFriend}
        onSelectFriend={onSelectFriend} 
        
        />
        ))}
    </ul>
  )
}

function Friend({friend ,onSelectFriend,selectedFriend}){
    const isSelected = selectedFriend?.id === friend.id;
    console.log(isSelected);
    return(
        <li className={isSelected?"selected":""}>
            <img src={friend.image} alt={friend.name}/>
            <h3>{friend.name}</h3>

            {friend.balance <0 && <p className='red'>You owe {friend.nam}
                {Math.abs(friend.balance)}            
            </p>}
            {friend.balance >0 && <p className='green'>You owe {friend.nam}
                {Math.abs(friend.balance)}            
            </p>}
            {friend.balance ===0 && <p >You and {friend.nam}
                are even            
            </p>}
            <Button onClick={()=>onSelectFriend(friend)}>{isSelected?"Close":"Select"}</Button>
        </li>
    )
}

export default FriendsList