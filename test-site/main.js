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

inputRows.setAttribute('id', 'rowInput');
inputCells.setAttribute('id', 'cellInput');


inputRows.setAttribute('style', 'display: flex; justify-content: center; padding: 5px')
inputCells.setAttribute('style', 'display: flex; justify-content: center; padding: 5px')



function tableGenerator() {
  const row = document.getElementById('rowInput')
  const cell = document.getElementById('cellInput')
  let tableRows = row.value
  let tableCells = cell.value;

  console.log('table rows', tableRows)
  console.log('table cells', tableCells)
  const newTable = document.createElement('table')

  while (tableRows > 0) {
    debugger;
    const tableRow = document.createElement('tr')
    newTable.appendChild(tableRow)
    tableRow.setAttribute('style', 'border: 1px solid black')
    const text = document.createTextNode('hi mom!')
    tableRow.appendChild(text)
    while (tableCells > 0) {
      const cellText = document.createTextNode('greetings fellow programmer')
      const tableCell = document.createElement('td');
      tableCell.appendChild(cellText)
      tableRow.appendChild(tableCell)


      tableCells--;
    }
    tableRows--
    tableCells = cell.value

  }
  body.appendChild(newTable)
  console.log(' i ran ! table created!')

}

const button = document.createElement('button')
const buttonText = document.createTextNode('Create Table');
button.appendChild(buttonText)

button.addEventListener('click', tableGenerator);

body.appendChild(button)
