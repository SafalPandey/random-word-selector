import React from 'react';

function Settings({ settings, setSettings }) {
  return (
    <>
      <h2 className="text-2xl leading-5 mt-8 mb-4">Settings</h2>
      <div id="settings" style={{ width: '80%' }}>
        <input
          type="checkbox"
          id="display-meaning-setting"
          onChange={(e) => setSettings({ shouldShowMeaning: e.target.checked })}
          checked={settings.shouldShowMeaning}
        />
        <label htmlFor="display-meaning-setting" className="mx-2">Display the meaning of current word</label>
      </div>
      <br />
    </>
  );
}

export default Settings;
