
let form = document.forms.form
let textiner = form.text
let ok = form.submit


 ok.onclick = function (ev) {
    ev.preventDefault()

     localStorage.setItem('storage',JSON.stringify(textiner))
}













// let students = [
//     {name: 'ivan',age:13},
//     {name: 'oleg',age: 13}
//
// ]

// localStorage.setItem('students',JSON.stringify(students))


//
// let studentsjson = localStorage.getItem('students')
//
//  let students = JSON.parse(studentsjson)
//    console.log(studentsjson)
//
// for (const student of students){
//
//     const studentdiv = document.createElement('div')
//
//     studentdiv.style.color = 'red'
//     studentdiv.innerText =
//         `student name : ${student.name}
//          studetnt age :${student.age}`
//
//
//
//
//     document.body.appendChild(studentdiv)
//
// }


// localStorage.setItem('students',JSON.stringify(students))
