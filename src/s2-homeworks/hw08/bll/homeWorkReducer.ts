import { UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newArray = [...state]
            return  newArray.sort((el1, el2)=>action.payload==='up'?(el1.name>el2.name?1:-1):(el1.name>el2.name?-1:1))
        }
        case 'check': {
            let newState = state
            return [...newState.filter((el)=>el.age>18)]
        }
        default:
            return state
    }
}
