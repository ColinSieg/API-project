// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const podButton = document.querySelector('.podButton')
const learnMore = document.querySelector('.learnMore')
const imgDiv = document.querySelector('.imgDiv')

podButton.addEventListener('click', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
  )
  let pic = response.data.url
  let explain = response.data.explanation
  imgDiv.innerHTML = `<figure><img class="imgFull" src=${pic}><figcaption>${explain}</figcaption></figure>`
  console.log(response.data)
})
