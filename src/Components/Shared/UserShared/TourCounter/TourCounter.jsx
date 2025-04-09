import React from 'react';
import  airplaneLogo from '../../../../assets/Icons/airplane.png' ;
import  houseLogo from '../../../../assets/Icons/house.png' ;
import  shipLogo from '../../../../assets/Icons/cruise.png' ;
import  ticketLogo from '../../../../assets/Icons/ticket.png' ;

const counterData =[
    {
        logo:airplaneLogo ,
        number: "600" ,
        title: "Flight Booking" , 
    },
    {
        logo: houseLogo ,
        number: "360" ,
        title: "Amazing Tour" , 
    },
    {
        logo: shipLogo ,
        number: "240" ,
        title: "Cruises Booking" , 
    },
    {
        logo: ticketLogo ,
        number: "120" ,
        title: "Hotel Booking" , 
    },
]

const TourCounter = () => {
    return (
        <div
        style={{ fontFamily: "Barlow, sans-serif " }}
        className="bg-black text-white opacity-50 py-48"
      >
        {/* information section  */}
        <div className="lg:max-w-6xl md:max-w-3xl sm: max-w-sm lg:mx-auto md:mx-8 sm: mx-5">
            
        </div>
        </div>
    );
};

export default TourCounter;