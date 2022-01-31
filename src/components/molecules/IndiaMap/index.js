import React, { useEffect, useState, lazy } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { scaleQuantile } from 'd3-scale';
import ReactTooltip from 'react-tooltip';

import { retry } from '../../../utils/commonFunctions';

const LinearGradient = lazy(() => retry(() => import('../../atoms/LinearGradient')));
const SwitchButton = lazy(() => retry(() => import('../../atoms/SwitchButton')));

const INDIA_TOPO_JSON = require('./india.topo.json');

const PROJECTION_CONFIG = {
    scale: 1180,
    center: [82.8, 21.7]
};

const DEFAULT_COLOR = '#EEE';

const geographyStyle = {
    default: {
        outline: 'none'
    },
    hover: {
        fill: '#ccc',
        transition: 'all 250ms',
        outline: 'none',
        cursor: 'pointer'
    },
    pressed: {
        outline: 'none'
    }
};

const IndiaMap = ({
    mapData,
    mapColorArray,
    handleIsDailySwitch
}) => {
    const [tooltipContent, setTooltipContent] = useState('');
    const [data, setData] = useState(mapData);
    
    useEffect(() => {
        setData(mapData);
    }, [mapData])

    const gradientData = {
        fromColor: mapColorArray[0],
        toColor: mapColorArray[mapColorArray.length - 1],
        min: mapData.reduce((min, item) => (item.value < min ? item.value : min), mapData[0].value),
        max: mapData.reduce((max, item) => (item.value > max ? item.value : max), 0)
    }

    const colorScale = scaleQuantile()
        .domain(mapData.map(d => d.value))
        .range(mapColorArray);    

    const onMouseEnter = (geo, current = { value: 'NA' }) => {
        return () => {
        setTooltipContent(`${geo.properties.name}: ${current.value}`);
        };
    };

    const onMouseLeave = () => {
        setTooltipContent('');
    };

    return (
        <div className="full-width-height container">
            <div style={{ display: 'flex' }}>
                <div className="toggle-button-label">Daily</div>
                <SwitchButton 
                    defaultChecked={false}
                    onChange={handleIsDailySwitch}
                    disabled={false}
                    className={'line-bar-switch'}
                />
                <div className="toggle-button-label">Total</div>
            </div>
            <ReactTooltip>{tooltipContent}</ReactTooltip>
            <ComposableMap
                projectionConfig={PROJECTION_CONFIG}
                projection="geoMercator"
                width={600}
                height={650}
                data-tip=""
            >
            <Geographies geography={INDIA_TOPO_JSON}>
                {({ geographies }) =>
                    geographies.map(geo => {
                        const current = data.find(s => s.id === geo.id);
                        return (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill={current ? colorScale(current.value) : DEFAULT_COLOR}
                            style={geographyStyle}
                            onMouseEnter={onMouseEnter(geo, current)}
                            onMouseLeave={onMouseLeave}
                        />
                        );
                    })
                }
            </Geographies>
            </ComposableMap>
            <LinearGradient data={gradientData} />
        </div>
    );
}

export default IndiaMap;