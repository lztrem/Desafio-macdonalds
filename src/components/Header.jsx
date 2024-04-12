import app from "../assets/app.png"
import app2 from "../assets/app2.png"
import logodomequi from "../assets/logodomequi.png"
import * as S from "./Styled"

export default function () {
  return (
    <S.Header>
      <img src={logodomequi} alt="" />
      <S.Box1>
        <S.Box2>
         <img src={app} alt="" />
         <p>Baixe o App</p>
        </S.Box2>
        
        <S.Box3>
        <S.Paragrafo>Peça seu méqui</S.Paragrafo>
        <img src={app2} alt="" />
        </S.Box3>
      </S.Box1>
    </S.Header>
  )
}
