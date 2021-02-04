import React from 'react';
import Card from './Card'

function Handicraft() {
    return (
        <div className='handicraft section'>
            <h1>Handicraft</h1>
        <div className='home_section'>
            <h1>Types:</h1>
            <Card
                src="https://images.unsplash.com/photo-1519874179391-3ebc752241dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Voice Over"
                description="Share your Voice to the world"
                price="Rs.700/hour" />
            <Card
                src="https://images.unsplash.com/photo-1589395595310-ecf612c64942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Connect with Nature"
                description="Switch to natural & biodegradable prodcuts"
                price="Rs.400/hour" />
            <Card
                src="https://images.unsplash.com/photo-1518210777420-a2f84c71fffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Showacse your story"
                description="Amazing book covers."
                price="Rs.800/hour" />
                <Card 
                src="https://images.unsplash.com/photo-1587502623997-f8a7417849ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1649&q=80"
                title="Start an online business"
                description="A complete guide and assistance."
                price="Rs.700/hour"
                />
                <Card 
                src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
                title="Digital Marketing made easy"
                description="A practical guide to understand what is digital marketing"
                price="Rs.400/hour"/>
                <Card 
                src="https://images.unsplash.com/photo-1522139137660-4248e04955b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1655&q=80"
                title="Create a logo"
                description="A step-by-step guide to create a memorable business logo"
                price="Rs.800/hour"/>
        </div>
        </div>);
}
export default Handicraft;