function checkPageFocus(){
    if(document.hasFocus()){
        document.tile = "THM lmao";
        }
    else{
        document.title ="Dashboard";
    }
}
setInterval(checkPageFocus, 300);