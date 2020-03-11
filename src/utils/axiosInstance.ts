import axios from 'axios'

import { BASIC_URL } from './apiConstants'

export default axios.create({
    baseURL: BASIC_URL,
    timeout: 1000
})