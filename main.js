const menu = document.querySelector('.menu')

const iconsmenu = document.querySelectorAll('.toggle')

for (const buttonmenu of iconsmenu) {
  buttonmenu.addEventListener('click', function () {
    menu.classList.toggle('show')
  })
}
