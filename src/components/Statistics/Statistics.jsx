import PropTypes from 'prop-types';

export const Statistics = ({title, stats}) => {
    return <section class="statistics">
    <h2 class="title">{title}</h2>
  
    <ul class="stat-list">
        {stats.map(data => (
        <li class="item" key = {data.id}>
        <span class="label">{data.label}</span>
        <span class="percentage">{data.percentage}</span>
      </li>))}
    </ul>
  </section>
}

Statistics.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}
