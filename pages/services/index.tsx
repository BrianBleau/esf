import type { NextPage } from 'next'
import BusinessPlan from '../../components/services/BusinessPlan';
import Celebrate from '../../components/services/Celebrate';
import CreditScore from '../../components/services/CreditScore';
import Financials from '../../components/services/Financials';
import Funding from '../../components/services/Funding';
import Goals from '../../components/services/Goals';
import Marketing from '../../components/services/Marketing';

const Services: NextPage = () => {
  return (
    <>
      <BusinessPlan />
      <CreditScore />
      <Funding />
      <Marketing />
      <Financials />
      <Goals />
      <Celebrate />
    </>
  )
}

export default Services;