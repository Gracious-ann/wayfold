import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppLayout from './AppLayout'
import Flight from '../features/flights/Flight'
import FlightStays from '../features/flights/FlightStays'
import Stays from '../features/stays/Stays'
import MyTrips from '../features/trips/MyTrips'
import Main from '../features/home/Main'
import PageNotFound from '../components/PageNotFound'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*
          Батьківський роут — «рамка» для всіх сторінок.
          AppLayout показується на КОЖНІЙ адресі, що починається з "/",
          а всередині нього <Outlet /> — «дірка», куди підставляється дочірній роут нижче.
        */}
        <Route path="/" element={<AppLayout />}>
          {/*
            index — дочірній роут для адреси, яка ТОЧНО дорівнює батьківській ("/").
            Без нього на "/" в <Outlet /> не було б нічого.

            Раніше ти клала <Main /> прямо в AppLayout поруч з <Outlet />.
            Але AppLayout — рамка для всіх сторінок, тому Hero було видно і на /flights, і на /stays.
            Тепер <Main /> — окремий роут: React Router підставляє його в <Outlet /> лише на "/",
            а на інших адресах на його місці з'являється відповідна сторінка.

            Що буде в <Outlet /> на різних адресах:
            "/"        → <Main />
            "/flights" → <Flight />
            "/stays"   → <Stays />
            "/abc"     → <PageNotFound />  (path="*" ловить усе, що не збіглося вище)
          */}
          <Route index element={<Main />} />
          {/* path без "/" на початку — він відносний до батька: "flights" = "/flights" */}
          <Route path="flights" element={<Flight />} />
          <Route path="stays" element={<Stays />} />
          <Route path="flight-stay" element={<FlightStays />} />
          <Route path="trips" element={<MyTrips />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
