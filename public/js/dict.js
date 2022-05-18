$(document).ready(function() {
    console.log("dict.js");
});

$(document).ready(
    function () {
        $("#find_button").click(fetchDictionaryMeaning);
});



const fetchDictionaryMeaning = async () => {
    var wordValue = $("#word").val();
    try {
        
        const response = await fetch('http://localhost:3000/meaning/'+wordValue);
        
        const data = await response.json();
        
        $("#meaning-list").empty();
        for(var i=0; i<data.length;i++){
            $("#meaning-list").append( "<li>"+"("+data[i].wordtype+")  ::  " + data[i].definition+"</li>" );
        }
    
    } catch (error) {
       
    }
};

 