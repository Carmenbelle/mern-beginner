import { useContext } from "react";
import { WorkoutsContext } from "../Context/WorkoutContext";

export const useWorkoutContext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) {
        throw new Error("useWorkoutContext must be used within a WorkoutsContextProvider");
    }

    return context;
}