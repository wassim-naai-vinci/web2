import { User } from "../type";

interface UserProps{
    users : User[];
}

const Users = (props : UserProps) => (
    <div>

        <ul>
            {props.users.map((user)=> (
                <li key={user.name}>
                    <strong>{user.name}</strong>
                    <p>{user.age} ans</p>
                </li>
            ))}
        </ul>
    </div>
)

export default Users;