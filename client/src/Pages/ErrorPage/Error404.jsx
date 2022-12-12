import styled from "styled-components"
import ErrorSvg from "../../Components/SVG/Error"
import Button from "../../Components/Buttons/Button1"

export default function Error404({t}){
    return (
        <ContainerPage>
            <div>
            <ErrorSvg/>
            </div>
            <div>
                <h1>{t("errorpage.title")}</h1>
                <Button to="/" value={t("errorpage.btn")}/>
            </div>
        </ContainerPage>
    );
}

const ContainerPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 50px 20px;
    div{
        margin: 10px;
        display: flex; 
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h1{
            color: #0088FF;
            font-size: 35px;
            padding: 0 10px;
            font-weight: 500;
            margin-bottom: 20px;
            text-align: center;
        }
        svg{
            width: 300px;
        }
    }
    @media screen and (max-width: 400px){
        div{
            svg{
                width: 90%;
            }
        }
    }
`;

