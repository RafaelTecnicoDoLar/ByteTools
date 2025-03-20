export default function LinkIMG({Link, Image}){
    return(
        <a href={Link} className="ButtonAnimation"> <img className="LogoLink" src={Image} /> </a>
    )
}