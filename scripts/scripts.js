 $( "#collegeID" ).change(function() {
        var selectedCollege = $( "#collegeID" ).val();
        //alert( $( "#college" ).val() );
        $.getJSON('http://external.spokane.edu/REST/API/SampleData', function (data) {
            var areaOfStudy = data.data.AreaOfStudy;
            $('#interestID').html('');
            var options = '';
            options += '<option value="Select">--Select Interested Area of Study--</option>';
            for (var i = 0; i < areaOfStudy.length; i++) {
                var eachArea = areaOfStudy[i];
                if (selectedCollege == eachArea.College)
                    options += '<option value="' + eachArea.Title + '">' + eachArea.Title + '</option>';
            }

            $('#interestID').append(options);
        });
    });


 function validateEmail(email){
     var reg = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
     return reg.test(email);
 }
