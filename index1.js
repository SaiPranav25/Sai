function formvalidate(){
    var name=document.getElementById('name').value;
    var email=document.getElementById('email').value;
    var phone=document.getElementById('phone').value;
    if(name='') errormsg += 'enter name\n';
    if(email='') errormsg += 'enter email\n';
    if(phone='') errormsg += 'enter ph\n';
    if(errormsg=''){
        alert(errormsg);
        return false;
    }
    alert('form succes');
    window.location.href='smsg.html';
}