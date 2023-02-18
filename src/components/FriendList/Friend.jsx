// import PropTypes from 'prop-types';
import { Item, Marker, Name } from "./FriendList.styled"

export const FriendListItem = ({avatar, name, isOnline}) => {
    return <Item>
    <Marker>{isOnline}</Marker>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <Name>{name}</Name>
  </Item>
}