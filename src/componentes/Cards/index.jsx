import Capa from './assets/capa.png'
import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'
import Icone from './assets/icone.png'


export default function Card () {
    return (
        <article className="card">
            <div className="card__imagem">
                <img src={Capa} alt="imagem do post" />
                <div className='card__conteudo'>
                    <div className='conteudo__text'>
                        <h3>Titulo do post</h3>
                        <p>Resumo do post</p>
                    </div>

                    <div className='conteudo__rodape'>
                        <ul>
                            <li>
                                <img src={Code} alt="codigos" />
                                100
                            </li>
                            <li>
                                <img src={Share} alt="Compartilhamentos" />
                                12
                            </li>
                            <li>
                                <img src={Chat} alt="comentarios" />
                                10
                            </li>
                        </ul>

                        <div className='rodape__usuario'>
                            <img src={Icone} alt="imagem do usuario" />
                            @devsam
                        </div>
                    </div>
                </div>

            </div>
        </article>
    )
}