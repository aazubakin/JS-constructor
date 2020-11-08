import image from './assets/1.png'

export const model = [
   {
      type: 'title',
      value: 'Конструктор сайтов на чистом JavaScript',
      options: {
         tag: 'h2',
         styles: {
            background: 'linear-gradient(to right, #ff0099, #493240)',
            color: '#fff',
            padding: '50px 0',
            'text-align': 'center'
         }

      }
   },
   {
      type: 'text',
      value: 'Создание сайта на чистом JS с использованием сборщика Parcel, <br> создание разметки стилей с помощью объектной модели',
      options: {
         styles: {
            background: 'linear-gradient(to right, #ff0099, #693290)',
            color: '#fff',
            padding: '1rem',
            'font-weight': 'bold',
            'font-size': '18px'
         }

      }
   },
   {
      type: 'image', value: image,
      options: {
         styles: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
         },
         imageStyles: {
            width: '50%'
         },
         alt: 'Это картинка'
      }
   },
   {
      type: 'columns',
      value: [
         'ООП',
         'DOM',
         'Parcel',
         'Classes',
         'Modules'
      ],
      options: {
         styles: {
            background: 'linear-gradient(to bottom, #8b2de8, #9b70e0)',
            color: '#fff',
            padding: '1rem',
            'font-weight': 'bold',
            'font-size': '18px'

         }
      }
   }

]