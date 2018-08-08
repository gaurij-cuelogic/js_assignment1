function list_todo()
    {
      var get_index =localStorage.getItem("unique_index");
      var data=localStorage.getItem("testJSON"); 
      var data_obj= JSON.parse(data);
    
      for(var i= 0; i < data_obj[get_index].p_todo.length ; i++)
      {
        
        //table row
        var newElement_row = document.createElement('tr');
    
        //checkbox
        var newElement_checkbox = document.createElement('input')
        newElement_checkbox.setAttribute("type","checkbox");

        //name
        var newElement_name = document.createElement('td');
        var disp_todoname =  data_obj[get_index].p_todo[i].todo_name;
        newElement_name.textContent = disp_todoname;
      
        //desc
        var newElement_desc = document.createElement('td');
        var disp_tododesc =  data_obj[get_index].p_todo[i].todo_desc;
        newElement_desc.textContent = disp_tododesc;
      
        //type
        var newElement_type = document.createElement('td');
        var disp_todotype =  data_obj[get_index].p_todo[i].todo_type;
        newElement_type.textContent = disp_todotype;
      
        //todo_date
        var newElement_date = document.createElement('td');
        var disp_tododate =  data_obj[get_index].p_todo[i].todo_duedate;
        newElement_date.textContent = disp_tododate;

        //edit button
        var newElement_button = document.createElement('input')
        newElement_button.setAttribute("type","button");
        newElement_button.setAttribute("value","edit");
       newElement_button.setAttribute("onclick","edit(this.i)");
      
        // is_reminder
       // var newElement_reminder = document.createElement('td');
        //var disp_todoreminder =  data_obj[get_index].p_todo[i].todo_reminder;
        //newElement_reminder.textContent = disp_todoreminder;
      
        //reminder_date
        //var newElement_reminderdate = document.createElement('td');
        //var disp_todoreminderdate =  data_obj[get_index].p_todo[i].todo_reminder;
        //newElement_reminderdate.textContent = disp_todoreminderdate;

        newElement_row.appendChild(newElement_checkbox);
        newElement_row.appendChild(newElement_name);
        newElement_row.appendChild(newElement_desc);
        newElement_row.appendChild(newElement_type);
        newElement_row.appendChild(newElement_date);
        newElement_row.appendChild(newElement_button);
        //newElement_row.appendChild(newElement_reminder);
        //newElement_row.appendChild(newElement_reminderdate);
        var list_table = document.getElementById("list_table");
        list_table.appendChild(newElement_row);
        
      }
    }

    
