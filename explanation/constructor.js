function student_details(student_name,cls,id){
    this.name = student_name;
    this.cls = cls;
    this.id = id;
}

var result = new student_details("kumar","12th","425");
var result1 = new student_details("girish","10th","450");

console.log(result);
console.log(result1);