const body = document.querySelector('body')
const header = document.createElement("h1")
const headerText = document.createTextNode('Hello! Welcome to my site!')
header.setAttribute("style", "display: flex; color: red; justify-content: center")
header.appendChild(headerText)
body.appendChild(header);


const table = document.createElement('table')



const array = [
  ['Car', 'Top Speed', 'Price'],
  ['Chevrolet', '120mph', '$10,000'],
  ['Pontiac', '140pmh', '$20,000']
]

body.appendChild(table);

array.forEach(row => {
  let tr = table.insertRow()


  row.forEach(column => {
    let td = tr.insertCell()
    td.setAttribute('style', "border: 1px solid black")
    td.innerText = column
  })
})




table.setAttribute('style', "display: flex; justify-content: center;")


const inputRows = document.createElement('input')
const inputCells = document.createElement('input')

body.appendChild(inputRows)
body.appendChild(inputCells);

inputRows.setAttribute('style', 'display: flex; justify-content: center; padding: 5px')
inputCells.setAttribute('style', 'display: flex; justify-content: center; padding: 5px')



function tableGenerator() {
  let tableRows = inputRows.value
  let tableCells = inputCells.value;
  const newTable = document.createElement('table')

  while (tableRows > 0) {
    const tableRow = document.create

    while (tableCells > 0)

  }

}
