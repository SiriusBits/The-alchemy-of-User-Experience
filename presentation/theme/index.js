import createTheme from "../../createTheme";

const colors = {
  primary: "white",
  secondary: "#7F6C4C", // almost black w/ blueish tint
  tertiary: "#721000", // bright red
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
          fontSize: '4rem',
          textTransform: 'uppercase'
        },
        h2: {
          fontSize: '3.5rem',
          textTransform: 'uppercase'
        },
        h3: {
          fontSize: '3rem',
          textTransform: 'uppercase'
        },
        h4: {
          fontSize: '2.5rem',
          textTransform: 'uppercase'
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
      listItem: {
        listStyle: 'none',
        marginBottom: '2rem'
      },
      codePane: {
        fontSize: '2rem'
      }
    }
  });

export default theme;