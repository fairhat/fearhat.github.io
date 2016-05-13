const fs = require('fs')
const rows = fs.readFileSync('./data.csv', 'utf8').split('\n')

const keys = rows[0].split(';')
const mappedKeys = {
  [keys[0]]: 'Alter',
  [keys[1]]: 'Geschlecht',
  [keys[2]]: 'Smartphonenutzer',
  [keys[3]]: 'Nebentätigkeit h / Woche',
  [keys[4]]: 'Nebentätigkeit',
  [keys[5]]: 'Internet am Smartphone',
  [keys[6]]: 'Hauptnutzung d. Smartphones',
  [keys[7]]: 'Studienrelevante Tätigkeiten',
  [keys[8]]: 'Nutzung h / Tag',
  [keys[9]]: 'Letzter Blick vor dem Schlafen',
  [keys[10]]: 'Smartphone zuhause lassen',
  [keys[11]]: 'Neben Freunden nutzen',
  [keys[12]]: 'Begünstigung der Bequemlichkeit',
  [keys[13]]: 'Eine Woche ohne',
  [keys[14]]: 'Stressfaktor',
  [keys[15]]: 'Nachteile / Schäden',
}

const dataRows = rows.filter((r,i) => i !== 0)
const DATA = dataRows.map((r) => {
  const row = r.split(';')
  return ({
    [keys[0]]: row[0],
    [keys[1]]: row[1],
    [keys[2]]: row[2],
    [keys[3]]: row[3],
    [keys[4]]: row[4],
    [keys[5]]: row[5],
    [keys[6]]: row[6],
    [keys[7]]: row[7],
    [keys[8]]: row[8],
    [keys[9]]: row[9],
    [keys[10]]: row[10],
    [keys[11]]: row[11],
    [keys[12]]: row[12],
    [keys[13]]: row[13],
    [keys[14]]: row[14],
    [keys[15]]: row[15],
  })
})

const dataFile = {
  keys: mappedKeys,
  data: DATA,
}

fs.writeFileSync('./data.json', JSON.stringify(dataFile), 'utf8')
