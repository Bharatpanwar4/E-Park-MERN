
import bcrypt from 'bcryptjs'

const users=[
    {
        name:"bharat",
        email:'bharat@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true,
    },
    {
        name:"panwar",
        email:'panwar@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    },
    {
        name:"choudhary",
        email:'choudhary@example.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:false,
    }
]
export default users;