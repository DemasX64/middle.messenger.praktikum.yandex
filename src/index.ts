
import Handlebars from 'handlebars';
import NavPage from './pages/nav';
window.addEventListener('DOMContentLoaded', () => {

  Handlebars.registerHelper('ternary', function(cond, v1, v2) {
    return cond ? v1 : v2;
  });
  const root = document.querySelector('#app')!;

  const homePage = new NavPage({});
  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});