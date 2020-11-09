import image from './assets/JavaScript-logo.jpg'
import { TitleBlock, TextBlock, ColumnsBlock, ImageBlock } from './classes/blocks'
const text = 'Создание сайта на чистом JS с использованием сборщика Parcel, <br> создание разметки стилей с помощью объектной модели';

export const model = [
   new TitleBlock('Конструктор сайтов на чистом JavaScript', {
      tag: 'h2',
      styles: {
         background: 'linear-gradient(to right, #ff0099, #493240)',
         color: '#fff',
         padding: '50px 0',
         'text-align': 'center'
      }
   }),
   new TextBlock(text, {
      styles: {
         background: 'linear-gradient(to right, #ff0099, #693290)',
         color: '#fff',
         padding: '1rem',
         'font-weight': 'bold',
         'font-size': '18px'
      }

   }),

   new ImageBlock(image, {
      styles: {
         padding: '2rem 0',
         display: 'flex',
         'justify-content': 'center'
      },
      imageStyles: {
         width: '50%'
      },
      alt: 'Это картинка'
   }),

   new ColumnsBlock([
      'ООП',
      'DOM',
      'Parcel',
      'Classes',
      'Modules',
      'SOLID open-close'
   ], {
      styles: {
         background: 'linear-gradient(to bottom, #8b2de8, #9b70e0)',
         color: '#fff',
         padding: '1rem',
         'font-weight': 'bold',
         'font-size': '18px'
      }
   })

]