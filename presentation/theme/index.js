import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#7F6C4C", // gilded brown
  tertiary: "#721000", // earth red
  quaternary: "#DFDFDF" // pale gray
};

const theme = createTheme(colors, {
    primary: "Raleway",
    secondary: "Helvetica"
  }, {
    global: {
      '_:-moz-tree-row(hover), .spectacle-deck': {
        perspective: '1200px'
      }
    },
    progress: {
      pacmanTop: {
        background: colors.quaternary
      },
      pacmanBottom: {
        background: colors.quaternary
      },
      point: {
        borderColor: colors.quaternary
      }
    },
    components: {
      heading: {
        h1: {
          fontSize: 'calc(2.35vw + 2.35vh + .75vmin);',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: 'calc(2.15vw + 2.15vh + .65vmin);',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: 'calc(2vw + 2vh + .5vmin);',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          margin: '0px auto 2rem auto',
          fontWeight: '400'
        },
        h5: {
          fontSize: '2rem',
          textTransform: 'uppercase'
        },
        h6: {
          fontSize: '1.5rem',
          textTransform: 'uppercase'
        }
      },
      image:{
          margin: '2rem auto'
      },
      list: {
        textShadow: '-3px 2px 7px rgba(172,173,174,0.86)',
        display: 'flex',
        flexDirection: 'column',
        height: '66vh'
      },
      listItem: {
        listStyle: 'none',
        fontSize: 'calc(1.65vw + 1.65vh + .75vmin)',
        marginBottom: '2rem',
        marginTop: 'auto'
      },
      text: {
        fontSize: 'calc(1.65vw + 1.65vh + .75vmin)',
      },
      codePane: {
        fontSize: 'calc(1.75vw + 1.75vh + .75vmin)'
      }
    }
  });

export default theme;