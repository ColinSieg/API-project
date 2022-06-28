// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const dateButton = document.querySelector('.dateButton')
const imgDiv = document.querySelector('.imgDiv')

dateButton.addEventListener('click', async () => {
  let date = document.getElementById('search').value
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn&date=${date}`
  )
  let pic = response.data.url
  let explain = response.data.explanation
  imgDiv.innerHTML = `<figure><img class="imgFull" src=${pic}><figcaption>${explain}</figcaption></figure>`
})
