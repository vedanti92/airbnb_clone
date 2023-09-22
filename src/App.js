import './App.css';

function Navbar() {
  return (
    <nav>
      <img src="https://logodownload.org/wp-content/uploads/2016/10/airbnb-logo-1-1.png" alt="Airbnb Logo" />
    </nav>
  )
}

function MainComponent() {
  return (
    <section className='main-component'>
      <img className="photo-grid" src="https://airbnb-experience-clone-ten.vercel.app/airbnb-pics.png" alt="Grid" />
      <h1 className='heading'>Online Experiences</h1>
      <p className='para'>Join unique interactive activities led by one-of-a-kind hosts - all without leaving home.</p>
    </section>
  )
}

function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
      badgeText = "ONLINE"
    }
  return (  
    <div className='card'>
      {badgeText && <div className='card--badge'>{badgeText}</div>}
      <img className='card--image' src={props.img} alt=' ' />
      <div className='card--stats'>
        <img className='card--star' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Red_star.svg/1235px-Red_star.svg.png" alt="Star" />
        <span>{props.rating}</span>
        <span className='gray'>{props.reviewCount} • </span>
        <span className='gray'>{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
  )
}

function App() {
  return (
    <div>
      <Navbar />
      <MainComponent />
      <section className='cards-list'>
        <Card
          img="https://scrimba-airbnb-page.vercel.app/static/media/katie-zaferes.4dcb2224d553ccd977a4.png"
          rating="5"
          reviewCount="(6)"
          location="Online"
          title="Life lessons with Katie Zaferes"
          price={136}
          openSpots = {0}
        />
        <Card
          img="https://scrimba-airbnb-page.vercel.app/static/media/wedding-photography.de6d8e47cc4f6902350d.png"
          rating="5"
          reviewCount="(30)"
          location="Online"
          title="Learn wedding photography"
          price={125}
          openSpots={27}
        />
        <Card
          img="https://scrimba-airbnb-page.vercel.app/static/media/mountain-biking.4a10cddcb175d2ec7128.png"
          rating="4.8"
          reviewCount="(2)"
          location="Norway"
          title="Group mountain biking"
          price={50}
          openSpots={3}
        />
      </section>
    </div>
  );
}

export default App;