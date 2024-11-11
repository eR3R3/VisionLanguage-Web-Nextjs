function ggbond(x: string): string {
    let y = x.toUpperCase();
    return y;
}

console.log(ggbond('hi'))

const user2: string[] = ['hi']
const user1: (string|number)[] = ['hi', 6]
let User : [string, number, boolean]

interface user {
    name: string;
    age: number;
}

const user3: user = {
    name: 'Lucas',
    age: 16
}

function process_user<T>(params: T): T {
    params.name = params.name.toUpperCase();
    return params;
}

let y = process_user<user>(user3)
console.log(y)

const ccbond: Array<string> = ['hi']
const user4: string[] = ['hi']

interface Database {
    name: string,
    password: string,
    connection: string,
}

const database1: Database = {
    name: 'mongodb',
    password: 'taoyuwen',
    connection: 'successful'
}


const database2: Database = {
    name: 'sql',
    password: 'taoyuwen',
    connection: 'successful'
}

const database_set: Array<Database> = [database1, database2]


const processDatabase = <T extends Database>(params: T[]): T[] => {
    const newParams = params.map((database) => {
        if (database.name === 'sql') database.password = database.password.toUpperCase();
        return database})
    return newParams;
};

let database3: Database = (global as any).database
database3.name = "python"
const new_thing = (global as any).database.name
console.log(new_thing)