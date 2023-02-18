import PropTypes from 'prop-types';
import { Item, Marker, Name } from "./FriendList.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <Item>
    <Marker isOnline={isOnline}></Marker>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
}

FriendListItem.protoType = {
  avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}