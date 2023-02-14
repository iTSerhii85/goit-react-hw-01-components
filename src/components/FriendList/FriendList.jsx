import PropTypes from 'prop-types';
import { FriendListItem } from './Friend';

export const FriendList = ({friends}) => {
    return <ul class="friend-list">
    {friends.map(item => (
    <FriendListItem key={item.id}
    avatar={item.avatar}
    name={item.name}
    isOnline={item.isOnline}
    />))} 
  </ul>
    }

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
}