import React, { useEffect, useState } from 'react'

export default function ChuckNorrisPage() {

    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('')
    const [joke, setJoke] = useState('')
 
    useEffect(() => {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then(categoriesData => {
                setCategories(categoriesData)
                setSelectedCategory(categoriesData[0])
            })
    }, [])

    const selectedCategoryHandler = (event) => {
        setSelectedCategory(event.target.value)
    }


    const jokeSubmitHandler = (event) => {
        event.preventDefault()

        fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
            .then(res => res.json())
            .then(jokeByCategory => {
                console.log(jokeByCategory)
                setJoke(jokeByCategory.value)
            })
    }


  return (
    <div className='page-wrapper'>
        <h1>Chuck Norris jokes page</h1>
        <form onSubmit={jokeSubmitHandler}>
            <select name='selectInput' onChange={selectedCategoryHandler}>
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>
            <button>Get joke</button>
        </form>
        <p>{joke}</p>
    </div>

  )
}
