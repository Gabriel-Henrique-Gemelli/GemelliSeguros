// produtos-dados.js — Gemelli Seguros
// Base de dados dos produtos usada pela página produto.html

var PRODUTOS_GEMELLI = {

    "auto": {
        nome: "Seguro Auto",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/auto",
        categoria: "Veículos",
        icone: "directions_car",
        imagem: "assets/produtos/carro.jpg",
        resumo: "Proteção completa para o seu carro, com assistência 24h e carro reserva.",
        descricao: "O Seguro Auto protege seu veículo contra colisão, incêndio, roubo e furto, além de cobrir danos causados a terceiros. Trabalhamos com as principais seguradoras do país para encontrar o plano com o melhor custo-benefício para o seu perfil de condutor.",
        coberturas: [
            "Colisão, incêndio, roubo e furto",
            "Responsabilidade civil facultativa (danos a terceiros)",
            "Carro reserva durante o reparo",
            "Assistência 24h em todo o Brasil",
            "Vidros, faróis e retrovisores",
            "Proteção para acessórios e som (conforme plano)"
        ]
    },

    "moto": {
        nome: "Seguro Moto",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/moto",
        categoria: "Veículos",
        icone: "two_wheeler",
        imagem: "assets/produtos/moto.jpg",
        resumo: "Cobertura específica para motocicletas, do dia a dia às viagens de estrada.",
        descricao: "Motocicletas exigem uma proteção específica, com regras e riscos diferentes dos automóveis. O Seguro Moto da Gemelli oferece cobertura contra roubo, furto e colisão, com assistência 24h pensada para quem anda sobre duas rodas.",
        coberturas: [
            "Colisão, incêndio, roubo e furto",
            "Responsabilidade civil facultativa (danos a terceiros)",
            "Assistência 24h para motociclistas",
            "Cobertura para capacete e acessórios (conforme plano)",
            "Moto reserva em oficinas credenciadas (conforme plano)"
        ]
    },

    "caminhao": {
        nome: "Seguro para Caminhões",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/caminhao",
        categoria: "Veículos",
        icone: "local_shipping",
        imagem: "assets/produtos/caminhao.jpg",
        resumo: "Proteção para o veículo de trabalho de quem vive na estrada.",
        descricao: "Para caminhoneiros autônomos e frotistas, o Seguro para Caminhões protege o veículo contra colisão, incêndio, roubo e furto, com assistência rodoviária 24h pensada para quem depende do caminhão para trabalhar todos os dias.",
        coberturas: [
            "Colisão, incêndio, roubo e furto",
            "Responsabilidade civil facultativa (danos a terceiros)",
            "Assistência 24h rodoviária em todo o Brasil",
            "Cobertura para cabine, carroceria e implementos",
            "Opção de cobertura para carga transportada (combinada com Transporte de Cargas)"
        ]
    },

    "vida": {
        nome: "Seguro de Vida",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/vida",
        categoria: "Pessoas",
        icone: "favorite",
        imagem: "assets/produtos/segurodevida.png",
        resumo: "Segurança financeira para quem você ama, em qualquer momento da vida.",
        descricao: "O Seguro de Vida garante uma indenização para sua família em casos de morte ou invalidez, ajudando a manter a estabilidade financeira do lar mesmo diante do inesperado. Os planos podem ser personalizados de acordo com a sua idade, profissão e necessidades.",
        coberturas: [
            "Morte natural ou acidental",
            "Invalidez permanente total ou parcial por acidente",
            "Diária por internação hospitalar (conforme plano)",
            "Cobertura para doenças graves (opcional)",
            "Assistência funeral familiar"
        ]
    },

    "vida-global": {
        nome: "Seguro Vida Global",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/vida-global",
        categoria: "Pessoas",
        icone: "shield",
        imagem: "assets/produtos/empresa.jpg",
        resumo: "Um plano de vida mais completo, com coberturas ampliadas para toda a família.",
        descricao: "O Vida Global é uma versão ampliada do seguro de vida tradicional, reunindo em uma única apólice proteção para morte, invalidez por acidente, diárias de internação e assistências para toda a família, com a possibilidade de incluir dependentes no mesmo plano.",
        coberturas: [
            "Morte natural ou acidental",
            "Invalidez permanente por acidente",
            "Diária de internação hospitalar",
            "Assistência funeral para o titular e dependentes",
            "Cobertura ampliada para acidentes de trânsito",
            "Inclusão de cônjuge e filhos (opcional)"
        ]
    },

    "viagem": {
        nome: "Seguro Viagem",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/viagem",
        categoria: "Pessoas",
        icone: "flight_takeoff",
        imagem: "assets/produtos/seguroviagem.jpg",
        resumo: "Tranquilidade médica, hospitalar e de bagagem em viagens no Brasil e no mundo.",
        descricao: "Seja a passeio ou a trabalho, o Seguro Viagem garante cobertura médica e hospitalar, apoio em caso de extravio de bagagem e assistência em diversas situações imprevistas, no Brasil e no exterior. Muitos destinos internacionais exigem esse seguro para a entrada no país.",
        coberturas: [
            "Despesas médicas e hospitalares",
            "Extravio, roubo ou atraso de bagagem",
            "Cancelamento ou interrupção de viagem",
            "Traslado médico e repatriação",
            "Assistência jurídica no exterior (conforme plano)"
        ]
    },

    "acidentes-pessoais": {
        nome: "Seguro de Acidentes Pessoais",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/acidente-pessoais",
        categoria: "Pessoas",
        icone: "accessibility_new",
        imagem: "assets/produtos/acidentespess.jpg",
        resumo: "Indenização rápida em casos de acidentes que afetem a sua rotina.",
        descricao: "O Seguro de Acidentes Pessoais garante uma indenização em dinheiro em casos de morte ou invalidez permanente causada por acidente. É uma proteção simples e acessível, indicada para quem busca uma cobertura extra além do plano de saúde.",
        coberturas: [
            "Morte acidental",
            "Invalidez permanente total ou parcial por acidente",
            "Despesas médicas, hospitalares e odontológicas emergenciais",
            "Diária por incapacidade temporária (conforme plano)"
        ]
    },

    "residencial": {
        nome: "Seguro Residencial",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/residencial",
        categoria: "Patrimônio",
        icone: "home",
        imagem: "assets/produtos/residencial.png",
        resumo: "Proteção completa para a sua casa e para quem mora nela.",
        descricao: "O Seguro Residencial protege seu imóvel e os bens dentro dele contra incêndio, roubo, danos elétricos e outros imprevistos, além de oferecer assistências do dia a dia, como chaveiro, eletricista e encanador 24 horas.",
        coberturas: [
            "Incêndio, raio e explosão",
            "Roubo e furto qualificado de bens",
            "Danos elétricos",
            "Vendaval, queda de granizo e alagamento",
            "Responsabilidade civil familiar",
            "Assistência 24h (chaveiro, eletricista, encanador, vidraceiro)"
        ]
    },

    "condominio": {
        nome: "Seguro Condomínio",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/condominio",
        categoria: "Patrimônio",
        icone: "apartment",
        imagem: "assets/produtos/condominio.jpg",
        resumo: "Proteção para as áreas comuns e a estrutura predial do condomínio.",
        descricao: "Obrigatório por lei em muitos casos, o Seguro Condomínio protege a edificação e as áreas comuns contra incêndio, explosão e outros danos, além de cobrir a responsabilidade civil do condomínio perante terceiros.",
        coberturas: [
            "Incêndio, raio e explosão nas áreas comuns",
            "Danos elétricos na estrutura predial",
            "Responsabilidade civil do condomínio",
            "Quebra de vidros e vidraças",
            "Assistência 24h para o síndico"
        ]
    },

    "empresarial": {
        nome: "Seguro Empresarial",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/empresarial",
        categoria: "Empresas",
        icone: "business_center",
        imagem: "assets/produtos/vidaglobal.png",
        resumo: "Proteção para o patrimônio, o estoque e a operação do seu negócio.",
        descricao: "O Seguro Empresarial protege o patrimônio da sua empresa — instalações, equipamentos e estoque — contra incêndio, roubo e outros imprevistos, além de cobrir a responsabilidade civil do negócio perante clientes e terceiros.",
        coberturas: [
            "Incêndio, raio e explosão",
            "Roubo e furto qualificado",
            "Danos elétricos em equipamentos",
            "Responsabilidade civil da empresa",
            "Lucros cessantes (opcional)",
            "Cobertura para estoque e mercadorias"
        ]
    },

    "rc-profissional": {
        nome: "Responsabilidade Civil Profissional",
        categoria: "Empresas",
        icone: "gavel",
        imagem: "assets/produtos/responsabilidadecivil.jpg",
        resumo: "Cobertura para erros e omissões no exercício da sua profissão.",
        descricao: "Indicado para profissionais liberais e prestadores de serviço, o seguro de Responsabilidade Civil Profissional cobre indenizações a terceiros por erros, omissões ou falhas no exercício da atividade profissional, incluindo despesas com defesa judicial.",
        coberturas: [
            "Indenização por danos a terceiros decorrentes do serviço prestado",
            "Despesas de defesa judicial e honorários advocatícios",
            "Erros e omissões no exercício da profissão",
            "Cobertura retroativa (conforme condições da apólice)"
        ]
    },

    "transporte-cargas": {
        nome: "Seguro de Transporte de Cargas",
        categoria: "Empresas",
        icone: "local_shipping",
        imagem: "assets/produtos/tranportes.jpg",
        resumo: "Proteção da mercadoria em trânsito, do carregamento até a entrega.",
        descricao: "O Seguro de Transporte de Cargas protege mercadorias durante o trajeto contra roubo, acidentes e avarias. Pode ser contratado pelo transportador (RCTR-C) ou pelo dono da carga/embarcador (RCF-DC), conforme a necessidade da operação.",
        coberturas: [
            "RCTR-C — Responsabilidade Civil do Transportador",
            "RCF-DC — Responsabilidade do Dono da Carga",
            "Roubo e furto da mercadoria durante o transporte",
            "Acidentes e avarias no trajeto"
        ]
    },

    "rural": {
        nome: "Seguro Rural",
        categoria: "Patrimônio",
        icone: "agriculture",
        imagem: "assets/produtos/lavoura.jpg",
        resumo: "Proteção para a lavoura, o maquinário e o rebanho contra perdas climáticas.",
        descricao: "O Seguro Rural protege produtores contra perdas causadas por eventos climáticos como granizo, seca e geada, além de cobrir maquinário agrícola, rebanho e instalações rurais. Uma proteção essencial para quem depende da terra para viver.",
        coberturas: [
            "Perda de lavoura por granizo, seca, geada e outros eventos climáticos",
            "Maquinário e equipamentos agrícolas",
            "Rebanho (conforme plano)",
            "Instalações e benfeitorias rurais"
        ]
    },

    "equipamentos": {
        nome: "Seguro Equipamentos",
        categoria: "Patrimônio",
        icone: "construction",
        imagem: "assets/produtos/trator.png",
        resumo: "Proteção para máquinas, ferramentas e equipamentos usados no seu trabalho.",
        descricao: "O Seguro Equipamentos protege máquinas, ferramentas e equipamentos móveis ou estacionários contra quebra, incêndio, roubo e outros imprevistos, garantindo que a sua operação não pare por causa de um sinistro.",
        coberturas: [
            "Quebra e danos acidentais",
            "Incêndio, raio e explosão",
            "Roubo e furto qualificado",
            "Equipamentos em uso, em trânsito ou parados (conforme plano)"
        ]
    },

    "frota": {
        nome: "Seguro de Frota",
        categoria: "Veículos",
        icone: "garage",
        imagem: "assets/produtos/frota.jpg",
        resumo: "Gestão simplificada e cobertura para toda a frota de carros ou caminhões da sua empresa.",
        descricao: "O Seguro de Frota foi criado para empresas com dois ou mais veículos — carros ou caminhões — em operação. Reúne todos os veículos em uma única apólice, com condições comerciais diferenciadas, gestão facilitada e assistência 24h para cada um deles, otimizando custos e simplificando a administração do seguro da sua frota.",
        coberturas: [
            "Colisão, incêndio, roubo e furto para toda a frota",
            "Responsabilidade civil facultativa (danos a terceiros)",
            "Assistência 24h em todo o Brasil para cada veículo",
            "Condições comerciais diferenciadas por volume de veículos",
            "Gestão simplificada da apólice para carros e caminhões",
            "Carro reserva durante o reparo (conforme plano)"
        ]
    },

    "bike": {
        nome: "Seguro Bike",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/bike",
        categoria: "Patrimônio",
        icone: "pedal_bike",
        imagem: "assets/produtos/bici.jpg",
        resumo: "Proteção para a sua bicicleta contra roubo, furto e acidentes, na cidade ou na trilha.",
        descricao: "O Seguro Bike protege sua bicicleta — urbana, speed, mountain bike ou elétrica — contra roubo, furto qualificado e danos causados por acidentes, além de oferecer cobertura de responsabilidade civil para os casos em que você acabe causando dano a terceiros durante o uso.",
        coberturas: [
            "Roubo e furto qualificado",
            "Danos por acidentes e colisões",
            "Responsabilidade civil (danos a terceiros)",
            "Cobertura em todo o território nacional",
            "Opção de cobertura para acessórios (conforme plano)"
        ]
    },

    "celular": {
        nome: "Seguro Celular",
        linkCalculo: "https://gemelliseguros.seucorretor.digital/#/formularios/celular",
        categoria: "Patrimônio",
        icone: "smartphone",
        imagem: "assets/produtos/celular.jpg",
        resumo: "Proteção para o seu smartphone contra roubo, furto, quebra de tela e danos acidentais.",
        descricao: "O Seguro Celular protege o seu smartphone contra roubo, furto qualificado, quedas, danos elétricos e quebra de tela, garantindo o reparo ou a substituição do aparelho sem grandes surpresas no orçamento.",
        coberturas: [
            "Roubo e furto qualificado",
            "Quebra de tela e danos acidentais",
            "Danos elétricos e por líquidos (conforme plano)",
            "Reparo em assistências técnicas autorizadas",
            "Cobertura válida em todo o Brasil"
        ]
    },

    "consorcio": {
        nome: "Consórcio",
        categoria: "Patrimônio",
        icone: "savings",
        imagem: "assets/produtos/consorcio.jpg",
        resumo: "Planeje a compra do seu carro, imóvel ou equipamento sem pagar juros de financiamento.",
        descricao: "O Consórcio é uma forma planejada de adquirir um bem — veículo, imóvel ou equipamento — reunindo um grupo de pessoas que contribuem mensalmente para a compra de cartas de crédito, sem a cobrança de juros como em um financiamento tradicional. A Gemelli te ajuda a encontrar a melhor administradora e o plano com o prazo e parcela que cabem no seu bolso.",
        coberturas: [
            "Cartas de crédito para veículos, imóveis ou equipamentos",
            "Sem cobrança de juros (apenas taxa de administração)",
            "Possibilidade de contemplação por sorteio ou lance",
            "Prazos e parcelas flexíveis conforme o plano escolhido",
            "Orientação completa na escolha da administradora"
        ]
    },

    "patrimonial-penhor-rural": {
        nome: "Seguro Patrimonial / Penhor Rural",
        categoria: "Patrimônio",
        icone: "warehouse",
        imagem: "assets/produtos/equipamentos.jpg",
        resumo: "Proteção do patrimônio rural e da garantia dada em operações de penhor rural.",
        descricao: "O Seguro Patrimonial/Penhor Rural protege benfeitorias, galpões, silos e demais bens do patrimônio rural, além de poder ser exigido como garantia em operações de penhor rural, protegendo o bem dado em garantia contra incêndio e outros riscos.",
        coberturas: [
            "Incêndio, raio e explosão em benfeitorias e instalações rurais",
            "Proteção de silos, galpões e depósitos",
            "Cobertura do bem dado em garantia em operações de penhor rural",
            "Danos elétricos (conforme plano)"
        ]
    }

};
