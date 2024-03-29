import React, { useEffect} from 'react'
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'
import { useWorkoutContext } from '../components/hooks/useWorkoutContext'

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext()

  useEffect(() => {
      const fetchWorkOuts = async () => {
        const response = await fetch('/api/workouts')
        const json = await response.json()

        if (response.ok) {
          dispatch({type: 'SET_WORKOUT', payload: json})
        }
      }
      fetchWorkOuts()
  }, [dispatch])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
      </div>
      <WorkoutForm />
    </div>
  )
}

export default Home