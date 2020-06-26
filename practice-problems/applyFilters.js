function applyFilters(items, exclusions) {
  const setObject = {}
  for (let i = 0; i < exclusions.length; i++) {
    const exclusion = exclusions[i]
    if (!setObject[exclusion.k]) {
      setObject[exclusion.k] = [exclusion.v]
    } else {
      setObject[exclusion.k].push(exclusion.v)
    }
  }

  console.log('setObject: ', setObject)

  const returnArray = []

  for (let i = 0; i < items.length; i++) {
    const itemKey = Object.keys(items[i])
    const itemEntries = Object.entries(items[i])
    const objectKeys = Object.keys(setObject);
    const objectValues = Object.entries(setObject);

    if (objectKeys.includes(itemKey)) {
      console.log('i ran ')
    }
    console.log(itemKey);
    console.log(itemEntries);
    console.log(objectKeys);
    console.log(objectValues)

  }
}
