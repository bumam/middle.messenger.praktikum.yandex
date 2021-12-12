import ErrorPage from '../../components/error/errorPage.index'

new ErrorPage({
  errorCode: '404',
  errorText: 'Что-то пошло не так',
}).render()
