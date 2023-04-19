function on_calcular()
{

    document.getElementById("tot_desc").value = parseFloat(document.getElementById("numero1").value) * parseFloat(document.getElementById("desconto").value) / 100;


    document.getElementById("vlr_fim").value = parseFloat(document.getElementById("numero1").value) - parseFloat(document.getElementById("tot_desc").value);

}