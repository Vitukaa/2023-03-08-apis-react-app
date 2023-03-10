import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './ActivityPage.css'
import Container from './Container'

export default function ActivityPage() {
    const { category } = useParams()
    const categories = ['random', 'education', 'recreational', 'social', 'diy', 'charity', 'cooking', 'relaxation', 'music', 'busywork']

    const [activity, setActivity] = useState('')

    



        
    useEffect(() => {
        if (!category) {
            return;
        }

        if (category === 'random') {
            fetch(`http://www.boredapi.com/api/activity?`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setActivity(data.activity)
            })


        } else {
            fetch(`http://www.boredapi.com/api/activity?type=${category}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setActivity(data.activity)
            })
        }
    } ,[category])

  return (
    <div className='page-wrapper'>
        <Container>
            <h1 className='main-header'>Bored API</h1>
            <div className='categories-list'>
                {categories.map((category, index) => (
                    <div 
                        key={index}
                        className='category-item'
                    >
                        <NavLink to={`/activity/${category}`}>
                        {category}
                        </NavLink>
                    </div>
                ))}
            </div>
            
            <div className='activity-wrapper'>
                <p>{activity}</p> 
            </div>
        </Container>
    </div>
    
  )
}
