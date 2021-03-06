import React, { useMemo } from 'react';

import { PLACEHOLDER_TEXT } from '../data';
import { DataSources } from '../constants';

function DataSource(props) {
  const { words, apiKey, setApiKey, settings, setCustomWords, customWords, dataSource, setDataSource } = props;

  const value = useMemo(() => {
    if (customWords !== null) {
      return customWords;
    }

    if (settings.isCustomWords) {
      return JSON.stringify(words, null, 2);
    }

    return undefined;
  }, [customWords]);

  return (
    <>
      <h2>Data source</h2>
      <div id="words-input-div" style={{ width: '100%', display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        <div id="source-setting" style={{ width: '20%' }}>
          <input
            id="input-source-static"
            name="data-source"
            type="radio"
            onClick={() => setDataSource(DataSources.STATIC)}
            defaultChecked={dataSource === DataSources.STATIC}
          />
          <label htmlFor="input-source-static">
            <strong>Static list</strong>
          </label>

          <br />
          <br />

          <input
            id="input-source-api"
            name="data-source"
            type="radio"
            onClick={() => setDataSource(DataSources.API)}
            defaultChecked={dataSource === DataSources.API}
          />
          <label htmlFor="input-source-api">
            <strong>RapidAPI</strong>
          </label>
        </div>

        <div id="source-input" style={{ width: '80%' }}>
          {dataSource === DataSources.STATIC ? (
            <textarea
              id="input-static-list"
              onChange={(evt) => setCustomWords(evt.target.value)}
              placeholder={PLACEHOLDER_TEXT}
              style={{ height: '50vh', width: '80%' }}
              value={value}
            />
          ) : (
            <input
              id="input-api-key"
              onChange={(evt) => setApiKey(evt.target.value)}
              placeholder={'Add RapidAPI access key here.'}
              style={{ height: '15vh', width: '80%' }}
              value={apiKey}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default DataSource;
