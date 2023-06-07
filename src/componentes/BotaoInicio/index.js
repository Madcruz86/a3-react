import './estilo.css'

const rotas = [{
    label: 'Entrar',
    to: '/login',
}, {
    label: 'Cadastre-se',
    to: '/cadastro',
}];

function BotaoInicio() {
    return(
        <div>
            {rotas.map((rota) => (
                <a href={rota.to}>{rota.label}</a>
            ))}
            </div>
    )
}

export default BotaoInicio