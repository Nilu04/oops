import React from 'react'
import Left from '../left/Left';
import Right from '../right/Right';
import Header from '../header/Header';
import "./MealPlanPage.css";
import MiddleMealPlan from '../middlemealplan/MiddleMealPlan';
import MealPlanForm from '../right-meal-plan-form copy/MealPlanForm';
export default function MealPlanPage ({ authenticated, onLogout }) {
  return (
    <div style={{backgroundColor:'#F5F7F8'}} >
        <Header authenticated={authenticated} onLogout={onLogout} />
    <main style={{backgroundColor:'#F5F7F8'}}>
       <div className='container'>
          <Left />
          <MiddleMealPlan />
          <MealPlanForm />
       </div>
    </main>
    </div>
    
  )
}
