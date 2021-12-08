import { LOG_IN } from '../client/constants/actionTypes.js';
import subject from '../reducers/reducers.js';

describe('SearchReducers reducer', () => {
  let state;

  beforeEach(() => {
    state = {
      login: false,
      searchSuccess: false,
      restaurantInfo: {},
      acceptButton: false,
      favouritesButton: false,
      showFavourites: false,
      favouritesList: [],
    };
  });

  describe('default state', () => {
    it('should return a default state when given an undefined input', () => {
      expect(subject(undefined, { type: undefined })).toEqual(state);
    });
  });

  describe('unrecognized action types', () => {
    it('should return the original without any duplication', () => {
      const action = { type: 'aajsbicawlbejckr' };
      expect(subject(state, action)).toBe(state);
    });
  });
  
  describe('on a successful login (LOG_IN)', () => {
    const action = {
        type: 'LOG_IN'
    }

      it('state of login should be true'), () => {
        const logged_in_state = subject(state, action);
        expect(logged_in_state.login).toEqual(state.login);
      }
  })

  describe('SEND_SEARCH', () => {
      const action = {
        type: 'SEND_SEARCH',
        payload: {
            name: 'McDonalds'
        }
      }

      const newState = subject(state, action);

      it('toggle searchSuccess to be true', () => {
          expect(newState.searchSuccess).toEqual(true);
      })

      it('add a restaurant object to restaurantInfo in state', () => {
          expect(newState.restaurantInfo).toEqual({ name: 'McDonalds' });
      })
  })

/* Example of Response Body: 
{
  "total": 8228,
  "businesses": [
    {
      "rating": 4,
      "price": "$",
      "phone": "+14152520800",
      "id": "E8RJkjfdcwgtyoPMjQ_Olg",
      "alias": "four-barrel-coffee-san-francisco",
      "is_closed": false,
      "categories": [
        {
          "alias": "coffee",
          "title": "Coffee & Tea"
        }
      ],
      "review_count": 1738,
      "name": "Four Barrel Coffee",
      "url": "https://www.yelp.com/biz/four-barrel-coffee-san-francisco",
      "coordinates": {
        "latitude": 37.7670169511878,
        "longitude": -122.42184275
      },
      "image_url": "http://s3-media2.fl.yelpcdn.com/bphoto/MmgtASP3l_t4tPCL1iAsCg/o.jpg",
      "location": {
        "city": "San Francisco",
        "country": "US",
        "address2": "",
        "address3": "",
        "state": "CA",
        "address1": "375 Valencia St",
        "zip_code": "94103"
      },
      "distance": 1604.23,
      "transactions": ["pickup", "delivery"]
    },
    // ...
  ],
  "region": {
    "center": {
      "latitude": 37.767413217936834,
      "longitude": -122.42820739746094
    }
  }
} */
});

