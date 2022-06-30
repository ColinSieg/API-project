const dateFunc = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

const randDate = dateFunc(new Date(1995, 6, 16), new Date())

const year = randDate.getFullYear()
const month = ('0' + (randDate.getMonth() + 1)).slice(-2)
const day = ('0' + randDate.getDate()).slice(-2)
const fullDate = year + '-' + month + '-' + day
console.log(fullDate)
