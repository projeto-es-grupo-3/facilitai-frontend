import Image from 'next/image';
import { Roboto } from 'next/font/google';
import article from '@/../public/gif/article.gif';
import ideia from '@/../public/gif/ideia.gif';
import papper from '@/../public/gif/papper.gif';

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
});

export default function HomeContent() {

    return (
        <>
            <main>
                <section className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Possua em sua mão as facilidades providas pelos alunos da UFCG!
                            </h1>
                            <p className="ms-2 mt-3 reposive-text">
                                Bem-vindo ao Facilitaí! Somos um projeto inovador que visa atender às necessidades dos alunos da Universidade Federal de Campina Grande (UFCG) de 
                                maneira prática e eficiente. Se você precisa vender ou emprestar livros ou está procurando apartamentos para alugar, você está no lugar certo. 
                                Nosso serviço oferece uma plataforma fácil de usar, na qual os alunos podem anunciar seus produtos e outros alunos interessados podem entrar em contato 
                                diretamente. Com o Facilitaí, você encontrará uma maneira conveniente de resolver suas demandas acadêmicas e moradia, promovendo uma maior interação e 
                                colaboração entre os estudantes da UFCG. Junte-se a nós e descubra como facilitar sua vida universitária!
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={article}
                                alt="gif-article"
                            />
                        </div>
                    </div>
                </section>
                <section className="container-fluid mt-5">
                    <div className="row flex-row-reverse">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Por uma UFCG colaborativa!
                            </h1>
                            <p className="ms-2 mt-3  reposive-text">
                                Acreditamos que a colaboração entre alunos é fundamental para o sucesso acadêmico e aprimoramento mútuo. O Facilitaí proporciona um ambiente de 
                                interação e compartilhamento de recursos, estimulando a troca de conhecimentos e experiências entre os estudantes da UFCG. Com nossa plataforma, 
                                você terá acesso a uma rede diversificada de colegas dispostos a ajudar, seja oferecendo livros a preços acessíveis, compartilhando materiais de 
                                estudo ou fornecendo informações valiosas sobre apartamentos disponíveis para aluguel. Além disso, ao utilizar o Facilitaí, você estará promovendo 
                                um ambiente sustentável, ao incentivar a reutilização de livros e a otimização da ocupação de imóveis. Conecte-se, colabore e aproveite os benefícios 
                                de uma comunidade unida e engajada através do Facilitaí!
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={ideia}
                                alt="gif-article"
                            />
                        </div>
                    </div>
                </section>
                <section className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-12 col-lg-6 d-flex flex-column">
                            <h1 className={`ms-2 text-md-start fw-semibold text-custom1 ${roboto.className}`}>
                                Alunos mais qualificados do país com melhores condições de vida!
                            </h1>
                            <p className="ms-2 mt-3 reposive-text">
                                No Facilitaí, acreditamos que a facilidade e a melhoria da qualidade de vida dos alunos da UFCG são aspectos fundamentais. Reconhecemos que 
                                a rotina acadêmica pode ser desafiadora e exigir uma gestão eficiente do tempo e dos recursos. Com a nossa plataforma, oferecemos uma 
                                solução prática e acessível para os estudantes, permitindo que encontrem exatamente o que precisam, de forma rápida e conveniente. Além disso, 
                                a UFCG é conhecida por sua excelência acadêmica e pela alta qualificação de seus alunos. Ao unir essa competência e o poder de conexão do 
                                Facilitaí, criamos uma combinação poderosa que impulsiona o crescimento pessoal e acadêmico dos estudantes, promovendo um ambiente de aprendizado 
                                enriquecedor e colaborativo. Com o Facilitaí, você terá a oportunidade de simplificar sua vida universitária, aproveitar ao máximo sua experiência 
                                na UFCG e se destacar em sua jornada acadêmica.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                            <Image
                                className="gifSection"
                                src={papper}
                                alt="gif-papper"
                            />
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}