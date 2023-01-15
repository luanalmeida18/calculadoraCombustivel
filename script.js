function combustivelVantajoso () {
  let precoAlcool = document.getElementById('alcool').value
  let precoGasolina = document.getElementById('gasolina').value

  if (precoAlcool != "") {
    if (precoGasolina != "") {
      let valorComparacao = precoAlcool / precoGasolina
      if (valorComparacao >= "0.7") {
        document.getElementById("resultado").innerHTML = "O combustível mais vantajoso é a Gasolina"
      } else {

        document.getElementById("resultado").innerHTML = "O combustível mais vantajoso é o Alcool"
      }
    } else {
      alert("Preencha o Preço da Gasolina")
    }
  } else {
    alert("Preencha o Preço do Alcool")
  }
}






