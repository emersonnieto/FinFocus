import 'styled-components'

declare module 'styled-components'{
    export interface defaultTheme {
        title: string;

        colors: {
            primary: string;
            secodary: string;
            tertiary: string;
    
            white: string;
            black: string;
            gray: string;
    
            sucess: string;
            info: string;
            warning: string;
        },
    };
}