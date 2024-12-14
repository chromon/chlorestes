// Color themes

export interface Theme {
    colors: {
        primary: string;
        secondary: string;
        tertiary: string;
        quaternary: string;
        quinary: string,
        senary: string,
        septenary: string,
        octonary: string, 
        nonary: string,
        denary: string,
        text: string;
    }
}

export const lightTheme: Theme = {
    colors: {
        // main color
        primary: '#c1121f',
        // main bg color
        secondary: '#FFFFFF',
        // minor bg color
        tertiary: '#F2F2F2',
        // icon color
        quaternary: '#8E8E8E',
        // light font color
        quinary: '#9E9E9E',
        senary: '',
        septenary: '',
        octonary: '', 
        nonary: '',
        denary: '',
        text: '#000000',
    }
};

export const darkTheme: Theme = {
    colors: {
        // main color
        primary: '#c1121f',
        // main bg color
        secondary: '#03dac4',
        // minor bg color
        tertiary: '',
        // icon color
        quaternary: '',
        // border color
        quinary: '',
        senary: '',
        septenary: '',
        octonary: '', 
        nonary: '',
        denary: '',
        text: '#ffffff',
    }
};