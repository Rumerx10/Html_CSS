
let students = [
    {
        stu_name:"rume",
        stu_age:24,
        stu_gpa:4.50
    },
    {
        stu_name:"hasan",
        stu_age:23,
        stu_gpa:4.80
    },
    {
        stu_name:"kamrul",
        stu_age:22,
        stu_gpa:5.0
    }
]



const search_stu = () => students.filter(x => x.stu_gpa>4.5).map(y => y.stu_name);
console.log(search_stu());



