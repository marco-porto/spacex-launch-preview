export default async function upcoming(request,response){
    //Check if request.method === GET (prevent none GET methods to this endpoint)
    if(request.method === 'GET'){
        const spacexdataApiResponse = await fetch('https://api.spacexdata.com/v4/launches/upcoming');
        const spacexdataApiResponseJson = await spacexdataApiResponse.json();
        
        let data = [];
        if(spacexdataApiResponseJson != undefined && spacexdataApiResponseJson != []){
            spacexdataApiResponseJson.forEach(async launch => {
                data.push({
                    missionPatch:{
                        small:launch.links.patch.small,
                        large:launch.links.patch.large
                    },
                    rocket:{
                        id:launch.rocket
                    },
                    launchpad:{
                        id:launch.launchpad
                    },
                    crew:{
                        ids:launch.crew
                    },
                    payload:{
                        id:launch.payloads[0],
                    },
                    date:{
                        utc:launch.date_utc,
                        local:launch.date_local,
                        unix:launch.date_unix
                    },
                    name:launch.name,
                    details:launch.details
                })
            });

            data.forEach(async (launch,index) => {
                //payload
                if(launch.payload.id != undefined){
                    const spacexdataApiResponse = await fetch(`https://api.spacexdata.com/v4/payloads/${launch.payload.id}`);
                    const spacexdataApiResponseJson = await spacexdataApiResponse.json();
                    if(spacexdataApiResponseJson != undefined){
                        console.log(index,spacexdataApiResponseJson.orbit,data[index].payload)
                        data[index].payload.orbit = spacexdataApiResponseJson.orbit
                        console.log(index,spacexdataApiResponseJson.orbit,data[index].payload)
                    }
                }
            });
        }
        response.json(data);
    }else{
        response.status(405).json({code:'Method Not Allowed'}); //return 405 http code if request.method !== GET
    }
}