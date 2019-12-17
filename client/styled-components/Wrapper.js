import styled from 'styled-components';

let Wrapper = {};

Wrapper.Global = styled.div`
  margin: auto;
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
  margin-right: 30px;
`;
Wrapper.Navbar = styled.div`
  position: fixed;
  z-index: 2147483647;
  margin-top: -10px;
`;
Wrapper.Graph = styled.div`
  text-size: 36px;
  margin-top: 20px;
  z-index: 44;
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