export const COLORS = {
  white: 'hsl(0deg 0% 100%)',
  gray: {
    100: 'hsl(185deg 5% 95%)',
    300: 'hsl(190deg 5% 80%)',
    500: 'hsl(196deg 4% 60%)',
    700: 'hsl(220deg 5% 40%)',
    900: 'hsl(220deg 3% 20%)',
  },
  primary: 'hsl(340deg 65% 47%)',
  secondary: 'hsl(240deg 60% 63%)',
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phone: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tablet: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptop: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};

function formatAsCSSVariables(prefix, variables) {
  return Object.entries(variables).reduce((acc, [name, value]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      return {
        ...acc,
        [`--${prefix}-${name}`]: value,
      }
    }
  
    return {
      ...acc,
      ...formatAsCSSVariables(`${prefix}-${name}`, value),
    }
  }, { });
}

const colorsStyle = formatAsCSSVariables('color', COLORS);
const weightsStyle = formatAsCSSVariables('weight', WEIGHTS);

export const cssVariables = {
  ...colorsStyle,
  ...weightsStyle,
};
