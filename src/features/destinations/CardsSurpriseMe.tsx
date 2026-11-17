import { useTranslation } from 'react-i18next'
import useDestinations from '../../hooks/useDestinations'
import DestinationGroup from './DestinationGroup'

const currentMonth = new Date().getMonth() + 1

export default function CardsSurpriseMe({ budget }: { budget: number | null }) {
  const { t } = useTranslation()
  const { data: destinations } = useDestinations()
  const filteredDestinations = destinations?.filter(
    (d) => budget === null || d.price_from <= budget,
  )
  const bestMonthDestinations = filteredDestinations?.filter((d) =>
    d.best_months.includes(currentMonth),
  )

  const offSeasonDestinations = filteredDestinations?.filter(
    (d) => !d.best_months.includes(currentMonth),
  )

  return (
    <>
      <DestinationGroup title={t('surprise.inSeason')} cards={bestMonthDestinations ?? []} />
      <DestinationGroup title={t('surprise.otherMonths')} cards={offSeasonDestinations ?? []} />
    </>
  )
}
