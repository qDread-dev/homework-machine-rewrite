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
        simpSqrtOutput.value = k;
    }
    if (simpSqrtInput.value / (k * k) == 1)
    {
        simpSqrtOutput.value = k;
    }
    else if (simpSqrtInput.value / (k * k) > 1)
    {
        if (k == "1")
        {
            simpSqrtOutput.value = "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
        else
        {
            simpSqrtOutput.value = k + "\u{221A}" + (simpSqrtInput.value / (k * k));
        }
    }
};
