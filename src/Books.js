import React, { Component } from 'react';
import BookItem from './BookItem.js';

export default class Books extends Component {
  render() {
    const data = {
      "results":[
        {
           "author":"Christopher Pike",
           "createdAt":"2015-06-17T15:41:43.983Z",
           "imageUrl":"https://covers.openlibrary.org/b/id/6963511-M.jpg",
           "name":"Scavenger Hunt",
           "objectId":"Hx1gvfUX2q",
           "publisher":"Pocket Books",
           "updatedAt":"2015-06-17T15:41:43.983Z",
           "year":"1989"
        },
        {
           "author":"Lois Duncan",
           "createdAt":"2015-06-17T15:45:02.178Z",
           "imageUrl":"https://covers.openlibrary.org/w/id/6942334-M.jpg",
           "name":"Locked in time",
           "objectId":"VxqB88kTAJ",
           "publisher":"Little, Brown",
           "updatedAt":"2015-06-17T15:45:02.178Z",
           "year":"1985"
        },
        {
           "author":"Paula Hawkins",
           "createdAt":"2015-12-31T12:16:51.195Z",
           "imageUrl":"https://books.google.com.ar/books/content?id=pTQyBgAAQBAJ\u0026printsec=frontcover\u0026img=1\u0026zoom=1\u0026imgtk=AFLRE721p5T-hBTpSg475NZfnajuNTnwNVLRNzAzC6cVnhlp-yYZ4aVR88IqjvaeC-oxOeQYrT7GBjoos7zVftKckD41EZJcHDnk2FV7M2oU6jfexk1-2ExBU4Yf14XL78cZkOltxc8v",
           "name":"The Girl on the Train\n",
           "objectId":"nQC4te2Gvs",
           "publisher":"Riverhead Books",
           "updatedAt":"2016-05-04T18:03:24.574Z",
           "year":"2015"
        },
        {
           "author":"Anthony Doerr",
           "createdAt":"2015-12-31T12:19:45.891Z",
           "imageUrl":"https://books.google.com.ar/books/content?id=0cH0AAAAQBAJ\u0026printsec=frontcover\u0026img=1\u0026zoom=1\u0026edge=curl\u0026imgtk=AFLRE70z8HmjMoyuP7iCR24iPPNBC2bBQL3UsCJQIpr9UrIV1dvZB0d4F_L0mgpUtbKeAu9yyZocHu19Kam3wy550UTIahJIvK741BWJexE1Hz4GzYemYglX9Kf426eK7TNnF1CuIBl7",
           "name":"All the Light We Cannot See",
           "objectId":"aEZ05SABrK",
           "publisher":"Scribner",
           "updatedAt":"2016-05-04T18:02:25.087Z",
           "year":"2014"
        },
        {
           "author":"John Katzenbach",
           "createdAt":"2015-12-31T12:20:44.363Z",
           "imageUrl":"http://i43.tower.com/images/mm110963711/el-psicoanalista-analyst-john-katzenbach-paperback-cover-art.jpg",
           "name":"The analyst",
           "objectId":"obyguQbRhA",
           "publisher":"Ballantine Books",
           "updatedAt":"2016-05-04T18:02:56.772Z",
           "year":"2003"
        },
        {
           "author":"Andy Weir",
           "createdAt":"2015-12-31T12:21:53.682Z",
           "imageUrl":"https://images-na.ssl-images-amazon.com/images/I/41DNuJfahyL._SX322_BO1,204,203,200_.jpg",
           "name":"The Martian",
           "objectId":"dsGumvJ2VV",
           "publisher":"Crown Publishing Group",
           "updatedAt":"2016-05-04T18:02:35.585Z",
           "year":"2011"
        }
      ]
    }
    const listItems = data.results.map((b) =>
      <BookItem book={b} key={b.objectId}/>
    );
    return (
      <div className='books-layout container'>{listItems}</div>
    );
  }
}