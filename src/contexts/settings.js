/**
 *
 * (c) Laudio, Inc. All Rights Reserved.
 *
 * This file contains proprietary and confidential source
 * code. Unauthorized copying of this file, via any
 * medium is strictly prohibited.
 *
 * (r) 2018 Laudio is a registered trademark of Laudio, Inc.
 *
 */

import React, { useState, useContext, createContext } from 'react';

import { DataSources } from '../constants';
import { getObjFromLocalStorage, setObjInLocalStorage } from '../utils/localStorage';

const LOCAL_STORAGE_SETTING_KEY = 'storedSetting';
const DEFAULT_SETTINGS = {
  shouldShowMeaning: true,
  apiSourceKey: null,
  dataSource: DataSources.STATIC
};

const storedSetting = getObjFromLocalStorage(LOCAL_STORAGE_SETTING_KEY, DEFAULT_SETTINGS);

const SettingsContext = createContext([storedSetting, (...args) => null]);

function SettingsProvider(props) {
  const [defaultSettings] = useContext(SettingsContext);
  const [settings, setSettings] = useState(defaultSettings);

  const updateSetting = (newSettings) => {
    const updatedSetting = { ...settings, ...newSettings };

    setSettings(updatedSetting);
    setObjInLocalStorage(LOCAL_STORAGE_SETTING_KEY, updatedSetting);
  };

  return <SettingsContext.Provider value={[settings, updateSetting]}>{props.children}</SettingsContext.Provider>;
}

function useSettingsState() {
  const appInfoState = useContext(SettingsContext);

  if (!appInfoState) {
    throw new Error('useSettingsState must be used within an SettingsProvider');
  }

  return appInfoState;
}

export { SettingsProvider, useSettingsState as useSettingsState };
