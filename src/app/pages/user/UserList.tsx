import React from "react"
import { connect, useDispatch } from "react-redux"
import { refreshList } from "../../redux/User/User.actions"
import { UserProps, User } from "../../redux/User/User.types"

interface RootState {
    user: any
}
const UserList = ({ user }: UserProps) => {
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(refreshList)
    }
    return (
        <div>
            <button onClick={handleClick}>Refresh</button>
            <ul>
                {user.map((user: User) => (
                    <div key={user.id}>
                        <p>
                            {user.last_name}, {user.first_name}
                        </p>
                        <p>{user.last_name}</p>
                        <p>{user.email}</p>
                        <img src={user.avatar} />
                    </div>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    console.log("USER")
    console.log(state.user)
    return {
        user: state.user.user,
    }
}

export default connect(mapStateToProps)(UserList)
