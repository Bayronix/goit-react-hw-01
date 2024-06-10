import Profile from "./Profile/Profile";
import userData from "./Profile/userData.json";
import friendList from "./FriendList/FriendList.json";
import FriendListItem from "./FriendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendListItem
        avatar={friendList.avatar}
        name={friendList.name}
        isOnline={friendList.isOnline}
        id={friendList.id}
      />
    </>
  );
};

export default App;
