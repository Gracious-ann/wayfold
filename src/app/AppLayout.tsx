import { Outlet } from 'react-router-dom'
import Header from '../components/layout/Header'
import Container from '../components/layout/Container'
import Footer from '../components/layout/Footer'

function AppLayout() {
  return (
    // ФУТЕР ВНИЗУ, крок 1 — обгортка всієї сторінки.
    // ⚠ У className пишемо лише класи Tailwind через пробіл, НЕ CSS.
    //   Було "display: flex, flex-direction: column, min-height: 100vh" — браузер
    //   шукав класи з такими назвами, їх немає, тому нічого не працювало.
    // flex         → display: flex
    // flex-col     → flex-direction: column — Header, main, Footer стовпчиком
    // min-h-screen → min-height: 100vh — обгортка щонайменше на всю висоту екрана,
    //                навіть коли на сторінці мало вмісту
    <div className="flex min-h-screen flex-col">
      <Header />
      {/*
        Outlet — місце, куди React Router підставляє дочірній роут з App.tsx,
        який збігся з адресою (на "/" це <Main />, на "/stays" це <Stays /> тощо).
        Тут НЕ повинно бути компонентів конкретних сторінок, бо все, що стоїть у
        цьому файлі поза Outlet, видно на КОЖНІЙ сторінці.
      */}
      {/*
        ФУТЕР ВНИЗУ, крок 2 — main забирає все вільне місце.
        grow → flex-grow: 1. Працює, бо main — пряма дитина flex-обгортки вище.
        Вільна висота екрана (100vh мінус Header і Footer) дістається main,
        і він «розпирає» простір, штовхаючи Footer у самий низ.
        Розтягуємо саме main, а не Footer: інакше лінія футера почалась би
        посеред екрана, а під нею була б порожнеча.
      */}
      <main className="grow">
        <Container>
          <Outlet />
        </Container>
      </main>
      {/* ФУТЕР ВНИЗУ, крок 3 — Footer нічого особливого не потребує: він просто останній */}
      <Footer />
    </div>
  )
}

export default AppLayout
