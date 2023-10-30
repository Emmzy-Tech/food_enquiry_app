"use client"
import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import NavMenu from '../components/NavMenu/NavMenu';
import PlacePhoto from '../components/PlacePhoto/PlacePhoto';

interface Restuarants {
        formattedAddress: string;
        googleMapsUri: string;
        displayName: {
            text: string
        };
        photos: [{
            name: string;
        }]
}
const Restuarants = () => {
    const [userLocation, setUserLocation] = React.useState<{ latitude: number; longitude: number } | null>(null);
    const [places, setPlaces] = React.useState<Restuarants[]>([]);

    //Get Latitude and Longitude
    React.useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                console.log(latitude, longitude)

                // Now you can use these coordinates to make a request to a restaurant API.
                setUserLocation({ latitude, longitude });

            });
        } else {
            
            console.log(" Error ")
        }

    }, []);

    //Google Places
    React.useEffect(() => {
        console.log(userLocation)
        if (userLocation) {
            const { latitude, longitude } = userLocation
            const fetchData = async () => {
                const requestData = {
                    includedTypes: ["restaurant"],
                    maxResultCount: 10,
                    locationRestriction: {
                        circle: {
                            center: {
                                latitude: latitude,
                                longitude: longitude
                            },
                            radius: 1500.0
                        }
                    }
                };

                try {
                    
                    const response = await fetch(
                        `https://places.googleapis.com/v1/places:searchNearby?key=${process.env.NEXT_PUBLIC_PLACES_API}`,
                        {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                'X-Goog-FieldMask': 'places.displayName,places.photos,places.formattedAddress,places.googleMapsUri'
                            },
                            body: JSON.stringify(requestData)
                        }
                    );

                    const data = await response.json();
                    console.log(data.places);
                    setPlaces(data.places);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };

            fetchData();
        }
    }, [userLocation]);



    // console.log(places)
    return (
        <div>
            <NavMenu />
            <div className="flex pl-8 items-center h-80 w-full bg-purple-950 bg-[url('https://wallpapers.com/images/hd/restaurant-background-2ez77umko2vj5w02.jpg')] bg-no-repeat bg-center bg-cover bg-blend-overlay">
                <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white'>Restuarants</h1>

            </div>
            <div className="container max-w-screen-2xl mx-auto w-full">
                

                <div className="max-w-5xl items mt-10 flex-auto flex justify-left w-full mx-auto flex-wrap">
                {userLocation ? (
                    places && places.length > 0 ? (
                        places.map((place, idx) => (
                            <div className="card w-full md:w-1/2 lg:w-1/3 px-2 mb-3" key={idx}>
                               

                                    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                        <PlacePhoto photoReference={place.photos[0].name} />
                                        <div className="px-3 pb-5">
                                            <a href="#">
                                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{place.displayName.text}</h5>
                                            </a>

                                            <div className="flex items-center justify-between mt-5">
                                                <span className="text-base font-500 text-gray-900 dark:text-white">{place.formattedAddress}</span>

                                            </div>
                                            <a href={place.googleMapsUri} className="text-white block bg-purple-950 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:bg-purple-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-400 dark:hover:bg-purple-500 dark:focus:bg-purple-500 mt-5">Get direction</a>

                                        </div>
                                    </div>

                                </div>
                  
                        ))
                    ) : (
                        <p className='text-center w-full'>No restaurants found.</p>
                        )
                        ) : (
                            <p className='w-full flex justify-center items-center'>
                                <svg version="1.1" id="L5" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve" width={200} height={200}>
    <circle fill="rgba(59, 7, 100,1)" stroke="none" cx="6" cy="50" r="6">
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 15 ; 0 -15; 0 15"
        repeatCount="indefinite"
        begin="0.1"
      />
    </circle>
    <circle fill="rgba(59, 7, 100,1)" stroke="none" cx="30" cy="50" r="6">
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 10 ; 0 -10; 0 10"
        repeatCount="indefinite"
        begin="0.2"
      />
    </circle>
    <circle fill="rgba(59, 7, 100,1)" stroke="none" cx="54" cy="50" r="6">
      <animateTransform
        attributeName="transform"
        dur="1s"
        type="translate"
        values="0 5 ; 0 -5; 0 5"
        repeatCount="indefinite"
        begin="0.3"
      />
    </circle>
  </svg>
                            </p>
                        )}
        

                    


                </div>
            </div>
        </div>
    )
}

export default Restuarants