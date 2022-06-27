// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const podButton = document.querySelector('.podButton')
const randButton = document.querySelector('.randButton')
const imgDiv = document.querySelector('.imgDiv')

podButton.addEventListener('click', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
  )
  let pic = response.data.url
  imgDiv.innerHTML = `<img class="imgSmall" src=${pic}>`
})

imgDiv.addEventListener('mouseenter', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
  )
  let pic = response.data.url
  imgDiv.innerHTML = `<img class="imgFull" src=${pic}>`
})

imgDiv.addEventListener('mouseleave', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
  )
  let pic = response.data.url
  imgDiv.innerHTML = `<img class="imgSmall" src=${pic}>`
})

// randButton.addEventListener('click', async () => {})
