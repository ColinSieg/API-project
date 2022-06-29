// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const podButton = document.querySelector('.podButton')
const mediaDiv = document.querySelector('.mediaDiv')

podButton.addEventListener('click', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
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
