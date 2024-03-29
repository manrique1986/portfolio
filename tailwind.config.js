/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'img-fondo': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1697659958/Dise%C3%B1o_sin_t%C3%ADtulo_4_o2po2t.png')",
        'img-sobremi': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1697662168/Dise%C3%B1o_sin_t%C3%ADtulo_5_cpfioy.png')",
        'img-educacion': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1698102543/Dise%C3%B1o_sin_t%C3%ADtulo_6_zpw2om.png')",
        'img-skills': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1699568366/Dise%C3%B1o_sin_t%C3%ADtulo_1_lofbxb.png')",
        'img-proyectos': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1700087211/Dise%C3%B1o_sin_t%C3%ADtulo_2_zfdng0.png')",
        'img-contacto': "url('https://res.cloudinary.com/dytpump6i/image/upload/v1700088286/Dise%C3%B1o_sin_t%C3%ADtulo_3_xqjqvl.png')",
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      screens: {
        'all': '360px',
        // => @media (min-width: 360px) { ... }
  
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1500px',
      // => @media (min-width: 1280px) { ... }
      },
    
   
    }
    ,
  },
  plugins: [
    
  ],
}

