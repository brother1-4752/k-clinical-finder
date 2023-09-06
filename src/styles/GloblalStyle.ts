import { fontBold, fontLight, fontRegular } from '../fonts';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: "fontBold";
        src: local('fontBold'), local('fontBold');
        font-style: normal;
        src: url(${fontBold}) format('truetype');
    }

    @font-face {
        font-family: "fontRegular";
        src: local('fontRegular'), local('fontRegular');
        font-style: normal;
        src: url(${fontRegular}) format('truetype');
    }

    @font-face {
        font-family: "fontLight";
        src: local('fontLight'), local('fontLight');
        font-style: normal;
        src: url(${fontLight}) format('truetype');
    }

    body {
        font-family: fontRegular, Arial;
    }
`;

export default GlobalStyle;
