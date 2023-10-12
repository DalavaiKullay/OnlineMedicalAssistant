function changelink(){
    let name=document.getElementById("gen");
    let atag =document.getElementById('l');
    if(name.value=='female' || name.value=="Female" || name.value=="FEMALE"){
    atag.setAttribute('href','female.html')
    }else if(name.value=='male'|| name.value=="MALE" || name.value=="Male"){
        atag.setAttribute('href','male.html')
    }else{
        atag.setAttribute('href','https://www.iskcon.org/')
    }
}