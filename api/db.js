import mysql from "mysql";



export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"",
    database:"blog",
    engine: 'InnoDB'
})
db.connect(function(error){
	if(!!error) {
		console.log(error);
	} else {
		console.log('Connected to db!');
	}
});

export default function conn(){

}