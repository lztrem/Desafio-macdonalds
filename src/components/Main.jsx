import * as S from "./Styled"
import bigmac from "../assets/bigmac.png"
import batata from "../assets/batata.png"
import sorvete from "../assets/sorvete.png"
import sofa from "../assets/sofa.png"
import loja from "../assets/loja.png"
import banner from "../assets/Banner.png"
import { useState } from "react"


export default function Main() {

  const [imagem, setimagem] = useState(bigmac)

  
  return (
    <S.Conteiner>
    <S.Caixa1>
      <S.Imgprincipal src={imagem} alt="" />
      <S.Titulo>BATEU AQUELA <S.Red>#FOME</S.Red>DE<S.Red> MÉQUI?</S.Red></S.Titulo>
    </S.Caixa1>
    <S.Caixa2>
      <S.Imgsecundaria onClick={() => setimagem(bigmac)} src={bigmac} alt="" />
      <S.Imgsecundaria onClick={() => setimagem(batata)}src={batata} alt="" />
      <S.Imgsecundaria onClick={() => setimagem(sorvete)}src={sorvete} alt="" />
    </S.Caixa2>
    <S.Boxcard>
      <h2>Promoção</h2>
      <S.Box>
      <S.Card>
        <img src={sofa} alt="" />
        <p>Que tal um #MéquiNoSofá?</p>
        <button>Click aqui</button>
      </S.Card>
      <S.Card>
      <img src={loja} alt="" />
        <p>venha conhecer nossa nova loja</p>
        <button>Click aqui</button>
      </S.Card>
      <S.Card>
      <img src={banner} alt="" />
        <p>Confira as medidas que o Méqui adotou!</p>
        <button>Click aqui</button>
      </S.Card>
      </S.Box>
    </S.Boxcard>
    </S.Conteiner>
  )
}