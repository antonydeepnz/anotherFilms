import { handleActions } from 'redux-actions'

import { requestGenres, getGenres } from '../actions/genresActions'

interface IData {
    id: number,
    name: string
}

interface IInitialState {
    data: Array<IData>
}

const initilaState:IInitialState = {
    data: []
}

export default handleActions(
    {
        requestGenres: (state) => ({ ...state }),
        getGenres: (state, { payload }) => ({ data: ...payload })
    },
    initilaState
)