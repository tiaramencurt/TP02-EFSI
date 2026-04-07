function CampoTexto({label,placeholder}){
return(
<>
<label>{label}</label>
<input type="text" placeholder={placeholder} className="u-full-width"/>
</>
)
}
export default CampoTexto;