var form=document.getElementById('my-form');
var userlist=document.getElementById('items');

form.addEventListener('submit',setToLocalStorage);

function setToLocalStorage(e){
    e.preventDefault();

    var name=e.target.username.value;
    var email=e.target.useremail.value;
    var mobno=e.target.userphonno.value;

    const obj={ name,email,mobno};
    

    localStorage.setItem(email,JSON.stringify(obj));

    //Adding newly input userdetails onto li

    var newuser=' '+'Name :' +obj.name+' | '+'Email :' +obj.email+' | '+'Mob No :' +obj.mobno;

    var li=document.createElement('li');

    li.className="items1";
    li.id=obj.email;
    li.name=obj.name;
    li.for=obj.mobno;

    console.log(li);
    
    li.appendChild(document.createTextNode((newuser)));


     //Adding delButton to each userdetail

     var delButton=document.createElement('button');
    
     delButton.className='deletebutton';
 
     delButton.id='delete';
 
     delButton.style.backgroundColor='#eb4343';
     delButton.style.padding= '2px 2px';
     delButton.style.color= 'white';
     delButton.style.borderRadius= '5px';
     delButton.style.width='20%';
     
     console.log(delButton);
     
 
     delButton.appendChild(document.createTextNode('DELETE'));
 
     li.appendChild(delButton);

    userlist.appendChild(li);

}

//to add event to delete button
userlist.addEventListener('click',removeUser);

//function to remove item
function removeUser(a){
    
      if(a.target.textContent==='DELETE'){
        
        if(confirm('Do you want to delete ?')){
            var li=a.target.parentElement;
            userlist.removeChild(li);

            var email=li.id;
            localStorage.removeItem(email);

        }
   }
}
