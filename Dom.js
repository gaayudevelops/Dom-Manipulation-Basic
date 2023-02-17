var form=document.getElementById('addForm');
var itemList=document.getElementById('items');

//Add event to submit
form.addEventListener('submit',addItem);

function addItem(e){
    
    e.preventDefault();

    // Get input Value
    var newItem=document.getElementById('item').value;
    
    //create li element
    var li=document.createElement('li');

    //Add class to li
    li.className='list-group-item';

    //Add textnode to li
    li.appendChild(document.createTextNode(newItem));

    
    
    //create delbutton element
    var delButton=document.createElement('button');

    //adding class to delButton
    delButton.className='btn btn-danger btn-sm float-right delete';

    //Add textnode to delButton
    delButton.appendChild(document.createTextNode('X'));

    //Append delButton to li
    li.appendChild(delButton);


    //create edit Button
    var editButton=document.createElement('button');

    //adding class to editButton
    editButton.className='btn  btn-sm float-right edit'

    // Add textnode to editButtton
    editButton.appendChild(document.createTextNode('EDIT'));

    //Append editButton to li
    li.appendChild(editButton);

    itemList.appendChild(li);
}

//Add event to remove item
itemList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('delete')){
        
        if((confirm('Are you Sure ?'))){

            var li=e.target.parentElement;
            itemList.removeChild(li);
            console.log(classList);
            

        }
    }
}
