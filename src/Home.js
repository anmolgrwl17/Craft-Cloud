import React from 'react';
import './Home.css'
import Banner from './Banner'
import Card from './Card'
function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home_section'>
                <Card 
                src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"
                title="Handicraft"
                description="Encourage the hidden talents and skills"
                />
                <Card 
                src="https://images.unsplash.com/photo-1589377108815-c39525a1a597?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1589&q=80"
                title="Natural Products"
                description="Explore nature with our vide range of products"
                />
                <Card 
                src="https://images.unsplash.com/photo-1565665681743-6ff01c5181e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1586&q=80"
                title="Services"
                description="Enjoy various services at your doorstep"
                />
            </div>
            <div className='home_section'>
            <h1>New Comers</h1>
                <Card 
                src="https://images.unsplash.com/photo-1519874179391-3ebc752241dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Voice Over"
                description="Share your Voice to the world"
                price="Rs.700/hour"
                />
                <Card 
                src="https://images.unsplash.com/photo-1589395595310-ecf612c64942?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Connect with Nature"
                description="Switch to natural & biodegradable prodcuts"
                price="Rs.400/hour"/>
                <Card 
                src="https://images.unsplash.com/photo-1518210777420-a2f84c71fffc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
                title="Showacse your story"
                description="Amazing book covers."
                price="Rs.800/hour"/>
            </div>
            <div className='home_section'>
            <h1>Best Sellers</h1>
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
        </div>
    )
}

export default Home
