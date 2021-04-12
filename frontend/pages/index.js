function Home({ data }) {
  console.log(data)
  return (<div>
    {data.map((launch,index) => (
        <div className="grid grid-rows-3 grid-flow-col gap-4 h-full m-20" key={index}>
          <div className="row-span-3 p-10 rounded h-full" style={{backgroundColor:"#141416"}}>
            <div>
              <h1 className="text-3xl text-white font-semibold">{launch.name}</h1>
              <h6 className="text-sm text-gray-500 font-semibold">{launch.date_utc}</h6>
            </div>

            <div className="mt-10 text-white">
              {launch.details}
            </div>
          </div>
          <div className="row-span-3 col-span-2 p-10 rounded h-full" style={{backgroundColor:"#141416"}}>3</div>
        </div>
      ))    
    }
    </div>)   
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
