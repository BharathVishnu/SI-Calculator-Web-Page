function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    if (principal <= 0 || isNaN(principal))
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return

    }


    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML="If you deposit <strong>"+<mark>principal</mark>+"</strong>,\<br\>at an interest rate of <strong>"+<mark>rate</mark>+"%</strong>\<br\>You will receive an amount of <strong>"+<mark>Interest</mark>+"</strong>,\<br\>in the year <strong>"+<mark>years</mark>+"</strong>\<br\>"

    
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}