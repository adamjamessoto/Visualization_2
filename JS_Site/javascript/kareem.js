const w = window.innerWidth
const h = window.innerHeight
const p = document.querySelector('p')

const getPercentX = (x) => Math.round(x / w * 360)

document.addEventListener('mousemove', (e) => {
  const percentX  = getPercentX(e.clientX)
  const gradStart = `hsl(${percentX}, 100%, 75%)`
  const gradEnd   = `hsl(${(percentX + 120) % 360}, 100%, 50%)`
  
  document.documentElement.style.setProperty('--grad-start', gradStart)
  document.documentElement.style.setProperty('--grad-end', gradEnd)
  p.setAttribute('data-gradStart', gradStart)
  p.setAttribute('data-gradEnd', gradEnd)
})
