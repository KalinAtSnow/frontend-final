import { useEffect } from "react";

function useVariableCards(setCardsShown: (int:number,)=>void, shownValues: number[]) {
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1280) {
            setCardsShown(shownValues[0]);
          } else if (window.innerWidth >= 1024) {
            setCardsShown(shownValues[1]);
          } else if (window.innerWidth >= 768) {
            setCardsShown(shownValues[2]);
          } else if (window.innerWidth >= 640) {
            setCardsShown(shownValues[3]);
          } else {
            setCardsShown(shownValues[4]);
          }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
}

function useVariableSets(setSetsShown: (int:number)=>void, shownValues: number[]) {
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 1280) {
            setSetsShown(shownValues[0]);
          } else if (window.innerWidth >= 1024) {
            setSetsShown(shownValues[1]);
          } else if (window.innerWidth >= 768) {
            setSetsShown(shownValues[2]);
          } else if (window.innerWidth >= 640) {
            setSetsShown(shownValues[3]);
          } else {
            setSetsShown(shownValues[4]);
          }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);
}

export { useVariableCards, useVariableSets };