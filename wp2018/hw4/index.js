$('#list_all').click((event) => {
    event.preventDefault()
    $.ajax('ajax.php',{
        method: "get",
        data:{'option':'list_all'},
        success: function(data) {
            $("#list_all_result").html(data);
        }
    })
})

$('#search').click((event) => {
    var ID = document.getElementById('search_ID').value;
    event.preventDefault()
    $.ajax('ajax.php',{
        method: "get",
        data:{'option':'search','ID': ID},
        success: function(data) {
            $("#search_result").html(data);
        }
    })
})

$('#add').click((event) => {
    var ID = document.getElementById('newID').value;
    var NAME = document.getElementById('newName').value;
    event.preventDefault()
    $.ajax('ajax.php',{
        method: "post",
        data:{'option':'add','ID': ID,'NAME': NAME},
        success: function(data){
            $("#add_result").html(data);
        }
    })
})

$('#delete').click((event) => {
    var ID = document.getElementById('delete_ID').value;
    event.preventDefault();
    $.ajax('ajax.php',{
        method: "post",
        data:{'option':'delete','ID':ID},
        success:function(data){
            $('#delete_result').html(data);
        }
    })
})