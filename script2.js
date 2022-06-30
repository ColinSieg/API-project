// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const dateButton = document.querySelector('.dateButton')
const mediaDiv = document.querySelector('.mediaDiv')
const randButton = document.querySelector('.randButton')

const dateFunc = (start, end) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  )
}

dateButton.addEventListener('click', async () => {
  let date = document.getElementById('search').value
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn&date=${date}`
  )
  let title = response.data.title
  let media = response.data.url
  let explain = response.data.explanation
  let type = response.data.media_type
  if (type === 'video') {
    mediaDiv.innerHTML = `<figure><h1 class="nasa txtCenter">${title}</h1><figcaption class="txtArea">${explain}</figcaption><iframe width="840px" height="630" class="media" src=${media}></iframe></figure>`
  } else if (type === 'image') {
    mediaDiv.innerHTML = `<figure><h1 class="nasa txtCenter">${title}</h1><figcaption class="txtArea">${explain}</figcaption><img class="media" src=${media}></figure>`
  }
  console.log(response)
})

randButton.addEventListener('click', async () => {
  let randDate = dateFunc(new Date(1995, 6, 16), new Date())
  let year = randDate.getFullYear()
  let month = ('0' + (randDate.getMonth() + 1)).slice(-2)
  let day = ('0' + randDate.getDate()).slice(-2)
  let fullDate = year + '-' + month + '-' + day
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn&date=${fullDate}`
  )
  let title = response.data.title
  let media = response.data.url
  let explain = response.data.explanation
  let type = response.data.media_type
  if (type === 'video') {
    mediaDiv.innerHTML = `<figure><h1 class="nasa txtCenter">${title}</h1><figcaption class="txtArea">${explain}</figcaption><iframe width="840px" height="630" class="media" src=${media}></iframe></figure>`
  } else if (type === 'image') {
    mediaDiv.innerHTML = `<figure><h1 class="nasa txtCenter">${title}</h1><figcaption class="txtArea">${explain}</figcaption><img class="media" src=${media}></figure>`
  }
})
