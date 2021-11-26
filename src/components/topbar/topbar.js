import styled from 'styled-components';
import mainColor from '../../styles/Global';

export const Topbar = styled.div`
  width: 100%;
  height: 70px;
  background-color: white;
  color: ${mainColor};
  position: fixed;
  top: 0;
  z-index: 2; // ordem de prioridade

  .wrapper{
    padding: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left{
      display: flex;
      align-items: center;

      .logo{
        font-size: 40px;
        font-weight: 700;
        text-decoration: none;
        color: inherit; // herdar cor do pai
        margin-right: 40px;
      }

      .itemContainer{
        display: flex;
        align-items: center;
        margin-left: 30px;

        .icon{
          font-size: 18px;
          margin-right: 5px;
        }

        span{
          font-size: 15px;
          font-weight: 500;
        }
      }
    }
  }
`;