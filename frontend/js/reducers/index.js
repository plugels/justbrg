import {
  combineReducers
} from 'redux'
import account from './account'
import search from './search'
import { routerReducer as routing } from 'react-router-redux'

const rootReducer = combineReducers({
  account,
  search,
  routing
})

export default rootReducer
