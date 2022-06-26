// NASA API key = HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn

const button = document.querySelector('.pod')
const imageDiv = document.querySelector('div')

button.addEventListener('click', async () => {
  let response = await axios.get(
    `https://api.nasa.gov/planetary/apod?api_key=HuEXLBHbanki6UBwsARsbTaUZZBa8Qm1IdIg0dRn`
  )
  console.log(response)
  let pic = response.data.url
  imageDiv.innerHTML = `<img src=${pic}>`
})
