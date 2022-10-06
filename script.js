function checkPageFocus(){
    if(document.hasFocus()){
        document.title = "THM";
        }
    else{
        document.title ="Dashboard";

    }
}
setInterval(checkPageFocus, 200);