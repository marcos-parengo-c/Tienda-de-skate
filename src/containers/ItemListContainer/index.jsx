import React from 'react'
import background from './background.webp'

const ItemListContainer = ({children}) => {
    return (
        <div>
            <img src={background} width="100%"/>
            {children}
        </div>
    )
}

export default ItemListContainer

