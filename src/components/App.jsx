import Profile from "./Profile/Profile";
import userData from "./Profile/userData.json";
import friend from "./FriendList/FriendList.json";
import transaction from "./TransactionHistory/transactionHistory.json";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

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

      <FriendList friend={friend} />

      <TransactionHistory transaction={transaction} />
    </>
  );
};

export default App;
