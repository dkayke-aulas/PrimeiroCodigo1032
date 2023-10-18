import './style.global.css'
import { Login } from './pages/login.page.js'
import { NotFound } from './pages/not-found.page.js'

const Router = {
  '#login': { component: Login, path: '#login' },
  '#404': { component: NotFound, path: '#404' }
}

function redirectPage() {
  const root = document.querySelector('#root')
  let route

  if(window.location.hash === "") {
    route = Router['#login']
  }
  else {
    route = Router[window.location.hash] || Router['#404']
  }

  root.innerHTML = null
  root.append(route.component())
  window.history.pushState(null, null, route.path)
}

window.addEventListener('load', () => {
  window.addEventListener('hashchange', redirectPage)
  redirectPage()
})
