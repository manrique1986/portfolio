/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-fondo': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1697659958/Dise%C3%B1o_sin_t%C3%ADtulo_4_o2po2t.png')",
        'img-sobremi': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1697662168/Dise%C3%B1o_sin_t%C3%ADtulo_5_cpfioy.png')",
      },
      screens: {
        'all': '360px',
        // => @media (min-width: 360px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    
   
    }
    ,
  },
  plugins: [],
}

