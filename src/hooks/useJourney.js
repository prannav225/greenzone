import { useContext } from "react";
import { JourneyContext } from "../context/JourneyContext";

export const useJourney = () => useContext(JourneyContext);
