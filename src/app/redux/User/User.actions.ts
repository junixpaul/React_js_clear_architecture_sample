import { LIST_LOAD_REQUEST, LIST_LOAD_SUCCESS, LIST_LOAD_FAILURE } from "./User.types"
import { UserServiceImpl } from "../../../domain/usecases/UserService"
import { UserRepositoryImpl } from "../../../data/repositories/UserRepositoryImpl"

export const refreshList = async (dispatch: any) => {
    dispatch({ type: LIST_LOAD_REQUEST })

    try {
        const userRepo = new UserRepositoryImpl()
        const userService = new UserServiceImpl(userRepo)
        const user = await userService.GetUser()
        dispatch({ type: LIST_LOAD_SUCCESS, payload: user })
    } catch (error) {
        dispatch({ type: LIST_LOAD_FAILURE, error })
    }
}
