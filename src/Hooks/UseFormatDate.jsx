import React from 'react'

export default function UseFormatDate() {

    const formatTime = (release_date) => {
        const date = new Date(release_date)
        console.log(date);


        let a = String(date).split(' ');
        let txt_date = a[1] + ' ' + a[2] + ' ' + a[3]
        // console.log(txt_date);
        return txt_date;


    }

    return { formatTime }
}
