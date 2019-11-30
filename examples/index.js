const { listDiff, applyPatches, SimpleTinker } = require('../dist/list-diff')

const a = ['1', '2', '3', '4', '5']
const b = ['a', 'b', '4', 'c', '2', 'd', 'e']

const patches = listDiff(a, b)
const tinker = new SimpleTinker()
console.log(applyPatches(a, patches, tinker)) // [ 'a', 'b', '4', 'c', '2', 'd', 'e' ]