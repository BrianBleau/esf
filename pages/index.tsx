import type { NextPage } from 'next'
import Overview from '../components/home/Overview'
import Title from '../components/home/Title'

const Home: NextPage = () => {
  return (
    <div>
      <Title />
      <Overview />
    </div>
  )
}

export default Home
