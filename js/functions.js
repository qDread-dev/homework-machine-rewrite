window.onload = function(){
    let title = document.title;
    setInterval(changeTitle(title), 1000);
}

function changeTitle(title){
    if (document.hasFocus()){
        document.title = title;
    }
    if(!document.hasFocus()){
        document.title = "Dashboard";
    }
}


// Below are the functions for the calculators

function simplifySqrt(simpSqrtInput){
    k = 1;
    for (let i = 1; i * i <= simpSqrtInput; i++)
    {
        if (simpSqrtInput % (i * i) == 0)
        {
            k = i;
        }
    }
    if (simpSqrtInput / (k * k) === null)
    {
        return k;
    }
    if (simpSqrtInput / (k * k) == 1)
    {
        return k;
    }
    else if (simpSqrtInput / (k * k) > 1)
    {
        if (k == "1")
        {
            return "\u{221A}" + (simpSqrtInput / (k * k));
        }
        else
        {
            return k + "\u{221A}" + (simpSqrtInput / (k * k));
        }
    }
};

function factorials(factorialInput, factorialOutput){
    tmp = factorialInput.value;
    if (parseInt(factorialInput.value) == 0){
        factorialOutput.innerHTML = 1;
        return;
    }
    for (let i = parseInt(factorialInput.value); i > 1; i--)
    {
        tmp *= i-1;
    }
    factorialOutput.innerHTML = tmp;
};

