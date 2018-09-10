import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 2.3em;
  font-weight: 400;
  text-align: left;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;

export const H2 = styled.h2`
  font-size: 2em;
  font-weight: 400;
  text-align: left;
  margin-top: 0;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;

export const H3 = styled.h3`
  font-size: 1.375em;
  font-weight: 400;
  text-align: left;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;

export const H4 = styled.h4`
  font-size: 1.1em;
  font-weight: 400;
  text-align: left;
  margin: 0;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;

export const H5 = styled.h5`
  font-size: 1em;
  font-weight: 400;
  text-align: left;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;

export const H6 = styled.h6`
  font-size: 0.9em;
  text-align: left;
  color: ${props =>
    props.inverse ? props.theme.color_light : props.theme.primary_color};
`;
