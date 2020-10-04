student_name=[];

function submit(){
var name1=document.getElementById("name_1").value;
var name2=document.getElementById("name_2").value;
var name3=document.getElementById("name_3").value;
var name4=document.getElementById("name_4").value;

student_name.push(name1);
student_name.push(name2);
student_name.push(name3);
student_name.push(name4);

console.log(student_name);

document.getElementById("display").innerHTML=student_name;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";

}

function sorting(){
    name.sort();
    console.log(student_name);
    document.getElementById("display").innerHTML=student_name;
}