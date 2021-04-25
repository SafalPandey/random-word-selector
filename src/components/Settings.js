import React from 'react';

function Settings({ settings, setSettings }) {
  return (
    <>
      <h2>Settings</h2>
      <div id="settings" style={{ width: '80%' }}>
        <input
          type="checkbox"
          id="display-meaning-setting"
          onChange={(e) => setSettings({ shouldShowMeaning: e.target.checked })}
          checked={settings.shouldShowMeaning}
        />
        <label htmlFor="display-meaning-setting">Display the meaning of current word</label>
      </div>
      <br />
    </>
  );
}

export default Settings;
