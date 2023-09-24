import { showingCard } from '../../../constants/contentArray'
import ShowingCard from './ShowingCard'

const SolutionSession = () => {

    return (
        <div className='solution-container'>
            <div className='solution-introduce'>
                SOLUTION
            </div>
            <ShowingCard showingCard={showingCard} />

        </div>
    )
}

export default SolutionSession