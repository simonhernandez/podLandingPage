module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {

    extend: {
      colors: {
        primary : '#54E6AF',
        primaryLight : '#B3FFE2',
        dark : '#121725',
        grey : '#5A668A',
        greyLight : '#C2CBE5',
        greyDark : '#2C344B',
        alert : '#FB3E3E',
      },
      fontFamily: {
        body : ['Chivo'],
        heading : ['Chivo'],
      },
      fontSize : {
        '5.5xl' : '3.25rem',
      },
      lineHeight : {
        'title' : '3.875rem',
      },
      backgroundImage : {
        'hero-sm' : 'url(/assets/mobile/image-host.jpg)',
        'hero-md' : 'url(/assets/tablet/image-host.jpg)',
        'hero-lg' : 'url(/assets/desktop/image-host.jpg)',
      },
      zIndex : {
        '-10' : '-10',
      },
      width : {
        'bg-sm' : '100%',
        'bg-md' : '63.9322%',
        'bg-lg' : '61.6666%',
      },
      height : {
        'bg-sm' : '100%',
        'bg-md' : '75%',
        'bg-lg' : '71.1111%',
      },
      maxWidth : {
        sm : '26.6875rem',
        md : '27.8125rem',
        '2.5xl' : '45.1875rem',
      },
      padding : {
        '15' : '4.875rem',
        '22' : '5.5rem',
        '23' : '5.8125rem',
        '26' : '6.375rem',
      },
      inset : {
        '-6' : '-1.5rem',
        '13' : '3.1875rem',
        '15' : '4.0625rem',
        '26' : '6.375rem',
        '30' : '7.5625rem',
        '33' : '8.125rem',
        'text-container' : 'calc((100vh - 71.1111%) / 2)',
        'dot-pattern' : 'calc((100vh - 71.1111%) / 4)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
