import React from 'react';


export default function(props) {
  return (
    <div id="chart-config">
      <h2>Dashboard Configuration</h2>
      <p>Choose metrics to display:</p>
      {props.metadata.map(metricMeta => {
        const checked = props.whitelistedMetricIds && props.whitelistedMetricIds.indexOf(metricMeta.id) > -1;
        return (
          <label key={metricMeta.id}><input type="checkbox" defaultChecked={checked} name="metrics" value={metricMeta.id} />{metricMeta.name}: {metricMeta.description}</label>
        );
      })}
      <button onClick={props.handleSubmit}>Go!</button>
    </div>
  );
}
