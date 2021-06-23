import { createSlice } from '@reduxjs/toolkit';

const pricingPlan = [
  {
    id: 1,
    title: 'Basic Plan',
    price: '29',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
  {
    id: 2,
    title: 'Premium Plan',
    price: '49',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
  {
    id: 3,
    title: 'Advanced Plan',
    price: '69',
    list: [
      '5 Jobs Posting',
      '2 Featured Jobs',
      '1 Renew Jobs',
      '10 Days Duration',
      'Email Alert',
    ],
  },
];

const pricingPlanSlice = createSlice({
  name: 'pricingPlan',
  initialState: pricingPlan,
  reducers: {},
});

export default {
  pricingPlan: pricingPlanSlice.reducer,
};
