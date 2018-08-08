function create_todo()
{  alert("in create_todo");
    var get_index = localStorage.getItem("unique_index");
    var data = localStorage.getItem("testJSON"); 
    var obj_data= JSON.parse(data);
    obj_todo = {
    todo_name:document.getElementById("todo_name").value,
    todo_desc:document.getElementById("todo_desc").value,
    todo_type:document.getElementById("todo_type").value,
    todo_duedate:document.getElementById("todo_date").value,
    //todo_reminder:disp_reminder_date(),
    todo_reminderdate:document.getElementById("reminder_date").value,
    //todo_ispublic:document.getElementById("is_public").value,
    //attatchment:document.getElementById("attatchment").value
    }
    //var x= document.getElementById("reminder_type").value;
    //alert(x);
    obj_data[get_index].p_todo.push(obj_todo);
    myJSON = JSON.stringify(obj_data);
   localStorage.setItem("testJSON",myJSON); 
    
}

/*function disp_reminder_date()
    {
        if(document.getElementById("reminder_type").value == reminder_yes)
        {
            document.getElementById("reminder_date").disabled = false;
            
        }
        return document.getElementById("reminder_type").value
    }*/

