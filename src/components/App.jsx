import { Profile } from "./Profile/Profile";
import user from "user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "friends.json";

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <div>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>,
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>,
      <ul>
        <FriendList friends={friends}/>
      </ul>
    </div>
  );
};
