function on_calcular()
{

    const vl_operacao = document.getElementById("operacao");

    if ( vl_operacao.value == "SUM" ) 
    {

        document.getElementById("resultado").innerHTML = parseFloat(document.getElementById("num1").value) + parseFloat(document.getElementById("num2").value);

    }
    else if ( vl_operacao.value == "SUB" )
    {

        document.getElementById("resultado").innerHTML = parseFloat(document.getElementById("num1").value) - parseFloat(document.getElementById("num2").value);

    }

    else if ( vl_operacao.value == "DIV" )
    {

        const vl_divisor = document.getElementById("num2")

        if ( vl_divisor.value == "0" ) 
        {
            document.getElementById("resultado").innerHTML = "Divisor é igual a zero";
        }
        else 
        {
            document.getElementById("resultado").innerHTML = parseFloat(document.getElementById("num1").value) / parseFloat(document.getElementById("num2").value);
        }

    }

}