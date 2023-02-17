import { Profile } from "./Profile/Profile";
import user from "user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "friends.json";
import { GlobalStyle } from "./GlobalStyle";

import { Layout } from "./Layout";

export const App = () => {
  return (
    <Layout>
      <GlobalStyle/>
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
      </Layout>
  );
};
