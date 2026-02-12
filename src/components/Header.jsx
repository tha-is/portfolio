import React from 'react';

const Header = () => {
    const headerInfo = {
        nome:"Thais da Costa Vicente",
        detalhe:"FRONT END | ANALISE DE DADOS",
        descrição:"Profissional com 3 anos de experiência como Analista de MIS e Dados Pleno, com forte atuação na construção, modelagem e otimização de soluções robustas de dados. Especialista em Microsoft Fabric, Power BI, Power Query e SQL avançado, com foco em desempenho, qualidade de dados e governança."
    }
    return (
        <header className='row row-cols-1 row-cols-md-2'>
            <div className='col'>
                <img 
                    src="./src/assets/Icone.png" 
                    alt="Logo" 
                    className="img-fluid object-fit-cover"/>
            </div>

        <div className='col align-self-center p-3 text-center   '>
            <div className='card border-0' style={{
                    backgroundColor:"#393646",
                    color:"#F4EEE0",
                    }}>
            <div className='mb-3 h6 fw-bold'>
{headerInfo.nome}
            </div>
            <p className='mb-3 fw-bold' style={{letterSpacing: "1px"}}>
{headerInfo.detalhe}</p>
            <div className="card-body p-0">
            <p className='card-text mb-2'>
{headerInfo.descrição}</p>
                </div>
                <nav>
                    <a href="https://www.linkedin.com/in/tha-is-costa/" className='p-2'><i className="bi bi-linkedin text-light"></i></a>
                    <a href="https://github.com/tha-is" className='m-1'><i className="bi bi-github text-light"></i></a>
                </nav>
                    </div>
        </div>
        </header>

    );
};

export default Header;
