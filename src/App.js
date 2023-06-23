import React, { useState } from 'react'
import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  const [showAddFriend,setShowAddFriend] = useState(false)
  const [friends,setFriends] = useState(initialFriends)
  const [selectedFriend,setSelectFriend] = useState(null)
  function handelShowAddFriend(){
    setShowAddFriend((show)=>!show)
  }
  function handelAddFriend(friend){
    setFriends((friends)=>[...friends,friend])
    setShowAddFriend(false)
  }

  function handleSelection(friend){
    // setSelectFriend(friend)
    setSelectFriend(cur=> cur?.id === friend.id? null:friend)
    setShowAddFriend(false)
  }
  function handleSplitBill(value){
    setFriends(friends=>friends.map(friend=>friend.id === selectedFriend.id
      ? {...friend,balance:friend.balance+ value} : friend
      ))
      setSelectFriend(null);
  }
  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList 
        friends={friends} 
        onSelectFriend={handleSelection} 
        selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handelAddFriend}/>}
        <Button onClick={handelShowAddFriend} >{showAddFriend ? "Close" : "Add Friend"}</Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill}/>}
    </div>
  )
}

export default App