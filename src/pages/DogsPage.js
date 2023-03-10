import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import './DogsPage.css'

export default function DogsPage() {
    let { breed } = useParams()
    const [breeds, setBreeds] = useState('')
    // const [selectedBreed, setSelectedBreed] = useState(breed)
    const [images, setImages] = useState([])

    useEffect(() => {
        fetch(`https://dog.ceo/api/breeds/list/all`)
            .then(res => res.json())
            .then(breedsData => {
                const breedsObjToArr = Object.keys(breedsData.message)
                console.log(breedsObjToArr)
                setBreeds(breedsObjToArr)

            })
    }, [])

    useEffect(() => {
        if (!breed) {
            return;
        }

        fetch(`https://dog.ceo/api/breed/${breed}/images`)
            .then(res => res.json())
            .then(imagesData => {
                setImages(imagesData.message.slice(0, 50))
            })
    }, [breed, 
        // selectedBreed
    ])





    // const breedSelectHandler = breed => setSelectedBreed(breed)


  return (
    <div>
        {breeds&& breeds.length > 0 && (
            <div className='breeds-list'>
                {breeds.map((breed, index) => (
                    <div
                        className={`breed-item`}
                        // onClick={() => breedSelectHandler(breed)}
                        key={index}
                    >
                        <NavLink to={'/dogs/' + breed}>
                        {breed}
                        </NavLink>
                    </div>
                ))}
            </div>
        )}
        {images && images.length > 0 && (
            <div className='images-list'>
                {images.map((image, index) => <img key={index} src={image} /> )}
            </div>
        )}
    </div>
  )
}
