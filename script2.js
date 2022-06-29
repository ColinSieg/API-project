// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const dateButton = document.querySelector('.dateButton')
const mediaDiv = document.querySelector('.mediaDiv')

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
    mediaDiv.innerHTML = `<figure><h1 class="txtCenter">${title}</h1><iframe width="840px" height="630" class="media" src=${media}></iframe><figcaption>${explain}</figcaption></figure>`
  } else if (type === 'image') {
    mediaDiv.innerHTML = `<figure><h1 class="txtCenter">${title}</h1><img class="media" src=${media}><figcaption>${explain}</figcaption></figure>`
  }
})
