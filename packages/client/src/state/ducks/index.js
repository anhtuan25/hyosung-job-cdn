import { combineReducers } from '@reduxjs/toolkit';

import pricingPlan from './pricingPlan';

import ui from './ui';

export default combineReducers({
  ...ui,
  ...pricingPlan,
});
