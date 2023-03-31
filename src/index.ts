
import NavPage from './pages/nav';
window.addEventListener('DOMContentLoaded', () => {

  const root = document.querySelector('#app')!;

  const homePage = new NavPage({});
  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});