import React from 'react'
import Card from '../../shared/components/UIElements/Card'
import PlaceItem from './PlaceItem'

const PlaceList = props => {
  if( !props.items.length ) {
    return <div className="place-list center">
      <Card>
        <h2>No places found</h2>
        <button>Share place</button>
      </Card>
    </div>
  }

  return (
    <ul className="place-list">
      {props.items.map( place => <PlaceItem />)}
    </ul>
  )
}

export default PlaceList