import PropTypes from 'prop-types';
import { Items } from "./TransactionItem"
import { Table, Tbody, Thead } from "./Transactions.styled"

export const TransactionHistory = ({ transactions }) => {
    return <Table>
    <Thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </Thead>

    <Tbody>
        {transactions.map(data => (
        <Items key = {data.id}
        type={data.type}
        amount={data.amount}
        currency={data.currency}
        />))}
   </Tbody>
  </Table>
};

TransactionHistory.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })).isRequired,
};