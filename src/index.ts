import Form from './components/form';
import  ChatPage from './pages/chat';
import ErrorPage from './pages/error';
import ProfilePage from './pages/profile';
import Handlebars from 'handlebars';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
window.addEventListener('DOMContentLoaded', () => {

  Handlebars.registerHelper('ternary', function(cond, v1, v2) {
    return cond ? v1 : v2;
  });
  const root = document.querySelector('#app')!;

  const homePage = new RegistrationPage({});
  root.append(homePage.getContent()!);

  homePage.dispatchComponentDidMount();
});