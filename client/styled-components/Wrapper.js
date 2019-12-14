import styled from 'styled-components';

let Wrapper = {};

Wrapper.Global = styled.div`
`;
Wrapper.Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 1024;
  margin: auto;
`;
Wrapper.FirstColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
Wrapper.Navbar = styled.div`
  position: fixed;
`;
Wrapper.Graph = styled.div`
  text-size: 36px;
`;
Wrapper.About = styled.div`

`;
Wrapper.News = styled.div`

`;
Wrapper.Ratings = styled.div`

`;
Wrapper.Earnings = styled.div`

`;
Wrapper.SecondColumn = styled.span`
  flex-direction: column;
  padding-top: 90px;
`;
Wrapper.TradeStock = styled.div`
  position: fixed;
`;
Wrapper.App = styled.div`
  outline: none !important;
`;

export default Wrapper;