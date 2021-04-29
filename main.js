name_student_array = [];

function submit() {
    var display_student_array = [];
    for (var x = 1; x < 5; x++) {
        var name_of_student = document.getElementById("student" + x).value;
        name_student_array.push(name_of_student);

    }

    console.log(name_student_array);
    var length_of_student = name_student_array.length;
    for (var i = 0; i < length_of_student; i++) {
        display_student_array.push("<h4>NAME - " + name_student_array[i] + "</h4>");
    }
    console.log(display_student_array)
    document.getElementById("display_name_withcomma").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_withoutcomma").innerHTML = remove_commas;


    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";
}

function sorting() {
    name_student_array.sort();
   

    var display_student_array_sorting = [];
    var lenght_of_name_of_students_array = name_student_array.length;

    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array_sorting.push("<h4>NAME - " + name_student_array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }
    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_withoutcomma").innerHTML = remove_commas;

}