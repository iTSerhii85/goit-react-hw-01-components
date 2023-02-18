import PropTypes from 'prop-types';
import { String } from "./Transactions.styled"

export const Items = ({ type, amount, currency }) => {
    return <String>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </String>
}

Items.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}