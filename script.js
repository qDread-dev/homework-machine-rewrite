function checkPageFocus(){
    if(document.hasFocus()){

        }
    else{
        document.title ="Dashboard";
    }
}
setInterval(checkPageFocus, 300);