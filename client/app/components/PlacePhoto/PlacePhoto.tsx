import Image from 'next/image';
import React from 'react';

interface PlacePhotoProps {
    photoReference: string;
  }

const PlacePhoto:React.FC<PlacePhotoProps> = ({ photoReference }) => {
  const [photoUrl, setPhotoUrl] = React.useState('');
  

  React.useEffect(() => {
    const fetchPhoto = async (photoReference : string) => {
      try {
        console.log(photoReference)
        const response = await fetch(
          `https://places.googleapis.com/v1/${photoReference}/media?key=${process.env.NEXT_PUBLIC_PLACES_API}&maxHeightPx=4032&maxWidthPx=3024`
        );
            console.log(response.url)
        if (response.ok) {
          setPhotoUrl(response.url);
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhoto(photoReference);
  }, [photoReference]);

  return (

        <div className='w-full h-64 overflow-hidden mb-3'>
            <Image className="p-8 rounded-t-lg" src={photoUrl} alt="Restuarant image" width={500} height={400}/>
        </div>
    
  );
};

export default PlacePhoto;