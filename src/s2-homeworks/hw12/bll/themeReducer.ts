const initState = {
    themeId: 1,
}

export type HW12StateType = {
    themeId: number
}

type ChangeThemeIdType = {
    type: ACTION_TYPE.CHANGE_TIME_ID
    id: number
}

const enum ACTION_TYPE {
    CHANGE_TIME_ID = 'SET_THEME_ID'
}

type ActionType = ChangeThemeIdType

export const themeReducer = (state = initState, action: ActionType): HW12StateType => { // fix any
    switch (action.type) {
        case ACTION_TYPE.CHANGE_TIME_ID: {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdType => ({type: ACTION_TYPE.CHANGE_TIME_ID, id} as const) // fix any


