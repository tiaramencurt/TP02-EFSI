function Boton({texto, clase=""}){
return(
<button className={`u-full-width button-primary ${clase}`}>
{texto}
</button>
)
}
export default Boton;