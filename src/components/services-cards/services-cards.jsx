import React from 'react';
import { CardGroup } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';
import { BsScissors } from 'react-icons/bs';
import { GiBeard } from 'react-icons/gi';
import { IoDiamond } from 'react-icons/io5';


const Cards = () => {

    return <div>

<CardGroup >

<Card>
  <BsScissors className='scissors' />
  <Card.Body>
    <Card.Title className='premium-haircut'>Premium Haircut</Card.Title>
    <Card.Text>
      tuns + spalat + uscat + aranjat + styling + masaj capilar
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Pret: 60 RON</small>
  </Card.Footer>
</Card>

<Card>
  <AiFillStar className='star' />
  <Card.Body>
    <Card.Title className='superior-experience'>Superior Experience</Card.Title>
    <Card.Text>
      tuns + spalat + aranjat + styling + uscat + tuns barba + contur barba + spalat barba + apa colonie + aranjat + creme + lotiuni + masaj capilar
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Pret: 100 RON</small>
  </Card.Footer>
</Card>

<Card>

  <IoDiamond className='diamond' />
  <Card.Body>
    <Card.Title className='ultimate-experience'>Ultimate Experience</Card.Title>
    <Card.Text>
      tuns + spalat + aranjat + styling + uscat + tuns barba + contur barba + spalat barba + apa colonie + vopsit barba + aranjat + creme + lotiuni + consiliere + masaj capilar
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Pret: 130 RON</small>
  </Card.Footer>
</Card>

<Card>
  <GiBeard className='beard' />
  <Card.Body>
    <Card.Title className='executive-beard'>Executive Beard</Card.Title>
    <Card.Text>
      tuns barba + contur barba + spalat barba + apa colonie + creme
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Pret: 50 RON</small>
  </Card.Footer>
</Card>
</CardGroup>
<div className="bg-submit"><form action="http://localhost:3000/about">
<button type="submit" className="submit-btn">Programeaza-te</button>
</form></div>


</div>

}


export default Cards
 