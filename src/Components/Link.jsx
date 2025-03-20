export default function Link({Link, Name}){
    return(
        <div>
            <a href={Link} className="LinkStyle ButtonAnimation"> {Name} </a>

        </div>
    )
}