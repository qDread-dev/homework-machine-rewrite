function simplifySqrt(simpSqrtInput, simpSqrtOutput, k){
    for (let i = 1; i * i <= simpSqrtInput.value; i++)
    {
        if (simpSqrtInput.value % (i * i) == 0)
        {
            k = i;
        }
    }
    if (simpSqrtInput / (k * k) === null)
    {
        simpSqrtOutput.innerHTML = k;
    }
    if (simpSqrtInput.value / (k * k) == 1)
    {
        simpSqrtOutput.innerHTML = k;
    }
    else if (simpSqrtInput.value / (k * k) > 1)
    {
        if (k == "1")
        {
            simpSqrtOutput.innerHTML = "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
        else
        {
            simpSqrtOutput.innerHTML = k + "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
    }
};

function factorials(factorialInput, factorialOutput){
    tmp = factorialInput.value;
    for (let i = parseInt(factorialInput.value); i > 1; i--)
    {
        tmp *= i-1;
    }
    factorialOutput.innerHTML = tmp;
};

// partition a line using 2 points and the ratio between them
function partitionLine(x1, y1, x2, y2, a, b){
    return {
        x: x1 + a * (x2 - x1),
        y: y1 + a * (y2 - y1)
    };
}