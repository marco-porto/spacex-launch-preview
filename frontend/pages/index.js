import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

function Home({ data }) {
  console.log(data)
  return (
    <section>
      <Navbar/>
      <Hero/>
    </section>
    

    
  )   
}

export async function getStaticProps(){
  const res = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
  const data = await res.json();
  return{
    props:{
      data,
    }
  }
}
export default Home
