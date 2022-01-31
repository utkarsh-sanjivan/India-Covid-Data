import classnames from 'classnames';
import { memo, useState } from 'react';
import { animated} from 'react-spring';
import { useMeasure } from 'react-use';

import { LEVEL_STATISTICS } from '../../../constant';
import { formatNumber } from '../../../utils/commonFunctions';

const MapSwitcher = ({
  data,
  handleMapSwitch
}) => {
  const [mapSwitcher] = useMeasure();
  const [selected, setSelected] = useState(0);

  const handleClick = (index, statistic) => {
    setSelected(index);
    handleMapSwitch(statistic);
  };

  return (
    <div className="MapSwitcher" ref={mapSwitcher}>
      <animated.div className="highlight"></animated.div>
      {LEVEL_STATISTICS.map((statistic, index) => (
        <div
          key={index}
          className={classnames('clickable',`is-${statistic} ${selected===index? `is-${statistic}-selected`: ''}`)}
          onClick={handleClick.bind(this, index, statistic)}
          style={{width: `calc(${100 / LEVEL_STATISTICS.length}%)`}}
        >
          <div className='map-switcher-box'>
            <div id="name">{statistic.replace('_', ' ')}</div>
            <div id="daily">{parseInt(formatNumber(data[`${statistic}_daily`]))>0? `+${formatNumber(data[`${statistic}_daily`])}`: formatNumber(data[`${statistic}_daily`])}</div>
            <div id="total">{formatNumber(data[`${statistic}_total`])}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const isEqual = (prevProps, currProps) => {
  if (prevProps.mapStatistic !== currProps.mapStatistic) {
    return false;
  }
  return true;
};

export default memo(MapSwitcher, isEqual);
