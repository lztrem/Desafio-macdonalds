import * as S from "./Styled"
import logo from "../assets/logodomequi.png"
import playstore from "../assets/placagoogleplay.png"
import appapple from "../assets/appstore.png"

export default function Footer() {
  return (
    <S.Footer>
      <S.Boxfinal>
        <img src = {logo} alt="" />
        <p>© McDonald’s 2024</p>
      </S.Boxfinal>
      <S.Boxfinal>
        <img src={playstore} alt="" />
        <img src={appapple} alt="" />
      </S.Boxfinal>
    </S.Footer>
  )
}
