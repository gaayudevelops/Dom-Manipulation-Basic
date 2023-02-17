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

    //Get input description
     var newDesc=" "+document.getElementById('itemdesc').value;

    //add textnode of description to li
     li.appendChild(document.createTextNode(newDesc));

    
    
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
//Adding placeholder to items
var itembox=document.getElementById('item');
itembox.placeholder='Add item name';

//create description box 
var descBox=document.createElement('input');

//adding class to descBox
descBox.className='form-control mr-2';

//add id
descBox.id='itemdesc';

//add placeholder
descBox.placeholder='Add description';

//get parentelement of descbox
var form1=document.querySelector('#addForm');

//get sibling element of descBox
var submit=document.querySelector('#submit');

//insert descBox just before sibling element in the parentnode
form1.insertBefore(descBox,submit);

// Filtering objects
var filter=document.getElementById('filter');

// Filter Event
filter.addEventListener('keyup',filterItems);

function filterItems(e){

    //convert text to lowercase
    var text=e.target.value.toLowerCase();

    //get lis
    var items=document.getElementsByTagName('li');

    //convert to array
    Array.from(items).forEach(function (item){
       var itemName=item.childNodes[0].textContent + item.childNodes[1].textContent;
       console.log(itemName);
        if(itemName.toLowerCase().indexOf(text)!=-1){
        
            item.style.display='block';
        }
        
        else{
                item.style.display='none';
            }
    })

}


