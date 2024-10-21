import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  images = [
    {
      title: 'Stamford Bridge',
      image_url: 'https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/match-reports/2023-24/Man%20City%20home/Bridge_stock_GettyImages-1789388780.jpg'
    },
    {
      title: 'Borussia Dortmund Tifo',
      image_url:'https://img.asmedia.epimg.net/resizer/v2/ZN4XJCJL7FFARJF4XADGOTTRK4.jpg?auth=65fbb6399e9cd6b3286f007c5906400dec5553a3f16ba9280c8d43e04c72ce65&width=1472&height=1104&focal=3857%2C2521'
    },
    {
      title: 'Lionel Messi',
      image_url: 'https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2171249599.jpg?c=16x9&q=h_833,w_1480,c_fill'
    },
    {
      title: 'Robert Lewandowski',
      image_url: 'https://cdn.vox-cdn.com/thumbor/NFKKfk4h2RZZbJKO_r6UTCUsuU0=/0x0:6762x4504/1200x800/filters:focal(2667x788:3747x1868)/cdn.vox-cdn.com/uploads/chorus_image/image/73558874/2168887724.0.jpg'
    },
    {
      title: 'Allianz Arena',
      image_url: 'https://img.fcbayern.com/image/upload/t_cms-16x9-seo/v1716819269/cms/public/images/allianz-arena/europameisterschaft/allianz-arena-euro-2024-duc.jpg'
    },
    {
      title: 'Harry Kane',
      image_url: 'https://cdn.vox-cdn.com/thumbor/_s7k0RLH6wfcCzMqcjOi_M6GTy8=/0x0:7507x5005/1200x800/filters:focal(2887x464:4087x1664)/cdn.vox-cdn.com/uploads/chorus_image/image/73592914/2172720913.0.jpg'
    },
    {
      title: 'Manchester City vs Inter Milan',
      image_url: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/SF44NVLGVRMQJDYIPVO5ZTZ4XY.jpg'
    },
    {
      title: 'Christopher Nkunku',
      image_url: 'https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/match-reports/2024-25/Servette%20home/nkunku-celebration-servette-h.jpg'
    },
    {
      title: 'Veltins Arena',
      image_url: 'https://storage.schalke04.de/2017/09/Schalke04_73249-copy-copy-1440x810.jpg'
    },
    {
      title: 'Erling Haaland',
      image_url: 'https://www.latercera.com/resizer/v2/ALATZ2WHCDGCMWLDNAVTG6UBCU.jpg?quality=80&smart=true&auth=6ae14777f55f645d0e0fda91687f0c650ca326ba17e8f4a8d8b867c379093858&width=1200&height=756'
    },
    {
      title: 'Italy National Team',
      image_url: 'https://img.rtve.es/imagenes/jugadores-italia-eurocopa-2024-uno-por-uno/01717750137029.jpg'
    },
    {
      title: 'Mercedes Benz Stadium',
      image_url: 'https://images.mlssoccer.com/image/private/t_photogallery/mls-atl/tvuxmcmsktcrxck4wtq4.jpg'
    }
  ]

}
