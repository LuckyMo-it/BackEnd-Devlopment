import {DatabaseSync} from 'node:sqlite'
const db=new DatabaseSync(':memory')

//execute sql queries
db.exec(`
    create table user(
    id integer primary key autoincrement,
    username text unique,
    password text
    

    )
    `)

db.exec(`
    create table todos(
        id int primary key ,
        user_id integer,
        task text,
        completed boolean default 0,
        foreign key(user_id) references user(id)

    )
    `)

export default db