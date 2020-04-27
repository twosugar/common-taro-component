/*
 * @Author: laguan
 * @Date: 2020-04-27 11:11:44
 * @LastEditors: laguan
 * @LastEditTime: 2020-04-27 15:50:35
 */
import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
  num: 0
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
     default:
       return state
  }
}
