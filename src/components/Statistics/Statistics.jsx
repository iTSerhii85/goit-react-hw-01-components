import PropTypes from 'prop-types';
import{ Card, Title, StatsList, StatsItem } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    return <Card>
    <Title className="title">{title}</Title>
  
    <StatsList>
        {stats.map(data => (
        <StatsItem key = {data.id}>
        <span className="label">{data.label}</span>
        <span className="percentage">{data.percentage}%</span>
      </StatsItem>))}
    </StatsList>
  </Card>
}

Statistics.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
