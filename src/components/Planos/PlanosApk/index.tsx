import '../../../styles/container.css';
import '../style.css';

type PlanosApkProps = {
    //
};

const PlanosApk: React.FC<PlanosApkProps> = ({}) => {
    return (
        <>
        <section className="plans-section">
            <div className="container">
                <div className="plans-grid">
                    {/* <!-- Plano Display Box --> */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Promo App</h3>
                        </div>
                        <div className="plan-price-container">
                            <div className="plan-price">
                                <span className="installments">12x</span>
                                <span className="currency">R$</span>
                                <span className="amount">59</span>
                                <span className="cents">,90</span>
                            </div>
                            <div className="plan-price-annual">
                                <span>ou R$ 720 à vista no plano anual</span>
                            </div>
                        </div>

                        <div className="plan-description">
                            <p>Para estabelecimentos que querem começar com mídia indoor</p>
                        </div>

                        <div className="plan-features">
                            {/* <!-- <h4>O que está incluso:</h4> --> */}
                            <ul>
                                <li><i className="fas fa-check"></i> 1 ano de acesso</li>
                                <li><i className="fas fa-check"></i> 1 display para gerenciamento</li>
                                <li><i className="fas fa-check"></i> Aplicativo disponível para instalação em sua própria TV Box</li>
                                <li><i className="fas fa-check"></i> Todos os recursos do MidiasPlay Controle</li>
                                <li><i className="fas fa-check"></i> 600MB de armazenamento</li>
                            </ul>
                        </div>

                        <button className="plan-button" id="btn-promo-box" data-plan="Promo Box">Escolher Plano</button>
                    </div>

                    {/* <!-- Plano Fila Box --> */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Promo App Fila</h3>
                        </div>
                        <div className="plan-price-container">
                            <div className="plan-price">
                                <span className="installments">12x</span>
                                <span className="currency">R$</span>
                                <span className="amount">69</span>
                                <span className="cents">,90</span>
                            </div>
                            <div className="plan-price-annual">
                                <span>ou R$ 840 à vista no plano anual</span>
                            </div>
                        </div>
                        
                        
                        <div className="plan-description">
                            <p>Perfeito para gerenciar filas e melhorar a experiência do cliente</p>
                        </div>

                        <div className="plan-features">
                            {/* <!-- <h4>O que está incluso:</h4> --> */}
                            <ul>
                                <li><i className="fas fa-check"></i> 1 ano de acesso</li>
                                <li><i className="fas fa-check"></i> 1 display com fila para gerenciamento</li>
                                <li><i className="fas fa-check"></i> Aplicativo disponível para instalação em sua própria TV Box</li>
                                <li><i className="fas fa-check"></i> Sistema de senhas através do controle remoto da TV Box</li>
                                <li><i className="fas fa-check"></i> 600MB de armazenamento</li>
                                <li><i className="fas fa-check"></i> Todos os recursos do MidiasPlay Controle</li>
                            </ul>
                        </div>

                        {/* <div className="plan-advantages">
                            <h4>Vantagens:</h4>
                            <ul>
                                <li><i className="fas fa-star"></i> Reduz tempo de espera</li>
                                <li><i className="fas fa-star"></i> Melhora satisfação do cliente</li>
                                <li><i className="fas fa-star"></i> Organização automática</li>
                            </ul>
                        </div> */}

                        <button className="plan-button premium" id="btn-promo-box-fila" data-plan="Promo Box Fila">Escolher Plano</button>
                    </div>

                    {/* <!-- Plano Custom Box --> */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Promo Box Custom</h3>
                            {/* <div className="plan-badge">Personalizado</div> */}
                        </div>
                        <div className="plan-price-container">
                            <div className="plan-price">
                                {/* <span className="currency">Sob</span> */}
                                <span className="demanda">Sob demanda</span>
                                {/* <span className="period">Demanda</span> */}
                            </div>
                            <div className="plan-price-annual">
                                <span>escolha a quantidade certa de produtos para atender seu negócio</span>
                            </div>
                            {/* <div className="plan-price">
                                <span className="currency">R$</span>
                                <span className="amount">199</span>
                                <span className="period">/mês</span>
                            </div>
                            <div className="plan-price-annual">
                                <span>ou R$ 1.990 à vista no plano anual</span>
                            </div> */}
                        </div>

                        <div className="plan-description">
                            <p>Solução escalável sob medida para empresas com múltiplos displays</p>
                        </div>

                        <div className="plan-features">
                            {/* <h4>O que está incluso:</h4> */}
                            <ul>
                                <li><i className="fas fa-check"></i> Escolha a quantidade de displays</li>
                                <li><i className="fas fa-check"></i> Aplicativo disponível para instalação em sua própria TV Box</li>
                                <li><i className="fas fa-check"></i> Gestão ilimitada de telas</li>
                                <li><i className="fas fa-check"></i> API para integrações</li>
                                <li><i className="fas fa-check"></i> Suporte prioritário</li>
                                <li><i className="fas fa-check"></i> Treinamento personalizado</li>
                                <li><i className="fas fa-check"></i> Todos os recursos do MidiasPlay Controle</li>
                            </ul>
                        </div>

                        <button className="plan-button" id="btn-promo-box-custom" data-plan="Promo Box Custom">Fale conosco</button>
                    </div>

                    {/* <!-- Plano Custom Box --> */}
                    <div className="plan-card">
                        <div className="plan-header">
                            <h3>Aparelho TV Box</h3>
                        </div>
                        <div style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                            <div
                                style={{
                                    display: 'flex',
                                    width: '75%',
                                    justifyContent: 'center',
                                    // backgroundColor: '#f9f9f9',
                                    // padding: '10px',
                                    borderRadius: '8px',
                                    boxSizing: 'border-box'
                                }}
                            >
                                <img style={{ width: '100%' }} src="https://proeletronic.com.br/wp-content/uploads/2023/02/new-prosb3000.png" alt="TV Box para mídia indoor" />
                            </div>
                        </div>
                        <div className="plan-price-container" >
                                <div className="plan-price">
                                    <span className="currency">R$</span>
                                    <span className="amount">149</span>
                                    <span className="cents">,90</span>
                                </div>
                            </div>
                        

                        <div className="plan-description">
                            <p>Receba o aparelho com o aplicativo instalado e configurado para começar a usar</p>
                        </div>

                        <div className="plan-features">
                            {/* <h4>O que está incluso:</h4> */}
                            <ul className="tvbox-features">
                                <li><i className="fas fa-wifi"></i> Conectividade Wi-Fi integrada</li>
                                <li><i className="fas fa-hdd"></i> Armazenamento interno para conteúdo offline</li>
                                <li><i className="fas fa-plug"></i> Instalação plug & play</li>
                                <li><i className="fas fa-shield-alt"></i> Hardware otimizado para 24/7</li>
                            </ul>
                        </div>

                        <button className="plan-button" id="btn-promo-box-custom" data-plan="Promo Box Custom">Fale conosco</button>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Seção TV Box --> */}
        {/* <section className="tvbox-section">
            <div className="container">
                <div className="tvbox-content">
                    <div className="tvbox-image">
                        <img src="https://proeletronic.com.br/wp-content/uploads/2023/02/new-prosb3000.png" alt="TV Box para mídia indoor" />
                    </div>
                    <div className="tvbox-info">
                        <h2>Aparelho TV Box</h2>
                        <p>Receba o aparelho com o aplicativo instalado e configurado para começar a usar</p>
                        <ul className="tvbox-features">
                            <li><i className="fas fa-wifi"></i> Conectividade Wi-Fi integrada</li>
                            <li><i className="fas fa-hdd"></i> Armazenamento interno para conteúdo offline</li>
                            <li><i className="fas fa-plug"></i> Instalação plug & play</li>
                            <li><i className="fas fa-shield-alt"></i> Hardware otimizado para 24/7</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    );
};

export default PlanosApk;