import type { ReactNode } from 'react'

// Пропси компонента завжди приходять ОДНИМ об'єктом: { children, className, ... }.
// Тому їх треба або деструктурувати ({ children }), або брати props.children.
// Було: `function Container(children: React.ReactNode)` — тоді змінна `children`
// містила б увесь об'єкт пропсів, а не вміст між <Container>...</Container>.
type ContainerProps = {
  children: ReactNode // усе, що покладено між <Container> і </Container>
  className?: string // «?» = необов'язковий проп: додаткові класи ззовні, напр. "flex items-center"
}

// Container — «коробка» для вмісту: обмежує ширину і дає бічні відступи.
// Він НЕ відповідає за фон і вертикальні відступи — це робить зовнішній <header> / <section>.
export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div
      className={
        // mx-auto        → margin: 0 auto — ставить коробку по центру екрана
        // w-full         → width: 100% — на вузьких екранах займає всю ширину
        // max-w-[1440px] → max-width: 1440px — ширше макета не розтягується
        // px-5           → padding 0 20px з боків — як у мобільному макеті
        // lg:px-20       → від 1024px екрана відступ 80px — як у десктопному макеті
        `mx-auto w-full max-w-[1440px] px-5 lg:px-20 ${className}`
      }
    >
      {children}
    </div>
  )
}
