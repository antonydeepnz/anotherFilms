import { createActions } from 'redux-actions'

export const { requestGenres, getGenres } = createActions({
    REQUEST_GENRES: () => ({}),
    GET_GENRES: (data) => ({ data })
}) 

