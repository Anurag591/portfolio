import styled from "styled-components";

import PropTypes from 'prop-types';

const PrimaryHeader = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 20px;
    padding-bottom: 10px;
    position: relative;
    color: #173b6c;
    margin-top: 0;
    position: sticky;
    top: 0;
    background: white;
    z-index: 2;

    &::after {
        content: "";
        width: ${ props => props.width };
        height: 3px;
        background: #149DDD;
        position: absolute;
        bottom: 0;
        left: 0;
    }
`;

const SecondaryHeader = styled(PrimaryHeader)`
    font-size: 20px;
    margin: 0;
    color: #446195;
    position: relative;
    z-index: 0;

    &::after {
        background: #19be4c;
    }
`;

export const PrimaryHeading = props => {
    return <PrimaryHeader width = { props.width }> { props.children } </PrimaryHeader>
};

PrimaryHeading.propTypes  = {
    width: PropTypes.string
};

PrimaryHeading.defaultProps = {
    width: '50px'
};

export const SecondaryHeading = props => {
    return <SecondaryHeader width = { props.width }> { props.children } </SecondaryHeader>
};

SecondaryHeading.defaultProps = {
    width: '50px'
};

SecondaryHeading.propTypes  = {
    width: PropTypes.string
};

