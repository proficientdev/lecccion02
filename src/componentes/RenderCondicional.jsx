function RenderCondicional({isLoading}){
    if (isLoading){
        return (<h3>Cargando...</h3>)

    }

    return(<h3>Listo!</h3>)
}

export default RenderCondicional;