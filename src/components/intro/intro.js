import styled from 'styled-components';

export const Intro = styled.div`
/* retirar depois */
 /* background-color: red; */
 display: flex;
`;

export const Left = styled.div`
  flex: 0.5;
  
  /* background-color: blue; */
  .imgContainer{
    overflow: hidden;
    width: 700px;
    height: 700px;
    align-items: flex-end;
    justify-content: center;
    float: right;

    img{
      width: 100%
    }
  }
`;

export const Rigth = styled.div`
  flex: 0.5;
  display: flex;
  position: relative;
  
  .wrapper{
    width: 100%
    height: 100%
    padding-left: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
      color: white;
      font-size: 60px;
      margin: 10px 0;
    }
    h2{
      color: white;
      font-size: 35px;
    }
    h3{
      color: white;
      font-size: 30px;

      span{
        font-size: inherit;
        color: blue;
      }

      .ityped-cursor {
        animation: blink 1s infinite;
      }

      @keyframes blink {
        50%{
          opacity: 1;
        }
        100%{
          opacity: 0
        }
      }
    }
  }

  a {
    position: absolute;
    bottom: 10px;
    left: 40%;

    svg{
      color: white;
      height: 80px;
      width: 80px;
      animation: arrowBlink 3s infinite;
    }
/* mudar depois */
    @keyframes arrowBlink {
      100%{
        opacity: 0;
      }
    }
  }
`;

