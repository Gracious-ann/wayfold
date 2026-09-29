import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Container from '../components/layout/Container'

function AppLayout() {
  return (
    <main>
      {/* Header тут, бо він однаковий на всіх сторінках */}
      <Header />
      {/*
        Outlet — місце, куди React Router підставляє дочірній роут з App.tsx,
        який збігся з адресою (на "/" це <Main />, на "/stays" це <Stays /> тощо).
        Тут НЕ повинно бути компонентів конкретних сторінок, бо все, що стоїть у
        цьому файлі поза Outlet, видно на КОЖНІЙ сторінці.
      */}
      <Container>
        <Outlet />
      </Container>
    </main>
  )
}

export default AppLayout
