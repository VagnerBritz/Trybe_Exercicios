const estados = [
{sigla:"ac", nome: "Acre"},
{sigla:"al", nome: "Alagoas"},
{sigla:"am", nome: "Amazonas"},
{sigla:"ap", nome: "Amapá"},
{sigla:"ba", nome: "Bahia"},
{sigla:"ce", nome: "Ceará"},
{sigla:"df", nome: "Distrito"},
{sigla:"es", nome: "Espírito Santo"},
{sigla:"go", nome: "Goiás"},
{sigla:"ma", nome: "Maranhão"},
{sigla:"mt", nome: "Mato Grosso"},
{sigla:"ms", nome: "Mato Grosso do Sul"},
{sigla:"mg", nome: "Minas Gerais" },
{sigla:"pa", nome: "Pará"},
{sigla:"pb", nome: "Paraíba"},
{sigla:"pr", nome: "Paraná"},
{sigla:"pe", nome: "Pernambuco"},
{sigla:"pi", nome: "Piauí"},
{sigla:"rj", nome: "Rio de Janeiro"},
{sigla:"rn", nome: "Rio Grande do Norte"},
{sigla:"ro", nome: "Rondônia"},
{sigla:"rs", nome: "Rio Grande do Sul"},
{sigla:"rr", nome: "Roraima"},
{sigla:"sc", nome: "Santa Catarina"},
{sigla:"se", nome: "Sergipe"},
{sigla:"sp", nome: "São Paulo"},
{sigla:"to", nome: "Tocantins"},
]
const listaEstados = document.querySelector('#estado');
for (let index =0; index <estados.length; index +=1 ) {
    const option = document.createElement('option');
    let siglasEEstados = estados[index];
    option.value = siglasEEstados.sigla;
    option.innerHTML = (siglasEEstados.sigla.toUpperCase() + " > "+ siglasEEstados.nome);
    listaEstados.appendChild(option);

}