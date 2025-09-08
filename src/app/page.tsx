import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-white text-gray-900">
      {/* Botão flutuante de WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <a 
          href="https://wa.me/5500000000000" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
          </svg>
        </a>
      </div>

      {/* Seção 1 - Hero */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Seu Próximo Software Pode Estar Pronto em Semanas – Sem Custos Altos e Sem Demoras
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Desenvolvimento ágil e seguro com retorno garantido sobre seu investimento
              </p>
              <a 
                href="#formulario" 
                className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
              >
                Agende Sua Consultoria Gratuita
              </a>
              <div className="mt-8 flex flex-wrap gap-4">
                <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-8" />
                <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-8" />
                <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-8" />
              </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <div className="relative">
                <div className="bg-gray-100 rounded-lg p-2 shadow-lg">
                  <div className="bg-white rounded-lg overflow-hidden">
                    <div className="h-[400px] w-full bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">Mockup Interativo</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-64 bg-gray-100 rounded-lg shadow-lg">
                  <div className="h-full w-full bg-gray-200 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 transform rotate-90">Mobile</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 2 - Benefícios Rápidos */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Por que Empresas Escolhem a Cerebrum?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">MVP em semanas</h3>
              <p className="text-gray-600 text-center">Lançamento rápido para validar sua ideia no mercado</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Menor custo de desenvolvimento</h3>
              <p className="text-gray-600 text-center">Redução de até 50% nos custos comparado a métodos tradicionais</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Escalabilidade garantida</h3>
              <p className="text-gray-600 text-center">Arquitetura que cresce com seu negócio sem travamentos</p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Suporte humano + IA</h3>
              <p className="text-gray-600 text-center">Atendimento personalizado com o melhor da tecnologia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Prova Social */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Prova Social</h2>
          
          {/* Case de sucesso */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                  <div>
                    <p className="font-medium">Adaanne Pus</p>
                    <p className="text-sm text-gray-500">Empresa X</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-4">
                  <img src="/client-logo-placeholder.svg" alt="Pincord" className="h-6" />
                  <img src="/client-logo-placeholder.svg" alt="CW" className="h-6" />
                  <img src="/client-logo-placeholder.svg" alt="CRUSA" className="h-6" />
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">Empresa X reduziu 50% do custo e lançou seu app em 30 dias</h3>
                <p className="text-gray-600">
                  &quot;A Cerebrum nos ajudou a transformar nossa ideia em um produto real em tempo recorde. 
                  A abordagem ágil e o foco em resultados nos permitiram economizar recursos e lançar 
                  mais rápido do que imaginávamos ser possível.&quot;
                </p>
              </div>
            </div>
          </div>
          
          {/* Logos de clientes */}
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-12" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-12" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-12" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-12" />
            <img src="/client-logo-placeholder.svg" alt="Cliente" className="h-12" />
          </div>
        </div>
      </section>

      {/* Seção 4 - Como Funciona */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Seu projeto em 3 passos simples</h2>
          
          <div className="relative">
            {/* Linha de tempo */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gray-300 -translate-y-1/2"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Passo 1 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">1</div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-center mb-4">Diagnóstico gratuito</h3>
                  <p className="text-gray-600 text-center">Analisamos sua ideia e identificamos as melhores soluções tecnológicas</p>
                </div>
              </div>
              
              {/* Passo 2 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">2</div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-center mb-4">Protótipo interativo</h3>
                  <p className="text-gray-600 text-center">Criamos uma versão funcional para validação e ajustes</p>
                </div>
              </div>
              
              {/* Passo 3 */}
              <div className="relative bg-white p-6 rounded-lg shadow-md">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center font-bold">3</div>
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-center mb-4">Software pronto para escalar</h3>
                  <p className="text-gray-600 text-center">Entregamos um produto completo e pronto para crescer com seu negócio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Formulário de Captura */}
      <section id="formulario" className="bg-orange-500 py-16 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Descubra o custo e a viabilidade do seu software agora.</h2>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nome" 
                className="px-4 py-3 rounded-md bg-white text-gray-800 w-full"
                required
              />
              <input 
                type="email" 
                placeholder="E-mail" 
                className="px-4 py-3 rounded-md bg-white text-gray-800 w-full"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="tel" 
                placeholder="WhatsApp" 
                className="px-4 py-3 rounded-md bg-white text-gray-800 w-full"
                required
              />
              <input 
                type="text" 
                placeholder="Empresa (opcional)" 
                className="px-4 py-3 rounded-md bg-white text-gray-800 w-full"
              />
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-white text-orange-500 font-bold py-3 px-6 rounded-md hover:bg-gray-100 transition-colors"
            >
              Quero Minha Consultoria Gratuita
            </button>
          </form>
          
          <p className="mt-4 text-sm">Sem compromisso, 100% gratuito</p>
        </div>
      </section>

      {/* Seção 6 - FAQ */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Dúvidas Frequentes</h2>
          
          <div className="space-y-6">
            {/* Pergunta 1 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Quanto custa?</h3>
              <p className="text-gray-600">O custo varia de acordo com a complexidade do projeto. Oferecemos planos flexíveis que se adaptam ao seu orçamento, com opções a partir de R$ X. Agende uma consultoria gratuita para receber um orçamento personalizado.</p>
            </div>
            
            {/* Pergunta 2 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">É escalável?</h3>
              <p className="text-gray-600">Sim! Todos os nossos projetos são desenvolvidos com arquitetura escalável, permitindo que seu software cresça junto com seu negócio sem necessidade de reescrever código ou enfrentar problemas de desempenho.</p>
            </div>
            
            {/* Pergunta 3 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Qual o tempo médio de entrega?</h3>
              <p className="text-gray-600">Nosso prazo médio para entrega de MVPs é de 4 a 8 semanas, dependendo da complexidade. Projetos completos podem levar de 2 a 6 meses, mas sempre trabalhamos com entregas incrementais para que você já comece a utilizar funcionalidades antes da conclusão total.</p>
            </div>
            
            {/* Pergunta 4 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Funciona para qualquer segmento?</h3>
              <p className="text-gray-600">Sim, nossa metodologia é adaptável a diversos segmentos de mercado. Já desenvolvemos soluções para e-commerce, saúde, educação, finanças, logística e muitos outros setores.</p>
            </div>
            
            {/* Pergunta 5 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Preciso de equipe técnica interna?</h3>
              <p className="text-gray-600">Não é necessário. Oferecemos suporte completo após a entrega e podemos treinar sua equipe para operações básicas. Para empresas que desejam autonomia técnica, também oferecemos serviços de transferência de conhecimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7 - Último CTA */}
      <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Cada semana sem inovar custa vendas. Vamos começar agora?</h2>
          <a 
            href="#formulario" 
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
          >
            Agendar Consultoria Grátis
          </a>
          <p className="mt-4 text-sm text-gray-400">Sem compromisso, 100% gratuito</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">© 2023 Cerebrum. Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">Termos de Uso</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Política de Privacidade</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
