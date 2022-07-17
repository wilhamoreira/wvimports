const caps = document.querySelectorAll('select#cap')
const links = document.querySelectorAll('a#compra')

caps.forEach(function (cap, index) {
 cap.addEventListener('change', function() {
  // if(cap.value === '128') {
  //   links[index].href = 'https://capacidade-128.com.br'
  // }else {
  //   links[index].href = 'https://capacidade-240.com.br'
  // }

  links[index].href = cap.value
 })
})
