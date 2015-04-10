var triangle = function(input1, input2, input3) {
    var a = parseInt(input1);
    var b = parseInt(input2);
    var c = parseInt(input3);

    if ((a + b < c) || (b + c < a) || (a === 0) || (b === 0) || (c === 0)) {
        return " oops this is not a triangle";
    }

    else if ((a == b) && (a == c) && (b == c)) {
        return "equilateral";
    }
    else if ((a == b) || (a == c) || (b==c)) {
        return "isoceles";
    }
    else if ((a != b) && (b != c)) {
        return "scalene";
    }
};
$(document).ready(function() {
    $("form#triangle").submit(function(event) {
        var input1 = $("input#input1").val();
        var input2 = $("input#input2").val();
        var input3 = $("input#input3").val();

        var result = triangle(input1, input2, input3);

        $("#display").text(result);


        $("#result").show();
        event.preventDefault();
    });
});
