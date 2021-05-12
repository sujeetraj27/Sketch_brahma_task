import React, { useEffect, useState } from 'react'
import Recipes from './Recipes'
import Second from './Second'

export const Secondapi = () => {

    const APP_ID = '832e4e7b'
    const APP_KEY = 'e4ccafd43e0b1185d51be7a7f430eccd'

    const [analysis, setAnalysis] = useState('');


    useEffect(() => {
        analysisRecepis();
    }, [])

    const analysisRecepis = async () => {
        console.log("analysisRecepis")
        const responce = await fetch(
            `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=1%20large%20apple`
        );
        const data = await responce.json();
        setAnalysis(data)
        console.log(data)
    };







    return (
        <div>
            <h1>Calories: {analysis.calories}</h1>
            <h1>TotalWeight: {analysis.totalWeight}</h1>
            <h3>{analysis.healthLabels}</h3>
    healthLabels = {analysis.healthLabels}

        </div>
    )
}
