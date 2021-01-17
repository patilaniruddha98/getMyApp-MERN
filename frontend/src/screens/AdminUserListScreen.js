import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { listUsers } from "../actions/userActions"
import LoadingBox from "../components/LoadingBox"
import MessageBox from "../components/MessageBox"

const AdminUserListScreen=(props)=>{

    const userList=useSelector(state=>state.userList)
    const {loading,users,error}=userList

    
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(listUsers())
    },[dispatch])

    return(
        <div>
        {loading ?
        <LoadingBox></LoadingBox>
        :
        error ? <MessageBox varient="danger">{error}</MessageBox>
        :
        (
            <table className="table">
            <thead>
                <th>User Id</th>
                <th>Name</th>
                <th>Email Id</th>
                <th>Created At</th>
                <th>Updated At</th>
            </thead>

            <tbody>
                {users.map((user)=>(
                    <tr key={user._id}>
                        <td>{user._id}</td>
                       <td> {user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.createdAt.substring(0,10)}</td>
                        <td>{user.updatedAt.substring(0,10)}</td>

                    </tr>
                ))}
            </tbody>

        </table>
        )}
       
        </div>
    )
}

export default AdminUserListScreen
