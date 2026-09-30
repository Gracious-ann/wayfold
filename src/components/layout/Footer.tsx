import Container from './Container'
import FooterNav from './FooterNav'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-border-soft py-8">
      <Container className="flex items-center gap-8 text-sm text-fg-muted">
        <Logo />
        <p className="grow">A portfolio project. Flights and stays run on test data.</p>
        <FooterNav />
      </Container>
    </footer>
  )
}
