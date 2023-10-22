

const Track=({name, artist, album})=>
{
   return(
    <div className="Track" >
    <h3>{name}</h3>
    <p>{artist} | <span>{album}</span></p>
    </div>
   )
}
export default Track;