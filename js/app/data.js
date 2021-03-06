// Data part
// -------------------------------------------------------------------
const data = {
      fixedTexts: {
            planets: [
                  {
                        title: `<span class="title highlighted">Astrologia | O significado dos planetas</span>`
                  },
                  {
                        sol:`<span class="subTitle">Sol: </span>
                        <p class="content">Esse astro representa a maneira como você expressa a sua natureza mais essencial, o seu eu na forma mais básica.
                        Ele aponta a forma como você compreende o seu poder pessoal e a sua identidade, revelando a forma como você se afirma e se mostra diante do mundo. Sua influência é considerável, é o pai, o gerador universal em nosso mundo.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: Magnanimidade, generosidade, vitalidade, representa o eu interior, ânimo, grandiosidade, alegria de viver, liderança, autoridade, nobreza, criatividade, capacidade de organização.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Orgulho, arrogância, vaidade, autoconfiança excessiva, autoritarismo e presunção.</p>`
                  },
                  {
                        Lua: `<span class="subTitle">LUA: </span>
                        <p class="content">A Lua é o astro relacionado às questões emocionais. Ela mostra como você lida com a sua sensibilidade e as reações emotivas que você tem diante da sua vida.<br /><br />
                        Aqui também leve em consideração os condicionamentos que você traz da sua infância.<br /><br />
                        A lua é de grande importância para o homem, é na verdade a matriz astral de todas as produções terrestres de que o Sol é o pai vivo. Tudo o que chega à Terra passa pela Lua e tudo o que parte da Terra, pela Lua também passa.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: representa a humildade, as emoções, maternidade, sensibilidade, intuição, imaginação, receptividade, boa memória e fertilidade.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Preguiça, irracionalidade, inconstância, indecisão, rege as instabilidades, os humores, teimosia e timidez.</p>`
                  },
                  {
                        mercurio: `<span class="subTitle">MERCÚRIO: </span>
                        <p class="content">Esse é o planeta da razão. Mercúrio está relacionado a tudo que envolve o raciocínio e a inteligência humana. É também o astro da comunicação e do comportamento mental. Ele revelará a forma como você se expressa.<br /><br />
                        O planeta mais próximo do Sol representa a infância com seu trasbordamento de ação e vitalidade.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: Paciência, eloquência, inteligência, rapidez de raciocínio, comunicabilidade, astúcia e diplomacia.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Inveja, tendência a trapacear, cinismo, descontrole nervoso e capacidade crítica exacerbada.</p>`
                  },
                  {
                        venus: `<span class="subTitle">VÊNUS: </span>
                        <p class="content">Esse planeta é o representante da beleza e do amor. Ele mostra a sua forma de lidar com o amor e com a feição. Mostra onde se encontra os valores que você dá as coisas e as pessoas e como você enxerga o belo.<br /><br />
                        Conhecida como a “Estrela da Manhã”, representa a juventude feminina com todas as suas faceirices, suas seduções e seus perigos – é a deusa do amor em todas suas modalidades.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: Temperança, graça, ternura, estética, charme, bom gosto, amor, leveza, rege as artes, a cultura, os pequenos prazeres, cuidados com a aparência, rege também o matrimônio e o senso de valor.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Regente da luxúria, das paixões carnais desenfreadas, amoralidade e da incapacidade de se lidar com os impulsos sexuais e a sensualidade.</p>`
                  },
                  {
                        marte: `<span class="subTitle">MARTE: </span>
                        <p class="content">Marte mostra o seu relacionamento com as questões que exigem esforço e conquista. Como você lida com a sua força? Ele vai mostrar como funciona o seu espírito de luta.<br /><br />
                        O mais próximo da Terra. É a própria imagem do homem de guerra. Possui a coragem, a energia, a cólera e a violência.<br />
                        <span class="highlighted">Aspectos positivos</span>: Diligência, coragem, determinação, energia, iniciativa, liderança e força.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Ira, impulsividade, agressividade, brutalidade, egoísmo, espírito vingativo, instinto destrutivo e ambição.</p>`
                  },
                  {
                        jupter: `<span class="subTitle">JUPTER: </span>
                        <p class="content">A forma como você vai buscar um sentido para a sua existência é representada por Júpiter. Esse planeta revela as questões relacionadas a oportunidades, crescimento pessoal e objetivo de vida.<br /><br />
                        A fé, a filosofia e o sentido de justiça também são temas representados por esse planeta. Calmo e metódico é a imagem do homem de razão e de vontade, no qual as violências e arrebatamentos da juventude estão domados, sendo verdadeiramente senhor de si mesmo.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: Caridade, justiça, generosidade, aspirações, busca pelo que é superior, rege o pensamento filosófico, jovialidade, indulgência, ordem, crescimento, evolução e representa a mente superior.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Gula, ambição, arrogância, megalomania e autoindulgência.</p>`
                  },
                  {
                        saturno: `<span class="subTitle">SATURNO: </span>
                        <p class="content">A representação das suas inseguranças e valores morais é representada por Saturno.<br /><br />
                        A forma como você pretende se destacar, a sua excelência e poder de determinação também são pontos importantes para esse planeta.<br /><br />
                        As regras que regem a nossa vida e as escolhas morais que acabamos optando são demonstradas na análise desse planeta. Indica o homem triste, porém de grande experiência.<br /><br />
                        Sua energia conduz a um comportamento restritivo-pessimista e acompanha a introversão e o isolamento.<br /><br />
                        <span class="highlighted">Aspectos positivos</span>: Castidade, Sabedoria, responsabilidade, senso de organização, paciência, representa a ação do tempo, a reflexão profunda, amadurecimento, experiência, solidez, disciplina, e rege a forma.<br /><br />
                        <span class="highlighted">Aspectos negativos</span>: Avareza, voluptuosidade, ambição, egoísmo, severidade, crueldade, rigidez excessiva, mesquinhez e rege a tristeza e as limitações.<br /><br />
                        Deste modo, encerra-se o <strong class="highlighted is-bold">Septenário Astrológico</strong>, determinado por muitos autores como uma fase ou ciclo.<br /><br />
                        Como se vê o <em>Sol, Mercúrio, Marte, Júpiter e Saturno</em> representam os diferentes estágios da vida humana, desde a infância até a velhice, além de indicar o caráter moral e intelectual em cada um destes períodos que o ente humano atravessa.<br /><br />
                        Quanto à <em>Lua e Vênus</em>, especificamente, estes se relacionam com o <em>feminino</em>, representando as suas duas grandes modalidades; a Maternidade e o Amor.<br /><br />
                        Do oitavo planeta em diante, os chamados <strong class="highlighted is-bold">transsaturninos</strong>, inicia-se uma nova série que representa outro ciclo mais elevado de influências astrais.<br /><br />
                        Assim, temos uma trilogia intimamente ligada às forças que constantemente impelem à mudança psicológica e a transformação que nos leva ao desenvolvimento.</p>`
                  },
                  {
                        urano: `<span class="subTitle">URANO: </span>
                        <p class="content">Urano representa a revolução e o nosso espírito de mudança. Em quais áreas você expressa sua originalidade? Aqui é mostrada a sua sede pelo novo, pelo desconhecido e também onde reside a sua confusão mental e contradições.<br /><br />
                        Representa a energia explosiva do redemoinho caótico. É a força que se manifesta em mudanças súbitas, nos planos do ser. É o intelecto ligado aos planos superiores da iniciação.</p>`
                  },
                  {
                        netuno: `<span class="subTitle">NETUNO: </span>
                        <p class="content">As relações com a espiritualidade são mostradas em Netuno. Até que ponto as ilusões que criamos são realmente crenças?<br />
                        As tendências que você se apega para expressar uma dimensão maior e as aparências que criamos para disfarçar a nossa realidade são retratadas nesse planeta.<br /><br />
                        Representa a sublimação e o preparo ao retorno da espiritualidade incorporal, pois sua força age através do mais puro amor, levado ao idealismo que transcende em beleza.</p>`
                  },
                  {
                        plutao: `<span class="subTitle">PLUTÃO: </span>
                        <p class="content">Representa a forma como você lida com as questões relacionadas à morte e ao renascimento.<br /><br />
                        Plutão vai mostrar a existência de um poder maior que você e como você lida com essa descoberta. Está ligado aos ciclos de vida e à descoberta de grandiosidades maiores que você.<br /><br />
                        Representa o grande princípio masculino. Muitos astrólogos concordam em afirmar que Plutão simboliza uma dimensão tão complexa que está envolto em uma aura misteriosa. Está relacionado aos mais profundos ideais espirituais.<br /><br />
                        Sendo assim, Plutão representa também, o impulso vital em busca da forma. Marcando os passos evolutivos da nossa humanidade.</p>`
                  }
            ],
            houses: [
                  {
                        title: `<span class="title">Astrologia | O significado das casas</span>`
                  },
                  {
                        subtitle: `<span class="title small">- A importância das casas astrológicas: angulares, sucedentes e cadentes.</span>`
                  },
                  {
                        casasAngulares: `<span class="subTitle inline">Casas angulares: </span><em class="followingTitle highlighted">1, 4, 7 e 10.</em>
                        <p class="content">A palavra "angular" aqui se refere aos ângulos principais, as quais são: a primeira, quarta, sétima e décima casa. A palavra-chave para as casas angulares são o "Eu". <br /><br />
                        Nesse caso, o "Eu" significa "O Ego". As casas angulares nos dizem como lidar com a realidade e como começamos as coisas.</p>`
                  },
                  {
                        casasSucedentes: `<span class="subTitle inline">Casas sucedentes: </span><em class="followingTitle highlighted">2, 5, 8 e 11.</em>
                        <p class="content">A palavra "sucedente" significa "seguir" ou "alcançar" (ou meios para se seguir ou alcançar o sucesso). As casas sucedentes são: a segunda, quinta, oitava e décima primeira.<br /><br />
                        A palavra-chave para as casas sucedentes é "coleção". Uma coleção pode significar juntar dinheiro.<br /><br />
                        Também pode significar juntar coisas e se proteger, em prol de segurança.<br /><br />
                        Uma consequência direta de colecionar coisas é a organização. Precisamos organizar e nos organizar. Isto implica a gestão do que você tem e o desenvolvimento dos seus recursos ao seu favor.<br /><br />
                        E tudo isso pode ser um prazer, pois você pode desfrutar de suas aquisições. Este é o ciclo! As casas sucedentes estão ligadas aos signos fixos.</p>`
                  },
                  {
                        casasCadentes: `<span class="subTitle inline">Casas cadentes: </span><em class="followingTitle highlighted">3, 6, 9 E 12.</em>
                        <p class="content">Cadente nesse caso significa "queda", "chegar ao fim" ou "resolução". As casas cadentes são a terceira, sexta, nona e décima segunda. A palavra-chave para cadente é "dispersão". Um dos significados de dispersão é "dar" ou "doar".<br /><br />
                        Quando um grupo de pessoas segue em rumo para caminhos separados, dizemos que se dispersam. Outra maneira de exemplificar é em termos de reflexão (pensamento) e suas consequências.<br /><br />
                        Tendo tomado ação como seres conscientes, ganhamos segurança ou reunimos valores e conseguimos (ou não) refletir sobre algo (pensar seriamente sobre alguma coisa ou situação), portanto este é o ciclo de reação da ação, de lidar com as consequências.<br /><br />
                        Nas casas cadentes, refletimos sobre o que aconteceu antes e o que vamos fazer em seguida, ou seja, o que vai acontecer no futuro. É onde acontece o pensamento antes de tomar a próxima ação.<br /><br />
                        <em>No mundo, as casas cadentes aparecem periodicamente, nos momentos onde as estações do ano estão para mudar.</em><br /><br />
                        Na astrologia, significa pensarmos sobre o passado e o futuro de uma forma mais ou menos crítica, detalhada e impessoal, com a intenção de usar o que aprendemos para dar os nossos próximos passos na vida.</p>`
                  },
                  {
                        casaUm: `<span class="subTitle inline">CASA 01 | </span><em class="followingTitle highlighted">casa angular:</em>
                        <p class="content">Aparência Pessoal, da Primeira abordagem e das situações da vida.<br />
                        <strong>A primeira casa rege o potencial pessoal, a forma como iniciamos as coisas e o próprio corpo ou aparência.</strong><br /><br />
                        Por exemplo, se vênus está na primeira casa, temos a tendência a nos apresentar de uma forma harmoniosa e diplomática.</p>`
                  },
                  {
                        casaDois: `<span class="subTitle inline">CASA 02 | </span><em class="followingTitle highlighted">casa sucedente:</em>
                        <p class="content">Valores e do Dinheiro e como você lida com ele e seus Recursos.<br />
                        <strong>A segunda casa é muitas vezes associada à riqueza, de bens pessoais.</strong><br /><br />
                        Naturalmente, o que acumulamos depende do valor que atribuímos. A segunda casa se preocupa com o que nós damos valor, incluindo nós mesmos e a nossa autoestima, assim, como também o que ganhamos.</p>`
                  },
                  {
                        casaTres: `<span class="subTitle inline">CASA 03 | </span><em class="followingTitle highlighted">casa cadente: </em>
                        <p class="content">Pensamentos, Aprendizagem, Comunicação e dos Irmãos.<br />
                        <strong>A terceira casa está preocupada com a comunicação,</strong><br />
                        Em certo sentido, pode se dizer que seria "dispersar" o nosso conhecimento e experiência para os outros.<br /><br />
                        É o ato de pensar sobre as coisas, ir aqui e ali compartilhando nosso conhecimento, assim como ganhando mais conhecimento.<br /><br />
                        Este não é um conhecimento profundo, no qual é a preocupação da nona casa, e sim simplesmente fatos e informações. Literatura e comunicação verbal se ressaltam.</p>`
                  },
                  {
                        casaQuatro: `<span class="subTitle inline">CASA 04 | </span><em class="followingTitle highlighted">casa angular: </em>
                        <p class="content">Passado, da influência familiar, do Lar e dos Cuidados Recebidos.<br />
                        <strong>A quarta casa é a da família, ou o "eu" em relação à família</strong>, significa o ego que criamos a partir do passado, as origens genéticas, a memória, o autodesenvolvimento, etc.</p>`
                  },
                  {
                        casaCinco: `<span class="subTitle inline">CASA 05 | </span><em class="followingTitle highlighted">casa sucedente: </em>
                        <p class="content">Criatividade, dos Filhos, da Recreação e do Namoro.<br />
                        <strong>A quinta casa, muitas vezes refere-se a prazeres, que são o resultado de alguma atividade.</strong><br /><br />
                        Preocupa-se com amor e romance, assim como todos os tipos de entretenimento, incluindo quaisquer jogos e esportes. Também diz respeito a crianças.</p>`
                  },
                  {
                        casaSeis: `<span class="subTitle inline">CASA 06 | </span><em class="followingTitle highlighted">casa cadente: </em>
                        <p class="content">Saúde, do Trabalho e da sua Atitude diante deles.<br />
                        <strong>A sexta casa é a casa de serviço</strong>, onde voluntariamente oferecemos os nossos recursos pessoais e habilidades para ajudar os outros, fazer a manutenção e melhoras as coisas.<br /><br />
                        É onde pensamos seriamente sobre questões de trabalho, rotinas e de saúde, e como resultado, compartilhamos nosso conhecimento, principalmente no sentido de fazer as coisas para os outros. `
                  },
                  {
                        casaSete: `<span class="subTitle inline">CASA 07 | </span><em class="followingTitle highlighted">casa angular: </em>
                        <p class="content">Casamento e outras Relações de Compromissos.<br />
                        <strong>A sétima casa é o "eu" em relação aos outros</strong> (interpessoal).</p>`
                  },
                  {
                        casaOito: `<span class="subTitle inline">CASA 08 | </span><em class="followingTitle highlighted">casa sucedente: </em>
                        <p class="content">Morte e Renascimento, do Sexo, da Reprodução e da Cura.<br />
                        <strong>A oitava casa às vezes se refere aos recursos compartilhados, incluindo heranças.</strong><br /><br />
                        <strong>Também tem a ver com o sexo, regeneração</strong> e a rapidez com que você pode se recuperar de uma doença, etc. Trata da saúde, do dinheiro de outras pessoas e dos valores sociais.</p>`
                  },
                  {
                        casaNove: `<span class="subTitle inline">CASA 09 | </span><em class="followingTitle highlighted">casa cadente: </em>
                        <p class="content">Filosofia, da Vida, da Expansão da Consciência, do Saber, do Autoconhecimento e da Educação Superior.<br /><br />
                        <strong>A nona casa é a da filosofia e expansão da consciência</strong>, onde residem preocupações maiores e educação de nível superior, onde doamos o nosso tempo e esforço para expandir o nosso potencial mais elevado.<br />
                        Aqui nós pensamos muito profundamente sobre as coisas, tomando viagens mais longas a fim de adquirir o conhecimento.</p>`
                  },
                  {
                        casaDez: `<span class="subTitle inline">CASA 10 | </span><em class="followingTitle highlighted">casa angular: </em>
                        <p class="content">Carreira, da sua Autoridade e da sua Posição no Mundo.<br />
                        <stronng>A décima casa é o "eu público"</stronng> (fama, notoriedade), ou o "eu" visto pelas pessoas.</p>`
                  },
                  {
                        casaOnze: `<span class="subTitle inline">CASA 11 | </span><em class="followingTitle highlighted">casa sucedente: </em>
                        <p class="content">Amigos, dos Grupos e da sua Transformação Social.<br />
                        <strong>A décima primeira casa refere-se aos amigos e grupos, que foram "colecionados".</strong><br /><br />
                        Também se preocupa com as esperanças e desejos que nós temos. Está preocupada com o futuro, e tais preocupações também envolvem os valores que esperamos que a sociedade adote.</p>`
                  },
                  {
                        casaDoze: `<span class="subTitle inline">CASA 12 | </span><em class="followingTitle highlighted">casa cadente: </em>
                        <p class="content">Espiritualidade, do Comportamento Secreto e do Inconsciente.<br />
                        <strong>A décima segunda casa pode se referir ao carma, "lei do retorno" ou assuntos ditos religiosos ou espirituais.</strong><br />
                        Esta é uma casa de "não-eu", da quebra do ego, o que significa que está preocupada com as grandes instituições e formas mais impessoais de se lidar com as coisas, como hospitais, prisões, grandes burocracias, o serviço civil, o "além", etc.<br /><br />
                        Que são as áreas e assuntos onde pode se dizer que existe um tom de apenas servir ao invés de buscar algum lucro material, e onde os trabalhadores e gestores são basicamente anônimos. É a casa do serviço altruísta e impessoal.<br /><br />
                        Pode-se também atrelar esta casa aos assuntos ocultos, que às vezes pode significar também algo de bom que não é publicado (serviço abnegado, modesto) ou às vezes um mal que está escondido, infiltrado.<br /><br />
                        Também se refere a assuntos ocultos que estão sendo descobertos, como pesquisas científicas ou algo do tipo.<br /><br />
                        Refere-se também as "atividades nos bastidores", para o bem ou mal.<br /><br />
                        Qualquer pessoa que reveja sua vida é provável que pense em coisas que não fizeram e ou que gostariam de ter feito, assim como as coisas que fez ou que desejaram e não possuíram.<br /><br />
                        Isso pode resultar em sentimentos como alguma tristeza, culpa ou vergonha como também orgulho e satisfação, quando pensamos nas coisas boas que fizemos (ou mesmo nas tentações que resistimos). <br /><br />
                        <strong>A décima segunda casa também está preocupada com a saúde</strong>, seja como profissão ou como lidamos com a doença, com a meditação (reflexão), o autosacrifício (desprendimento) e a caridade (doação altruísta).<br /><br />
                        Indica também áreas onde temos inimigos secretos, que podem ser até mesmo certos aspectos de nós mesmos, aqueles que agem como sabotadores subconscientes que podem nos levar a nossa ruína.</p>`
                  }

            ],
            observation: [
                  {
                        info: `<p class="content">- Neste estudo interpretamos as possibilidades de cada planeta em cada signo e em cada casa do seu mapa. Aqui você tem um excelente material para autoconhecimento.<br /><br />
                        - É importante sempre cultivar apenas o que há de melhor e potencializar os seus dons e talentos. Explore a sua visão interior e experimente ouvir a voz da sua intuição para que assim, possa sentir o despertar e o manifestar de todas as habilidades que existem adormecidas dentro de você.<br /><br />
                        - Não fazemos a interpretação dos aspectos entre os planetas, ou seja: o estudo da relação entre eles. Assim, é possível que um detalhe ou outro não ressoe em você. Para uma interpretação mais pessoal, dinâmica, objetiva e interativa, recomendo sempre uma consulta particular com um Astrólogo de confiança, procure por Marcelo Dalla.<br /><br />
                        - Vale imprimir este texto para ler, reler, sublinhar as partes com que mais se identificar e refletir sobre o que mais tocar o seu coração. Aproveite este momento para se reconectar com o seu propósito de Alma e Seja o Amor que você espera receber do mundo. Reconecte agora é hora do despertar.</p>`
                  }
            ]
      },
      defaultText: {
            parteFortuna: [
                  `<span class=\"title\">O LOTE DA FORTUNA OU PARTE DA FORTUNA: </span>
                  Foi atribuído aos legendários Nechepso e Petosiris, um faraó e seu sacerdote. Também chamada pelos antigos de Parte da Lua, é usada para descrever a forma básica que conecta uma pessoa ao mundo físico e material. <br /><br />
                  Assim, é um dos significadores do corpo e da saúde, e significador principal de profissão e prosperidade, já que a profissão é um dos meios para conseguirmos prosperidade. <br /><br />
                  <strong> A Parte da Fortuna </strong> é criada a partir das longitudes do Sol, da Lua e do Ascendente e, por ser composta a partir de três dos quatro lugares principais do mapa, ela se torna tão importante quanto eles. <br /><br />
                  <em><strong> É um ponto afortunado de sorte e facilidades conforme indicada em seu mapa de nascimento. </strong></em><br /><br />
                  <strong> Ela significa a soma entre a sua atuação no mundo </strong> (Ascendente), seu passado, suas emoções e suas necessidades (Lua), e tudo isto em equilíbrio com a sua <strong> vontade e missão (Sol) </strong>.<br /><br />
                  Portanto, indica onde você encontrará realização pessoal se investir no assunto daquela casa e signo em que ela está localizada. É como um <strong> \"pote de ouro\" </strong> que está à espera no final de nosso próprio arco-íris pessoal.<br /><br />
                  <strong> Os nascidos no início da Lua nova </strong><br />
                  Roda da Fortuna na 1ª. Casa (Ascendente): Deve buscar a realização pessoal e entender a si mesmo. <br /><br />
                  <strong> Os nascidos no início da Lua crescente </strong><br />
                  Roda da Fortuna 4ª. Casa (Fundo do Céu): Deve buscar o entendimento com a sua família e suas origens. <br /><br />
                  <strong> Os nascidos no início da Lua cheia </strong><br />
                  Roda da Fortuna na 7ª. Casa (Descendente): Precisa aprender a se relacionar e a entender os outros. <br /><br />
                  <strong> Os nascidos no início da Lua minguante </strong><br />
                  Roda da Fortuna na 10ª. Casa (Meio do Céu): Precisa deixar a sua contribuição impessoal ao mundo, fazendo algo significativo. <br /><br />
                  <em>No seu Mapa a casa ocupada pela roda fortuna indicará o que deve buscar e o signo complementará indicando a maneira de agir:<em> <br /><br />`
            ],
            quironCurador: [
                  `<span class=\"default-text-title title\">QUÍRON – O CURADOR FERIDO</span>
                  Em 1977, foi descoberto um pequeno planetoide entre as órbitas de Saturno e Urano. Para a astrologia, a descoberta de um corpo celeste sempre anuncia uma mudança de consciência na sociedade e reflete desenvolvimentos históricos cruciais.<br /><br />
                  Por exemplo: a descoberta de Urano em 1781 está ligada a um período de rebeliões, revoluções e luta pela independência.<br /><br />
                  Netuno foi localizado em 1846, coincidindo com o Romantismo. Plutão é descoberto no início do século e está sincronizado com o aparecimento do fascismo, do totalitarismo e também com o de uma nova ciência, a Psicologia.<br /><br />
                  É preciso olhar para a mitologia para estabelecer a conexão de Quíron com a evolução do coletivo e compreender seu significado arquetípico. O pai de Quíron foi Saturno. Sua mãe, Filira, era uma das filhas de Oceano. De acordo com a lenda a esposa de Saturno, pegou o marido e Filira no flagra.<br /><br />
                  Para escapar, Saturno transformou-se num garanhão e deu no pé. O produto dessa união foi Quíron, o primeiro Centauro, nascido metade homem, metade animal. Perturbada por ter dado à luz ao que ela considerava um monstro, Filira pediu aos deuses que a livrassem de qualquer maneira da responsabilidade de criá-lo.<br /><br />
                  Como resposta, levaram Quíron e transformaram a mãe ingrata num limoeiro. A primeira mágoa de Quíron é a rejeição da mãe, e onde quer que Quíron se encontre num mapa, esta é a área onde podemos ser mais sensíveis às rejeições.<br /><br />
                  Representa a \"saída do Paraíso\", que todos vivemos quando somos retirados do útero para a dura realidade do mundo. No corpo físico separado e distinto, perdemos o sentido de unidade com toda a vida.<br /><br />
                  Quíron era parte divino e parte animal, nós também somos. Seu posicionamento também mostra onde sentimos mais sutilmente o conflito entre os desejos do nosso físico e algo mais transcendente, puro e divino. Educado por deuses, Quíron cresceu para ser sábio.<br /><br />
                  Seu lado animal deu-lhe sabedoria terrena e proximidade com a natureza. Podemos dizer que era um xamã, um sábio curador, bem versado nas propriedades medicinais de várias ervas. Mas também estudou música, ética, caça e astrologia.<br /><br />
                  Histórias sobre sua grande sabedoria se espalharam, deuses e nobres mortais levaram seus filhos para serem educados por ele. Tornou-se uma espécie de pai adotivo e mestre de Jasão, Hércules e Aquiles, entre outros. As matérias que mais ensinava eram o bem-estar e a cura, pois estava familiarizado em como criar e curar feridas.<br /><br />
                  Hércules feriu acidentalmente o joelho de Quíron com uma seta envenenada. O veneno era da tenebrosa Hidra e fez uma ferida incurável até mesmo para a medicina de Quíron. Fenômeno curioso: o grande médico sofrendo com uma ferida que não podia ser curada.<br /><br />
                  Este é sua qualidade mais importante: a posição de Quíron no mapa nos mostra onde fomos feridos de algum modo e, através desta experiência obtemos sensibilidade e autoconhecimento para entender e ajudar melhor os outros.<br /><br />
                  Quíron foi associado com o nascimento do interesse popular pela psicoterapia, ao processo de trazer feridas psicológicas à superfície para serem curadas. Na verdade, Quíron aparece num forte posicionamento nos mapas de muitos curadores e terapeutas. Os melhores terapeutas não são aqueles que conhecem bem as suas próprias imperfeições?<br /><br />
                  Quíron preparava as pessoas para serem heróis. Seus pupilos estavam aptos a sobreviver no mundo, mas eram também nobres capazes de feitos e proezas a serviço de seus países ou de um todo maior.<br /><br />
                  A sua localização no mapa não só é capaz de indicar onde podemos ensinar os outros, mas também onde nosso potencial heroico pode manifestar-se. A área onde podemos ir além do normal, sem perder o contato com a \"vida real\".<br /><br />
                  Podemos ser intuitivos, inventivos e também ter os pés bem postos no chão. Dale O'Brien diz que trânsitos críticos de Quíron indicam quando e como um indivíduo é desafiado a crescer sobre a adversidade ou mediocridade que cercam a sua vida e a perceber um destino maior envolvendo-o.<br /><br />
                  Como prêmio por todos os serviços prestados, Quíron recebeu o dom divino da imortalidade. Mas estava numa posição muito estranha, não podia curar sua ferida nem morrer. Qual a solução?<br /><br />
                  Prometeu que roubou o fogo dos deuses e foi banido para os mundos inferiores, seria libertado se alguém ficasse no seu lugar. Quíron, não querendo mais ser imortal, concordou em trocar de lugar com Prometeu.<br /><br />
                  Eis a fusão de dois tipos de sabedoria: Quíron pegou a sabedoria terrena e a usou para propósitos mais elevados, enquanto Prometeu tirou o fogo dos deuses, símbolo da criatividade, e o trouxe para a Terra. Nosso desafio é integrar a visão espiritual do fogo criativo com a técnica e o senso prático.<br /><br />
                  A atitude de Quíron com relação à morte e seu entendimento acerca da saúde, da cura e da educação são os sinais dos nossos tempos. Quando a humanidade desperta para sua essência divina, para a busca do autoconhecimento e expansão da consciência a fim de promover a cura individual e planetária.<br />`
            ],
            junosCasasSignos: [
                  `<span class=\"default-text-title title\">JUNO NAS CASAS E NOS SIGNOS:</span>
                  A chave de sua interpretação se encontra na questão associativa e de parcerias. Da estabilização da vida afetiva através da capacidade de um viver partilhado com alguém. Estes assuntos evocam Vênus, mas a diferença entre Juno e Vênus é considerável.<br /><br />
                  A deusa nascida das espumas do mar misturadas ao esperma de Urano concerne a sensibilidade individual, através da qual, cada um vive sua vida sentimental e afetiva. Ou a maneira que cada um de nós, conjuga o verbo amar.<br /><br />
                  Vênus, porém representa um fator não exatamente conjugal, e num nível mais elevado ela poderia simbolizar, o parceiro/o ideal ou desejado do ponto de vista afetivo. Certamente não há como negar a correspondência que existe entre Juno e Vênus. O que as faz diferentes e a forma que cada uma delas evolui, como a maneira de vivê-las.<br /><br />
                  Com Vênus aprendemos a viver melhor, a considerar o outro como ele mesmo a aprendermos a partilhar com ele, as zonas que possuímos em comum. Mas a relação afetiva em relação ao mundo que nos cerca é vivenciada através das energias de Juno.<br /><br />
                  Deusa do casamento e da parceria existe nela uma escolha intencional, consciente e programada, (no mapa masculino a Juno mostra que tipo de esposa e parceira este homem escolherá, e no mapa feminino, que tipo de esposa ou parceira será esta mulher).<br /><br />
                  Na verdade a Juno nas cartas mostra mais o tipo de parceira, (para os homens) e de comportamento na parceria ou no casamento (para as mulheres) do que a própria Vênus, que seria o desejo e forma de amar que cada um de nós tem.<br /><br />
                  Estas parcerias e comportamentos não estão restritas ao casamento/relação amorosa, são também extensivas a formas extra afetivas, tais como Médico/doente, terapeuta/paciente, professor/aluno, vendedor/comprador, dirigente/subordinado, etc...<br /><br />
                  A maneira que estabelecemos uma parceria, como o outro se comporta conosco e mostrado pela sétima casa e Vênus mostra o potencial de cada um de nós, de harmonia, mais os aspectos entre Juno e Vênus mostrarão a totalidade da vida a dois, indicarão se a pessoa tem uma maior ou menor facilidade de alinhar as realidades do seu destino conjugal (Juno) com seus ideais amorosos/afetivos (Vênus).<br /><br />
                  No plano profissional Juno favorece a criatividade artística e orienta a pessoa para as profissões onde a busca da harmonização da beleza são importantes (libra).<br /><br />
                  Estética, ornamentação, decoração, estilismo, cabeleireiro, e aumenta a capacidade de receptividade de pessoa às outras pessoas, favorecendo profissões tais como recepcionista, apresentadora de espetáculos, entrevistadora, manequim etc... Ou as profissões que estão ligadas a um imediato reconhecimento e aceitação do outro a pessoa.<br /><br />
                  No nível espiritual Juno participa da realidade universal, realidade esta que será filtrada através das experiências de duas pessoas juntas.<br /><br />
                  Ela é o canal microcósmico da Harmonia divina, projetada na Sua criação. No nível representativo, Juno aparece muito imbuída de si própria e autoconsciente, e tem um desejo espontâneo de brilhar, de aparecer, ela se projeta sempre para diante, as vezes podendo fazer bobagens.<br /><br />
                  No tipo de Juno bem integrada vemos que há uma facilidade para a integração com o outro na área individual da pessoa. No nível existencial, Juno tem todos os atributos energeticamente falando, para atuar brilhantemente e mesmo se afirmar, numa atividade profissional bastante personalizada.<br /><br />
                  No nível transcendente, Juno possibilita que através das parcerias que estabeleçamos, possamos contribuir no mundo, para o maior equilíbrio deste, e que possamos estabelecer um nível alto de sociabilidade e poder através desse partilhar social, aproveitar as delícias de estar vivo neste plano.<br /><br />
                  No negativo, uma Juno problemática poderia cair numa tendência a autopiedade tipo “os outros é que são culpados pelo que me acontece de ruim” e também de uma falta de iniciativa pessoal.<br /><br />
                  De uma procura por “alguém que poderia me levar a ser mais feliz e mais inteira/o e completa/o”. Acontece e que o outro, com o qual vamos partilhar nossa existência, (não só conjugalmente, mas também socialmente) será um reflexo a imagem e semelhança do que somos.<br />`
            ]
      },
      planets: [
            {
                  title: `Sol`,
                  id: 1
            },
            {
                  title: `Lua`,
                  id: 2
            },
            {
                  title: `Ascendente`,
                  id: 3
            },
            {
                  title: `Mercúrio`,
                  id: 4
            },
            {
                  title: `Vênus`,
                  id: 5
            },
            {
                  title: `Marte`,
                  id: 6
            },
            {
                  title: `Júpter`,
                  id: 7
            },
            {
                  title: `Saturno`,
                  id: 8
            },
            {
                  title: `Urano`,
                  id: 9
            },
            {
                  title: `Netuno`,
                  id: 10
            },
            {
                  title: `Plutão`,
                  id:11
            },
            {
                  title: `Nodos Lunares`,
                  id:12
            },
            {
                  title: `Parte da Fortuna`,
                  id: 13
            },
            {
                  title: `Quíron`,
                  id: 14
            },
            {
                  title: `Juno`,
                  id: 15
            },
            {
                  title: `Mercúrio retrógrado`,
                  id: 16
            },
            {
                  title: `Vênus retrógrado`,
                  id: 17
            },
            {
                  title: `Marte retrógrado`,
                  id: 18
            },
            {
                  title: `Júpter retrógrado`,
                  id: 19
            },
            {
                  title: `Saturno retrógrado`,
                  id: 20
            },
            {
                  title: `Urano retrógrado`,
                  id: 21
            },
            {
                  title: `Netuno retrógrado`,
                  id: 22
            },
            {
                  title: `Plutão retrógrado`,
                  id: 23
            },
            {
                  title: `Quíron retrógrado`,
                  id: 24
            },
            {
                  title: `Juno retrógrado`,
                  id: 25
            }
      ],
      signos: [{
            title: `aries</strong>`,
            text: [
                  `Áries é um signo de Fogo, o primeiro signo do Zodíaco. Traz da ideia do 1, do impulso inicial, do ponto de partida.<br /><br />
                  Qualidades: pioneirismo, entusiasmo, iniciativa, coragem, garra, espontaneidade, competitividade e energia.<br /><br />
                  Áries quer desbravar, conquistar, caminhar sozinho, ser o senhor da sua vontade, ter autonomia e assumir o comando de seu destino.<br /><br />
                  O Sol se exalta em Áries e reforça suas qualidades, como a autoconfiança, a liderança, o poder e o espirito de liberdade. O Sol em Áries favorece a audácia e a impulsividade.<br /><br />
                  O Ariano tem necessidade de ir para além das suas possibilidades, buscar a sua emancipação a fim de poder realizar-se.<br /><br />
                  O desejo de liberdade e de independência em relação à família é muito evidente. É difícil para um ariano admitir que outras pessoas venham meter o nariz nos seus assuntos.<br /><br />
                  Todavia, tem grande tenacidade, o que lhes permite muitas vezes levar a cabo projetos muito difíceis. É também sincero e inquieto.<br /><br />
                  Outra dificuldade para o ariano é dar continuidade aos projetos e estudos, pois vencida a etapa inicial, têm tendência a perder o interesse.<br /><br />
                  Na saúde, as suas partes vulneráveis são: cérebro, nariz, cavidades sinuosas, orelhas, dentes e tudo o que engloba a cabeça no seu conjunto.<br /><br />
                  É preciso prestar atenção particular à alimentação, pois podem ocorrer doenças alérgicas ou psicossomáticas, que são frequentemente resultado de um modo de vida anacrônico.<br /><br />
                  Deve estar atento à circulação sanguínea e vigiar os rins em particular: provavelmente se o seu regime de vida os maltrata.<br /><br />
                  É recomendável a prática de esportes que exijam grande dispêndio de energia, o que lhe permite queimar as toxinas prejudiciais ao organismo e controlar a ansiedade.<br /><br />
                  Na via negativa, é preciso estar sempre atento à impaciência, à agressividade, à franqueza rude e desrespeitosa, à rivalidade e ao autoritarismo.<br /><br />
                  O equilíbrio está no signo oposto, Libra, com suas qualidades de ponderação e equilíbrio.<br /><br />
                  O desafio é encontrar a harmonia, seja consigo mesmo ou em suas relações. Aprender a ceder quando necessário, dar lugar à vontade dos outros, ser mais manso e não ferir os demais.<br /><br />
                  Sendo mais ponderado, pode conseguir melhores resultados em seus projetos. Se o ariano consegue ir além de seu ego, transforma-se num herói, num guerreiro da Luz.<br /><br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas.<br /><br />
                  Já o Sol representa o futuro. As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua.<br /><br />
                  Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar. A Lua em Áries predispõe o nativo a uma natureza volátil, emocionalmente enérgica e impulsiva.<br /><br />
                  Muitas vezes comporta-se de maneira precipitada ou agressiva, sem levar em consideração as consequências de seus atos.<br /><br />
                  Pode ter súbitos acessos de raiva que, no entanto, são passageiros e logo esquecidos. Sente urgência em tudo.<br /><br />
                  A pessoa com esta posição da Lua prefere a autonomia e é muito independente. Insiste em seguir o seu próprio curso de ação, certo ou errado.<br /><br />
                  Não costuma tolerar a interferência dos outros e costuma reagir mal quando depende de alguém para alguma coisa.<br /><br />
                  Tende a considerar a reação dos outros de maneira pessoal e a dominar os outros emocionalmente. Num relacionamento, o que lhe interessa é a conquista.<br /><br />
                  Por tudo isso, é importante aprender a equilibrar suas imposições com mais ternura, cordialidade e suavidade. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a \"máscara\" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Quem tem Ascendente em Áries entra na vida como quem entra num desafio: com impulsividade, pioneirismo, ousadia, impaciência.<br /><br />
                  Há necessidade de ser mais decidido, de agir e despertar o seu poder para criar a sua própria vida.<br /><br />
                  <strong> O aprendizado é encarar a vida de maneira direta e enérgica.<br /><br />
                  Cultivar uma expressão bem ativa, espontânea, competitiva na via positiva e assertiva.</strong>
                  Quem tem este ascendente tende a acreditar que o caminho mais curto entre dois pontos é uma reta e a colocar isso em prática em todas as circunstâncias da vida.<br /><br />
                  Muitas vezes com grandes ganhos de tempo e benefícios, outras vezes com consequências menos felizes. Na verdade, só tem a sensação de existir, de estar vivo, se estiver a fazer alguma coisa.<br /><br />
                  Se a expressão do ascendente em Áries é contida ou negada, a frustração acumulada pode explodir e se manifestar como ataques de raiva, ansiedade, explosões agressivas.<br /><br />
                  <strong> Quando aprender a agir com autoestima, por vontade e escolha própria, em vez de reagir continuamente à necessidade de se afirmar, poderá vivenciar plenamente as qualidades de ação, assertividade e decisão associadas ao seu signo ascendente.</strong><br /><br />
                  Fisicamente, o Ascendente em Áries pode ter uma postura enérgica, viva, rápida e impaciente. Rosto vivo, olhar ágil, franco, direto e intenso.<br /><br />
                  Os movimentos são rápidos, repentinos e por vezes até bruscos e diretos.<br /><br />
                  É como se a qualquer momento fosse mergulhar de cabeça em uma nova atividade.<br /><br />
                  Observe-se para não agir sem pensar como, por exemplo: até querer dizer \"saia da minha frente\". <br />`,

                  `Mercúrio neste signo indica um tipo de raciocínio que tende a ser determinado, impulsivo e competitivo.<br /><br />
                  Os nativos gostam de discutir e argumentar. Com frequência, possuem a habilidade de pensar rapidamente e podem criar muitas ideias originais.<br /><br />
                  Entretanto, podem ser imprudentes ao tomarem decisões e considerar as coisas a partir de um ponto de vista muito pessoal.<br /><br />
                  Pode haver irritação e um temperamento irascível. No seu extremo, esta tendência pode resultar em egotismo intelectual e atitudes voluntariosas.<br /><br />
                  Os nativos tem dificuldade para tolerar demoras. Consequentemente, não gostam de se submeter a longos e demorados processos de decisão demorados, que se tornam frustrantes.<br /><br />
                  A sua impulsividade significa que nem sempre concluem as ideias que iniciam. <br />`,

                  `Quem possui Vênus nesse signo do zodíaco é ardente e impulsivo, podendo se apaixonar e desapaixonar de maneira quase instantânea.<br /><br />
                  As paixões súbitas não duram muito, pois numa relação, a conquista é a parte mais estimulante para eles.<br /><br />
                  epois, quando o fogo da paixão começa a diminuir, eles podem perder o interesse.<br /><br />
                  Quem tem Vênus em Áries tende a buscar o prazer de forma imediatista. É caprichoso e inconstante. Quando se interessa por alguém quer sexo no primeiro encontro.<br /><br />
                  Incapaz de esperar, não dá muitas voltas para dizer o que quer: vai direto ao assunto, de maneira franca e aberta, sem rodeios. É pegar ou largar!<br /><br />
                  Quem tem Vênus em Áries precisa se sentir livre, leve e solto. Gosta de brincar, dançar e mesmo que tenha seu par, é dono de si.<br /><br />
                  Tem um jeito espontâneo de expressar afeto, gosta de ser paparicado, elogiado e valorizado no que faz. Mas se a graça estiver apenas na conquista, ela desaparece depois que o objetivo é alcançado.<br /><br />
                  O cuidado deve ser para compras impulsivas e pela busca do prazer inconsequente.<br /><br />
                  Quem se relaciona intimamente com alguém que tem essa característica astrológica não pode se queixar de falta de sexo. Mas é muito difícil manter a chama acesa durante muito tempo.<br /><br />
                  Portanto, num relacionamento de longo prazo é necessário contar sempre com algo novo e excitante.<br /><br />
                  Quem tem Vênus em Áries deve aprender a ser criativo no amor, deve aprender a transcender seus desejos infantis e buscar outros valores, se quiser viver uma história duradoura. <br />`,

                  `Marte está domiciliado no signo de Áries, expressa aqui todo o seu potencial. Indica boa energia vital, entusiasmo, capacidade de conquista, impulsividade, audácia, gosto por aventura, ousadia, espírito empreendedor e pioneiro. <br /><br />
                  Confere boa vitalidade e energia física e sexual. Boa fertilidade. A pessoa com esse Marte adora os esportes e adora competir, querendo chegar sempre em primeiro lugar.<br /><br />
                  Tem uma necessidade de canalizar as suas energias de forma física.<br /><br />
                  Impaciente e apressado pode passar por cima dos outros, por querer estar sempre um passo à frente. Na via negativa, é preciso trabalhar o descontrole nas ações e palavras.<br /><br />
                  Tamanha energia pode ser geradora de violência, agressividade excessiva, impaciência que causa acidentes de todo tipo e principalmente perigo com armas, fogo, acidentes de carro e quedas.<br /><br />
                  Essa energia também pode provocar dores de cabeça, ferimentos na cabeça ou no rosto. <br />`,

                  `O nativo pode ganhar dinheiro através de seus méritos pessoais. Mas o excesso de otimismo pode provocar grandes perdas económicas se não tiver cuidado.<br /><br />
                  Há forte inclinação para as ciências, a literatura, a religião, as viagens. É possível que se dedique a duas profissões em simultâneo, ou que estas mudem várias vezes.<br /><br />
                  O nativo é, em certa medida, precursor, pioneiro ou inovador, mas a sua natureza não é conservadora. Geralmente é afortunado e respeitado.<br /><br />
                  Tem habilidades especiais para a liderança, mantém sempre uma fé inquebrantável em si mesmo. Tende a tomar posições de responsabilidade, sobretudo em cargos públicos. <br />`,

                  `Saturno no signo de Áries indica que o nativo é forçado pelas circunstâncias a adquirir iniciativa, paciência e autoconfiança para enfrentar as necessidades práticas da vida.<br /><br />
                  Através da obrigação de desenvolver seus próprios recursos, passa a desenvolver sua vontade e força de carácter.<br /><br />
                  Áries representa o impulso inicial de ação, enquanto Saturno representa a lei de causa e efeito que traz de volta as consequências de uma ação.<br /><br />
                  Por isso fica mais difícil para o nativo com esta posição ver a si mesmas como os outros o veem.<br /><br />
                  O nativo está iniciando um novo ciclo de experiências, de forma que não teve tempo para aprender as consequências de seus atos. Portanto, pode não ter consciência dos princípios de justiça social e dos direitos alheios.<br /><br />
                  Mesmo assim, esta posição de Saturno oferece muitas habilidades. Os nativos são capazes de desenvolver novos métodos no seu trabalho.<br /><br />
                  No caso de pessoas muito desenvolvidas, a disciplina associada à iniciativa conduz à criatividade mental e ao pioneirismo, que lhes permite criar novos conceitos nas áreas escolhidas.<br /><br />
                  No seu pior, os nativos podem ser muito defensivos sempre esperando a oposição dos outros.<br /><br />
                  Essa característica dificulta a compreensão, a colaboração e a comunicação com os outros. Também pode haver egocentrismo e o impulso de se autojustificar.<br /><br />
                  Ao se preocuparem com a sua própria ambição e segurança, podem ignorar as necessidades e aspirações dos outros.<br /><br />
                  Essa tendência de buscar exclusivamente objetivos pessoais pode impedi los de colaborar com os outros e, assim, limitar o seu sucesso. Portanto, é preciso observar se falta diplomacia.<br /><br />
                  O nativo gosta de fazer tudo sozinho, cuidando das suas próprias necessidades sem dar ou solicitar ajuda. Preferem ter os seus próprios negócios, mas isso nem sempre é possível com esta posição. <br />`,

                  `Urano no signo de Áries indica um nativo cuja missão é indicar novos caminhos nas ciências e reforma social.<br /><br />
                  Para ele a liberdade para agir à sua maneira é de extrema importância. Possui coragem, audácia, iniciativa e habilidades.<br /><br />
                  O seu espírito de aventura é forte, o nativo precisa constantemente de novas experiências para se sentir feliz.<br /><br />
                  Esta posição pode torná-los indelicados e francos. Exigem mudanças e recusam-se a viver no estilo dos seus pais ou das gerações precedentes.<br /><br />
                  No seu pior, podem ser explosivamente impulsivos, politicamente fanáticos, agressivos e indiscriminados na sua rejeição do passado.<br /><br />
                  Quando o individualismo é levado a extremos, torna as pessoas cegas para a estrutura social da qual dependem grandes empreendimentos.<br /><br />
                  Impulsividade e mau génio são as armadilhas desta posição. Os nativos precisam aprender a ter mais consideração pelos outros e maior capacidade de colaboração. <br />`,

                  `As pessoas nascidas com Netuno em Áries mostram muita iniciativa para a criatividade espiritual, experimentando a sensação de terem de cumprir uma missão.<br /><br />
                  São pioneiros em novos conceitos religiosos e filosóficos. A expressão negativa de Netuno é o falso orgulho, o egoísmo e o desejo de se sobressair ou se destacar.<br /><br />
                  Com a entrada de Netuno em Áries no século passado, inicia-se uma época de investigação no campo psíquico, bem como o desenvolvimento do espiritualismo. <br />`,

                  `Esta geração caracterizou-se pelo espírito revolucionário. Teve de vencer sérios obstáculos e viver momentos de muita dureza a fim de conseguir liberdade e uma nova forma de vida, tal como a conquista do Oeste americano.<br /><br />
                  Pioneiros, reformadores, líderes de qualquer causa obcecados pelo valor pessoal. Sempre dispostos a destruir qualquer obstáculo à sua vontade, que não reconhece limites.<br /><br />
                  Plutão em Áries se manifesta de forma individualista. A necessidade de mudar todo o precedente se traduz numa urgência pela transformação pessoal.<br /><br />
                  Põe a descoberto o que deixou de nos servir no ciclo anterior e propicia a procura de novos valores. <br />`,

                  `Quem tem o Nodo Sul (Cauda do Dragão) em Áries traz experiências de um espírito independente, muitas vezes egoísta. É muito voltado para si próprio e seus próprios interesses.<br /><br />
                  Reativo, impulsivo e impaciente, tem dificuldade de tolerar o tempo e o espaço dos outros. Explodem facilmente, pode até mesmo ter comportamento agressivo, violento ou brusco.<br /><br />
                  Traz também capacidade de liderança, coragem, assertividade. Memórias de guerras, batalhas, confrontos e violência. De independência, liberdade, autonomia, autoritarismo. Não aparenta ou transmite sensibilidade, mas tem um coração puro.<br /><br />
                  Age impulsivamente e sem pensar. Por causa disso, muitas vezes se arrepende depois. Tem dificuldade nos relacionamentos, pois não leva o outro em consideração devido ao excesso de autonomia.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) no signo de Libra, veio aprender a considerar mais as pessoas com quem se relaciona. Aprender a cultivar paciência, saber ouvir e esperar. Valorizar cada vez mais as parcerias, as alianças, as habilidades sociais e a interação com o outro.<br /><br />
                  A missão é de conciliar o seu Eu com o Eu do outro. Aprender a partilhar uma vida em comum, a deixar-se guiar quando necessário, a ser cuidado pelo outro.<br /><br />
                  Aprender a reconhecer sua fragilidade, seus pontos fracos e suas incapacidades. Cultivar mais ponderação e prudência, consciente de que toda ação ações gera consequências.<br /><br />
                  Com o tempo e a experiência de vida pode desativar sua violência, ganhar humildade e respeito pela sensibilidade e necessidades dos outros. Aprender a arte do relacionamento, do compromisso, da harmonia do equilíbrio com o outro.<br /><br />
                  Ou seja, o equilíbrio só é possível se aprender a ceder e se ajustar às necessidades das pessoas com quem conviver. <br />`,

                  `A facilidade de funcionamento e a felicidade vêm com o exercício do poder de iniciativa e com um confiante mergulho na experiência.<br /><br />
                  O indivíduo deverá deixar-se guiar pela intuição e deverá ver-se como um ativador de novos impulsos sociais e culturais, tendendo a identificar a sua personalidade com tal impulso criativo, ou então se sentirá frustrado e infeliz se for impedido de agir assim.<br /><br />
                  Exemplos: Francis Bacon, George Washington, Clara Barton, Isaac Newton, Louis Pasteur, Albert Einstein, Frederic Chopin, Will Levington Comfort. <br />`,

                  `Você costuma, algumas vezes, sentir que não tem o direito de viver, e a autoafirmação e a iniciativa podem vir acompanhadas do medo de não existir.<br /><br />
                  Parece que você só se sente vivo quando refletido em alguém. Você só tem motivação para defender alguma causa quando o benefício é dos outros, como se tivesse capacidade de luta, mas pouca vontade própria.<br /><br />
                  Com medo de ser impelido a entrar num ciclo repetitivo de tentativas inúteis e autodestrutivas, e para compensar a dor, você pode se limitar a fazer demonstrações de sua força e espírito de luta, sem entrar para valer na luta.<br /><br />
                  Você é propenso a agir de modo precipitado, descarregando de uma vez sua tensão emocional e transformando-a em ação.<br /><br />
                  Você pode ser muito cruel consigo próprio em consequência de um senso de autossuficiência exagerado, por achar que deve caminhar sozinho, sem pedir ajuda.<br /><br />
                  Internamente, pode surgir um sentimento de desespero e desejo de morrer, além de um temor profundo de fazer algo que possa exprimir o que realmente deseja.<br /><br />
                  Suas expressões espontâneas de paixão, de ser, ou de vontade podem ter sido esmagadas na sua infância de uma forma sutil ou forma declarada.<br /><br />
                  Métodos repressivos de educação como alimentação em hora certa, privação de contato físico, treinamento sistemático prematuro das necessidades fisiológicas, podem ter sido seus primeiros sofrimentos.<br /><br />
                  Se a interferência em seus ritmos naturais de vida e a sua negação foram intensas, provocarão sentimentos de que você não tem direito ao querer ou desejar, e você acaba não se esforçando para satisfazer seus desejos e acha que é inaceitável como é.<br /><br />
                  É claro que essa impotência diante da vida acarreta uma raiva profunda e quase sempre despropositada. Na vida adulta pode ter medo de externar seus desejos e eles serem sistematicamente destruídos.<br /><br />
                  O ambiente de sua infância pode ter sido hostil e repleto de agressividade encoberta ou declarada, produzindo sentimentos de timidez e falta de autoestima e de direito próprio.<br /><br />
                  Viver, então, passa a equivaler a aprender como agradar e aplacar terceiros, viver tentando preencher as falhas de outras pessoas, ficando anônimo.<br /><br />
                  Por outro lado, você pode ser o tipo que compensou esse início de vida, sendo agora um pioneiro, uma pessoa cheia de força de vontade, impulso, energia e entusiasmo.<br /><br />
                  Mas é importante compreender que essa é uma máscara que pode cair, e quando isso acontece você pode entrar num estado lastimável de sofrimento e insegurança, chegando a ter desejo de morrer.<br /><br />
                  A vontade de morrer pode ser causada por: resposta à raiva, à frustração ou à falta de controle diante de algum problema; pode representar o desejo de recuperar o poder ou uma reação ao sentimento de incapacidade de tomar decisões próprias.<br /><br />
                  Pode haver um sentimento de que se morrer ninguém notará sua falta, nada mais vai restar de você. Ás vezes, iniciar qualquer coisa é tão difícil que você entra em colapso, desiste, na soleira daquilo que lhe parece ser uma nova e emocionante fase de sua vida.<br /><br />
                  Isso pode ser causado por ter tido uma experiência traumatizante no nascimento físico, por isso, qualquer novo inicio de vida pode ser encarado com confusão, medo e resistência.<br /><br />
                  Você pode empenhar-se em encontrar algo que possa fazer e que lhe traga o senso de identidade de que precisa, pode se impor a tarefas quase impossíveis para provar a si mesmo que existe e tem um lugar no mundo. Para algumas pessoas, essa luta é válida e dá resultado, para outras é inútil.<br /><br />
                  Você pode projetar no seu corpo seu sentimento de vergonha e constrangimento por existir, achando certos detalhes de seu corpo deformados ou feios, e as outras pessoas nem percebem, ou nem se importam com o que para você é tão importante.<br /><br />
                  É necessário rever essa programação interna, pois agora você é um adulto, as circunstâncias são outras e exigem reações diferentes daquelas aprendidas na infância. Você tem capacidade de ser um curador ou um terapeuta e tratar pessoas que viveram uma infância difícil.<br /><br />
                  Você pode desenvolver a capacidade de instruir outras pessoas e dar-lhes poderes ao perceber a sua própria impotência diante do Universo. Você passa a imagem de ser uma pessoa solitária, mesmo quando casado.<br /><br />
                  Você busca um senso de identidade, mas talvez só descubra que, quando desistiu dessa busca e passou a aceitar sua insignificância, e que conquistou uma tremenda vitalidade, bem como a sensação de ser compreendido.<br /><br />
                  Quase sempre você tem facilidade de agir intuitivamente no momento oportuno e agarrar a ocasião que se apresenta. Você tem a capacidade de aliar a compaixão à ação adequada, bem como de ser altamente inovador e tomar iniciativas, sobretudo quando o bem-estar de outros está em jogo.<br /><br />
                  Você adquire força na luta, mas deve aprender a ser um nobre rival diante daqueles com os quais compete. Se for capaz de superar a sua agressividade passiva, sua tendência a agir dissimuladamente, sentirá a vida fluir em suas veias.<br /><br />
                  Embora as dúvidas que nutre quanto à sua própria existência sejam a sua grande ferida, você provavelmente é muito atraente como pessoa, de modo que não precisa ficar surpreso se os outros se sentirem fortemente atraídos por você. <br />`,

                  `O parceiro ideal é aquele que tenha interesse em esportes e atividades dinâmicas e seja ativo, assertivo, o tipo que está sempre em busca de novas emoções e aventuras.<br /><br />
                  Podem ser pessoas muito ativas, vibrantes, dinâmicas. O que conta é o desafio e a coragem, porque Áries não aprecia as coisas fáceis. Quanto mais difícil, mais desperta o interesse.<br /><br />
                  De alguma forma são parcerias desafiantes. Mas também podem ser pessoas impulsivas, violentas ou conquistadoras que apreciam apenas a conquista e formam relacionamentos de curta duração.<br /><br />
                  Representa a busca de uma parceria dinâmica e ativa, marciana. Sua evolução passa pelo esforço de construir uma relação durável e sólida, na qual a individualidade é respeitada. <br />`,

                  `Em suas vidas passadas o nativo pode ter sido um comerciante e como tal, agia de forma agressiva, impaciente ou intolerante.
                  Faltava-lhe paciência nas suas negociações, chegando até a insultar os seus parceiros.<br /><br />
                  Se foi um estudante ou intelectual, tinha uma tendência infantil a se vangloriar do seu desempenho intelectual.<br /><br />
                  Talvez também tivesse professado opiniões militaristas extremistas que haviam incitado as pessoas a lutarem entre si.<br /><br />
                  Uma coisa é certa: o nativo deve transformar seu discurso impulsivo e agressivo, com o qual feriu muita gente. Deve aprender a ouvir, a se comunicar com mais maturidade e compaixão. <br />`,

                  `O nativo desconfia dos outros: tem dificuldade em assumir o casamento, em virtude de uma grande desconfiança em relação ao amor.<br /><br />
                  Ficará feliz quando compreender as virtudes do diálogo: ouvir mais, deixar o ser amado se expressar, sem lhe impor sempre uma direção ou um comando.<br /><br />
                  Essa Vênus imediatista, impulsiva, autoritária e exigente deve aprender a paciência. Deve aprender a transcender seus desejos infantis e buscar outros valores, se quiser viver uma história duradoura. <br />`,

                  `O enorme sentimento de insegurança que o nativo experimenta é na verdade, herdado de vidas passadas.<br /><br />
                  Foi pouco consciente do mundo que o cerca: impulsivo, imaturo, imprudente, imediatista, impaciente, apaixonado e violento. Faltou-lhe objetividade.<br /><br />
                  Nesta vida deve buscar o autoconhecimento. Pode se libertar ao tomar consciência de suas próprias tendências negativas.<br /><br />
                  Ao invés de se voltar contra os outros, deve olhar para si mesmo, com mais ponderação. Exercitar as virtudes da tolerância, da diplomacia, da gentileza e da paciência. <br />`,

                  `A palavra-chave de Júpiter é \"expansão\". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas. <br />
                  Com Júpiter retrógrado em Áries, é preciso cuidado com as ideias preconcebidas! A pessoa tende a ser um tanto sincero e direto demais, é preciso cultivar flexibilidade em face das circunstâncias da vida.<br /><br />
                  Há tendência para julgar os indivíduos segundo critérios pouco realistas e categorias demasiado estanques ou dogmáticas.<br /><br />
                  A vida conjugal é um grande aprendizado, por causa da sua possível vaidade, acrescida, por vezes, de uma surpreendente ingenuidade.<br /><br />
                  Também por causa de sua sede inextinguível de novas experiências! Lição cármica desta posição planetária: ser honesto consigo mesmo, desenvolver o autoconhecimento e a autoestima. <br />`,

                  `Em vidas passadas o nativo já viveu a experiência do poder pessoal. Foi muito independente, teve enorme liberdade pessoal. <br />
                  Sabe dirigir toda a sua energia para um só objetivo. Saturno indica uma perseverança e uma determinação que não são da natureza de Áries.<br /><br />
                  Por outro lado, o nativo pode ter sido forçado também por circunstâncias muito duras (guerra, fome ou limitações) a contar apenas consigo mesmo.<br /><br />
                  É, portanto, capaz de se assumir com autonomia. Pode utilizar nesta vida presente as forças adquiridas outrora, à custa de um duríssimo esforço. <br />`,

                  `Ninguém consegue dominá-lo! Em permanente revolta contra tudo o que lhe parece ultrapassado, salta alegremente por cima das barreiras e convenções. <br />
                  Traz de vidas passadas um cérebro consumido pelo fogo, difícil de ser domesticado numa parceria ou num casamento.<br /><br />
                  Original e muito corajoso, o seu carma é desbravar o desconhecido, ousar aventurar-se nos lugares onde ninguém ainda pôs os pés com pioneirismo, arrastando os menos corajosos atrás dele.<br /><br />
                  Esse Kamikaze deve evitar a tentação da violência. Mas às vezes faz-se o campeão generoso das causas perdidas e dos combates de retaguarda.<br /><br />
                  Antes de se inflamar por uma causa nobre, é bom que se pergunte se esta é realmente justa. <br />`,

                  `Indica pessoas que partilhavam com toda a sua geração uma certa ideologia da guerra justa e necessária. Nessa geração, havia muito poucos antimilitaristas ou contestadores de consciência: <br /><br />
                  Netuno (os ideais) associado a Áries (a guerra) conduzia os homens de então a uma ideologia guerreira.<br /><br />
                  Mas aqueles que tinham Netuno retrógrado viveram com um carma de desilusões muito doloroso: assistir ao desmoronamento dos valores aos quais haviam dedicado sua vida.<br /><br />
                  A fé e a espiritualidade podem tê-los ajudado a tomar certa distância com relação às ideologias militaristas. Esses nativos eram também artistas. <br />`,

                  `A posição parece indicar uma violência inconsciente mal canalizada. O nativo, ao mesmo tempo em que tem uma sede intensa de justiça, tem reações primitivas e além da justa medida. <br /><br />
                  É assim que a personagem de Villiers de Isle – Adam exala essa surda violência que os conduz ao assassinato; é assim também que os nazistas reivindicam a influência de Nietzsche.<br /><br />
                  Em quem encontraram uma ideologia do super-homem, uma apologia da virilidade, do \"machismo"\, inteiramente na linha de Plutão retrógrado em Áries, que marcou esses dois autores. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. O Dom de cura com as mãos. <br />
                  A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Você costuma, algumas vezes, sentir que não tem o direito de viver, e a autoafirmação e a iniciativa podem vir acompanhadas do medo de não existir.<br /><br />
                  Parece que você só se sente vivo quando refletido em alguém. Você só tem motivação para defender alguma causa quando o benefício é dos outros, como se tivesse capacidade de luta, mas pouca vontade própria.<br /><br />
                  Com medo de ser impelido a entrar num ciclo repetitivo de tentativas inúteis e autodestrutivas, e para compensar a dor, você pode se limitar a fazer demonstrações de sua força e espírito de luta, sem entrar para valer na luta.<br /><br />
                  Você é propenso a agir de modo precipitado, descarregando de uma vez sua tensão emocional e transformando-a em ação.<br /><br />
                  Você pode ser muito cruel consigo próprio em consequência de um senso de autossuficiência exagerado, por achar que deve caminhar sozinho, sem pedir ajuda.<br /><br />
                  Internamente, pode surgir um sentimento de desespero e desejo de morrer, além de um temor profundo de fazer algo que possa exprimir o que realmente deseja.<br /><br />
                  Suas expressões espontâneas de paixão, de ser, ou vontade podem ter sido esmagadas na infância de uma forma sutil ou até declarada.<br /><br />
                  Métodos repressivos de educação como alimentação em hora certa, privação de contato físico, treinamento sistemático prematuro das necessidades fisiológicas, podem ter sido seus primeiros sofrimentos.<br /><br />
                  Se a interferência em seus ritmos naturais de vida e a sua negação foram intensas, provocarão sentimentos de que você não tem direito ao querer ou desejar, e você acaba não se esforçando para satisfazer seus desejos e acha que é inaceitável como é.<br /><br />
                  É claro que essa impotência diante da vida acarreta uma raiva profunda e quase sempre despropositada. Na vida adulta pode ter medo de externar seus desejos e eles serem sistematicamente destruídos.<br /><br />
                  O ambiente de sua infância pode ter sido hostil e repleto de agressividade encoberta ou declarada, produzindo sentimentos de timidez e falta de autoestima e de direito próprio.<br /><br />
                  Viver, então, passa a equivaler a aprender como agradar e aplacar terceiros, viver tentando preencher as falhas de outras pessoas, ficando anônimo.<br /><br />
                  Por outro lado, você pode ser o tipo que compensou esse início de vida, sendo agora um pioneiro, uma pessoa cheia de força de vontade, impulso, energia e entusiasmo.<br /><br />
                  Mas é importante compreender que essa é uma máscara que pode cair, e quando isso acontece você pode entrar num estado lastimável de sofrimento e insegurança, chegando a ter desejo de morrer.<br /><br />
                  A vontade de morrer pode ser causada por: resposta à raiva, à frustração ou à falta de controle diante de algum problema; pode representar o desejo de recuperar o poder ou uma reação ao sentimento de incapacidade de tomar decisões próprias.<br /><br />
                  Pode haver um sentimento de que se morrer ninguém notará sua falta, nada mais vai restar de você. Ás vezes, iniciar qualquer coisa é tão difícil que você entra em colapso, desiste, na soleira daquilo que lhe parece ser uma nova e emocionante fase de sua vida.<br /><br />
                  Isso pode ser causado por ter tido uma experiência traumatizante no nascimento físico, por isso, qualquer novo inicio de vida pode ser encarado com confusão, medo e resistência.<br /><br />
                  Você pode empenhar-se em encontrar algo que possa fazer e que lhe traga o senso de identidade de que você precisa e também pode impor-se a tarefas quase impossíveis para provar a si mesmo que existe e tem um lugar no mundo.<br /><br />
                  Para algumas pessoas essa luta é totalmente válida e dá resultado, para outras será inútil tentar.<br /><br />
                  Você pode projetar no seu corpo seu sentimento de vergonha e constrangimento por existir, achando certos detalhes de seu corpo deformados ou feios, e as outras pessoas nem percebem, ou nem se importam com o que para você é tão importante.<br /><br />
                  É necessário rever essa programação interna, pois agora você é um adulto, as circunstâncias são outras e exigem reações diferentes daquelas aprendidas na infância. Você tem capacidade de ser um curador ou um terapeuta e tratar pessoas que viveram uma infância difícil.<br /><br />
                  Você pode desenvolver a capacidade de instruir outras pessoas e dar-lhes poderes ao perceber a sua própria impotência diante do Universo. Você passa a imagem de ser uma pessoa solitária, mesmo quando casado.<br /><br />
                  Você busca um senso de identidade, mas talvez só descubra que, quando desistiu dessa busca e passou a aceitar sua insignificância, e que conquistou uma tremenda vitalidade, bem como a sensação de ser compreendido.<br /><br />
                  Quase sempre você tem facilidade de agir intuitivamente no momento oportuno e agarrar a ocasião que se apresenta. Você tem a capacidade de aliar a compaixão à ação adequada, bem como de ser altamente inovador e tomar iniciativas, sobretudo quando o bem-estar de outros está em jogo.<br /><br />
                  Você adquire força na luta, mas deve aprender a ser um nobre rival diante daqueles com os quais compete. Se for capaz de superar a sua agressividade passiva, sua tendência a agir dissimuladamente, sentirá a vida fluir em suas veias.<br /><br />
                  Embora as dúvidas que nutre quanto à sua própria existência sejam a sua grande ferida, você provavelmente é muito atraente como pessoa, de modo que não precisa ficar surpreso se os outros se sentirem fortemente atraídos por você. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida. <br /><br />
                  É importante cultivar estabilidade vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno nesse setor ou signo mostra uma necessidade de ser valorizada e procurará escolher um parceiro ou parceiros/as que lhe permita isto.<br /><br />
                  Aliás, a procura por um parceiro ideal é uma das suas principais preocupações. Para um homem a busca de uma parceira ativa, marciana.<br /><br />
                  Sua evolução passa pelo esforço de construir uma relação durável e sólida. Se o casamento ou as parcerias não vão bem, impacto sobre a saúde da pessoa.<br /><br />
                  Em alguns casos, vemos uma pessoa que é capaz de \"se casar consigo mesma\".<br /><br />
                  Tendência a tomar decisões a respeito da parceria, que são muito impulsivas, e que podem ser boas ou ruins para a própria parceria. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução: </strong>`,

                  `Um ariano reativo, que reage por mal-estar. A insegurança o faz afirmar-se. A energia de Áries se manifesta de um modo compulsivo, condicionada pelo instinto e pelos desejos, que dominam a personalidade.<br /><br />`,

                  `<strong> 2º nível de evolução: </strong> `,

                  `É a fase da aprendizagem através do conflito. Passa a avaliar a qualidade de seus desejos pelas consequências das suas ações.<br /><br /> O ariano aprende a ser mais reflexivo conscientemente direcionado a um propósito altruísta, fruto da inteligência e da vontade.<br /><br />`,

                  `<strong> 3º nível de evolução: </strong> `,

                  `A energia de áries já se encontra orientada para objetivos superiores, humanitários e transpessoais. <br /><br /> São seguros e responsáveis, cientes da força que os liga ao Plano Cósmico e ao pensamento universal, determinados a iniciar movimentos capazes de iluminar o mundo.<br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a cooperar, a formar parcerias sem perder a sua identidade. </strong>`

            ]
      },
      {
            title: `touro</strong>`,
            text: [
                  `Touro é estabilidade, conforto e bem estar material. É o primeiro signo do elemento Terra.<br /><br />
                  Representa a vontade de firmar os desejos, de dar continuidade, persistir, realizar, concretizar. Inspira a necessidade de segurança, pois é o signo da preservação.<br /><br />
                  É sensual, perseverante, doce e trabalhador. Vênus é o planeta regente de Touro, que por isso é ligado ao prazer, à beleza, ao bom gosto, à alegria, ao prazer de encantar e seduzir.<br /><br />
                  Por isso, o taurino traz esse sentimento de valorização e amor próprio. Considerado o signo da sensualidade, também representa o gosto pelo conforto e a capacidade de saber aproveitar a vida.<br /><br />
                  O Sol em Touro estimula apetites poderosos em todos os domínios em geral, mais particularmente no plano material.<br /><br />
                  O aumento dos ganhos ou do capital é feito geralmente através do contato com uma clientela ou um público. Inspira grande vivacidade de espírito e um carácter simpático.<br /><br />
                  A sabedoria de Touro está em utilizar seus dons e os recursos da terra para manifestar abundância.<br /><br />
                  Na saúde, deve cuidar do pescoço, da garganta, da boca, das vértebras cervicais, das orelhas e da tiroide.<br /><br />
                  Na medida em que for envelhecendo precisa cuidar mais da sua alimentação, que geralmente é rica demais, rica em açúcar.<br /><br />
                  Isso ocasiona uma tendência muito grande para a corpulência e também para a hipoglicemia, que se repercute na tiroide, o que pode provocar uma queda importante da energia e favorecer acessos de mau humor.<br /><br />
                  O sono, o descanso e a calma são os melhores reconstituintes para o Taurino. O lado negativo do taurino é o ciúme e a lentidão.<br /><br />
                  Um taurino não suporta mudanças, por isso, se conseguirem uma vida estável, podem se acostumar e ficar na mesmice para sempre. O cuidado deve ser, portanto, com a teimosia e o comodismo.<br /><br />
                  É preciso cuidado também com o sentimento exagerado de posse, o ciúme, à avidez e ao materialismo exacerbado.<br /><br />
                  Deve aprender a superar o fantasma da perda para evitar danos em sua vida profissional e afetiva.<br /><br />
                  O equilíbrio está no signo oposto, Escorpião, que traz lições de desapego, transformação e a compreensão de que um dia tudo acaba.<br /><br />
                  Ciente disso você pode preservar o que é seu sem se tonar escravo de seus próprios temores.<br /><br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Touro indica necessidade de segurança financeira e material para conseguir bem-estar emocional.<br /><br />
                  A Lua em Touro é fértil e muito forte, porque está no signo da sua exaltação. As emoções tendem a ser firmes e tranquilas.<br /><br />
                  Esta posição atrai riqueza e as boas coisas da vida. Os nativos apreciam a boa comida e buscam conforto material.<br /><br />
                  Uma situação doméstica estável é importante para a sua segurança emocional. Quem tem a Lua em Touro conta com bom senso na administração de assuntos financeiros e domésticos.<br /><br />
                  Esta posição exige o estímulo de outras pessoas para iniciar novos projetos, que, no entanto, uma vez iniciados, são levados até o fim com muita perseverança e persistência.<br /><br />
                  Geralmente não inicia novos empreendimentos até que os anteriores estejam totalmente completos.<br /><br />
                  Em termos de afetividade, é capaz de associar paciência e mansidão e com determinação e firmeza. Prefere preservar os relacionamentos ao invés de se meter em aventuras arriscadas.<br /><br />
                  Tem senso estético apurado, costuma ser doce e sedutor, mas também duro e teimoso quando não se sente à vontade.<br /><br />
                  É resistente às mudanças da vida e se apega facilmente. Precisa ter cuidado com a possessividade e o ciúme.<br /><br />
                  Pode haver relutância em modificar atitudes emocionais estabelecidas, com tendência à preguiça e um apego excessivo aos confortos materiais.<br /><br />
                  Acomodar-se emocionalmente é um risco que deve ser equilibrado com o aprendizado do desapego, aceitando as transformações da vida como algo natural e renovador. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a \"máscara\" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  A primeira impressão do ascendente em Touro é vivenciada através do elemento Terra: segurança e continuidade na concretização de objetivos.<br /><br />
                  Deve encarar a vida com calma, ponderação e segurança. Estruturar, planejar, trabalhar de modo sistemático para alcançar suas metas.<br /><br />
                  Há que avançar sem pressa, experimentar bem o terreno e medir cada passo. O avanço pode ser mais lento, porém é mais seguro: uma vez conquistado o terreno, raramente se dá um recuo.<br /><br />
                  Pode contar com uma habilidade natural em lidar com os recursos materiais, tendo em vista estabilidade e a abundância material. A abordagem é prática, física e sensorial.<br /><br />
                  Pode haver uma sensualidade forte, simples e desinibida, com tendência à gula e, em geral, uma grande capacidade de apreciar os confortos e prazeres da vida.<br /><br />
                  O perigo consiste em ficar preguiçoso indolente e ou resistente às mudanças necessárias da vida.<br /><br />
                  Ciúmes e possessividade também devem ser trabalhados, pois podem ser a fonte de muitos problemas.<br /><br />
                  <strong> É preciso olhar para dentro de si mesmo, enfrentar, examinar e desenvolver maior domínio sobre as emoções ao se relacionar. Aprender quando segurar e quando soltar.<br /><br />
                  Limpar e eliminar o que tem guardado dentro de si, modificando assim velhos padrões de comportamento que não servem mais.</strong>
                  O senso estético, que está quase sempre presente, pode ser também simples e um pouco rústico, com preferência ao que é natural, duradouro e confortável.<br /><br />
                  O tipo físico pode ser de constituição sólida, terrestre, pesada, uma aparência saudável, o pescoço grosso típico do taurino, com tendência a aumentar de peso.<br /><br />
                  Ou pode apresentar uma aparência mais delicada, elegante e fina, enfatizando o lado estético e feminino de Vênus, regente do signo.<br /><br />
                  Com a maturidade, a necessidade de segurança material e financeira pode ser gradualmente substituída pela segurança emocional e pela estabilidade interior.<br /><br />
                  Assim o ascendente em Touro descobre a sua faceta mais espiritualizada, capaz de vislumbrar beleza e transcendência nas formas mais concretas. <br />`,

                  `Mercúrio no signo de Touro indica o nativo cujo raciocínio e decisões são determinantes para tudo que possui uma aplicação prática e material.<br /><br />
                  Embora possam não ter brilho ou originalidade, no tocante ao bom senso prático são muito habilidosos.<br /><br />
                  Assim, possuem mentes perspicazes para negócios e uma tendência natural para a administração. São lentos para formar opiniões, mas, assim que o fazem, relutam em modificá-las.<br /><br />
                  Igualmente, não gostam de discussões e desarmonia. Lutam somente para proteger a sua segurança e seus interesses financeiros.<br /><br />
                  A habilidade desses nativos para considerarem somente coisas de interesse prático proporciona grande poder de concentração, tanto que podem ignorar perturbações externas como se estas não existissem.<br /><br />
                  Pode haver obstinação intelectual, opiniões dogmáticas, materialismo e avareza. Eles não percebem as coisas com as quais não desejam ser incomodados.<br /><br />
                  No seu extremo, essa atitude os torna cegos para assuntos importantes, que deveriam perceber para seu próprio bem.<br /><br />
                  Isso explica muito da sua teimosia. Esta posição de Mercúrio também pode oferecer habilidade para as artes, a matemática e a ciência, devido à sua boa percepção das formas e estruturas. <br />`,

                  `Quem possui Vênus neste signo alia o prazer e o conforto ao amor e aos sentimentos. Procura um amor seguro, de longo prazo, que seja aliado a um plano de vida comum.<br /><br />
                  O nativo é naturalmente fiel. Além da amabilidade e da sensualidade, expressa seu amor proporcionando conforto e segurança. Necessita de demonstrações constantes de fidelidade.<br /><br />
                  Gosta de realização e satisfação sensorial: uma boa comida, um bom perfume, o conforto de casa. Um bom vinho, uma boa massagem, tratamentos estéticos, o namoro, as artes e a vida cultural.<br /><br />
                  Tudo o que envolve sensibilidade e prazer, tudo que estimule os sentidos merece investimento especial. Essa necessidade de segurança pode torná-lo excessivamente ciumento e possessivo.<br /><br />
                  Por essa razão, o nativo costuma controlar cada passo do ser amado. Geralmente é belo, atraente, gosta de se vestir bem, com conforto e luxo.<br /><br />
                  O amor é caloroso e sensual. Aprecia o luxo e pode gastar muito com seus cuidados pessoais, podendo até exceder no luxo para ostentar suas posses. <br />`,

                  `MMarte neste signo indica grande capacidade de trabalho e espírito de iniciativa relacionada com gestão de bens e geração de lucros.<br /><br />
                  Indica também capacidade de decisão, firmeza de caráter e teimosia. O nativo age com determinação em busca de conforto e prazeres físicos para obter satisfação imediata.<br /><br />
                  Suas ações e gestos serão lentos, mas determinados. Pode se expressar de forma plástica mesmo em atividades artísticas.<br /><br />
                  Tem boa libido e boa expressão de sua sexualidade, que será mesclada com a sensualidade. Boa fertilidade.<br /><br />
                  É preciso cuidado com a força bruta, com gastos impulsivos e excessivos em busca de prazer imediato.<br /><br />
                  Pode cometer ações de violência para defender seus bens e agir com excessos por questões de dinheiro. Com a teimosia excessiva e o ciúme. <br />`,

                  `Neste signo Júpiter produz lucros e ganhos em ocupações que, de algum modo, estão relacionadas com a igreja, a religião, a filosofia, o saber e as viagens.<br /><br />
                  Também a agricultura, os alimentos, os cavalos ou qualquer atividade relacionada com as terras. O nativo pode contar com uma grande intuição para os negócios e pode ser afortunado em questões monetárias.<br /><br />
                  Com frequência recebe legados ou doações. Mas quando se excede no amor pelo dinheiro, este pode ser a sua perdição. Gosta dos prazeres da boa mesa e do conforto.<br /><br />
                  Um dos seus passatempos preferidos é a cozinha. Tem tendência para a obesidade. É conservador, pouco dado a mudanças.<br /><br />
                  É paciente e firme nos seus propósitos, digno de confiança. Ama a justiça, tem bom relacionamento e disposição tranquila. <br />`,

                  `Saturno no signo de Touro indica nativos que necessitam de disciplina e trabalho árduo se desejarem adquirir bens materiais.<br /><br />
                  Sentem forte necessidade de segurança financeira e emocional, não conseguem ficar em paz se os assuntos práticos não estiverem em ordem.<br /><br />
                  No seu melhor, serão as características como a paciência constante, a devoção inabalável aos princípios e a capacidade de administração de negócios.<br /><br />
                  Quando estão com cerca de 29 anos de idade, os nativos procuram posições estáveis na carreira, que lhes assegure segurança financeira e doméstica, exigidas para o seu bem estar.<br /><br />
                  Provavelmente são confiáveis e persistentes em sua profissão. Com frequência, seguem profissões relacionadas a transações bancárias, investimentos, seguros ou administração de empresas.<br /><br />
                  Como tendem a ser moderados, geralmente compram objetos de valor duradouro, considerando principalmente as suas qualidades práticas. Guardam dinheiro para emergências futuras e segurança na velhice.<br /><br />
                  Precisam desenvolver um senso de valor equilibrado dos recursos materiais. No seu pior, é possível haver obstinação e materialismo excessivo.<br /><br />
                  Em casos extremos, o resultado é a avareza ou, inversamente, uma sobrecarga de bens materiais, que não permite que as coisas fluam para que as novas coisas possam chegar quando necessário. <br />`,

                  `Urano no signo de Touro indica uma geração de nativos com novas ideias sobre o uso do dinheiro e dos recursos materiais.<br /><br />
                  Essas pessoas provavelmente buscam reformas nos negócios e na economia, áreas nas quais desejam aplicar princípios humanitários.<br /><br />
                  O nativo deseja ser prático, de maneira única e original. Podem ter enorme determinação e firmeza de propósitos. Mas, no seu pior, pode haver teimosia obstinada.<br /><br />
                  Urano está em queda no signo de Touro. Portanto, o desejo de liberdade e a expressão de ideias intuitivas são limitados por uma ligação a objetos ou bens materiais.<br /><br />
                  Ou por dificuldades impostas pela tentativa de modificar as condições materiais muito depressa. A ligação ao lar e à família também pode refrear a expressão individual.<br /><br />
                  Os impulsos espirituais também podem ser frustrados pela submissão a instituições conservadoras nos negócios e no governo, que refletem o materialismo da ordem social dominante.<br /><br />
                  Urano em Touro pode proporcionar talentos artísticos e musicais incomuns, se for bem cultivado.<br /><br />
                  Os nativos com frequência se interessam por modernas técnicas eletrônicas em administração, contabilidade e outros negócios. <br />`,

                  `Esta geração procurava aplicações práticas para os seus sonhos visionários. Mostra um período histórico de muito idealismo no que respeita ao uso do dinheiro e suas fontes.<br /><br />
                  No mapa de uma pessoa indica interesse e capacidade para as artes em geral, gosto estético e um inato sentido comercial. É uma boa posição para a especulação e para os negócios.<br /><br />
                  Mas os maus aspectos podem induzir a enganos ou fraudes, ou ao descuido no uso do dinheiro. <br />`,

                  `Com Plutão em Touro, tudo o que está oculto por debaixo da terra tende a sair para o exterior.<br /><br />
                  Tanto o que gera riqueza (agricultura, petróleo, minas e escavações), como o que produz destruição (terramotos, erupções súbitas).<br /><br />
                  É um período de realizações práticas, de utilitarismo e cientificismo materialista. O esforço e a capacidade criativa são canalizados para o concreto, o plano do tangível.<br /><br />
                  Predomina a tendência para garantir o bem-estar e a segurança, para acumular poder pessoal. É a geração dos poderosos industriais e financeiros.<br /><br />
                  Marcou um período de grande expansão econômica, sobretudo na indústria, com a construção de grandes fábricas e a produção de maquinarias. Consolidou-se a reforma agrária e a exploração comercial em grande escala. <br />`,

                  `Quem tem o Nodo Sul (Cauda do Dragão) em Touro traz identificação excessiva com o mundo material. É inflexível, acomodado, apegado às suas posses e à sua rotina. Tem dificuldade para promover mudanças. É lento, materialista, prático, com uma visão muito básica e limitada da vida.<br /><br />
                  Pode até ser cético, por causa de sua pouca abertura a tudo o que não é palpável e comprovado cientificamente. Preso aos seus prazeres e desejos, curte mais o corpo do que o espírito.<br /><br />
                  Depende de suas posses para sua segurança e felicidade. Procura por elevado status social e económicos. Pode ser ciumento, possessivo e pode até mesmo ter abusado fisicamente do outro em vidas passadas.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) no signo de Escorpião, deve aprender a valorizar cada vez mais o sentir, as emoções e a intuição. Quanto mais de apegar às coisas, a vida pode trazer lições de desapego através de perdas.<br /><br />
                  O aprendizado é ouvir a sua voz interior, render-se a uma Ordem Superior. Deixar ir os apegos materiais e trabalhar mais a sensibilidade. Enxergar além da superfície, interagir com os outros num nível mais profundo.<br /><br />
                  Permitir-se sentir todas as emoções sem fugir delas.  Despir-se das tradições do passado, compartilhar seus bens, questionar o que já não faz sentido.<br /><br />
                  Para tanto, deve valorizar todos os estados de espírito como oportunidades de transformação. Deve reconhecer suas paixões, aprender administrar os assuntos financeiros sem apego.<br /><br />
                  Sair dos limites quadrados e práticos para aventurar-se no mundo do oculto, pesquisar sobre a vida após a morte e desenvolver a fé. <br />`,

                  `As características ardentes da primavera também são encontradas aqui, mas o indivíduo tem um tipo de personalidade firme, autoconfiante e até mesmo obstinada, adorando, conscientemente ou não, lidar com o poder oculto, social ou coletivo, e tendo que ver resultados materiais definidos para poder ser feliz.<br /><br />
                  O desejo fundamental é trazer qualquer coisa, que tenha existido no passado, para um novo nível de evolução em resposta as necessidades da época. É tornar-se um agente de forças de evolução ou, poderíamos dizer, a \"mãe\" do amanhã.<br /><br />
                  Exemplos: Martinho Lutero, Goethe, Thomas Paine, Benjamin Franklin, Príncipe Bismarck, Leon Trotsky. <br />`,

                  `Quíron neste signo indica tendência de se sentir inseguro e vulnerável, porque tem dificuldade de se atribuir o seu devido valor.<br /><br />
                  Os efeitos da repressão dos instintos físicos na infância só serão superados quando aprender a aceitar sua natureza sensual e a confiar na sabedoria instintiva do próprio corpo.<br /><br />
                  Pode sofrer ao reconhecer sua falta de criatividade, em algumas áreas, mas tem o dom de incentivar a concretização dos dotes criativos dos outros, sem sentir inveja.<br /><br />
                  Entende naturalmente a escala de valores e as coisas do mundo. Possui sensualidade natural. Pode ter sido ferido por supostamente não ter algo, como beleza ou outro atributo.<br /><br />
                  Precisa, por isso, aprender a curar a ferida em seu senso de autovalor. Pode ter problemas com o seu corpo e sua autoestima. E também com a alimentação.<br /><br />
                  Procura obter sua segurança através dos bens materiais. Mas, bem lá no fundo, você sabe que isso não o ajuda, pois por mais que você se agarre aos bens e às pessoas, não consegue a sensação perdida de solidez.<br /><br />
                  Você pode perceber seu próprio corpo como inconsistente, defeituoso ou ferido, pode ter alguma lesão real ou ter sofrido algum trauma físico.<br /><br />
                  Você pode temer seu próprio corpo e controlá-lo rigidamente, pois através dele percebe poderosos instintos sexuais e territoriais inaceitáveis. Provavelmente você possui muito magnetismo sexual.<br /><br />
                  É preciso ter a capacidade de estabelecer uma relação saudável com sua natureza fortemente sensual e instintiva, do contrário poderá ser dominado por esses sentimentos ou terá que gastar muita energia tentando reprimi-los e seu corpo pode desenvolver sintomas dessa repressão.<br /><br />
                  Você conseguirá superar estes problemas quando aceitar e confiar na sabedoria instintiva de seu corpo. Deve aprender a ouvi-lo, comendo o que o corpo pede, dormindo quando tem necessidade, fazendo massagem e praticando exercícios agradáveis, sem submeter-se a esquemas rígidos, bem como tendo o prazer de se produzir visualmente.<br /><br />
                  Você pode se recusar a ficar preso às próprias posses, relutar em possuir bens. Neste caso, provavelmente você adotou uma posição de revolta contra valores impostos durante sua infância.<br /><br />
                  Seus pais podem ter dado mais importância aos bens materiais que aos seus sentimentos. Verifique se agora você não boicota seus próprios esforços quando tenta construir alguma segurança material.<br /><br />
                  Você pode ter que administrar grandes riquezas e se sente incapaz de aceitar essa responsabilidade. Por outro lado, você pode ter um verdadeiro desejo de partilhar seus bens com outros.<br /><br />
                  Do lado negativo, você pode controlar obsessivamente suas necessidades instintivas e os impulsos sexuais, ou pode tornar-se um controlador dos outros. Pode indicar pobreza material, que fere e humilha, e isso faz com que você dê importância exagerada aos bens materiais.<br /><br />
                  Do lado positivo, pode tornar-se um excelente administrador dos recursos alheios, pode ganhar fortuna, pode ser dotado de um fantástico senso financeiro aliado talvez, a certa dificuldade em administrar suas próprias finanças.<br /><br />
                  Você pode ser incapaz de interpretar as coisas simbolicamente e tomar tudo ao pé-da-letra. Pode achar difícil ter que tomar uma decisão ou fazer opções.<br /><br />
                  Se é este o seu caso, se você se sente bloqueado por um problema a resolver, deixe-o de lado um pouco, dê tempo para seu cérebro resolver calmamente, então, vá fazer um trabalho de rotina como regar o jardim.<br /><br />
                  É difícil para você aceitar a tabela de valores que seus pais ou a sociedade lhe ensinaram, e você precisa se esforçar para descobrir o que realmente é importante para você mesmo.<br /><br />
                  Você pode se ver obrigado a aceitar privações financeiras para defender seus próprios valores, e se isso é assustador, também é certo que lhe dará a sensação de força interior.<br /><br />
                  Você pode achar que não é criativo e até invejar as pessoas que o são, mas você subestima sua criatividade. Talvez você não consiga expressar essa criatividade por si mesmo, mas ao participar de um processo criativo de outras pessoas, a sua criatividade irá fluir.<br /><br />
                  Tenha sempre em mente que você tem um grande potencial de ajudar pessoas criativas, orientando-as e incentivando-as em seu trabalho.<br /><br />
                  Procure desenvolver atividades profissionais que levam conforto físico ou emocional às pessoas, como construir ou projetar moradias, parques ou jardins, casas de repouso ou locais de descanso e lazer junto à natureza, ou trabalhar em atividades com objetivo de proteger as pessoas e melhorar a autoestima, dando à elas um valor não só pessoal como social. Você pode ser um bom professor, instrutor, zelador, construtor e atividades afins. <br />`,

                  `O parceiro ideal é aquele que tenha interesse na estabilidade financeira, agricultura ou plantações, seja estável e confiável, que aprecie o conforto.<br /><br />
                  Podem ser pessoas financeiramente estáveis, que visam a construção de um patrimônio. Casamento entre pessoas leais e carinhosas, adiposas e bem humoradas.<br /><br />
                  Mas também podem ser pessoas que visam apenas interesses financeiros, avarentas, apegadas.<br /><br />
                  Com Juno neste signo, uma vez que o nativo se associa ou se une a alguém, não o faz pela metade ou por brincadeira. Pode encarar suas parcerias e seu casamento como algo que traz a oportunidade de construir algo.<br /><br />
                  Mas também indica tendência a ser muito possessivo. As tendências possessivas vão ser mais fortes caso não exista nada de concreto que a pessoa, que tem Juno aí, possa construir com seu parceiro.<br /><br />
                  Juno indica melhora de situação social e financeira que advém de uma união. São pessoas que investem no luxo pessoal segundo suas disponibilidades financeiras. <br />`,

                  `Em suas vidas passadas, não importa qual fosse a sua profissão, o nativo só pensava no dinheiro. Tinha o espírito lento, calculador, obcecado por uma ideia fixa: o lucro!<br /><br />
                  O seu medo de passar necessidade, absolutamente patológico, está sujeito a se manifestar de novo nesta vida. Temia mudar de ideia ou de opinião.<br /><br />
                  Muito materialista, só contavam, a seus olhos, o dinheiro, os bens possuídos, a boa mesa e o sexo. Qualquer motivação desinteressada lhe era completamente estranha.<br /><br />
                  No entanto, o nativo por vezes apresentava extraordinários dons artísticos, bom gosto e o sentido da qualidade de vida.<br /><br />
                  Agora, para quitar essa dívida cármica, deve abrir seu espírito, buscar ensinamentos edificantes e cultivar valores mais elevados. <br />`,

                  `Esta situação planetária evoca uma ligação amorosa que não pudera desabrochar numa vida passada.<br /><br />
                  O nativo pode reencontrar atualmente esse amor. Amar alguém que já conhece há várias vidas lhe dará um extraordinário sentimento de segurança.<br /><br />
                  Entretanto, o nativo deve evitar ser obsessivamente possessivo, o que o impedira outrora de ser feliz. Deve aprender a não exigir dos seres mais do que podem dar. <br />`,

                  `O nativo nem sempre consegue exteriorizar sua agressividade à primeira vista. Morde o freio, cultiva cóleras reprimidas e se vinga ao longo prazo.<br /><br />
                  Homem de tradição e de hábitos, busca a segurança e tem medo de atividades novas.<br /><br />
                  Nesta vida deve liberar sua energia reprimida, aplicando-a em muito movimento, aos esportes na natureza e às artes em geral. <br />`,

                  `A palavra-chave de Júpiter é \"expansão\". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  O nativo muito rico em vidas passadas. Disso ainda lhe fica, inconscientemente, uma grande vaidade. Esse estado de coisas se reproduz nesta vida.<br /><br />
                  Vem daí uma permanente autossuficiência, que o impede de se abrir às ideias dos outros. Repete com frequência: \"Façam como eu.\"
                  Seus recursos atuais podem vir de atividades artísticas ou artesanais, muitas vezes antigas e tradicionais.<br /><br />
                  A sua lição cármica desta posição jupiteriana é a de cultivar a simplicidade, o desapego e a honestidade. <br />`,

                  `Em vidas passadas o nativo se tornou muito apegado aos lugares e às pessoas que conheceu. Adquiriu hábitos reincidentes, só se sente em segurança dentro do que já é ou já é conhecido.<br /><br />
                  Na verdade, esse comportamento o impele a complicar a vida, talvez até trabalhar mais do que é necessário. O nativo pode até se enervar achando que os outros têm a vida mais fácil.<br /><br />
                  Agora é preciso coragem para enfrentar as mudanças, cultivar desapego e sair de sua zona de conforto.<br /><br />
                  Acabará por compreender que pode avançar, sem se encarregar de tantos compromissos e pesadas obrigações.<br /><br />
                  Nesta vida pode também promover uma revisão de sua filosofia e de seus valores. Tudo pode fluir melhor se consentir em desligar-se interiormente de tudo o que possui.<br /><br />
                  Até o dia em que aprende a encontrar a segurança dentro de si mesmo, em seu coração e em valores espirituais mais elevados. <br />`,

                  `Defende bravamente o seu ganho, mas quando o conquista, serra o galho no qual está sentado. A sua segurança é precária, mas estará mesmo preocupado em garanti-la?<br /><br />
                  O nativo é contraditório: ama ao mesmo tempo a permanência e a novidade. Fica apegado a certas tradições, ao mesmo tempo em que se demonstra extremamente vanguardista.<br /><br />
                  Pode-se dizer que tem bastante dificuldade em se coordenar e ao mesmo tempo gosta do conforto e da aventura.<br /><br />
                  Do ponto de vista cármico, vive um período de transição no qual tenta se libertar de um comportamento materialista que o aprisionou mentalmente durante várias vidas passadas.<br /><br />
                  Seria preciso inventar para o nativo uma fórmula especial de casamento, que possa conciliar a liberdade total e a segurança afetiva. Precisa sobre tudo de um trabalho onde seja seu próprio patrão. <br />`,

                  `Os nativos contavam com intuição financeira para ganhar dinheiro. Devem ter tirado disso uma fortuna (signo de Touro).<br /><br />
                  Amargas desilusões foram à consequência disso. Os enganos e as perdas financeiras são provas cármicas. Ninguém, atualmente, nasce com Netuno em Touro.<br /><br />
                  Mas esta posição, quando o planeta está retrógrado, indica uma série de decepções financeiras. O objetivo é esclarecer o nativo sobre a verdadeira significação do dinheiro. <br />`,

                  `O Touro Plutoniano é o Minotauro: sempre tentado a transbordar seus demónios interiores.<br /><br />
                  É dotado de uma grande potência sexual. A sede de viver que faz dele uma espécie de camicase obstinado: é um extremista.<br /><br />
                  É o caso de Picasso - aliás, o Touro mitológico, meio homem, meio animal, retoma frequentemente nos seus desenhos!<br /><br />
                  Sob esta configuração encontramos ainda Henri de Monfreid, ilustre exemplo de aventureiro que, na ânsia de ir mais longe, corta todas as possibilidades de retomo.<br /><br />
                  Bemanos, o homem que escandaliza ao denunciar injustiças gritantes - o que é muito Plutoniano. Enfim, Winston Churchill, que simbolizou para todo um povo a resistência obstinada do touro: \"Nós não cederemos jamais\"! <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Tem uma certa tendência a se sentir insegura e vulnerável, porque tem dificuldade de se atribuir o seu devido valor. Os efeitos da repressão dos instintos físicos na infância só serão superados quando aprender a aceitar sua natureza sensual e a confiar na sabedoria instintiva do próprio corpo.<br /><br />
                  Pode sofrer ao reconhecer sua falta de criatividade, em algumas áreas, mas tem o dom de incentivar a concretização dos dotes criativos dos outros, sem sentir inveja.<br /><br />
                  Entende naturalmente a escala de valores e as coisas do mundo. Possui sensualidade natural. Pode ter sido ferido por supostamente não ter algo, como beleza ou outro atributo.<br /><br />
                  Precisa, por isso, aprender a curar a ferida em seu senso de autovalor. Pode ter problemas com o seu corpo e sua autoestima. E também com a alimentação.<br /><br />
                  Você tem autoestima baixa e é incapaz de atribuir-se o seu devido valor, por isso se sente inseguro e frágil, e tenta obter sua segurança através dos bens materiais.<br /><br />
                  Mas, bem lá no fundo você sabe que isso não o ajuda, pois por mais que você se agarre aos bens e às pessoas, não consegue a sensação perdida de solidez.<br /><br />
                  Você pode perceber seu próprio corpo como inconsistente, defeituoso ou ferido, você pode ter alguma lesão real ou ter sofrido algum trauma físico.<br /><br />
                  Você pode temer seu próprio corpo e controlá-lo rigidamente, pois através dele percebe poderosos instintos sexuais e territoriais inaceitáveis. Provavelmente você possui muito magnetismo sexual.<br /><br />
                  É preciso ter a capacidade de estabelecer uma relação saudável com sua própria natureza fortemente sensual e instintiva, do contrário poderá ser dominado por esses sentimentos ou terá que gastar muita energia tentando reprimi-los, e seu corpo vai desenvolver sintomas dessa repressão.<br /><br />
                  Você conseguirá superar estes problemas quando aceitar e confiar na sabedoria instintiva de seu corpo.<br /><br />
                  Deve aprender a ouvi-lo, comendo o que o corpo pede, dormindo quando tem necessidade, fazendo massagem e praticando exercícios agradáveis, sem submeter-se a esquemas rígidos, bem como tendo o prazer de se produzir visualmente.<br /><br />
                  Você pode se recusar a ficar preso às próprias posses, relutar em possuir bens. Neste caso, provavelmente você adotou uma posição de revolta contra valores impostos durante sua infância.<br /><br />
                  Seus pais podem ter dado mais importância aos bens materiais que aos seus sentimentos. Verifique se agora você não boicota seus próprios esforços quando tenta construir alguma segurança material.<br /><br />
                  Você pode ter que administrar grandes riquezas e se sente incapaz de aceitar essa responsabilidade. Por outro lado, você pode ter um verdadeiro desejo de partilhar seus bens com outros.<br /><br />
                  Do lado negativo, você pode controlar obsessivamente suas necessidades instintivas e os impulsos sexuais, ou pode tornar-se um controlador dos outros.<br /><br />
                  Pode indicar pobreza material, que fere e humilha, e isso faz com que você dê importância exagerada aos bens materiais.<br /><br />
                  Do lado positivo, pode tornar-se um excelente administrador dos recursos alheios, pode ganhar fortuna, pode ser dotado de um fantástico senso financeiro aliado talvez, a certa dificuldade em administrar suas próprias finanças.<br /><br />
                  Você pode ser incapaz de interpretar as coisas simbolicamente e tomar tudo ao pé-da-letra. Você pode achar difícil ter que tomar uma decisão ou fazer opções.<br /><br />
                  Se é este o seu caso, se você se sente bloqueado por um problema a resolver, deixe-o de lado um pouco, dê tempo para seu cérebro resolver calmamente, então, vá fazer um trabalho de rotina como regar o jardim.<br /><br />
                  É difícil para você aceitar a tabela de valores que seus pais ou a sociedade lhe ensinaram, e você precisa se esforçar para descobrir o que realmente é importante para você mesmo.<br /><br />
                  Você pode se ver obrigado a aceitar privações financeiras para defender seus próprios valores, e se isso é assustador, também é certo que lhe dará a sensação de força interior.<br /><br />
                  Você pode achar que não é criativo e até invejar as pessoas que o são, mas você subestima sua criatividade. Talvez você não consiga expressar essa criatividade por si mesmo, mas ao participar de um processo criativo de outras pessoas, a sua criatividade irá fluir.<br /><br />
                  Tenha sempre em mente que você tem um grande potencial de ajudar pessoas criativas, orientando-as e incentivando-as em seu trabalho.<br /><br />
                  Procure desenvolver atividades profissionais que levam conforto físico ou emocional às pessoas, como construir ou projetar moradias, parques ou jardins, casas de repouso ou locais de descanso e lazer junto à natureza, ou trabalhar em atividades com objetivo de proteger as pessoas e melhorar a autoestima, dando à elas um valor não só pessoal como social.<br /><br />
                  Você pode ser um bom professor, instrutor, zelador, construtor e outras atividades afins. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém. Juno nesse setor ou signo, uma vez que se associa ou se une a alguém não o faz pela metade ou por brincadeira.<br /><br />
                  Ela encarará suas parcerias e seu casamento como algo que lhe dará oportunidade de construir algo, mas remos alguém com tendências a ser muito possessiva (mapa feminino), como esposa (se estiver num mapa masculino).<br /><br />
                  As tendências possessivas vão ser mais fortes caso não exista nada de concreto que a pessoa, que tem Juno aí, possa construir com seu parceiro.<br /><br />
                  Melhora de situação social e financeira que advém de uma união. Uma parte do orçamento desta pessoa estará consagrada ao cuidado com sua estética, com festas presentes, etc...<br /><br />
                  São pessoas que investem no luxo pessoal segundo suas disponibilidades financeiras. Este é o tipo de esposa de um homem com Juno em Touro ou na segunda casa. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):`,

                  `<strong> 1º nível de evolução: </strong>`,

                  `Amar a obscuridade da Matéria significa levar o Espírito ao seu lado Oposto. O Amor é vivido pelo prazer de possuir e de delimitar territórios. A emoção é ligada ao instinto, interiorizada, sensorial e sensual. <br /><br />`,

                  `<strong> 2º nível de evolução: </strong>`,

                  `Aprende sobre como a segurança material pode ser experimentada. Valoriza suas qualidades, seus talentos e seus dons. <br /><br />
                  Cultiva o poder de se relacionar com a matéria e o amor. O que verdadeiramente considera seu é fruto de suas capacidades, conquistado pelo seu esforço. <br /><br />`,

                  `<strong> 3º nível de evolução: </strong>`,

                  `Aprende sobre o desapego em relação à matéria, o distanciamento emocional frente ao que possui. <br /><br />
                  Desenvolve a forma como o espírito lida com a matéria e uma escala de valores que situa a matéria e os bens materiais no lugar que lhes compete. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a cultivar o desapego, a atribuir valor ao mundo das emoções e ao invisível </strong>`
            ]
      },
      {
            title: `gêmeos</strong>`,
            text: [
                  `Quando o Sol ingressa no signo de Gêmeos, a natureza começa a mudar e a entrar em mutação.<br /><br />
                  No hemisfério norte, a primavera dá passagem para o verão, que chega em Câncer. No hemisfério sul, o outono vai recebendo o inverno. Por isso Gêmeos é um signo mutável.<br /><br />
                  Gêmeos é o primeiro signo do elemento Ar. É regido pelo planeta Mercúrio, o deus mensageiro com asinhas nos pés, do comércio, das estradas e do movimento.<br /><br />
                  Gêmeos representa a comunicação, a capacidade de transitar no universo dos relacionamentos e da linguagem. Sua natureza é mais do que dual, é plural.<br /><br />
                  Para o geminiano, viver é experimentar o dia e a noite, a luz e a sombra, a alegria e a dor. O Sol em Gêmeos inspira uma grande atividade mental e uma percepção intelectual muito viva.<br /><br />
                  O geminiano é malandro, versátil, bem humorado, brinca com as palavras e faz graça de tudo. É curioso e tem a mente aberta, adora uma novidade. Gosta do contato com as pessoas ou com o público.<br /><br />
                  Circula em todas as rodas. Gosta de conversar e muitas das vezes, acaba falando pelos cotovelos. O geminiano veio aprender a interagir, trocar, dialogar e negociar. A cultivar flexibilidade e malícia.<br /><br />
                  Em busca de respostas para os questionamentos da vida e a usar a comunicação como matéria-prima para saciar a sede de conhecimento.<br /><br />
                  Na saúde, as partes vulneráveis são: mãos, membros superiores, ombros, pulmões, brônquios e nervos, que tem o mau hábito de maltratar.<br /><br />
                  Com a idade, pode desenvolver reumatismos nos membros superiores, alergias e enxaquecas, que são o resultado de uma crise do fígado ou de uma assimilação difícil dos alimentos.<br /><br />
                  Com um regime de vida adequado, estes males desaparecem como por milagre.<br /><br />
                  Deve praticar esportes com muito movimento, que correspondem melhor à sua natureza. Praticar também exercícios respiratórios ao ar livre, o mais longe possível da poluição.<br /><br />
                  O geminiano é jovial e facilmente se adapta ao ambiente imediato. Por isso, também são pessoas  muito influenciáveis.<br /><br />
                  O perigo é se tornar dispersivo demais, volúvel e hesitante demais, viver dividido, sem foco e sem objetivos. É preciso cuidado para evitar mentiras, falsidades, fraudes, plágios e enganações em geral.<br /><br />
                  Sagitário é o signo oposto e lá está a solução: a flecha apontada para o alto, que mostra o caminho, a direção, a necessidade de cultivar ética e fixar os pensamentos para um alvo com metas mais elevadas.<br /><br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Gémeos indica uma natureza emocional hesitante, embora também estejam presentes a vivacidade, a flexibilidade e a engenhosidade. É uma oscilação emocional resultante da curiosidade.<br /><br />
                  A comunicação tem lugar nobre na classificação das importâncias emocionais. A pessoa com a Lua em Gémeos tende a falar incessantemente, algumas vezes a ponto de incomodar os outros.<br /><br />
                  Com frequência é nervosa e agitada. É o tipo de pessoa que nunca sai do telefone.<br /><br />
                  As emoções ficam sujeitas à análise racional e algumas vezes não sabe o que realmente sente. Há muita inquietação, com frequentes mudanças de residência e muitas viagens curtas.<br /><br />
                  Circular em ambientes variados, conhecer novas pessoas, experimentar emoções inexploradas... Tudo isso é importante para sua vida sentimental.<br /><br />
                  Apreende com facilidade as informações, percebe com rapidez o que as outras pensam e quais suas necessidades afetivas.<br /><br />
                  Com esta posição há tendência a querer abarcar o mundo com as pernas, a excitar-se momentaneamente com muitas ideias, sem segui-las até ao fim.<br /><br />
                  Pode haver indecisão, superficialidade e confusão, mas conta com capacidade de planejar soluções para problemas práticos e domésticos.<br /><br />
                  É importante estabelecer objetivos para não dispersar sentimentos, nem se tornar uma pessoa ambígua ou superficial. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a \"máscara\" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  A primeira abordagem da vida pelo ascendente em Gêmeos é feita através do elemento Ar: aprendizagem, comunicação e experimentação no plano mental. Vive de forma ligeira, curiosa e um tanto dispersa.<br /><br />
                  <strong> Há forte necessidade de compreender as coisas mentalmente e de apreender todas as faces da realidade com versatilidade e adaptabilidade.</strong><br /><br />
                  A diversidade da vida diária, com todos os seus pequenos e variados acontecimentos, é um elemento-chave para a expressão imediata da individualidade.<br /><br />
                  A comunicação é também uma importante via de expressão pessoal e de impacto junto ao meio ambiente.<br /><br />
                  Há tendência natural para se identificar com as ideias (\"sou aquilo que penso\"), embora estas possam estar continuamente em mudança.<br /><br />
                  <strong> O perigo é se perder numa teia de superficialidade, inconstância e inconsequências.</strong><br /><br />
                  Quando aprende a seguir um rumo de pensamento, entre a multiplicidade dos seus apelos mentais, o ascendente em Gêmeos começa a manifestar o que de mais elevado existe no signo.<br /><br />
                  Ou seja, a capacidade de relativizar e de compreender, no plano mental, todas as faces de um assunto ou situação.<br /><br />
                  Fisicamente apresenta aspecto ágil, flexível, mãos finas e habilidosas. Aliás, as mãos e braços podem estar em evidência, tanto pelo gesticular contínuo como pela sua elegância e delicadeza.<br /><br />
                  A aparência tende a ser um tanto andrógina, pode manter o aspecto juvenil até muito tarde. O rosto pode ser vivo, móvel, expressivo e marcado por um ar de eterna adolescência. <br />`,

                  `Mercúrio neste signo está em sua regência. Portanto, o raciocínio puro, lógico, pode ser levado à sua expressão mais elevada.<br /><br />
                  O Mercúrio geminiano é versátil, sem preconceitos e impessoal na sua habilidade para perceber a verdade. Está mais preocupado com fatos do que com atitudes e preferências pessoais.<br /><br />
                  Os nativos com Mercúrio em Gêmeos podem ser capazes de um profundo pensamento científico.<br /><br />
                  Geralmente são bem educados, conhecedores de muitos assuntos e capazes de se comunicar com facilidade, rapidez e precisão, na fala e na escrita.<br /><br />
                  Geralmente possuem um excelente vocabulário, que é um dos segredos de sua eloquência e sua clareza de expressão. Possuem um sistema nervoso muito sensível a estímulos externos.<br /><br />
                  Todas as conversas e atividades no seu ambiente são registradas com intensidade e vivacidade em sua consciência, forçando as a lidar com muitos pensamentos e impressões ao mesmo tempo.<br /><br />
                  Essa é a base da sua mente ágil, que possui a capacidade de registrar duas impressões ou ter dois pensamentos quase que simultaneamente.<br /><br />
                  Contudo, se forem submetidos a ambientes movimentados e complexos durante muito tempo, seus nervos ficarão em frangalhos, podendo ocorrer fadiga, confusão e irritação.<br /><br />
                  Portanto, precisam de períodos de isolamento para se acalmar, meditar, relaxar e concentrar sua mente. Os nativos possuem intensa curiosidade, querem saber tudo a respeito de tudo.<br /><br />
                  Mas correm o risco de querer aprender muitas coisas e dividir a sua atenção com muita frequência. Podem não dar continuidade ao propósito de completar os projetos que assumem.<br /><br />
                  Quando esta tendência é levada a extremo, cria o típico \"homem dos sete instrumentos\" (mas que não domina nenhum a fundo).<br /><br />
                  É possível considerar qualquer situação a partir de muitos pontos de vista. Por isso podem ter dificuldade para tomar decisões e mudam de ideia com muita frequência, confundindo os outros.<br /><br />
                  Pode haver conversa incessante sobre assuntos triviais, o que é um aborrecimento para os outros. É preciso estudar e desenvolver a educação para que possam utilizar melhor a capacidade intelectual.<br /><br />
                  As mentes inventivas dos nativos são competentes para descobrir novas e surpreendentes soluções para problemas e situações de emergência.<br /><br />
                  Esta posição é comum entre os profissionais; cientistas, matemáticos, peritos em computadores, secretárias, escritores, repórteres, jornalistas, publicitários, professores e oradores. <br />`,

                  `O nativo com Vênus em Gêmeos precisa de estimulo intelectual num relacionamento. Expressa seu amor de forma raciocinada, gosta de explicar constantemente aquilo que sente.<br /><br />
                  Adora conversar com seu parceiro, manifestando curiosidade sobre emoções e sentimentos alheios. O amor geminiano é racional, mas não por isso é menos intenso.<br /><br />
                  Caso sinta necessidade de expressar aquilo que sente, o faz com muita sinceridade, diretamente e sem rodeios e quer a mesma sinceridade de seu parceiro.<br /><br />
                  Sua mente é refinada e artística. Por isso, perde o estimulo se o parceiro for do tipo caseiro, possessivo, ou (pior ainda) grosseiro.<br /><br />
                  No amor não pode haver rotina. O relacionamento deve ser leve e divertido, recheado de passeios, teatro, cinema, viagens e mudanças na rotina.<br /><br />
                  Isso pode manter acesa a chama da paixão. Caso contrário, ocorre o risco de perder o interesse pelo outro sem justificativas razoáveis.<br /><br />
                  De qualquer forma, os envolvimentos fluem sem muitas complicações, pois é mais lógico, inteligente e, portanto, um bom negociador nas questões amorosas.<br /><br />
                  É também um bom mediador, sabe evitar conflitos e possui mais jogo de cintura para lidar com impasses. Por outro lado, corre o risco de escapar de forma escorregadia em situações que precisam de enfrentamento.<br /><br />
                  Se conseguir compreender que algumas situações devem ser encaradas, seu poder de negociação pode ajudá-lo a conseguir um bom desenlace. <br />`,

                  `Essa posição de Marte indica uma pessoa cheia de recursos e expedientes, um espírito sempre pronto para a discussão. Possui ímpeto oratório e resposta sempre pronta.<br /><br />
                  A boa atividade mental lhe confere capacidade para encontrar soluções engenhosas face às dificuldades eventuais.<br /><br />
                  Canaliza as energias na forma intelectual, estando sempre disposto a aprender e a melhorar seus conhecimentos.<br /><br />
                  Pode expressar-se na dança e em outras atividades onde o movimento se une à ação. Adora viajar. Tem espírito gozador e brincalhão.<br /><br />
                  Poderá expressar sua sexualidade de forma instável, sem muito ímpeto, necessitando de estimulo variado e constante. Baixa fertilidade.<br /><br />
                  É preciso atenção para não dissipar energia em ações inúteis e sem sentido. O espírito crítico pode levar a discussões ou brigas. É preciso cuidado também com irritações nas vias respiratórias. <br />`,

                  `O nativo pode contar com capacidade para os estudos filosóficos e para as atividades educacionais. Muitos escritores têm esta posição de Júpiter.<br /><br />
                  É provável que os ganhos provenham de atividades relacionadas com o ensino, as editoras e as agências de turismo.<br /><br />
                  É inquieto, possui uma permanente atividade nervosa, um apetite insaciável pelas ideias inovadoras, sendo apaixonado por assistir a conferências ou cursos.<br /><br />
                  Necessita conhecer um pouco de cada coisa e desenvolver a mente até um grau muito avançado. Pode ser demasiado loquaz, charlatão, difuso nas ideias e indiscreto.<br /><br />
                  É preciso cuidado para não mentir ou falar demais. Se medir os seus comentários pode evitar grandes perdas de dinheiro ou de posição social. <br />`,

                  `Saturno no signo de Gêmeos indica uma mente prática, disciplinada, sistemática e lógica. Há capacidade de disciplina no pensamento, no raciocínio, na escrita e na solução de problemas de todos os tipos.<br /><br />
                  As ideias são julgadas pela sua utilidade prática e pelos resultados obtidos na experiência direta.<br /><br />
                  Essa disciplina em todas as formas de trabalho mental, especialmente matemática, ciência e execução concreta de ideias, geralmente permite que os nativos completem cursos formais de estudo.<br /><br />
                  Os nativos gostam das coisas bem definidas, organizadas em detalhes e anotadas no papel.<br /><br />
                  Preocupam se principalmente com a clareza em contratos e acordos. A honestidade na comunicação e a confiança são de extrema importância.<br /><br />
                  Os nativos geralmente buscam argumentos sólidos para provar os seus esforços.<br /><br />
                  Saturno atua bem em todos os signos de ar, porque acrescenta disciplina, justiça e senso prático às funções intelectuais.<br /><br />
                  Secretárias, estenógrafas, contadores, escritores, professores e pesquisadores possuem esta posição. Ela também favorece pessoas envolvidas em engenharia, ciências físicas e matemáticas.<br /><br />
                  No seu pior, pode haver tendência a sentir e demonstrar muita dúvida, suspeita, timidez ou uma atitude crítica.<br /><br />
                  Contudo, os nativos são suficientemente flexíveis para se adaptarem às necessidades práticas de qualquer situação.<br /><br />
                  Sendo assim, são habilidosos para encontrar soluções de problemas. Eles enxergam a vida com objetividade prática. <br />`,

                  `Urano no signo de Gémeos indica uma geração de pessoas destinadas a serem precursoras de uma nova maneira de pensar.<br /><br />
                  Elas possuem mentes brilhantes, originais, intuitivas. Podem abrir novos conceitos em ciência, literatura, educação, electrónica e meios de comunicação.<br /><br />
                  Os nativos com esta posição tendem à inquietação exagerada, podendo dificultar a realização de uma ideia até ao fim. Precisam desenvolver autodisciplina para que as suas ideias possam se concretizar.<br /><br />
                  Devido à sua inquietação, geralmente viajam muito, procurando novos contatos sociais e a descoberta de novas ideias. Esta posição indica grande liberdade de pensamento.<br /><br />
                  Uma vez que criamos o nosso destino com nossas mentes e nossas crenças, os nativos podem desenvolver a percepção de atividades e soluções alternativas, a capacidade para abandonar padrões de vida habituais.<br /><br />
                  No seu pior, o raciocínio pode ser incoerente, excêntrico e pouco prático. Pode indicar confusão e imprevistos em viagens, bem como relações inconstantes com irmãos, irmãs e vizinhos. <br />`,

                  `Netuno em Gêmeos indica uma geração que desenvolveu as faculdades criativas e intuitivas da mente através da literatura e da poesia. Pessoas com a imaginação ativa e versátil.<br /><br />
                  Muitas vezes inquietas e com facilidade para se ligarem telepaticamente, possui habilidade para canalizar ideias através de imagens.<br /><br />
                  Novas ideias a respeito de viagens, do comércio e das comunicações.<br /><br />
                  A expressão negativa de Netuno neste signo é a confusão em assuntos práticos e na forma de comunicação, assim como susceptibilidade e preocupação com valores superficiais. <br />`,

                  `Plutão em Gêmeos enfatiza a comunicação. Os meios de comunicação (jornais, transportes, aviação) e as novas ideias se expandem aceleradamente.<br /><br />
                  Este desenvolvimento da comunicação divulga rapidamente em todo o mundo os inventos e as descobertas. Esta época termina com o isolamento dos povos e das diferentes culturas.<br /><br />
                  Foi à época em que apareceu o automóvel, o avião, o telefone, o fonógrafo, etc. A oportunidade que brinda Plutão em Gêmeos é a de regenerar a mente, convertendo-a num poderoso instrumento capaz da visão mais aguda e penetrante. <br />`,

                  `Quem tem o Nodo Sul (Cauda do Dragão) em Gêmeos traz experiências de dispersão mental, curiosidade excessiva e necessidade constante de informação.<br /><br />
                  É mais mental do que emocional e um tanto dispersivo, desligado do mundo físico. Que saber de tudo um pouco, mas não se aprofunda em nada. Isso gera superficialidade.<br /><br />
                  Traz tendência de ver o mundo sob uma perspectiva racional e exterior. Deslumbrado com todo o tipo de informação fica preso na mente inferior e concreta.<br /><br />
                  Assim, não vivencia a realidade no seu lado mais sutil e abstrato. Questiona tudo e usa sua flexibilidade mental para realizar várias tarefas ao mesmo tempo.<br /><br />
                  Traz tendência também para a fofoca, a mentira, e para conversas que não acrescentam nada. Pode usar as informações com o intuito de esperteza, de levar vantagem e manipular o outro, inconsciente das suas consequências cármicas.<br /><br />
                  Sente-se desconfortável com assuntos sérios, pode usar a mente de forma imatura ou infantil. É um ágil comunicador, mas tem dificuldade para colocar as ideias em prática e manter o foco. Sente-se confortável na pequenez, na rotina, no dia a dia.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) no signo de Sagitário, veio aprender a sair no mundo das palavras e a entrar no mundo das ideias. Deve compensar a dispersão com o compromisso com um objetivo mais sólido, mais profundo.<br /><br />
                  Veio descobrir que a vida não é só conhecimento prático. É preciso buscar a sabedoria, a filosofia e o mundo espiritual.<br /><br />
                  Cultivar a expansão da consciência, passar da mente inferior e concreta para a mente superior e abstrata. Aprender a cultivar o silêncio, o contato com a Natureza para ouvir a sua voz interior, encontrar o seu canal para a verdade universal.<br /><br />
                  Para tanto, é preciso resistir a alimentar conversas que não alimentam a alma. Sair da pequenez do seu bairro para o mundo, viajar, aventurar-se, interagir com outras culturas, crenças, religiões, tradições e raças.<br /><br />
                  Sair dos esquemas mentais alimentados pela dúvida ou pelo medo para abraçar uma verdade sagrada. Meditação, viagens e estudos superiores fazem parte do seu percurso evolutivo. <br />`,

                  `A mente aprende rapidamente e é ávida de conhecimentos. A felicidade resulta da capacidade que o indivíduo tem de se expandir e entrar em contato com tudo.<br /><br />
                  A iluminação mais profunda vem através de estudos filosóficos ou religiosos, ou por meio da identificação com uma causa grandiosa ou com uma organização social.<br /><br />
                  A infelicidade resulta principalmente de uma sensação de confinamento e de confusão intelectual. Exemplos: Rainha Vitoria, a Duquesa de Windsor, Rudolph Steiner, Henry Wallace, Dmitri Shostakovich. <br />`,

                  `Mágoas trazidas da infância o levam a ter pensamentos derrotistas e a não confiar plenamente em suas próprias ideias. Pode ter havido dificuldades de adaptação nos primeiros anos de escola ou ter dificuldades de aprendizado ou de fala.<br /><br />
                  Em alguns casos, quem têm Quíron neste signo, pode ter irmãos ou irmãs doentes ou angustiados (aflitos) por alguma coisa. Seus anos de formação foram marcados pela necessidade de serem sensíveis à condição dos irmãos.<br /><br />
                  Em geral, tem grande dificuldade de expressar seus sentimentos mais profundos, mas tende a exprimir com clareza temas polêmicos. Tendência para desenvolver temas mediúnicos, proféticos e paranormais, que englobam experiências de outras dimensões e a capacidade de transmitir energias curadoras.<br /><br />
                  Compreende a comunicação e as relações diárias. Pode ter sido ferido em sua inteligência ou não ter tido a oportunidade de estudar como gostaria.<br /><br />
                  Precisa desenvolver a confiança na sua inteligência instintiva, às vezes muito mais complexa e rica do que a ‘inteligência formal’. Também pode ter ouvido palavras agressivas e hoje deve buscar um uso mais construtivo para a palavra.<br /><br />
                  Você pode absorver indiscriminadamente todo tipo de ideias das mais variadas origens, na tentativa desordenada de entender o que está acontecendo. Tem dificuldade de acreditar nas suas próprias ideias. Devido à preocupação em saber se são certas ou erradas, você recorre às ideias dos outros.<br /><br />
                  Você chega a ser obsessivo na busca de entender todas as coisas. Pode ficar nervoso e estressado quando fica confuso ou dissociado.<br /><br />
                  Mas, se você for capaz de desenvolver segurança pessoal e maturidade, sua mente se mostrará receptiva a energias transpessoais criativas e curadoras, tornando-se profética e mediúnica, num sentido positivo.<br /><br />
                  É provável que você tenha originalidade e brilho pessoal. Sua incansável necessidade de perscrutar e questionar o conduz a regiões que outros não se atreveriam a explorar. Esta característica pode levá-lo a ser um inovador na sua área de trabalho.<br /><br />
                  Pode ser que você adquira consciência de padrões de pensamentos destrutivos e derrotistas. Eles têm origem em mágoas da infância.<br /><br />
                  Representam atitudes e crenças não verbalizadas, herdadas do ambiente em que viveu quando criança. Você pode ter tomado decisões na infância que perduram até hoje e que foram baseadas em algum sofrimento daquele momento.<br /><br />
                  Só descobrindo estes padrões de pensamentos (por ex.: se seu pai ou sua mãe era intelectual e frio, você pode ter decidido que nunca seria um intelectual e negar até hoje sua capacidade mental) você conseguirá tomar novo rumo na vida, desenvolver o que foi bloqueado naquela época.<br /><br />
                  Você pode se esforçar para expressar com clareza suas ideias e depois julgar não ter revelado aquilo que tinha em mente, ficando irritado e frustrado.<br /><br />
                  Todavia, acabará descobrindo através dos outros que foi muito conciso na forma de se exprimir, chegando a ser admirado por sua habilidade de transmitir pensamentos e sentimentos em palavras, o que o deixará mais confuso ainda.<br /><br />
                  Ou pode ocorrer exatamente o contrário: você pensar que está se expressando muito bem e as pessoas acharem que você foi confuso, contraditório. Isto ocorre porque você não faz uma ideia exata de como se comunica.<br /><br />
                  É possível que na infância seus pais não tenham abordado assuntos que eram realmente importantes, tais como sentimentos pessoais, sexo, doença, morte, etc., na tentativa errônea de evitar o sofrimento dos filhos.<br /><br />
                  Daí, você pode ter dificuldade de falar de coisas realmente importantes, como sua vida emocional. Pode saber se explicar muito bem em outras áreas, mas quando tenta falar de sentimentos íntimos, fica bloqueado.<br /><br />
                  Sua mente prefere funcionar através da intuição, ou analisando o todo, sem se prender em partes. Isso pode ter provocado problemas no aprendizado na escola.<br /><br />
                  Mas esse problema quase sempre advém de alguma incompatibilidade entre o modo natural de você pensar e o método de ensino.<br /><br />
                  Na vida adulta, você deve aprender a dar valor a sua maneira de pensar. A se expressar através de imagens e de outras formas não verbais de expressão.<br /><br />
                  É importante para você ler alguns lançamentos mais recentes que vinculam as descobertas da nova física com os vários estados de consciência, a fim de compreender melhor suas próprias percepções mentais, que diferem das da maioria das pessoas.<br /><br />
                  Você deve tomar cuidado para não fazer do conhecimento, do seu intelecto, o seu Deus. Nem deve desprezar aqueles que não cultuam o conhecimento. É importante você entender que nunca saberá tudo, pois isso só cabe a Deus.<br /><br />
                  Também não deve ir ao extremo oposto de ignorar a mente e só valorizar os sentimentos e intuições. É preciso encontrar um equilíbrio saudável. Você deve entender que todo ser humano vive conflitos.<br /><br />
                  Se você fica deprimido ao fazer qualquer escolha, porque uma parte de você ficou satisfeita e a outra não, é tempo de ter compaixão de si próprio e dos outros e se conscientizar que essa é a sua limitação.<br /><br />
                  Você pode passar a vida procurando a sua \"alma gêmea\", causando relacionamentos obsessivos, ou com pessoas em tudo opostas a você. É necessário um trabalho pessoal muito grande para superar esta tendência e tirar o melhor, um crescimento pessoal, dessa relação.<br /><br />
                  Você pode ter irmãos doentes, com deformidade ou retardamento mental, ou por alguma razão serem importantes para sua vida.<br /><br />
                  Pode haver hostilidade ou rivalidade, você pode achar que seu irmão ou irmã foi favorecido, ou pode ter ocorrido de você ter sido o favorecido e agora se sentir culpado por isso.<br /><br />
                  Pode ocorrer de seu irmão ser uma pessoa importante em sua vida, que lhe serve de guia e mentor. Ou ainda não ter irmãos e isso dar a você uma sensação de isolamento.<br /><br />
                  Quando criança pode ter sido sempre atormentado pelos colegas, ter sempre buscado um amigo verdadeiro. Pode ocorrer de buscar companheirismo através da mídia, buscando estímulos e integração com os demais seres.<br /><br />
                  O que ocorre é que você é muito estimulável por esse tipo de comunicação e pode ser influenciado pelo que vê ou lê. Deve então analisar friamente a qualidade do material que tem na mídia para educá-lo e diverti-lo, sob o risco de aceitar tudo que recebe do mundo exterior.<br /><br />
                  Atividades como professor, editor, orador, jornal, rádio e TV, monitor para grupos de estudo ou viagens de qualquer natureza são produtivas para você.<br /><br />
                  A comunicação é sua via de cura, tanto para si mesmo, quanto para os outros. Procure sempre ser o companheiro fiel dos que convivem com você e receberá em troca a sensação de integração que tanto necessita. <br />`,

                  `O parceiro ideal é aquele que tenha curiosidade e interesse em aprender, transmitir e que tenha interesses variados, goste de viagens e seja comunicativo, descolado, esperto, versátil e flexível.<br /><br />
                  Juno neste signo indica a importância de haver trocas mentais e intelectuais numa parceria.<br /><br />
                  Pode formar um casal muito inteligente ou que esteja sempre aprendendo. Bons oradores, em constantes viagens e mudanças.<br /><br />
                  Mas também podem ser pessoas enganosas, mentirosas, incrivelmente dispersas ou que estejam envolvidas em constantes discussões e polêmicas.<br /><br />
                  Possível sucesso em carreiras de comunicação ou no comércio. A parceria deve ser espontânea, esperta, curiosa e viva.<br /><br />
                  O casal tende a se comportar sempre de forma muito jovial e tentará preservar os seus comportamentos de juventude. <br />`,

                  `Em suas vidas passadas o nativo tinha o espírito vivo e flexível. Tão flexível, que pouco ligava para a lealdade. Essa posição de Mercúrio indica um comerciante desonesto numa vida passada.<br /><br />
                  Ou ainda, um homem de letras mais brilhante do que sério. Em todo caso, fez mal uso de sua viva inteligência e de seu talento para se expressar, tanto por escrito como oralmente.<br /><br />
                  Sua aptidão manual e artística também era notável. Essas qualidades persistem na atual encarnação, mas esse gênio \"faz-tudo\" deve tomar cuidado para não perder o foco e se dispersar.<br /><br />
                  Deve agora negociar e se comunicar com integridade. Pode ter também uma dívida cármica a ser regatada com irmãos ou primos. <br />`,

                  `Quando Vênus está retrógrado neste signo evidencia-se a adolescência, em que o ser ainda não atingiu a sua polaridade sexual.<br /><br />
                  Pode indicar uma instabilidade afetiva nas existências anteriores, nas quais a pessoa vivia o amor como um jogo leviano da vida.<br /><br />
                  O nativo deve agora aprender a se comprometer seriamente cultivando a responsabilidade e a sua integridade.<br /><br />
                  Resistindo assim, à tentação da inconstância, à tendência de falar demais e de jogar seus parceiros um contra o outro com fofocas ou intrigas. <br />`,

                  `O nativo com tem grande curiosidade intelectual. Mas a lição cármica aqui escolhida é a de aprender a dosar sua energia (e sua agressividade) nas relações humanas.<br /><br />
                  Bastante instável, inquieto, inconstante e facilmente ansioso, pode fazer estudos de psicologia: aprenderá a se conhecer através dos outros.<br /><br />
                  Nesta vida deve cultivar o hábito de refletir antes de agir. Deve promover intercâmbios e negociações com mais ponderação.<br /><br />
                  Deve também cultivar mais foco em suas prioridades. Pode ir muito longe do que imagina em busca do conhecimento. <br />`,

                  `A palavra-chave de Júpiter é \"expansão\". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Nas vidas passadas, o nativo alinhava a sua filosofia com a dos que o cercavam. Não tinha nenhuma ideia pessoal: era sempre da mesma opinião do último que ouviu.<br /><br />
                  Incapaz de filtrar as informações recebidas segundo um critério pessoal, falava demais. Inclinava-se a contar qualquer coisa a qualquer um, sem nenhum discernimento. E, além do mais, nada tolerante.<br /><br />
                  Nesta vida deve aprender a deixar falar e a se calar. Cultivar para si uma filosofia mais prática, objetiva, focada e humana. Cultivar mais integridade no uso da palavra. <br />`,

                  `A natureza pesada de Saturno não se combina muito bem com a natureza viva e inquieta de Gêmeos.<br /><br />
                  A boa comunicação, o intercâmbio verbal e intelectual com os outros não foram cultivados em vidas passadas.<br /><br />
                  O nativo sabe bem o que gostaria de dizer, mas não sabe como se expressar. Não sabe transmitir uma mensagem com clareza e competência para o público.<br /><br />
                  O nativo pode não estar muito certo das suas ideias e busca por todo lado, acumulando informações que não fazem mais que acentuar suas incertezas.<br /><br />
                  Graças a isso, pode ao menos se livrar das ideias prontas adquiridas nas vidas passadas. Seu trabalho cármico é desaprender. Cultivar inteligência, curiosidade e flexibilidade nos intercâmbios. <br />`,

                  `O dom da réplica, o humor, a adaptação rápida às palavras e às circunstâncias revelam uma mente muito ativa.<br /><br />
                  Muito curioso, constantemente em movimento, é às vezes cansativo por sua inquietação e por seu nervosismo.<br /><br />
                  Tende a dispersar-se com facilidade, a borboletear de uma ideia à outra, sem nada aprofundar. Deixa-se influenciar pelo último que chega.<br /><br />
                  Essa instabilidade, herdada de vidas passadas, é a consequência de um comportamento no qual o nativo nunca conseguia assumir as decisões.<br /><br />
                  Esvoaçando como uma pluma ao vento, não fazia nenhum progresso. Quem vai ao vento, perde o assento.<br /><br />
                  É preciso, portanto, que desenvolva foco e prioridades. Que escolha uma atividade e se obrigue a aprofundá-la. <br />`,

                  `Netuno em Gêmeos indica grande habilidade manual acrescida de uma viva atividade mental. A imaginação era muito desenvolvida entre os nativos.<br /><br />
                  Escritores brilhantes Henry Miller (nascido em 1891), ou Drieu La Rochelle (1893) utilizaram assim seu senso agudo da palavra e da resposta pronta.<br /><br />
                  Mas seu humor, muitas vezes corrosivo, lhes acarretavam aborrecimentos. Netuno em Gêmeos é também o senso dos negócios, mas a retrogradação de Netuno indica que foram enganadores.<br /><br />
                  Podem ter sido até mesmo criminosos. A extrema habilidade, a imaginação viva, a mente ágil e ativa foram empregadas de maneira principalmente negativa. <br />`,

                  `O período coincidiu com um extraordinário boom tecnológico nos meios de comunicação, particularmente a aviação (já que Gêmeos é signo de Ar). O \"Avião\" de Clément Ader nasceu em 1897.<br /><br />
                  Os grandes pioneiros: Didier Daurat e Jean Mermoz têm Plutão retrógrado em Gêmeos. Exatamente como Enzo Ferrari, o famoso construtor de carros.<br /><br />
                  Aliás, a primeira corrida de automóveis do mundo, a famosa \"Paris-BordéusParis\", ocorreu em 1895. Enfim, rádio e cinema vão florescer.<br /><br />
                  O triunfo científico proclama um tanto exageradamente que \"não se para o progresso\". Gêmeos é o reino de Mercúrio, símbolo ao mesmo tempo dos conhecimentos teóricos e das suas aplicações práticas: a tecnologia.<br /><br />
                  Os nativos de Plutão retrógrado em Gêmeos têm por vezes uma surpreendente aptidão para jogar com as palavras: Henry Miller, Raymond Queneau, Jean Genet, Eugène lonesco, Papillon, Jacques Prévert.<br /><br />
                  O verbo é, para eles, um instrumento de poder político. A sedução das palavras, o jogo duplo, por vezes. Esses nativos já aprenderam, em várias vidas passadas, a manejar o verbo (escrito ou falado).<br /><br />
                  Terão eles sido escribas desonestos? Escritores que haviam propagado ideias nefastas? Colegiais vadios, como no tempo de Villon? Seu carma deve levá-los a uma reflexão sobre os meios de comunicação. Seu programa: não abusar das pessoas jogando com as palavras. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Mágoas trazidas da infância levam à ter pensamentos derrotistas e a não confiar plenamente em suas próprias ideias. Podem ter dificuldades de adaptação nos primeiros anos de escola ou ter dificuldades de aprendizado ou de fala.<br /><br />
                  Em alguns casos, quem têm Quíron neste signo, pode ter irmãos ou irmãs doentes ou angustiados (aflitos) por alguma coisa, e seus anos de formação foram marcados pela necessidade de serem sensíveis à condição de irmãos.<br /><br />
                  Em geral, tem grande dificuldade de expressar seus sentimentos mais profundos, mas tende a exprimir com clareza temas polêmicos. Tendência para desenvolver temas mediúnicos, proféticos e paranormais, que englobam experiências de outras dimensões e a capacidade de transmitir energias curadoras.<br /><br />
                  Compreende a comunicação e as relações diárias. Pode ter sido ferido em sua inteligência ou não ter tido a oportunidade de estudar como gostaria.<br /><br />
                  Precisa desenvolver a confiança na sua inteligência instintiva, às vezes muito mais complexa e rica do que a ‘inteligência formal’. Também pode ter ouvido palavras agressivas, e hoje deve buscar um uso mais construtivo para a palavra.<br /><br />
                  Você pode absorver indiscriminadamente todo tipo de ideias das mais variadas origens, na tentativa desordenada de entender o que está acontecendo.<br /><br />
                  Tem dificuldade de acreditar nas suas próprias ideias. Devido à preocupação em saber se são certas ou erradas, você recorre às ideias dos outros.<br /><br />
                  Você chega a ser obsessivo na busca de entender todas as coisas. Pode ficar nervoso e estressado quando fica confuso ou dissociado.<br /><br />
                  Mas, se você for capaz de desenvolver segurança pessoal e maturidade, sua mente se mostrará receptiva a energias transpessoais criativas e curadoras, tornando-se profética e mediúnica, num sentido positivo.<br /><br />
                  É provável que você tenha originalidade e brilho pessoal. Sua incansável necessidade de perscrutar e questionar o conduz a regiões que outros não se atreveriam a explorar. Esta característica pode levá-lo a ser um inovador na sua área de trabalho.<br /><br />
                  Pode ser que você adquira uma consciência de padrões de pensamentos destrutivos e derrotistas, que têm sua origem em mágoas da infância ou que representam atitudes e crenças não verbalizadas, herdadas do ambiente em que viveu quando criança.<br /><br />
                  Você pode ter tomado decisões na infância que perduram até hoje e que foram baseadas em algum sofrimento daquele momento.<br /><br />
                  Só descobrindo estes padrões de pensamentos (por ex.: se seu pai ou sua mãe era intelectual e fria, você pode ter decidido que nunca seria um intelectual e negar até hoje sua capacidade mental) você conseguirá tomar novo rumo na vida, desenvolver o que foi bloqueado naquela época.<br /><br />
                  Você pode se esforçar para expressar com clareza suas ideias e depois julgar não ter revelado aquilo que tinha em mente, ficando irritado e frustrado.<br /><br />
                  Todavia, acabará descobrindo através dos outros que foi muito conciso na forma de se exprimir, chegando a ser admirado por sua habilidade de transmitir pensamentos e sentimentos em palavras, o que o deixará mais confuso ainda.<br /><br />
                  Ou pode ocorrer exatamente o contrário: você pensar que está se expressando muito bem e as pessoas acharem que você foi confuso, contraditório. Isto ocorre porque você não faz uma ideia exata de como se comunica.<br /><br />
                  É possível que na infância seus pais não tenham abordado assuntos que eram realmente importantes, tais como sentimentos pessoais, sexo, doença, morte, etc.<br /><br />
                  Na tentativa errônea de evitar o sofrimento dos filhos. Daí, você tem dificuldade de falar de coisas realmente importantes, como sua vida emocional. Pode saber se explicar muito bem em outras áreas, mas quando tenta falar de sentimentos íntimos, fica bloqueado.<br /><br />
                  Sua mente prefere funcionar através da intuição, ou analisando o todo, sem se prender em partes. Isso pode ter provocado problemas no aprendizado na escola. Mas esse problema quase sempre advém de alguma incompatibilidade entre o modo natural de você pensar e o método de ensino.<br /><br />
                  Na vida adulta, você deve aprender a dar valor a sua maneira de pensar, e a se exprimir através de imagens e de outras formas não verbais de expressão.<br /><br />
                  É importante para você ler alguns lançamentos mais recentes que vinculam as descobertas da nova física com os vários estados de consciência, a fim de compreender melhor suas próprias percepções mentais, que diferem das da maioria das pessoas.<br /><br />
                  Você deve tomar cuidado para não fazer do conhecimento, do seu intelecto o seu Deus, nem deve desprezar aqueles que não cultuam o conhecimento.<br /><br />
                  É importante você entender que nunca saberá tudo, pois isso só cabe a Deus. Também não deve ir ao extremo oposto de ignorar a mente e só valorizar os sentimentos e intuições.<br /><br />
                  É preciso encontrar um equilíbrio saudável. Você deve entender que todo ser humano vive conflitos.<br /><br />
                  Se você fica deprimido ao fazer qualquer escolha, porque uma parte de você ficou satisfeita e a outra não, é tempo de ter compaixão de si próprio e dos outros e se conscientizar que essa é a sua limitação.<br /><br />
                  Você pode passar a vida procurando a sua \"alma gêmea\", causando relacionamentos obsessivos, ou com pessoas em tudo opostas a você. É necessário um trabalho pessoal muito grande para superar esta tendência e tirar o melhor, um crescimento pessoal, dessa relação.<br /><br />
                  Você pode ter irmãos doentes, com deformidade ou retardamento mental, ou por alguma razão serem importantes para sua vida.<br /><br />
                  Pode haver hostilidade ou rivalidade, você pode achar que seu irmão ou irmã foi favorecido, ou pode ter ocorrido de você ter sido o favorecido e agora se sentir culpado por isso.<br /><br />
                  Pode ocorrer de seu irmão ser uma pessoa importante em sua vida, que lhe serve de guia e mentor. Ou ainda não ter irmãos e isso dar a você uma sensação de isolamento. Pode ter ocorrido de quando criança ter sido sempre atormentado pelos colegas, ter sempre buscado um amigo verdadeiro.<br /><br />
                  Pode ocorrer de buscar companheirismo através da mídia, buscando estímulos e integração com os demais seres. O que ocorre é que você é muito estimulável por esse tipo de comunicação, e pode ser influenciado pelo que vê ou lê.<br /><br />
                  Deve então analisar friamente a qualidade do material que tem na mídia para educá-lo e diverti-lo, sob o risco de aceitar tudo que recebe do mundo exterior.<br /><br />
                  Atividades como professor, editor, orador, jornal, rádio e TV, monitor para grupos de estudo ou viagens de qualquer natureza são produtivas para você. A comunicação é sua via de cura, tanto para si mesmo, quanto para os outros.<br /><br />
                  Procure sempre ser o companheiro fiel dos que convivem com você e receberá em troca a sensação de integração que tanto necessita. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Se você ocupar uma posição de destaque e brilho na sua profissão é possível vivenciar o sucesso na carreira atuando nas áreas de comunicação ou comércio. Importância de trocas mentais e intelectuais numa parceria.<br /><br />
                  No mapa de um homem mostra uma esposa/parceira, espontânea e esperta, viva. Também no casamento essa mulher se comportará sempre de forma muito jovial, e tentará preservar seus comportamentos de juventude. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução: </strong>`,

                  `Vive a comunicação imediata, factual, o dia a dia das relações, do comércio, o mundo quotidiano como campo de troca verbal. Exprime a pequena informação dada à pessoa mais próxima e a forma como responde aos encontros casuais. <br /><br />`,

                  `<strong> 2º nível de evolução: </strong>`,

                  `Desenvolve o intelecto, a mente racional, concreta, a aprendizagem, o ensino. A forma como compreende o mundo e como o revela aos outros. É o campo dos estudos primário e secundário. <br /><br />
                  Neste nível situa-se o jornalismo como via imediata de informação, a capacidade de marketing e relações públicas, a facilidade de comunicação e expressão. <br /><br />`,

                  `<strong> 3º nível de evolução: </strong>`,

                  `Revela as qualidades que desenvolve ao aprender e que se expandem ao ensinar. O modo como assimila e transmite o conhecimento. <br /><br />
                  Desenvolve também o poder mental e a confiança que os estudos podem despertar em si mesmo. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a ganhar sabedoria sem perder a simplicidade e humildade </strong>`
            ]
      },
      {
            title: `câncer</strong>`,
            text: [
                  `Câncer é o primeiro signo do elemento Água, regido pela Lua.<br /><br />
                  Traz lições sobre a sensibilidade, a intimidade, as emoções, o cuidado, a proteção e o acolhimento. Evoca também o passado, a ancestralidade, a história e a memória emotiva.<br /><br />
                  É representado pelo caranguejo, com sua capacidade de andar para frente e para trás. O canceriano aprende a valorizar as recordações e a atualizá-las, aproveitando os ciclos que se repetem.<br /><br />
                  Varia seu humor junto com a mutante Lua: apresenta um temperamento emocional ora objetivo e ora subjetivo.<br /><br />
                  É receptivo, e sua estabilidade e equilíbrio vêm das relações afetivas, do histórico e da vida familiar, da valorização dos sentimentos patrióticos, do local onde nasceu e dos condicionamentos do passado.<br /><br />
                  O Sol em Câncer inspira a criação e a fecundidade, o que concede boas probabilidades no plano material.<br /><br />
                  As boas relações com aqueles que o rodeiam favorecem o aumento do património, sobretudo na segunda parte da vida.<br /><br />
                  Possui forte instinto de proteção, grande intuição e capacidade imaginativa. É sensível e intuitivo.<br /><br />
                  Porém tem um temperamento sonhador, com um toque de ingenuidade. O seu olhar é muitas vezes comparável ao de uma criança e a sua imaginação é muito fecunda.<br /><br />
                  Na saúde, deve vigiar particularmente o esôfago, o estômago, o duodeno, o fígado, o peito, a caixa torácica, os peitorais e as membranas mucosas.<br /><br />
                  Há tendência para se fechar em si próprio e interiorizar as suas emoções. Como consequência, pode somatizar gastrite ou úlceras estomacais.<br /><br />
                  É preciso cuidado para não envenenar a sua vida com emoções negativas. O mínimo mal-estar pode assumir aos seus olhos uma dimensão importante.<br /><br />
                  Na segunda parte da vida, deve ser acompanhado por um médico, pois há tendência para desenvolver uma doença psicossomática.<br /><br />
                  O perigo é ficar apegado demais ao passado, melindroso demais, com medo do mundo, fechado em sua concha.<br /><br />
                  Deve estar atento para controlar a avareza, não se tornar escravo de seus temores ou dependente emocional de hábitos, lugares, coisas ou pessoas.<br /><br />
                  O equilíbrio está no signo oposto em Capricórnio, que traz a razão, a confiança e a praticidade.<br /><br />
                  Para que realizem seus sonhos, devem aprender a dar todos os passos necessários, com mais perseverança e pragmatismo.<br /><br />
                  Tudo para que não perca as referências de ordem e estabilidade nas tensões emocionais, na turbulência interior e nas questões afetivas. <br /><br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua em Câncer se encontra no signo de sua regência, indicando profundidade e intensidade de emoções.<br /><br />
                  A sensibilidade encontra terra fértil nos relacionamentos mais íntimos. Pode haver fortes ligações com a mãe à família e o lar.<br /><br />
                  O nativo com esta configuração pode ser bom cozinheiro ou boa dona de casa. A segurança e o casamento são importantes.<br /><br />
                  É intuitivo para perceber as necessidades das pessoas que ama e tem um talento lindo para cuidar.<br /><br />
                  Quem tem a Lua em Câncer possui uma sensibilidade aos humores e sentimentos dos outros que pode beirar a mediunidade.<br /><br />
                  É facilmente influenciado pela atmosfera dos encontros. Sua extrema sensibilidade às opiniões e reações dos outros pode levá-lo a imaginar desfeitas, mesmo não sendo propositais.<br /><br />
                  Evita encontros quando há possibilidade de desamparo. Consequentemente, tende a retrair-se e perder se em pensamentos.<br /><br />
                  Quando não é tomado por ressentimentos, pode fazer com que as pessoas se sintam paradas ao seu lado, pois sua ternura e sensibilidade são cativantes.<br /><br />
                  Mas é também sonhador, vulnerável, instável e carente. Isso fica evidente em situações de estresse emocional. Por isso, sentir-se seguro e ter suas necessidades afetivas atendidas são importantes.<br /><br />
                  Pode haver tendência para sufocar os filhos com o seu amor, a ponto de desejarem dominar as suas vidas. É preciso aceitar a realidade e aprender a dar limites para sua fragilidade emocional.<br /><br />
                  Com mais praticidade, a consciência do momento presente, a memória do passado e a intuição do futuro, pode encontrar um caminho para sua segurança e seu bem-estar emocional. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a \"máscara\" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  A primeira impressão da vida é sentida através do elemento Água: ação motivada pelos sentimentos.<br /><br />
                  Expressão cautelosa e grande necessidade de segurança emocional são características de quem tem Ascendente em Câncer.<br /><br />
                  A expressão da individualidade é cautelosa. Para proteger-se emocionalmente, por vezes desenvolve uma dura casca externa.<br /><br />
                  <strong> Sua tarefa é encontrar meios para expressar a própria sensibilidade, ao invés de ser esmagado por ela. Respeitar, compreender, reconhecer e liberar os sentimentos.</strong><br /><br />
                  Há uma qualidade mimética, camaleônica na expressão pessoal: confundir-se com o ambiente para não se mostrar competitivo ou chamar a atenção.<br /><br />
                  Assim evita também ser ameaçado ou agredido. Por vezes apresenta comportamentos desprotegidos, inseguros ou mesmo infantis.<br /><br />
                  Pode manter-se sempre muito próximo da mãe ou da família de origem (do ponto de vista físico, emocional ou ambos). Esta camuflagem, contudo, pode ser apenas aparente.<br /><br />
                  Por detrás se esconde uma grande tenacidade e uma capacidade de se agarrar teimosamente aos sentimentos e às situações em que sinta familiaridade e segurança, mesmo que esta segurança seja feita à custa de outros.<br /><br />
                  À medida que desenvolve certo grau de maturidade, pode desfrutar toda sensibilidade e riqueza emocional associada a este signo.<br /><br />
                  <strong> Você cresce em autoconhecimento quando desenvolve as qualidades de cuidar, alimentar, proteger, nutrir. Seja de uma pessoa, uma família, um negócio ou um ideal.</strong><br /><br />
                  O aspecto físico ligado a este ascendente é arredondado, agradável, suave e um pouco infantil.<br /><br />
                  Um rosto redondo e um tronco desenvolvido são características comuns, com propensão a engordar e reter líquidos. Alguns, contudo, apresentam um rosto oblongo e uma figura esguia. <br />`,

                  `Mercúrio no signo de Câncer indica uma mente influenciada por padrões emocionais profundamente arraigados.<br /><br />
                  Os desejos inconscientes podem fazer com que a pessoa observe alguns fatos e ignore outros, o que pode resultar em preconceitos e interferência no raciocínio objetivo.<br /><br />
                  Às vezes podem ser falsos, sem o perceber conscientemente. Mercúrio neste signo pode indicar boa memória, devido à intensidade emocional associada aos pensamentos.<br /><br />
                  Há também tendência a absorver muita informação subliminarmente ou a aprender por osmose.<br /><br />
                  Na realidade, grande parte do processo mental ocorre em um nível inconsciente, embora se manifeste como intenção consciente.<br /><br />
                  Como as pessoas com esta posição de Mercúrio são muito suscetíveis às atitudes e opiniões dos que as cercam, o seu pensamento pode ser influenciado por apelos emocionais, como o patriotismo.<br /><br />
                  Elas são muitos sensíveis, acreditam que tudo que é feito ou dito no seu ambiente é especificamente dirigido a elas. Grande parte do pensamento concentra-se no lar e na família.<br /><br />
                  Há uma considerável habilidade para os negócios, em assuntos relacionados a alimentos, produtos de consumo e domésticos e bens imobiliários. <br />`,

                  `O nativo com Vênus em Câncer é, antes de tudo, um cuidador. Sonha com uma casa aconchegante, cheia de filhos, mesa posta, comida farta.<br /><br />
                  Quem possui essa característica tem necessidade de se sentir amparado e procura sempre o conforto de seu lar, pois é naturalmente tímido e sentimental, apegado às lembranças do passado.<br /><br />
                  As relações amorosas podem não ser muito são muito fogosas, mas são românticas e podem proporcionar muito prazer quando estiverem envolvidos sentimentos sinceros.<br /><br />
                  Existe certa carência afetiva (carência do útero materno) neste tipo de amor canceriano.<br /><br />
                  Por causa disso, quem tem Vênus em Câncer nutre e cativa com pequenos cuidados maternais a pessoa amada, tornando-a dependente de seus cuidados.<br /><br />
                  Tanto Câncer, quanto Vênus estão relacionados às qualidades femininas. Há sensibilidade, o uso da intuição e da imaginação, que podem enriquecer as trocas.<br /><br />
                  Porém, a sua fragilidade emocional exagerada pode causar estragos num relacionamento, especialmente quando o parceiro não perceber a fragilidade de seus sentimentos, magoando-os, sem demonstrações de afeto ou envolvimento emocional. <br />`,

                  `Essa posição de Marte indica uma pessoa cujas iniciativas serão voltadas principalmente em prol da família e do lar. Possui senso de liderança e autoridade com a família e age com firmeza dentro do ambiente familiar.<br /><br />
                  Pode ter profissões relacionadas com atividades públicas ou voltadas para o conforto do lar e da mulher. A emotividade torna essa pessoa suscetível às críticas, às quais pode reagir de maneira emocional.<br /><br />
                  Esta posição do planeta não é muito favorável à expressão da libido e por essa razão pode buscar prazeres e expressões mais emocionais e sentimentais. Tem boa fertilidade.<br /><br />
                  É preciso cuidado com disputas domésticas, pois pode se expressar de forma autoritária com seus parentes e familiares.<br /><br />
                  Existe o perigo de se envolver em acidentes domésticos. Cuidado também com problemas digestivos e dores de estômago. <br />`,

                  `O nativo pode contar com o bom humor. É sensível, religioso, complacente e com opiniões cambiantes.<br /><br />
                  Pode se destacar em ocupações agrícolas ou em negócios imobiliários. Também nas atividades artísticas: poesia, música, belas artes ou na cozinha e na restauração.<br /><br />
                  Essa posição de Júpiter indica riqueza, mas na última parte da vida, assim como a possibilidade de receber heranças.<br /><br />
                  É preciso cuidado para não se deixar levar pela sensibilidade em questões monetárias. Desta forma, evita perder dinheiro.<br /><br />
                  Um dos seus maiores passatempos é passar horas no seu lar com a família, ouvindo música ou descansando.<br /><br />
                  Por vezes esta posição indica possuir uma casa grande, ampla, com muita gente. Pode ser um excelente anfitrião, aficionado pelas reuniões em lugares onde possa desfrutar da comida e da bebida.<br /><br />
                  Gosta da vida social (restaurantes, bares, hotéis, etc.). Pode se beneficiar através da ajuda de parentes ou de associações com mulheres. <br />`,

                  `Saturno em Câncer pode provocar inibições na manifestação das emoções, que provavelmente resultam em afastamento da família.<br /><br />
                  Este isolamento emocional dentro do cenário doméstico pode conduzir algumas reações neuróticas.<br /><br />
                  O ambiente familiar inicial e os relacionamentos com os pais algumas vezes são frios, austeros ou cercados de problemas.<br /><br />
                  Os nativos podem ficar com cicatrizes emocionais e inibições. Podem ocultar seus sentimentos para preservar a sua dignidade.<br /><br />
                  Saturno em Câncer pode indicar dificuldades na estabilidade e na segurança da vida familiar.<br /><br />
                  Embora estas pessoas lutem para ter o seu próprio lar e propriedades, podem passar por algumas dificuldades financeiras e tensão no lar.<br /><br />
                  A sensibilidade emocional e a necessidade de aprovação pode forçar algumas vezes a construir uma couraça ao redor de si mesma, o que pode inibir a manifestação do verdadeiro calor nos seus relacionamentos pessoais.<br /><br />
                  É preciso observar se há má digestão dos alimentos ou um lento metabolismo corporal, que podem provocar excesso de peso e retenção de água nos tecidos.<br /><br />
                  Em outros casos, pode haver subnutrição, resultando em uma aparência ossuda. É preciso cuidado também com a hipersensibilidade emocional, atitudes defensivas ou ligações muito fortes aos bens materiais.<br /><br />
                  As pessoas com Saturno em Câncer, apesar disso, levam muito a sério as responsabilidades familiares. A necessidade de respeito ao indivíduo e sua família é sentida profundamente. <br />`,

                  `Urano no signo de Câncer indica uma geração de pessoas que buscam liberdade e excitação por intermédio da expressão emocional.<br /><br />
                  Elas terão ideias avançadas a respeito do lar e da vida familiar. Procuram independência de uma autoridade parental rígida, preferem ser amigos dos seus pais.<br /><br />
                  Mas, quando deixam o lar, certificam se de que podem voltar se o novo território que estão explorando for insustentável.<br /><br />
                  Muitos dos nascidos entre Junho de 1949 e Junho de 1956, que têm Urano em Câncer, deixaram os seus lares para terem mais liberdade do que a permitida na vida familiar.<br /><br />
                  Os nativos com Urano em Câncer administram os seus lares de maneira incomum. Gostam de arquitetura moderna ou construções de estilo diferente.<br /><br />
                  Seus lares podem ter muitos aparelhos eletrônicos e uma decoração admirável. Gostam de usar sua casa como local de encontro de amigos e atividades em grupo.<br /><br />
                  Também podem se interessar por tipos de vida comunitária ou arranjos familiares fora da tradicional família nuclear. Em muitos casos, os seus amigos se tornam membros da família.<br /><br />
                  Com Urano em Câncer, há uma considerável sensibilidade psíquica. É provável que atividades ocultas façam parte do cenário doméstico.<br /><br />
                  No seu pior, pode haver um temperamento excêntrico e súbitas mudanças de humor. <br />`,

                  `Indica uma geração possuidora de fortes laços psíquicos com o lar, a terra e a família. Pessoas muito idealistas, emocionalmente sensíveis, patriotas e superprotetor para com os outros.<br /><br />
                  Também tendem a ser religiosas, mas de uma forma emocional. Se Netuno estiver bem situado e com bons aspectos, pode haver tendências mediúnicas e faculdades psíquicas.<br /><br />
                  Com aspectos desarmônicos, o carácter se torna pessimista e autoindulgente. Podem existir dificuldades no lar por causa da mãe.<br /><br />
                  Como Câncer rege a mente inconsciente, quando Netuno ingressou neste signo apareceu Sigmund Freud difundindo as bases da psicanálise moderna, em 1902. <br />`,

                  `Câncer significa lar, família, clã, tradição, nação. Esta geração passou através da completa destruição e transformação de tudo o que estes conceitos significam. A permanência de Plutão em Câncer contrariou o esquema tradicional familiar.<br /><br />
                  Os nativos dessa geração, entre os quais é frequente se verificar intensas uniões e cega obediência à família e à nação, podem sofrer uma trágica desilusão quando, ao longo da sua vida, se ver separados, tanto de uma como de outra.<br /><br />
                  Plutão em Câncer começou com a Primeira Guerra Mundial e permaneceu até à Segunda. Esta geração sabe muito a respeito do lado destrutivo do planeta.<br /><br />
                  Por isso, não é estranho encontrar nativos com uma forte inclinação para o passado, para a protetora imagem convencional do «lar», mais do que para enfrentar mudanças e revoluções. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Ganhar maturidade e autoridade sem perder a conexão com a criança interior e o mundo afetivo:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Câncer traz memórias de muito envolvimento familiar, susceptibilidade e imaturidade emocional. Foi sensível, dependente, carente, inocente, inseguro e imaturo. Pode ter priorizado a vida em família e os cuidados com o lar, em detrimento de uma vida profissional.<br /><br />
                  O espírito é brincalhão e amoroso. É um bom exemplo de como manter contato com a criança interior. Mas também é fechado por causa de sua extrema sensibilidade, de sua necessidade de segurança e proteção. Valoriza muito o seu espaço e o seu cantinho.<br /><br />
                  Traz tendência para procurar o reconhecimento dos pais ou da família, ao ponto de não reconhecer seu próprio valor. Há tendência também para haver rejeição emocional por parte da família, ou pode haver conflito entre os seus próprios desejos e os de seus familiares.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) no signo de Capricórnio, deve aprender a assumir responsabilidades. Vencer seus medos e enfrentar o mundo dos adultos de cabeça erguida, sem perder o contato com a sua criança interior.<br /><br />
                  O crescimento acontece quando se eleva acima das desarmonias familiares. Sai da postura infantil, enfrenta e dizer o que pensa, sente e respeita os seus próprios sentimentos.<br /><br />
                  Para tanto, é preciso trabalhar o apego e as dependências com a mãe ou com outros membros da família. Ao longo da vida podem acontecer separações da família, mesmo logo na infância. Pode haver desconforto emocional que leve à autonomia.<br /><br />
                  Deve cultivar o empreendedorismo, aprender a ser independentes e a contribuir para a sociedade.<br /><br />
                  Dedicar-se a outras esferas da vida além do envolvimento familiar. Cultivar a liderança e seguir para o desconhecido, contribuirá para a sua maturidade e a realização de seu papel no mundo. <br />`,

                  `A felicidade é, essencialmente, alcançada no lar ou em qualquer campo de atividade bem definida e focalizada. Mas, o sentimento de lar poderá ser estendido para uma nação, para uma classe social ou para uma organização religiosa.<br /><br />
                  A satisfação normal e a facilidade de operação encontram-se onde são seguidos pontos de vista pessoais e particulares; a iluminação, porém, é alcançada por meio da identificação pessoal com algum todo maior, social ou espiritual.<br /><br />
                  Exemplos: Karl Marx, Mary B. Eddy, Shelley, o czar Nicolau II, Adolph Hither – e os mapas nacionais da Inglaterra e dos Estados Unidos (mapa com Sagitário ascendendo). <br />`,

                  `A ferida psicológica mais profunda está ligada ao relacionamento com a mãe na infância. Pode ter sofrido muito, devido a traumas, separações repentinas ou por ver que seu modo de expressar não era aceito por ela. Como resultado, tem dificuldade de aceitar as separações ao longo da vida.<br /><br />
                  É muito suscetível a qualquer tipo de reprovação, teme se abrir e buscar o apoio dos outros. Contudo, tem o dom de compreender a fragilidade e o sofrimento alheio, nutrindo emocionalmente aqueles que precisam de sua ajuda.<br /><br />
                  Sabe a importância que o carinho e a família têm na vida da pessoa. Entretanto, podem não ter tido a família estruturada de que precisava ou ter se sentido cuidado.<br /><br />
                  É preciso curar essa ferida oferecendo a sua compreensão, ao invés de desejar um novo pai ou mãe em sua vida. Precisará aprender a perdoar.<br /><br />
                  É provável que seus pais sejam uma figura com a qual você ache difícil se relacionar. Seja por lhe causar desapontamento, tristeza, conflitos, ou simplesmente por você não conhecer seu pai ou mãe, porque talvez tenha morrido ou abandonado o lar durante sua infância.<br /><br />
                  Esses problemas podem tomar as mais variadas formas: pode haver desejo incestuoso, mesmo sem haver contato sexual explícito, o que pode levar a procurar sempre pares inacessíveis. Talvez o pai ou mãe tenha criado o filho sozinho (e agora você pode procurar a mãe ou o pai numa parceria).<br /><br />
                  Pode haver uma fixação no pai ou mãe ou do pai/mãe pelo filho e esse pai ou mãe se torna um Deus que deve ser sempre obedecido. Assim qualquer tentativa de fazer valer seus desejos diferentes dos do pai ou da mãe acarretam muita culpa, por estar \"traindo\" esse pai ou mãe.<br /><br />
                  Você pode desprezar seus pais por eles serem ignorantes (ou por qualquer outro motivo) e estender esse desprezo para outras pessoas dificultando seus relacionamentos.<br /><br />
                  Você pode ter sofrido traumas e súbitas separações de seus pais, dando origem a uma sensação de desorientação e a uma incapacidade de entender o que realmente aconteceu.<br /><br />
                  Poderá se culpar por tudo isso e se tornar hipersensível a qualquer tipo de censura ou reprovação. Essas culpas poderão contaminar sua posição de pai agora na vida adulta, fazendo você sempre se sentir em cheque.<br /><br />
                  Sua segurança básica é fraca, você gostaria muito de voltar à segurança e aconchego do útero materno. Você, mais que as outras pessoas, está disposto a sacrificar seus próprios sentimentos e potencialidade com o intuito de pertencer a outra pessoa ou a algum grupo.<br /><br />
                  Mas acaba sempre se sentindo dentro de uma prisão, pois essa entrega em troca de aconchego impede que você continue crescendo, então você deve sair e buscar outro útero que o acolha. Mas a solução não é essa. Você deve buscar dentro de si mesmo toda a segurança de que necessita.<br /><br />
                  Lembre-se que por mais fortes que as outras pessoas pareçam, elas também são apenas bebês no útero do universo e são tão frágeis quanto você.<br /><br />
                  Você pode se revelar muito sensível ao sofrimento alheio e estabelecer com os outros uma relação empática. Na sua presença as pessoas podem ter facilidade em expressar seus sentimentos. Você tem o dom de nutrir emocionalmente os outros, aceitá-las em suas fraquezas, sem causar-lhes qualquer ameaça.<br /><br />
                  Como você se sente muito confortável nas relações do tipo mãe/filho com as pessoas, talvez sinta dificuldade em outros tipos de relação.<br /><br />
                  A separação também é difícil para você, pois precisa sentir-se necessário. Pode até recorrer a chantagens emocionais sutis a fim de ficar ligado às pessoas, como um bebê à sua mãe.<br /><br />
                  Não é fácil deixar os outros adquirirem sua independência. Analise o quanto esse comportamento atrapalha os seus relacionamentos.<br /><br />
                  Você pode se sentir tão carente e vulnerável que teme abrir-se e receber apoio dos outros, ficando encolhido no interior de sua concha protetora. Você pode sentir como fome suas necessidades emocionais, por isso você é impelido a comer quando está carente.<br /><br />
                  É provável que você tenha procurado no primeiro relacionamento uma parceira/mãe, pode ter invejado o carinho que seus filhos recebem da parceira.<br /><br />
                  Após uma separação dolorosa, no entanto, você é capaz de recuperar segurança interior, estabelecer um contato muito bom consigo próprio, ser intuitivo, saber, mesmo à distância, o que acontece com seus entes queridos.<br /><br />
                  Se você veio de uma família que o magoava através de provocações, caçoadas, se as suas demonstrações emocionais foram censuradas, você deve ter aprendido a exercer um controle muito forte sobre suas emoções, o que pode levá-lo a explosões periódicas e a gastar muita energia psíquica, o que o impede de ser mais feliz.<br /><br />
                  Você deve resgatar a franqueza e a naturalidade da criança sensível que tem dentro de si. Deve descobrir a criança vulnerável e necessitada que existe em você e cuidar dela. A procura do útero acolhedor finalmente terminará quando conseguir se transformar em sua própria mãe amorosa.<br /><br />
                  Você tem muita compaixão pelas comunidades sofredoras e se sentirá recompensado emocionalmente caso possa ajudá-los de algum modo, sente um interesse pessoal por grupos discriminados pela raça ou religião que possuem, ou que tenham passado por situações de guerra ou destruição de suas casas ou países, ou simplesmente pessoas que estão passando por situações difíceis por qualquer razão.<br /><br />
                  Você sabe o que elas sentem como se tivesse passado por situação semelhante e procura ajudar de algum modo para sentir-se melhor. Atividades que levem a melhorar o estado de nosso planeta são favoráveis para você.<br /><br />
                  Exemplos: reciclagem de materiais, coletas seletivas de lixo, ecologia, melhoria das condições dos rios e mares, saneamento ou recuperação de áreas já danificadas na natureza, médico ou curador usando tratamentos de saúde naturais com plantas, minerais, música e cores. Atividades que preservam não só o planeta como os seres humanos. <br />`,

                  `O parceiro ideal é aquele que tenha interesse em construir um lar, uma família, uma casa. Que seja sensível e carinhoso. Podem ser pessoas protetoras, intimistas, caseiras ou familiares.<br /><br />
                  De alguma forma, o relacionamento é marcado pelo zelo e pela dedicação. Um dos parceiros pode servir como pai ou mãe.<br /><br />
                  Mas também podem ser pessoas que necessitam de muitos cuidados ou muito carentes. O casamento é vivido em clima acolhedor, a menos que suas tendências vingativas sejam estimuladas.<br /><br />
                  Indica uma esposa que será muito apegada a seu lar (no mapa feminino). Impacto do meio infantil inicial sobre o tipo de escolha afetiva e de casamento. <br />`,

                  `Mercúrio retrógrado nesta casa indica alguém cuja mentalidade era muito infantil e voltada para o passado. Muito intuitivo, mas extremamente emotivo, o nativo era incapaz de qualquer objetividade.<br /><br />
                  Não conseguia ter um distanciamento das suas emoções para fazer julgamentos serenos. Sedento por segurança emocional e familiar ficava sempre a reboque das opiniões da família.<br /><br />
                  Na vida atual pode manifestar notáveis talentos para compreender as crianças. Mas deve crescer e amadurecer combatendo e dominando suas turbulências dramáticas e afetivas. <br />`,

                  `Em Câncer, signo da tradição e da família, Vênus quando está retrógrado demora-se na infância e na imaturidade de um comportamento mais exigente de atenções do que generoso.<br /><br />
                  Muito dependente das suas experiências anteriores, o nativo procura reconstituir sua família de uma encarnação precedente.<br /><br />
                  Essa posição de Vênus indica um \"complexo de Édipo\" tanto mais difícil de liquidar quanto é herdado de uma vida passada.<br /><br />
                  O nativo se esforça para reconstituir sua vida presente sobre o modelo das suas infâncias passadas: quer amar sem correr riscos.<br /><br />
                  Poderá se libertar quando amadurecer as suas emoções e assumir a fundo a sua paternidade (ou maternidade). <br />`,

                  `O dinamismo do nativo está bloqueado por sua emotividade. É muito infantil, se vê como uma criança.<br /><br />
                  A motivação profunda de suas iniciativas e atitudes é procurar proteção. É atraído por pessoas mais velhas do sexo oposto.<br /><br />
                  Tendo-se refeito mal dos traumas da juventude (vivenciados em vidas passadas), tende a recriar o mundo à imagem de sua família passada.<br /><br />
                  Deve agora amadurecer, melhorar o equilíbrio e o controle emocional para obter harmonia no lar. <br />`,

                  `A palavra-chave de Júpiter é \"expansão\". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  O nativo foi ingênuo em vidas passadas. Tomou-se inocentemente por uma garota bem simples, ou por um bom moço sem complicações, sem ter a menor noção dos abismos de perversidade contidos em todo o ser humano!<br /><br />
                  A sua ideia da verdade é mais emocional do que objetiva. Permanece por muito tempo sequioso de segurança afetiva e passa por conflitos interiores que é incapaz de analisar.<br /><br />
                  Nesta vida deve amadurecer. Superar carências e emoções infantis para viver num plano mais prático, realista e objetivo. <br />`,

                  `O nativo progride e amadurece lentamente, pois está muito apegado às suas emoções passadas.<br /><br />
                  A sua intensa necessidade de proteção o faz procurar contato com uma figura paternal, por quem pode sentir uma afeição apaixonada e exclusiva.<br /><br />
                  Em vidas passadas pode ter vivido sob o abrigo, a proteção ou a autoridade de um antigo pai, patrão ou chefe. Na vida atual tem medo de sair da concha e teme não ser aceito pelos outros.<br /><br />
                  Só se interessa pelas pessoas mais jovens na medida em que possa ligá-las ao passado, à sua infância, ou à pessoa que ama como pai.
                  Pode ser incapaz de apreciar algumas coisas sozinho, e por isso mesmo é preciso novas referências!<br /><br />
                  O seu carma atual é amadurecer as emoções, ganhar autossuficiência, descobrir em si mesmo a segurança, a estrutura, a responsabilidade. <br />`,

                  `Esta posição planetária indica certa desarmonia afetiva. O nativo fica dilacerado entre a sua necessidade infantil de proteção materna e a busca uraniana da liberdade.<br /><br />
                  Toda vez que tenta escapar da dominação familiar, para enfim se libertar, experimenta um certo sentimento de frustração. Retorna, então, à família (não sem perceber que a liberdade lhe ensinou muito!).<br /><br />
                  Há tendência de reprimir sentimentos e emoções. É preciso desenvolver autonomia afetiva, para que seus sentimentos se desenvolvam.<br /><br />
                  O seu carma é aprender na vida atual que a afeição aos seus familiares e às suas relações íntimas não deve impedi-lo de crescer. O nativo deve conquistar de qualquer maneira a liberdade de que necessita. <br />`,

                  `Esta posição planetária indica um carma familiar no qual o lar se dissolve sem que o interessado compreenda muito bem por quê: desaparecimento dos pais, fuga de um dos cônjuges, escapadas ou fuga dos filhos.<br /><br />
                  O nativo se apegava choramingando a uma situação sem esperança, assumindo uma atitude de vítima (que não o faz progredir nada).<br /><br />
                  Foi assim que se viram viúvas ou mães que haviam perdido um filho instalar-se para o resto da vida num luto permanente (particularmente depois da Grande Guerra de 1914-1918).<br /><br />
                  Ou ainda, pessoas abandonadas pelo cônjuge, que se recusam a tentar compreender por que, dizendo: \"Quanto a mim, sempre fui um perfeito esposo (ou esposa)!\"<br /><br />
                  Netuno retrógrado em Câncer indica um carma no qual o nativo deveria aprender a reconsiderar seus laços familiares sem sentimento de posse.<br /><br />
                  Aprender a amar os seus com desprendimento, procurar as razões espirituais e cármicas de seu afastamento. Só uma atitude espiritual dinâmica pode ajudar a liquidar os carmas de Netuno retrógrado. <br />`,

                  `Plutão em Câncer leva o nativo a refletir mais sobre a vida privada e familiar. Os primeiros líderes da ecologia, pertencentes a esta geração, questionam se o progresso técnico realmente melhora a qualidade de vida, à qual são mais sensíveis do que seus pais.<br /><br />
                  A passagem de Plutão em Câncer coincidiu com um aumento do divórcio. Mas o casamento, tal como era concebido no século XIX, tinha dado margem a tais abusos de poder e encoberto tantos dramas (em nome dos princípios sacrossantos) que era fatal chegar-se a uma rejeição dele, ou então a uma explosão: o papel de Plutão é o de eliminar as escórias.<br /><br />
                  Assim, o nativo marcado por Plutão retrógrado em Câncer muitas vezes enfrenta, é verdade, um divórcio. O desmoronamento de seu lar é vivido como um renascimento. O trauma afetivo libera novas forças emocionais, que até ali tinham estado bloqueadas.<br /><br />
                  Entretanto, o choque do divórcio só é salutar se o nativo tiver realmente renunciado aos erros anteriores. Infelizmente, Câncer é signo de lembrança, de apego; não aprecia a mudança.<br /><br />
                  As crises familiares são, portanto, particularmente frequentes com esta posição plutoniana. Uma chave para se libertar: a busca das vidas passadas.<br /><br />
                  Ela permitirá aos nativos descobrir que, muito provavelmente, seu cônjuge, assim como seus pais e seus filhos, já o foram numa outra vida!<br /><br />
                  Simbolizando Câncer a família, e Plutão o \"retorno das coisas\", trata-se aqui da volta das entidades de outrora a esta vida. Plutão retrógrado indica mais particularmente a volta do mesmo lar e dos mesmos filhos.<br /><br />
                  Nem sempre se trata de uma dívida - mas de pessoas que se amaram e se reencarnaram juntas para se ajudar mutuamente.<br /><br />
                  Tal é o caso dos irmãos gêmeos, por exemplo, segundo a Tradição, que resolvem nascer juntos para não serem separados. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  A ferida psicológica mais profunda está ligada ao relacionamento com a mãe na infância. Pode ter sofrido muito, devido a traumas, separações repentinas ou por ver que seu modo de expressar não era aceito por ela.<br /><br />
                  Como resultado, tem dificuldade de aceitar as separações ao longo da vida, é muito suscetível a qualquer tipo de reprovação e teme abrir-se e buscar o apoio dos outros.<br /><br />
                  Contudo, tem o dom de compreender a fragilidade e o sofrimento alheio, nutrindo emocionalmente aqueles que precisam de sua ajuda.<br /><br />
                  Sabe a importância que o carinho e a família tem na vida da pessoa. Entretanto, podem não ter tido a estruturada de que precisava ou ter se sentido cuidado.<br /><br />
                  Precisam curar essa ferida oferecendo a sua compreensão, ao invés de desejar um novo pai ou mãe em sua vida. Precisará aprender a perdoar.<br /><br />
                  É provável que seus pais sejam uma figura com a qual você ache difícil se relacionar, seja por lhe causar desapontamento, tristeza, conflitos, ou simplesmente por você não conhecer seu pai ou mãe, porque talvez tenha morrido ou abandonado o lar durante sua infância.<br /><br />
                  Esses problemas podem tomar as mais variadas formas: pode haver desejo incestuoso, mesmo sem haver contato sexual explícito, o que pode levar a procurar sempre pares inacessíveis; talvez o pai ou mãe tenha criado os filhos sozinho (a), e agora você pode procurar a mãe numa parceira.<br /><br />
                  Pode haver uma fixação no pai ou mãe ou de pai e mãe pelo filho, e esse pai ou mãe se torna um Deus que deve ser sempre obedecido, e qualquer tentativa de fazer valer seus desejos diferentes dos do pai ou da mãe acarretam muita culpa.<br /><br />
                  Por estar \"traindo\" esse pai ou mãe; você pode desprezar seus pais por eles serem ignorantes (ou por qualquer outro motivo) e estender esse desprezo para outras pessoas dificultando os seus relacionamentos.<br /><br />
                  Você pode ter sofrido traumas e súbitas separações de seus pais, dando origem a uma sensação de desorientação e a uma incapacidade de entender o que realmente aconteceu.<br /><br />
                  Poderá se culpar por tudo isso, e se tornar hipersensível a qualquer tipo de censura ou reprovação. Essas culpas poderão contaminar sua posição de pai agora na vida adulta, fazendo você sempre se sentir em cheque.<br /><br />
                  Sua segurança básica é fraca, você gostaria muito de voltar à segurança e aconchego do útero materno. Você, mais que outras pessoas, está disposto a sacrificar seus próprios sentimentos e potencialidade com o intuito de pertencer a outra pessoa ou a algum grupo.<br /><br />
                  Mas acaba sempre se sentindo dentro de uma prisão, pois essa entrega em troca de aconchego impede que você continue crescendo, então você deve sair e buscar outro útero que o acolha, mas a solução não é essa.<br /><br />
                  Você deve buscar dentro de si mesmo toda a segurança de que necessita. Lembre-se que por mais fortes que as outras pessoas pareçam, elas também são bebês no útero do universo, e são tão frágeis quanto você.<br /><br />
                  Você pode se revelar muito sensível ao sofrimento alheio e estabelecer com os outros uma relação empática. Na sua presença as pessoas podem Ter facilidade em expressar seus sentimentos.<br /><br />
                  Você tem o dom de nutrir emocionalmente os outros, aceitá-las em suas fraquezas, sem causar-lhes qualquer ameaça.<br /><br />
                  Como você se sente muito confortável nas relações do tipo mãe/filho com as pessoas, talvez sinta dificuldade em outros tipos de relação.<br /><br />
                  A separação também é difícil para você, pois precisa sentir-se necessário, e pode até recorrer a chantagens emocionais sutis a fim de ficar ligado às pessoas, como um bebê à sua mãe.<br /><br />
                  Não é fácil deixar os outros adquirirem sua independência. Analise o quanto esse comportamento atrapalha seus relacionamentos. Você pode se sentir tão carente e vulnerável que teme abrir-se e receber apoio dos outros, ficando encolhido no interior de sua concha protetora.<br /><br />
                  Acaba passando fome diante de um banquete. Você pode sentir como fome suas necessidades emocionais, por isso você é impelido a comer quando está carente.<br /><br />
                  É provável que você tenha procurado no primeiro relacionamento uma parceira/mãe, pode ter invejado o carinho que seus filhos recebem da parceira.<br /><br />
                  Após uma separação dolorosa, no entanto, você é capaz de recuperar segurança interior, estabelecer um contato muito bom consigo mesmo, ser intuitivo, saber, mesmo à distância, o que acontece com seus entes queridos.<br /><br />
                  Se você veio de uma família que o magoava através de provocações, caçoadas, se suas demonstrações emocionais foram censuradas, você deve ter aprendido a exercer um controle muito forte sobre suas emoções, o que pode levá-lo a explosões periódicas e a gastar muita energia psíquica, o que o impede de ser mais feliz.<br /><br />
                  Você deve resgatar a franqueza e a naturalidade da criança sensível que tem dentro de si. Deve descobrir a criança vulnerável e necessitada que existe em você e cuidar dela. A procura do útero acolhedor finalmente terminará quando conseguir se transformar em sua própria mãe amorosa.<br /><br />
                  Você tem muita compaixão pelas comunidades sofredoras e se sentirá recompensado emocionalmente caso possa ajudá-los de algum modo.<br /><br />
                  Sente um interesse pessoal por grupos discriminados pela raça ou religião que possuem, ou que tenham passado por situações de guerra ou destruição de suas casas ou países, ou simplesmente pessoas que estão passando por situações difíceis por qualquer razão.<br /><br />
                  Você sabe o que elas sentem como se tivesse passado por situação semelhante e procura ajudar de algum modo para sentir-se melhor.<br /><br />
                  Atividades que levem a melhorar o estado de nosso planeta são favoráveis para você, como por exemplo, reciclagem de materiais, coletas seletivas de lixo, ecologia, melhoria das condições dos rios e mares, saneamento ou recuperação de áreas já danificadas na natureza.<br /><br />
                  Pode encontrar a sua felicidade em profissões como médico ou curador usando tratamentos de saúde naturais com plantas, minerais, música e cores, e muitas outras atividades que preservam não só o planeta como os seres humanos. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Esta é uma esposa que será muito apegada a seu lar (no mapa feminino). A menos que suas tendências vingativas sejam estimuladas. Impacto do meio infantil inicial sobre o tipo de escolha afetiva e de casamento.<br /><br />
                  Costuma valorizar as suas alegrias afetivas íntimas. Decoração do lugar onde mora com o gosto bem personalizado. Relação cármica entre uma união desta vida atual e outra, de uma vida passada.<br /><br />
                  Mas atenção ao considerar esta possibilidade! No mapa de um homem, escolha de uma esposa com características muito maternais e protetoras, mas verificar a posição e os aspectos de sua Lua Natal. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução: </strong>`,

                  `Corresponde à memória mais recente, a família, a intimidade, o mundo privado e o modo como a privacidade é sentida. A casa é o refúgio da sua imaturidade. <br /><br />`,

                  `<strong>2º nível de evolução: </strong>`,

                  `A memória se torna mais vasta e abrangente. A pátria e a terra onde nasce são vivenciadas como uma família maior. Valoriza suas raízes coletivas, históricas e socioculturais. <br /><br />`,

                  `<strong> 3º nível de evolução: </strong>`,

                  `Desenvolve o equilíbrio emocional, supera inseguranças e temores. Suas qualidades potenciais que antes estavam submersas no inconsciente são compreendidas e consciencializadas. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Ganhar maturidade e autoridade sem perder a conexão com a criança interior e o mundo afetivo: </strong>`
            ]
      },
      {
            title: `leão</strong>`,
            text: [
                  `Leão é um signo de Fogo, está relacionado ao entusiasmo e poder de liderança. Quem nasce com o Sol em Leão é portador de uma força comparável aos planetas que giram em volta do Sol.<br /><br />
                  Suas atitudes refletem seu potencial luminoso, confiante e criativo. Seu reino é o reino do coração, das emoções e dos sentimentos dramáticos.<br /><br />
                  O leonino é carismático, grandioso, conta com magnetismo pessoal. Atrai para si pessoas ansiosas por vida e luz.<br /><br />
                  Conta também com autoconfiança, generosidade, intuição, senso do comando e de autoridade. Sabe impor sua vontade e não deixa dúvidas sobre seus desejos.<br /><br />
                  O Sol em Leão predispõe o nativo para as artes visuais (cinema, teatro, estética, moda, televisão, etc.) e para a política.<br /><br />
                  Há grande probabilidade de obter êxito e sucesso através de suas qualidades de liderança. O Leonino é namorador e gosta de conquistas amorosas.<br /><br />
                  É orgulhoso, só revela o lado positivo da sua personalidade, o que lhe permite apregoar a sua aura positiva e ser considerado um vencedor.<br /><br />
                  Mesmo com tanta força pessoal, amolece com facilidade, por conta de um coração generoso. Desde que lhe prestem as devidas homenagens, é claro.<br /><br />
                  Na saúde, deve prestar especial atenção às suas partes vulneráveis: o coração, as artérias e as veias, o sangue e a circulação sanguínea, as costas, a coluna vertebral, o plexo solar, o baço e o pâncreas.<br /><br />
                  Deve também prestar atenção especial aos olhos.<br /><br /> Apesar da sua enorme resistência, pode acontecer que o fique doente. Neste caso, tende a ficar impaciente e quer curar-se o mais depressa possível.<br /><br />
                  É mais inquieto do que quer deixar transparecer e a energia que despende para esconder as suas preocupações pode minar sua saúde.<br /><br />
                  O Sol em Leão indica um orgulho exacerbado. A natureza dominadora de Leão pode gerar dificuldades, tempestades decorrentes da própria força.<br /><br />
                  Devem controlar a autoexigência e a vaidade excessiva, a prepotência, o medo de perder e de errar.<br /><br /> Seu símbolo é associado à luz, portanto, o obscuro gera temor.<br /><br />
                  Devem aprender a olhar e investigar o que existe por trás dos refletores para que possam complementar sua personalidade forte com mais fé e menos medo de falhar.<br /><br />
                  O equilíbrio está no signo oposto, Aquário, que traz as lições de humildade, fraternidade, altruísmo, trabalho em equipe.<br /><br />
                  Para tal, é necessário descer do seu próprio trono, servir à coletividade e conceder a liberdade na medida justa. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Leão indica uma pessoa emocionalmente orgulhosa, com talento para artes dramáticas.<br /><br />
                  Com frequência procura estar em evidência, pois há necessidade inconsciente de sentir-se admirado e apreciado. Quem tem a Lua em Leão precisa de romance e afeto.<br /><br />
                  O nativo pode gostar de crianças, festas, arte, esportes, lazer e todos os tipos de divertimento.<br /><br />
                  Conta com disposição para se apaixonar, seja por uma pessoa ou por um projeto, abrindo o coração quando afetado pela sintonia do encontro.<br /><br />
                  As emoções são intensas e algumas vezes agem com necessidade de dramatizar os sentimentos.<br /><br />
                  Tem grande poder de expressão, pode usar seu brilho e seu magnetismo para impor sua vontade. Há tendência para o egocentrismo e, consequentemente, a teimosia.<br /><br />
                  Tem uma tendência também para dominar os outros e especialmente aqueles que convivem no seu cenário doméstico.<br /><br />
                  Pode até aparentar ser uma fortaleza quando, na verdade, procura esconder as suas fragilidades.<br /><br />
                  Algumas vezes seu desejo de ser adulado e mimado se manifesta como vaidade infantil. A tendência à dramatização seria insuportável se não fosse sincero em seus esforços de autoaperfeiçoamento.<br /><br />
                  A sua necessidade de amar e ser amadas é um impulso emocional saudável e na maioria dos casos contribui para um temperamento alegre e uma expressão construtiva.<br /><br />
                  Quem tem esta posição da Lua deseja que os seus filhos estejam sempre bem arrumados e que o seu lar seja uma exposição de beleza e arte.<br /><br />
                  O desafio é aprender a dominar seu orgulho, cultivar um coração generoso, aprender a ceder e a reconhecer quando está errado. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  O ascendente em Leão está em busca da sua segurança na expressão de sua própria identidade.<br /><br />
                  Quem tem este ascendente entra na vida com grandes passadas: a expressão pessoal é calorosa, quente, entusiasmada, digna e poderosa. A necessidade de protagonismo é imperativa e quase constante.<br /><br />
                  O mundo, os outros e as circunstâncias em geral podem ser vistos como um grande palco onde a individualidade vai manifestar-se de forma brilhante e poderosa.<br /><br />
                  A pessoa com este ascendente tende a dominar as situações com a sua projeção carismática e sua autopromoção.<br /><br />
                  O cuidado deve ser para não se tornar autoritário, egocêntrico, orgulhoso ou arrogante. Algumas vezes evita enfrentar situações ou provas para não vivenciar a sensação de erro.<br /><br />
                  <strong> É importante dar vazão ao seu potencial criativo e ao seu poder pessoal para não se tornar amargurado ou cínico por não ser reconhecido.</strong><br /><br />
                  Ao longo da vida, esta forte expressão tende a ser posta em prova e a se modificar. Na maturidade, poderá deixar de encarar a vida como um grande palco e passar a vê-la como uma oportunidade criativa.<br /><br />
                  Assim, as manifestações pomposas e gratuitas dão lugar a uma atitude verdadeiramente generosa, desinteressada e vitalizante.<br /><br />
                  Poderá irradiar calor generoso, cura e energia vital para aqueles que merecem. Leão é associado ao coração, ao centro do corpo, com grande potencial amoroso.<br /><br />
                  O aspecto físico ligado a este ascendente e associado a uma atitude naturalmente altiva, quase régia, e a uma cabeleira bonita, volumosa, tipo "juba de leão".<br /><br />
                  Como os olhos são vivos e brilhantes as suas atitudes poderosas costumam chamar a atenção. <br />`,

                  `Mercúrio no signo de Leão indica uma mente que possui uma vontade forte e um propósito firme.<br /><br />
                  Os nativos com esta posição são capazes de concentração dirigida, o que confere energia e força de vontade. Gosta de ser considerado como uma autoridade nas áreas em que escolheu para atuar.<br /><br />
                  São ajudados por uma forma de discurso dramática e convincente. Porém, se levada a extremos, essa inclinação pode criar um excessivo orgulho intelectual e arrogância.<br /><br />
                  A autoconfiança intelectual indicada por Mercúrio em Leão favorece uma atitude positiva para enfrentar e solucionar problemas.
                  Contudo, pode haver uma tendência para lidar com as coisas em termos gerais, amplos, ignorando os detalhes.<br /><br />
                  Pode também existir tendência a ignorar as coisas que não se relacionam com o foco de interesse imediato. Como Leão é um signo fixo, as opiniões são formadas lentamente e modificadas com relutância.<br /><br />
                  Os nativos possuem continuidade de planejamento e propósitos, o que lhes oferece capacidade executiva. Há também habilidade para o ensino e o trabalho no desenvolvimento intelectual das crianças.<br /><br />
                  O teatro, investimentos, Bolsa de Valores, educação, entretenimento e atividades artísticas são prováveis áreas de interesse especial.<br /><br />
                  Esta posição de Mercúrio também pode combinar as viagens de passeio com as viagens de trabalho. <br />`,

                  `O nativo com Vênus em Leão é muito ardente nas relações amorosas e precisa da admiração do seu parceiro para se sentir realmente amado.<br /><br />
                  O seu afeto é sincero, mas requer uma atenção sem limite, mimos e presentes que o faça sentir exclusivo e único. Quem nasce com esse posicionamento no mapa gosta de brilhar.<br /><br />
                  Possui magnetismo para encantar, elogiar e seduzir. É caloroso e vibrante. Pode iluminar também nossos parceiros e amigos, enaltecendo-os.<br /><br />
                  Mas se o seu parceiro brilhar mais, o nativo dará um jeito de recuperar o lugar de protagonista na relação.<br /><br />
                  É preciso cuidado com a necessidade de aprovação em todo momento, com a aversão às críticas. Eis aí sua vulnerabilidade.<br /><br />
                  Essa Vênus de Fogo se inflama facilmente, mas também pode se apagar com a mesma rapidez se o outro não conseguir corresponder às altas expectativas.<br /><br />
                  Quem possui essa Vênus sente atração pelo luxo e pelo belo. Apaixona-se por pessoas que demonstram força e autoridade. Não pode amar sem admirar.<br /><br />
                  Pode demonstrar uma vaidade exagerada e gostar demais dos prazeres mundanos, parecendo frívolo e superficial. Exigente, rende-se somente àquele amor que se ajoelhar aos seus pés.<br /><br />
                  Gostam sempre de manter o comando na relação e usam do seu magnetismo para fazer valer suas vontades. Feitas as ressalvas, sua disposição para apaixonar-se, amar e namorar é grande.<br /><br />
                  Quando está apaixonado, se entrega de corpo e alma. Pode dedicar um amor generoso e devotado e fiel, fazendo de tudo para oferecer o melhor de si ao seu parceiro. <br />`,

                  `O nativo com Vênus em Leão é muito ardente nas relações amorosas e precisa da admiração do seu parceiro para se sentir realmente amado.<br /><br />
                  O seu afeto é sincero, mas requer uma atenção sem limite, mimos e presentes que o faça sentir exclusivo e único. Quem nasce com esse posicionamento no mapa gosta de brilhar.<br /><br />
                  Possui magnetismo para encantar, elogiar e seduzir. É caloroso e vibrante. Pode iluminar também nossos parceiros e amigos, enaltecendo-os.<br /><br />
                  Mas se o seu parceiro brilhar mais, o nativo dará um jeito de recuperar o lugar de protagonista na relação.<br /><br />
                  É preciso cuidado com a necessidade de aprovação em todo momento, com a aversão às críticas. Eis aí sua vulnerabilidade.<br /><br />
                  Essa Vênus de Fogo se inflama facilmente, mas também pode se apagar com a mesma rapidez se o outro não conseguir corresponder às altas expectativas.<br /><br />
                  Quem possui essa Vênus sente atração pelo luxo e pelo belo. Apaixona-se por pessoas que demonstram força e autoridade. Não pode amar sem admirar.<br /><br />
                  Pode demonstrar uma vaidade exagerada e gostar demais dos prazeres mundanos, parecendo frívolo e superficial. Exigente, rende-se somente àquele amor que se ajoelhar aos seus pés.<br /><br />
                  Gostam sempre de manter o comando na relação e usam do seu magnetismo para fazer valer suas vontades. Feitas as ressalvas, sua disposição para apaixonar-se, amar e namorar é grande.<br /><br />
                  Quando está apaixonado, se entrega de corpo e alma. Pode dedicar um amor generoso e devotado e fiel, fazendo de tudo para oferecer o melhor de si ao seu parceiro. <br />`,

                  `O nativo é ambicioso, desejoso de poder, liderança, dignidade, luxo e exibicionismo. Está capacitado para as atividades ou tarefas públicas. Serve para mandar ou dirigir.<br /><br />
                  Pode se destacar como diretor, presidente, empresário, chefe ou capataz. As especulações ou investimentos e as atividades financeiras podem render-lhe bons dividendos.<br /><br />
                  Chegará a fazer fortuna se controlar o seu orgulho e os seus excessivos anseios de poder.<br /><br />
                  Gosta de utilizar seu tempo livre praticando esportes ou alguma atividade artística. Possui uma forte constituição física e uma grande vitalidade que inspira confiança e respeito.<br /><br />
                  Atribui grande importância à posição social e às honrarias. No afeto, é profundo, sincero e honesto. <br />`,

                  `Saturno no signo de Leão oferece aos nativos uma necessidade de se sentirem importantes e reconhecidos.<br /><br />
                  Há também um forte desejo de controlar o ambiente. Assim, procuram atingir posições de poder e liderança.<br /><br />
                  Pode haver interesse profissional na educação e na administração das áreas de diversão, negócios e investimentos especulativos.<br /><br />
                  No seu pior, há o perigo de desenvolver atitudes autoritárias ou dogmáticas. A necessidade de defender o ego pode resultar em teimosia e rigidez.<br /><br />
                  Buscando segurança por meio da autoridade autocrática pessoal, eles exigem muita atenção e respeito dos outros.<br /><br />
                  Os pais com esta posição de Saturno geralmente podem ser severos e rigorosos disciplinadores com os seus filhos.<br /><br />
                  Pode haver desilusões no amor ou problemas com os filhos, bem como perdas por intermédio de especulações financeiras.<br /><br />
                  Saturno rege o senso prático, a valorização das leis universais, os princípios de responsabilidade social e de justiça. Essas leis não devem ser distorcidas pelo egoísmo e pelo desejo de poder.<br /><br />
                  Portanto, esta posição pode indicar nativos que precisam desenvolver um conjunto de valores adequado para lidar com o amor, o romance, a generosidade, as crianças e a expressão criativa. <br />`,

                  `Urano no signo de Leão indica uma geração de pessoas que procuram liberdade no amor e no romance.<br /><br />
                  As suas ideias sobre namoro e sexo podem desviar-se dos padrões morais tradicionais, e provavelmente acreditam no amor livre.<br /><br />
                  Urano em Leão proporciona muita força de vontade e criatividade nas artes e nas ciências, bem como o potencial para tipos originais de liderança.<br /><br />
                  Os nativos com esta posição procuram criar um tipo original de expressão para se destacarem em seus esforços. Podem desenvolver novos conceitos em arte, música e teatro.<br /><br />
                  Ao invés de se ajustarem aos padrões da sociedade em que vivem, preferem criar os seus próprios padrões. Mas existe o perigo de vaidade com esta posição, pois Urano está em detrimento no signo de Leão.<br /><br />
                  Portanto, os nativos deveriam se envolver mais em questões de interesse social ou universal, em detrimento de questões pessoais.<br /><br />
                  Os nativos podem ser teimosos, têm dificuldade para se comprometer ou colaborar com os outros. No seu pior, insistirão em fazer as coisas à sua maneira, a ponto de se recusarem a colaborar. <br />`,

                  `Indica uma geração com grande talento artístico e musical, especialmente interessada no teatro e nas artes interpretativas.<br /><br />
                  Com grande necessidade de expressar-se livremente e de brilhar, ser famoso, original. Também inclinada para o romantismo e o idealismo no amor.<br /><br />
                  Uma geração de conquistadores e de divas. Por isso, foi neste momento que o cinema alcançou um auge grandioso e nasceu ali pela primeira vez, o mito das grandes estrelas, tal como Rodolfo Valentino.<br /><br />
                  Mas é também o período que conduziu o mundo para a crise e a depressão da economia internacional, devido a uma falsa noção de prosperidade.<br /><br />
                  O lado negativo de Netuno traduz-se em desilusões amorosas e problemas na relação com os filhos. <br />`,

                  `Este período esteve marcado pelo egoísmo, pelo orgulho e pelo desejo de poder dos dirigentes das nações. Os jovens desta geração são os primeiros que, em grande escala, podem ir para a universidade.<br /><br />
                  Isso se nota anos mais tarde, na rebeldia perante uma forma de vida carente de sentido. A geração com Plutão em Leão se torna consciente da sua individualidade. A expressão do ego é imperiosa.<br /><br />
                  A necessidade de manifestar a própria individualidade, de se projetar e de criar a partir de si mesmo, a resistência por qualquer tipo de norma, controle e poder, estavam em clara oposição à situação em geral, manipulada por toda a espécie de ditadores, tanto na esfera econômica como na política. A geração com Plutão em Leão quebrou todas as regras e se elegeu líder da mesma.<br /><br />
                  Os \"teenagers\" (adolescentes como fenômeno social diferenciado) e a ampla gama de movimentos dos anos sessenta e setenta, desde os \"rockers\" aos \"beatniks\", deixaram uma marca indelével na história. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender o significado de humildade e a trabalhar em grupo, sem perder o brilho interior:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Leão traz memórias de poder, palco e holofotes. De ter sido importante ou ter vivido em posições de destaque. É orgulhoso, dominador, egocêntrico, sedutor, charmoso e jogador.<br /><br />
                  Faz tudo para ser admirado, reconhecido, aplaudido, venerado e amado. Traz tendência para exagerar a sua importância e a sua superioridade com poder e ostentação. Com exagerado romantismo e ideal de nobreza, é centrado nos seus desejos.<br /><br />
                  Dá importância à imagem, à marca e ao status, em detrimento da vida interior. Traz tendência também para julgar facilmente os outros pela aparência superficial, sem levar em conta o seu interior.<br /><br />
                  Tem carisma, brilho próprio, com forte noção do seu Eu, mas é pouco empático. É criativo, divertido e barulhento. Gosta de dramatizar e exagerar as situações como forma de chamar a atenção.<br /><br />
                  Com o Nodo Norte (Cabeça do Dragão) no signo de Aquário, ao longo da vida pode atrair situações e meios onde irá passar despercebido, para que possa aprender a ser mais humilde. Pode atrair rejeição e indiferença quando insiste em buscar fora o que ainda não tem dentro.<br /><br />
                  Deve aprender a sair do palco e a juntar-se aos outros. Trabalhar em equipe e ser apenas mais um num mundo de iguais. Aprender a desenvolver o espírito humanitário de igualdade e de solidariedade. Aprender a ganhar simplicidade, compaixão e empatia para com os outros.<br /><br />
                  Vencer a necessidade de impressionar os outros e agir por amor próprio e autoestima, sem necessidade de audiência. Aprender a conviver com as pessoas, com a consciência de que cada um tem o seu próprio brilho e é especial à sua maneira.<br /><br />
                  Ao mesmo tempo, valorizar suas capacidades criativas. Reconhecer que a rejeição dos outros e as propostas de solidão levam ao mergulho interior para que possa reencontrar os seus talentos adormecidos.<br /><br />
                  O crescimento acontece através das associações com base na partilha mútua, com o envolvimento e a dedicação em causas maiores, coletivas, consciente de que pertence a uma grande família. <br />`,

                  `Para se sentir a vontade, irradiante e feliz, o indivíduo deve-se expressar emocionalmente e projetar seus sentimentos pessoais em tudo o que toca. Deve ter também alguém a quem possa impressionar.<br /><br />
                  A felicidade transforma-se em alegria criativa a medida que a pessoa serve a grandes ideais e a energia criativa é canalizada e sublimada em criações, invenções ou visões que têm importância coletiva.<br /><br />
                  Exemplos: Oliver Cromwell, Victor   Hugo, Sigmund Freud, Pierre Curie, Adolf Shoenberg, Keyserling, Lenin, Benes, Presidente Johnson. <br />`,

                  `O bloqueio da capacidade de autoexpressão e da criatividade na infância podem levá-lo a ter falta de confiança ao se expressar, ao mesmo tempo em que, inconscientemente, deseja brilhar.<br /><br />
                  Em muitos casos, pode ter sido forçado a abrir mão de uma carreira artística promissora, mas encontra compensação para este sofrimento ao incentivar o talento dos outros.<br /><br />
                  Entende o poder que a alegria, a exuberância e a afetividade têm na vida das pessoas. Mas podem não ter se sentido especial ou reconhecido. Quíron em Leão indica talento para trabalhar a individualidade e os dons de outras pessoas, fazendo com que floresçam.<br /><br />
                  Você é incapaz de relaxar e desfrutar cada momento de prazer de sua vida de forma despreocupada, mas também pode conseguir atingir esse estado de livre expressão e chegar a extremos. Sua espontaneidade foi reprimida durante a infância e agora você é hipersensível quando exposto ao ridículo.<br /><br />
                  Para fugir dessas situações você pode assumir o papel de comediante para provocar risos na plateia, ou desenvolver uma aparência nobre e imponente, passando a imagem de uma pessoa fria e controlada.<br /><br />
                  Sua criatividade pode estar bloqueada porque na infância você foi obrigado a renunciar a alguma forma de expressão criativa, ou sua criatividade foi usada como meio de controle por seus pais, por exemplo, mostrando seus dons a todo mundo.<br /><br />
                  Também pode ter acontecido que um problema físico interrompeu uma carreira artística promissora. Como compensação, você tem o dom de ajudar outras pessoas a se expressarem. Essa é sem dúvida, uma forma de você se realizar também.<br /><br />
                  Se na sua infância você não foi valorizado e aceito, agora pode ter a sensação de que tudo o que expressa não é bem recebido pelos outros. Ao tentar se expressar, pode se deparar com medo, bloqueios, resistência ou conflitos. Atrás dessa aparente incapacidade encontram-se dolorosas experiências do passado.<br /><br />
                  É importante aceitar esses sentimentos, compreendê-los para poder superar essas dificuldades. Se por um lado você tem falta de confiança, por outro, pode desejar inconscientemente vir a ser uma grande estrela, brilhar mais que qualquer outro, vir a ser um herói sem igual.<br /><br />
                  Você pode passar muitas horas na frente do espelho e gastar muita energia, escondendo essas fantasias. A beleza, a fama e a adulação, apesar de desejadas, podem lhe ser negadas.<br /><br />
                  Talvez você coloque os outros num pedestal com o risco de se corroer de ciúme. É importante reconhecer seu desejo de ser famoso, ter sucesso e fortuna, ser realizado no ramo artístico, porque se não, corre o risco de estragar e destruir as coisas que cria em sua vida.<br /><br />
                  Suas feridas neste assunto continuarão abertas se você desviar suas aspirações criativas, ou fingir que não têm valor, ou denegrir coisas que realmente são importantes para você. É importante distinguir entre criar para impressionar os outros, adquirir poder e prestígio e criar pelo puro prazer de criar.<br /><br />
                  Se conseguir se deleitar com o processo da criação, perceberá que a luta para ser famoso é inútil, pois a segurança interna, a paz interior, a satisfação própria, vêm do prazer de criar.<br /><br />
                  O sofrimento pode vir dos filhos: você pode ser incapaz de ter filhos, apesar de desejar intensamente isso. Pode haver alguma dificuldade em relação a eles.<br /><br />
                  Mas os filhos também podem ser fonte de alegrias e com sua franqueza, espontaneidade e sabedoria ajudarem você a se sentir mais amado e aceito, ajudando-o a superar os problemas de sua infância.<br /><br />
                  Nesta vida, você está sendo convidado a encontrar o centro criativo de seu próprio ser interno, em lugar de exibir ou aperfeiçoar alguma técnica criativa.<br /><br />
                  Se seu senso de individualidade especial estiver bloqueado, você pode tentar fazer demonstrações cada vez mais pomposas e talvez inúteis para ganhar dos outros a estima que não possui por si próprio.<br /><br />
                  Pode ocorrer de ter comportamento sexual incomum, ou preferir abster-se sexualmente fugindo ou negando para si mesmo suas necessidades sexuais. O importante é aprender a amar de corpo e alma, pois integrando a capacidade a amar física e espiritual, poderá chegar à plenitude almejada.<br /><br />
                  A jornada para encontrar a espontaneidade que perdeu pode exigir certa ousadia: a arte dramática, o canto ou o desenho livre podem ajudar a restabelecer sua autoapreciação. Mas lembre-se, não faça nada disso para impressionar os outros, apenas para se divertir e deixar a criança interna vir à tona.<br /><br />
                  Você deve aceitar a criança aparentemente inútil que existe dentro de você, pois é sua parte desajeitada, inadequada e ingênua, sua parte inferior e infantil.<br /><br />
                  Você pode se redimir se entrar em contato com experiências passadas de fracasso, rejeição e sofrimento e as aceitar, pois virá junto um sentimento de aceitação de si mesmo, de compaixão por você e pelos outros.<br /><br />
                  A criança dentro de você está viva e precisa de espaço para trazer alegria e felicidade para sua vida. <br />`,

                  `O parceiro ideal é aquele que demonstre interesse por atividades artísticas e criativas, que seja divertido e brincalhão.<br /><br />
                  O casal pode ser formado por pessoas belas ou exuberantes, que chamam muita atenção e que estejam sempre se expondo publicamente de forma positiva ou negativa.<br /><br />
                  Um casal para frente dos holofotes, que compartilhem seu espírito de liderança. Mas também pode ser pessoas muito egocêntricas, exigentes ou muito imaturas.<br /><br />
                  De qualquer maneira, o casamento ideal é caloroso e dinâmico, onde há amor e paixão. A fertilidade e a criatividade para filhos e projetos em comum estão favorecidas. <br />`,

                  `Abusando a todo instante do pronome "eu" (ou da expressão: "quanto a mim\"), o nativo utilizava o poder da palavra (escrita ou falada) para submeter os outros ao seu poder.<br /><br />
                  Orgulhoso, nutria inveja secreta das proezas dos outros. Esse despeito se manifestava por palavras ou por escritos críticos.<br /><br />
                  Considerava-se um gênio e ai de quem cometesse o crime de contrariá-lo, ou de não aplaudi-lo. Na vida atual deve controlar seu orgulho e cultivar humildade.<br /><br />
                  Deve aprender a pedir aos outros, aquilo que necessita (particularmente, conselhos). A reconhecer seus erros e aceitar ser criticado sem se zangar. <br />`,

                  `Em suas vidas passadas, o nativo ficava constantemente preocupado em deslumbrar as suas futuras conquistas, daí uma busca de luxo, de dinheiro, de esnobismo.<br /><br />
                  Na sua intimidade, fazia medo aos que você amava, por que talvez foi uma pessoa muito autoritária.<br /><br />
                  Superprotetor você queria assumir tudo. Pode demonstrar uma vaidade exagerada e gostar demais dos prazeres mundanos, parecendo frívolo e superficial.<br /><br />
                  Exigente, rende-se somente àquele amor que se ajoelhar aos seus pés. Gostam sempre de manter o comando na relação e usam do seu magnetismo para fazer valer suas vontades.<br /><br />
                  Deve agora ser mais generoso, procurar relações simples e amistosas com o ser amado, deixando-lhe o direito de existir por si mesmo.<br /><br />
                  Deve ser devotado e fiel, fazendo de tudo para oferecer o melhor de si ao seu parceiro e a relação.  <br />`,

                  `Em vidas passadas, o nativo manipulou as pessoas sem se dar conta dos efeitos de sua força. Foi orgulhoso, imprudente, imediatista e egoísta em suas relações amorosas.<br /><br />
                  Nesta vida deve cultivar humildade para pedir mais conselhos e ouvi-los. Que não se deixe levar por seu gosto de poder, herdado de outras vidas.<br /><br />
                  Que aprenda a perder, sem disso fazer um drama. Que cultive mais tolerância e aceite que os outros ajam a seu modo. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Com Júpiter retrógrado neste signo, o nativo se crê habilitado a distribuir lições de moral à sua volta, pois cultiva uma elevada opinião sobre si mesmo.<br /><br />
                  Não ouvindo nenhum conselho, um dia será obrigado a perceber que, por vezes, os outros têm razão. Gosta de exibir seu poder e suas realizações para bem mostrar sua importância.<br /><br />
                  O seu programa cármico: trabalhar o orgulho e cultivar humildade. Admitir que as opiniões dos outros, diferentes das suas, podem por vezes ser válidas! <br />`,

                  `Tudo para a plateia: o nativo só se sente "alguém" através de aplausos, da aprovação dos outros.<br /><br />
                  A fim de atingir esse objetivo, assume as responsabilidades, mas tende a se mostrar muitas vezes dominador.<br /><br />
                  Confunde um pouco seu direito e seu poder, tende a distorcer as leis a seu favor. Enérgico, realista, corajoso e rígido no combate, pode se tornar um excelente líder.<br /><br />
                  Com a condição de saber respeitar honestamente os direitos de todos. O nativo deve aprender a assumir responsabilidades para servir aos outros, e não para sua própria satisfação.<br /><br />
                  Nesta vida pode se engajar numa grande causa social, política ou humanitária. Essa motivação profunda é, na verdade, o seu próprio benefício. <br />`,

                  `Enérgico, perfeitamente capaz de se assumir, Urano retrógrado em Leão indica um chefe nato. Segue seu caminho de cabeça erguida e seguro de si.<br /><br />
                  Mas seu ponto fraco é que não escuta ninguém. Apega-se muito às próprias ideias. Originais, é verdade, mas há tendência para agredir os que as contestam.<br /><br />
                  Como acontece frequentemente com o signo de Leão, manipula os que o cercam para garantir o poder. Sua sede ilimitada de poder e seu temível carácter possessivo provêm devidas passadas.<br /><br />
                  Os nativos podem ter colocado os seus seguidores constantemente à prova para verificar sua fidelidade e a lealdade, muitas vezes através do medo e da insegurança.<br /><br />
                  Na vida atual, a posição de Urano o ajudará a melhorar essa atitude autoritária. O nativo compreenderá que a necessidade de liberdade que sente também existe nos outros e deve ser respeitada. <br />`,

                  `Num primeiro momento, o nativo corria atrás de tudo o que brilha: títulos ruidosos, belas relações, habitações suntuosas, luxo.<br /><br />
                  Mas o nativo passou por desilusões e dissabores que, num segundo momento, podem tê-los feito abrir os olhos para ver que nem tudo que brilha é ouro.<br /><br />
                  Polidez em exagero não significa honestidade. Esta posição planetária se refere a um mau uso do poder e do espetáculo em vidas passadas.<br /><br />
                  A passagem de Netuno em Leão coincide, aliás, com o grande período do cinema em Hollywood (Leão é o símbolo do show-business, e Netuno o da evasão).<br /><br />
                  Armadilha para pássaros, na qual muitos perderam as asas! Quantas estrelas deslumbrantes não morreram na miséria e na decadência?
                  O luxo e o ouro são buscados como prova de poder: "exibe-se" o máximo possível.<br /><br />
                  Os nativos poderiam ter abrandado suas decepções utilizando o dinheiro e as amizades - nos períodos faustosos - para ajudar realmente os necessitados.<br /><br />
                  Poderiam utilizar a inspiração de Netuno em Leão para a criação artística e colocar as potencialidades do dinheiro a serviço dos mais pobres. <br />`,

                  `Os nativos dessa geração têm a tendência de se afirmar. Comportam-se de maneira muito autoritária.<br /><br />
                  Marcada pela guerra e pelo pós-guerra, essa geração usou os poderes criativos e realizadores de Leão para reconstruir.<br /><br />
                  Mas como o trabalho de Plutão é o de questionar, assistimos a contestação das autoridades e dos governos. A França conheceu durante esses anos certa instabilidade de governo.<br /><br />
                  Por outro lado, sendo Leão o símbolo do poder, Plutão retrógrado acarreta um abuso deste: ditaduras de Hitler, de Mussolini, de Stalin, de Franco, de Salazar, etc.<br /><br />
                  Na verdade, e segundo a simbólica plutoniana, algumas dessas ditaduras desmoronaram em meio a violentas turbulências.<br /><br />
                  O nativo nascido sob essa configuração não pode imaginar-se vivo sem poderes e trabalha para estendê-los ao máximo.<br /><br />
                  Já gozou deles em outras existências e isso se traduz, segundo os aspectos, por um orgulho insensato ou um autoritarismo insuportável.<br /><br />
                  Nos melhores casos, uma aptidão para gerir, para dirigir e para proteger generosamente os mais fracos.<br /><br />
                  O nativo não hesitará em provocar revoltas e revoluções para destruir as estruturas que lhe parecem malsãs. Reconstruirá uma hierarquia dos poderes mais de acordo com o que lhe parece justiça.<br /><br />
                  Caso abuse do poder, pode esperar ser violentamente contestado. Os plutonianos retrógrados de Leão respeitam o poder, se julgam que ele é justo. Senão, deve ser substituído. Não podemos deixar de lhes dar razão nessa perspectiva de justiça.<br /><br />
                  Entretanto, alguns julgam também que tal poder é "injusto", porque não está em suas mãos. Então, um poder sucede a outro, e os administrados não veem progresso. Plutão retrógrado em Leão indica um programa cármico de reflexão sobre a autoridade. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  O bloqueio da capacidade de auto expressão e da criatividade na infância, o levarão a ter falta de confiança ao se expressar, ao mesmo tempo em que, inconscientemente, desejará brilhar.<br /><br />
                  Em muitos casos, pode ter sido forçado a abrir mão de uma carreira artística promissora, mas encontra compensação para este sofrimento ao incentivar o talento dos outros.<br /><br />
                  Entende o poder que a alegria, a exuberância e a afetividade têm na vida das pessoas. Mas podem não ter se sentido especial ou reconhecido. Terá talento em trabalhar a individualidade e os dons de outras pessoas, fazendo com que floresçam.<br /><br />
                  Terá de aprender a reconhecer a si mesmo. Você pode ser incapaz de relaxar e desfrutar cada momento de prazer de sua vida de forma despreocupada, mas também pode conseguir atingir esse estado de livre expressão e chegar a extremos.<br /><br />
                  Sua espontaneidade foi reprimida durante a infância e agora você é hipersensível quando exposto ao ridículo. Para fugir dessas situações você pode assumir o papel de comediante para provocar risos na plateia, ou desenvolver uma aparência nobre e imponente, passando a imagem de uma pessoa fria e controlada e isso faz com que os outros se sintam miseráveis e ridículos.<br /><br />
                  Sua criatividade e sua capacidade de autoexpressão podem estar bloqueadas, porque na infância você foi obrigado a renunciar a alguma forma de expressão criativa, ou sua criatividade foi usada como meio de controle por seus pais, por exemplo, mostrando seus dons a todo mundo.<br /><br />
                  Também pode ter acontecido que um problema físico interrompeu uma carreira artística promissora. Como compensação, você tem o dom de ajudar outras pessoas a se expressarem, e essa é sem dúvida, uma forma de você se realizar também.<br /><br />
                  Se na sua infância você não foi valorizado e aceito, agora pode ter a sensação de que tudo o que expressa não é bem recebido pelos outros.<br /><br />
                  Ao tentar se expressar, pode se deparar com terror inexplicável e com bloqueios, resistência e conflitos. Atrás dessa aparente incapacidade encontram-se dolorosas experiências do passado.<br /><br />
                  É importante aceitar esses sentimentos, compreendê-los para poder superar essas dificuldades. Se por um lado você tem falta de confiança, por outro, pode desejar inconscientemente vir a ser uma grande estrela, brilhar mais que qualquer outro, vir a ser um herói sem igual.<br /><br />
                  Você pode passar muitas horas na frente do espelho e gastar muita energia, escondendo essas fantasias. A beleza, a fama e a adulação, apesar de desejadas, podem lhe ser negadas.<br /><br />
                  Talvez você coloque os outros num pedestal, e corre o risco de se corroer de ciúme. É importante você reconhecer seu desejo de ser famoso, ter sucesso e fortuna, ser realizado no ramo artístico, porque se não, corre o risco de estragar e destruir as coisas que cria em sua vida.<br /><br />
                  Suas feridas neste assunto continuarão abertas se você desviar suas aspirações criativas, ou fingir que não têm valor, ou denegrir coisas que realmente são importantes para você.<br /><br />
                  É importante distinguir entre criar para impressionar os outros e adquirir poder e prestígio, e criar pelo puro prazer de criar.<br /><br />
                  Se conseguir se deleitar com o processo da criação, perceberá que a luta para ser famoso é inútil, pois a segurança interna, a paz interior, a satisfação própria, vêm do prazer de criar.<br /><br />
                  O sofrimento pode vir dos filhos: você pode ser incapaz de ter filhos, apesar de desejar intensamente isso; podem nascer natimortos ou com alguma incapacidade física ou mental; ou morrer em idade precoce; podem não lhe ter estima, ou pode haver inveja mútua, etc.<br /><br />
                  Mas os filhos também podem ser fonte de alegrias, e com sua franqueza, espontaneidade e sabedoria ajudarem você a se sentir mais amado e aceito, ajudando-o a superar os problemas de sua infância.<br /><br />
                  Nesta vida, você está sendo convidado a encontrar o centro criativo de seu próprio ser interno, em lugar de exibir ou aperfeiçoar alguma técnica criativa.<br /><br />
                  Se seu senso de individualidade especial estiver bloqueado, você pode tentar fazer demonstrações cada vez mais pomposas e talvez inúteis para ganhar dos outros a estima que não possui por si própria.<br /><br />
                  A jornada para encontrar a espontaneidade que perdeu, pode exigir certa ousadia na área de autoexpressão: a arte dramática, o canto ou o desenho livre podem ajudar a restabelecer sua autoapreciação.<br /><br />
                  Mas lembre-se, não faça nada disso para impressionar os outros, apenas para se divertir e deixar a criança interna vir à tona. Você deve aceitar a criança aparentemente inútil que existe dentro de você, pois é sua parte desajeitada, inadequada e ingênua, sua parte inferior e infantil.<br /><br />
                  Você pode se redimir se entrar em contato com experiências passadas de fracasso, rejeição e sofrimento e as aceitar, pois virá junto um sentimento de aceitação de si mesmo, de compaixão por você e pelos outros.<br /><br />
                  A criança dentro de você está viva e precisa de espaço para trazer alegria e felicidade para sua vida.<br /><br />
                  Pode ocorrer de ter comportamento sexual incomum, ou preferir abster-se sexualmente fugindo ou negando para si mesmo suas necessidades sexuais.<br /><br />
                  O importante aqui é aprender a amar de corpo e alma, pois integrando a capacidade a amar física e espiritual você poderá chegar à plenitude almejada. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno nessa casa ou signo sempre se casará ou se associará por amor. Senão ela esperará que apareça \"o príncipe encantado\". Possibilidades de realizar seu ideal afetivo no casamento ou numa parceria, mas se aprender a fazer concessões.<br /><br />
                  Capacidades e dons artísticos se Vênus, o Sol ou a Lua também mostram essas tendências. Proteção na procriação, que será vista por ela como sua \"obra\", \"foi feito por mim\".`
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,

                  `A forma mais imediata de autoexpressão. Identifica-se consigo mesmo ao expressar o que sente. Vivencia a experiência criativa de maternidade ou paternidade. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,

                  `Encontra o prazer da criatividade. Cultiva os talentos próprios, a inspiração, a resposta mais pessoal à vida, a força que impulsiona uma total tradução de si mesmo. <br /><br />
                  A criatividade se manifesta quando busca a sua identidade através da transformação da matéria. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,

                  `Encontra sua individualidade, a capacidade máxima de expressão de todo um potencial de experiência e conhecimento adquirido. Torna-se verdadeiramente criativo e original. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender o significado de humildade e a trabalhar em grupo, sem perder o brilho interior: </strong>`
            ]
      },
      {
            title: `virgem</strong>`,
            text: [
                  `Virgem é um signo do elemento Terra. Critério, discernimento e eficiência são palavras-chave.<br /><br />
                  Com a energia prática do Sol em Virgem, pode aprimorar técnicas de trabalho, incrementar serviços, organizar a rotina, cuidar melhor da alimentação, da saúde, do equilíbrio do corpo e das emoções, em nome de mais qualidade de vida.<br /><br />
                  O virginiano está atento aos detalhes. Gosta de se sentir útil, de prestar serviços, cumprir prazos, formatar projetos, analisar, planejar, pensar, repensar e incrementar.<br /><br />
                  Virgem é o "ver para crer". O trabalhador metódico e eficiente lança mão da pesquisa, da investigação, da curiosidade e da flexibilidade.<br /><br />
                  Esse talento é usado para criar práticas metodológicas com mais precisão e racionalidade.<br /><br />
                  É como a ciência moderna que quer testar a natureza, melhorá-la e analisá-la, buscando uma explicação racional para facilitar o domínio sobre ela.<br /><br />
                  O Sol em Virgem predispõe a um sentido da lógica muito desenvolvida. De natureza escrupulosa e inquieta, revela aptidões para o raciocínio superior que lhe fazem perceber ideias incompreensíveis para os outros.<br /><br />
                  Não gosta particularmente do imprevisto, pode-se mesmo dizer que o detesta. Todas as coisas que escapam de seu controle o deixam nervoso.<br /><br />
                  Isso indica uma ameaça de aflição e de problemas íntimos. Você é um ser hipersensível que tenta controlar as suas emoções.<br /><br />
                  O nativo pode deixar transparecer com grande frequência certa timidez, enquanto que é simplesmente o seu orgulho e a sua reserva que o fazem ser visto como tal por aqueles que o rodeiam.<br /><br />
                  Tende a preocupar-se com a saúde e sua boa forma física. Os pontos fracos do virginiano são: os intestinos, o fígado, o baço, o duodeno, o pâncreas e o sistema nervoso.<br /><br />
                  Dedica atenção ao seu regime alimentar e se interessa por dietas.<br /><br /> Graças ao seu comportamento alimentar, o virginiano raramente adoece.<br /><br />
                  Contudo, se alguma doença ocorrer, há tendência para artrite, artrose ou problemas no aparelho gastrointestinal.<br /><br />
                  Para se curar, o nativo deste signo deve buscar principalmente os medicamentos mais suaves, homeopáticos, fitoterápicos e naturais. É aconselhável praticar esportes.<br /><br />
                  É preciso cuidar para não se tornar crítico demais, cético e racional demais, cheio de manias ou até mesmo hipocondríaco.<br /><br />
                  Ao julgar, classificar, compartimentar, pode ficar preso em detalhes e perder a visão do todo. Podem trabalhar demais e se esquecer do prazer.<br /><br /> A vida pode ficar cinza, monótona e sem graça.<br /><br />
                  É preciso cultivar autoestima. A magia, o encantamento, o romantismo, a imaginação, a fantasia, a transcendência e a espiritualidade estão lá do outro lado, em Peixes.<br /><br />
                  Virgem é o fio-terra de Peixes e Peixes é a inspiração que falta para Virgem. Eis o caminho do meio! <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Virgem indica uma natureza prática, trabalhadora e exigente. Há grande preocupação com o asseio e a higiene pessoal, a limpeza e a organização do lar.<br /><br />
                  Quem tem a Lua em Virgem é preocupado com a saúde, por isso é cuidadoso com a alimentação e com dietas. É bom cozinheiro, mas saúde é mais importante do que o paladar.<br /><br />
                  É também tímido e reservado, prefere trabalhar tranquilamente nos bastidores. Presta muita atenção aos detalhes e deseja servir.
                  Tanto o signo de Virgem quanto a Lua estão relacionados à fertilidade e a fecundidade.<br /><br />
                  Por isso, quem nasce com essa configuração gosta de cultivar boa qualidade em suas relações, cuidar do ambiente familiar e das pessoas mais queridas.<br /><br />
                  Classificar os sentimentos traz segurança, que é abalada quando se defronta com emoções incompreensíveis e inomináveis. A objetividade e a praticidade são tendências visíveis.<br /><br />
                  Não faz perguntas pessoais, a menos que seja necessário. É curioso, porém, somente em relação ao seu trabalho ou às questões práticas. Costuma ser crítico consigo mesmo e pode ser com os outros.<br /><br />
                  Pode haver uma preocupação excessiva com detalhes irrelevantes, uma atitude de crítica e censura. O perfeccionismo nos detalhes pode torná-lo cego para questões mais amplas.<br /><br />
                  É preciso aprender a perdoar as falhas, tanto as suas quanto às dos outros, ter calma, se estressar menos com os afazeres cotidianos.<br /><br />
                  Com sensibilidade e compreensão o aperfeiçoamento pode ser cultivado de forma mais harmoniosa. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  O ascendente em Virgem vive a aprendizagem e a experimentação das coisas concretas. Para quem tem este ascendente, a vida é um projeto que busca a perfeição.<br /><br />
                  Todas as atitudes, funções, relações e comunicações são, por isso, sujeitas a forte crítica e autocrítica, revelando-se sempre aquém de tão exigentes expectativas.<br /><br />
                  A expressão pessoal tende a ser precisa, funcional, ordenada e ergonômica. Tudo é feito com método, funcionalidade, detalhe e eficiência, tendo em vista a ideia de perfeição.<br /><br />
                  \"A qualidade acima da quantidade\" poderia ser o lema de sua história e de seu posicionamento.<br /><br />
                  Isso muitas vezes significa: desenvolver habilidade e competência no trabalho ou na área criativa escolhida. Seu ideal é ser útil, prestativo e produtivo.<br /><br />
                  A preocupação com o bom funcionamento do corpo físico é uma constante. Outra característica é o tratamento prático das necessidades comuns do dia-a-dia. Tudo o que não é construtivo deve ser reconhecido, limpo ou descartado.<br /><br />
                  <strong> O perigo é ficar obsessivo com a ordem e a correção. Se deixar que a crítica se torne de tal maneira implacável o-deixará paralisado. A pessoa perde a espontaneidade e a fluidez.</strong><br /><br />
                  A partir de certa fase da vida, começa a aprender que a perfeição está subjacente a tudo, mas que não tem possibilidades de se manifestar plenamente no plano físico.<br /><br />
                  Nessa altura, a tolerância e a compreensão começam a temperar o seu sentido crítico, levando-o a encarar todas as coisas (e a si mesmo) como manifestações terrenas e humanas do arquétipo da Perfeição.<br /><br />
                  Um ar limpo, preciso e resistente, ao mesmo tempo aprumado, asseado e simples são qualidades típicas do Ascendente Virgem.<br /><br />
                  O aspecto geral pode ser bastante juvenil, mantendo uma figura delgada e muita vivacidade. <br />`,

                  `Mercúrio em Virgem está no signo de sua regência, uma posição que indica uma mente analítica, com grande habilidade de raciocínio prático.<br /><br />
                  Estes nativos insistem numa precisão exata e apurada, que pode parecer trivial para outras pessoas.<br /><br />
                  Exigem ambientes organizados, métodos e procedimentos eficientes, especialmente em sua área de trabalho. Esta é melhor posição de Mercúrio para a pesquisa científica detalhada.<br /><br />
                  O nativo atinge o sucesso profissional e financeiro ao adquirir boa educação e habilidades especializadas.<br /><br />
                  O interesse pela gramática e a competência nessa área podem torná-los eloquentes em seu discurso, em sua escrita e competente em idiomas.<br /><br />
                  Via de regra, insistirão no uso adequado da gramática, da ortografia e da pontuação, motivo pelo qual são excelentes secretárias e correspondentes.<br /><br />
                  Mercúrio em Virgem está principalmente interessado em ideias que possuam alguma aplicação prática para obter status e sucesso financeiro.<br /><br />
                  O nativo com esta posição é voltado ao trabalho. Pode ser tímido e reservado, preferindo não perder tempo com conversas inúteis.<br /><br />
                  Você pode perder de vista as questões amplas e principais devido à preocupação excessiva com os detalhes que assumem uma importância indevida.<br /><br />
                  Medicina, dieta, higiene, matemática, trabalhos detalhados e precisos de todos os tipos atraem sua atenção. <br />`,

                  `O nativo com Vênus neste signo é prestativo e devotado.<br /><br />
                  Sente necessidade de relacionamentos estáveis e duradouros, onde a mútua compreensão e os pequenos cuidados diários são sinais de um amor racional e pragmático.<br /><br />
                  O nativo gosta de cultivar a prestatividade e o capricho em seus serviços, gosta de demonstrar amor e afeto em atitudes práticas.<br /><br />
                  A experiência amorosa ganha uma atmosfera mais funcional. Com bom senso, cada detalhe, cada palavra e cada gesto minucioso são observados.<br /><br />
                  É preciso cuidado para não se tornar crítico demais. Não se deixar encantar por arroubos de afeto que sabe ser apenas fogo de palha.<br /><br />
                  Cuida, alimenta, promove a segurança do parceiro e dele deseja fidelidade e sinceridade. Pode fazer qualquer sacrifício para melhorar a vida do casal, tendo prazer nas pequenas coisas do dia-a-dia.<br /><br />
                  Seu afeto é sincero, mas pode parecer frio pela ausência de demonstrações passionais, mesmo se é capaz de se expressar nas pequenas coisas do cotidiano.<br /><br />
                  Necessita de rituais nos momentos mais íntimos, mas não tolera exageros. <br />`,

                  `O nativo com Marte em Virgem é eficiente, possui habilidade e engenhosidade manual e até mesmo mental. Poderá ter interesse por mecânica ou engenharia.<br /><br />
                  A capacidade organizativa poderá se traduzir no bom andamento das tarefas rotineiras que executará com diligência.<br /><br />
                  Esta colocação de Marte indica uma boa vitalidade e capacidade de recuperação rápida em caso de doença.<br /><br />
                  A sua expressão sexual pode ser cautelosa, nos termos tradicionais, sem arroubos fogosos, mas é capaz de produzir um prazer duradouro. Mas essa posição de Marte indica pouca fertilidade.<br /><br />
                  É preciso observar o caráter suscetível, que se aborrece por causa de pequenos detalhes. O descontentamento pode provocar disputas com subalternos e colegas.<br /><br />
                  O espírito excessivamente crítico pode provocar seu envolvimento em discussões. Risco de inflamações ou cirurgias intestinais. <br />`,

                  `Com esta posição o nativo pode ser cético em questões religiosas, adotando uma postura intelectual e um tanto materialista das coisas, em vez de devocional e espiritual.<br /><br />
                  Boa posição para um escritor, para um técnico no manejo de computadores. Também para um psicólogo, médico, enfermeiro, nutricionista, veterinário, contabilista e artesão.<br /><br />
                  Tem muitíssimas aptidões, mas pode ter dificuldade em fazer fortuna, já que em muitas ocasiões sente insatisfação no que faz e assim perderá boas oportunidades.<br /><br />
                  É perfeccionista em todos os sentidos da vida. Considera a limpeza e a ordem como essenciais.<br /><br />
                  Nutre grande interesse pela saúde física e mental, prestando por vezes serviços em hospitais ou instituições educacionais. <br />`,

                  `Saturno no signo de Virgem indica pessoas práticas, exigentes e trabalhadoras. Elas preocupam-se com detalhes, precisão e eficiência, especialmente no trabalho.<br /><br />
                  Com frequência trabalham em áreas de medicina, pesquisa relacionada à saúde e ciência, ou em atividades como contabilistas ou bibliotecários.<br /><br />
                  Exercitam a sua paciência e precisão em experiências científicas e análise de resultados experimentais.<br /><br />
                  No seu pior, o perfeccionismo pode manifestar-se nas relações com colaboradores, empregados e patrões.<br /><br />
                  Como os nativos são meticulosos a respeito de regras e regulamentos isso pode dificultar os relacionamentos.<br /><br />
                  Eles tendem a sobrecarregar os outros e a si mesmos com excesso de trabalho, enquanto ignoram assuntos maiores e mais importantes devido à excessiva preocupação com detalhes.<br /><br />
                  Esta posição com frequência indica pessoas austeras, que podem se tornar melancólicas ou deprimidas devido ao excessivo peso do trabalho e da responsabilidade.<br /><br />
                  Elas necessitam tirar uma folga de vez em quando e desenvolver o senso de humor. A preocupação e o excesso de trabalho podem levar à má saúde, problemas de digestão e ansiedade. <br />`,

                  `Urano no signo de Virgem indica pessoas que têm ideias originais e práticas ao mesmo tempo com relação a métodos de trabalho, especialmente em áreas de saúde, ciência e tecnologia.<br /><br />
                  Enquanto Urano se encontrava em Virgem o signo regido por Mercúrio, o planeta mental, científico, foram criadas muitas invenções eletrônicas, incluindo os computadores, que revolucionaram os negócios e a indústria.<br /><br />
                  A geração que possui Urano em Virgem apresenta abordagens singulares e engenhosas na indústria, ciência, tecnologia, relações de trabalho, ecologia e saúde.<br /><br />
                  Os nascidos entre 1964 e 1968, quando Urano formava conjunção com Plutão em Virgem, podem exercer uma influência revolucionária nessas áreas.<br /><br />
                  Esta geração pode suportar o impacto do árduo trabalho necessário para a regeneração da civilização humana, preparando a para a nova era de Aquário, regida por Urano.<br /><br />
                  Os nativos possuem talento incomum para os negócios e enorme habilidade prática para o trabalho. Contudo, podem passar por muitas mudanças e rompimentos no emprego.<br /><br />
                  No seu pior, Urano nesse signo pode causar problemas de saúde. Os nativos podem então se interessar pelos efeitos curativos da dieta correta, pelas terapias alternativas e pelo controle mental das funções corporais. <br />`,

                  `A geração de Netuno em Virgem teve de viver a Segunda Guerra Mundial.<br /><br />
                  Aqueles que nasceram durante este período viveram na sua infância esta grande crise coletiva e sentem que têm de trabalhar muito duramente para a sua existência.<br /><br />
                  Viram cortadas as suas faculdades criativas e imaginativas por circunstâncias materiais adversas.<br /><br />
                  Por isso, são muito conscientes da importância de manter uma vida ordenada, simples, sem complicações, acima de tudo cuidando da saúde.<br /><br />
                  No lado negativo pode conduzir a excessivas preocupações emocionais, a um materialismo extremo ou ao descuido com os hábitos alimentares, manifestando-se a tendência para sofrer de enfermidades psicossomáticas e neuroses. <br />`,

                  `Virgem rege o cotidiano, o mundo do trabalho, o serviço e a saúde, entre outras coisas. São estes conceitos que são afetados pela estadia de Plutão neste signo. Esta geração viveu a alteração dos conceitos sobre a saúde.<br /><br />
                  Plutão em Virgem significou um regresso a certas formas do natural, às velhas receitas (o uso das ervas, o vegetarianismo, etc.) e a um forte repúdio dos produtos químicos.<br /><br />
                  O homem se preocupa com o seu corpo, enquanto se torna pública a manipulação sobre os alimentos e proliferam as associações em defesa do consumidor, da mesma forma que, noutro âmbito, os sindicatos se pronunciaram em defesa do trabalhador.<br /><br />
                  Outra faceta deste período é o \"faça você mesmo\", o que também inclui o self-service nos restaurantes. Também foi dado início à preocupação ecológica, assim como a enorme proliferação dos gurus ocidentais.<br /><br />
                  Nessa época os computadores produzem uma revolução não só na ciência, como também no comércio, na indústria e em todos os âmbitos da vida quotidiana.<br /><br />
                  Como Plutão rege Escorpião, o signo do sexo, e Virgem é o signo da saúde, este período viu o desenvolvimento de métodos para o controle da natalidade. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Desenvolver a fé, aprender a confiar e a deixar a vida fluir sem perder a disciplina:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Virgem traz memórias de exagerado perfeccionismo, rigidez mental, responsabilidades, trabalho, ordem e limites. Pode ter assumido obrigações muito pesadas.<br /><br />
                  É mental, critico, rígido e exigente consigo mesmo e com os outros. Há dificuldade em aceitar fraquezas e fragilidades, tanto suas quanto dos outros.<br /><br />
                  Considera-se indispensável. Tem dificuldade em delegar e em confiar nas forças de uma Ordem Superior que comanda a existência. Por causa de inseguranças mentais, perde-se em detalhes desnecessários.<br /><br />
                  As teorias que o condicionam e impedem a sua liberdade. Procura e acredita num conceito idealista e irreal de perfeição, sem a noção de que a sua própria existência é um mistério.<br /><br />
                  É preso a horários e rotinas, precisa estar sempre ocupado. Há tendência para o ceticismo ou a o medo de doenças. Resistência a acreditar que por trás do caos aparente há uma mensagem divina e inteligente. Dificuldade para lidar com assuntos transcendentais, ir além do mundo visível.<br /><br />
                  Com o Nodo Norte (Cabeça do Dragão) no signo de Peixes, ao longo da vida deve aprender a seguir o que sente, a confiar no fluxo da vida.<br /><br />
                  Aprender a superar a autoexigência, as expectativas de perfeição e ordem para valorizar os sentimentos, o prazer, o bem-estar. Cultivar meditação e silêncio, aprender a descodificar e a ler as sincronicidades, os sinais invisíveis.<br /><br />
                  O crescimento acontece quando sai do pequeno e do detalhe e passa a ver o quadro todo. Pode ser através do corpo e da saúde que seja convidado a se religar com o Divino e a aceitar suas imperfeições.<br /><br />
                  Deixar ir o pânico, as críticas, o preconceito, o controle. Aprender a relaxar e permitir que os outros relaxem também. Aprender a sentir-se confiante, seguro e ser fiel à sua vontade, mais do que às suas obrigações.<br /><br />
                  Cultivar a fé, fortificar a consciência do mundo espiritual, envolver-se com assuntos metafísicos e transpessoais. Aprender a valorizar o invisível, a arte, a fantasia, a magia, o encantamento, o romantismo, a intuição e o amor incondicional. <br />`,

                  `A busca pessoal da felicidade e da realização opera através da analise intelectual, da autocrítica, da introversão e do uso de crises na superação de obstáculos.<br /><br />
                  A confiança na técnica e em processos fixos de trabalho e também a exclusão, talvez impiedosa, de tudo o que não se enquadra perfeitamente parecem ser necessárias para a conquista da integração e do sucesso pessoal.<br /><br />
                  A devoção absoluta a um SERVIÇO que permita fazer a diferença na vida das pessoas parece constituir a única chave para a realização e a felicidade. <br />`,

                  `O nativo sente necessidade de controlar e organizar rigidamente sua própria vida e também a dos outros. Muitas vezes viverá situações em que é forçado a aprender que nem tudo pode ser controlado.<br /><br />
                  Seu imenso desejo de aprimoramento interior poderá levá-lo à busca da autoperfeição, o que lhe trará grande sofrimento, uma vez que sua grande lição na vida é aceitar aquilo que é imperfeito, tanto em si mesmo como no mundo.<br /><br />
                  A dedicação aos outros devera ser contrabalançada com um cuidado maior consigo mesmo. Talvez saiba lidar com o corpo, a cura, a saúde, o trabalho.<br /><br />
                  Por outro lado, pode ter sido ferida justamente em algo na saúde. Pode ter tido pais críticos. É naturalmente perfeccionista, devendo voltar característica para onde ela é bem vinda: no campo da cura e no trabalho.<br /><br />
                  Você tem problemas com seu autocontrole: ou é demais ou é de menos. Você pode usar de rigidez com seu corpo ou sua vida através de disciplina, exercícios e dietas especiais.<br /><br />
                  A pureza e a ordem são tão importantes que o leva a constantemente organizar a si próprio e aos outros, como se o caos sempre o ameace.<br /><br />
                  Você deve aprender que muitas coisas não podem ser controladas e se sentirá melhor quando for capaz de aceitar tanto situações caóticas como as ordenadas.<br /><br />
                  Na medida em que for delegando certas responsabilidades a outros, perceberá que o universo não irá desmoronar se as pessoas não forem organizadas como você.<br /><br />
                  Você tem dificuldade de processar informações, pensamentos, emoções e experiências em geral. Você pode colecionar coisas, ideias ou informações sem ter a capacidade de criar algo pessoal com elas; pode remoer durante anos uma experiência dolorosa, repisando cada pormenor.<br /><br />
                  Preocupa-se demais com detalhes aparentemente insignificantes. Terapia pode ser útil para entrar em contato com as emoções reprimidas e traumas antigos.<br /><br />
                  Mas você pode ser do tipo oposto, aquele que evita por completo a aspecto analítico de sua mente, escondendo dos outros essas características.<br /><br />
                  Então, provavelmente, você é capaz de ser organizado para os outros, mas não si próprio. Pode ser bastante disperso, desorganizado e caótico, mas também pode ser mediúnico.<br /><br />
                  Em algum nível você se sente estéril, seja por não ter filhos ou por ser incapaz de concretizar seus pensamentos, e até mesmo conseguindo fazer estas coisas, ainda assim, permaneceria o sentimento de vazio.<br /><br />
                  Se aprender a suportar esses sentimentos com dignidade, sem mergulhar na amargura, poderá encobrir o sentimento de maternidade ou paternidade de outra maneira. Por exemplo, ao trabalhar em profissões assistenciais, ao lecionar ou ao proporcionar assistência e orientação positiva a quem o peça.<br /><br />
                  Mas deve se cuidar para não se sacrificar ao cuidar dos outros. É preciso cultivar o melhor para si, bem como o melhor para os outros. Os períodos de solidão propiciam a dissolução mansa de tudo, estar em contato com o mar ou momentos de lazer são alguns caminhos para liberar tensão.<br /><br />
                  Também pode ser útil cuidar do corpo, aprender a conhecer suas necessidades nutricionais e seus sinais particulares, tendo sempre em vista que suas emoções falam através de seu corpo.<br /><br />
                  Você pode ser um pouco obsessivo demais com relação ao trabalho ou à sua profissão, achando que não existe nada mais importante em sua vida.<br /><br />
                  Se o trabalho ou a vocação que tiver escolhido se constitui num veículo apropriado para a expressão de sua verdadeira natureza, você ficará realizado e encontrará significado para a vida através do trabalho e do serviço. Caso contrário, o trabalho revela potencial para crises.<br /><br />
                  Tome cuidado para não desejar fazer tudo com perfeição absoluta, pois isso fará com que sua criatividade fique bloqueada, sua produção cai. É preciso aprender a trabalhar com as imperfeições e limitações que a vida lhe impõe, aceitando-as e incluindo-as em sua existência.<br /><br />
                  Evitando assim que desenvolva uma aparência de ser perfeito e que se torne autocrítico demais ou um crítico impiedoso dos outros. Você pode ter tendência de entrar nos relacionamentos numa postura de instrutor ou acreditando que sabe o que é melhor para o outro.<br /><br />
                  Você pode não perceber isso, e ficar muito chocado quando os outros o tratam como um intruso em suas vidas. Também não é saudável entrar em relacionamentos na postura de servo.<br /><br />
                  Tente ajudar os outros quando eles pedirem a sua ajuda e respeite as necessidades e escolhas dos outros, aprenda a se resguardar de pessoas que usam você para servi-las.<br /><br />
                  Por mais bem intencionado que você seja, aprenda a dar espaço para os outros assumirem suas próprias vidas. Tende a viver preocupado com a saúde e tentando todos os tipos de medicamentos para se curar-se.<br /><br />
                  Isso não ocorre para os que seguirem os caminhos da cura dos outros: atividades como professores de yoga ou ginástica de qualquer natureza, terapeutas corporais, médicos, enfermeiros, massagistas são boas formas de canalizar sua necessidade de curar.<br /><br />
                  Você tem excesso de energia e precisa canalizá-la de algum modo. Canalize essa energia para as pessoas que precisam dela e sentirá alivio em seus males, pelo simples fato de haver menos pressão interna em você.<br /><br />
                  Mentalize durante alguns minutos diariamente pessoas ou grupos de pessoas que estejam doentes ou frágeis por alguma razão, (os noticiários de TV falam delas todos os dias, além das que conhecemos no dia-a-dia) é uma forma de se livrar desse excesso de energia. <br />`,

                  `O parceiro ideal é aquele que seja um eficiente trabalhador. Juno inspira uma parceria prática e realista. Podem ser pessoas inteligentes, objetivas, analíticas.<br /><br />
                  A qualidade de vida é uma prioridade. Mas também podem ser pessoas muito críticas, com mania de perfeição e extremamente detalhistas.<br /><br />
                  O relacionamento pode ser marcado pelo esforço ou anulação de um dos parceiros, para que se mantenha a parceria. Ou um dos parceiros pode ser muito servil em relação ao outro.<br /><br />
                  É preciso haver dedicação ao relacionamento. O casal deve estar sempre disposto a ser útil, tanto entre si, quanto para os outros. <br />`,

                  `Mercúrio retrógrado, nesta casa indica tendência ao perfeccionismo. Muitas vezes o nativo tem, em certas áreas, uma obsessão de perfeição que o toma muito infeliz.<br /><br />
                  Fica constantemente frustrado, já que a perfeição não existe neste mundo. Pode se mostrar maníaco por certos detalhes, excessivamente inclinado à crítica.<br /><br />
                  Bastante nervoso, em sua vida atual fica muitas vezes obcecado pela preocupação com a saúde. Apaixonado por regimes alimentares, preceitos de higiene e está sempre pronto a dar lições de moral.<br /><br />
                  Também não é raro teorizar sobre a sexualidade (porque ele próprio teve alguns problemas com isso em suas vidas passadas, e talvez ainda tenha hoje em dia!).<br /><br />
                  Capaz de analisar brilhantemente tudo o que lhe cai na mão, deve aprender a relaxar, a soltar o controle, purgar-se do espírito crítico que podou o entusiasmo dos outros. <br />`,

                  `Esta posição do planeta indica um ser muito crítico, que traz essa tendência de vidas passadas.<br /><br />
                  O nativo, antes de amar, procurava sempre o defeito da pessoa, o que lhe dava um pretexto para não se comprometer numa relação afetiva com ela.<br /><br />
                  Deve agora aprender a ser mais tolerante e compassivo para sair da sua atitude destrutiva e egoísta.<br /><br />
                  Deve aprender também a fazer pequenos sacrifícios para melhorar sua convivência diária, encontrando prazer nas pequenas coisas do dia-a-dia. <br />`,

                  `Tendo vivido em vidas passadas de forma impulsiva em sua rotina, o nativo está agora obcecado pela perfeição.<br /><br />
                  Impõe a si mesmo e aos colegas pesadas obrigações. Demasiado crítico e exigente adapta-se melhor às coisas do que às pessoas.<br /><br />
                  Para se libertar de sua angústia, deve admitir suas imperfeições e as dos outros.  Deve aprender a se relaxar, a exprimir e a canalizar seus impulsos sexuais bloqueados pelo medo do fracasso.<br /><br />
                  Deve ser mais tolerante e mais cooperativo. Atividades físicas regulares são de grande ajuda. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Esta posição planetária não é muito alegre: a expansão calorosa de Júpiter é abafada por Virgem.<br /><br />
                  O nativo vive um conflito entre a lembrança de elevadíssimas experiências espirituais e a mesquinhez material da vida quotidiana.<br /><br />
                  O nativo tem bastante dificuldade em tomar distância para julgar. Espera demais dele mesmo e das pessoas. Impõe-se - e impõe à sua volta - um ideal impossível de viver.<br /><br />
                  É preciso ampliar a visão! A lição cármica da vida atual é a de encontrar um ideal mais abrangente e realista, que lhe permita aceitar com bondade e tolerância as imperfeições humanas. <br />`,

                  `O nativo ama a ordem e o cuidado com os detalhes. Tenta adaptar o mundo exterior à imagem da sua mente precisa, ordenada, um tanto fria e racional.<br /><br />
                  Em vidas passadas pode ter imposto aos outros esquemas preconcebidos, temendo a improvisação com muita rigidez.<br /><br />
                  Nesta vida isso pode causar, por exemplo, prisão de ventre crônica e ansiedade. É importante agora que admita suas imperfeições e as dos outros.<br /><br />
                  Deve cultivar mais flexibilidade e uma visão mais ampla, para que não fique desolado quando for obrigado a fazer as coisas pela metade.<br /><br />
                  E que tempere sua aguda perspicácia com boas doses bondade, tolerância e calor humano. <br />`,

                  `O nativo se esforça para classificar, selecionar e ordenar tanto o mundo exterior quanto seu mundo interior. Beneficia-se de uma mente clara e precisa, mas ignora a paciência.<br /><br />
                  Com uma única olhada rápida, pode perceber o objetivo a atingir. Mas enerva-se com a lentidão das pessoas (e das coisas) para chegar aos fins.<br /><br />
                  Grande é a sua energia nervosa, a sua eficácia, a sua capacidade de trabalho. Entretanto, é infinitamente mais lúcido sobre os amigos do que sobre si próprio.<br /><br />
                  Em vidas passadas o nativo acumulou muitas ideias, que deve agora realizar. Este é o desafio: aprender a trabalhar com perseverança.<br /><br />
                  Ao buscar o autoconhecimento, ficará surpreso ao descobrir que poucas pessoas têm a sua notável capacidade de análise e adquiriram tantos conhecimentos anteriores. <br />`,

                  `Virgem simboliza a medicina. Netuno transitando no signo favoreceu descobertas médicas e farmacêuticas: a penicilina, por exemplo.<br /><br />
                  Mas Virgem diz respeito também ao trabalho, às disciplinas intelectuais, à vida animal e vegetal e à saúde, no nível intestinal.<br /><br />
                  Num destino individual, Netuno retrógrado afeta mais particularmente esses setores: por exemplo, o nativo pode ser vítima do desemprego, seus empregos sucessivos desagregam-se pouco a pouco; ou então ele é traído por seus empregados e empregadores.<br /><br />
                  Vale lembrar a grande crise económica nos Estados Unidos e a recessão que privou do trabalho milhões de americanos ocorreram nessa época.<br /><br />
                  Nos mapas individuais, há uma ligação com o mau uso do trabalho nas vidas passadas. Não se desesperar, saber se distanciar, refletir sobre a maneira pela qual se considera o trabalho.<br /><br />
                  Em certos casos, o nativo não pode fazer os estudos que deseja: seja por um impedimento exterior ou por um bloqueio psicológico. Por vezes, eles experimentam um trabalho rotineiro, onde permanecem por muito tempo subalternos.<br /><br />
                  Todos esses impedimentos são oportunidades para desenvolver a clarividência, a intuição científica e o dom da análise que notamos, aliás, em toda essa geração nascida com Netuno em Virgem.<br /><br />
                  Se o planeta está retrógrado, o nativo deverá a todo custo ampliar sua visão. É certo que suas vidas passadas foram vividas "sem enxergar um palmo adiante do nariz", sem grandes voos espirituais. Desta vez, seu espírito pode enfim descolar para as alturas. <br />`,

                  `Virgem é o signo relacionado à saúde, à medicina e à qualidade de vida. Signo de inteligência brilhante, mas de nervos frágeis.<br /><br />
                  Quando Plutão transitava por Virgem, a medicina derivada das teorias de Pasteur viu-se contestada.<br /><br />
                  A eficácia dos antibióticos, das vitaminas sintéticas e dos hormônios foi recolocada em questão - não sem razão. Foi quando as medicinas e terapias alternativas surgiram no Ocidente, criadas ou importadas.<br /><br />
                  A acupuntura milenar, até ali restrita à China, teve um florescimento mundial, e a homeopatia, centenária, adquiriu nova juventude.<br /><br />
                  Entretanto, Plutão em Virgem retrógrado não traz um bom equilíbrio de saúde em geral. Aos períodos de trânsito corresponderam inúmeras depressões nervosas, e o desenvolvimento dos tranquilizantes.<br /><br />
                  Os nativos nascidos sob esses trânsitos vivem um carma de tomada de consciência que concerne à medicina: seja porque têm que lutar contra a doença em si mesmo ou para aprender as relações entre corpo, alma e espírito; seja porque, enquanto pesquisadores contestam a medicina oficial.<br /><br />
                  Foram, em vidas passadas, médicos, químicos, alquimistas ou farmacêuticos. Com muita frequência devem liquidar um carma que diz respeito ao seu próprio corpo.<br /><br />
                  A palavra-chave deste período é "terapia", mas também "psicoterapia", à qual são sensíveis os nativos de 1957 a 1972. Os nativos podem explorar a terapia na pesquisa das vidas anteriores!<br /><br />
                  Os nativos de Plutão retrógrado em Virgem têm outros programas de reflexão: o trabalho e o respeito pela Natureza.<br /><br />
                  Sendo Virgem o signo do trabalho, Plutão retrógrado indica aí, no mapa individual, uma dificuldade em se disciplinar nas vidas passadas.<br /><br />
                  O nativo tem grandes faculdades de concentração e quando está motivado, é extremamente trabalhador. Mas ninguém conseguirá fazê-lo realizar o mínimo trabalho se isso não o interessar.<br /><br />
                  Muitos nativos dessa geração foram ou ainda são estudantes rebeldes a toda disciplina escolar: um pesadelo para os professores.<br /><br />
                  Entretanto, nas horas vagas, são capazes de realizar grandes trabalhos, como por exemplo, maquetes de avião, trabalhos de mecânica, química, carpintaria.<br /><br />
                  Quando Plutão está em conjunção com Urano, ambos retrógrados (1964-65), a criança é um pequeno gênio da eletricidade, faz trabalhos manuais com muita inspiração (a configuração indica que já foi engenheiro ou artesão numa vida anterior).<br /><br />
                  Enfim, o virginiano é um ecologista nato, um amigo da Natureza. Os trânsitos de Plutão corresponderam a uma renovação da fitoterapia, ao nascimento dos movimentos de defesa das espécies vegetais e animais ameaçados.<br /><br />
                  Os estágios de botânica (particularmente a medicinal) multiplicaram-se. Nessa época a caça e as criações artificiais começaram a ser contestadas.<br /><br />
                  Uma "carta dos direitos do animal" foi promulgada em escala internacional.<br /><br />
                  Plutão retrógrado em Virgem pode indicar também um carma relativo aos animais. Aqueles que não têm nenhuma piedade do mundo animal também não devem esperar misericórdia da justiça divina.<br /><br />
                  Os nativos que, em suas vidas passadas, caçaram por prazer, por descuido, por perversidade ou para tirar algum lucro, criaram uma dívida cármica por vezes pesada - indicada por Plutão retrógrado em Virgem. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Sente necessidade de controlar e organizar rigidamente sua própria vida, e, também, a dos outros, e muitas vezes você viverá situações em que é forçado a aprender que nem tudo pode ser controlado.<br /><br />
                  Seu imenso desejo de aprimoramento interior poderá levá-lo à busca da autoperfeição, o que lhe trará grande sofrimento, uma vez que sua grande lição na vida é aceitar aquilo que é imperfeito, tanto em si mesmo como no mundo.<br /><br />
                  A dedicação aos outros devera ser contrabalançada com um cuidado maior consigo mesmo. Talvez saiba lidar com o corpo, a cura, a saúde, o trabalho.<br /><br />
                  Por outro lado, pode ter sido ferida justamente em algo na saúde. Pode ter tido pais críticos. É naturalmente perfeccionista, devendo voltar característica para onde ela é bem vinda: no campo da cura e no trabalho.<br /><br />
                  Você tem problemas com seu autocontrole: ou é demais ou é de menos. Você pode usar de rigidez com seu corpo ou sua vida através de disciplina, exercícios e dietas especiais.<br /><br />
                  A pureza e a ordem são tão importantes que o leva a constantemente organizar a si próprio e aos outros, como se o caos sempre o ameace.<br /><br />
                  Você deve aprender que muitas coisas não podem ser controladas, e se sentirá melhor quando for capaz de aceitar tanto situações caóticas como as ordenadas.<br /><br />
                  Na medida em que for delegando certas responsabilidades a outros, perceberá que o universo não irá desmoronar se as pessoas não forem organizadas como você. Você tem dificuldade de processar informações, pensamentos, emoções e experiências em geral.<br /><br />
                  Você pode colecionar coisas, ideias ou informações sem ter a capacidade de criar algo pessoal com elas; pode remoer durante anos uma experiência dolorosa, repisando cada pormenor; preocupa-se demais com detalhes aparentemente insignificantes.<br /><br />
                  Uma técnica de terapia que pode ser útil é a Gestalt-terapia, que usa esta habilidade sua para entrar em contato com emoções reprimidas e traumas antigos.<br /><br />
                  Mas você pode ser do tipo oposto, aquele que evita por completo a aspecto analítico de sua mente, escondendo dos outros essas características.<br /><br />
                  Então, provavelmente, você é capaz de ser organizado para os outros, mas não si próprio. Pode ser bastante disperso, desorganizado e caótico, mas também pode ser mediúnico.<br /><br />
                  Em algum nível você se sente estéril, seja por não ter filhos ou por ser incapaz de concretizar seus pensamentos, e até mesmo conseguindo fazer estas coisas, ainda assim, permaneceria o sentimento de vazio.<br /><br />
                  Se aprender a suportar esses sentimentos com dignidade, sem mergulhar na amargura, poderá encobrir o sentimento de maternidade ou paternidade de outra maneira, como, por exemplo, ao trabalhar em profissões assistenciais, ao lecionar ou ao proporcionar assistência e orientação positiva a que o peça.<br /><br />
                  Mas deve se cuidar para não se sacrificar para cuidar de outro. É preciso cultivar o melhor para si, bem como o melhor para os outros. Os períodos de solidão propiciam a dissolução mansa de tudo, o estar em contato com o mar ou a vivência de um estado de bebedeira são alguns caminhos para liberar tensão.<br /><br />
                  Também pode ser útil cuidar do corpo, aprender a conhecer suas necessidades nutricionais e seus sinais particulares, tendo sempre em vista que suas emoções falam através de seu corpo.<br /><br />
                  Teme e procura controlar as mulheres. Tende a se relacionar com mulheres no nível da Virgem e da Prostituta, porque precisa das duas, e é comum serem traídos por mulheres dóceis, ou religiosas e até frequentarem prostibulos.<br /><br />
                  É preciso aceitar que não se pode colocar etiquetas nas pessoas, e que as mulheres podem ser puras e sensuais ao mesmo tempo.<br /><br />
                  Você pode ser um pouco obsessivo demais com relação ao trabalho ou à sua profissão, achando que não existe nada mais importante em sua vida.<br /><br />
                  Se o trabalho ou a vocação que tiver escolhido se constitui num veículo apropriado para a expressão de sua verdadeira natureza, você ficará realizado e encontrará significado para a vida através do trabalho e do serviço. Caso contrário, o trabalho transformar-se numa área potencial de crises.<br /><br />
                  Tome cuidado para não desejar fazer tudo com perfeição absoluta, pois isso fará com que sua criatividade fique bloqueada, sua produção cai.<br /><br />
                  É preciso aprender a trabalhar com as imperfeições e limitações que a vida lhe impõe, aceitando-as e incluindo-as em sua existência, evitando que desenvolva uma aparência de ser perfeito, e que se torne autocrítico demais, bem como um crítico impiedoso dos outros.<br /><br />
                  Você pode ter tendência a entrar nos relacionamentos numa postura de instrutor ou acreditando que sabe o que é melhor para o outro.<br /><br />
                  Você pode não perceber isso, e ficar muito chocado quando os outros o tratam como um intruso em suas vidas. Também não é saudável entrar em relacionamentos na postura de servo.<br /><br />
                  Tente ajudar os outros quando eles pedirem sua ajuda, respeite as necessidades e escolhas dos outros, aprenda a se resguardar de pessoas que usam você para servi-las.<br /><br />
                  Por mais bem intencionado que você seja, aprenda a dar espaço para os outros assumirem suas próprias vidas. Tende a viver preocupado com a saúde e tentando todos os tipos de medicamentos para curar-se, e sempre ter uma dor substituindo a anterior.<br /><br />
                  Isso não ocorre para os que seguirem os caminhos da cura dos outros, atividades como professores de yoga ou ginástica de qualquer natureza, terapeutas corporais, médicos, enfermeiros, massagistas são boas formas de canalizar sua necessidade de curar.<br /><br />
                  Você tem excesso de energia e precisa canalizá-la de algum modo. Se tentar reter essa energia ficará doente e descobrirá todos os dias uma dor nova.<br /><br />
                  Canalize essa energia para as pessoas que precisam dela e sentirá alivio em seus males, pelo simples fato de haver menos pressão interna em você.<br /><br />
                  Mentalizar diariamente e durante alguns minutos as pessoas ou grupos que estejam doentes ou frágeis por alguma razão, enviando energia de cura (os noticiários de TV falam delas todos os dias, além das que conhecemos no dia-a-dia) é uma forma de livrar-se desse excesso de energia. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno neste setor ou signo se comportará fiel e lealmente nas parcerias e casamento. Ela prestará serviços a seu parceiro. Sensibilidade às insuficiências pessoais e do parceiro.<br /><br />
                  No mapa de um homem, ele procurará uma parceira que o ajude, e se o casamento em si for a causa de problemas, pode ser que ele não se sinta suficientemente apoiado pela parceira/esposa.<br /><br />
                  Talento para profissões que tem relação com a estética ou com funções de acolher as pessoas tipo recepcionista, ou aeromoça.<br /><br />
                  Boa posição para os artistas. Terapia pela Beleza, que pode ser uma fonte para a regeneração da própria pessoa.`
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,
                  `Vivencia a servidão. Os empregos de rotina, trabalhos que denunciam obrigações esforçadas, desadaptação e não liberdade. <br /><br />
                  Quando o que faz não afirma suas reais capacidades, quando exerce uma função que não lhe é adequada, quando projeta no trabalho uma energia que não corresponde às qualidades. <br /><br />
                  Se o trabalho não expressa prazer que nasce da convicção de suas capacidades, úteis ao mundo dos outros, o desequilíbrio energético acontece e a doença se manifesta. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,
                  `Neste nível encontra um trabalho já personalizado, onde já afirma uma capacidade própria, uma competência profissional que se traduz em realização, em afirmação pessoal. <br /><br />
                  No entanto, ainda não altruísta, não generoso, não consciente do prazer da real contribuição. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,
                  `O prazer de ser útil, de fazer a diferença na vida das pessoas com suas capacidades e talentos se manifesta. <br /><br />
                  Quando se disponibiliza em benefício dos outros, concretiza o seu potencial de intervenção própria no mundo, vive a consciência de enriquecer o mesmo mundo dando o melhor de si. <br /><br />
                  Vivencia com amor o serviço da missão da sua alma a favor de um propósito maior do que acredita ser o propósito de sua própria vida. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Desenvolver a fé, aprender a confiar e a deixar a vida fluir sem perder a disciplina: </strong>`
            ]
      },
      {
            title: `libra</strong>`,
            text: [
                  `Quando o Sol ingressa em Libra, marca o Equinócio da Primavera no hemisfério sul e o Equinócio de Outono no hemisfério norte.<br /><br />
                  Equilíbrio entre o dia e a noite simboliza o ideal de Libra: a capacidade de ponderar as questões, de cultivar harmonia nas relações, bom gosto, educação, cordialidade e beleza.<br /><br />
                  A balança coloca os dois lados de uma questão no prato para encontrar a justa medida entre ambas as partes.<br /><br />
                  Libra é um signo de Ar regido por Vênus, cujos interesses são voltados para o amor e para a beleza.<br /><br />
                  Representa a transformação do individualismo em cooperação, portanto, o libriano gosta de investir em parcerias.<br /><br />
                  É uma alegria para o libriano participar do universo do outro, compartilhar o que é seu com os demais.<br /><br />
                  Ser de Libra é andar de mãos dadas, conciliar, levar paz e tranquilidade onde há discórdia.<br /><br />
                  O Sol em Libra concede também o sentido do grupo e um gosto evidente pela política, a justiça, a religião e a diplomacia. O nativo tem uma natureza sensível e refinada.<br /><br />
                  Tem horror à grosseria em geral. Há grande possibilidade de várias uniões e sociedades durante a vida, o que pode trazer problemas ou processos ligados aos casamentos ou às associações.<br /><br />
                  O libriano costuma cuidar bem de si mesmo e de sua aparência pessoal, não se poupa a esforços para se sentir bem consigo mesmo.<br /><br />
                  As partes vulneráveis do seu corpo são: os rins, as glândulas suprarrenais, as vértebras lombares, a bexiga, a uretra e a próstata.<br /><br />
                  Com a idade, há tendência para ficar corpulento. Obriga-se então a seguir um regime adequado para recuperar a sua silhueta.<br /><br />
                  Exercícios e uma alimentação equilibrada permitirão que o nativo viva uma velhice tranquila.<br /><br />
                  O libriano se esforça para ser amado, age e reage muitas vezes em função da sua emotividade e dos seus estados de alma.<br /><br />
                  Mas é preciso cuidado para não perder sua identidade, se tornar dependente, bajulador, hesitante ou condescendente demais.<br /><br />
                  A falta de autonomia e poder de decisão pode gerar desequilíbrio, pois fica sem energia para a ação e as iniciativas.<br /><br />
                  O equilíbrio está no signo oposto em Áries. O Libriano deve aprender a colocar limites, dizer \"não\" quando necessário.<br /><br />
                  Expressar suas vontades de forma saudável é importante para encontrarmos o tão almejado caminho do meio na arte dos relacionamentos. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua em Libra indica forte sensibilidade às atitudes e reações dos outros, especialmente os parceiros no casamento e companheiros de trabalho.<br /><br />
                  Quem tem a Lua em Libra considera a vulgaridade desagradável. Conta com charme e elegância na sua aparência e maneiras pessoais.<br /><br />
                  O senso estético é apurado.
                  Sua casa geralmente é um lugar bonito e com frequência um local de reunião para atividades sociais.<br /><br />
                  É amável, cordial, encantador e bondoso com todos, porque seu bem-estar emocional depende da aprovação dos outros. Prefere ceder a enfrentar situações de conflito. Raramente age por impulso.<br /><br />
                  Os seus relacionamentos são pautados no equilíbrio, seus sentimentos são analisados de acordo com a sua razão.<br /><br />
                  A indecisão pode ser fruto desse excesso de cuidado. Fica facilmente perturbado por relacionamentos desarmoniosos, que têm efeito prejudicial sobre a sua saúde.<br /><br />
                  Esta posição da Lua pode proporcionar talento para relações públicas. Também indica uma ligação com os pais, especialmente a mãe.<br /><br />
                  No lado negativo, pode implicar dependência dos outros para adquirir segurança emocional. Há tendência para ser facilmente influenciável.<br /><br />
                  Precisa trabalhar para aprender a ter pulso firme, assim quando for necessário poderá evitar que alguém tome as iniciativas em seu lugar.<br /><br />
                  É preciso também aprender a impor as suas vontades, pois muitas vezes você esquece de si mesmo para colocar os outros em primeiro plano. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Com Libra no ascendente, a expressão pessoal é pensada, medida e considerada, levando sempre em conta a opinião ou a reação dos outros.<br /><br />
                  Tudo o que os outros querem ou precisam é levado em consideração com julgamentos reflexivos.<br /><br />
                  A abordagem da vida é dirigida para o relacionamento, a sociabilidade e a comunicação. A atitude geral é de cooperação, de busca de harmonia.<br /><br />
                  Pode haver interesse pelas artes e também por sistemas abstratos, como política e a matemática.<br /><br />
                  Pode haver uma qualidade estética e uma elegância natural nos gestos, na fala, na escolha de roupas, acessórios e adornos.<br /><br />
                  O sentido de justiça, prudência e equilíbrio inerentes a este signo conferem-lhe graça e harmonia.<br /><br />
                  Justamente por isso, pode ter dificuldade para lidar com circunstâncias que exigem decisões diretas e imediatas.<br /><br />
                  Pode se sentir perdido quando tem de atuar sozinho e de escolher por si mesmo. A tendência é de se apoiar nos outros. Ao pesar na balança todos os lados da situação, pode vacilar ou ficar indeciso.<br /><br />
                  Em casos mais extremos degenera em sociabilidade exagerada, inércia, preguiça e dependência emocional. É mais fácil deixar outra pessoa decidir para si.<br /><br />
                  <strong> Mas o desafio é desenvolver o seu próprio sistema de valores, padrões e ideias sobre os quais possa fundamentar as suas iniciativas.</strong><br /><br />
                  Aprender a fazer suas próprias escolhas e se responsabilizar pelas consequências.<br /><br />
                  Aprender a colocar suas necessidades de forma saudável, sem se tornar condescendente demais.<br /><br />
                  Quando aprende a equilibrar a sua necessidade de ouvir os outros e os seus próprios desejos e vontades, ganha a capacidade de harmonizar com ligeireza e desembaraço todas as polaridades da vida: eu / o outro, pessoal / social, formal / informal, mundano / sagrado, intuição / lógica, masculino / feminino.<br /><br />
                  O tipo físico associado a este ascendente é bem proporcionado, naturalmente ágil e elegante. Conta com charme pessoal, apesar de um pouco roliço e com tendência a ganhar peso devido à preguiça. <br />`,

                  `Mercúrio no signo de Balança indica uma mente principalmente preocupada com relações humanas e psicologia.<br /><br />
                  Os nativos possuem intensa curiosidade a respeito dos padrões de pensamento e comportamento dos outros.<br /><br />
                  Portanto, sente-se atraído pelas áreas de psicologia, astrologia, relações públicas, sociologia, diplomacia ou direito. Para eles, são essenciais uma boa comunicação e alegria nos relacionamentos.<br /><br />
                  Preferem trabalhar em parceria intelectual com os outros e geralmente se comunicam com facilidade, devido ao interesse pelo que os outros pensam.<br /><br />
                  Com forte senso de justiça, geralmente são honestos em suas relações e equilibrados nas negociações e em todos os contatos mentais.<br /><br />
                  Gostam de considerar todos os lados de uma questão antes de tomar uma decisão. Mas se esse desejo for utilizado de forma errada, pode conduzir à indecisão e perder a oportunidade de agir.<br /><br />
                  Contudo, quando as suas decisões são tomadas, elas geralmente são justas e ponderadas.<br /><br />
                  Esta posição de Mercúrio é boa para as profissões nas áreas legal, de aconselhamento, arbitragem e outros trabalhos de relações públicas, como vendas e negociações.<br /><br />
                  Os nativos buscam se associar com as pessoas de mentes requintadas, boas maneiras e reputação de honestidade.<br /><br />
                  Modos deselegantes e motivações desonestas são considerados desagradáveis e evitados sempre que possível.<br /><br />
                  São muito sensíveis aos odores, à estética, aparência pessoal e conduta dos outros. Consideram os trajes inadequados e o linguajar vulgar como afrontas sociais.<br /><br />
                  Gentis e atenciosas em sua comunicação podem ser rígidos quando estão envolvidos princípios.<br /><br />
                  Podem cometer o erro de esperar dos outros o mesmo grau de disciplina mental que exigem de si mesmas. Em tipos muito desenvolvidos, essa qualidade conduz à profundidade.<br /><br />
                  Porém as pessoas superficiais com esta posição de Mercúrio podem não ter firmeza em suas convicções, porque tendem a concordar com seus companheiros, visando obter popularidade e aceitação. <br />`,

                  `Vênus está associada ao prazer, a tudo o que nos é agradável, ao que amamos e valorizamos.<br /><br />
                  Em Libra, o signo das parcerias, Vênus quer se apresentar da melhor forma possível para agradar e seduzir. Mas também espera reciprocidade!<br /><br />
                  Vênus em Libra é discreta e refinada, não gosta de arroubos exacerbados, rudes e sexualmente primitivos. Ela quer estar junto de alguém para compartilhar a vida, deseja alguém que seja intelectual, igual, cúmplice e amigo.<br /><br />
                  O amor deve ser esteticamente belo, doce e amável, cheio de pequenas atenções com o parceiro.<br /><br />
                  Há necessidade de vivenciar um amor sofisticado e refinado. Adora receber aquelas atenções românticas que parecem tão fora de moda nos dias atuais.<br /><br />
                  Muitas vezes, porém, cede aos caprichos do seu parceiro somente para não desagradar. Pode haver certo distanciamento afetivo na tentativa de evitar conflitos, agressões, grosserias e situações desagradáveis.<br /><br />
                  É preciso atenção: isso pode encobrir questões mais profundas nas relações. Os nativos com Vênus em Libra são amantes da beleza e de qualquer demonstração artística.<br /><br />
                  Possuem uma necessidade íntima instintiva que os impulsiona a procurar o par ideal, nem que isso resulte numa busca eterna.<br /><br />
                  Capazes de uma sedução sutil e diplomática atraem aquilo que desejam, sem se impor ao parceiro que escolheu. <br />`,

                  `A pessoa com esse Marte pode focalizar suas iniciativas em favor da arte e principalmente da dança.<br /><br />
                  A qualidade do movimento e a expressão corporal são balanceadas pela necessidade de se expressar de forma plástica e bela.<br /><br />
                  Poderá exibir ardor em matéria de amor podendo se casar precocemente, por paixão. Quem possui Marte nesse signo tem capacidade de afirmação em grupos ou sociedade e bom poder de liderança.<br /><br />
                  Consegue alcançar suas metas sem se impor. Poderá agir como apaziguador em disputas, mesmo legais. Marte nesse signo indica pouca fertilidade.<br /><br />
                  Mesmo com pouco poder de ação, por estar \"exilado\" em Libra, Marte poderá agir como catalisador, ou seja, a pessoa pode sofrer passivamente a agressividade dos outros.<br /><br />
                  É preciso cuidado para não se envolver em conflitos conjugais, disputas e brigas com parceiros ou sócios. Nos grupos sociais terá tendência a promover-se individualmente.<br /><br />
                  Aprendizado: agir com a aprovação do outro, agir em conjunto. Expressar a vontade própria sem se indispor. Deve tomar as iniciativas com mais delicadeza, prudência e diplomacia.<br /><br />
                  Pautar as ações com uso da estratégia ao invés de impor as suas vontades. É preciso ter jogo de cintura. <br />`,

                  `O nativo pode obter algum êxito social que lhe permitirá viver com despreocupação. Ganhos podem vir através do casamento ou de sociedades comerciais.<br /><br />
                  Mas é preciso cuidado com o cumprimento de contratos, sejam profissionais, comerciais ou matrimoniais, para não perder dinheiro.<br /><br />
                  Pode se destacar como advogado e obter benefícios através de pleitos ou litígios. Também como assessor, diplomata, designer, decorador, profissional da beleza ou estilista.<br /><br />
                  As atividades culturais o agradam. Nos seus tempos livres gosta de dançar, ir ao cinema, ao teatro ou assistir a espetáculos. Gosta de estudar e viajar em boa companhia.<br /><br />
                  Pode ter muitos amigos, contatos e habilidade no trato com o público. A sua grande capacidade para convencer as pessoas sobre certas ideias ou planos faz com que seja um excelente promotor.<br /><br />
                  É do tipo que não cultiva e nem suporta brigas ou discussões conflituosas. <br />`,

                  `Saturno no signo de Libra traz a percepção de que para se conseguir qualquer coisa de valor duradouro, ou mesmo tornar a vida possível, é necessária a colaboração humana.<br /><br />
                  Essa colaboração deve ser contínua para ser eficaz. Mas a colaboração contínua só é possível quando todas as partes de um projeto são tratadas com justiça, e a justiça exige regras de conduta e compromisso de todos.<br /><br />
                  Cada pessoa deve lutar para completar o seu trabalho e deve ser responsável pelo todo. A disciplina e a responsabilidade nascem da compreensão de que as relações humanas impõem compromisso mútuo, como no casamento, nas sociedades e nas amizades íntimas.<br /><br />
                  Graças ao senso de responsabilidade nos relacionamentos, os nativos com esta posição de Saturno lidam bem com acordos em negócios, planejamento de organizações, formulação de contratos legais e divisão cooperativa de trabalho. Com frequência se tornam advogados, juízes e mediadores.<br /><br />
                  Os contratos conjugais com frequência são de natureza cármica, surgem das interações com pessoas que contraíram responsabilidades e dívidas morais em vidas passadas.<br /><br />
                  Saturno em Libra também pode indicar casamentos tardios ou com pessoas sérias, com pesadas obrigações comerciais ou profissionais.<br /><br />
                  O casamento com frequência está sujeito a obrigações, trabalho árduo e paciência. Esta é uma poderosa posição para Saturno, oferece muita consciência e responsabilidade sociais.<br /><br />
                  No seu melhor, os nativos com frequência atingem posições de honra e riqueza graças à sua habilidade para trabalhar com outros. Uma habilidade que inclui receptividade, tato, confiabilidade e boa organização.<br /><br />
                  No seu pior, o nativo pode demonstrar atitudes exigentes com as pessoas e a tendência de forçá las a trabalhar. Pode não haver amor, perdão e senso de responsabilidade nos seus relacionamentos.<br /><br />
                  Os nativos tendem a aplicar a lei rigorosamente, em vez de compreender a justiça que está implícita em sua essência. O conceito de justiça que executam tão rigorosamente é dissimulado por sua opinião.<br /><br />
                  É preciso cuidado para não assumir compromissos demais, que só podem cumprir à custa do excesso de trabalho.<br /><br />
                  Em alguns casos, os nativos não conseguem cumpri lo, e o ressentimento que isso provoca, nos outros só resulta em sua própria queda de status. <br />`,

                  `Urano em Libra indica uma geração de pessoas com novas ideias sobre casamento, sociedades e conduta social.<br /><br />
                  Procuram liberdade no casamento e consideram o relacionamento mais importante do que o contrato legal.<br /><br />
                  Com Urano em Libra, os nativos podem viver experiências com formas alternativas de vida, como a vida comunitária e outras inovações sociais.<br /><br />
                  Podem cultivar novos conceitos de justiça e tentarão modificar e modernizar os códigos legais existentes. Essas pessoas possuem um insight aguçado sobre todos os tipos de relações humanas.<br /><br />
                  Podem até mesmo desenvolver um conhecimento intuitivo ou telepático das motivações de outras pessoas.<br /><br />
                  É preciso trabalhar a tendência para a rebeldia nas questões relativas ao casamento, parcerias ou sociedades.<br /><br />
                  Trabalhar a inquietação e o desejo de liberdade em relacionamentos que exijam responsabilidade mútua. <br />`,

                  `É a geração do pós-guerra. Nesta época surgiu um desejo de voltar a recuperar os ideais perdidos e produziu-se um movimento ideológico a favor da paz e da justiça que atingiu o seu auge nos anos 60.<br /><br />
                  Mas o idealismo exaltado também produziu certo fanatismo, o qual desembocou num aumento do terrorismo, da hipocrisia aplicada à política e ao sistema judicial. Também deu origem aos rebeldes sem causa.<br /><br />
                  Num aspecto mais pessoal, Netuno em Libra produz nostalgia pelo amor perfeito, pela igualdade entre os sexos, pela compreensão mútua e pelo par ideal.<br /><br />
                  Na via negativa traz problemas e ilusões em relação ao sexo oposto, pouca força de vontade e de noção das realidades.<br /><br />
                  As pessoas nascidas nesta posição questionam os conceitos acerca das relações, das leis e das obrigações. <br />`,

                  `Libra é o signo da justiça, das relações humanas e das associações. Plutão neste signo estimula grandes transformações em relação às parcerias e relacionamentos afetivos.<br /><br />
                  Durante o período em que transitava por Libra, vivenciamos questionamentos e mudanças no controle da natalidade, nos direitos humanos e no matrimônio.<br /><br />
                  As bases e as motivações tradicionais das relações dos casais praticamente desapareceram nesse período, e com elas muito da hipocrisia e das convenções sociais.<br /><br />
                  A moralidade estreita ou os romantismos sem sentido já não geram estáveis e relacionamentos duradouros. Libra significa reequilibrar, corrigir erros, separar o verdadeiro do falso, pesar o valor de cada coisa.<br /><br />
                  É função de Plutão trazer para a luz tudo o que é falso e inútil. Libra é um signo do Ar e Plutão tem de limpar a poluição mental, trazer a capacidade de reorganizar-se.<br /><br />
                  Libra oferece a oportunidade de escolha. Tudo o que entendemos por lei — seja civil, religiosa, moral ou ética — pode ser questionado nas suas bases.<br /><br />
                  Plutão faz o seu trabalho regenerador, restabelecendo a igualdade inerente a toda a humanidade. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a ter autonomia e a ser corajoso sem perder a diplomacia:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Libra traz do passado (dessa vida e de vidas passadas) a dependência e a necessidade exagerada do outro para ser feliz e se sentir bem. Devida à falta de identidade, acredita que precisa do outro para se conhecer.<br /><br />
                  Acaba vivendo assim à sua sombra. Tem a capacidade de levar harmonia a ambientes tensos, mas corre o risco de se esquecer da sua harmonia interior.<br /><br />
                  Há dificuldade para dizer \"não\". Costuma ser indeciso e pede conselhos antes de agir. Há tendência para a submissão, a insegurança e o medo de se afirmar.<br /><br />
                  Costuma usar frases como \"Não faz mal, está tudo bem\" mesmo que não esteja. Normalmente, em público, está sempre a sorrir. Falta de respeito próprio, chega a sacrificar-se e a prejudicar-se a si próprio em prol da harmonia geral.<br /><br />
                  Sonha com relacionamentos perfeitos, equilibrados e pode se desiludir à espera que o outro seja o seu ideal. Está sempre a tentar ser justo e agradar as pessoas de quem mais depende. Prejudica as suas próprias necessidades e objetivos pessoais pela harmonia exterior.<br /><br />
                  Com o Nodo Norte (Cabeça do Dragão) em Áries, o aprendizado é superar suas indecisões e encontrar o equilíbrio interior. Valorizar-se mais e cuidar do corpo físico.<br /><br />
                  Aprender a valorizar sua individualidade, a gostar de estar sozinho, a deixar de \"precisar\" de alguém. Redescobrir sua identidade para encontrar sua autonomia e sua realização pessoal.<br /><br />
                  Fazer de si mesmo uma prioridade e não apenas uma extensão do outro. Ser mais assertivo, corajoso, impulsivo e positivo a enfrentar os conflitos.<br /><br />
                  Assumir o seu guerreiro interno e as qualidades de liderança, guiado pelo coração. Confiar mais em si próprio e nas suas capacidades ao ponto de se tornar independente.<br /><br />
                  Você veio aprender a passar mais tempo sozinho, a manter sua estabilidade quer o outro esteja ou não. Seguir os seus impulsos, confiar nas suas capacidades e aprender a tomar iniciativas por contra própria.<br /><br />
                  Mas tudo isso sem deixar de considerar os outros com cordialidade, gentileza e equilíbrio nas relações. <br />`,

                  `Neste caso, a felicidade é profundamente afetada pelo curso das associações intimas, por fatores sociais ou pela intrusão de forças espirituais na personalidade.<br /><br />
                  Há um anseio de personificar grandes ideais, ou até mesmo Deus – muitas vezes em consequência de uma sensibilidade exagerada ou de uma indecisão psicológica quando frente a frente com a sociedade.<br /><br />
                  A tendência para dramatizar-se ou assumir atitudes sociais com a finalidade de alcançar os próprios objetivos e a segurança interior, frequentemente está em evidência.<br /><br />
                  Exemplos: o profeta persa Bab; o Mikado Mutsu-Hito, Franz Lizt, Meher Baba, o Duque de Windsor. <br />`,

                  `Você pode sentir os relacionamentos como perigosos ou como algo a ser evitado, devido à agressividade no ambiente da infância.<br /><br />
                  Porém, pode aprender muito quando encara os aspectos desagradáveis de uma relação afetiva, como a hostilidade e o instinto de competição, aos quais é demasiadamente suscetível.<br /><br />
                  Tende a casar ou a ter relações íntimas importantes com pessoas que realizam trabalhos de cura. Pode passar por fases nunca desejadas de separação e solidão, que devem ser aproveitadas para uma autoanálise.<br /><br />
                  Seu dom maior é oferecer às pessoas com quem se relaciona a oportunidade de conquistarem seu próprio espaço. Sabe da importância dos relacionamentos com entendimento e harmonia.<br /><br />
                  Pode ter sido ferido justamente nesse setor, talvez tendo que lidar com pessoas demasiadamente rudes, egoístas ou injustas. É preciso construir relacionamentos equilibrados e harmoniosos.<br /><br />
                  Também é possível que não tenha se sentido valorizado ou tenha sido visto somente por sua aparência. Pode ter recebido facilidades que mais tarde feriram a sua capacidade de luta.<br /><br />
                  Os relacionamentos são para você muito importantes e você pode ter se machucado com eles várias vezes. Tais experiências têm a ver com seus primeiros relacionamentos com a mãe e você pode acreditar que os relacionamentos são perigosos e devem ser evitados.<br /><br />
                  Ou, pelo menos, enfrentados com uma couraça protetora. Isso pode levá-lo a um estado de tristeza e de isolamento e a uma atitude de defesa até que reconheça e identifique a origem dessas repetições.<br /><br />
                  Sua infância pode ter sido marcada por relações agressivas ou, talvez, pela falta de qualquer relacionamento, sendo mantida uma máscara de polidez para encobrir sentimento de hostilidade, vingança e competitividade.<br /><br />
                  Assim, você pode ter aprendido mais a manter uma defesa do que formar relacionamentos. Você pode ter aprendido a saber agradar a todos, a significar tudo para todas as pessoas e a atenuar os conflitos potenciais.<br /><br />
                  Pode ter adquirido uma superdose de diplomacia e de tato, tornando-o medroso, frágil e defensivo.<br /><br />
                  No entanto, o lado bom disso tudo é que você é capaz de desenvolver a capacidade de enfrentar criativamente situações carregadas de conflitos, de combater honestamente e confiar no relacionamento durante todo o processo.<br /><br />
                  Como você tem problemas nos relacionamentos, há certo medo inconsciente do outro, o que o faz muitas vezes imaginar que o outro é que provoca esses medos com seu comportamento ou intenções. É preciso separar muito bem o que é reflexo de seus medos e o que é realmente provocado pelo outro.<br /><br />
                  Se o outro se vê interpretado de modo errado por você, vai tentar fugir da relação para se defender, mesmo que goste muito de você. Nesse processo podem surgir situações de servidão emocional. Com o decorrer do tempo, o relacionamento pode se tornar penoso para ambas as pessoas envolvidas.<br /><br />
                  Você pode ter tendência para atrair pessoas que têm características opostas às suas. Você pode aprender muito a respeito de si próprio ao observar o tipo de pessoas pelas quais é atraído e que se sentem atraídas por você, porque simbolizam seus potenciais ou suas próprias fraquezas.<br /><br />
                  Por exemplo, se sempre atrai pessoas "incapazes", isso pode significar que não está admitindo a existência em si mesmo de alguma deficiência, ou que você precisa dessas pessoas para se sentir poderoso.<br /><br />
                  Por outro lado, se está sempre se relacionando com pessoas dominadoras, isso pode significar que não reconhece seu próprio poder.<br /><br />
                  Se com frequência se sente vítima nos relacionamentos, precisa descobrir os mecanismos pelos quais inconscientemente provoca essa situação. É preciso descobrir qual é a sua participação nessas situações que se repetem. O que você "ganha" sendo dominado ou se relacionando com pessoas dependentes.<br /><br />
                  É provável que você já tenha mantido um importante relacionamento vivenciado como algo muito doloroso, do qual não pode escapar ou do qual levou muito tempo para se recuperar. Tente encontrar a ligação que existe entre essa situação e algum sentimento de infância.<br /><br />
                  Descubra se você não está repetindo comportamentos de um dos progenitores nos seus relacionamentos hoje. Descubra se não sente algum medo em relação às pessoas hoje, que é o mesmo medo que sentia em relação a sua mãe ou seu pai.<br /><br />
                  Você pode passar por períodos não desejados de separação e isolamento que lhe são impostos. Pode continuar mantendo relacionamentos dolorosos até que um dia declara que está farto de tudo e decide fechar as portas de seu coração e se isolar.<br /><br />
                  Esse retraimento pode ser uma simples fuga, mas pode ser um período criativo se você for capaz de aproveitar para sondar sua alma e descobrir o que realmente está ocorrendo. Você vive o conflito de sua necessidade de pessoas e sua necessidade de solidão. É importante você conciliar as duas necessidades.<br /><br />
                  Se não puder satisfazer sua necessidade de ficar sozinho, separado e isolado, poderá achar que a única saída é fazer as malas e ir embora, (ou sua parceira fará isso), quando um pouco mais de honestidade emocional poderia ter sido suficiente.<br /><br />
                  Observe se você não é do tipo que quando está se sentindo desprezado, magoado, coagido, tem dificuldade de enfrentar a situação. Observe se não fica extravasando seus sentimentos de raiva em vários outros relacionamentos.<br /><br />
                  Veja, também, se você gosta de lutas pelo poder nos relacionamentos, querendo que tudo seja feito de acordo com suas condições e fazendo valer sutilmente sua própria vontade.<br /><br />
                  Você é muito sensível às críticas ou interrogatórios, mas precisa se abrir a conversas profundas com sua parceira, de modo a entender as necessidades da relação e poder melhorá-la, sem julgar essas negociações como ataques pessoais.<br /><br />
                  Você tem pavor de ser irracional ou injusto, por isso pode ser muito diplomático e cauteloso ao expressar seus sentimentos. Teme seus próprios sentimentos negativos que podem crescer e estourar em cenas de acusações mútuas.<br /><br />
                  Você tende a ter relacionamentos íntimos com pessoas que trabalham no campo da cura (médicas, enfermeiras, religiosas, professoras, etc.), mas deve tomar cuidado para não assumir o papel de "doente", isso seria muito destrutivo para você e para o relacionamento.<br /><br />
                  Você tem muito a oferecer no campo da cura, da orientação a outras pessoas. Poderá trabalhar seus próprios problemas ao se confrontar com os problemas das pessoas que ajuda. Você é de extrema valia ao ajudar outras pessoas a conquistarem seu próprio espaço na vida e a se descobrirem.<br /><br />
                  Você tem uma imagem carismática, que atrai as pessoas. Portanto, cuidado para não abusar desse dom tornando-se egocêntrico. Lembre que sua imagem tende a ser refletida por outras pessoas, influenciando-as.<br /><br />
                  Isso não é muito bom para você e tão pouco para elas, pois você também tem a tendência de se espelhar em outras pessoas, chegando ao ponto de não mais separar o que é seu e o que absorveu dos outros. <br />`,

                  `O parceiro ideal é aquele que seja sociável, tenha forte senso de ética e de justiça, interessado em artes e seja charmoso.<br /><br />
                  As parcerias podem ser marcadas pela gentileza, requinte, ambientes refinados e diplomacia. Podem ser pessoas do mundo artístico, diplomatas ou juristas.<br /><br />
                  Mas também pode indica nativos indecisos, que mantém apenas as aparências numa parceria, diferente do que seja verdadeiro. De qualquer maneira, Juno neste signo ganha força.<br /><br />
                  Ela representa o casamento e as associações e Libra é um signo que favorece parcerias harmoniosas e equilibradas. Portanto, o relacionamento duradouro está favorecido. <br />`,

                  `Em vidas passadas o nativo desenvolveu bom gosto. Era um artista que deveria ter colocado a sua arte a serviço da sociedade. Mas provavelmente não o fez suficientemente.<br /><br />
                  Sensível à harmonia, mas demasiado sensível ao detalhe desarmônico, incomodava os outros com suas críticas e com a sua indecisão.<br /><br />
                  A sua falta de tato e suas intrigas haviam torpedeado a harmonia do grupo. Pode indicar tendência e encontrar um parceiro desleal em suas associações, ou um cônjuge infiel no casamento.<br /><br />
                  Na vida atual deve se esforçar para levar harmonia a todos, contribuir com sua arte. Que suas palavras tragam paz, que haja um diálogo aberto e íntegro em suas associações. <br />`,

                  `Pode haver certo distanciamento afetivo na tentativa de evitar conflitos, agressões, grosserias e situações desagradáveis.<br /><br />
                  É preciso atenção: isso pode encobrir questões mais profundas nas relações.<br /><br />
                  Em suas vidas passadas, o pior inimigo do nativo foi ele mesmo. Demasiado romântico, demasiado perfeccionista, deve aprender a amar com indulgência, equilibrando amor e firmeza.<br /><br />
                  Ser condescendente, mas ao mesmo tempo aprender a colocar limites de forma saudável. <br />`,

                  `Em vidas passadas o nativo desperdiçou muito tempo com a vida social e mundana. Traz conflitos e grandes dificuldades em suas relações afetivas e familiares.<br /><br />
                  Quando não aguenta mais, explode, e seu contrato voa em pedaços. Mesmo que os acessos de violência sejam raros, ele se comporta inconscientemente como se quisesse destruir seu casamento (ou suas associações).<br /><br />
                  Deve procurar agora encontrar seu equilíbrio em si mesmo. Deve ser mais tolerante, gentil, cordial, diplomático, ponderado, paciente e cooperativo. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Nas encarnações precedentes, o nativo adquiriu e cultivou profundamente o sentido da justiça. Mas o nativo pode trazer com ele ressentimentos contra certas injustiças vividas neste passado anterior.<br /><br />
                  Tem também a tendência de representar um pouco demais o papel de justiceiro.<br /><br />
                  A lição cármica a trabalhar, sem se deixar implicar pessoalmente nas questões dos outros, é a de ponderar sem mágoas, aprender a julgar calmamente.<br /><br />
                  Para alguns, que oscilaram muito entre diferentes ideais, trata-se de encontrar enfim uma filosofia firme e permanente. <br />`,

                  `A posição não é má, uma vez que Saturno está exaltado neste signo. Trata-se de um nativo sério, que tem consciência de suas responsabilidades.<br /><br />
                  O carma que trouxe de vidas passadas o leva muitas vezes a ser o conciliador entre partidos opostos.<br /><br />
                  Tem um grande poder sobre a orientação do destino dos outros. Pode influenciar muito seus parceiros e colaboradores.<br /><br />
                  Deve lutar contra a tentação de utilizar esta influência para benefícios próprios e egoístas.<br /><br />
                  A flexibilidade, a cordialidade, a diplomacia e habilidades sociais devem torná-lo mais versátil e equilibrado. O seu programa é aprender a reconciliar, sem trair a ética, a justiça e a verdade. <br />`,

                  `Em suas vidas passadas, era difícil para o nativo tomar decisões. Desejava ser conciliador, a serviço de todos. Mas essa atitude de flexibilidade excessiva o impedia de se ater a uma escala de valores firmes.<br /><br />
                  Muito sensível à qualquer desarmonia, mas ao mesmo tempo morreria de tédio em meio a uma parceria rotineira e sem problemas.<br /><br />
                  Assim, pode ser mal compreendido por seus parceiros e colaboradores. Aqueles que deseja ajudar podem acusá-lo de traição.<br /><br />
                  Deve continuar, na vida atual, a amar a todos e a conciliaras pessoas em suas contendas. Mas sempre cultivando sua própria independência de ideias. Ser compreensivo não deve impedi-lo de ser imparcial. <br />`,

                  `Certos astrólogos observaram que o fim da passagem de Netuno em Libra coincidiu com o fenómeno hippie.<br /><br />
                  Esta geração tinha como lema "Faça o amor, e não a guerra" (Libra, regida por Vénus, simboliza o amor e o casamento. Está oposta a Carneiro, símbolo da guerra).<br /><br />
                  Mas falta ao nativo o realismo nesses assuntos, amor e casamento. Apaixonados pela harmonia, fugindo dos sofrimentos do plano terrestre, há tendência de se evadirem da vida quotidiana, de se recusarem a enfrentar as responsabilidades amorosas e conjugais.<br /><br />
                  Netuno retrógrado em Libra pode indicar desilusões nesse âmbito: erro sobre o parceiro, falta de realismo dos contratos assinados, embustes em todos os âmbitos.<br /><br />
                  Com muita frequência é preciso um divórcio para que a pessoa perceba seus erros de apreciação e reajuste suas percepções.<br /><br />
                  Muitos artistas, em geral músicos, sensíveis a todas as formas de beleza, tem bastante dificuldade para enfrentar a dureza da vida e defender seus interesses. É mais fácil, evidentemente, refugiar-se no sonho, na droga ou nos amores marginais.<br /><br />
                  O nativo ficará feliz quando não se deixar mais levar por suas emoções como uma pluma ao vento, quando a menor desarmonia não o lançar mais num pânico febril. E também quando se tornar mais indulgente para com os outros. <br />`,

                  `É um período de transformações, limpezas e purificações nos assuntos ligados à Justiça e ao Casamento (regidos por Libra).<br /><br />
                  Assistimos a corajosos esforços para tornar a Justiça mais justa, as prisões mais humanas, a pena de morte mais rara e os contratos de casamento menos constrangedores.<br /><br />
                  No plano individual, o nativo parece ser forçado por Plutão retrógrado em Balança a rever suas ideias nesses dois âmbitos. Ou bem enfrenta dificuldades judiciárias, processos etc.<br /><br />
                  Ou se envolve num casamento que lhe dá oportunidade de reparar erros cármicos, e por isso mesmo se revela profundamente transformador.<br /><br />
                  Seu equilíbrio de vida será difícil de atingir; o casamento está sujeito a enfrentar furacões mortais. Em todo caso, há fortes chances de que o nativo (ou a nativa) encontre-se de novo, nesta vida, casado com um cônjuge que já fora o seu numa vida passada.<br /><br />
                  O objetivo espiritual de Plutão retrógrado em Libra é o de progredir na consciência da justiça, de ajudar a sociedade, estabelecer um mundo mais justo e equilibrado.<br /><br />
                  O nativo deve aceitar com paciência os transtornos que lhe são impostos, conseguindo com isso certo desprendimento. É meta é a purificação das relações. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Sente os relacionamentos como perigosos ou como algo a ser evitado, devido à agressividade no ambiente da infância. Porém, pode aprender muito quando encara os aspectos desagradáveis de uma relação afetiva, como a hostilidade e o instinto de competição, aos quais é demasiadamente suscetível.<br /><br />
                  Tende a casar ou a ter relações íntimas importantes com pessoas que realizam trabalhos de cura. Pode passar por fases nunca desejadas de separação e solidão, que devem ser aproveitadas para uma autoanálise. Seu dom maior é oferecer às pessoas com quem se relaciona a oportunidade de conquistarem seu próprio espaço.<br /><br />
                  Sabe da importância dos relacionamentos e de se haver entendimento e harmonia. Pode ter sido ferido justamente nesse setor, talvez tendo que lidar com pessoas demasiadamente rudes, egoístas ou injustas.<br /><br />
                  Precisam construir relacionamentos equilibrados e harmoniosos. Também é possível que não tenha se sentido bonito, ou, pelo contrário, tenha sido visto somente por sua aparência. Pode ter recebido facilidades que mais tarde feriram a sua capacidade de luta.<br /><br />
                  Os relacionamentos são para você muito importantes, e você pode ter se machucado com eles várias vezes. Tais experiências têm a ver com seus primeiros relacionamentos com a mãe, e você pode acreditar que os relacionamentos são perigosos e devem ser evitados, ou pelo menos, enfrentados com uma couraça protetora.<br /><br />
                  Isso pode levá-lo a um estado de tristeza e de isolamento e a uma atitude de defesa até que reconheça e identifique a origem dessas repetições.<br /><br />
                  Sua infância pode ter sido marcada por relações agressivas ou, talvez, pela falta de qualquer relacionamento, sendo mantida uma máscara de polidez para encobrir sentimento de hostilidade, vingança e competitividade.<br /><br />
                  Assim, você pode ter aprendido mais a manter uma defesa do que formar relacionamentos. Você pode ter aprendido a saber agradar a todos, a significar tudo para todas as pessoas e a atenuar os conflitos potenciais.<br /><br />
                  Pode ter adquirido uma superdose de diplomacia e de tato, tornando-o medroso, frágil e defensivo.<br /><br />
                  No entanto, o lado bom disso tudo é que você é capaz de desenvolver a capacidade de enfrentar criativamente situações carregadas de conflitos, de combater honestamente e confiar no relacionamento durante todo o processo.<br /><br />
                  Como você tem problemas nos relacionamentos, há um certo medo inconsciente do outro, o que o faz muitas vezes imaginar que o outro é que provoca esses medos com seu comportamento ou intenções.<br /><br />
                  É preciso separar muito bem o que é reflexo de seus medos e o que é realmente provocado pelo outro. Se o outro se vê interpretado de modo errado por você, vai tentar fugir da relação para se defender, mesmo que goste muito de você.<br /><br />
                  Nesse processo podem desenvolver-se situações de servidão emocional, e com o decorrer do tempo, o relacionamento pode tornar-se penoso para ambas às pessoas envolvidas e, provavelmente será autodestrutivo.<br /><br />
                  Você pode ter tendência a atrair pessoas que têm características opostas às suas. Você pode aprender muito a respeito de si próprio ao observar o tipo de pessoas pelas quais é atraído e que se sentem atraídas por você, porque simbolizam seus potenciais ou suas próprias fraquezas.<br /><br />
                  Por exemplo, se sempre atrai pessoas "incapazes", isso pode significar que não está admitindo a existência em si mesmo de alguma deficiência, ou que você precisa dessas pessoas para se sentir poderoso.<br /><br />
                  Por outro lado, se está sempre se relacionando com pessoas dominadoras, isso pode significar que não reconhece seu próprio poder. Se com frequência se sente vítima nos relacionamentos, precisa descobrir os mecanismos pelos quais inconscientemente provoca essa situação.<br /><br />
                  É preciso descobrir qual é a sua participação nessas situações que se repetem, o que você "ganha" sendo dominado ou se relacionando com pessoas dependentes.<br /><br />
                  É provável que você já tenha mantido um importante relacionamento, vivenciado como algo muito doloroso, do qual não pode escapar ou do qual levou muito tempo para se recuperar. Tente encontrar a ligação que existe entre essa situação e algum sentimento de infância.<br /><br />
                  Descubra se você não está repetindo comportamentos de um dos progenitores nos seus relacionamentos hoje. Descubra se não sente algum medo em relação às pessoas hoje, que é o mesmo medo que sentia em relação a sua mãe ou pai.<br /><br />
                  Você pode passar por períodos não desejados de separação e isolamento que lhe são impostos. Pode continuar mantendo relacionamentos dolorosos até que um dia declara que está farto de tudo e decide fechar as portas de seu coração e isolar-se dos outros.<br /><br />
                  Esse retraimento pode ser uma simples fuga, e aí não traz vantagem nenhuma, ou pode ser um período criativo se você, por traz de suas defesas, for capaz de aproveitar para sondar sua alma e descobrir o que realmente está ocorrendo.<br /><br />
                  Você vive o conflito de sua necessidade de pessoas e sua necessidade de solidão, e é importante você conciliar as duas necessidades.<br /><br />
                  Se não puder satisfazer sua necessidade de ficar sozinho, separado e isolado, poderá achar que a única saída é fazer as malas e ir embora, (ou sua parceira fará isso), quando um pouco mais de honestidade emocional poderia ter sido suficiente.<br /><br />
                  Observe se você não é do tipo que quando está se sentindo desprezado, magoado, coagido, e tem dificuldade de enfrentar a situação, se não fica extravasando seus sentimentos de raiva em vários outros relacionamentos.<br /><br />
                  Veja, também, se você gosta de lutas pelo poder nos relacionamentos, querendo que tudo seja feito de acordo com suas condições e fazendo valer sutilmente sua própria vontade.<br /><br />
                  Você é muito sensível às críticas ou interrogatórios, mas precisa se abrir a conversas profundas com sua parceira, de modo a entender as necessidades da relação e poder melhorá-la, sem julgar essas negociações como ataques pessoais.<br /><br />
                  Sem saber o que desagrada sua parceira, como pode agradá-la, e se você não demonstra vontade de enriquecer cada vez mais a relação, é provável que sua parceira vá embora um dia.<br /><br />
                  Você tem pavor de ser irracional ou injusto, por isso pode ser muito diplomático e cauteloso ao expressar seus sentimentos. Teme seus próprios sentimentos negativos que podem crescer e estourar em cenas de acusações mútuas.<br /><br />
                  Você tende a ter relacionamentos íntimos com pessoas que trabalham no campo da cura (médicas, enfermeiras, religiosas, professoras, etc.), mas deve tomar cuidado para não assumir o papel de "doente", isso seria muito destrutivo para você e para o relacionamento.<br /><br />
                  Da mesma forma busque ser o curador numa relação. Você tem muito a oferecer no campo da cura, da orientação a outras pessoas, e terá que trabalhar seus próprios problemas ao se confrontar com os problemas das pessoas que ajuda.<br /><br />
                  Você é de extrema valia ao ajudar outras pessoas a conquistarem seu próprio espaço na vida, e a se descobrirem. Você tem uma imagem carismática, atrai as pessoas e a ser adorado por elas, portanto cuidado para não abusar desse dom tornando-se Egocêntrico.<br /><br />
                  Lembre que sua imagem tende a ser refletida por outras pessoas, influenciando-as e isso não é muito bom para você e tão pouco para elas, pois você também tem a tendência de se espelhar em outras pessoas, chegando ao ponto de não mais separar o que é seu e o que absorveu dos outros. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Ela está em trono neste signo e neste setor. E nesta casa e signo ela se expande de forma ideal, ou deveria...<br /><br />
                  Pode dar o melhor de si mesma, quando forma uma ligação com alguém, sobretudo depois de se ter certificado que este engajamento é forte no plano afetivo.<br /><br />
                  Este posicionamento, se não está demasiado tencionado, predestina a pessoa a ser um par ideal para alguém.<br /><br />
                  A vida social da pessoa com Juno nesta casa se valoriza mais, quando ela se torna a parte de um casal.`
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,
                  `Vive a primeira experiência amorosa, o encontro do eu com o outro. O primeiro impacto de relacionamento emocional frente a alguém com quem se identifica. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,
                  `Neste nível vive-se a lenta, conflitante e fundamental experiência da aprendizagem do Amor. O outro é o espelho de suas sombras, que lhe falta saber. <br /><br />
                  A dor de amor acontece sempre que o espelho lhe reduz, em vez de ampliar. É necessário quebrar o espelho e aceitar uma dolorosa recuperação emocional. <br /><br />
                  A maturidade amorosa consiste em digerir este processo de evolução emocional. <br /><br />
                  Ao perceber o irrealismo e a ilusão da expectativa, só então se atinge o equilíbrio amoroso, nascido de uma recuperação interior, de um centramento emocional, de uma conquista de liberdade. <br /><br />
                  O Amor acontece quando outro lhe amplia e revela sua maior dimensão. Do prazer de seu reconhecimento no outro nasce uma empatia, a verdadeira emoção venusiana. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,
                  `É a vivência do Amor. O prazer do relacionamento sentido como troca, no dar e receber em liberdade. <br /><br />
                  A tensão amorosa é a força atuante para o crescimento e a consciência. Compreende que só o Amor nos liberta da prisão interior e do separatismo solitário. <br /><br />
                  Só o Amor liberta da divisão do mundo e por ser o polo exterior de sua imagem interior, o outro complementa e fecha o ciclo da sua identidade. <br /><br />`,
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a ter autonomia e a ser corajoso sem perder a diplomacia: </strong>`
            ]
      },
      {
            title: `escorpião</strong>`,
            text: [
                  `Escorpião é um signo de Água regido por Plutão, o senhor das profundezas, associado á morte e ao renascimento.<br /><br />
                  Escorpião trata dos mistérios, do que está oculto e obscuro, do que está latente, de tudo o que deve ser curado, regenerado, transformado.<br /><br />
                  Escorpião é investigador, aquele que descobre o cirurgião que abre a barriga para retirar e consertar o que está doente, o bruxo que manipula forças intangíveis e poderosas, o xamã que cura.<br /><br />
                  Os escorpianos devem aprender a olhar para o que deve ser transformado, nossas sombras, os lixos psíquicos, as questões que devem ser trabalhadas.<br /><br />
                  Se não existisse a energia de Escorpião, hoje o ser humano ainda estaria vivendo em cavernas.<br /><br />
                  Por muito tempo Escorpião ganhou fama de maldito, vingativo, traidor, o pior dos signos.<br /><br />
                  Mas cá entre nós, um signo que fala de morte, tabus e coisas que insistimos em negar, realmente não iria ganhar boa fama.<br /><br />
                  A grande lição de Escorpião é esta: PERDOAR. Soltar, desapegar, deixar ir...<br /><br />  Deve trabalhar as emoções que ganham intensidade, com toques passionais.<br /><br />
                  O antigo regente de Escorpião é Marte - há fogo por debaixo da água! O escorpiano deve lidar com forças transformadoras que o levam a enterrar o que está velho para que o novo possa nascer.<br /><br />
                  Por isso é comum a associação deste signo com a Fênix que renasce de suas próprias cinzas. O poder de sedução, o magnetismo e o ar de mistério também é outra característica do signo.<br /><br />
                  Possui um senso de estratégia e a intuição muito desenvolvidos, com dons para o ocultismo em geral. Provavelmente experimenta uma vida sentimental fora do vulgar.<br /><br />
                  Como está na maior parte do tempo desconfiando e se defendendo, esta tensão pode esgotar o seu potencial energético.<br /><br />
                  Na saúde, as partes vulneráveis são: os órgãos genitais, a bexiga, a uretra, a próstata, o ânus, as glândulas em geral, mas mais frequentemente as glândulas reprodutoras, o nariz e as cavidades sinuosas.<br /><br />
                  O escorpiano tem um limiar de resistência ao sofrimento surpreendente. Com a idade, o há tendência para problemas ligados à sexualidade.<br /><br />
                  O seu intenso mundo psíquico deve ser sempre vigiado, pois há o risco de desenvolver doenças psicossomáticas.<br /><br />
                  O Escorpião superior é o tipo "águia": nada passa indiferente, nada escapa de seu olhar com raio x.<br /><br />
                  Por fora uma aparência de frieza, por dentro, uma verdadeira efervescência. É movido pela paixão, com ele é tudo ou nada.<br /><br />
                  Tocar apenas na superfície, levar em fogo brando, pra ele não serve. Seu temperamento não é dos mais fáceis, ele vai até o fim, pro bem ou pro mal.<br /><br />
                  Nunca deixa nada pela metade. Esta posição predispõe o nativo a um temperamento duro, rancoroso e difícil, tanto para si próprio como para aqueles que o rodeiam.<br /><br />
                  É por vezes intransigente, manipulador, agressivo e até mesmo cruel com aqueles que o rodeiam.<br /><br />
                  É preciso não se deixar dominar por sentimentos sombrios, aprender a purificar o veneno da mente e das suas emoções.<br /><br />
                  O equilíbrio está no signo oposto, Touro, com suas lições de mansidão, estabilidade, prazer e brandura. Assim pode obter êxito no que deseja construir e reformar. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  Nascer com a Lua no signo de Escorpião é estar sujeito a emoções fortes, aos aprendizados e mudanças produzidos pela superação de momentos difíceis, principalmente quando há alguma perda envolvida.<br /><br />
                  Quem tem a Lua em Escorpião costuma mergulhar de cabeça nas relações. Vive o extremo das emoções, tanto as destrutivas quanto as de potencial criativo.<br /><br />
                  Os mistérios e segredos o atraem. Os sentimentos são intensos quando envolvem a paixão. Há tendência para levar muito a sério os assuntos pessoais, o que algumas vezes leva à possessividade.<br /><br />
                  Em alguns casos, a um ciúme violento. Quando isso é levado ao extremo, pode guardar ressentimentos e planejar uma vingança na ocasião oportuna.<br /><br />
                  De qualquer forma possui uma grande dificuldade para esquecer facilmente as afrontas pessoais.<br /><br />
                  A inclinação para remoer pensamentos deve ser observada e controlada. É preciso cuidado também com o desejo de manipular ou dominar os outros por meios sutis.<br /><br />
                  Assim como o Escorpião possui o ferrão para se defender, pode usar o seu \"veneno\" nas situações de desequilíbrio emocional.<br /><br />
                  Há também a tendência para a teimosia, devido à ligação emocional com os seus próprios desejos.<br /><br />
                  O desafio é cultivar a doçura para manter as suas relações.<br /><br />
                  Contudo, se houver uma direção clara e motivação correta, pode contar com determinação para alcançar um objetivo que valha a pena.<br /><br />
                  Pode também ajudar a curar as dores dos outros, devido à sensibilidade para o sofrimento alheio. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas.<br /><br />
                  O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Para o Ascendente em Escorpião a expressão pessoal é intensa, carismática, poderosa e sempre um tanto secreta. Para ele, a vida é uma batalha, onde vitórias e derrotas marcam e transformam a expressão individual.<br /><br />
                  Com intensa necessidade de segurança vive sempre em um processo de transformação emocional. Aliás, todos os aspectos da vida são sentidos com grande intensidade, mas também com uma profunda contradição interior.<br /><br />
                  O indivíduo com este ascendente pode ver-se como um lutador, um reformista ou um investigador. O seu carisma que começa por ser fascinante, pode torná-lo incomodativo ou mesmo belicoso.<br /><br />
                  Perante qualquer desafio imediato (em coisas simples do dia-a-dia), reage com um misto de atração e repulsa, avidez e desconfiança, desejo e negação do próprio desejo.<br /><br />
                  Esta turbulência emocional leva-o ao principal tema de Escorpião - o da morte e transformação.<br /><br />
                  Como a cobra que muda de pele, o ascendente em Escorpião acumula a pressão até ocorrer uma explosão renovadora. Derruba e remove as velhas estruturas para que as novas possam ser construídas.<br /><br />
                  Ao compreender que a verdadeira batalha é interior, o Escorpião ascendente inicia uma nova fase na sua vida - deixa de lutar contra inimigos exteriores e lança-se na cruzada contra os seus demónios interiores.<br /><br />
                  <strong> O desafio é levar a luz da consciência para aquilo que é obscuro e oculto dentro de si: emoções destruidoras tais como ciúme, inveja, avareza, luxúria ou ânsia de poder.</strong><br /><br />
                  Se essas emoções são reprimidas, elas fervilham por baixo, envenenam a psique e acabem sendo liberadas de forma desregrada.<br /><br />
                  É importante reconhecer os sentimentos envolvidos, transformá-los, canalizá-los de forma mais construtiva.<br /><br />
                  Somente ao trazer seus inimigos interiores para a luz da consciência é que pode transcendê-los. É nessa altura que descobre em si recursos e capacidades que até então desconhecia. Deixa de ser um lutador e torna-se um guerreiro espiritual.<br /><br />
                  Muitos artistas produziram suas melhores obras reestruturando suas paixões, iras e desacertos em alternativas criativas.<br /><br />
                  Olhos penetrantes e de expressão intensa e profunda, sublinhados por sobrancelhas espessas e bonitas, são característicos deste ascendente. <br />`,

                  `Mercúrio no signo de Escorpião proporciona uma mente intuitiva capaz de profundos insights.<br /><br />
                  A percepção dos nativos pode levar ao exame crítico das motivações humanas. Eles consideram as coisas com precisão, mas não necessariamente com compaixão.<br /><br />
                  É preciso cuidado para não utilizar uma linguagem agressiva, medir as palavras para não ofender os sentimentos dos outros. A tendência é dizer exatamente o que sente ou permanecer em silêncio.<br /><br />
                  Fazer planos em segredo e os comunicar somente quando tem um propósito definido que está tentando realizar.<br /><br />
                  Contudo, como pode ser influenciado por fortes fatores emocionais, é mais objetivo quando não está pessoalmente envolvido.<br /><br />
                  Quem tem Mercúrio em Escorpião possui uma mente determinada e grande engenhosidade, pode vencer obstáculos que outros considerariam insuperáveis.<br /><br />
                  As pessoas com Mercúrio neste signo gostam de vasculhar os porões da mente, são bons detectives, investigadores e pesquisadores. Pode também haver desconfiança dos outros.<br /><br />
                  Em tipos muito desenvolvidos, há uma habilidade científica que se origina da sua curiosidade sobre os mecanismos interiores da energia responsável pela manifestação objetiva.<br /><br />
                  Isso pode proporcionar alguns insights dos processos fundamentais de sua transformação. <br />`,

                  `Em Escorpião, Vênus quer intensidade e sedução, quer viver emoções fortes. A sexualidade fica evidenciada.<br /><br />
                  A vontade é de se conectar com o outro num nível mais profundo. Vênus rege o signo de Touro, oposto a Escorpião, na verdade ela não se sente muito bem nesse signo.<br /><br />
                  O planeta do amor no signo da metamorfose pode causar estranhamento, provocação, ciúmes, desconfiança, disputas de controle e poder.<br /><br />
                  Os nativos costumam controlar o parceiro, ameaçando e espantando qualquer rival, mesmo que este exista somente em sua imaginação.<br /><br />
                  Vênus em Escorpião não gosta de coisas mornas. Vênus quer estabilidade e permanência, Escorpião denuncia a transitoriedade das coisas.<br /><br />
                  Eis aí o conflito. O amor deve se transformar, se regenerar pra continuar existindo... E muita gente não gosta de sair da sua zona de conforto.<br /><br />
                  O cuidado deve ser com as paixões cegas e as ilusões daquele que se esquece, de si mesmo e mergulha numa história, achando que o outro pode ser a tábua de salvação para suas vidas.<br /><br />
                  De qualquer forma, o amor de quem tem essa Vênus em seu mapa é o mais quente do zodíaco.<br /><br />
                  Passional, visceral, fogoso, enfim, é o amor paixão por excelência. Arrebatador, não conhece limites, nem na cama e nem fora!
                  Ao se apaixonar, quem tem Vênus em Escorpião, requer absoluta dedicação de seu parceiro, já que sua paixão é tão profunda que não quer se arriscar a perder o objeto de seu desejo.<br /><br />
                  A sua sensualidade irá se expressar de maneira tão intensa que poderá se exceder nos jogos eróticos mais proibidos.<br /><br />
                  Para manter a chama desta Vênus sempre acesa é necessária muita imaginação, pois sem sexo não haverá relacionamento. <br />`,

                  `Essa posição de Marte acrescenta ‘lenha na fogueira’. Marte é o antigo regente deste signo, podendo se expressar aqui com muita intensidade.<br /><br />
                  Indica um grande poder de liderança e muita coragem e espírito de iniciativa. O nativo tem ambição para chegar a lugares de comando, de onde irá dirigir suas ações.<br /><br />
                  Com a capacidade de estratégia de um verdadeiro ‘general’ quem possui este Marte pode ter inclinação pela política. Muitos psicanalistas e também muitos cirurgiões possuem Marte neste signo.<br /><br />
                  Sujeito a paixões intensas e gosta de sexo erótico como ninguém, não se satisfazendo com amores mornos ou românticos.<br /><br />
                  Tem grande fertilidade. É preciso cuidado com paixões violentas, excessos sexuais e expressões onde o sexo e a agressividade estão juntos.<br /><br />
                  Cuidado também com disputas, para não impor a sua vontade com uso da violência.<br /><br />
                  Indivíduos menos evoluídos podem ser manipuladores e maquiavélicos, com espírito vingativo e excessivamente ciumento. Ficam sujeitos a sofrer de todo tipo de violência, mesmo sexual. <br />`,

                  `O nativo pode contar com o instinto especial para os negócios e estes podem render-lhe largos dividendos.<br /><br />
                  É muito provável que receba dinheiro por herança. Boa posição para o trabalho de investigação, pesquisa, engenharia ou medicina.<br /><br />
                  Sente forte atração pelo ocultismo e pela filosofia. Gosta de passar seu tempo livre fazendo amor, meditando ou simplesmente descansando. Possui uma personalidade reservada e sutil.<br /><br />
                  Seus discernimentos são sagazes e críticos. Por vezes, o nativo tem um magnetismo especial que atrai as massas, assim como poderes de cura.<br /><br />
                  Mas pode ter problemas com amizades estranhas, baseadas em motivos ocultos. O nativo faria melhor se evitasse a sua participação em sociedades ou negócios ilegais ou duvidosos.<br /><br />
                  Também deve evitar iniciar processos jurídicos, porque é mínima a possibilidade de ganhá-los. <br />`,

                  `Saturno no signo de Escorpião indica responsabilidade em assuntos financeiros, recursos corporativos, finanças conjuntas, impostos, heranças, seguros e questões relativas a propriedades alheias.<br /><br />
                  Os nativos geralmente são perfeccionistas no trabalho. Estão sempre tentando melhorar a estrutura da sociedade. Se esta tendência for levada a extremos, podem adquirir a reputação de chefes muito duros.<br /><br />
                  Como têm pouca paciência com atitudes que demonstram preguiça ou má vontade no trabalho, não aceitam a falta de perseverança nos outros, bem como em si mesmos. Utilizam muita energia e força de vontade em realizações práticas.<br /><br />
                  Meticulosidade, persistência e determinação são comuns, proporcionando um impulso para o sucesso. Os nativos desejam autoridade e costumam lutar muito para realizar as suas ambições.<br /><br />
                  Os nativos aceitam as responsabilidades com intensidade emocional. Isso com frequência as sobrecarrega. Precisam aprender a lidar com elas de maneira calma e eficiente na medida em que surgem.<br /><br />
                  São capazes de nutrir ressentimento quando sentem que foram tratadas injustamente. Também podem ter uma devoção quase fanática pelos princípios éticos e morais.<br /><br />
                  Tenha atenção, os nativos podem atingir as alturas da espiritualidade ou as profundezas do materialismo e do egoísmo.<br /><br />
                  No seu pior, podem ocorrer conflitos a respeito de heranças, impostos e finanças conjuntas, que, com frequência, provocam batalhas legais e perdas através de litígios. Pode também existir tendência a intrigas e conspirações.<br /><br />
                  É preciso cuidado com o desejo de vingança e a incapacidade para esquecer ofensas passadas. <br />`,

                  `Urano no signo de Escorpião está na sua exaltação. Como Urano é o planeta das revoluções e das mudanças drásticas, ele é mais potente em Escorpião, o signo da morte e da regeneração.<br /><br />
                  Os nascidos com esta posição de Urano precisam se adaptar às fortes mudanças das instituições, pré-requisito necessário ao nascimento de um novo tipo de civilização.<br /><br />
                  Muitas pessoas com Urano em Escorpião vivenciaram a Primeira Guerra Mundial, que levou a era vitoriana a um fim drástico e iniciou um período de rápidas mudanças.<br /><br />
                  Os nativos com Urano em Escorpião possuem emoções muito fortes. Acreditam na ação decisiva, não podem tolerar inatividade ou preguiça.<br /><br />
                  No seu pior, os nativos podem desenvolver um pensamento violento e uma feroz determinação de realizar mudanças, mesmo destrutivas.<br /><br />
                  Os nativos podem ser muito habilidosos e possuir grande engenhosidade científica e mecânica. Podem ter tendências ocultas, como conhecimento da vida após a morte e percepção das dimensões suprafísicas de energia. <br />`,

                  `O sexo é uma das chaves de Netuno em Escorpião. A desordem emocional e sexual caracteriza esta geração. Muitas pessoas estão marcadas pela exploração do sexo com objetivos comerciais.<br /><br />
                  Nesta época uma geração começa a viver a ausência de inibições. A moral sexual libertada e a promiscuidade darão lugar à propagação de doenças venéreas e ao uso de drogas como escape emocional.<br /><br />
                  Por detrás da expressão aparentemente sexual, existe nos nativos com Netuno em Escorpião um grande desejo de viver experiências místicas e de se fundirem com a pessoa amada através do ato sexual.<br /><br />
                  Esta posição intensifica as emoções, produzindo confusão que se descarrega através de criações artísticas caóticas, psicodélicas, música rock e de contestação. <br />`,

                  `Escorpião é um signo de Água, elemento que representa as emoções e os sentimentos. Plutão em Escorpião coloca em relevo o imenso poder da emoção.<br /><br />
                  Na realidade, o que Escorpião demanda é conhecer a reação dos outros perante a emoção, a amizade e o amor. Sabe que somente o calor do afeto dos outros pode derreter o seu gelo.<br /><br />
                  A sua ansiedade consiste em acalmar a tormenta emocional interna, viver em paz consigo e com os outros. Em definitivo, procura conhecer-se como indivíduo.<br /><br />
                  Isso é muito importante, uma vez que a presença de Plutão em Escorpião faculta a oportunidade da integração de todas as pessoas e países na base do respeito pela individualidade de cada um.<br /><br />
                  Plutão nesse signo pode trazer importantes experiências espirituais. Grupos com uma orientação filosófica ocultista se encontram em primeiro plano.<br /><br />
                  Do ponto de vista político, os movimentos coletivos têm cada vez mais poder. \"Regeneração ou morte\" é a palavra de ordem.<br /><br />
                  Neste período oferece a oportunidade de se conseguir a comunhão, a grande comunidade com todos os restantes seres humanos.<br /><br />
                  Mas, se a compreensão, a tolerância e o respeito não forem possíveis, então Plutão ensinará forçosamente o homem através da destruição e da necessidade de se regenerar para se preparar para a era de Aquário. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a se valorizar integrando as suas sombras:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Escorpião, traz de vidas passadas memórias de mau uso e manipulação do seu poder sexual, psíquico e mediúnico. Costuma ser charmoso, magnético, cativante pela profundidade da sua pessoa, do seu olhar e do seu toque.<br /><br />
                  Vêm de um passado de traição, autodesvalorização, desejos obsessivos e grande envolvimento com os outros. Há tendência para o segredo, a omissão e até mesmo a mentira. Também para dependências em geral: emocional, material, psíquica, física.<br /><br />
                  Pode ser desconfiado, manipulador e fechado. É intenso, profundo, intuitivo, capazes de perceber os outros como ninguém. Em momentos de descontrole emocional pode se tornar violento. Gosta de estar sozinho na sua profundidade e tem certo medo de que o outro invada o seu espaço.<br /><br />
                  Vive as emoções sem medo, lida bem com a morte e os processos de transformação. Traz a capacidade de transformar os outros, mostrando-lhes o que têm escondido no seu inconsciente.<br /><br />
                  Com o Nodo Norte (Cabeça do Dragão) em Touro, veio aprender a desenvolver a sua autoestima, a construir os seus próprios recursos e independência financeira.<br /><br />
                  Aprender a simplificar a sua vida e sair do drama, a ser mais pacífico, estável, tranquilo e prático. Há necessidade de por limites na sua forma de viver e na interação com os outros para não se deixar arrastar e valorizar-se cada vez mais.<br /><br />
                  Deve valorizar também a vida no mundo da matéria, o corpo, o aqui e o agora para concretizar seus projetos. Aprender a desfrutar dos prazeres da vida: comida, massagens, cheiros, sons e interação com a natureza.<br /><br />
                  Na infância pode ter sido carente de amor e carinho, por isso vive em busca de compensação dessa carência e vazio emocional. São as rejeições e desilusões que o levam a encontrar a sua própria fonte interior de amor próprio e segurança interior.<br /><br />
                  Deve aprender a confiar na vida e nas pessoas, sentir que a verdade e a transparência simplificam e libertam. Saber perdoar para libertar-se do que já não serve e assim descobrir que merece mais e melhor. <br />`,

                  `A busca da felicidade e de integração da personalidade está interligada com o problema do uso adequado do poder.<br /><br />
                  Aqui, poder pode significar poder sexual ou o poder derivado de uma profunda identificação com energias humanas coletivas (ou \"ocultas\").<br /><br />
                  Ele sempre se relaciona com os frutos finais de algum tipo de associação. A iluminação vem em consequência de uma fecundação interior por algum poder espiritual definido.<br /><br />
                  Exemplos: Lord Byron, Jay Gould, Walt Whitman, papa Pio XI, Carl Jung. <br />`,

                  `Na infância você pode ter tido um contato muito próximo com a morte. Tornou-se, mais tarde, extremamente consciente da fragilidade da vida. Assim, tende a usar o poder para controlar os outros, numa tentativa de evitar possíveis perdas e abandonos.<br /><br />
                  Compreender o significado desse impulso para o poder é uma das lições a serem aprendidas. Devido à sua capacidade incomum para enxergar (e aceitar) o lado sombrio da vida e o sofrimento interior, consegue atrair a confiança de outras pessoas e ajudá-las à superar a dor.<br /><br />
                  Conhece as pessoas em profundidade. Justamente por isso, pode ter sido ferido ou magoado pelo que havia de pior no ser humano.<br /><br /> Pode ter passado por perdas simbólicas ou reais bastante severas. Deve usar o conhecimento que tem para ajudar as pessoas a expulsarem rancores e situações não resolvidas de suas vidas. Também pode ter tido questões ligadas a sexualidade.<br /><br />
                  É importante travar conhecimento com as motivações que regem sua vida emocional, com seus extremos de raiva, cobiça, inveja destrutiva, amor e depressão culposa, bem como sua enorme vitalidade e capacidade de crescimento, seu lado positivo emocional e a conexão com outras pessoas.<br /><br />
                  Você pode ter desenvolvido uma tendência a exercer muito controle em relação aos outros para tentar se proteger de qualquer perda e abandono. Esse problema também pode atingir a área do dinheiro. Pode ter lutado arduamente sem talvez conseguir independência financeira.<br /><br />
                  Mas você é perito em ocultar sua vulnerabilidade e dependência por trás de uma aparência taciturna ou de uma fachada de poder e impenetrabilidade. Não é raro acontecer de, em situações de mudanças profundas de vida, você fantasiar sobre suicídio.<br /><br />
                  Tome consciência de que esse pensamento é sua vontade de voltar à proteção do útero materno, ou a necessidade de se transformar em alguma área de sua personalidade. Não propriamente a vontade de se destruir.<br /><br />
                  É mais interessante se perguntar: O que dentro de mim precisa morrer para que eu possa renascer?<br /><br />
                  Você pode alcançar algum tipo de êxito e se sentir inexplicavelmente nervoso e culpado. Fica na expectativa de que, a qualquer momento, um desastre pode se abater sobre você. Isso é consequência da baixa autoestima, da crença de que não merece.<br /><br />
                  É provável que venha a temer seu próprio potencial destrutivo e desenvolver um rigoroso controle emocional, destinado a proteger os outros de suas atitudes. Pode ocorrer o contrário: transformar-se numa pessoa que se sente perseguida, preocupada em evitar o perseguidor imaginado ou verdadeiro.<br /><br />
                  Você pode perceber uma ameaça potencial em situações nas quais, embora possa mesmo existir, não está necessariamente dirigida contra você. Tende a assumir internamente a culpa por mal-entendidos ou por qualquer fracasso dos outros.<br /><br />
                  Você pode se tornar supersticioso. Todos esses comportamentos têm a ver com sua identificação com seu lado mau, provavelmente resultado de situações da infância que o levaram a acreditar que era inadequado, culpado, não amado e aceito, e que ainda não vieram à consciência.<br /><br />
                  Você pode querer se fundir às pessoas escolhidas. O que pode torná-lo devorador, consumidor e apaixonado em seus relacionamentos.<br /><br /> O medo do abandono pode causar inquietante inclinação ao castigo e à vingança que só poderá ser superada no momento em que você reconhecer esses sentimentos.<br /><br />
                  A terapia de regressão pode se revelar proveitosa para você, pois é provável haver traumatismo do nascimento que lhe causa sofrimento e necessita de cura, através da liberação das emoções represadas. Você sabe ou imagina que não foi desejado.<br /><br />
                  Seu nascimento pode ter causado grave prejuízo à mãe ou criado dificuldades financeiras. Sua mãe pode ter sacrificado uma carreira para criar filhos, reprimindo seu ressentimento, mas criando culpa nos filhos.<br /><br />
                  Na idade adulta, fica difícil assumir seu próprio poder sobre a vida e se desligar psicologicamente da mãe. Você tem que encontrar dentro de si a boa mãe, encontrando aceitação e amor tanto para si quanto para os outros.<br /><br />
                  Você pode ter sofrido incesto, abuso, sadismo, estupro e violência em sua vida real ou em sua fantasia. A área sexual será sempre uma parte em evidência para você, pois é aí que você se defronta com seus sentimentos mais profundos.<br /><br />
                  O sexo pode ser um meio de você se curar e curar outras pessoas de dores psicológicas. Você tende a ter impulsos de poder, de controlar e dominar os outros, mas também pode viver situações de impotência do tipo triângulo amoroso: ciúmes, lutas pelo poder em nível inconsciente.<br /><br />
                  Você pode não perceber, mas é dotado de carisma, magnetismo sexual e capacidade de influenciar profundamente as pessoas.<br /><br />
                  Tanto através de suas palavras, quanto através da intensidade de suas emoções. Aprender o sentido do poder, de como usá-lo, das consequências de seu abuso, são suas tarefas. Você pode ser levado ao centro das trevas, uma vez que experimenta profundamente todas as coisas.<br /><br />
                  Algumas pessoas podem achar um desperdício viver os aspectos negativos e mórbidos da vida, mas para você é necessário. Isso deve ser respeitado.<br /><br />
                  Através desse processo, você pode conquistar segurança interna e regenerar sua psique, poderá renascer com confiança na vida, com compaixão e maturidade da personalidade.<br /><br />
                  Você pode se sentir tentado a se apropriar dos bens da família ou da sociedade a que pertence, ocupando de modo irregular postos de chefia ou tomando o poder de algum modo.<br /><br />
                  Ou ver-se subitamente ludibriado por alguém da família ou sócio que levou seus bens indevidamente, ou que ocupou definitivamente seu lugar na firma enquanto estava em férias. São situações vividas em outras vidas que ressurgem agora resgatando o passado.<br /><br />
                  Tenha muito cuidado com suas tendências em buscar o poder pelo modo mais fácil, seja crítico de si mesmo e sempre aja com os demais como gostaria que agissem com você. Este é o método fácil para saber se andamos corretamente na sociedade em que vivemos.<br /><br />
                  Talvez seja também necessário abandonar as preocupações, os sofrimentos e seu mau humor. Entrar em contato com sentimentos de alegria, esperança e outras experiências positivas.<br /><br />
                  Conquistar a alegria pode doer menos do que o sofrimento que tem agora. Aprenda a respeitar as pessoas que têm uma vida mais leve e alegre. <br />`,

                  `O parceiro ideal é aquele que seja misterioso ou interessado em mistérios, cura e investigação.<br /><br />
                  Podem ser pessoas misteriosas, cirurgiões ou curandeiros, muito sensuais, intensas e profundas, pessoas que procuram a finalidade e origem das coisas, investigadoras, analistas de laboratório, arqueologistas, etc.<br /><br />
                  Mas é preciso cuidado para não se tornar controlador, manipulador, possessivo ou ciumento numa relação. O tipo de pessoa que esconde suas reais intenções.<br /><br />
                  É preciso haver paixão, sintonia sexual, cumplicidade e intimidade. O casal ideal para Juno neste signo é aquele que está sempre se transformando, se renovando e se purificando com suas descobertas em comum. <br />`,

                  `Mercúrio retrógrado indica uma profissão de escritor nas vidas passadas, ou, pelo menos, de intelectual, talvez de jornalista. Em Escorpião, tratava-se talvez de literatura policial ou erótica.<br /><br />
                  De uma inteligência fulgurante, desvendando as secretas motivações dos outros, o nativo não fez o uso construtivo de todas as suas excepcionais faculdades mentais.<br /><br />
                  Seu magnetismo sexual e intenso lhe emaranhara a submissão apaixonada de muitas pessoas.<br /><br />
                  Pode ter usado sua imaginação de forma sádica ou perversa, enquanto envolvia o seu discurso em teorias mágico-religiosas.<br /><br />
                  O poder que exercia pela palavra ou pela escrita pode ter levado a consequências prejudiciais.<br /><br />
                  Deve agora usar sua palavra e sua inteligência para curar, ajudar, desenvolvendo uma consciência mais elevada e espiritual. <br />`,

                  `Em vidas passadas, o nativo foi insatisfeito, sequioso de novidades, intensas experiências, emoções e paixões destrutivas.<br /><br />
                  Suas dificuldades com o sexo oposto têm origem nas outras vidas: o nativo viveu experiências amorosas que lhe haviam provocado um profundo desprezo por si próprio.<br /><br />
                  Seu "comportamento de fracasso" tende a provar que o amor é digno de desprezo.<br /><br />
                  Deve essencialmente aprender a perdoar e a esquecer do passado para que possa se abrir ao amor. Deve também buscar uma perspectiva espiritual mais elevada. <br />`,

                  `O nativo traz de vidas passadas uma grande ebulição interior.<br /><br />
                  Sempre em estado de alerta, luta contra a angústia que bate à porta, contra paixões violentas, ciúmes, desejos sexuais e manipulações, nos quais fica sufocado.<br /><br />
                  Por vezes, se afoga. Sua fúria de viver o leva a se autodestruir. Nesta vida deve trabalhar-se para se reconstruir. Há necessidade também de aprender a perdoar, a esquecer.<br /><br />
                  Atividades criativas podem ajudá-lo. A busca espiritual também pode levá-lo a canalizar sua grande energia para um objetivo exterior positivo. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Muito perspicaz, o nativo sabe bem que a verdade que tenta impor aos outros não é tão inteiramente verdadeira quanto o proclama em alta voz.<br /><br />
                  Traz para esta vida a lembrança de ter combatido muito em vidas anteriores para defender uma ideia ou a sua dignidade.<br /><br />
                  Causa aos outros os sentimentos de o ódio ou amor, a admiração ou o respeito, em essencial é uma pessoa que nunca é indiferente.<br /><br />
                  A vida atual lhe oferece todos os dias novas oportunidades de transformação para subtrair às suas tendências negativas.<br /><br />
                  Este caráter muito apaixonado tem muito a fazer, no início de sua vida, para canalizar seus apetites sexuais.<br /><br />
                  Mal compreendido pelos que o cercam, trava seu combate inteiramente só, bravamente. Mas não deve causar espanto que ele tenha, para isso, necessidade de uma enorme liberdade. <br />`,

                  `O nativo já viu tantas coisas, ao longo das suas vidas passadas! Saturno neste signo indica a alma de velho sábio, que foi iniciado em saberes e mistérios.<br /><br />
                  Nada escapa ao seu olho de águia. Não tentem esconder-lhe o que quer que seja: farejará logo a mentira. As alegrias e sucessos da vida não o deslumbram: sabe que há algo mais.<br /><br />
                  Entretanto, do momento em que fixa um objetivo, nada consegue desviá-lo. Fica até mesmo fascinado pela perpétua tentação de autodestruição.<br /><br />
                  Há tendência para se autosabotar e fracassar em tudo o que faz de propósito ou de forma inconscientemente.<br /><br />
                  Este kamikaze é na verdade um místico. Nesta vida deve desenvolver sua espiritualidade e transformar a si mesmo.<br /><br />
                  Procurará conhecer mais sobre suas vidas passadas e só ficará feliz quando tiver encontrado a resposta para a questão essencial: "o que é a Verdade?" <br />`,

                  `Urano está exaltado em Escorpião. A sua natureza independente, não conformista e corajosa está bem de acordo com a do signo.<br /><br />
                  Esta posição é excelente para um pesquisador científico, um investigador ou um psicoterapeuta: sua visão de raio x pode vasculhar as profundezas e os mínimos recantos onde se esconde a verdade.<br /><br />
                  Médium, muito clarividente, adivinha em um segundo o que se queria esconder-lhe. Lúcido sobre si mesmo, não se permite ilusões.<br /><br />
                  Tem um grande papel a representar no mundo, apontando certas coisas até então veladas.<br /><br />
                  Entretanto, deve compreender que a lucidez não exclui a bondade e a indulgência para com os seres (ou para com ele mesmo).<br /><br />
                  Que a descoberta dos negrumes do seu tempo não o faça mergulhar na amargura. Ao contrário, que o façam combater com mais força para conduzir os outros ao progresso.<br /><br />
                  Quanto à sua vida sexual, pode ser muito movimentada. Leva sempre tudo às últimas consequências, não faz nada pela metade.<br /><br />
                  De qualquer modo a sua grande energia lhe permite ser um líder notável em sua vida. <br />`,

                  `O nativo possui intuição e percepção para as sutilezas. Sua vista aguda esquadrinha as coisas ignoradas e adivinha verdades ocultas sob a aparência.<br /><br />
                  Visionário, clarividente, sua intuição extraordinária ultrapassa de muito longe a dos que e o rodeiam.<br /><br />
                  Sua extraordinária lucidez se combina com a "distância" netuniana. Seu olhar é ao mesmo tempo preciso e distanciado. Ele é capaz de uma grande objetividade, de uma lucidez impiedosa.<br /><br />
                  E o tempo lhe dá razão. Pode-se confiar na sua firmeza de juízo. As reformas não lhe fazem medo: esta geração rejeita o que apodrecera nas décadas anteriores.<br /><br />
                  Vale lembrar também que Netuno passava em Escorpião por ocasião da Revolução francesa (trânsitos de 1793 a 1806).<br /><br />
                  Tendo Netuno afinidades com todos os signos de Água (na mitologia, o deus do mar é também o irmão de Plutão e de Júpiter), o planeta é extremamente poderoso em Escorpião.<br /><br />
                  O nativo dispõe ao mesmo tempo de um olho no mundo invisível e de uma grande força operacional no do material.<br /><br />
                  Mas este carma pode ser vivido negativamente, com um espírito crítico feroz, uma tendência a tudo destruir, inclusive a si mesmo.<br /><br />
                  O nativo em vidas passadas não teve respeito por nada; desencorajou o entusiasmo, a fé e o progresso. Nesta vida deve desenvolver uma escala de valores que seja positiva e construtiva. <br />`,

                  `A força transformadora de Plutão exerce total influência aqui. Foi a geração nascida entre 1737 e 1749 que preparou e depois inflamou a Revolução francesa de 1789.<br /><br />
                  Os nativos nascidos sob essa configuração são grandes reformadores, ou grandes destruidores, se essa retrogradação do planeta for vivida negativamente.<br /><br />
                  Quando criança, pode ter se sentido pessoalmente atingido pelas injustiças do mundo. Se você escolheu essa encarnação, foi por um profundo desejo de queimar todas as escórias do passado.<br /><br />
                  Entramos assim num grande renascimento, nas escalas planetárias. Os homens serão equipados com poderes parapsicológicos que o Ocidente esquecera reforçados pelos poderes tecnológicos que já temos, e que logo aumentarão.<br /><br />
                  As crianças plutonianas retrógradas de Escorpião desenvolverão sistematicamente seus poderes psíquicos (leitura das auras, telepatia, percepção extrassensorial, desdobramento etc.).<br /><br />
                  Mas esses imensos poderes, desenvolvidos com um objetivo egoísta, podem tornar-se infinitamente destruidores. É preciso consciência e amor. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Na infância, pode ter tido um contato muito próximo com a morte, tornando-se, mais tarde, extremamente consciente da fragilidade da vida. Assim, tende a usar o poder para controlar os outros, numa tentativa de evitar possíveis perdas e abandonos.<br /><br />
                  Compreender o significado desse impulso para o poder é uma das lições a serem aprendidas. Devido à sua capacidade incomum para enxergar e aceitar! O lado sombrio da vida e o sofrimento interior, consegue atrair a confiança de outras pessoas e ajudá-las à superar a dor.<br /><br />
                  Conhece as pessoas em profundidade. Justamente por isso, pode ter sido ferido ou magoado pelo que havia de pior no ser humano. Pode ter passado por perdas simbólicas ou reais bastante severas.<br /><br />
                  Deve usar o conhecimento que tem para ajudar as pessoas a expulsarem rancores e situações não resolvidas de suas vidas. Também pode ter tido questões ligadas a sexualidade.<br /><br />
                  É importante travar conhecimento com as motivações que regem sua vida emocional, com seus extremos de raiva, cobiça, inveja destrutiva, amor e depressão culposa, bem como sua enorme vitalidade e capacidade de crescimento, seu lado positivo emocional e a conexão com outras pessoas.<br /><br />
                  Desde cedo você foi sujeito a viver a experiência da morte, seja através de um parto difícil, seja através de uma doença.<br /><br />
                  Isso o faz muito consciente da fragilidade da vida, e você pode ter desenvolvido uma tendência a exercer muito controle em relação aos outros para tentar se proteger de qualquer perda e abandono.<br /><br />
                  Esse problema também pode atingir a área do dinheiro, lutando arduamente sem talvez conseguir independência financeira. Mas, você é perito em ocultar sua vulnerabilidade e dependência por trás de uma aparência taciturna ou de uma fachada de poder e impenetrabilidade.<br /><br />
                  Tenha amor, carinho e cuidado por sua existência, pois em situações de mudanças profundas da sua vida, você pode acabar fantasiando algo ruim sobre suicídio.<br /><br />
                  Tome consciência de que esse pensamento é sua vontade de voltar à proteção do útero materno, ou a necessidade de se transformar em alguma área de sua personalidade, e não propriamente a vontade de se destruir.<br /><br />
                  É mais interessante se perguntar: O que dentro de mim precisa morrer para que eu possa renascer?<br /><br />
                  Com você pode acontecer de alcançar algum tipo de êxito e sentir-se quase sempre inexplicavelmente nervoso e culpado e fica na expectativa de que, a qualquer momento, um desastre irá se abater sobre você.<br /><br />
                  Isso é consequência de sua autoestima baixa, e por facilmente se sentir mau, inútil e um tanto fracassado. Internamente é provável que venha a temer seu próprio potencial destrutivo e desenvolver um rigoroso controle emocional destinado a proteger os outros de suas atitudes.<br /><br />
                  Pode ocorrer o contrário: você projetar nos outros a sua destrutividade emocional inconsciente, transformando-se numa pessoa que se sente perseguida ou preocupada em evitar o perseguidor imaginado ou verdadeiro, tentando enganá-lo ou aplacá-lo.<br /><br />
                  Você pode perceber uma ameaça potencial em situações nas quais, embora possa mesmo existir, não está necessariamente dirigida contra você. Tende a assumir internamente a culpa por mal-entendidos ou por qualquer fracasso dos outros.<br /><br />
                  Você pode se tornar supersticioso. Todos esses comportamentos têm a ver com sua identificação com seu lado mau, provavelmente resultado de situações da infância que o levaram a acreditar que era inadequado, culpado, não amado e aceito, e que ainda não vieram à consciência.<br /><br />
                  Esses sintomas podem ser bastante reduzidos através de uma infância cuidada por uma boa mãe.<br /><br />
                  Mas, sentimentos extremos tenderão sempre a aparecer quando você quiser muito uma coisa, seja poder, fama, sexo, dinheiro, alimento, status, etc. Você vai querer se fundir às pessoas escolhidas, o que pode torná-lo devorador, consumidor e apaixonado em seus relacionamentos.<br /><br />
                  O medo do abandono pode lhe causar inquietante inclinação ao castigo e à vingança que só poderá ser superada no momento em que você reconhecer esses sentimentos.<br /><br />
                  A terapia de regressão pode se revelar proveitosa para você, pois é provável haver traumatismo do nascimento que lhe causa sofrimento e necessita de cura, através da liberação das emoções represadas.<br /><br />
                  Você sabe ou imagina que não foi desejado; seu nascimento pode ter causado grave prejuízo à mãe ou criado dificuldades financeiras; sua mãe pode ter sacrificado uma carreira para criar filhos, reprimindo seu ressentimento, mas criando culpa nos filhos.<br /><br />
                  Na idade adulta, fica difícil assumir seu próprio poder sobre a vida e desligar-se psicologicamente da mãe. Você tem que encontrar dentro de si a boa mãe, encontrando aceitação e amor tanto para si quanto para os outros.<br /><br />
                  Você pode ter sofrido incesto, abuso, sadismo, estupro e violência em sua vida real ou em sua fantasia. A área sexual será sempre uma parte em evidência para você, pois é aí que você se defronta com seus sentimentos mais profundos.<br /><br />
                  O sexo pode ser um meio de você se curar e curar outras pessoas de dores psicológicas. Há quase sempre uma experiência de ferimento de sua masculinidade em consequência de seu relacionamento com a mãe.<br /><br />
                  Assim, podem procurar constantemente mulheres mais poderosas do que eles, podem tentar humilhá-las, competir com elas, tanto a nível sexual quanto profissional ou tratá-las com desprezo.<br /><br />
                  Todavia, se este for o seu caso, saiba que se superar seus primeiros sentimentos de impotência psicológica, tornar-se-á provedor, parceiro, pai, terapeuta ou professor carinhoso, pois compreende o que é sofrimento emocional. Você é carismático, atraente para as mulheres e capaz de explorar esta faceta.<br /><br />
                  Você tende a ter impulsos de poder e com motivos ocultos de controlar e dominar os outros, mas também pode viver situações de impotência do tipo triângulo amoroso, ciúmes, lutas pelo poder em nível inconsciente.<br /><br />
                  Você pode não perceber, mas é dotado de carisma, magnetismo sexual e capacidade de influenciar profundamente as pessoas, tanto através de suas palavras, quanto através da intensidade de suas emoções.<br /><br />
                  Aprender o sentido do poder, de como usá-lo, das consequências de seu abuso, são suas tarefas. Você pode ser levado ao centro das trevas, uma vez que experimenta profundamente todas as coisas.<br /><br />
                  Algumas pessoas podem achar um desperdício viver os aspectos negativos e mórbidos da vida, mas para você é necessário, deve ser respeitado, e você tende a romper com quem tentar aconselhá-lo ou interferir.<br /><br />
                  Através desse processo, você pode conquistar segurança interna e regenerar sua psique, poderá renascer com confiança na vida, com compaixão e maturidade da personalidade.<br /><br />
                  Talvez seja também necessário abandonar as preocupações, os sofrimentos e seu mau humor; sua dificuldade pode consistir em permitir que entre em contato com sentimentos de alegria, esperança e outras experiências positivas.<br /><br />
                  Conquistar a alegria pode doer menos do que o sofrimento que tem agora. Você precisa aprender a respeitar as pessoas que têm uma vida mais "leve" e alegre, elas são diferentes de você, é só isso.<br /><br />
                  Você pode sentir-se tentado a avançar nos bens da família ou da sociedade a que pertence, ocupando de modo irregular postos de chefia ou tomando o poder de algum modo.<br /><br />
                  Pode se ver subitamente ludibriado por alguém da família ou sócio que levou seus bens indevidamente, ou que ocupou definitivamente seu lugar na firma enquanto estava em férias, são situações vividas em outras vidas que ressurgem agora resgatando o passado.<br /><br />
                  Tenha muito cuidado com suas tendências em buscar o poder pelo modo mais fácil, seja crítico de si mesmo e sempre aja com os demais como gostaria que agissem com você, é o método fácil para saber se andamos corretamente na sociedade em que vivemos. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  As uniões desta pessoa com Juno neste signo ou setor são vividas com paixão. Sua vida sexual é vivenciada sobre tudo no casamento, ou nas uniões que tiverem.<br /><br />
                  Aliás, essa sexualidade, vivida no casamento, libera uma espécie de fogo regenerador para a própria pessoa e para o parceiro/a.<br /><br />
                  Se existir uma forte influência de Netuno/Marte/Vênus, perigo de fantasmas que rondam a relação.<br /><br />
                  São pessoas que em matéria de negócios tenderão a investir no que é belo ou no que possui uma certa harmonia. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,
                  `Vive na dependência dos outros e de bens alheios, que impedem a confrontação real com o valor próprio. Atitudes compulsivas não detectadas pela consciência. <br /><br />
                  Condicionado pelos instintos, desejos e emoções, dificulta a descoberta de sua própria identidade. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,
                  `A força do instinto é vivida como afirmação sobre os outros. Ainda luta para superar dependências psíquicas, a possessividade, a falta de liberdade emocional. <br /><br />
                  Ainda é dominado por desejos obsessivos. Um medo remoto e inconsciente domina a personalidade. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,
                  `É quando ocorre a grande alquimia do Ser. A transformação do Eu em profundidade, a dolorosa confrontação com seus desejos. <br /><br />
                  É uma morte psíquica. Acontece normalmente quando a vida o obriga a largar o que julgava ser a sua força, a sua obscura segurança, o seu poder. <br /><br />
                  Vive e aceita a perda, vivida como Processo de Regeneração. Abre uma nova vida e transcende a realidade. É a via da salvação. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a ter autonomia e a ser corajoso sem perder a diplomacia: </strong>`
            ]
      },
      {
            title: `sagitário</strong>`,
            text: [
                  `A afirmação da individualidade é uma qualidade do elemento fogo.<br /><br />
                  O sagitariano quer viajar, encontrar algo maior, filosofar, expandir fronteiras, cultivar liberdade de ação e pensamento, buscar mais espaço em todos os sentidos.<br /><br />
                  Movido por este desejo, sua mente vai longe e explora territórios desconhecidos. Conta com grande potencial intelectual.<br /><br />
                  Aprende que ao dominar o instinto, pode desenvolver a mente, elevar os ideais, expandir a fé, a consciência e o saber.<br /><br />
                  Sagitário também é mestre, professor, sacerdote, jurista. Mesmo com um temperamento forte e imperativo, tem sempre bom humor e ousadia para encarar os riscos.<br /><br />
                  Seu comportamento é dinâmico, voluntarioso e impulsivo, motivado por desafios. Para tanto, liberdade e independência são imprescindíveis.<br /><br />
                  Júpiter, na mitologia, é o deus dos deuses e dos homens. É o regente desse signo e o maior planeta do sistema solar. Traz a ideia do gigantismo, do exagero, do superlativo.<br /><br />
                  É o princípio do crescimento, da fartura, da expansão e da gratificação por participar de um processo evolutivo, que visa alcançar algo maior e melhor.<br /><br />
                  Este é o significado da famosa seta apontada para o alto, símbolo do signo. O gosto pelo risco e a alma de aventureiro são característicos do signo.<br /><br />
                  Quer aproveitar a vida ao máximo e pode viajar a qualquer lugar do mundo. Se pudesse, partiria num foguete para descobrir as estrelas e as galáxias.<br /><br />
                  Sua natureza é idealista, inquieta, e pode viver muitos encontros. Por vezes, tempestuosos. Há tendência para ataques de cólera e isso pode valer inimizades entre as pessoas que o rodeiam.<br /><br />
                  No corpo, as partes vulneráveis do Sagitário são: os nervos, as vértebras, as ancas, as coxas, a bexiga, as vias respiratórias e o sistema digestivo, em particular o fígado.<br /><br />
                  Com a idade pode desenvolver patologias que desenvolve afetam a parte inferior do corpo. Crises de ciática ou cãibras musculares, por exemplo.<br /><br />
                  Pode também desenvolver alergias, que muitas vezes são resultado da sua alimentação demasiado rica e mal equilibrada.<br /><br />
                  É importante praticar esportes que ajudam a queimar as toxinas. É preciso cuidado com o orgulho, a vaidade, o deboche, os excessos, exageros e as posturas dogmáticas de quem se acha o dono da verdade.<br /><br />
                  O equilíbrio está no signo oposto, Gêmeos. Flexibilidade e a adaptabilidade impedem que as posturas se tornem impositivas demais, para que possa aceitar opiniões diferentes.<br /><br />
                  Aprender com as mudanças, olhar para outras culturas e religiões com respeito e humildade, adaptar os objetivos de acordo com as circunstâncias.<br /><br />
                  Tudo em nome da evolução. De fato, a flecha apontada para o alto só atinge o alvo se o arqueiro possuir flexibilidade e habilidade nos movimentos. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Sagitário indica uma natureza emocional idealista e elevada. O nativo aspira a metas elevadas, porém, pode não possuir uma percepção muito realista da vida.<br /><br />
                  Pode haver forte ligação com crenças religiosas ou filosóficas, incutidas pelos pais no início da vida.<br /><br />
                  Quem tem a Lua em Sagitário é otimista, entusiasmado e alegre, raramente se acomoda, pois gosta de expandir suas fronteiras.<br /><br />
                  Gosta de trazer mundos distantes para perto de si, viajar e se movimentar com rapidez.<br /><br />
                  Com frequência fixa as suas raízes em países estrangeiros ou em lugares muito afastados do local de seu nascimento.<br /><br />
                  Há tendência para se identificar com certos valores sociais devido a razões emocionais, pessoais e inconscientemente motivadas.<br /><br />
                  Por causa disso, não possui fácil objetividade no seu ponto de vista sobre as questões sociais.<br /><br />
                  Pode haver intransigência, arrogância, deboche e uma atitude egoísta superior.<br /><br />
                  O desafio aqui é evoluir emocionalmente e ser o mais flexível possível na busca de uma compressão mais leve da vida e dos fatos.<br /><br />
                  Procurar compreender os sentimentos, transformar emoções e desejos instintivos (que muitas vezes se manifestam de forma amplificada) com base na razão.<br /><br />
                  É preciso também aprender a valorizar o que já foi conquistado, para controlar a insatisfação e aproveitar melhor o que está próximo de seu alcance. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas. O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Quem tem ascendente em Sagitário tende a entrar na vida como quem começa uma viagem: com entusiasmo, curiosidade, otimismo e boa disposição. Na sua abordagem existe sempre um componente de aventura, descoberta, experiência e aprendizagem.<br /><br />
                  O ascendente em Sagitário lança-se à descoberta de uma nova fronteira, de uma nova ideia ou da solução para os problemas globais com o mesmo entusiasmo e convicção com que parte em busca de um tesouro, descobre um novo disco ou explora a despensa em busca de guloseimas.<br /><br />
                  É otimista, acredita sempre que coisas boas podem acontecer e que a vida, afinal, não é assim tão má. Com a sua fé jovial e inabalável, não hesita em correr riscos. Os acontecimentos da vida são encarados com significados e uma importância simbólica.<br /><br />
                  Tudo é analisado em relação com uma verdade maior. Seu entusiasmo e idealismo são contagiantes, inspiram as pessoas e contribuem para o bem-estar geral.<br /><br />
                  Contudo, corre o risco de se tornar pomposo, arrogante, extravagante ou doutrinário. Quer que os outros acreditem naquilo que acha que está certo e não hesita em ensinar ou até mesmo impor as atitudes e conceitos morais que você considera correto.<br /><br />
                  Uma parte de sua natureza aspira nobres ideias, elevadas realizações e grandes alturas. Outra parte é dirigida pelas necessidades mais básicas e pelos instintos animais. O grande aprendizado é encontrar formas criativas para resolver essa diferença e encurtar essa lacuna.<br /><br />
                  Assim, quando deixar de lado a atitude de sabedoria pomposa e passar a compartilhar os seus conhecimentos com humildade você dará um passo importante em direção à sua maturidade.<br /><br />
                  Esta etapa é alcançada através do controle da fala e dos pensamentos, evitando exageros e indiscrições, encontrando as palavras certas para expressar os mais amplos conceitos.<br /><br />
                  Assim pode trazer à sua vida o sentido e a Sabedoria que tanto procurou. Associa-se a este ascendente um aspecto descontraído, inquieto e jovial. Pode ter um rosto aberto, com um grande sorriso e cabelos encaracolados (às vezes arruivados), coxas fortes e tendência a aumentar de peso. <br />`,

                  `Mercúrio neste signo indica uma mente preocupada com todas as codificações do pensamento social, seja na forma de espiritualidade, religião, filosofia, direito ou outros estudos relacionados com a educação superior.<br /><br />
                  Pode haver maior preocupação pelas atitudes do que pelos fatos. O resultado muitas vezes é construtivo, proporcionando um insight da motivação social e dos acontecimentos subsequentes.<br /><br />
                  Entretanto, os nativos podem não perceber a verdade se não prestarem suficiente atenção à informação factual detalhada, base de todo pensamento lógico.<br /><br />
                  Os nativos com essa posição podem ter um insight profético, porque a sua preocupação com as atitudes lhes permite compreender as informações que serão importantes pela opinião pública.<br /><br />
                  Isso conduz à revelação do destino coletivo e do carma. Esses nativos desejam ingressar em instituições públicas de aprendizado ou de controle social, como universidades, igrejas ou governo.<br /><br />
                  O seu objetivo é obter autoridade intelectual e status, embora o preço possa ser a submissão a instituições corruptas e estagnadas.<br /><br />
                  Gostam de se considerar exemplos da verdade. Podem tender a pregar sermões moralistas sobre coisas óbvias e se tornar pedantes.<br /><br />
                  Às vezes, existe uma preocupação com metas distantes, ideais elevados, que podem levar os nativos a não perceberem o que está sob seus narizes.<br /><br />
                  Pode resultar em tendências à desatenção. Essas pessoas têm um discurso direto e dirão exatamente aquilo que pensam.<br /><br />
                  Exigem liberdade intelectual, porém as suas ideias raramente divergem dos conceitos tradicionais ou da moral social vigente. Assim, geralmente são respeitadas na comunidade.<br /><br />
                  Mas se o conformismo social for levado muito longe, pode conduzir à hipocrisia, pois os seus padrões morais talvez não sejam melhores do que as normas socialmente aceitas.<br /><br />
                  É preciso perceber que uma atitude não está necessariamente correta simplesmente porque é popular ou dominante. <br />`,

                  `O nativo com Vênus em Sagitário está sempre em busca de algo novo para conquistar e manterá acesa a chama do relacionamento somente se o parceiro não se deixar conquistar muito facilmente!<br /><br />
                  O desafio é equilibrar o amor, que quer apego, com a seta sagitariana que aponta rumos distantes.<br /><br />
                  Como a aventura é o ponto forte desta Vênus, o amor precisará também ser uma aventura, com desafios, obstáculos e conquistas diárias.<br /><br />
                  Os parceiros devem partilhar o desejo de serem livres, devem seguir juntos para novas aventuras e conhecer o mundo para que a relação se fortaleça.<br /><br />
                  Devem partilhar a cumplicidade e a sintonia em assuntos filosóficos, pois o mundo não precisar ser necessariamente uma divisa geográfica, mas também cultural, étnica e intelectual.<br /><br />
                  O que atrai é a cultura do outro, sua inteligência, o que cada um tem a oferecer para a expansão da consciência.<br /><br />
                  Com a Vênus sagitariana, quando não há mais novidades no relacionamento, ou buscam novas experiências e aventuras juntos, ou a relação perde a potência.<br /><br />
                  Esta Vênus detesta rotina e está sempre em busca de novas sensações, por essa razão o parceiro precisa ser interessante e cheio de recursos, físicos e intelectuais.<br /><br />
                  O fogo que acende a paixão expressa nesta Vênus não se apagará se a vida dos dois for uma constante aventura, excitante e cheia de surpresas.<br /><br />
                  O seu parceiro deverá se manter inatingível e até distante... Caso contrário, a paixão se esvairá tão rapidamente como quando iniciou.<br /><br />
                  As viagens e as aventuras em comum servirão como um estímulo para manter a fogueira acesa. <br />`,

                  `O nativo com Marte nesse signo adora uma boa discussão. Pode se tornar ator, professor ou orador somente para expor a sua opinião.<br /><br />
                  As suas ações serão fortes e determinadas, demonstrando franqueza e força de caráter. Sente atração pelos esportes radicais, por exercícios físicos violentos e perigosos, amando as corridas de alta velocidade.<br /><br />
                  Aventureiro, mesmo no amor, pode partir em busca de novas conquistas sempre que cansar da anterior.<br /><br />
                  Com pressa de atingir o seu alvo, não poupará esforços para conseguir seus objetivos. Pode dirigir suas ações em atividades ligadas às leis, comercio exterior ou turismo.<br /><br />
                  Espaçoso, quem possui Marte nessa posição dificilmente aceita imposições ou limitações. Ardente na expressão sexual pode ser um amante fogoso e eficiente. Tem boa fertilidade.<br /><br />
                  É preciso ser cuidadoso ao fazer esportes radicais, pois fica exposto a sofrer acidentes. A imprudência e a temeridade podem fazê-lo cometer excessos na pressa de alcançar seus objetivos.<br /><br />
                  Cético em relação à opinião dos outros, pode expressar suas ideias de forma arrogante e com ar de superioridade. Cuidado com a pressa para evitar acidentes em viagens. <br />`,

                  `Neste signo Júpiter está em seu domicílio, proporcionando boa fortuna e êxito em geral. Favorável para a literatura, as viagens, as operações com cavalos ou barcos.<br /><br />
                  Para esportistas, professores, editores, tradutores ou políticos. Em regra, o nativo é religioso, ético e sincero. Sem dúvida pode utilizar as melhores condições da sua mente.<br /><br />
                  Possui muito interesse pelas culturas estrangeiras, pela busca da sabedoria, pelas religiões ou conhecimentos sobre culturas e sistemas sociais diversos.<br /><br />
                  É muito difícil que se aborreça: tem sempre alguma coisa para fazer, seja um passatempo, uma aventura ou uma atividade criativa.<br /><br />
                  Agrada-lhe o ar livre e os esportes. Pode aprender muito através das viagens. A sua personalidade é alegre, extrovertida e optimista.<br /><br />
                  O seu respeito pela liberdade e a sua conduta imparcial fará que seja admirado e respeitado por todos, até mesmo seus adversários. <br />`,

                  `Saturno no signo de Sagitário indica pessoas sérias e responsáveis na busca da filosofia, religião e educação superior.<br /><br />
                  Elas geralmente desenvolvem códigos morais rígidos ou uma devoção inabalável a sistemas religiosos e filosóficos.<br /><br />
                  Defendem preceitos morais e se comportarão de acordo com princípios de justiça. Procuram a verdade e valores construtivos em sua atitude pessoal.<br /><br />
                  Saturno dá ao sagitariano intelectualismo, disciplina, meticulosidade e profundidade de concentração.<br /><br />
                  Tudo o que eles aprendem é totalmente absorvido e pode ser colocado em prática. Quando atingem honra ou distinção, sentem que a obtiveram pelo esforço perseverante.<br /><br />
                  O desejo de poder e liderança pode se manifestar na vontade de ser considerada uma autoridade em algum dos aspectos nas áreas como da educação superior, da religião, do direito ou da filosofia.<br /><br />
                  Há uma profunda necessidade de realização intelectual, filosófica ou espiritual que traga distinção. Esta posição traz a tendência de um intenso orgulho intelectual.<br /><br />
                  Os nativos temem a desaprovação e a censura e ficam indignados quando outros pensam ou falam deles injustamente. A sua reputação pessoal é de extrema importância.<br /><br />
                  É preciso cuidado para não se tornar presunçoso, tentar impor o seu sistema filosófico ou religioso aos outros. Se levada a extremos, esta prática resulta em presunção intelectual e espiritual. <br />`,

                  `Urano no signo de Sagitário inspira novos conceitos em espiritualidade, religião, filosofia e educação.<br /><br />
                  Os nativos com esta posição de Urano podem criar novas formas de religião e educação, com o desejo de revolucionar todos os conceitos religiosos.<br /><br />
                  Possuem um forte desejo de incorporar na religião ou espiritualidade os princípios da ciência e do ocultismo, como a reencarnação, a astrologia e a telepatia.<br /><br />
                  Podem até se interessar por religiões excêntricas, filosofias sociais ou adotar religiões e filosofias novas ou estrangeiras.<br /><br />
                  Urano em Sagitário oferece ao nativo, muita curiosidade sobre culturas estrangeiras. Pode viajar repentinamente, fazendo longas viagens por causa do espírito de aventura.<br /><br />
                  Pode viver muitas experiências singulares em países estrangeiros ou com pessoas estrangeiras. <br />`,

                  `Os anos em que Netuno transitava em Sagitário foram marcados por uma forte crise religiosa e pela ausência de uma visão otimista e esperançosa da vida.<br /><br />
                  Como consequência, o desejo de recuperar a ligação com o autêntico sentido da vida provocou a expansão da consciência coletiva e a aceitação de determinados saberes espirituais que haviam sido reprimidos.<br /><br />
                  Netuno em Sagitário provocou uma moda superficialmente otimista: o esplendor do consumismo. Mas o desfrute material sem sentido acaba por converter o consumo em decepção.<br /><br />
                  Os nativos devem aprender a intervir de forma mais ativa e realista na vida. Ao mesmo tempo, cultivar a fé e desenvolver valores espirituais. <br />`,

                  `Sagitário é o signo da filosofia e da religião da mente abstrata. Plutão inspira o interesse dessa geração por realidades extraordinárias e filosofias profundas.<br /><br />
                  A necessidade de conhecer e compreender a finalidade da vida pode levar a uma expansão espiritual.<br /><br />
                  Depois da crise emocional do trajeto por Escorpião, há uma mudança para os valores espirituais. Novas ideologias e políticas são estabelecidas com o objetivo de construir uma sociedade melhor.<br /><br />
                  Uma vez que Sagitário é o signo das grandes viagens, há o desejo de explorar os mais longínquos horizontes, que tem na Terra ou para além dela.<br /><br />
                  Plutão em Sagitário trouxe uma grande transformação no conhecimento de outros mundos através do desenvolvimento das tecnologias, da filosofia quântica e das viagens espaciais. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a comunicar a sabedoria com humildade:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Sagitário traz memórias da necessidade de muita liberdade, interesse por questões filosóficas, conhecimento, viagens e aventura.<br /><br />
                  Em vidas passadas pode ter vivido experiências com o sacerdócio, os rituais, os conhecimentos elevados e filosóficos. Pode também ter sido militar ou juízes. Pode haver rigidez de pensamento, valorização das teorias e dogmas.<br /><br />
                  Traz uma relação de profundidade com o conhecimento, mas muitas vezes certa arrogância por \"saber\" o que os outros não sabem. O conhecimento teórico pode ser excessivamente valorizado em detrimento da comunicação trivial do dia-a-dia, das trocas do cotidiano.<br /><br />
                  Por causa da necessidade de liberdade e espaço, pode haver conflito entre o desejo de viver no campo ou na cidade.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) em Gêmeos, veio aprender a viver mais o dia a dia, a interagir com todo o tipo de pessoa e situação. As trocas de experiências são muito importantes para o seu crescimento.<br /><br />
                  Os intercâmbios o ajudam a encontrar respostas concretas para os seus problemas. Você pode se tornar um comunicador dos novos tempos. Com a sabedoria do uso da palavra pode mobilizar as outras pessoas, despertando-as para novas possibilidades.<br /><br />
                  É preciso cultivar movimento, dinamismo, mudanças, interação com as pessoas, alegria, bom humor, viagens curtas e longas.<br /><br />
                  É preciso mostrar-se flexível, gentil, já que viver em sociedade tem as suas regras e exige paciência para com os outros. A meta é vencer qualquer tipo de rigidez e mostrar que não somente coopera, mas que se interessa vivamente pelo que as outras pessoas têm a dizer ou querem trocar. <br />`,

                  `Esta posição indica um forte desejo de vastos horizontes mentais, assim como de uma vida livre de limitações e tradições particulares.<br /><br />
                  A tendência é de lidar com questões grandes, muitas vezes com algum grau de fanatismo ou então em termos de princípios gerais, puramente abstratos, talvez sem um senso adequado de perspectiva e realismo.<br /><br />
                  Nos casos mais elevados, porém, a alegria é experimentada quando o indivíduo da uma forma criativa a abstrações na literatura, na formulação intelectual e na investigação cientifica.<br /><br />
                  Exemplos: o grande astrólogo John Gadbury; o gênio literário e rebelde social (a mulher romântica de muitos amores famosos) George Sand; o poeta Baudelaire; o construtor do império britânico sul-africano, Cecil Rhodes. <br />`,

                  `A base religiosa herdada no lar, na infância, não reflete as suas necessidades interiores. Você sente necessidade de buscar uma crença na qual encontre significado. Em alguns casos, pode ter a compulsão de transmitir sua verdade aos outros, tentando convertê-los a todo custo.<br /><br />
                  Seu otimismo inato geralmente é bloqueado pelos outros, uma vez que você precisa aprender a aceitar os aspectos dolorosos, limitadores e contraditórios da vida atual.<br /><br />
                  Você tem o dom de ajudar os outros a exprimir seus verdadeiros desejos. Sabe o uma filosofia de vida ajuda uma pessoa. Pode ter sido ferido em sua fé ou entusiasmo natural, deve recobrá-los e transmiti-los para as outras pessoas.<br /><br />
                  Pode ter sido desacreditado ou não ter tido incentivo. Curará a si mesmo incentivando os outros. Também pode ter sido privado do conhecimento ou ter tido problemas por causa de temas como religião ou filosofia.<br /><br />
                  Embora possa não parecer à primeira vista, a força propulsora de sua vida é de natureza espiritual. Caso negue essa necessidade, acabará se enterrando em livros e fazendo um curso após o outro, buscando na vida acadêmica as respostas para seus anseios espirituais ou como um meio de fuga desse questionamento.<br /><br />
                  Talvez tenha que percorrer uma longa e solitária senda em busca de seu próprio significado e propósito de vida. Essa busca pode torná-lo um grande viajante, que se sente revigorado ao fazer peregrinações para santuários e locais sagrados.<br /><br />
                  Também entrar em contato com os costumes de outras culturas. Pode ter sonhos repetidos ou imagens internas de lugares sagrados aos quais pode retornar na imaginação. Também adquire um sentimento de plenitude ao comungar com a natureza, sobretudo em áreas selvagens.<br /><br />
                  Você pode ter sido criado numa cultura estranha, ou em alguma cultura em que a religião não seja reconhecida. Talvez se sinta perseguido por seus semelhantes devido às suas crenças. É também possível que esteja vivendo num país onde está ocorrendo alguma transição cultural.<br /><br />
                  Os pais podem ter sido estrangeiros, exilados ou terem defendido crenças religiosas que o afastam dos demais.<br /><br />
                  Você é muito sensível a ideias como pecado original e pode acreditar que, quando os acontecimentos não estão seguindo seu curso normal, Deus está com raiva de você.<br /><br />
                  É também possível que tenha herdado algum conflito religioso que exige solução. Seu instinto filosófico e religioso provavelmente despertou em idade precoce.<br /><br />
                  Desde criança deve ter começado a refletir sobre questões mais profundas a respeito do significado da vida e é possível que nunca venha a receber uma resposta satisfatória.<br /><br />
                  Seu senso de profunda devoção, seu arrebatado fervor, faz com que praticamente tudo possa se transformar em seu deus, caso se este instinto religioso não for adequadamente canalizado. Pode inadvertidamente deificar a comida, a educação ou até mesmo o mais recente lançamento artístico.<br /><br />
                  Seu impulso religioso pode conduzi-lo a águas perigosas, se abraçar as causas ou seguir caminhos espirituais em que suas indagações e crenças pessoais sejam arrebatadas numa onda de fervor.<br /><br />
                  Pior ainda se projetar a imagem de seu deus num guru ou líder. Você poderá se tornar vulnerável à exploração e violação psicológica. Você pode ter a sensação de que encontrou a Verdade e ter o desejo de transmiti-la a todos.<br /><br />
                  Isso pode resultar em prejuízo para a sua vida pessoal, pois vai isolá-lo das pessoas que pensam diferente de você. Cuidado com a sensação de ser o dono da Verdade.<br /><br />
                  É provável que tenha dificuldade de assumir compromisso e encontrar uma direção apropriada na vida. Que sinta relutância em tomar medidas para que a coisas aconteçam. É preciso descobrir o que você pode fazer para que as coisas aconteçam e o que não pode.<br /><br />
                  Você precisa de uma filosofia de vida que possa abarcar contradições e diferentes pontos de vista com harmonia. Às vezes isso pode ser difícil caso você tenha sido criado em uma religião que se diz a única verdadeira, se sua lista do que é certo e errado for rígida.<br /><br />
                  Estudar história antiga, onde deuses e deusas eram igualmente cultuados e sagrados, pode ajudá-lo a aceitar valores opostos. É importante você compreender seu impulso para o culto.<br /><br />
                  O dom da expansividade e otimismo se encontra bloqueado a fim de facilitar uma expansão da consciência e uma maior compreensão interna.<br /><br />
                  Se puder aceitar isso, será capaz de adquirir uma sabedoria prática, bem como uma atividade espirituosa e franca diante da vida. Isto não significa que você deva fazer alguma coisa, basta viver. Se você acredita na presença divina em sua vida, não precisa mais procurá-la.<br /><br />
                  Basta viver o aqui e agora, e não estará mais dividido entre o que é e o que não é sagrado, pois terá compreendido que tudo é obra de Deus, portanto, tudo é sagrado.<br /><br />
                  Você está naturalmente ligado ao seu eu Superior, por essa razão sente tanta necessidade de estar em contato com as divindades, com a espiritualidade, com os pontos mais altos da consciência. A busca pelo conhecimento te levará a entender as Verdades Superiores. <br />

                  <strong> QUÍRON – O CURADOR FERIDO</strong>
                  Em 1977, foi descoberto um pequeno planetoide entre as órbitas de Saturno e Urano. Para a astrologia, a descoberta de um corpo celeste sempre anuncia uma mudança de consciência na sociedade e reflete desenvolvimentos históricos cruciais. <br /><br />
                  Por exemplo: a descoberta de Urano em 1781 está ligada a um período de rebeliões, revoluções e luta pela independência. <br /><br />
                  Netuno foi localizado em 1846, coincidindo com o Romantismo. Plutão é descoberto no início do século e está sincronizado com o aparecimento do fascismo, do totalitarismo e também com o de uma nova ciência, a Psicologia. <br /><br />
                  É preciso olhar para a mitologia para estabelecer a conexão de Quíron com a evolução do coletivo e compreender seu significado arquetípico. O pai de Quíron foi Saturno. Sua mãe, Filira, era uma das filhas de Oceano. De acordo com a lenda a esposa de Saturno, pegou o marido e Filira no flagra. <br /><br />
                  Para escapar, Saturno transformou-se num garanhão e deu no pé. O produto dessa união foi Quíron, o primeiro Centauro, nascido metade homem, metade animal. Perturbada por ter dado à luz ao que ela considerava um monstro, Filira pcediu aos deuses que a livrassem de qualquer maneira da responsabilidade de criá-lo. <br /><br />
                  Como resposta, levaram Quíron e transformaram a mãe ingrata num limoeiro. A primeira mágoa de Quíron é a rejeição da mãe, e onde quer que Quíron se encontre num mapa, esta é a área onde podemos ser mais sensíveis às rejeições. <br /><br />
                  Representa a \"saída do Paraíso\", que todos vivemos quando somos retirados do útero para a dura realidade do mundo. No corpo físico separado e distinto, perdemos o sentido de unidade com toda a vida. <br /><br />
                  Quíron era parte divino e parte animal, nós também somos. Seu posicionamento também mostra onde sentimos mais sutilmente o conflito entre os desejos do nosso físico e algo mais transcendente, puro e divino. Educado por deuses, Quíron cresceu para ser sábio. <br /><br />
                  Seu lado animal deu-lhe sabedoria terrena e proximidade com a natureza. Podemos dizer que era um xamã, um sábio curador, bem versado nas propriedades medicinais de várias ervas. Mas também estudou música, ética, caça e astrologia. <br /><br />
                  Histórias sobre sua grande sabedoria se espalharam, deuses e nobres mortais levaram seus filhos para serem educados por ele. Tornou-se uma espécie de pai adotivo e mestre de Jasão, Hércules e Aquiles, entre outros. As matérias que mais ensinava eram o bem-estar e a cura, pois estava familiarizado em como criar e curar feridas. <br /><br />
                  Hércules feriu acidentalmente o joelho de Quíron com uma seta envenenada. O veneno era da tenebrosa Hidra e fez uma ferida incurável até mesmo para a medicina de Quíron. Fenômeno curioso: o grande médico sofrendo com uma ferida que não podia ser curada. <br /><br />
                  Este é sua qualidade mais importante: a posição de Quíron no mapa nos mostra onde fomos feridos de algum modo e, através desta experiência obtemos sensibilidade e autoconhecimento para entender e ajudar melhor os outros. <br /><br />
                  Quíron foi associado com o nascimento do interesse popular pela psicoterapia, ao processo de trazer feridas psicológicas à superfície para serem curadas. Na verdade, Quíron aparece num forte posicionamento nos mapas de muitos curadores e terapeutas. Os melhores terapeutas não são aqueles que conhecem bem as suas próprias imperfeições? <br /><br />
                  Quíron preparava as pessoas para serem heróis. Seus pupilos estavam aptos a sobreviver no mundo, mas eram também nobres capazes de feitos e proezas a serviço de seus países ou de um todo maior. <br /><br />
                  A sua localização no mapa não só é capaz de indicar onde podemos ensinar os outros, mas também onde nosso potencial heroico pode manifestar-se. A área onde podemos ir além do normal, sem perder o contato com a \"vida real\". <br /><br />
                  Podemos ser intuitivos, inventivos e também ter os pés bem postos no chão. Dale O'Brien diz que trânsitos críticos de Quíron indicam quando e como um indivíduo é desafiado a crescer sobre a adversidade ou mediocridade que cercam a sua vida e a perceber um destino maior envolvendo-o. <br /><br />
                  Como prêmio por todos os serviços prestados, Quíron recebeu o dom divino da imortalidade. Mas estava numa posição muito estranha, não podia curar sua ferida nem morrer. Qual a solução? <br /><br />
                  Prometeu que roubou o fogo dos deuses e foi banido para os mundos inferiores, seria libertado se alguém ficasse no seu lugar. Quíron, não querendo mais ser imortal, concordou em trocar de lugar com Prometeu. <br /><br />
                  Eis a fusão de dois tipos de sabedoria: Quíron pegou a sabedoria terrena e a usou para propósitos mais elevados, enquanto Prometeu tirou o fogo dos deuses, símbolo da criatividade, e o trouxe para a Terra. Nosso desafio é integrar a visão espiritual do fogo criativo com a técnica e o senso prático. <br /><br />
                  A atitude de Quíron com relação à morte e seu entendimento acerca da saúde, da cura e da educação são os sinais dos nossos tempos.<br /><br /> Quando a humanidade desperta para sua essência divina, para a busca do autoconhecimento e expansão da consciência a fim de promover a cura individual e planetária. <br />`,

                  `O parceiro ideal é aquele que tenha interesse em cultura, assuntos filosóficos ou religiosos e que seja alegre e otimista.<br /><br />
                  Podem ser pessoas estrangeiras, mestras, sábias, gurus, religiosas ou que tenha classe social, raça e cultura diferente, viajantes, pilotos de avião, pessoas fanáticas ou de crenças arraigadas, universitários.<br /><br />
                  De alguma forma, o relacionamento é marcado por algo ou por alguém de locais distantes ou que se contrastam.<br /><br />
                  Um dos parceiros pode servir como mestre do outro ou ensinar-lhe algo a respeito do universo. Mas também podem ser aventureiros ou inconsequentes.<br /><br />
                  É importante que haja sintonia filosófica e espiritual no relacionamento. Juno neste signo favorece o compartilhamento de ideias, a busca de conhecimentos, os estudos, as viagens e aventuras em parceria. <br />`,

                  `As elucubrações mentais do nativo nunca lhe permitiram fixar-se. Tem uma enorme necessidade dos outros para encontrar-se a si mesmo.<br /><br />
                  Seduzido por mil ideias, filosofias e teorias diferentes, outrora se dispersava, sem nunca se aprofundar em nada.<br /><br />
                  Era incapaz de concentração mental e deixava-se distrair por todas as sugestões exteriores.<br /><br />
                  Os provérbios "quem tudo quer tudo perde" ou "quem vai ao vento, perde o assento" descrevem as suas vidas passadas. Entretanto, seus pensamentos otimistas lhe serão de grande ajuda.<br /><br />
                  É importante que desenvolva um foco na busca do conhecimento e que se aprofunde em seus estudos. <br />`,

                  `O indivíduo dá valor antes de tudo à sua independência e à sua liberdade. Por causa disso sacrificou o amor em suas vidas passadas.<br /><br />
                  Incapaz de estabilidade afetiva vive muitas vezes sozinho e não suporta o casamento por muito tempo.<br /><br />
                  A necessidade de mudança impele o nativo para uma vida amorosa agitada, com múltiplas experiências que duram apenas um certo tempo.<br /><br />
                  Ele se estabilizará se consentir em sacrificar parcialmente a sua liberdade em nome de um relacionamento duradouro e bem sucedido. <br />`,

                  `Indica vidas anteriores onde o nativo se dispersou na ansiosa busca de liberdade e em objetivos mutantes, sem foco.<br /><br />
                  Agora deve se acalmar e refletir antes de agir, para definir melhor seus objetivos e a sua linha de conduta.<br /><br />
                  Deve buscar sabedoria, expandir sua consciência, aprender a coordenar a sua necessidade de um ideal com a sua inquieta sede de novas experiências. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  A insaciável sede de novas experiências impede o nativo de se estabilizar. É preciso cuidado com a inconstância.<br /><br />
                  Entretanto, menos leviano do que se poderia pensar, o nativo tem, por vezes, intuições proféticas (é que ele acumulou muitos conhecimentos do Universo em suas vidas passadas).<br /><br />
                  Aprende mais com a vivência do que com os livros. As suas ideias religiosas são muito pouco convencionais e, aí, seu carma é seguir seu instinto.<br /><br />
                  Tem uma vocação especial para transmitir aos outros a sabedoria adquirida e o que conhece da Verdade, mas deve admitir que não seja seu este monopólio. <br />`,

                  `Saturno neste signo indica tendência de não ouvir os conselhos dos outros. O nativo é muito independente.<br /><br />
                  Quebra as lanças por qualquer ideia ou filosofia que lhe agrade, mas também pode vir a esquecê-las rapidamente.<br /><br />
                  Gosta de defender fracos e oprimidos e encorajar seus admiradores a enfrentar proibições. Detesta o que é convencional: sua necessidade de contestação presta serviço à humanidade, fazendo as ideias progredirem.<br /><br />
                  Mas o nativo tende a abusar. Nada lhe é mais difícil do que obedecer a alguém. Este contestador deve aprender a não julgar os outros, a ser tolerante, a equilibrar liberdade com responsabilidade.<br /><br />
                  Nesta vida pode se interessar pelas religiões, filosofias e por suas vidas passadas. Pode perfeiçoar-se muito com o tempo. <br />`,

                  `Como um cavalo desgarrado, buscou horizontes ilimitados em vidas passadas. Não sossega em nenhum lugar e quer sempre ir mais longe.<br /><br />
                  O nativo se cansa muito rápido dos pequenos detalhes prosaicos e repetitivos da vida quotidiana.<br /><br />
                  Persevera pouco. Sua natureza é instável, tem necessidade de viagens – reais ou imaginárias. Esse cavaleiro errante sente também dificuldade para se estabilizar no casamento.<br /><br />
                  Assim que se lhe impõe o que quer que seja, tem a impressão de estar ameaçado. Muda, portanto, facilmente de cônjuge, mas também de profissão, de religião e de país natal.<br /><br />
                  Assim, o nativo acumula muitas experiências diversas. Pode fazer com que as outras pessoas tirem proveito delas através do ensino, da educação, ou do turismo. Eis aí o seu carma, o seu aprendizado. <br />`,

                  `É preciso cuidado com a tendência para o misticismo e os delírios religiosos, apenas pelo prazer de viver uma experiência perigosa e, por isso mesmo, excitante.<br /><br />
                  Pode indicar a tendência de um comportamento instável e levar uma vida errante: as viagens lhe permitem fugir das obrigações da vida quotidiana.<br /><br />
                  Busca constantemente novas informações que podem transmitir muito rápido, como quem semeia pedrinhas, sem virar para trás.<br /><br />
                  Como Netuno é um grande fabricante de ilusões, a pessoa deve ser responsável e realista nas informações que transmite.<br /><br />
                  Caso contrário, pode propagar teorias delirantes. Pode ser seduzida por ideias geniais, por gurus fazedores de milagres que podem decepcioná-lo. Grande é sua influência sobre os que o cercam.<br /><br />
                  Tem o dom de envolver num sonho sedutor tudo o que transmite. Romântico, pode abrir grandes portas da prisão terrestre, sob o olhar dos seus admiradores fascinados.<br /><br />
                  Dificilmente se integra em uma estrutura rígida como o casamento, a vida profissional conservadora ou sindical. Pode ser um líder, um explorador, um aventureiro, um grande viajante. <br />`,

                  `Símbolo Esotérico
                  No símbolo de Plutão encontramos o Círculo do Espírito pairando livre acima da ligação entre a Meia-Lua da Alma e a Cruz da Matéria. Isto é muito indicativo das áreas desconhecidas que o homem tem que atravessar antes de finalmente alcançar uma compreensão de si mesmo nos níveis mais profundos.<br /><br />
                  Quando a Alma e a parte material da existência não estão em contato com o Espírito de Luz essencial, o indivíduo experimenta as energias Plutonianas mais básicas, mas quando ele começa a transcender as quantidades desconhecidas dentro de si mesmo, ele é capaz de suprir a lacuna entre sua vida inferior e finalmente ligar-se ao Espírito da purificada Luz Dourada que Deus pretendia que ele conhecesse.<br /><br />
                  Quando o homem é capaz de atingi-lo, entra em contato com a parte de si mesmo que é tão essencialmente boa, que ele tem certeza que ninguém que conheça realmente acreditaria. Esta é sua verdadeira identidade.<br /><br />
                  As grandes dificuldades para alcançar tais energias Plutonianas são que, como a gaivota que voa o mais alto com suas próprias asas, assim, cada indivíduo precisa transcender a si mesmo, sozinho.<br /><br />
                  Os finais limitados por Plutão são o desaparecimento simbólico de fases não mais necessárias para o crescimento do indivíduo. Uma vez que Plutão é Retrógrado quase que metade do tempo, então uma porcentagem muito alta da população do mundo tem esta configuração em seus horóscopos natais.<br /><br />
                  Estes indivíduos irão finalmente se tornar mais preocupados com as transformações dentro de si mesmos do que com tentativas menos frutíferas, como a de tentar modificar o mundo exterior. Invertendo-se o símbolo, tudo o mais surge da manifestação do Espírito Divino se expressando aqui na Terra.<br /><br />
                  PLUTÃO RETRÓGRADO | Personalidade<br /><br />
                  Este indivíduo com Plutão Retrógrado, sente os males da sociedade como uma razão pessoal para transformar a si mesmo. Ele sabe que não pode mudar o mundo. Contudo, gostaria de fazê-lo se fosse prático ou possível.<br /><br />
                  Mas ele pode mudar o mundo dentro de si mesmo, acabando com suas amarras a tudo que o prende a algo menor do que seu ser purificado.<br /><br />
                  Este é um processo que leva muitos anos e, algumas vezes, muitas vidas, para ser alcançado. Em sua manifestação mais elevada, representa a verdadeira Consciência de Cristo de trazer a mais pura forma de amor para a Terra.<br /><br />
                  Em menor proporção, normalmente, ele continua a eliminar de sua vida todos aqueles fatores que impedem o progresso de sua Alma e a expressão de seu Espírito.<br /><br />
                  O indivíduo com Plutão Retrógrado sente a luta da humanidade como uma luta pessoal dentro de si mesmo. Ele sente pessoalmente a necessidade de superar em si mesmo tudo que esteve ameaçando a consciência da sociedade em que vive.<br /><br />
                  Assim, ele reage fortemente à desonestidade de outras pessoas para consigo mesmas, tomando isto como uma afronta pessoal ao seu progresso, que ele sente que precisa fazer pelo bem definitivo da civilização da qual ele é uma parte importante.<br /><br />
                  Ele precisa aprender a se desprender um pouco mais dos padrões de hábitos e das características de comportamentos dos outros, cujas vidas realmente tem tão pouco a ver com a sua verdadeira identidade interior.<br /><br />
                  PLUTÃO RETRÓGRADO | Carma<br /><br />
                  O indivíduo com Plutão Retrógrado está vivendo o Carma de experimentar a consciência de massa dentro de si mesmo. Ele sente o impacto do pensamento do mundo, e está consciente de como este se relaciona com o pensamento do mundo através dos séculos.<br /><br />
                  Nem sempre expressando exteriormente o que sabe, ele tende a ver os outros indivíduos como parte de um todo maior e mais inclusivo do que numa base contínua de pessoa a pessoa.<br /><br />
                  Em sua vida pessoal é muito menos importante o que faz do que o que pensa a respeito do que faz. A maior parte do tempo ele vive dentro de sua consciência, escolhendo a grande profusão de sentimentos que experimenta dentro de si mesmo.<br /><br />
                  O crescimento espiritual possível com Plutão Retrógrado é limitado apenas pela mente consciente do indivíduo. Ele pode literalmente se elevar acima de grande parte do Carma de toda sua raça.<br /><br />
                  Curiosamente, se tentar evitar elevar o seu Carma, sentirá os Carmas inferiores dos outros à sua volta, de qualquer maneira. Assim, se ele escolher elevar a si mesmo, ele verdadeiramente pode começar a viver a parábola de Jesus de "estar neste mundo, mas sem ser dele".<br /><br />
                  A fim de finalmente atingir isto, ele passa por afastamentos temporários durante a primeira metade da vida, até que aprenda a ser impessoal com a intensidade do mundo que percebe fora de si mesmo, para que finalmente chegue ao ponto de não mais senti-lo agindo dentro de si.<br /><br />
                  As pessoas com Plutão Retrógrado serão parte muito importante destas majestosas transformações, ajudando a incentivar o renascimento do Homem: de seu estado de inércia para uma consciência mais elevada e desperta. <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  A base religiosa herdada no lar, da infância, não reflete as suas necessidades interiores, que sente a necessidade de buscar uma crença na qual encontre significado. Em alguns casos, pode ter a compulsão de transmitir sua verdade aos outros, tentando convertê-los a todo custo.<br /><br />
                  O otimismo inato geralmente é bloqueado, uma vez que você precisa aprender a aceitar os aspectos dolorosos, limitadores e contraditórios da vida atual. Tem o dom de ajudar os outros a exprimir seus verdadeiros desejos.<br /><br />
                  Sabe o quanto o entusiasmo e uma filosofia de vida ajuda uma pessoa. Pode ter sido ferida em sua fé ou entusiasmo natural. Devem recobrá-los e transmiti-los para as outras pessoas.<br /><br />
                  Pode ter sido igualmente, desacreditado ou não ter tido incentivo, e curará a si mesmo incentivando os outros. Também pode ter sido privado do conhecimento ou ter tido problemas por causa de temas como religião ou filosofia.<br /><br />
                  Embora possa não parecer à primeira vista, a força propulsora de sua vida é de natureza religiosa, se negar essa necessidade acabará se enterrando em livros e fazendo um curso após o outro, buscando na vida acadêmica as respostas para seus anseios espirituais ou um meio de fuga desse questionamento.<br /><br />
                  A base religiosa herdada não condiz com suas necessidades internas, e terá que percorrer uma longa e solitária senda em busca de seu próprio significado e propósito de vida.<br /><br />
                  Essa busca pode torná-lo um grande viajante, que se sente revigorado ao fazer peregrinações para santuários e lugares sagrados e também usufruir a comida, a música e os costumes de outras culturas.<br /><br />
                  Pode ter sonhos repetidos ou imagens internas de lugares sagrados aos quais pode retornar na imaginação, também adquire um sentimento de plenitude ao comungar com a natureza, sobretudo em áreas selvagens.<br /><br />
                  Pode ter sido criado numa cultura estranha, ou em alguma cultura em que uma religião não seja reconhecida, talvez se sinta perseguido por seus semelhantes devido às suas crenças.<br /><br />
                  Também é possível que esteja vivendo num país onde está ocorrendo alguma transição cultural e os pais podem até ter sido estranhos, exilados ou terem defendido crenças religiosas que o afastam dos demais.<br /><br />
                  Você é muito sensível a ideias como pecado original e pode acreditar que, quando os acontecimentos não estão seguindo seu curso normal, Deus está com raiva de você; é também possível que tenha herdado algum conflito religioso que exige solução.<br /><br />
                  Seu instinto religioso provavelmente despertou em idade precoce; desde a meninice, deve ter começado a refletir sobre questões mais profundas a respeito do significado da vida, e é possível que nunca venha a receber uma resposta satisfatória.<br /><br />
                  Seu senso de profunda devoção, seu arrebatado fervor que aspira consagrar-se a algo, faz com que praticamente tudo possa transformar-se em seu deus se este instinto religioso não for adequadamente canalizado.<br /><br />
                  Pode inadvertidamente divinizar a comida, a educação ou até mesmo o mais recente lançamento artístico.<br /><br />
                  Seu impulso religioso pode conduzi-lo a águas perigosas e se abraçar em causas ou seguir caminhos espirituais em que suas indagações e crenças pessoais sejam arrebatadas numa onda de fervor.<br /><br />
                  Pior ainda se projetar a imagem de seu deus em um guru ou líder, poderá se tornar vulnerável à exploração e violação psicológica.<br /><br />
                  Você pode ter a sensação de que encontrou a Verdade, e ter o desejo de transmiti-la a todos, o que pode resultar numa devastação para a sua vida pessoal, pois vai isolá-lo das pessoas que pensam diferente de você, e você vai se convencendo que é o dono da Verdade.<br /><br />
                  É provável que tenha dificuldade de assumir compromisso e encontrar uma direção apropriada na vida, sinta relutância em tomar medidas para que a coisas aconteçam.<br /><br />
                  É preciso descobrir o que você pode fazer para que as coisas aconteçam, e o que não pode. Todos nós temos fantasias, mas é preciso não nos deixarmos dirigir por elas nem nos identificarmos com elas. Você precisa de uma filosofia de vida que possa abarcar contradições e diferentes pontos de vista com harmonia.<br /><br />
                  Às vezes isso pode ser difícil se você foi criado em uma religião que se diz a única verdadeira, se sua religião prega uma divisão cruel entre a puta e a virgem para conceituar a mulher, se sua lista do que é certo e errado for rígida.<br /><br />
                  Estudar história antiga, onde deuses e deusas eram igualmente cultuados e sagrados, pode ajudá-lo a aceitar valores opostos. É importante você compreender o seu impulso para o culto.<br /><br />
                  O dom da expansividade e otimismo encontra-se bloqueado a fim de facilitar uma expansão da consciência e uma maior compreensão interna. Se puder aceitar isso, será capaz de adquirir uma sabedoria prática, bem como uma atividade espirituosa e franca diante da vida.<br /><br />
                  Isto não significa que você deva fazer alguma coisa, basta viver. Se você acredita na presença divina em sua vida, não precisa mais procurá-la, basta viver o aqui e agora, e não estará mais dividido entre o que é e o que não é sagrado, pois terá compreendido que tudo é obra de Deus, portanto, tudo é sagrado.<br /><br />
                  Você está naturalmente ligado à seu eu Superior, por essa razão sente tanta necessidade de estar em contato com as divindades, com a espiritualidade, com os pontos mais altos da consciência.<br /><br />
                  Busca conhecimento através de viagens a lugares sagrados e conhecimento de outras culturas, absorvendo conhecimento que o fará mais apto a entender as Verdades Superiores. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno enfatiza aí, a dimensão espiritual da parceria, a sintonia filosófica. A busca de uma parceria ideal que opera em conjunto.<br /><br />
                  Esta também é uma posição que favorece mais de uma união, será provável que na segunda ou terceira união a pessoa seja mais bem sucedida.<br /><br />
                  Há também uma tendência para idealizar o parceiro/a que deve corresponder, de alguma forma ou em algum campo a esta idealização. Tendência a legalizar suas uniões e parcerias. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,
                  `Experimenta as viagens de longa distância, nascidas da insatisfação que o faz procurar novos horizontes, novas culturas, novos modos de vida. O conhecimento que adquire ainda é horizontal, passa-se ainda sobre a Terra. <br /><br />
                  Vêm da identificação com outros povos, outras nações que revelam comportamentos não familiares. É o apelo do longe, do distante, de tudo o que é estrangeiro e por isso o dinamiza. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,
                  `É vertical. Procura uma Verdade Interior, no desejo de ensinamentos que estimulem a mente superior. <br /><br />
                  Busca ensinamentos eternos, transcendentes, capazes de despertar uma adesão emocional, uma nova Fé. O conhecimento revela novos valores. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,
                  `É a descoberta da primeira experiência Iniciática. Compreende que não somos entidades solitárias, separadas da força de um universo em expansão. <br /><br />
                  Transcende a divisão do ego separatista para aderir a Leis Intemporais capazes de o-direcionar e orientar. <br /><br />
                  Aprende Verdades Universais, que serão ensinadas aos outros. Ao adquirir uma nova fé que lhe mostra o caminho, procura expandir-se pelo prazer de ensinar. <br /><br />
                  É a chamada Via dos Mestres, a expressão da sua Sabedoria. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a comunicar a sabedoria com humildade: </strong>`
            ]
      },
      {
            title: `capricórnio</strong>`,
            text: [
                  `Capricórnio é um signo de Terra que deve aprender a se esforçar para escalar sua própria montanha. Ambição é uma palavra-chave.<br /><br />
                  O Sol em Capricórnio ajuda os nativos a brilhar através da competência no trabalho, do empenho e do empreendedorismo.<br /><br />
                  Quando o Sol chega em Capricórnio, um ciclo se fecha e outro se inicia, com o solstício de verão no hemisfério sul e o solstício de inverno no hemisfério norte.<br /><br />
                  Evidenciando um assunto do signo de Capricórnio e de seu regente, Saturno: o tempo. Sem o controle dos calendários, nos sentiríamos perdidos.<br /><br />
                  O capricorniano quer a realidade exposta e os limites mapeados. Prefere lidar com as emoções de forma mais racional e pragmática.<br /><br />
                  Há tendência para se fechar em si próprio. Não é raro ver os nativos deste signo solitários ou isolados do mundo.<br /><br />
                  Predisposto a certa frieza em relação aos que o rodeiam. Pode parecer insensível, mas na verdade é mais introvertido e interioriza as suas emoções.<br /><br />
                  Tem o senso de responsabilidade e de sacrifício quanto o objetivo é conquistar as metas desejadas.<br /><br />
                  Capricórnio é um signo relacionado ao poder, aos chefes, aos empresários, ao patriarcado e ao conservadorismo.<br /><br />
                  O Sol em Capricórnio concede um gosto pelos estudos sociais e políticos, da história, do sindicalismo e da religião.<br /><br />
                  No corpo, os pontos vulneráveis são: os joelhos, as rótulas, os meniscos, as articulações, o esqueleto, a pele e os olhos.<br /><br />
                  Com a idade, há tendência para desenvolver patologias nos ossos, na pele e problemas intestinais.<br /><br />
                  É importante praticar exercícios de flexibilidade e alongamento para reforçar a sua estrutura óssea. Também exercícios respiratórios para aumentar a sua capacidade torácica.<br /><br />
                  O desafio é não se tornar frio, rígido, tirano, duro, soturno (palavra quem vem de Saturno), ranzinza, crítico ou pessimista.<br /><br />
                  É preciso aprender a lidar com as emoções sem represá-las, nem suprimi-las. O equilíbrio está no signo oposto, Câncer, com suas lições de carinho, afeto, cuidado e acolhimento.<br /><br />
                  Ao se identificar emocionalmente com os outros, não abusa do poder. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  A Lua no signo de Capricórnio indica uma natureza reservada e cautelosa, inclinada à frieza e à austeridade.<br /><br />
                  O nativo procura racionalizar os sentimentos e prefere agir ao invés de falar sobre as emoções.<br /><br />
                  Leva a vida a sério e se identifica emocionalmente com valores materiais, em detrimento dos valores espirituais.<br /><br />
                  Nascer com a Lua em Capricórnio é ser trabalhador, exigente e ambicioso. Mas suas ambições possuem uma tendência pessoal, voltada ao status e à segurança financeira.<br /><br />
                  A sua ativa busca de dinheiro e poder, bem como de status para si mesmas e sua família, pode levar a investimentos egoístas, principalmente quando está em posição de maior responsabilidade social.<br /><br />
                  Há tendência para timidez e insegurança a respeito de seu próprio valor. Pode ser sensível à falta de consideração, real ou imaginária.<br /><br />
                  Por causa disso, procura se justificar pela dignidade pessoal e ambição para vencer na vida.<br /><br />
                  Pode haver também tendências calculistas para obter o poder a qualquer custo, sem considerar os sentimentos dos outros.<br /><br />
                  Na via positiva, pode desenvolver solidez emocional e assim cultivar a confiança dos outros.<br /><br />
                  É capaz de fazer sacrifícios para atender as demandas familiares, dominar bem as emoções ao lidar com as pressões exigidas na construção de uma carreira.<br /><br />
                  O desafio é <strong> aprender</strong>  a expressar os seus sentimentos. Equilibrar o dever e a responsabilidade com mais suavidade e doçura. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas. O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Quem tem o Ascendente em Capricórnio entra na vida com os passos firmes, medidos e planeados de quem escala uma montanha. Não brinca em serviço: a expressão pessoal é séria, responsável, convencional, retraída e um pouco seca. A ação é prática e concreta.<br /><br />
                  Costuma avaliar a si mesmo e aos outros pelas conquistas profissionais, a carreira e o estatuto social. As figuras de autoridade o impressionam. Há tendência para a inibição, a rigidez e a depressão.<br /><br />
                  Longe de ser nefasta, essa depressão se revela fundamental para o crescimento da individualidade. Abala a rigidez, permitindo uma reestruturação em moldes mais abrangentes e flexíveis.<br /><br />
                  As qualidades de resistência, planejamento e estratégia passam, então, a ajudar no processo de crescimento e transformação.<br /><br />
                  O Ascendente em Capricórnio frequentemente, quando jovem, adota uma postura sisuda, triste e desmotivada. Porém, ao longo dos anos, aprende a gozar as coisas boas da vida e pode até rejuvenescer com a idade.<br /><br />
                  Na maturidade, é frequente serem mais descontraídos, simpáticos e comunicativos do que foram quando jovens. Envelhece com um bom vinho. Essa alegria interior representa o culminar das qualidades de trabalho e de conquistas profissionais associadas a este ascendente.<br /><br />
                  É uma "marca de Sabedoria". O ascendente em Capricórnio quer planejar sua vida com cautela, estruturá-la com calma e lógica, conforme suas metas e aspirações. <strong> Por tanto, deve aprender a encarar as obrigações, desenvolver a disciplina e o controle.</strong><br /><br />
                  Ao cultivar seu potencial para lidar com assuntos práticos e organizá-los, vive um sentido de realização e pode desfrutar de suas conquistas. Um aspecto magro, tenso e seco pode ser associado a este ascendente. As maçãs do rosto são marcadas.<br /><br />
                  Algumas pessoas (principalmente as mulheres) têm uma beleza refinada e contam com o equilíbrio de linhas e elegância da estrutura óssea. <br />`,

                  `Mercúrio neste signo indica uma mente ambiciosa, perspicaz, prática, organizada e preocupada em obter status por intermédio de realizações materiais.<br /><br />
                  As pessoas com Mercúrio em Capricórnio são capazes de grande concentração e boa organização.<br /><br />
                  São metódicas nos pensamentos e atitudes, possuindo a habilidade de fazer uma coisa de cada vez.<br /><br />
                  O seu processo de raciocínio é meticuloso, porém não necessariamente original.<br /><br />
                  A sua paciência e disciplina podem resultar em habilidade matemática, que pode ser utilizada nos negócios ou na ciência.<br /><br />
                  Mercúrio neste signo também pode proporcionar boa capacidade administrativa. Muitos executivos bem sucedidos têm Mercúrio em Capricórnio.<br /><br />
                  As pessoas com essa posição passarão por processos tradicionais de educação como um meio de atingir metas profissionais e melhorar seu status financeiro e social.<br /><br />
                  As suas ideias políticas e sociais geralmente são conservadoras. Tendem a defender a ordem estabelecida. Respeitam as crenças que provaram a sua utilidade através do tempo.<br /><br />
                  Como possuem uma percepção aguçada, poucas coisas de consequências práticas escapam à sua atenção.<br /><br />
                  Contudo, há o perigo de que a sua seriedade e a sua disciplina mental as conduzam a uma atitude inflexível e falta de humor.<br /><br />
                  A ambição material desmedida pode levar à avareza e à tendência de usar as pessoas para atingir objetivos materiais, sem considerar os valores humanos.<br /><br />
                  O status material pode tornar se um fim em si mesmo, sobrepondo se aos valores humanos e a qualquer outra consideração.<br /><br />
                  Uma vez que Capricórnio, como Virgem, é um signo de terra, Mercúrio neste signo considera importantes apenas às ideias que tiverem valor prático.<br /><br />
                  Essas pessoas são mais realistas do que idealistas na abordagem de suas metas. Consideram as coisas pelo que são e não se iludem com falsos idealismos. <br />`,

                  `O nativo com Vênus em Capricórnio ama de forma pragmática, pensada e realista.<br /><br />
                  Pouco romântico e avesso a expressões sentimentais, se expressa através de avaliações e comparações, administrando seus relacionamentos e avaliando riscos, danos e perdas.<br /><br />
                  Quanto mais tempo permanecer numa relação, tanto melhor saberá demonstrar seu afeto, sem grandes efusões.<br /><br />
                  Vênus em Capricórnio dá um tom mais sério e maduro às questões do amor e das finanças.<br /><br />
                  O nativo gosta de tomar providências objetivas, realistas e práticas em relação às parcerias profissionais e amorosas.<br /><br />
                  O amor fica menos imaginativo, menos açucarado, é verdade. Mas em compensação, o nativo, parte em busca para a realização dos desejos.<br /><br />
                  Procurando um comprometimento sério, dentro dos moldes tradicionais, não hesita em investir no relacionamento, mas suas demonstrações de afeto visam sempre pautar a seriedade de suas intenções.<br /><br />
                  Acreditando que as relações se constroem no dia-a-dia, não cria ilusões inúteis e é capaz de investir no longo prazo, visando estabilidade e comprometimento, sempre em vista de conquistar objetivos comuns.<br /><br />
                  O nativo com essa Vênus não cai sob as flechas de Cupido, mas prefere um amor pragmático e prático, capaz de criar alicerces sólidos para o futuro, dentro dos moldes da família tradicional. <br />`,

                  `Marte se encontra exaltado neste signo, indicando que quem possui essa característica tem um poder inato para se tornar líder.<br /><br />
                  Com força de caráter e grande controle de si próprio, a pessoa age com tenacidade em busca de seus objetivos. Ambicioso, alcança o sucesso com determinação sólida e senso de responsabilidade.<br /><br />
                  Possui muita força para exercer sua atividade profissional. Na expressão sexual é firme e sólido, mas dentro dos limites impostos pela moral.<br /><br />
                  Quem possui esse tipo de Marte irá se expressar dificilmente num erotismo irracional ou passional. Esse Marte é moderadamente fértil.<br /><br />
                  Disposto a se superar sempre, quem possui Marte aflito em Capricórnio deve observar para que não haja o excesso de teimosia e obstinação.<br /><br />
                  As suas ações tendem a ser por demais determinadas, podendo parecer impositivas e arrogantes. Disputas com colegas e superiores podem causar prejuízos à carreira. <br />`,

                  `O nativo pode alcançar riqueza através da ambição, da perseverança, da paciência e da habilidade para administrar. Pode se destacar como político, engenheiro, empresário, na filosofia e na religião.<br /><br />
                  Conta com grande prudência, cautela e um critério maduro, ainda que possa faltar-lhe criatividade e imaginação.<br /><br />
                  Mas é necessária uma mudança na consciência e um alinhamento com seus reais propósitos para que aprenda a desfrutar de suas conquistas profissionais.<br /><br />
                  Por estar tão embrenhado no seu trabalho e nas suas ambições, descuida de sua família e dos prazeres do lar.<br /><br />
                  Deve aprender a desfrutar do seu tempo livre e deixar de lado, nesses momentos, as suas atividades profissionais.<br /><br />
                  Pode demonstrar frieza e autoridade. Tem uma mente séria, reflexiva, responsável, engenhosa e com muita retidão.<br /><br />
                  A sua paciência e a sua habilidade para administrar podem lhe proporcionar muita riqueza. <br />`,

                  `Saturno no signo de Capricórnio indica forte ambição de poder, status e autoridade, geralmente manifestada nos negócios, na ciência ou na política.<br /><br />
                  Os nativos sentem grande necessidade de realizar coisas importantes em sua carreira. Não fazem nenhum esforço sem ter em mente os objetivos práticos e estratégicos. São bons organizadores.<br /><br />
                  Alternam se entre favorecer as suas ambições e proteger a sua segurança, conseguindo desse modo obter destaque sem correr riscos.<br /><br />
                  Possuem uma aura de dignidade e seriedade que pode lhes dar uma aparência de austeridade e frieza. Os nativos devem evitar a rigidez em suas atitudes e crenças.<br /><br />
                  São capazes de aceitar ordens e quando atingem as suas próprias posições de autoridade esperam a mesma obediência dos outros. Assim, são conservadores nos negócios e na política.<br /><br />
                  Sentem que a estrutura tradicional do poder tem as suas razões, que não deveriam ser questionadas por aqueles que não possuem experiência prática no trato com essas grandes responsabilidades.<br /><br />
                  A luta para adquirir segurança e autossuficiência no início da vida ajuda a formar estas atitudes práticas e conservadoras.<br /><br />
                  Sabem que tudo tem o seu preço e que todos precisam contribuir para o funcionamento do mundo.<br /><br />
                  Acham que todos deveriam obter as coisas pelos seus próprios esforços. Assim, quando chegam ao topo, procuram ajudar os outros a ajudarem a si mesmos.<br /><br />
                  Contudo, mais tarde na vida, tendem a esquecer das duras lutas da juventude e as dificuldades de enfrentar a vida sem dinheiro, ferramentas ou recursos.<br /><br />
                  Não leve ao extremo essa tendência, pois pode fazer com que você use o seu poder, a riqueza e os bens materiais obtidos para controlar os outros.<br /><br />
                  Geralmente cultivam forte sentimento de orgulho e honra familiar. Com frequência os nativos vêm de famílias respeitadas na comunidade.<br /><br />
                  Entretanto, os que nasceram de famílias ricas e socialmente importantes correm o risco de se tornarem extremamente insensíveis aos valores humanos, porque não passaram pela experiência do esforço pessoal sem recursos.<br /><br />
                  É provável que considerem as pessoas social e economicamente inferiores como mercadorias manipuláveis, e não como seres humanos sensíveis.<br /><br />
                  Essa tendência pode ser compensada se houver muita compreensão espiritual e uso da compaixão.<br /><br />
                  Se houver uma infância de pobreza e desgraça familiar, esta posição proporciona o impulso necessário para superar as dificuldades e atingir destaque e poder.<br /><br />
                  Para essas pessoas, a vida é sempre um assunto sério e uma luta. Algumas vezes, não possuem sensibilidade estética, julgando as coisas somente por seu preço ou reputação.<br /><br />
                  Se o desejo de status for levado a extremos, pode tornar-se um fim em si mesmo e não um meio de contribuir para a ordem social.<br /><br />
                  Precisam desenvolver o senso de humor e a compreensão de outros valores além do materialismo e do status. Os nativos podem atingir as alturas da espiritualidade ou as profundezas do materialismo e do egoísmo.<br /><br />
                  Como e quando o poder e a autoridade serão obtidos, irá depender do nível de consciência e do grau de espiritualidade do nativo.<br /><br />
                  No seu melhor, há honestidade e integridade em todos os negócios, contatos profissionais e políticos.<br /><br />
                  É preciso cuidado para que não usem meios inescrupulosos para adquirir riqueza e poder. Pode haver uma tendência a usar interpretações literais da lei visando vantagens desonestas.<br /><br />
                  Contudo, se esses meios inescrupulosos forem usados, com frequência provocam inversão na sorte, desgraça pública e perda do poder. <br />`,

                  `Urano no signo de Capricórnio indica uma geração de pessoas que podem realizar importantes mudanças nas estruturas de poder governamental e comercial.<br /><br />
                  Os nativos desejam mudar o status quo para garantir maior segurança no futuro. Mas precisam ter cuidado para fazê lo de maneira prática, construindo o novo, porém baseando-se no antigo.<br /><br />
                  Elas procuram mudanças construtivas, embora relutem em abandonar completamente o passado. Essas pessoas são muito ambiciosas e desejam o sucesso.<br /><br />
                  Na ciência e nos negócios, possuem ideias originais que utilizam para favorecer as suas carreiras ou melhorar o seu status. Também são capazes de desenvolver velhas ideias de maneira nova ou incomum.<br /><br />
                  Os nativos tendem a se expandir na procura do progresso profissional. No seu pior, pode haver ambição desmedida. <br />`,

                  `Esta é uma época em que as estruturas, as instituições e as bases em que a nossa sociedade é construída estão em crise.<br /><br />
                  As pessoas podem cair massivamente no pessimismo e no receio do futuro, ao perceberem que os recursos estão em risco e estão perdendo a estabilidade econômica de todo o planeta.<br /><br />
                  Os nativos nascidos com Netuno em Capricórnio sentem a falta de autoridade (sobretudo paterna ou hierárquica) e a dificuldade do viver em sociedade.<br /><br />
                  Em geral, é uma época propícia à destruição do preestabelecido e ao aparecimento de novas alternativas, de novas estruturas governamentais.<br /><br />
                  Surge então a necessidade de introduzir a espiritualidade na vida quotidiana, no trabalho, na carreira e nas metas de vida.<br /><br />
                  É preciso cultivar a conexão com o propósito de alma para o desenvolvimento de uma carreira consciente e alinhada o plano espiritual. <br />`,

                  `Plutão transita em Capricórnio, ainda estamos aprendendo e vivenciando o simbolismo deste posicionamento. Estamos no início de um novo ciclo de Plutão em Capricórnio.<br /><br />
                  Plutão indica a ruína e a necessidade de transformação das velhas instituições. Podemos viver uma grande alteração nos conceitos básicos sobre Hierarquia, Autoridade e Respeito. Essa alteração vai ser cada vez mais sentida na carne, na experiência da vida.<br /><br />
                  Estas alterações nos forçam a reavaliar os nossos critérios a respeito "do que ouvir", "em que acreditar", "onde colocar as nossas atenções" e "a quem nos colocarmos à disposição".<br /><br />
                  Cooperação será a tônica de uma nova abordagem coletiva de relacionamentos hierárquicos, não como reação à autoridade, mas como resposta às necessidades de se assumir a própria responsabilidade diante da vida que nos cerca.<br /><br />
                  Paternalismos e manipulações não mais caberão nas nossas expectativas: aquela figura austera, que mantém tudo nos trilhos, está desaparecendo. Num primeiro há muito medo e insegurança, (já se nota no desemprego e na crise financeira e econômica).<br /><br />
                  Mas com o tempo, as transformações das estruturas internas e externas se revelam suportáveis e até benéficas, enquanto percebemos que a transformação do que é velho em novo é inexorável, doloroso e necessário. Sempre foi assim.<br /><br />
                  O poder será dos que têm "boa vontade", já que só será exercido na medida em que for permitido. Status será dos que souberem "Fazer" e souberem "Ser" e não apenas dos que sabem "Ter".<br /><br />
                  Aliás, \"Ter\" será substituído por "Ser" na escala de valores do inconsciente coletivo. Poder aquisitivo será um acessório, não mais uma premissa. Dificuldades? Sim, muitas. Principalmente antes de termos estabelecido as nossas novas referências em termos de segurança e estabilidade. <br />`,

                  `<strong><i> Os Nodos Lunares Norte e Sul </strong></i>  (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual.<br /><br />
                  <strong><i> O eixo Cauda / Cabeça do Dragão </strong></i>  (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional.<br /><br /> Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser.<br /><br />
                  <strong><i> A Cauda do Dragão </strong></i>  (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos.<br /><br />
                  <strong><i> A Cabeça do Dragão </strong></i>  (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca.<br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma.<br /><br />
                  <strong><i> O objetivo é equilibrar os dois: </strong></i>  usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil).<br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a descobrir a força na fragilidade:</strong><br /><br />
                  Quem tem o Nodo Sul (Cauda do Dragão) em Capricórnio traz memórias de muita rigidez e de exagerado sentido prático, em detrimento do mundo emocional. Pode ter priorizado a carreira em detrimento da família. Traz necessidade de reconhecimento e leva a vida muito a sério.<br /><br />
                  É muito responsável, correto, exigente consigo mesmo e com os outros. Anseia pelo sucesso profissional. Identifica-se bastante com símbolos exteriores de poder e sucesso, tais como roupas de marca, títulos, amizades e relacionamentos que elevam o \"status\".<br /><br />
                  Costuma ser ambicioso e pragmático na sua busca de poder e reconhecimento, chegando ao ponto de por de lado as suas emoções para atingir seus fins e objetivos.<br /><br />
                  Acredita que o valor pessoal vem apenas do esforço e do trabalho. Pode ser muito orgulhoso, incapaz de pedir ajuda e demonstrar fragilidade.<br /><br />
                  Mas com o Nodo Norte (Cabeça do Dragão) em Câncer, veio aprender a valorizar o mundo interior, o mundo das emoções. É uma transição da velhice, do peso e da rigidez para a juventude, a leveza e a sensibilidade. Permitir-se errar, brincar, chorar, desistir sem culpa.<br /><br />
                  Há tendência de atrair situações que o obriguem a se fragilizar, a dar prioridade às pessoas e às emoções aso invés da matéria, do poder e imagem. Deve aprender a fluir com a vida, sem correr atrás de uma meta ou objetivo.<br /><br />
                  É um convite para cultivar o ninho familiar, as relações de afeto, o cuidado, o carinho que traz a oportunidade de despir a armadura rígida e entrar em contato com a sua humanidade.<br /><br />
                  O crescimento requer a construção de uma base emocional sólida, mais do que êxito social, para que os seus sentimentos possam finalmente fluir e serem expressos livremente. <br />`,

                  `Aqui ha profundidade e, às vezes, austeridade e transcendência na busca da felicidade realizada pelo indivíduo.<br /><br />
                  A vida pessoal tende a fluir em profundidade, melhor do que em amplitude, mas muitas vezes com uma qualidade exaltada. O senso de responsabilidade social ou espiritual poderá ser dominante.<br /><br />
                  Poderá levar a pessoa a acreditar na sua missão ímpar e na sua capacidade de encarnar um novo tipo de ser humano em qualquer esfera onde ela possa atuar, sendo um exemplo no sentido mais pessoal do termo.<br /><br />
                  Exemplos: Baha’u’llah, que muitos consideram ter sido uma Encarnação Divina; Nostradamus, o vidente; Annie Besant, Ralph Waldo Emerson; J. P. Morgan, o velho – e (provavelmente) Abraham Lincoln. <br />`,

                  `A ferida psicológica mais profunda está ligada ao vínculo com o pai na infância. Você o vê como fraco ou rígido e se esforça ao máximo para ser diferente dele. Sente dificuldade de estabelecer e concretizar suas metas e em geral leva muito tempo para descobrir sua verdadeira vocação.<br /><br />
                  Mesmo quando bem sucedido profissionalmente, não consegue evitar o sentimento de fracasso, o que só é superado quando desenvolver a autoestima. Tem o dom de incentivar o crescimento dos outros, dando-lhes afeto e orientação.<br /><br />
                  Compreende que uma pessoa precisa ter um objetivo e realizá-lo. Entretanto, desde cedo pode ter sido freado em sua ambição ou ter encontrado obstáculos e dificuldades.<br /><br />
                  Deve voltar a acreditar em si mesmo e conquistar as coisas de que precisa. Estruturando os outros ou algo externo, acaba por estruturar a si mesmo.<br /><br />
                  Talvez não tenha tido muito apoio dos pais ou tenha tido que lidar com uma figura de autoridade bem difícil. Você sente dificuldades em estabelecer e concretizar seus objetivos, bem como em definir seu lugar dentro da sociedade.<br /><br />
                  É necessário ser paciente em sua ânsia de descobrir uma vocação com a qual possa contribuir para o mundo, pois é possível que só se manifeste tardiamente, precedida de falsas oportunidades.<br /><br />
                  Por outro lado, você pode ficar atormentado por sentimentos de fracasso, não importa o quanto seja bem-sucedido. Analise profundamente as causas desse sentimento: é possível que esteja se impondo padrões inatingíveis ou esperando que cada novo desafio seja o último.<br /><br />
                  Pode estar lutando sob a pressão de expectativas da família que nunca poderão ser concretizadas. Talvez esteja tentando ter êxito onde seus pais fracassaram ou atingir metas pelas quais não se esforçaram.<br /><br />
                  Outra possibilidade: você pode se ver compelido a fracassar com o intuito de decepcionar seus pais e isso pode de fato representar seu primeiro sucesso. Se esta atitude for inconsciente, continuará a se trair e a fracassar, não por falta de capacidade e desejo de vencer, mas para castigá-los.<br /><br />
                  Você pode se apegar às aparências e à representação de papéis para encobrir sua vulnerabilidade e ocultar a sensação de que está de algum modo deslocado.<br /><br />
                  Pode atribuir importância exagerada ao êxito material, ao prestígio e ao status, ou pelo contrário, evitar o poder e a posição social só para descobrir que colidiu com o sistema ou entrou em desavença com figuras de autoridade.<br /><br />
                  Reflita sobre a responsabilidade. Verifique se não vem assumindo responsabilidade sobre coisas sobre as quais não tem nenhum controle. Isso dificulta sua capacidade de ser independente no mundo e passa procurar alguém que possa tomar conta de você.<br /><br />
                  Você deve desistir de se empenhar em lutas inúteis, enfrentando dificuldades e responsabilidades que não são de sua conta.<br /><br />
                  Se assumir as obrigações e deveres dos outros, esperando alguma recompensa ou reconhecimento em troca, poderá ficar decepcionado, amargo ou ressentido, recusando-se a participar da vida.<br /><br />
                  Algumas vezes, você pode julgar incorretamente suas próprias capacidades, assumindo encargos em excesso. Em consequência de tudo isso, passa a se sentir culpado por não ter assumido suas responsabilidades.<br /><br />
                  Você pode sentir certo temor por sua notoriedade ou por assumir uma posição de controle e autoridade, mas é possível também, que alimente fantasias de poder, geralmente reprimidas por vergonha e medo.<br /><br />
                  Se esses sentimentos constrangedores permanecerem inconscientes, poderá se prejudicar a partir do momento em que começar a ter êxito.<br /><br />
                  A partir do momento em que seu senso de autoestima começar a melhorar, os conceitos de êxito ou fracasso em termos mundanos perderão seu rigor e gradativamente passará a definir objetivos mais realistas para concretizá-los.<br /><br />
                  Seu sucesso deve emanar de um forte senso de respeito próprio e autoestima, pois o sucesso não pode acontecer como compensação pela falta disto. Você possui um senso natural de autoridade e dignidade que impõe respeito.<br /><br />
                  Você pode ter crescido decidido a ser diferente de seus pais, e passa a vida em função disso. Talvez essa atitude possa impedi-lo de concretizar seus objetivos pessoais positivos.<br /><br />
                  Além disso, depois de muito tempo, você pode descobrir que repetiu as características desagradáveis de seus pais, com outras formas. Isso pode ter sido apenas com relação ao pai ou a mãe.<br /><br />
                  Você é capaz de estimular o crescimento dos outros, manifestando amor e dando orientação que podem ter faltado antes.<br /><br />
                  Pode assumir com seriedade suas obrigações para consigo mesmo e para com os outros. Além disso, não tem medo de enfrentar dificuldades e responsabilidades das quais outros fugiriam assustados.<br /><br />
                  Você nasceu com capacidade para comandar, liderar, pode tentar escapar dessa atribuição, mas de um modo ou de outro acabara sendo referencia para os demais.<br /><br />
                  Deve aceitar o poder como algo sagrado e por essa razão respeitar seus comandados, liderando-os amorosamente e agindo de modo correto. Sendo você um modelo a ser imitado, cabe a você ser um exemplo digno de ser seguido. <br />`,

                  `O parceiro ideal é aquele que tenha interesse e seja dedicado a uma profissão. Que seja competente ou ocupe um cargo de poder, que ofereça estabilidade, comprometimento e seriedade.<br /><br />
                  Podem ser pessoas habilidosas em negócios, profissionais bem sucedidos, estáveis, que tenham a mesma profissão que o nativo, ou seja, pessoas mais velhas, mais maduras ou mais experientes.<br /><br />
                  De alguma forma a parceria tende a ser bem estruturada, marcada pela estabilidade ou pela autoridade.<br /><br />
                  Pode haver insensibilidade, pouco amor entre parceiros ou um dos parceiros pode ser muito autoritário. O nativo pode até mesmo trabalhar junto com o parceiro.<br /><br />
                  O relacionamento pode ser duradouro quando o casal cultiva confiabilidade, prudência e seriedade, com metas de longo prazo bem traçadas e definidas. <br />`,

                  `O nativo deve tomar cuidado com a tendência para o pessimismo. Cultivou amargura em suas vidas passadas, sem buscar horizontes mais positivos e felizes.<br /><br />
                  A atitude crítica e negativa cortou as suas asas. Pode ser uma alma antiga, que vive refletindo há milénios e manifesta reflexões de surpreendente sagacidade.<br /><br />
                  Sabe tomar o distanciamento necessário para julgar, sem se deixar perturbar por suas emoções. Mas Mercúrio retrógrado nesta casa indica que o nativo desprezou a sensibilidade dos outros.<br /><br />
                  Sua personalidade se tornou fria e ambiciosa, não pensou em aliviar os sofrimentos dos pobres com palavras de bondade.<br /><br />
                  Deve agora cultivar a inteligência amorosa, comunicar-se com mais afeto. Identificar e transmutar as crenças limitantes. Cultivar o pensamento e a palavra positiva. <br />`,

                  `Essa posição de Vênus impele o nativo para um cônjuge mais idoso, que simboliza a autoridade que conheceu e que vivenciou no passado.<br /><br />
                  Tem uma tendência a não esquecer nada, a nada perdoar e a se comportar de forma austera. Isso pode ser frustrante para ele e para os outros.<br /><br />
                  Este é precisamente um dos casos em que a família é para ele uma prova cármica. Nesta vida o nativo deve cultivar generosidade, amorosidade e afetividade. Superar o medo de dar, de se dar. <br />`,

                  `O nativo vive um conflito entre uma antiquíssima sabedoria, adquirida em vidas passadas, e a aspereza e a impulsividade de seus desejos.<br /><br />
                  Prefere, então, viver e agir com pessoas mais idosas ou mais jovens. A posição de Marte retrógrado em Capricórnio está particularmente ligada ao carma.<br /><br />
                  Esta posição deve levar o nativo a compreender o quanto é responsável por todos os seus atos e por tudo o que lhe acontece na vida atual. A grande lição é a responsabilidade. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Dividido entre o entusiasmo e a lucidez, o nativo deve conciliar suas tendências expansivas com a necessidade de disciplina.<br /><br />
                  Em alguns casos, esse Júpiter retrógrado pode indicar um materialista bastante pragmático, cuja avidez em acumular dinheiro trai a sua profunda angústia.<br /><br />
                  Tem mais sucesso na maturidade com a condição de não abafar as aspirações espirituais que desenvolvera nas encarnações precedentes. <br />`,

                  `Ao trabalhar duro, cultivando ao mesmo tempo a esperança e a perseverança, o nativo é capaz de se isolar, de se fechar a todas as influências para se concentrar num único objetivo.<br /><br />
                  Secreto, reservado, muitas vezes soturno, é a montanha de gelo cujas arestas cortantes muitas vezes ferem os outros.<br /><br />
                  Detesta o que é fútil. Chega a ter a tendência de considerar a beleza, o amor e a vida social como coisas supérfluas que o desviam de seu caminho.<br /><br />
                  Esta posição de Saturno indica que o nativo está maduro para completar seu trabalho cármico. Para conquistar o sucesso, deve agora cultivar metas nobres e elevadas.<br /><br />
                  Desenvolver uma carreira ou um empreendimento conectado com seu propósito de alma.<br /><br />
                  Ao mesmo tempo, abrir o coração também para as relações de afeto, o prazer e a beleza. Assim ganhará mais leveza, sem tanta autoexigência ou tanta rigidez. <br />`,

                  `Esta posição sugere que o nativo é uma velha alma, que retomou com muita sabedoria adquirida em vidas passadas. O nativo pode reencontrar nesta vida amigos das vidas precedentes.<br /><br />
                  Mas seu apego aos valores passados não o toma muito flexível. Seu carma é refletir sobre o bom uso do poder.<br /><br />
                  Essa posição sugere ambição, interesse ou abuso das amizades para satisfazer suas ambições pessoais e obter status.<br /><br />
                  O nativo deve se libertar do conservadorismo, mesmo aos trancos. Urano lhe permite entreabrir-se para as novas ideias e novas experiências. <br />`,

                  `O nativo busca conciliar o misticismo, ou ao menos o idealismo netuniano, com a ambição de Capricórnio.<br /><br />
                  Se Netuno está retrógrado, deverá evitar sacrificar seus ideais à sua promoção social. Ou, pelo contrário, sacrificar a carreira e a promoção social numa fuga para o sonho.<br /><br />
                  Outra maneira de se esquivar do carma é esconder as ambições pessoais por trás de teorias idealistas.<br /><br />
                  Essas ideias devem agora ser habilmente e conscientemente utilizadas, para que permitam ao nativo se promover socialmente ou profissionalmente.<br /><br />
                  É verdade que a sobriedade e a austeridade de que o nativo dá provas impressionam os outros, mas ele terá a tendência de se impor com demasiada dureza.<br /><br />
                  De qualquer modo, deve enfrentar dissabores e desilusões em suas ambições pessoais. Por isso mesmo, refletir sobre a futilidade de toda promoção social. <br />`,

                  `FALTA TEXTO <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  A ferida psicológica mais profunda está ligada ao vínculo com o pai, na infância. Você o vê como fraco ou rígido, e se esforça ao máximo para ser diferente dele. Sente dificuldade de estabelecer e concretizar suas metas e em geral leva muito tempo para descobrir sua verdadeira vocação.<br /><br />
                  Mesmo quando bem sucedida profissionalmente, não consegue evitar o sentimento de fracasso, o que só é superado quando desenvolver a autoestima.<br /><br />
                  Tem o dom de incentivar o crescimento dos outros, dando-lhes afeto e orientação. Compreende que uma pessoa precisa ter um objetivo em vida e realizá-lo.<br /><br />
                  Entretanto, desde cedo pode ter sido freado em sua ambição ou terem tido muitos obstáculos e dificuldades. Deve voltar a acreditar em si mesmo e conquistar as coisas de que precisam.<br /><br />
                  Estruturando os outros ou algo externos acaba por estruturar a si mesmos. Talvez não tenha tido muito apoio dos pais ou tenha tido que lidar com uma figura de autoridade bem difícil.<br /><br />
                  Você sente dificuldades em estabelecer e concretizar seus objetivos, bem como em definir seu lugar dentro da sociedade.<br /><br />
                  É necessário ser paciente em sua ânsia de descobrir uma vocação com a qual possa contribuir para o mundo, pois é possível que só se manifeste tardiamente, precedida de inúmeras e falsas oportunidades.<br /><br />
                  Por outro lado, você tem dificuldade em desfrutar o prestígio que outros percebem em você, de modo que fica atormentado com sentimentos de fracasso, não importa o quanto seja bem-sucedido.<br /><br />
                  Analise profundamente as causas desse sentimento: é possível que esteja se impondo padrões inatingíveis ou esperando que cada novo desafio seja o último, pode estar lutando sob a pressão de expectativas da família que nunca poderão ser concretizadas e talvez esteja tentando ter êxito onde seus pais fracassaram e atingir metas pelas quais não se esforçaram.<br /><br />
                  Pode se ver compelido a fracassar com o intuito de decepcionar seus pais, e isso pode de fato representar seu primeiro sucesso. Se esta atitude for inconsciente, continuará a se trair e a fracassar, não por falta de capacidade e desejo de vencer, mas para castigá-los.<br /><br />
                  Você pode se apegar às aparências e à representação de papéis para encobrir sua vulnerabilidade e ocultar a sensação de que está de algum modo deslocado.<br /><br />
                  Pode atribuir importância exagerada ao êxito material, ao prestígio e ao status, ou pelo contrário, evitar o poder e a posição social só para descobrir que colidiu com o sistema, sendo constantemente multado por estacionar em locais proibidos, passando pelo pente-fino por ocasião da declaração dos impostos, ou entrando em desavença com figuras de autoridade.<br /><br />
                  Se você parece não ter noção de responsabilidade, verifique se não vem assumindo responsabilidade sobre coisas sobre as quais não tem nenhum controle.<br /><br />
                  Isso dificulta sua capacidade de ser independente no mundo e passa procurar alguém que possa tomar conta de você. Você deve desistir de se empenhar em lutas inúteis, enfrentando dificuldades e responsabilidades que não são de sua conta.<br /><br />
                  Se assumir as obrigações e deveres dos outros, esperando alguma recompensa ou reconhecimento em troca, poderá ficar amargo, decepcionado ou ressentido, recusando-se a participar da vida.<br /><br />
                  Algumas vezes, você pode julgar incorretamente suas próprias capacidades, assumir encargos em excesso, fracassar, e em consequência de tudo isso, passa a se sentir culpado por não ter assumido suas responsabilidades.<br /><br />
                  Você pode sentir certo temor por sua notoriedade ou por assumir uma posição de controle e autoridade, mas é possível também, que alimente fantasias de poder exagerado e despótico que geralmente são reprimidos por vergonha e medo.<br /><br />
                  Se esses sentimentos constrangedores permanecerem inconscientes, poderá se prejudicar a partir do momento em que começar a ter êxito.<br /><br />
                  A partir do momento em que seu senso de autoestima começar a melhorar, os conceitos de êxito ou fracasso em termos mundanos perderão seu rigor, e gradativamente passará a definir objetivos mais realistas e concretizá-los.<br /><br />
                  Seu sucesso deve emanar de um forte senso de respeito próprio e autoestima, pois o sucesso não pode acontecer como compensação pela falta disto. Você possui um senso natural de autoridade e dignidade que impõe respeito.<br /><br />
                  Você pode ter tido problemas com os pais: um deles pode ser desconhecido, serem vistos como fracos e incapazes, ou rígidos e autoritários, etc.<br /><br />
                  Você pode ter crescido decidido a ser diferente de seus pais, e passa a vida em função dessa imagem, o que o impede de concretizar seus objetivos pessoais positivos. Além disso, depois de muito tempo, você pode descobrir que repetiu as características desagradáveis de seus pais, com outras formas.<br /><br />
                  Isso pode ter sido apenas com relação ao pai ou a mãe. Você é capaz de estimular o crescimento dos outros, manifestando amor e dando orientação que podem ter faltado antes.<br /><br />
                  Pode assumir com seriedade suas obrigações para consigo mesmo e para com os outros; além disso, não tem medo de enfrentar dificuldades e responsabilidades das quais outros fugiriam assustados.<br /><br />
                  Você nasceu com capacidade para comandar, liderar, pode tentar escapar dessa atribuição, mas de um modo ou de outro acabara sendo referencia para os demais.<br /><br />
                  Deve aceitar o poder como algo sagrado e por essa razão respeitar seus comandados, liderando-os amorosamente e agindo de modo correto, pois sendo você um modelo a ser imitado, cabe a você ser um exemplo digno de ser seguido. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Se o asteroide está no Meio do Céu conjunto a este ou mesmo na décima casa, as parcerias que esta pessoa formar, terão algum teor público, e serão de alguma forma responsáveis pela forma que esta aparece para os outros. Podem também indicar a união do profissional e do conjugal.<br /><br />
                  Mas a pessoa com Juno da décima casa terá que aprender a ficar um pouco apagada diante desse parceiro/a, ou pelo menos a partilhar com ele todos os seus louros e sucessos.<br /><br />
                  Essa posição por signo, ou casa mostra uma certa predestinação conjugal, a qual permitirá a ela que se afirme no mundo, ou mesmo que trabalhe com essa pessoa.<br /><br />
                  Considerar o posicionamento de Júpiter para avaliar o potencial de sucesso social, que pode ser alcançado através de parcerias.<br /><br />
                  No mapa de uma mulher indica que esta será uma parceira de muita confiabilidade, prudente e séria. No de um homem, que a esposa que ele escolherá terá estas características. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,
                  `Desenvolve a ambição social como desejo de projeção no coletivo e de afirmação pública. Procura status, consideração, prestígio e poder público. <br /><br />
                  O desejo corresponde à necessidade de transcender os limites do seu mundo privado para um relacionamento mais abrangente com a vida e com os outros. <br /><br />
                  Mas esse desejo é muitas vezes confundido com um sentimento de insegurança e inferioridade social. <br /><br />
                  Como reação, pode compensar-se pela afirmação egocentrada e perversa de poder. Outra possibilidade é abster-se do apelo social por se encontrar totalmente inibido ou bloqueado. <br /><br />
                  Abdica de sua intervenção maior, de sua ação no coletivo. Encontra-se frustrado e socialmente irresponsável, aquém do que podia vir a ser e reduzidos à esfera de suas necessidades básicas, do seu mundo privado, das suas preocupações domésticas e familiares. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,
                  `Cultiva a capacidade de afirmação social e se projeta frente à opinião pública. Seu poder individual dinamiza as forças do coletivo. <br /><br />
                  Participa de organizações nacionais ou internacionais. Vive a profissão como forma de intervenção nas estruturas da Ordem Comum. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,
                  `Identifica-se com a responsabilidade social. A contribuição se torna mais segura, mais adulta, mais livre e mais determinada. <br /><br />
                  Aceita incondicionalmente Ser quem pode Vir a Ser. Vence os medos, a imaturidade e responde totalmente ao seu destino, ao seu projeto de vida. <br /><br />
                  Uma vez liberto das inseguranças e condicionamentos que o prendiam ao Passado, só então é emocionalmente adulto, capaz de se assumir responsável. <br /><br />
                  Agora pode afirmar conscientemente o que antes não podia ser expresso, liberto de medos inconscientes, de resistências emocionais e sentimentos redutores de inferioridade. <br /><br />
                  Nesta fase pode criar novas estruturas. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a descobrir a força na fragilidade: </strong>`
            ]
      },
      {
            title: `aquário</strong>`,
            text: [
                  `Aquário é um signo de Ar, visionário, inteligente, inovador e pioneiro, que gosta de pensar no coletivo. Gosta de olhar para o futuro, de questionar regras, dogmas e tabus obsoletos.<br /><br />
                  O Sol em Aquário inspira o olhar vanguardista, a liberdade, a igualdade e a fraternidade.  Gosta de pensar no coletivo, mas também preza a individualidade.<br /><br />
                  A ideia é essa: cada um com sua personalidade e seus talentos únicos colaborando para o sucesso do conjunto.<br /><br />
                  O aquariano cultiva o entendimento de que somos parte de um todo que se organiza de acordo com uma ordem, que devemos enfrentar os problemas sociais e apresentar soluções.<br /><br />
                  Aquário é um signo mental, não tem muita paciência para pequenos sentimentalismos. Está mais inclinado para grandes causas e ideais.<br /><br />
                  É regido por Urano, um planeta de energia revolucionária. Tem grande imaginação, inventividade, dificuldade de aceitar imposições e alimenta um desejo permanente de renovação.<br /><br />
                  Tem um quê de rebelde e excêntrico, pode se sentir muitas vezes incompreendido e indignado com as injustiças sociais.<br /><br />
                  O grande desafio do aquariano é transformar essa rebeldia, tornando-se um revolucionário que consegue quebrar com velhos padrões e trazer as novas ideias para a realidade.<br /><br />
                  Deve aprender a ter mais paciência com o tempo das coisas, pois seu raciocínio é veloz.<br /><br />
                  Aquário prepara o mundo de amanhã e quer o futuro já. Mas Saturno é o antigo regente do signo, ensinando que a liberdade deve vir junto com a responsabilidade e que sem determinação para realizar as metas visionárias nada é feito.<br /><br />
                  Outra característica do signo é a dificuldade de fazer contatos mais íntimos, pois tende a pensar apenas coletivamente, a ser mais racional e por isso, mais objetivo e mais frio.<br /><br />
                  Aquário é irreverente, anda na contramão do senso comum e necessita ser radical para ser ouvido.<br /><br />
                  Mexe com preconceitos arraigados, deixa marcas de sua passagem como um vendaval no quintal. Não tolera qualquer aprisionamento, ou qualquer rotina.<br /><br />
                  No corpo, as partes vulneráveis do Aquário são: os joelhos, as pernas, os tornozelos, os pés, as articulações e todo o sistema sanguíneo. Sob a aparência de fragilidade, o nativo deste signo é na verdade resistente às doenças.<br /><br />
                  Com a idade, há tendência para patologias relacionadas à má circulação sanguínea. Deve também vigiar os rins, o coração e os nervos.<br /><br />
                  O melhor remédio para o aquariano é a atividade e a distração. Quando está com a mente ocupada, está feliz e não tem tendência para pensar em coisas tristes.<br /><br />
                  O Aquariano tem um sentido muito grande da amizade, adora fazer amigos e expandir sua rede social. Porém a tendência é reagir aos sentimentos e à afetividade. O equilíbrio está no signo oposto - Leão.<br /><br />
                  Embora sejam pioneiros e originais, os aquarianos devem aprender a confiar mais em seu próprio poder. Desenvolver a alegria de viver e a disciplina, evitar as incertezas e o pessimismo.<br /><br />
                  Os aquarianos devem se conectar com o seu coração para sentir que a vida é única.<br /><br />
                  Isso sem dúvida vai ajudá-los a se relacionarem mais intimamente, a compreenderem que os objetivos e anseios pessoais podem ser tão nobres quanto os anseios universais. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  Nascer com a Lua no signo de Aquário é contar com a capacidade para compreender as necessidades da humanidade.<br /><br />
                  É buscar a liberdade de expressão emocional e exigir liberdade de movimentos dentro do cenário doméstico. É provável que as relações familiares sejam incomuns.<br /><br />
                  O seu lar pode ser um local de reunião para amigos e atividades em grupo. A Lua em Aquário pode proporcionar lampejos de conhecimento intuitivo.<br /><br />
                  Os cuidados e os interesses se voltam para a coletividade, as amizades, as novidades, o convívio social, a participação ativa em ações humanitárias.<br /><br />
                  Novas relações são sempre bem-vindas. Mas há pouca habilidade para lidar com sentimentalismos.<br /><br />
                  A Lua em Aquário pode proporcionar também algumas reações emocionais imprevisíveis.<br /><br />
                  Pode haver uma tendência à perversidade emocional e à teimosia, ou uma inquietação e uma necessidade irracional de liberdade a qualquer custo.<br /><br />
                  Também pode haver medo de envolvimentos emocionais devido à ameaça que eles representam para a liberdade pessoal.<br /><br />
                  Quanto mais a liberdade for respeitada, mais pode se ligar às pessoas. Mas é preciso aprender a valorizar os laços de afeto e os sentimentos.<br /><br />
                  Perceber as necessidades alheias para que possa servir e ajudar os outros, formando assim relações de amizade sinceras e duradouras. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas. O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Quem tem Ascendente em Aquário cultiva sua identidade única através de uma visão objetiva, global e impessoal da vida.<br /><br />
                  Costumam apreciar os acontecimentos, as pessoas, as situações e a si mesmo de uma perspectiva mais afastada, buscando uma imagem mais completa e mais ampla do contexto social. Algo maior que o self deve ser levado em consideração.<br /><br />
                  Os ideais são igualitários: fraternidade, justiça e liberdade para todos.<br /><br />
                  Sua expressão pessoal é baseada numa aparente contradição: tem uma necessidade imperativa (embora por vezes disfarçada) de ser único, diferente e inconvencional, mas ao mesmo tempo quer ser aceito pelo coletivo, pela sociedade.<br /><br />
                  Em outras palavras: tem de ser diferente e, ao mesmo tempo, igual. É simultaneamente rebelde e gregário. A solução deste conflito interno varia de pessoa para pessoa. Alguns nativos podem até sufocar o seu individualismo em prol da sua aceitação social.<br /><br />
                  Mantém-se numa atitude de falso conformismo, mas correm o risco de explodir em rebeldia a qualquer momento. Outros se proclamam "espíritos livres" e preferem se manter à margem da sociedade.<br /><br />
                  Ganham liberdade para serem inconvencionais, teimosos, excêntricos e rebeldes de uma forma até chocante, mas perdem o prazer da companhia humana.<br /><br />
                  Na maioria dos casos, contudo, a faceta experimental e pioneira deste signo no Ascendente consegue encontrar soluções originais e equilibradas (geralmente depois de várias tentativas). Pode unir-se a grupos diferentes e originais que lhe deem espaço e liberdade de expressão.<br /><br />
                  Pode ter diversos grupos de amigos, que representem diversas facetas da sua personalidade. Ou pode tentar compartilhar o seu "mundo paralelo", onde reina a busca da liberdade e a visão do futuro.<br /><br />
                  Qualquer uma destas soluções pode permitir a troca de ideias, a cumplicidade em ideologias e pontos de vista.<br /><br />
                  Assim o Ascendente em Aquário se sente acompanhado na sua diferença. Ao compreender que não precisa de se rebelar para ser livre, quem tem este ascendente começa a encarar a vida como uma grande experiência de solidariedade.<br /><br />
                  Descobre, então, que tem a capacidade de partilhar com toda a humanidade as suas ideias largas e globais, numa perspectiva de serviço, esperança e fraternidade. As utopias se tornam, então, ideias realizáveis.<br /><br />
                  Fisicamente, este ascendente é associado a figuras grandes, altas e a rostos bem delineados e de expressão aberta. Em sua aura geralmente há uma carga elétrica ou magnética, que lhe confere um toque excêntrico. <br />`,

                  `Mercúrio no signo de Aquário indica uma mente aberta às novas experiências.<br /><br />
                  A capacidade de considerar os fatos à luz da verdade impessoal oferece uma mente confiável, não preconceituosa e objetiva. Para os nativos com esta posição, a verdade deve vir em primeiro lugar.<br /><br />
                  Não se interessam muito por ideias tradicionais ou socialmente aceitas se essas forem incompatíveis com os fatos ou com experiências diretas. Aqui está o segredo da sua originalidade.<br /><br />
                  Devido à sua objetividade impessoal, os nativos não se surpreendem facilmente com nada que possam ver ou experimentar.<br /><br />
                  Assim, podem aceitar coisas que outros considerariam amedrontadoras ou incompreensíveis. Mercúrio em Aquário está em sua exaltação.<br /><br />
                  Portanto, os nativos possuem a capacidade de saber que a razão existe como um padrão da Mente Universal, da qual a Mente Individual é apenas um submecanismo.<br /><br />
                  Assim, a capacidade dos nativos para experimentar as coisas ultrapassa os cinco sentidos físicos.<br /><br />
                  Mercúrio em Aquário manifesta as suas faculdades intuitivas mais elevadas mediante a comunicação com a Mente Universal mais ampla, transcendendo o ego individual.<br /><br />
                  Como Aquário é um signo fixo, a energia mental é estabilizada e concentrada. Portanto, capaz de receber ideias das esferas arquetípicas da consciência.<br /><br />
                  Alguns possuem a capacidade de perceber a própria mente como um campo de energia e o seu conteúdo como padrões desta energia.<br /><br />
                  Podem ser excelentes telepatas ou canalizadores. A experiência direta de estados de energia mais elevados também oferece um insight científico sobre os mecanismos das manifestações materiais.<br /><br />
                  Há boa organização mental e concentração, com frequência levando à habilidade matemática e inventiva, uma das razões pelas quais esta posição gera cientistas.<br /><br />
                  As pessoas com esta posição de Mercúrio gostam de atuar com outras pessoas. Podem envolver-se em trabalhos de grupo ou de organizações. Buscam estímulo mental nas amizades.<br /><br />
                  A capacidade de ver as coisas em termos amplos favorece o humanitarismo e a preocupação com o desenvolvimento espiritual da Humanidade.<br /><br />
                  É uma excelente posição para a astrologia e todas as formas de estudos ocultos. <br />`,

                  `O nativo com Vênus em Aquário acredita que o amor, antes de tudo, significa liberdade e amizade.<br /><br />
                  Sincero nos relacionamentos acredita que quando se ama verdadeiramente, é preciso respeitar a individualidade e curar o ciúme, a possessividade ou as atitudes que a outra pessoa despreza.<br /><br />
                  Esta posição de Vênus inspira a amar e buscar o diferente, a cultivar ousadia, originalidade e inventividade, a fugir da mesmice e do que já foi estabelecido pela sociedade tradicional.<br /><br />
                  Ao romper com os padrões estabelecidos e olhar para o futuro. Pode amar alguém de outra classe social e até de outra cultura, ou até alguém do mesmo sexo.<br /><br />
                  O nativo se sente estimulado ao desafiar o 'status quo', a sociedade tradicional. Avesso aos arroubos das paixões pode romper bruscamente os relacionamentos que procuram cercear sua liberdade.<br /><br />
                  O nativo gosta de fugir de situações convencionais, de temperar o romance com situações insólitas e inesperadas. Aceitar as diferenças é também fundamental, sem tentar mudar o outro.<br /><br />
                  O amor pode sobreviver mesmo à distância, pela internet, morando em casas separadas ou se encontrando sem prévio aviso, aleatoriamente.<br /><br />
                  Até mesmo sem sexo! Não que ele não ame o sexo, mas procura intelectualizá-lo, racionalizá-lo, analisá-lo demais. <br />`,

                  `O nativo com Marte nesse signo expressa suas ações de forma calculada, mas determinada. Tem habilidade para exercer carreiras ligadas à eletroeletrônica ou à engenharia.<br /><br />
                  Com espírito inventivo, alcançará seus objetivos através de ideias originais, que o tornarão pioneiro em muitos sentidos. Pode sentir atração por aviação, moto e alta velocidade.<br /><br />
                  Quem tem esse Marte é mais intelectual que físico, porém, pode exercer atividades ligadas às expressões artísticas.<br /><br />
                  Pode também exercer profissões ligadas a grandes corporações ou associações, ONGs ou sindicatos e tomará iniciativas humanitárias.<br /><br />
                  No amor poderá parecer frio e distante, com pouca expressão ardente. Esse Marte é pouco fértil. É preciso observar se o espírito é por demais independente, rebelde ou brusco.<br /><br />
                  Pode se expor demasiadamente em busca de novos objetivos de conquista e podem agir em passeatas, greves e ações públicas. Tenha atenção às disputas podem afastar os amigos. <br />`,

                  `A predisposição religiosa cede para dar lugar ao lado mais humanitário de Júpiter. O nativo pode contar com bom o humor e idealismo. Não estabelece distinções de classe social, raça ou religião.<br /><br />
                  A posição de Júpiter neste signo indica bons diplomatas, especialistas em relações de trabalho, públicas e humanas.<br /><br />
                  A fortuna pode chegar-lhe através de sociedades ou corporações. Seus momentos livres podem ser utilizados para estar junto de amigos e atividades em grupo.<br /><br />
                  Sente grande atração pela sabedoria oculta, filosofia e astrologia. É um rebelde, de espírito científico e reformista. Agrada-lhe implantar novas ideias, por vezes demasiado extravagantes.<br /><br />
                  É bom organizador e gosta de participar em associações com propósitos científicos e humanitários. <br />`,

                  `Saturno no signo de Aquário indica boa capacidade de concentração mental. A mente é impessoal e científica, a preocupação com a verdade imparcial é muito valorizada.<br /><br />
                  Os nativos muito evoluídos são capazes de esquecer o ego e enxergar todas as questões (sociais ou científicas) à luz da lei universal, imparcial.<br /><br />
                  A capacidade de acalmar a mente e fixar a atenção é o pré requisito necessário ao desenvolvimento das faculdades intuitivas.<br /><br />
                  Saturno nesta posição pode proporcionar a firmeza de atenção necessária a este desenvolvimento.<br /><br />
                  Os nativos com esta posição são mentalmente ambiciosos e com frequência trabalham muito para realizar descobertas científicas ou novas aplicações do conhecimento científico, que lhes trarão status e destaque.<br /><br />
                  Saturno em Aquário oferece também a capacidade de visualizar formas e estruturas, muitas vezes de natureza geométrica, e confere habilidades matemáticas.<br /><br />
                  No seu melhor, Saturno em Aquário oferece o senso de justiça e de responsabilidade para os relacionamentos.<br /><br />
                  Os nativos com esta posição são leais e responsáveis com amigos e grupos nos quais se envolvem.<br /><br />
                  Geralmente se comprometem com organizações fraternais altamente estruturadas, como a maçonaria. Os nativos são sensatos, podem bons conselhos que se baseiam em leis universais.<br /><br />
                  No seu pior, os nativos podem se tornar egoístas e autoritários, esperando que os outros joguem de acordo com suas regras e sirvam a seus interesses pessoais.<br /><br />
                  Pode haver tendência à frieza e insensibilidade emocional nas relações pessoais. O indivíduo pode ter atitudes formais, exclusivistas e intelectuais sem demonstrar sentimento.<br /><br />
                  É preciso muito ter carinho e atenção pessoal, pois há também o perigo do orgulho intelectual. <br />`,

                  `Urano em Aquário está em seu próprio signo. Portanto fica bastante poderoso. As pessoas com esta posição podem ter insights intuitivos sobre as verdades científicas e ocultas.<br /><br />
                  Possuem talento inventivo. Em pessoas muito desenvolvidas, existe a capacidade de compreender as energias espirituais e conceitos religiosos num contexto científico.<br /><br />
                  Esta posição de Urano proporciona muita força de vontade e independência mental. Os nativos insistem em tomar as suas próprias decisões e tirar as suas conclusões.<br /><br />
                  Suas mentes são intelectuais, independentes, empenham-se em descobrir a verdade imparcial.<br /><br />
                  Os nativos rejeitam as ideias e métodos antigos se estes não puderem ser cientificamente comprovados ou se não se ajustarem aos fatos.<br /><br />
                  A experiência direta é seu teste final da determinação da verdade sobre qualquer assunto.<br /><br />
                  A sua capacidade para experiências e observações diretas pode se expandir para dimensões mais elevadas através da revelação das suas faculdades de clarividência.<br /><br />
                  Os nativos se preocupam com a coletividade, com as soluções para a humanidade como um todo. Acreditam na fraternidade humana e na dignidade do homem.<br /><br />
                  A sua receptividade e abertura para novas ideias é uma manifestação das suas tendências humanitárias. Desejam reformar a sociedade e gostam de trabalhar em grupos e organizações.<br /><br />
                  No seu pior, pode haver excentricidade e licenciosidade ao invés de liberdade, com uma teimosia irracional nada prática. Pode haver relutância em seguir qualquer rotina, regra ou disciplina. <br />`,

                  `No final do Século XX mobilizou-se o descontentamento coletivo e começam a surgir questões que pertencem à Nova Era.<br /><br />
                  Na nossa civilização contemporânea, devido à inevitável queda das estruturas políticas e sociais, sentir-se-á um forte desejo de renovar toda a situação mundial.<br /><br />
                  Entretanto, as pessoas sofrerão por falta de estruturas que garantam o progresso para um mundo melhor e mais justo, que é o ideal aquariano.<br /><br />
                  As pessoas nascidas com Netuno em Aquário sentirão, no seu interior, a solidão provocada pela falta de solidariedade entre os homens. Por isso, será uma forte crise da concepção tecnológica e científica atual. <br />`,

                  `Plutão em Aquário vai trazer uma vontade de enxergar o mundo de uma forma diferente, abrindo novas visões.<br /><br />
                  Quando Plutão entra em Aquário todo o movimento de Plutão em Capricórnio faz o movimento de remoer a terra, de mexer e passar para: \"O que vamos plantar aqui\", isso vai ter que ter terminado e Plutão em Aquário terá que trazer a semente nova.<br /><br />
                  A terra foi mexida e foi preparada, agora tem que jogar a semente, que depois o Plutão em Peixes vai jogar água para aquilo nascer e começar um novo ciclo com o Plutão em Áries.<br /><br />
                  Temos que pensar que o Plutão vai passar por todos os Signos e isso é importante dentro do ciclo, pois cada Signo tem uma função e seguindo a Casa Astrológica do 1 ao 12 existe um caminho e não é algo aleatório.<br /><br />
                  Porque Áries é 1 e Peixes é 12?<br /><br />
                  Existe um motivo, um caminho e um percurso de você começar com o bebê da Casa 1 que é Áries, que está aprendendo, tem um ego e que precisa se manifestar como ego e chegar na doação do ego se dissolvendo no todo e na doação de Peixes.<br /><br />
                  Plutão em Aquário | Dica: Quando falamos de Plutão em Aquário é uma relação de uma geração que vai buscar a doação, pensar no outro e ajudar. Depois dessa depuração de Capricórnio, Aquário é muito mais suave ao meu ver.<br /><br />
                  Se nós fizermos a depuração de Capricórnio ok, uma \"limpa boa\" pode ser que quando chegar em Plutão em Aquário eu sou otimista e esse planeta pode estar bem mais leve, caso a depuração seja feita.<br /><br />
                  Precisamos enxergar não só os defeitos nos outros, que Plutão em Capricórnio pode trazer, mas os defeitos em nós e todos fazendo a sua parte.<br /><br />
                  Pois não adianta apontarmos o dedo para o outro: \"Você tem que se transformar, você é egoísta\". E o seu egoísmo? Você está vendo o seu egoísmo, está o transformando? Pois é fácil dizer que o outro é egoísta, mas às vezes ver o seu egoísmo não é tão fácil.<br /><br />
                  Quando chegar o Plutão em Aquário vai ser pedido uma maneira de ajudar as pessoas. Todos nós vamos ter que trabalhar isso quando Plutão entrar em Aquário.<br /><br />
                  E essa é uma geração muito preparada para essa visão mais \"do todo\" de não pensar só em si, que seria o Plutão em Leão, que é o Signo oposto de Aquário. <br />`,

                  `Quem tem o Nodo Sul (Cauda do Dragão) em Aquário traz memórias de dependência e influência dos outros em relação a si mesmo. Tem dificuldade em ficar sozinho, em acreditar em si, na própria noção da sua identidade e de amor próprio.<br /><br />
                  Sente-se mais confortável no meio de grupos, de amigos ou de muita gente, numa posição de igualdade. Traz também memórias de rebeldia, de contestação, excentricidade ou de anarquia.<br /><br />
                  Pode haver Ilusões em relação ao conceito de liberdade: sente-se livre e forte quando em grupo, mas perdido ou inseguro quando está sozinho. Há excesso de projeção dos seus desejos e anseios no grupo e nos amigos.<br /><br />
                  Forte espírito humanitário e capacidade de aceitar as diferenças dos outros. É mental e idealista, pode ficar preso a pensamentos e fantasias de amores perfeitos.<br /><br />
                  Para suprir a sensação de vazio interior e falta de identidade quando está sozinho, há o desejo de se sentir \"encaixado\" num grupo, clube, grêmio ou associação.<br /><br />
                  Com o Nodo Norte (Cabeça do Dragão) em Leão, veio aprender a priorizar a conexão com seu coração, seu mundo interior, seu potencial criativo e suas emoções, mais do que a opinião do grupo e do exterior.<br /><br />
                  Desenvolver a autoconfiança, autoestima, a capacidade de estar sozinho, e se autonutrir emocionalmente. Deve descobrir os seus talentos criativos e a sua imaginação.<br /><br />
                  Desenvolver a capacidade de expressar os seus sentimentos, se tornar um canal de expressão espontânea e livre e. Aprender a ser mais objetivo e não tão idealista, a gozar mais o momento presente, com alegria e prazer, ao invés de aspirar sempre um futuro mais perfeito.<br /><br />
                  O objetivo é encontrar potenciais e forças escondidas dentro de si.  Sair do anonimato, vencer a timidez, e a insegurança, aprender a mostrar-se.<br /><br />
                  Aprender a investir mais em si do que nas causas e nos projetos dos outros. Aprender a sentir-se orgulhoso de si próprio, dos seus dons, talentos e capacidades. Permitir-se brilhar e divulgar para o mundo as suas criações. <br />`,

                  `O idealismo social e o zelo reformador do tipo aquariano são bem conhecidos. A Roda da Fortuna traz estas qualidades para um foco muito pessoal.<br /><br />
                  Por baixo de todas as diferenças de posição, profissão, temperamento individual e destino, ela escolhe a pessoa, que tem tal característica natal, para atuar como um contribuinte para o progresso da civilização, por mais modesta, por mais construtiva ou destrutiva que seja essa contribuição.<br /><br />
                  Exemplos: Dante, Emmanuel Kant, Robespierre, Ramakrishna, Havelock Ellis, Richard Wagner, Maria Montessori, Franklin D. Roosevelt, Joseph Stalin. <br />`,

                  `Você tem dificuldade de aceitar as restrições externas à sua liberdade e de lidar com figuras que representam algum tipo de autoridade. Tende a desiludir-se profundamente ao ver que a vida não corre de acordo com seus ideais espirituais e sociais.<br /><br />
                  Aceitar as limitações (suas e dos outros) e conciliar a liberdade individual com as obrigações impostas pelo coletivo são lições a serem aprendidas. Pode usar suas ideias inovadoras para contribuir para o bem estar da sociedade.<br /><br />
                  Reconhece o quanto o ser humano precisa de seus semelhantes. Entretanto, pode ter sido ferido em situações sociais ou de grupo. Deve trabalhar com o coletivo e as pessoas a fim de tirar essa impressão e dar o melhor do seu humanitarismo e talento.<br /><br />
                  Também pode ter sido ferido em sua liberdade ou por causa de sua originalidade e agora pode ajudar as pessoas a não se envergonharem por serem diferentes.<br /><br />
                  Você é vulnerável às ideias e aos ideais coletivos, apesar de ser potencialmente um pensador original. Em vez de se arriscar a expressar suas próprias opiniões, corre o risco de adotar diretrizes partidárias, seguindo as aspirações políticas ou espirituais do grupo ao qual pertence.<br /><br />
                  Você deve aprender a utilizar sua própria mente de modo criativo, concretamente e com discriminação racional. Se for capaz de juntar disciplina e originalidade, fará importantes contribuições para a sociedade através de seus pensamentos independentes.<br /><br />
                  Você pode ser o portador de ideias controvertidas e vir a sofrer críticas por estar à frente de seu tempo, pois formula aquilo que já está prestes a se tornar consciente dentro da mente coletiva.<br /><br />
                  Você pode criticar intensamente a sociedade ou rejeitá-la tanto quanto possível. No íntimo, nutre forte desejo de contribuir de modo positivo e pode tornar-se até deprimido e irritado se não conseguir encontrar algum meio de realizar seu intento.<br /><br />
                  Esse impulso irrompe, então, em atos de rebelião, destruição e anarquia. Você pode ter dificuldade em aceitar as coisas como são e em trabalhar para realizar qualquer mudança com base nesse tipo de conduta.<br /><br />
                  Se defender ideais espirituais ou utópicos e estudar fundamento políticos revolucionários, é provável que fique progressivamente desiludido na medida em que for percebendo não existir nenhuma pessoa ou sistema perfeito sobre a face da terra.<br /><br />
                  Embora acredite saber como as coisas deveriam ser, também precisa aprender a ser humilde para que não venha adotar "novas" ideias, ideais ou estilos de vida tão rígidos quanto o antigo sistema que rejeitou.<br /><br />
                  Você é capaz de construir uma ponte entre o novo e o antigo, é capaz de aceitar qualquer inovação sem rejeitar indiscriminadamente o passado, incorporando-o como sólido alicerce para sua vida e vínculo com a sociedade.<br /><br />
                  Exerça maior influência positiva sobre os demais pelo seu exemplo e não conformismo criativo do que por tentar convencê-los da validade de suas ideias.<br /><br />
                  Defenda sua individualidade e atue na sociedade. Ao aceitar as limitações e imperfeições, pode permitir que os outros possam também encontrar os seus próprios caminhos em vez de impor-lhes suas ideias.<br /><br />
                  Você acha impossível relacionar-se com pessoas que pensam diferente de você. Corre o risco de ver o mundo através de seu sistema de crenças, de modo que tudo aquilo que a ele não se ajuste passa a ser ignorado, rejeitado ou suprimido. É importante colocar-se no lugar das outras pessoas.<br /><br />
                  Você é muito sensível à perfeição, buscando atingi-la e pode ficar desconcertado ao tentar viver de acordo com ideais espirituais.<br /><br />
                  O apego à perfeição é destrutivo, uma vez que, se der apenas ao perfeito o direito de vida, muitos projetos criativos, relacionamentos e possíveis carreiras não merecerão sua atenção e consequentemente serão desperdiçados.<br /><br />
                  Enquanto não encontrar um limite para sua liberdade interna, poderá temer qualquer tipo de compromisso. É preciso adquirir uma liberdade individual dentro das obrigações impostas pela vida.<br /><br />
                  Você pode sentir aversão por grupos e pelo coletivo, em parte devido à tendência a ser influenciado e dominado por ideias coletivas. Só se sentirá à vontade quando for responsável por si mesmo ou estiver desempenhando o papel de dissidente.<br /><br />
                  Dentre suas qualidades, destacam-se: a clareza, o desapego, um senso altamente desenvolvido de potencial político ou social e a capacidade de expressar os rumos dentro do coletivo.<br /><br />
                  Entretanto, todos esses dons representam uma faca de dois gumes que precisam ser temperadas pela humildade adquirida com o próprio sofrimento e a aceitação das imperfeições inerentes à vida.<br /><br />
                  Antes de sair "atirando em todas as direções", ou seja, fazendo de tudo um pouco e de modo superficial, procure conhecer seus verdadeiros dons e se aperfeiçoe na área que tiver mais afinidade.<br /><br />
                  Dirija seu trabalho ao bem comum, crescendo socialmente, em conhecimentos e capacidade de desempenhar a tarefa escolhida. Agindo assim, certamente chegará de modo seguro a concretização de seus objetivos pessoais e sociais. <br />`,

                  `O parceiro ideal é aquele que demonstra interesses diferentes ou que se dedica a algo excêntrico. Pode ser uma parceria que desafie as normas da sociedade.<br /><br />
                  Atração por pessoas geniais, inteligentes, inventivas, excêntricas, que sejam mais jovens. Ou ainda comprometidas e imprevisíveis.<br /><br />
                  De alguma forma, a parceria é marcada pela excentricidade, pela instabilidade, pelo inusitado, pelo diferente dos padrões da sociedade.<br /><br />
                  Juno favorece parcerias onde há amizade, sintonia intelectual, companheirismo e respeito pela individualidade.<br /><br />
                  Uma parceria que conviva com amigos, grupos e que desenvolva interesses humanitários e vanguardistas, voltados para o coletivo. <br />`,

                  `O nativo parece ter desconhecido as leis da amizade. Não soube dialogar, partilhar as suas ideias e as suas intuições com os amigos e os grupos nos quais estava inserido.<br /><br />
                  É possível também que tenha sido um inventor desconhecido, que não soube ou não quis transmitir suas descobertas avançadas.<br /><br />
                  Pode ter cultivado desprezo pelos outros ou uma espécie de deficiência na aptidão para se comunicar. Mas se sofreu o bastante por causa de algo, acabará por encontrar o meio de se libertar!<br /><br />
                  Tem nova oportunidade, desta vez, de se fazer conhecer e compreender, de sair do seu isolamento mental e partilhar suas ideias originais e inventivas. <br />`,

                  `O nativo demonstra mais boa vontade para com os amigos, em detrimento de sua família. É mais generoso com os amigos do que com os seus amores.<br /><br />
                  Demasiado independente, reluta em aceitar qualquer compromisso afetivo. Foge assim que fareja a menor obrigação ou necessidade de comprometimento. Por isso se torna solitário.<br /><br />
                  Interessa-se no fim da vida pela História, pois procura inconscientemente compreender porque, em suas encarnações precedentes, os outros fugiam dele assim que aparecia.<br /><br />
                  Não pede nem procura uma total intimidade com os outros, pois já fica muito feliz em sentir-se aceito, ou mesmo simplesmente tolerado.<br /><br />
                  O nativo deve agora se envolver em causas mais solidárias e humanitárias. Assim encontrará um grupo com o qual possa efetivamente colaborar para a comunidade. <br />`,

                  `Alma inquieta, o nativo traz de vidas passadas e sede de independência. Isso o impele a rejeitar toda pressão social, cobranças ou compromissos afetivos.<br /><br />
                  Como o vento, muda de direção ao sabor dos seus impulsos. Vive experiências inteiramente fora das normas tradicionais.<br /><br />
                  Deve agora controlar sua rebeldia, envolvendo-se em causas humanitárias. Trabalhar em grupo para o bem do coletivo. Assim pode tornar-se um revolucionário. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Alegremente não conformista, o nativo detesta o lugar comum e os caminhos já trilhados. Ama a novidade. É visto pelos que o cercam como instável, mas suas ideias novas são interessantes.<br /><br />
                  Este pioneiro tem necessidade de liberdade, tanto mental quanto física. Chega a ser, por vezes, claustrofóbico.<br /><br />
                  Levado pelas asas do entusiasmo tem medo de ser limitado e aprisionado pelos outros: o casamento lhe parecerá uma prisão.<br /><br />
                  O seu carma, nesta vida, é o de fazer com que os outros (os amigos e os grupos com os quais se envolve) se beneficiem da sabedoria que adquiriu no passado.<br /><br />
                  Deve ajudá-los a escolher sadia e praticamente, com planejamento, comprometimento e estratégia, as novas ideias, técnicas e soluções. <br />`,

                  `Mais independente que todos os outros signos do Zodíaco reunidos, o nativo se interessa pelo que a vida pode oferecer de novo e original.<br /><br />
                  Embora pareça muito aberto e não conformista, sua filosofia de vida é, no entanto, bastante estável. Foi forjada nas encarnações anteriores!<br /><br />
                  Seu gosto por novidades não o impede de ser fortemente ligado ao passado. Dotado de uma curiosidade universal, tenta compreender tudo.<br /><br />
                  Sua missão cármica é ajudar seus contemporâneos a descobrir os valores do futuro, ligando-os ao mesmo tempo aos do passado. Introduzir novas soluções com critério, planejamento, estratégia e responsabilidade. <br />`,

                  `O nativo viveu em civilizações antigas muito brilhantes, onde era engenheiro ou cientista. Utilizava as energias cósmicas e terrestres para realizações tecnológicas avançadas.<br /><br />
                  Portanto, na vida atual o nativo demonstra grande curiosidade com relação à ciência, um gosto muito nítido do por toda tecnologia de ponta e por toda ideia de vanguarda.<br /><br />
                  Enxerga muito alto e demasiado longe para ser compreendido. Em virtude disso, é mal tolerado por muita gente. Ainda mais quando revela seu inconformismo. Assim, muitas vezes fica só.<br /><br />
                  O nativo, aliás, não gosta de se envolver estreitamente com alguém. Se a relação se torna demasiado íntima e opressiva, surge a vontade de se afastar.<br /><br />
                  É assim que o nativo rompe, ou que "perde" periodicamente seus amigos, seus amores, seus empregos. Assim que sua liberdade fica ameaçada, ele zarpa.<br /><br />
                  Mas é um visionário. O nativo pode reencontrar as técnicas que já praticava nas vidas passadas. Revelar-se extremamente original e brilhante.<br /><br />
                  Tem o dom da profecia e tem o costume de ver muito mais longe do que os seus contemporâneos. <br />`,

                  `O futuro é mais imaginado do que concretizado. O nativo com Netuno retrógrado em Aquário tem muitas ideias, mas poucas passam para a prática.<br /><br />
                  Genial e confuso deixa os amigos embasbacados com as ideias e novidades técnicas que pressente, mas que é incapaz de fazer com que suas invenções funcionem!<br /><br />
                  Muita indefinição, também, no âmbito das amizades: outra prova cármica para o nativo, exposto a perder seus mais caros amigos.
                  Por vezes os amigos são duvidosos e enganadores e caso os perca, isso significa uma libertação.<br /><br />
                  Teve provavelmente altercações penosas com esses mesmos amigos em vidas passadas e as dívidas são pagas desta vez. O nativo deve refletir sobre o lugar da amizade em sua vida.<br /><br />
                  Mais tarde, tendo aprendido a escolher cuidadosamente suas relações, o nativo se mostrará ao mesmo tempo lúcido e indulgente para com elas.<br /><br />
                  Esse carma o ensina como são frágeis as amizades terrestres e o encoraja a olhar mais para cima, para o mundo espiritual. <br />`,

                  `FALTA TEXTO <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Sofre intensamente com as restrições externas à sua liberdade e ao lidar com figuras que representam algum tipo de autoridade. Tende a desiludir-se profundamente ao ver que a vida não corre de acordo com seus ideais espirituais e sociais.<br /><br />
                  Aceitar as limitações (suas e dos outros) e conciliar a liberdade individual com as obrigações impostas pelo coletivo são as lições que você deve aprender. Pode usar as suas ideias inovadoras para contribuir para o bem estar da sociedade.<br /><br />
                  Reconhece o quanto o ser humano precisa de seus semelhantes. Entretanto, pode ter sido ferido em situações sociais ou de grupo. Deve trabalhar com o coletivo e as pessoas a fim de tirar essa impressão e dar o melhor do seu humanitarismo e talento.<br /><br />
                  Também pode ter sido ferido em sua liberdade ou por causa de sua originalidade, e agora pode ajudar as pessoas a não se envergonharem por serem diferentes.<br /><br />
                  Você é vulnerável às ideias e aos ideais coletivos, apesar de ser potencialmente um pensador original. Em vez de se arriscar a expressar suas próprias opiniões, corre o risco de adotar diretrizes partidárias, seguindo as aspirações políticas ou espirituais do grupo ao qual pertence.<br /><br />
                  Você deve aprender a utilizar sua própria mente de modo criativo, concretamente e com discriminação racional. Se for capaz de juntar disciplina e originalidade, fará importantes contribuições para a sociedade através de seus pensamentos independentes.<br /><br />
                  Você pode ser o portador de ideias controvertidas e vir a sofrer críticas por estar à frente de seu tempo, pois formula aquilo que já está prestes a se tornar consciente dentro da mente coletiva.<br /><br />
                  Você pode criticar intensamente a sociedade ou rejeitá-la tanto quanto possível. No íntimo, nutre forte desejo de contribuir de modo positivo e pode tornar-se até deprimido e irritado se não conseguir encontrar algum meio de realizar seu intento. Esse impulso irrompe, então, em atos de rebelião, destruição e anarquia.<br /><br />
                  Você pode ter dificuldade em aceitar as coisas como são e em trabalhar para realizar qualquer mudança com base nesse tipo de conduta.<br /><br />
                  Se defender ideais espirituais ou utópicos e estudar fundamento políticos revolucionários, é provável que fique progressivamente desiludido na medida em que for percebendo não existir nenhuma pessoa ou sistema perfeito sobre a face da terra.<br /><br />
                  Embora acredite saber como as coisas deveriam ser, também precisa aprender a ser humilde para que não venha adotar "novas" ideias, ideais ou estilos de vida tão rígidos quanto o antigo sistema que rejeitou.<br /><br />
                  Você é capaz de construir uma ponte entre o novo e o antigo, é capaz de aceitar qualquer inovação sem rejeitar indiscriminadamente o passado, incorporando-o como sólido alicerce para sua vida e vínculo com a sociedade.<br /><br />
                  Exerça maior influência positiva sobre os demais pelo seu exemplo e não conformismo criativo do que por tentar convencê-los da validade de suas ideias; defenda sua individualidade e atue na sociedade.<br /><br />
                  Ao aceitar as limitações e imperfeições, pode permitir que outros encontrem seus próprios caminhos em vez de impor-lhes suas ideias. Você acha impossível relacionar-se com pessoas que pensam diferente de você.<br /><br />
                  Coloque-se no lugar das outras pessoas, elas sentem que você se relaciona com a cabeça delas, e não com elas inteiras. Você corre o risco de ver o mundo através de seu sistema de crenças, de modo que tudo aquilo que a ele não se ajuste passa a ser ignorado, rejeitado ou suprimido.<br /><br />
                  Você é muito sensível à perfeição, buscando atingi-la, e pode ficar desconcertado ao tentar viver de acordo com ideais espirituais.<br /><br />
                  O apego à perfeição é destrutivo, uma vez que, se der apenas ao perfeito o direito de vida, muitos projetos criativos, relacionamentos e possíveis carreiras não merecerão sua atenção e, consequentemente serão desperdiçados.<br /><br />
                  Enquanto não encontrar um limite para sua liberdade interna, poderá temer qualquer tipo de compromisso. É preciso adquirir uma liberdade individual dentro das obrigações impostas pela vida.<br /><br />
                  Você pode sentir aversão por grupos e pelo coletivo, em parte devido à tendência a ser influenciado e dominado por ideias coletivas. Só se sentirá à vontade quando for responsável por si mesmo ou estiver desempenhando o papel de dissidente.<br /><br />
                  Dentre suas qualidades, destacam-se: a clareza, o desapego, um senso altamente desenvolvido de potencial político ou social e a capacidade de expressar os rumos dentro do coletivo, entretanto, todos esses dons representam, facas de dois gumes, que precisam ser temperadas pela humildade adquirida com o próprio sofrimento e a aceitação das imperfeições inerentes à vida.<br /><br />
                  Antes de sair "atirando em todas as direções", ou seja, fazendo de tudo um pouco e de modo superficial, procure conhecer seus verdadeiros dons e se aperfeiçoe na área que tiver mais afinidade, dirija seu trabalho ao bem comum, crescendo socialmente junto com seu crescimento em conhecimentos e capacidade de desempenhar a tarefa escolhida.<br /><br />
                  Agindo assim, certamente chegará de modo seguro a concretização de seus objetivos pessoais e sociais. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno aí permite que a pessoa brilhe em todas as associações e parcerias que sejam manifestações da vida associativa ou cultural.<br /><br />
                  Capacidade de viver sua associação conjugal junto com amigos. De construir um casal que pode fazer parte de diversos grupos.<br /><br />
                  Tendência para se indagar sobre o que vai acontecer no futuro com sua parceria/casamento, elaborar planos e projetos a serem vividos a dois, ou para o próprio casamento.<br /><br />
                  No negativo pode ser uma pessoa que tem muito medo que suas parcerias não deem certo, ou que tema que o casamento lhe coloque limites para sua atuação e participação no mundo.<br /><br />
                  Nas parcerias de amizade, fidelidade que não suporta as limitações dos amigos nem as desilusões com eles. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,

                  `Faz amigos por identificação. Traduz o tipo de qualidade que a amizade pode estimular a capacidade de ter ou não ter amigos. <br /><br />
                  Amigos, entendidos como aqueles com quem se partilha algo em comum. Os que despertam um sentimento de troca, de movimento, de libertação. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,

                  `Desenvolve a capacidade de realizar com os outros. É a identificação com um grupo, o prazer do trabalho em equipe, que traz a consciência de que não estamos sós. <br /><br />
                  O sentimento de solidariedade desperta quando se associa a novos projetos, dinâmicos, com objetivos de transformação social. Os que atualizam a Cultura e abrem o Futuro. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,

                  `É a Consciência Cósmica. A Mentalidade da Nova Era ou Consciência Aquariana. Apreende a intenção evolutiva de um Universo em expansão. <br /><br />
                  Afirma-se como ser universal, consciente da sua evolução planetária, sabendo-se uma parte Individualizada desse organismo vivo que é a Humanidade, conhecendo-se como um elo dessa Imensa cadeia cósmica, onde cada um tem o lugar que é seu. <br /><br />
                  Ao chegar a este alto nível de consciência, desperta para a sua responsabilidade de estar no mundo. Vibra na alta frequência humanitária da grande família humana de que faz parte. <br /><br />
                  Ao assumir o que tem de único e individualizado, acrescenta de um modo solidário algo de seu ao movimento de evolução coletiva. Contribui para um futuro melhor, mais fraterno, libertador. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a se destacar no meio dos outros: </strong>`
            ]
      },
      {
            title: `peixes</strong>`,
            text: [
                  `Peixes é o último signo do Zodíaco, o RELIGARE.<br /><br />
                  É um signo que trata de assuntos transcendentais, cuja grande lição é dissolver o ego para cultivar a compaixão, desenvolver a fé, aprender a entregar o controle da vida para uma Força Maior.<br /><br />
                  O ideal de Peixes é estabelecer a conexão com a FONTE. Retornar a Ela através da sensibilidade, da introspecção, da meditação, da arte, da importância da espiritualidade, da solidariedade para com nossos irmãos.<br /><br />
                  As luzes do Sol vão iluminar as profundezas da psique. Peixes é a totalidade, a síntese, é a intuição que compreende o indizível. É o fim do ciclo e a preparação para um novo, quando o Sol ingressar em Áries.<br /><br />
                  Peixes ensina que a vida tem um significado maior, além da matéria. Quer dar asas à imaginação, sonhar, fantasiar, cultivar encantamento e magia.<br /><br />
                  Peixes é teatro, poesia, música, cinema, fotografia, glamour, poesia, fantasia, imaginação. A fábrica dos sonhos.<br /><br /> As imagens que falam mais que mil palavras.<br /><br />
                  Tudo o que trás um significado pra vida, que eleva. A missão superior de Peixes é aprender a estabelecer contato com a alegria espiritual, para que possa partilhá-la com todos aqueles que você conhece.<br /><br />
                  Uma das características do pisciano na qual se repara à primeira vista é o seu olhar e os seus cabelos, pois tem tendência para olhos grandes e uma cabeleira espessa.<br /><br />
                  Seu mundo interior é muito rico. É um sonhador que vive perdido num mundo misterioso que lhe pertence e que só ele vê.<br /><br />
                  Carismático e sedutor, conta com boas probabilidades de obter popularidade. O pisciano é parabólico, sente a 360 graus, captam as vibrações positivas e negativas do entrono. Vem daí a sua intensa contradição emocional.<br /><br />
                  No corpo, as partes vulneráveis são: as vias respiratórias, o sistema imunológico, sistema linfático, os pés, a digestão e o psiquismo.<br /><br />
                  Com a idade, há tendência para crises de angústia e doenças virais como gripes e outras.<br /><br />
                  Se não se alimentar bem, terá tendência para desenvolver problemas de digestão e assimilação, o que favorece a emergência de certas alergias e problemas na pele.<br /><br />
                  Pode ter também alguma fragilidade no domínio hormonal e endócrino.<br /><br />
                  Apesar disso, o pisciano tem tendência para viver até idade avançada, quando toma as providências necessárias para se aliviar ao mínimo alerta. Na via negativa, Peixes é a ilusão, a fuga da realidade.<br /><br />
                  Os enganos, a loucura, a falta de objetividade, o sacrifício, a sensibilidade excessiva que causa sofrimento, a vítima, a religiosidade distorcida.<br /><br />
                  O descontrole, a esquizofrenia, a boemia, o isolamento, o claustro. Deve tomar cuidado com as drogas e a bebida.<br /><br />
                  Virgem é o signo oposto-complementar e lá está o fio-terra dos piscianos. O critério necessário para separar o que é seu e o que é do outro, o que é útil do que não é, o que é real do que é ilusório.<br /><br />
                  O pisciano deve aprender a filtrar o que absorve, a cultivar organização, disciplina e objetividade para que possa realizar seus sonhos, conectado com as inspirações das dimensões superiores. <br />`,

                  `A Lua representa a forma como vivemos as nossas emoções.<br /><br />
                  É o que já é familiar, conhecido, nossa zona de conforto, onde buscamos nutrição emocional. O que é que precisamos para nos sentirmos seguros?<br /><br />
                  A Lua também representa nossos condicionamentos, a repetição de padrões de comportamento, os instintos que nos levam a ser reativos. O que nos afeta emocionalmente?<br /><br />
                  Para a Astrologia Cármica, a Lua representa a memória do passado do passado: infância, ancestralidade, hereditariedade e vidas passadas. Já o Sol representa o futuro.<br /><br />
                  As qualidades do signo solar indicam um caminho de cura para equilibrar as questões relativas à Lua. Por isso, a Lua deve estar ao serviço do Sol, sendo um canal de expressão da vontade solar.<br /><br />
                  Nascer com a Lua no signo de Peixes é ser dotado de uma natureza emocional hipersensível. Assim, pode ser como uma esponja psíquica, que absorve os pensamentos e as emoções dos outros.<br /><br />
                  O nativo é bondoso, intuitivo e compreensivo, devido à sua sensibilidade aos sentimentos alheios.<br /><br />
                  Entretanto, pode se magoar facilmente e desenvolver um complexo de perseguição.<br /><br />
                  Essa sensibilidade extrema pode fazer com que se sinta psicologicamente vulnerável e até mesmo se afaste ou se isole, para que possa se proteger emocionalmente.<br /><br />
                  A Lua em Peixes indica uma imaginação ativa, criativa e inspirada, que pode resultar em manifestações poéticas, musicais ou artísticas.<br /><br />
                  O nativo é sonhador e costuma viver com os pés longe do chão, já que é nas alturas que busca sua inspiração.<br /><br />
                  As relações são construídas com base nos sonhos para o futuro.<br /><br />
                  O perigo é idealizar as pessoas de tal forma que seja difícil corresponder às suas expectativas.<br /><br />
                  Pode haver também, em alguns casos, tendências neuróticas ou psicóticas, quando é dominado por questões do inconsciente.<br /><br />
                  Em alguns casos, há timidez. É preciso aprender a organizar melhor os seus sentimentos. Conhecer-se melhor, desenvolver um lado mais crítico e realista para que possa separar o que é seu e o que é do outro.<br /><br />
                  Assim pode expressar sua sensibilidade com mais segurança, estabilidade, equilíbrio e clareza. <br />`,

                  `O signo que se encontra no Ascendente indica a primeira impressão que causamos e a forma como iniciamos as coisas. O ascendente traz pistas sobre o aspecto físico, a "máscara" exterior (tanto física, como emocional e intelectual), alguns hábitos e maneirismos pessoais.<br /><br />
                  Uma espécie de névoa vaga, transcendental e intangível parece permear a expressão pessoal de quem tem Peixes no Ascendente. Esta "névoa" confere empatia e permeabilidade, mas ao mesmo tempo traz certo isolamento e distanciamento.<br /><br />
                  A necessidade de cultivar um sentido concreto de identidade entra em conflito com forças que provocam a dissolução e a transcendência das limitações. Assim, a pessoa com este Ascendente pode ter sentimentos e comportamentos um tanto contraditórios.<br /><br />
                  Sua percepção é sensível ao todo, sua aprendizagem se faz através do sentir. Em determinadas situações, pode entrar em empatia emocional com toda a Humanidade e procurar redimi-la dos seus sofrimentos.<br /><br />
                  Quando isso acontece, a sua sensibilidade se manifesta como compaixão, expressão artística ou devoção mística. No momento seguinte, contudo, pode focar-se apenas em suas próprias necessidades emocionais.<br /><br />
                  Cai então num caos emocional, numa autopiedade da qual só sairá (segundo julga) se alguém vier "salvá-lo". A solução requer o desenvolvimento de uma identidade que não exclua a consciência de que ela faz parte de algo maior.<br /><br />
                  Encontrar o caminho do meio: uma identidade rígida demais tornaria a transcendência impossível. Uma identidade por demais difusa criaria dificuldades na hora de lidar com as questões práticas, de forma eficiente com a vida.<br /><br />
                  Quem tem Peixes no Ascendente pode se manifestar como a vítima, o artista ou o curandeiro / salvador. É preciso cuidado com excessos, com apetites autodestrutivos, com a tendência para a fuga da realidade e sacrifícios sobre-humanos.<br /><br />
                  Se conseguir o distanciamento necessário para distinguir entre os seus problemas e os dos outros, a pessoa com este ascendente pode colocar a sua enorme sensibilidade à serviço do coletivo.<br /><br />
                  Deixa de oscilar entre os papéis de salvador e vítima, tornando-se capaz de passar da empatia emocional à ajuda efetiva, mesmo que isso implique em sacrifícios pessoais.<br /><br />
                  Fisicamente, sua aparência é sonhadora, romântica, sedutora ou misteriosa. Um ar etéreo e um pouco "perdido" pode ser a marca deste signo ascendente. Os olhos costumam ser grandes e o corpo arredondado.<br /><br />
                  Alguns conseguem moldar a sua aparência em diversas imagens, refletindo e imitando tudo o que os impressiona. <br />`,

                  `Mercúrio neste signo indica uma imaginação ativa e uma capacidade fotográfica para visualizar pensamentos e lembranças.<br /><br />
                  Os nativos com esta posição são muito intuitivos e telepatas no nível inconsciente.<br /><br />
                  Portanto, são facilmente influenciados por sugestões subliminares, uma vez que inconscientemente se sintonizam com os pensamentos e o estado de espírito das pessoas que os cercam.<br /><br />
                  Chegam a conclusões não por meio do raciocínio lógico, mas baseados em percepções intuitivas que fluem da mente inconsciente. Aprendem mais por osmose do que pelo estudo disciplinado.<br /><br />
                  A mente pode ser influenciada por padrões emocionais inconscientes baseados em experiências passadas. É preciso cuidado com o risco de ficar preso às lembranças, a ponto de distorcer a percepção da realidade no presente.<br /><br />
                  Em casos extremos, isso pode levar a imaginação mórbida, complexo de perseguição ou condições neuróticas. Devido à extrema sensibilidade e imaginação, muitas vezes manifestam aptidões poéticas e artísticas.<br /><br />
                  São compreensivos, podem imaginar como é estar na situação de outra pessoa, porque já estiveram em situações semelhantes. Às vezes suas emoções são facilmente manipuladas.<br /><br />
                  Peixes é um signo mutável e as emoções vacilantes podem provocar hesitação no raciocínio, nas decisões e na comunicação. Pode também haver tendência a sonhar acordado e devanear.<br /><br />
                  O fato de os nativos gostarem de ser reservados e guardarem para si mesmos os seus pensamentos pode resultar em timidez e isolamento.<br /><br />
                  O nativo talvez seja hipersensível e capaz de perceber uma crítica pessoal mesmo não intencional. É preciso cultivar mais impessoalidade em seu raciocínio e percepção da realidade. <br />`,

                  `Essa é a posição de Vênus mais romântica e sonhadora do zodíaco.<br /><br />
                  Vênus recebe de braços abertos as qualidades e toda a imensidão de Peixes: sensibilidade, inspiração, magia, encantamento e a compaixão.<br /><br />
                  A intimidade com o outro, as experiências que envolvem prazer e sensibilidade, ganham ares sagrados. Nada do que se refere ao amor fica pequeno.<br /><br />
                  Quando se apaixona, o nativo se entrega totalmente, fundindo-se com o outro e colocando-se aos seus pés.<br /><br />
                  A anulação da personalidade no intuito de agradar o parceiro pode ser uma armadilha ao longo prazo.<br /><br />
                  Tudo emerge das profundezas, o bom e o ruim também. Anjos e demônios, sonhos e pesadelos, felicidades paradisíacas e sofrimentos do tipo "meu mundo caiu".<br /><br />
                  Com Vênus em Peixes é bom ter cuidado pra não idealizar o outro, ou o amor em si. Criar fantasias tão grandes que ninguém se torna capaz de satisfazê-las.<br /><br />
                  Ao ver o outro como uma tábua de salvação pra sua vida, pode se dar mal ao embarcar em ilusões. É preciso cuidado para não se envolver em paixões impossíveis e fadadas a causar dor e sofrimento!<br /><br />
                  Idealizando demais o amor, o nativo pode sofrer decepções e frustrações assim que a rotina natural de uma relação duradoura se instalar.<br /><br />
                  Os sonhos se desfazem e o príncipe voltará a ser um sapo ao amanhecer. A imaginação é fértil e o nativo precisa dar vazão às suas fantasias que são mais sensuais que sexuais.<br /><br />
                  Precisa de uma união completa com o outro e irá fugir dos relacionamentos passionais que visam somente à satisfação sexual.<br /><br />
                  Essa Vênus inspira o amor universal, com os nossos semelhantes e com Deus.<br /><br />
                  O amor deve ser compreendido como uma libertação psíquica e espiritual, como uma troca consciente e equilibrada a ser construída com quem partilha os mesmos anseios filosóficos e espirituais.  <br />`,

                  `O nativo Marte com este signo tem habilidade para desenvolver trabalhos secretos ou isolados, fazer pesquisas, desvendar mistérios. Pode exercer profissões ligadas a hospitais ou à vida noturna.<br /><br />
                  É idealista em suas ações e buscará satisfazer seus sonhos, se sentindo atraído por coisas sensacionais.<br /><br />
                  Sente atração por cinema, fotografia, música e tudo o que for relacionado às atividades marítimas. Tem tendência a fumar ou a se drogar.<br /><br />
                  Pode expressar sua sexualidade em paixões secretas e proibidas, com tendências muito românticas. Apaixonado pelo amor procurará amantes que satisfaçam suas fantasias. A fertilidade é ótima.<br /><br />
                  Os indivíduos menos evoluídos podem desenvolver tendência para a criminalidade, sendo vítima de más influências.<br /><br />
                  Negócios na clandestinidade, fraudes, máfia. Podem sofrer com roubos, sequestros, traições e todo tipo de ações ilícitas e clandestinas. <br />`,

                  `O nativo pode gozar de boa vida, mas é difícil que faça demasiada fortuna, uma vez que é pouco ambicioso e gosta da vida fácil. A indolência pode ser o seu pior defeito na área financeira e laboral.<br /><br />
                  Poderá se destacar como detetive, polícia, advogado, escritor de novelas, artista, músico, psicólogo, terapeuta ou médico.<br /><br />
                  Gosta de cultivar a fé e pode encontrar a felicidade e a paz no plano de evolução espiritual, mais do que no plano material.<br /><br />
                  Utilizar o tempo livre ouvindo música, desenhando ou em atividades artísticas em geral tem o poder de te encantar. A sua personalidade é intuitiva, imaginativa, emocional e compassiva.<br /><br />
                  É muito sensível aos problemas dos outros e gosta de ajudar o próximo (especialmente os enfermos, os necessitados e as pessoas que sofrem). <br />`,

                  `Saturno no signo de Peixes indica nativos que podem se tornar presos às lembranças do passado. Uma imaginação hiperativa, extraordinária, pode gerar todos os tipos de ansiedades e neuroses.<br /><br />
                  Consequentemente, fica difícil lidar de modo eficaz com as exigências do presente. Em casos extremos, a imaginação cria defeitos pessoais e problemas que na realidade não existem.<br /><br />
                  No lado positivo, Saturno em Peixes pode proporcionar aos nativos, compreensão emocional, humildade e vontade de trabalhar pelos menos favorecidos.<br /><br />
                  Pode também haver empatia e insight psicológico sobre os outros. Saturno pode ajudar na meditação, que firma a psique e possibilita profunda compreensão espiritual.<br /><br />
                  O trabalho pode ser realizado nos bastidores de amplas instituições, hospitais, asilos, universidades ou órgãos governamentais.<br /><br />
                  No seu pior, essa posição de Saturno pode resultar em paranoia, preocupação excessiva, agitação, arrependimento por erros e contratempos passados.<br /><br />
                  Quando levadas ao extremo, estas reações podem levar a tendências neuróticas e ou psicóticas.<br /><br />
                  É necessário cultivar tranquilidade e solidão para penetrarem em seus profundos recursos interiores. Os nativos devem se responsabilizar pelo amadurecimento de sua sensibilidade.<br /><br />
                  Também deveriam passar algum tempo participando ativamente das questões mundiais, evitando o mau humor e excesso de introversão. É importante que se esforcem para evitar a autopiedade.<br /><br />
                  Lamentações inúteis sobre o passado podem destruir a felicidade, a criatividade, a dedicação a si e aos outros.<br /><br />
                  Essa posição pede autoanálise objetiva e crítica, para que os nativos possam descobrir seu valor e as suas aptidões pessoais (bem como seus defeitos) e encontrar uma saída para suas dificuldades.<br /><br />
                  Devem aprender a esquecer do passado e agir construtivamente no presente. O desenvolvimento espiritual faz parte de suas responsabilidades.  <br />`,

                  `Urano no signo de Peixes indica habilidades intuitivas e uma curiosidade científica sobre a atuação do inconsciente.<br /><br />
                  Os nativos podem se atrair pelos mistérios e pelo misticismo, desenvolver interesse pela meditação ou por temas ligados à espiritualidade, com filosofias orientais ou ioga, por exemplo.<br /><br />
                  Eles recebem ideias através de sonhos e intuições. A principal motivação de Urano em Peixes é se libertar da influência mental e emocional do passado.<br /><br />
                  Há uma luta espiritual para superar as tendências materialistas do passado, associada à procura de uma identidade espiritual mais elevada.<br /><br />
                  No seu pior, pode haver um idealismo pouco prático, bem como irresponsabilidade e insinceridade com amigos. Pode também existir a tendência de não enfrentar situações desagradáveis. <br />`,

                  `Podemos esperar um regresso ao romantismo e aos ideais mais elevados. A arte da cura pode fazer grandes progressos e haverá um enorme desenvolvimento das faculdades espirituais.<br /><br />
                  Em geral, Netuno é responsável pelos movimentos artísticos e as modas que dominam uma determinada época. A música e a arte em geral serão desenvolvidas intensamente.<br /><br />
                  Durante esse período nascerão grandes místicos, artistas e dirigentes espirituais. Netuno no seu próprio signo é inspirado, espiritual, de grande sensibilidade e até profético.<br /><br />
                  No entanto, para revelar o seu imenso potencial criativo, exige um ego sólido, simultaneamente muito flexível e capaz de dar cabimento tanto à dura realidade, como aos ideais de compreensão e amor recíprocos. <br />`,

                  `Plutão em Peixes traz toda uma busca, uma geração que vai focar demais na espiritualidade.<br /><br />
                  Plutão em Peixes | Características: Vai ser uma geração muito interessada em assuntos místicos, em religião e em se entregar mais para essa energia espiritual.<br /><br />
                  O \"Lado B\" é que pode ser uma geração de pessoas que pensem muito na fuga da realidade, ou seja, a realidade está dura demais então vai ter o \"escapismo\".<br /><br />
                  <strong> Plutão em Peixes</strong>  pode trazer um \"escapismo\": \"Está tudo difícil, então não quero pensar nisso, pois já está denso demais, quero pensar de uma outra maneira\".<br /><br />
                  Plutão em Peixes | Dica: É importante trabalhar também o enfrentamento da realidade, não ficar só pensando: \"Vou ficar espiritualizado e não vou ver a realidade como ela é\".<br /><br />
                  É preciso trabalhar os dois lados: \"Vou trabalhar a minha espiritualidade e colocá-la em prática, pois logo em seguida vai vir o Plutão em Áries, que vai pedir a ação, tudo na vida é um ciclo.\" <br />`,

                  `-Quem tem o Nodo Sul (Cauda do Dragão) em Peixes traz memórias de extrema sensibilidade, isolamento, contemplação, sofrimento, sacrifício pelos outros e servidor do mundo. Há tendência para a vitimização, para a falta de organização, de eficiência. Também para a falta de limites internos e externos.<br /><br />
                  Vive num mundo próprio e fantasioso. Traz medos e preocupações de vidas passadas por ter se desiludido em seus ideais de um mundo perfeito. É extremamente influenciável pelo estado de espírito dos outros e dos ambientes.<br /><br />
                  Tem dificuldade em encontrar confiança em si mesmo. Anseia por um ideal de felicidade. O escapismo pode acontecer positivamente através da poesia, da musica, das artes em geral e da meditação ou negativamente através de drogas e álcool.<br /><br />
                  A confusão emocional pode ser transformada positivamente através do trabalho, do serviço e da disciplina. Com o Nodo Norte (Cabeça do Dragão) no signo de Virgem, deve aprender a desenvolver critério, escolher melhor quem quer ajudar, aceitar melhor a dualidade e evitar o isolamento.<br /><br />
                  Sair da postura de vitima e sentir-se útil realizando um serviço que faça a diferença na vida dos outros. Ao aceitar as diferentes naturezas (positivas e negativas) dos outros, pode tornar-se um curador e uma das pessoas mais úteis do zodíaco.<br /><br />
                  Para tanto deve aprender a harmonizar o mundo visível com o mundo invisível. Compreender que as doenças são desarmonias do corpo com a mente e as emoções.<br /><br />
                  É importante desenvolver objetivos e trabalhar para eles, usar mais a cabeça e o senso prático, com os pés aterrados no chão. Aprender a ser mais positivo, a viver a realidade, cuidar do corpo, da saúde e a confiar mais na vida.<br /><br />
                  Confiar nas oportunidades que o momento presente traz, sem deixar que as memórias do passado o impeçam ou bloqueiem seu sucesso.<br /><br />
                  Há necessidade de recolhimento para digerir as situações vividas. Mas o caminho para o seu crescimento passa por aprender a responsabilizar-se, organizar-se, trabalhar e ajudar o próximo.<br /><br />
                  Desenvolver métodos e técnicas que ajudem tanto no seu autoaperfeiçoamento, quanto no crescimento dos outros. <br />`,

                  `Peixes é um signo indefinível, que por um lado produz generais e pelo outro produz místicos e musicistas.<br /><br />
                  Ele indica um processo de dissolução coletiva, um estado de crise social e cultural no qual velhas formas são destruídas para deixar lugar às novas.<br /><br />
                  O índice de personalidade e felicidade localizado aqui mostra a força de vida operando quase que contra si mesmo, a fim de superar-se. A pessoa despreza as coisas menos importantes e deseja avidamente conquistar mundos novos.<br /><br />
                  Poderá alcançar o objetivo da sua vida através de crises pessoais ou sociais – através daquilo que as outras pessoas têm a impressão de que são milagres.<br /><br />
                  Exemplos: o cientista místico Swedenborg, Napoleão I, Robert Schumann. <br />`,

                  `Quíron neste signo indica que o desenvolvimento da individualidade é acompanhado por sentimentos de culpa e de inveja daqueles que demonstram um forte senso de identidade pessoal.<br /><br />
                  Costuma se sacrificar exageradamente para ajudar os outros, evitando, assim, entrar em contato com suas feridas mais profundas, mágoas e perdas emocionais não resolvidas.<br /><br />
                  Deve aprender a defender suas próprias necessidades e fazer valer seus direitos, sem, contudo, recorrer ao papel de vítima. Tem o dom de aceitar os outros como realmente são e de compadecer-se com o sofrimento da humanidade.<br /><br />
                  Sente instintivamente a dimensão empática e espiritualizada do ser humano. Entretanto, podem ter sido feridos por causa de ingenuidade ou vulnerabilidade.<br /><br />
                  Ferido por enganos deve resgatar a sua espiritualidade e fé perdidas auxiliando e inspirando outras pessoas. Coisas ocultas (segredos) podem ter ferido. Falta de empatia também.<br /><br />
                  A perda da identidade pessoal através da experiência do êxtase e do sentimento de unidade com todo o cosmo constitui, provavelmente, uma forte necessidade psicológica.<br /><br />
                  O dilema com o qual você vai se deparar será saber como respeitar esse impulso sem ser arrastado e sem regredir a um estado de aconchego uterino, ignorando a marés de caos material ou emocional que sobem e invadem a vida (correndo o risco de se entregar ao desregramento, à droga, à bebida).<br /><br />
                  Você pode empenhar-se em estabelecer uma ordem interna e negligenciar os aspectos práticos da vida, ou pode preocupar-se com essa organização apenas para vê-la sempre ameaçada pelo caos interno.<br /><br />
                  Você está destinado a deixar de ser um EU para ser um NÓS com a humanidade, mas antes terá que construir um EU, um senso de individualidade.<br /><br />
                  Pode ser difícil e doloroso construir essa estrutura pessoal, mas se buscar apenas a ligação com o Todo, pode recusar o mundo da forma, destruir seus relacionamentos, empregos, projetos e até sua casa. É preciso se sacrificar na vida cotidiana para não se perder na vontade de fugir da realidade.<br /><br />
                  Se isso não for feito, você corre o risco de se ver dirigido por uma profunda inveja de pessoas que parecem possuir um forte senso de identidade pessoal.<br /><br />
                  Pode então, reagir desencadeando reações emocionais e artimanhas com o intuito de minar a solidez do invejado e estabelecer relacionamentos complexos, tentando absorver a individualidade dos outros por osmose, uma vez que sua luta não é aberta.<br /><br />
                  Você pode sentir raiva por ter que "crescer" ou sentir culpa por ter que construir a sua independência. Mas só tendo conseguido ser maduro e um indivíduo separado com uma forte personalidade, você estará pronto para sua missão de ser útil aos outros.<br /><br />
                  Você terá consciência do poder do amor, oferecendo seus talentos individuais, sua fertilidade e autoexpressão para o bem de todos.<br /><br />
                  Você tende a se identificar com a vítima, sofrer com os outros ou pelos outros, carregando sofrimentos que não são seus. Pode escolher uma profissão relacionada com a cura como forma de autodefesa.<br /><br />
                  Provavelmente, atrai pessoas que necessitam de conforto, compaixão e apoio e que a todo instante exigem que lhes dedique seu tempo e energia. Mas é importante estabelecer limites rigorosos e campos de atuação bem específicos, para não ser explorado.<br /><br />
                  Preserve seus momentos de solidão, pois você precisa se resguardar para se reabastecer. Em virtude de sua sensibilidade, pode se sentir por vezes exaurido e acabrunhado, necessitando periodicamente fazer algum retiro.<br /><br />
                  Você tende a exigir das pessoas próximas um grau de união que os sufoca e pode até fazer chantagem emocional para obter o que quer.<br /><br />
                  Pode ser perito em provocar um verdadeiro caos emocional, instigando a cólera ao seu redor e ao mesmo tempo, manter uma aparência de vaga inocência. Você tem um conceito tão universal de amor que dificulta o encontro de alguma parceria na vida real.<br /><br />
                  Você tem facilidade em lidar com os dois hemisférios cerebrais, tornando-o capaz de interpretações e compreensão de temas geralmente difíceis de serem compreendidos por outras pessoas. Seus processos de pensamento são multidimensionais.<br /><br />
                  É curioso e investigativo, busca sempre saber mais profundamente assuntos que levam à maior conhecimento interior e dessa forma tem mais facilidade em compreender os sentimentos e emoções dos que o rodeiam.<br /><br />
                  Tem conhecimento esotérico adquirido em outras vidas, lida com esses temas de modo espontâneo e muitas vezes inconscientemente. Procure reconhecer seus dons ouvindo seu Eu Superior. Busque momentos de isolamento, medite sobre suas leituras e conclua usando-os com seus conhecimentos pessoais.<br /><br />
                  Aceite suas intuições e suas impressões sobre as outras pessoas. Analise esses dados que recebeu intuitivamente e muitas vezes descobrirá que estava certo nas impressões que teve. Você é altamente intuitivo.<br /><br />
                  Procure usar algum tipo de oráculo (Tarô, Búzios, Runas ou o que sentir afinidade) para auxiliá-lo nessa tarefa aprender a "ler" as mensagens mentais e cósmicas que navegam entre os seres.<br /><br />
                  Você é emocionalmente frágil, talvez tente viver numa redoma para proteger-se de decepções emocionais. Melhor será aceitar a forma de amor dos demais e assim não se decepcionará quando não receber o amor que você mesmo é capaz de sentir de modo tão universal. <br />`,

                  `O parceiro ideal é aquele que tenha imaginação, interesse em música, cinema ou espiritualidade.<br /><br />
                  Pode ser um relacionamento de conto de fadas, um casamento com uma princesa ou com um príncipe (como Lady Di, que tinha Juno em Peixes).<br /><br />
                  O nativo tende a atrair pessoas espiritualizadas, românticas, artistas ou produtores de cinema. De alguma forma a parceria é marcada pelos sonhos, pela imaginação, pela fantasia ou pelo romance.<br /><br />
                  Mas na via negativa, o nativo também pode atrair pessoas viciadas, drogadas, dependentes, indolentes ou prisioneiros.<br /><br />
                  A tendência é ignorar os defeitos, querer salvar ou ser salvo. A parceria pode ser marcada pela frustração, dissolução ou desilusão.<br /><br />
                  Na via positiva, o ideal é que haja uma busca espiritual em comum, o desenvolvimento de temas transcendentais, artísticos, inspirados e elevados. O casal pode se tornar fonte de inspiração para outros casais. <br />`,

                  `Em suas encarnações anteriores o nativo viveu a reboque de sua imaginação, muitas vezes delirante.<br /><br />
                  Prisioneiro de suas emoções e de suas intuições (incomunicáveis) o nativo passou longos períodos mergulhado em pensamentos de desespero.<br /><br />
                  Fazer bolhas só permite a comunicação com os outros Peixes. Os terrenos não entendem nada disso. O nativo deve aprender organizar suas ideias nebulosas. Sair da sua confusão mental.<br /><br />
                  Deve se esforçar para racionalizar suas visões intuitivas. Desenvolver mais senso crítico nos seus entusiasmos religiosos e amorosos.<br /><br />
                  Esse poeta inato deve aprender a se comunicar com os outros através da palavra e pela escrita.<br /><br />
                  Deve também se esforçar para buscar meios práticos e concretos de aliviar o sofrimento dos outros, sem se contentar apenas com belas e vagas palavras compassivas. <br />`,

                  `Muito solitário, o nativo tem a tendência a buscar de novo os fantasmas românticos das vidas anteriores. Impressionável, imaginativo e sensível, seu equilíbrio emotivo e nervoso deixa a desejar.<br /><br />
                  Deve procurar libertar-se de um de ilusões (como, por exemplo, buscar de novo a alma irmã perdida em cada encontro amoroso). O auxílio aos outros lhe ensinará a amar de maneira positiva. <br />`,

                  `Em vidas passadas, o nativo não cultivou a força para ações e iniciativas. Essa posição de Marte indica que sua combatividade se dispersa e não se dirige para o objetivo.<br /><br />
                  Essa agressividade fraca e desanimada o leva a fugir das dificuldades. O nativo adquiriu hábitos de fraqueza e desânimo nas vidas passadas e se fazia de vítima, tentava justificar-se choramingando.<br /><br />
                  Nesta vida deve cultivar a força do guerreiro, aprender a ter autonomia, praticar atividades físicas, movimentar-se.<br /><br />
                  Deve cultivar o seu poder de decisão e tornar-se responsável por suas próprias atitudes. <br />`,

                  `A palavra-chave de Júpiter é "expansão". Inspira fé, ética, entusiasmo e positividade. Quando Júpiter está retrógrado, algumas dessas qualidades não foram cultivadas em vidas passadas.<br /><br />
                  Em suas encarnações anteriores, pode ter sido sacerdote ou filósofo. Portanto, traz conhecimentos elevados, um saber inato das verdades religiosas e cósmicas.<br /><br />
                  Mas é preciso cuidado para não ficar preso à organização prática da vida e, com sua bondade, iludir-se muito sobre as pessoas.<br /><br />
                  Tem necessidade de se "escorar" num parceiro ou num sócio mais prático do que ele, que o ajudará a disciplinar-se.<br /><br />
                  A espiritualidade pode e deve ser desenvolvida agora com mais liberdade, disciplina e maturidade. <br />`,

                  `Saturno está na casa da espiritualidade e do carma. O nativo se recusou durante várias vidas sucessivas a liquidar suas dívidas.<br /><br />
                  Esta fuga e esta falta de coragem se agravaram. O nativo escolheu para si, desta vez, um programa de muita responsabilidade, a fim de se livrar de um pesado carma.<br /><br />
                  Todas as vezes que o nativo se colocar a serviço daqueles que sofrem (particularmente os prisioneiros e os doentes hospitalizados), aliviará consideravelmente esta dívida.<br /><br />
                  Caso tenha se tornado prisioneiro ou doente, se aceitar serenamente o fato esse carma se liquidará com mais rapidez.<br /><br />
                  O programa de Saturno retrógrado na casa 12 é desenvolver a compaixão para com os outros, o amor universal.<br /><br />
                  Aceitar com paciência seu próprio sofrimento, sem fugir dele. Comprometer-se com seu crescimento espiritual.<br /><br />
                  Assim, o nativo poderá renascer para uma vida mais luminosa. Talvez até mesmo não mais renascer no mundo da matéria, encontrando enfim a felicidade total. <br />`,

                  `Urano retrógrado nesse signo indica tendências proféticas e visionárias. O nativo é generoso, humanitário e desprendido, mas é provável que seus ideais sejam utópicos e pouco práticos.<br /><br />
                  Dificilmente concretiza as suas ideias. As suas vidas passadas foram marcadas pela traição, pela fuga diante das responsabilidades ou infidelidade aos amigos.<br /><br />
                  Muito idealista, o nativo acaba suportando mal as pressões quotidianas e materiais.<br /><br />
                  No âmbito das ideias e dos sentimentos é sempre solícito e está sempre de acordo, mas foge quando se trata de pôr a mão na massa.<br /><br />
                  Se tomar consciência disso, pode, na vida atual, tomar-se um excelente amigo, dedicado e fiel.<br /><br />
                  Seu aprendizado é desenvolver a espiritualidade e aprender a canalizar objetivamente suas tendências revolucionárias. Comprometer-se com um grupo de trabalho e fortalecer suas amizades. <br />`,

                  `Peixes, na via negativa, é a prisão do Zodíaco. Essa posição indica um nativo idealista, mas destinado a alguns sacrifícios.<br /><br />
                  O destino não é um acaso, não é coisa que se possa inventar: o nativo o escolheu antes de nascer.<br /><br />
                  Podemos supor que é a liquidação de uma dívida anterior muito pesada (o nativo pode ter perseguido inocentes em vidas passadas).<br /><br />
                  Netuno é o regente de Peixes, fala sobre os temas transcendentais, a fantasia e a imaginação. É preciso observar se há tendência para fuga da realidade, os sonhos irreais e a autodestruição.<br /><br />
                  É fundamental desenvolver a espiritualidade, a conexão com as dimensões sutis e o serviço caridoso ao menos favorecidos da sociedade.<br /><br />
                  As aptidões artísticas também podem ser desenvolvidas e representar um canal de expressão para seu idealismo.   <br />`,

                  `FALTA TEXTO <br />`,

                  `Quem traz Quíron retrógrado no mapa possui poderes de cura, iniciáticos e alquímicos. Dom de cura com as mãos. A posição da Casa de Quíron retrógrado irá descrever o caminho do desenvolvimento desse poderoso vórtice de sensibilidade perceptiva.<br /><br />
                  Faz com que em você o desenvolvimento da individualidade seja acompanhado de fortes sentimentos de culpa, e de invejar aqueles que demonstram um forte senso de identidade pessoal.<br /><br />
                  Costuma sacrificar-se exageradamente para ajudar os outros, evitando, assim, entrar em contato com suas feridas mais profundas – mágoas e perdas emocionais não resolvidas.<br /><br />
                  Deve aprender a defender suas próprias necessidades e fazer valer seus direitos, sem, contudo, recorrer ao papel de vítima. Tem o dom de aceitar os outros como realmente são e de compadecer-se com o sofrimento da humanidade.<br /><br />
                  Sente instintivamente a dimensão empática e espiritualizada do ser humano. Entretanto, podem ter sido feridos por causa de ingenuidade ou vulnerabilidade. Enganos feriram.<br /><br />
                  Deve resgatar sua espiritualidade e fé perdidas auxiliando e inspirando outras pessoas. Coisas ocultas (segredos) podem ter ferido. Falta de empatia também.<br /><br />
                  A perda da identidade pessoal através da experiência do êxtase e do sentimento de unidade com todo o cosmo constitui, provavelmente, uma forte necessidade psicológica, e o dilema com o qual você vai se deparar será saber como respeitar esse impulso sem ser arrastado e sem regredir a um estado de aconchego uterino, ignorando a marés de caos material ou emocional que sobem e invadem a vida (correndo o risco de se entregar ao desregramento, à droga, à bebida).<br /><br />
                  Você pode empenhar-se em estabelecer uma ordem interna e negligenciar os aspectos práticos da vida, ou pode preocupar-se com essa organização apenas para vê-la sempre ameaçada pelo caos interno. Você está destinado a deixar de ser um EU para ser um NÓS com a humanidade, mas antes terá que construir um EU, um senso de individualidade.<br /><br />
                  Pode ser difícil e doloroso construir essa estrutura pessoal, mas se ligar-se direto ao Todo, vai recusar o mundo da forma, pode destruir seus relacionamentos, empregos, projetos e até sua casa. É preciso se sacrificar na vida cotidiana para não se perder num exagerado senso de esplendor.<br /><br />
                  Se isso não for feito, você corre o risco de se ver dirigido por uma profunda inveja de pessoas que parecem possuir um forte senso de identidade pessoal.<br /><br />
                  Pode então, reagir desencadeando reações emocionais e artimanhas com o intuito de minar a solidez do invejado, e estabelecer relacionamentos complexos com pessoas, tentando absorver sua individualidade por osmose, uma vez que sua luta não é aberta.<br /><br />
                  Você pode sentir raiva por ter que "crescer", ou sentir culpa por ter que construir a sua independência. Mas só tendo conseguido ser maduro e um indivíduo separado com uma forte personalidade, você estará pronto para sua missão de ser útil aos outros.<br /><br />
                  Você terá consciência do poder do amor, oferecendo seus talentos individuais, sua fertilidade e autoexpressão para o bem de todos.<br /><br />
                  A percepção de que seu fardo é ajudar os outros pode representar sua derrocada caso a preocupação que demonstra pela humanidade como um todo o leve a violentar inconscientemente suas próprias necessidades de separação, isolamento e iniciativa individual.<br /><br />
                  Isso pode acontecer porque você tende a se identificar com a vítima, sofrer com os outros ou pelos outros, carregando sofrimentos que não são seus. Você pode escolher uma profissão relacionada com a cura como forma de autodefesa.<br /><br />
                  Provavelmente, atrai pessoas que necessitam de conforto, compaixão e apoio e que a todo instante exigem que lhes dedique seu tempo e energia, mas, estabeleça limites rigorosos e campos de atuação bem específicos, para não ser explorado.<br /><br />
                  Preserve seus momentos de solidão, pois você precisa se resguardar para se reabastecer. Em virtude de sua sensibilidade você pode se sentir algumas vezes exaurido e acabrunhado, necessitando periodicamente fazer algum retiro.<br /><br />
                  Você tende a exigir das pessoas próximas um grau de união que os sufoca, e pode até fazer chantagem emocional para obter o que quer, seja através de doença, ameaça de suicídio (em caso de ameaça de separação).<br /><br />
                  Pode ser perito em provocar um verdadeiro caos emocional, instigando a cólera ao seu redor, e ao mesmo tempo, manter uma aparência de vaga inocência. Você tem um conceito tão universal de amor que dificulta o encontro de alguma parceira na vida real.<br /><br />
                  Você tem facilidade em lidar com os dois hemisférios cerebrais, tornando-o capaz de interpretações e compreensão de temas geralmente difíceis de ser compreendido por outras pessoas, você tem processos de pensamento multidimensionais.<br /><br />
                  É curioso e investigativo, busca sempre saber mais profundamente assuntos que levam à maior conhecimento interior e dessa forma tem mais facilidade em compreender os sentimentos e emoções dos que o rodeiam.<br /><br />
                  Tem conhecimento esotérico adquirido em outras vidas e lida com esses temas de modo espontâneo e muitas vezes inconscientemente.<br /><br />
                  Procure reconhecer seus dons ouvindo seu Eu Superior, busque momentos de isolamento, medite sobre suas leituras e conclua usando-os com seus conhecimentos pessoais.<br /><br />
                  Aceite suas intuições, suas impressões sobre as outras pessoas, analise esses dados que recebeu intuitivamente e muitas vezes descobrirá que estava certo nas impressões que teve. Você é altamente intuitivo.<br /><br />
                  Procure usar algum tipo de oráculo (Tarô, Búzios, Runas, ou o que sentir afinidade) para auxiliá-lo nessa tarefa aprender a "ler" as mensagens mentais e cósmicas que navegam entre os seres. Você é emocionalmente frágil, talvez tente viver numa redoma para proteger-se de decepções emocionais.<br /><br />
                  Melhor será aceitar a forma de amor dos demais e assim não se decepcionará quando não receber o amor que você mesmo é capaz de sentir de modo tão universal. <br />`,

                  `Juno é a protetora do casamento. Se este asteroide está retrógrado no mapa, indica que essa união não foi vivida numa vida passada, ou foi interrompida.<br /><br />
                  É importante cultivar a estabilidade e a vida afetiva através da capacidade de um viver partilhado com alguém.<br /><br />
                  Juno neste signo ou setor sonha com uma união que reproduzirá o céu na terra. Tem medos ocultos de se ligar conjugalmente a alguém, por temer que essa pessoa não corresponda a esse ideal.<br /><br />
                  Às vezes essa pessoa pode optar por não se ligar a ninguém por causa destes medos. Mas se liga a alguém, tem um grande potencial de se sacrificar pela manutenção da parceria/casamento.<br /><br />
                  Busca de uma união espiritual e mística. Avaliar a posição do signo de Libra e de seu regente Vênus, nas suas relações com Juno para ter ideia da natureza global desta pessoa, de forma pela qual ela vivencia seu ideal afetivo e de que forma esse ideal pode ajudar ou atrapalhar suas associações. <br />`,
            ],
            levels: [
                  `<strong> Níveis evolutivos da alma </strong> (<i>reflita para perceber em que nível está</i>):<br /><br />`,

                  `<strong> 1º nível de evolução:</strong>`,

                  `É a esfera da solidão, da fuga da realidade, da incompreensão. O mal estar de uma energia presa que não encontra expressão. <br /><br />
                  É o emparedamento da alma, o sentimento de não fazer parte do mundo. Sente-se fora e longe de tudo, prisioneiro de si próprio, ausente da realidade exterior. <br /><br />`,

                  `<strong> 2º nível de evolução:</strong>`,

                  `Vive o doloroso combate do Eu frente ao mundo, onde procura situar-se. Seu insciente sabe que existe algo infinitamente maior além da realidade. <br /><br />
                  Esse sentimento é vivenciado como experiência de mal-estar Interior, sacrifício e desilusão, por excesso de projeção emocional numa realidade incapaz de satisfazê-lo. <br /><br />`,

                  `<strong> 3º nível de evolução:</strong>`,

                  `É a morada do Eu Superior. O Eu Liberto, já sem medo, consciente de que É em sua Essência Templo de Vida. Neste último nível acontece a rendição do Ser, quando abre o coração. <br /><br />
                  E desfaz o Nó da Eternidade. Das profundezas do Ser finalmente emerge uma Emoção de Unidade, um sentimento de Gratidão e Paz. Só então se reconhece Eterno. <br /><br />`
            ],
            nodosLunares: [
                  `<strong> Os Nodos Lunares Norte e Sul </strong> (ou Cabeça do Dragão e Cauda do Dragão) são indicadores de padrões cármicos. Representam um caminho de desenvolvimento individual e espiritual. <br /><br />
                  <strong> O eixo Cauda / Cabeça do Dragão </strong> (sempre opostos) nos mostra o sentido evolutivo da nossa viagem, da nossa encarnação: do passado para o futuro, do instinto para o espírito, das trevas para a Luz, do condicionado para o opcional. Ao assumir o nosso destino, esse eixo mostra o que devemos vir a Ser. <br /><br />
                  <strong> A Cauda do Dragão </strong> (Nodo Sul) indica os condicionamentos, hábitos e dons adquiridos que trazemos do passado. É nossa zona de conforto, onde ficamos agarrados sem evoluir, mas também onde nos sentimos seguros e protegidos. <br /><br />
                  <strong> A Cabeça do Dragão </strong> (Nodo Norte) indica o propósito desta experiência de vida, objetivo a atingir, o nosso projeto, a proposta evolutiva que a vida nos coloca. <br /><br />
                  É o novo que precisamos cultivar, onde novas faculdades e talentos são encontrados e usados como contribuição ao mundo. Ao cultivá-lo a vida fluir com mais significado. É o caminho da Alma. <br /><br />
                  <strong> O objetivo é equilibrar os dois </strong>: usar a sabedoria trazida do Nodo Sul para chegar ao Nodo Norte. A segurança do Nodo Sul para conquistar o Nodo Norte. Todos nós, numa primeira fase, procuramos ser quem fomos (Nodo Sul - mais fácil). <br /><br />
                  Numa segunda etapa de vida podemos despertar para a verdadeira identidade desta encarnação - Nodo Norte. <strong> Aprender a se autodisciplinar e a materializar o seu mundo interior: </strong>`
            ]
      }],
      casas: [{
            title: `Casa 01</strong>`,
            text: [
                  `Quando o Sol está no ascendente, o nativo sente que o ambiente da sua primeira infância apoia seus desejos e ela consegue expressar sua individualidade de maneira espontânea.<br /><br />
                  Há forte impulso para ser notado, respeitado e reconhecido pelos outros, além da tendência de se colocar como líder.<br /><br />
                  É essencial que se assuma a responsabilidade de revelar seu próprio caminho na vida, determinando de forma clara o que deseja obter e perseguir essa visão com persistência e determinação.<br /><br />
                  Esse posicionamento indica grande carisma, criando um temperamento animado e dando vitalidade física se não houver aspectos tensos. Geralmente persegue o sucesso pessoal.<br /><br />
                  Mas o principal desafio é cruzar o abismo entre os sonhos infantis de ser especial e importante e o nível superior das verdadeiras realizações, para que seja único e importante em sua contribuição criativa no mundo.<br /><br />
                  A pessoa é sempre ela mesma, nada externo altera sua personalidade. Dificilmente alguém consegue obrigá-la a fazer o que você não quer por muito tempo.<br /><br />
                  Quando desenvolve bem as energias do seu signo solar, tem a clara noção de que a sua vida depende mais de si mesma, dando prioridade aos seus próprios desejos, indo atrás das suas próprias aspirações. O conhecimento inato seria da preservação da individualidade. <br />`,

                  `Indica necessidade de uma casa, do ambiente doméstico e da família e pode se sentir infeliz se morar sozinho ou se perder da família.<br /><br />
                  Tem natureza tranquila e introvertida, mas intimamente deseja reconhecimento do seu valor. Talvez realize um trabalho para o público ou se exponha publicamente.<br /><br />
                  Tem tendência a se envolver em atividades humanitárias ou que proporcione bem estar aos outros e em defesa dos oprimidos, mas não sacrifica seus interesses pelos outros.<br /><br />
                  A mãe exerce uma grande influência e geralmente é uma mulher excepcional, porém pode haver tendência a viver à sombra dela ou de alguma mulher.<br /><br />
                  O mar exerce um apelo forte na vida e o trabalho pode estar relacionado com atividades marítimas. Fisicamente é inquieto, gosta de se movimentar, viajar, e prefere viajar com a família.<br /><br />
                  Tem apurada sintonia com o corpo, sabe quando está ficando doente e as mudanças de humor podem dominar a personalidade.<br /><br />
                  Pode se sentir atraído por profissões ou hobbies que envolva alimentar ou nutrir as outras pessoas. <br />`,

                  `...`,

                  `Mercúrio nessa casa oferece ao nativo um ponto de vista inquisitivo e intelectual com relação à vida. Quase nada do que acontece em seu meio ambiente lhe escapa.<br /><br />
                  As suas iniciativas e a sua autoexpressão se baseiam na lógica e no seu raciocínio lógico.<br /><br />
                  Com frequência, o nativo tem uma inteligência acima da média. Gosta de se movimentar muito, é inquieto e se expressa por meio da ação.<br /><br />
                  Iniciativa mental e força de vontade acompanham esta posição. Portanto, os nativos geralmente são intelectualmente competitivos.<br /><br />
                  Pessoas com Mercúrio na casa 1 são bons escritores, médicos, cientistas, pesquisadores, eruditos, bibliotecários e secretários, devido à sua habilidade de expressão e ao elevado grau de inteligência.<br /><br />
                  São tagarelas e tendem a escrever bastante devido ao intenso desejo de se expressarem verbalmente. A busca do autoconhecimento pode despertar especial interesse. <br />`,

                  `Vênus na Primeira Casa indica pessoas que possuem graça pessoal, modos agradáveis e um comportamento amigável.<br /><br />
                  Esta posição é especialmente favorável no horóscopo de uma mulher, porque confere beleza física. Geralmente, a infância é feliz, o que conduz a uma opinião favorável sobre a vida.<br /><br />
                  Vênus na casa 1 também mostra que a pessoa é socialmente expansiva e ativa nos seus esforços para desenvolver amizades e romances.<br /><br />
                  As pessoas com esta posição gostam de roupas bonitas e de tudo o que realce sua aparência pessoal. Sua capacidade natural para se relacionar socialmente provavelmente resulta em oportunidades românticas, matrimoniais e nos negócios.<br /><br />
                  O talento pode manifestar-se na arte, na música ou noutro tipo de expressão artística. <br />`,

                  `Marte na Primeira Casa indica pessoas agressivas, expansivas, que possuem muita energia. O corpo físico com frequência é forte e musculoso, proporcionando uma aparência de força e vigor.<br /><br />
                  Elas não se contentam em ser espectadores da vida, precisam estar diretamente envolvidas na ação. São impulsivas, conseguirão melhores resultados se aprenderem a pensar antes de agir.<br /><br />
                  Os nativos são ambiciosos e capazes de trabalhar muito. Seu impulso competitivo faz com que busquem reconhecimento e aprovação dos outros. Há o perigo de serem egotistas e teimosos.<br /><br />
                  Caso sintam que são suficientemente fortes para seguir o seu próprio caminho, não terão escrúpulos para fazê lo.<br /><br />
                  É importante se abrir para os direitos e sentimentos dos outros. Periodicamente, podem ocorrer violentos acessos de raiva e combatividade.<br /><br />
                  Esta posição de Marte indica gosto pelos esportes e outras formas de exercícios físicos vigorosos.<br /><br />
                  Com frequência, o corpo é forte e musculoso, com aparência de força e vigor. Esta posição é favorável para os homens, porque os torna fortes e masculinos.<br /><br />
                  A energia e a resistência físicas dessas pessoas permitem-lhes realizar duas vezes mais tarefas do que as pessoas comuns, desde que a energia esteja bem orientada.<br /><br />
                  O nativo deve cultivar autonomia e liberdade de ação pessoal, pois dificilmente tolera a interferência dos outros.<br /><br />
                  As capacidades para agir com a autoconfiança e a coragem criam um poder de liderança, mas não necessariamente habilidades administrativas e de organização.<br /><br />
                  Os nativos com Marte na Primeira Casa tendem a ter febres altas quando doentes, como as pessoas com Marte em Áries.<br /><br />
                  A impulsividade emocional imprudente pode conduzir à negligência com a saúde e a segurança. Com frequência têm uma cicatriz na cabeça ou no rosto. <br />`,

                  `Júpiter na Primeira Casa indica uma personalidade otimista e sociável. Aqueles que têm Júpiter nesta posição tendem a concentrar-se no lado mais positivo e brilhante da vida.<br /><br />
                  Geralmente são honestos, confiáveis, amigáveis e benevolentes. Portanto, populares e benquistos.<br /><br />
                  O seu otimismo e a sua autoconfiança inspiram confiança nos outros. O nativo cultiva atitudes pessoais dignas, especialmente na fase mais avançada da vida.<br /><br />
                  Em indivíduos mais evoluídos, Júpiter na casa 1 pode oferecer a capacidade de liderança social, educacional e religiosa.<br /><br />
                  As pessoas com esta posição gostam de ser consideradas autoridades em alguma área da religião, da filosofia ou da educação.<br /><br />
                  Realizam estudos elevados nestas áreas como início de se organizarem na sua busca por um papel. Podem ter insights proféticos sobre a lei espiritual e o destino da Humanidade.<br /><br />
                  Sendo geralmente felizes durante toda a vida, parecem possuir um tipo de proteção divina, como se a Providência estivesse sempre cuidando delas.<br /><br />
                  Júpiter na casa 1 geralmente proporciona fortes convicções religiosas ou morais. Com frequência, esta posição produz líderes espirituais.<br /><br />
                  Pode haver tendência a engordar, particularmente nos últimos anos de vida. Além disso, pode haver comodismo e um sentimento exagerado de autoimportância.<br /><br />
                  É preciso cuidado com excessos e exageros. Os nativos tendem a prometer mais do que podem cumprir. <br />`,

                  `Saturno na Primeira Casa pode indicar uma atitude pessoal digna e um pouco rígida.<br /><br />
                  Os nativos aceitam as responsabilidades, são sérios e trabalhadores. Não falam nem agem sem ter em mente um objetivo definido.<br /><br />
                  Podem parecer frios e hostis ao observador casual, mas podem ser amigos leais e prestativos quando a sua ajuda for mais necessária.<br /><br />
                  As pessoas com esta posição contam com uma boa capacidade de raciocínio e senso de justiça.<br /><br />
                  A percepção de que devem assumir pesadas responsabilidades pode fazê las acreditar que as diversões são frívolas e que não têm tempo para isso.<br /><br />
                  É preciso observar se a autoexigência e a cobranças estão pesadas demais. Precisam tornar-se mais expansivas e desenvolver o senso de humor.<br /><br />
                  Podem ter vivido limitações e privações na infância. Muitos obstáculos devem ser superados antes que estas pessoas possam ter autossuficiência, independência e liberdade.<br /><br />
                  Caso o sofrimento psicológico do vivido no início da vida tenha sido muito pesado, pode resultar em egoísmo e ambição materialista.<br /><br />
                  Esse sofrimento leva à desconfiança dos outros e a atitudes de que precisam proteger seus próprios interesses, pois ninguém mais o fará.<br /><br />
                  Nesses casos, construirão ao seu redor uma parede emocional que os outros não conseguem ultrapassar. Isso pode afastar ainda mais as pessoas, num círculo vicioso que acarretará em mais defesas e solidão.<br /><br />
                  Estas pessoas trabalham muito e durante longo tempo para obter destaque por seus próprios méritos, porque desejam mostrar quem são por meio de realizações que conduzem ao poder e proporcionam status.<br /><br />
                  As limitações que impõe a si mesmo para a satisfação de ambições pessoais podem provocar algumas frustrações e consequentemente a hostilidade.<br /><br />
                  Esta não assume a forma de violência declarada, mas pode manifestar-se em planos de vingança ou para tirar vantagem dos outros.<br /><br />
                  Os nativos precisam aprender a amar e a colaborar com os outros antes de ter satisfação pessoal e felicidade. <br />`,

                  `Urano na casa um indica desprezo por tudo o que é convencional e grande necessidade de liberdade para seguir seu próprio caminho.<br /><br />
                  Inclinação para a rebeldia. Pode haver aborrecimentos com autoridades, por causa das atitudes e dos padrões anticonvencionais desenvolvidos.<br /><br />
                  A personalidade do nativo é inovadora e criativa. Urano traz facilidades para o desenvolvimento científico: matemática, tecnologia (eletrônica) ou engenharia.<br /><br />
                  É preciso cuidado com a tendência de se transformar uma pessoa errática, utópica, por demais excêntrica, impraticável ou irrealizável. É preciso saber direcionar a criatividade construtivamente.<br /><br />
                  Nos relacionamentos se comporta de forma inquieta e mutável: ora há atenção total, ora rejeição completa. Aproximação se dá de forma original e enigmática.<br /><br />
                  Há capacidade para grande intensidade sexual, o que o estimula é a novidade. Gosta de tomar a iniciativa e direcionar o relacionamento. <br />`,

                  `Este posicionamento inspira grande imaginação, sensibilidade e idealismo. O nativo corre o risco de perder o foco, é importante dedicar-se algum tempo à realidade mundana.<br /><br />
                  É importante também buscar o autoconhecimento, para desenvolver uma noção mais exata de si.<br /><br />
                  O nativo também pode desenvolver expectativas elevadas em relação aos outros, viver no sonho e na ilusão. Há certa dificuldade em colocar limites por falta de assertividade.<br /><br />
                  Netuno nessa casa inspira um ideal de doação, romantismo, serviço, dedicação a causas maiores. Assume os papéis que lhe querem dar.<br /><br />
                  Mas pode também seduzir os outros para que aceitem o que pretende. Sua personalidade é camaleônica, indica potencial como ator ou artista.<br /><br />
                  O nativo deve aprender a orientar sua vida segundo a sua intuição e sensibilidade. Tem boa percepção para o caminho do belo e da virtude, tem potencial sensitivo ou mediúnico.<br /><br />
                  Humanitarista e solidário é sensível à situação dos menos favorecidos. É positivo viver em ambientes belos, onde reine o bom gosto e tudo o que de bom oferece este mundo.<br /><br />
                  Nada melhor que a Natureza e um modo de viver simples, mas iluminado pela sabedoria, amor e beleza. <br />`,

                  `Plutão nesta casa indica um indivíduo com forte autoconsciência e potencial para desenvolver uma poderosa vontade.<br /><br />
                  Compreendendo que a essência da vida é a ENERGIA, o nativo pode se interessar por formas avançadas de tecnologia. Em alguns casos, pode desenvolver faculdades de enorme clarividência.<br /><br />
                  O ambiente no início da vida com frequência é vivenciado com sofrimentos. Portanto, desde a infância o nativo é familiarizado com a luta pela sobrevivência. Isso deixa suas marcas.<br /><br />
                  Posteriormente o nativo tende a se tornar solitário e a manter o seu eu mais profundo afastado dos outros. O nativo pode ser fisicamente forte e ter um olhar muito penetrante.<br /><br />
                  Pode também ser uma pessoa difícil de autoconhecer-se, pois há muito mais coisas em seu interior do que podemos ver superficialmente.<br /><br />
                  O nativo com esta posição demonstra uma iniciativa considerável, mas às vezes encontra dificuldade em colaborar com os outros ou submeter-se a condutas tradicionais.<br /><br />
                  Pode e deve se regenerar através de uma profunda compreensão oculta da vida e da consciência. É cuidadoso com a saúde, mas precisa aprender que é o corpo que serve à mente. E não o contrário.<br /><br />
                  O inconformismo e individualismo desta posição com frequência tornam difíceis as relações no lar, no casamento e na profissão.<br /><br />
                  Plutão indica forte poder pessoal, de persuasão e força de vontade, que surgem da percepção de que o eu mais profundo é espiritual, como uma consciência que observa a mente e as emoções. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo preferiu a independência, a liberdade e a autonomia para suas próprias decisões.<br /><br />
                  Traz a tendência de viver demais para si mesmo, olha para fora à procura de quem pode favorecê-lo. O nativo pode ter sido autoritário e egoísta, não se predispondo a se relacionar com os outros.<br /><br />
                  O caminho da evolução está em aprender a se relacionar, somar forças e fazer parcerias, integrando seus interesses e dos outros.<br /><br />
                  É importante aprender mais sobre cooperação e compromisso, ouvindo mais o que os outros têm a dizer. Desenvolver habilidades sociais, cordialidade, diplomacia, gentileza e consideração.<br /><br />
                  Adaptar-se mais facilmente ao que os outros necessitam e requerem, especialmente em relacionamentos íntimos e no casamento. <br />`,

                  `O caminho da felicidade e do sucesso é encontrado quando o nativo coloca a si e as suas conquistas (por mais irrelevantes que possam parecer aos outros) como prioridade no seu ajustamento à sociedade e ao seu meio.<br /><br />
                  Isto não é, necessariamente, uma indicação de orgulho, mas antes de uma maneira fortemente individual e pessoalmente responsável de enfrentar as situações da vida.<br /><br />
                  Indica autonomia e autoafirmação, mas também a vontade de satisfazer a uma necessidade do destino e de fazer isso de maneira nova, revelada por uma avaliação pessoal dos problemas que devem ser encarados.<br /><br />
                  O nativo deve buscar a realização pessoal, cultivar seu poder de decisão e o entendimento consigo mesmo. Desenvolver a expressão de sua personalidade de maneira assertiva, pioneira, com coragem e ousadia.<br /><br />
                  Mas é preciso cuidado para não se isolar dentro de si mesmo e/ou sentir-se separado dos outros seres humanos. <br />`,

                  `Quíron na casa 1 aponta dificuldades relacionadas com a autoimagem ou com o próprio corpo.<br /><br />
                  Pode tratar-se de uma deficiência física ou um trauma psicológico e isso tende a inibir a expressão e a autoestima.<br /><br />
                  O nativo sente forte necessidade de ajudar pessoas deficientes ou desprotegidas, porque assim consegue compreender e superar sua própria dor.<br /><br />
                  Está disposto a lutar pelos que se sentem oprimidos, mas negligencia a si próprio. Pode ser também aquele sábio conselheiro sobre hábitos de saúde, mas que tem dificuldade em seguir seu próprio conselho.<br /><br />
                  O truque é dar conselhos a si mesmo. Quíron na casa 1 confere talento e habilidade para ser um professor que ensina os outros a fazer algo melhor do que ele faz.<br /><br />
                  Por exemplo: Quem tem Quíron na casa 1 precisa de um parceiro para sentir que existe. São pessoas que não devem viver sozinhas.<br /><br />
                  É preciso cuidado para não se tornar agressivo para encobrir seus sentimentos de inadequação. É possível também que se comporte passivamente para esconder a raiva e a hostilidade interna.<br /><br />
                  A solução é encontrar um ponto de equilíbrio, transmitindo aos outros, boas formas de realizar algo que você nunca conseguiu realizar. <br />`,

                  `Juno nesse mostra uma necessidade de ser valorizado O nativo procurará escolher parceiros/as que lhe permita isto. Aliás, a procura por um parceiro ideal é uma das suas principais preocupações.<br /><br />
                  Os relacionamentos são considerados como prioridade, através das relações pode melhorar a autoestima e fortalecer sua personalidade.<br /><br />
                  Terá sempre a iniciativa para iniciar um romance ou sociedade. Nas sociedades, pode assumir a parte majoritária ou tornar-se o administrador da sociedade.<br /><br />
                  Pode também estabelecer parcerias em academias de luta ou ginástica, em atividades esportivas, esportes radicais etc.<br /><br />
                  Em alguns casos, podemos ver uma pessoa que é capaz de “se casar consigo mesma”. A tendência é de que o nativo tome suas próprias decisões a respeito da parceria, que são muito impulsivas.<br /><br />
                  Essas decisões podem ser boas, mas por causa da impulsividade também podem ser ruins para o relacionamento.<br /><br />
                  É importante respeitar a individualidade, o espaço de cada um e a autonomia. Se o casamento ou as parcerias não vão bem, pode haver impacto sobre a saúde do nativo. <br />`,

                  `Na casa do Ascendente, Mercúrio retrógrado afeta profundamente a personalidade da pessoa, que pode reagir como uma criança: egocêntrico, impaciente, agindo sem refletir ou empreendendo várias coisas ao mesmo tempo, sem jamais terminá-las.<br /><br />
                  Procura-se a si próprio, busca definir a sua identidade. Essa insaciável curiosidade de se conhecer preenche uma lacuna das vidas passadas e permitirá que um dia o nativo possa enfim se situar enfim na comunidade dos homens.<br /><br />
                  Ele sairá do seu egocentrismo e aprenderá a servir aos outros. Enfim, abrandará os seus julgamentos críticos que, no início desta encarnação, podem ter causado inimizades. <br />`,

                  `A casa 1 descreve a pessoa tal como o percebem os outros. Vênus nesta casa indica que a pessoa gosta de si mesma.<br /><br />
                  Quando o planeta está retrógrado é provável que a pessoa em suas vidas anteriores tenha levado esse amor ao excesso: era Narciso e deslumbrado.<br /><br />
                  O nativo não se sente satisfeito, procura atenção dos outros, tende a não ter medida de dar e receber afeto. Quer viver a própria vida, mas pode ser tornar possessivo com os outros.<br /><br />
                  A pessoa não se dedica aos afetos, mas absorve muito das outras pessoas para alimentar sua autoconfiança. Na vida atual, ele tem demasiada tendência a querer agradar.<br /><br />
                  Procura atrair para si o amor dos outros, ao invés de dar amor àqueles que dele têm necessidade. É preciso cultivar mais generosidade.<br /><br />
                  O nativo deve aprender a transcender seus desejos infantis e buscar outros valores, se quiser viver uma história duradoura. <br />`,

                  `O nativo foi violento, impulsivo e afoito em vidas passadas. Esses traços de carácter de vidas anteriores tendem a se reproduzir na vida atual.<br /><br />
                  A agressividade pode ser dirigida para os mesmos objetivos exteriores de outrora.<br /><br />
                  Um possível comportamento "machista" provém de vidas nas quais o nativo desenvolveu, sobretudo, suas competências masculinas e viris.<br /><br />
                  Deve nesta vida reequilibrar-se e amadurecer para utilizar positivamente essa forte energia criadora, motivadora e sexual. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Em suas vidas anteriores, o nativo desenvolveu tendência a achar que as leis são feitas para os outros, mas não para ele.<br /><br />
                  Tendência a se dispersar, a desperdiçar sua energia, a abusar da bebida, da boa mesa ou do sexo. Tendência, enfim, a ficar sempre extremamente satisfeito consigo mesmo.<br /><br />
                  Como Júpiter simboliza os ideais religiosos e filosóficos, certos nativos, em suas vidas passadas, pode ter se envolvido com religiões distorcidas.<br /><br />
                  É possível que tenham sido bastante intolerantes. A lição cármica é aqui o amadurecimento, a busca do autoconhecimento, para que se consciente de suas fraquezas. <br />`,

                  `O nativo pode ter sido aprisionado em suas vidas precedentes. Suas potencialidades estavam bloqueadas e ele não pode desenvolver sua personalidade.<br /><br />
                  Na vida atual deve encontrar e construir suas próprias bases, afirmar-se, ganhar o respeito dos outros. Sem, por isso, adotar uma atitude rabugenta, crítica ou autoexigente.<br /><br />
                  Muito pelo contrário, deve aprender a relaxar, cultivar flexibilidade, adaptar-se às pessoas e às circunstâncias.<br /><br />
                  O nativo deve compreender que uma atitude demasiado rígida promove não a força, mas a fraqueza de alguém que procura se tornar seguro de si. A autoestima e a autoconfiança são grandes lições. <br />`,

                  `Urano na Primeira Casa indica uma pessoa com um forte impulso de liberdade no seu comportamento pessoal. Com frequência possuem talentos intuitivos e científicos incomuns.<br /><br />
                  Geralmente são consideradas, excêntricas, diferentes ou avançadas, pois se preocupam pouco com comportamentos convencionais. Procuram amizades e atividades pouco comuns.<br /><br />
                  No seu pior, pode haver teimosia excessiva, bem como a busca de liberdade pessoal sem levar em consideração o senso comum ou os direitos dos outros.<br /><br />
                  Algumas vezes, a excentricidade e a rebeldia podem se tornar um fim em si mesmo sem razões objetivas para tal.<br /><br />
                  Esta posição de Urano estimula a inquietação, o desejo de mudanças e excitação constantes. Os nativos acham difícil aceitar uma vida rotineira.<br /><br />
                  Com frequência preferem o excitamento e a aventura, em detrimento da sua segurança.<br /><br />
                  Há o desejo de liderança em grupos e organizações, especialmente do tipo que promove reformas, novas ideias e conceitos espirituais avançados.<br /><br />
                  Os nativos procuram se envolver com as novidades, assuntos originais, inventivos e pioneiros.<br /><br />
                  Estão sujeitos a muitas mudanças de atitudes e propósitos. Tendem a vacilar entre pontos de vista extremos.<br /><br />
                  No seu pior, são pouco moderados. Por essas razões, seu comportamento pessoal é imprevisível.<br /><br />
                  No seu melhor, pode indicar inteligência superior ou insight intuitivo. Pessoas engenhosas, que podem fazer importantes descobertas nas áreas que escolherem. Tendem a ser de estatura alta. <br />`,

                  `Em vidas passadas, o nativo pode ter esquecido ou recusado o programa espiritual em função do qual se encarnara.<br /><br />
                  Refugiado em seus sonhos encantadores e sedutores, pode ter enganado os outros e a si mesmo. A responsabilidade com um caminho espiritual se torna ainda maior.<br /><br />
                  É preciso agora cultivar a coragem de manter as promessas, de não mentir, de ser honesto. Trabalhar a fragilidade nervosa ou mental.<br /><br />
                  Tomar cuidado com a vulnerabilidade às más influências das amizades e companhias.<br /><br />
                  É preciso buscar o autoconhecimento para transmutar a confusão nas ideias, as crises de identidade, os enganos em relação a si mesmo, a sensação de estar perdido ou confuso.<br /><br />
                  Práticas como meditação, ioga, Tai-Chi, dança ou atividades que desenvolvam a consciência corporal podem ajudá-lo. <br />`,

                  `É importante observar se há excesso de segredo, gosto pelas intrigas tortuosas, ou excessiva busca de poder, desprezo pelos outros, ou pelo menos, dificuldade em cooperar, com respeito e consideração.<br /><br />
                  Todos nós escondemos segredos no fundo das gavetas. Mas o nativo enfrenta nesta vida culpas inconscientes geradas por seus desejos loucos: cabe a ele identificá-los, analisá-los e exorcizá-los.<br /><br />
                  "Conhece-te a ti mesmo" deverá ser o seu lema; será preciso que empreenda todo um trabalho de investigação psicológica sobre seus próprios esquemas de comportamento.<br /><br />
                  O nativo deve purificar o seu ego. Quando tiver desmascarado as distorções do poder, as obsessões e compulsões que tornam a vida tão difícil, tanto para ele como para seus parentes, tudo pode fluir melhor.<br /><br />
                  De qualquer modo, esta posição planetária confere ao nativo uma enorme força, uma coragem excepcional.<br /><br />
                  Ele tem condições de enfrentar o Minotauro, essa besta imunda encolhida no fundo do seu labirinto pessoal; uma vez domesticado, o mostro se transformará num bravo aliado de poder. <br />`,

                  `Quíron na casa 1 aponta dificuldades relacionadas com a autoimagem ou com o próprio corpo. Pode tratar-se de uma deficiência física ou um trauma psicológico, isso inibe a expressão e a autoestima, principalmente quando está conjunto ao ascendente.<br /><br />
                  A pessoa sente uma forte necessidade de ajudar pessoas deficientes ou desprotegidas, porque assim consegue compreender e superar a sua própria dor.<br /><br />
                  A pessoa se dispõe sempre a lutar pelos que se sentem oprimidos, negligenciando até a si próprio.<br /><br />
                  Pode ser também aquele sábio conselheiro sobre hábitos de saúde, mas que tem dificuldade em seguir seu próprio conselho.<br /><br />
                  O truque aqui é dar conselho a si mesmo. Quíron na casa 1 confere talento e habilidade para ser um professor que ensina aos outros a fazer algo melhor do que ele faz.<br /><br />
                  Por exemplo: Quem tem Quíron na casa 1 precisa de um parceiro para sentir que existe. São pessoas que não devem viver sozinhas.<br /><br />
                  As dificuldades dos aspectos entre Quíron e Marte envolvem agressão e assertividade. Pessoas com aspectos dinâmicos podem se tornar muito agressivas para encobrir seus sentimentos de inadequação.<br /><br />
                  Mas também podem comportar-se passivamente para esconder a raiva e a hostilidade interna.<br /><br />
                  A solução de Marte / Quíron é encontrar um ponto de equilíbrio, transmitindo aos outros as boas formas de realizar algo que você nunca conseguiu realizar. <br />`,

                  `Juno nesse setor ou signo mostra uma necessidade de ser valorizada e procurará escolher um parceiro ou parceiros/as que lhe permita isto.<br /><br />
                  Aliás a procura por um parceiro ideal é uma das suas principais preocupações. Para um homem a busca de uma parceira ativa, marciana.<br /><br />
                  Sua evolução passa pelo esforço de construir uma relação durável e sólida. Se o casamento ou as parcerias não vão bem, impacto sobre a saúde da pessoa.<br /><br />
                  Em alguns casos, podemos vemos uma pessoa que é capaz de “se casar consigo mesma”.<br /><br />
                  Tendência a tomar decisões a respeito da parceria, que são muito impulsivas, e que podem ser boas ou ruins para a própria parceria. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 02</strong>`,
            text: [
                  `Na casa 2, as questões materiais são predominantes. A segurança financeira é uma forma de definir a identidade e um canal para a autoexpressão.<br /><br />
                  Porém, a transferência das necessidades de expressão para bens materiais nunca é plenamente satisfatória e o nativo precisa buscar a riqueza interior, que pode ser refletida através de suas qualidades, talentos e habilidades pessoais.<br /><br />
                  Será através da utilização consciente desses recursos internos que ela poderá desenvolver um senso de identidade única e atrair os recursos materiais necessários para a realização de seus talentos.<br /><br />
                  É necessário um esforço consciente para definir as verdadeiras necessidades e valores.<br /><br />
                  Sentir-se menos inseguro e não ficar inventariando o que tem, passando a estabelecer alvos e desejos verdadeiros a serem realizados, empregando todos os recursos, externos e internos, para atingi-los.<br /><br />
                  Para tanto, é importante construir uma autoafirmação genuína, sem se desviar dos esforços de desenvolvimento pessoal, para que se evite usar a riqueza para exercer domínio sobre as pessoas e garantir a presença da plateia.<br /><br />
                  O nativo tem clareza na questão da subsistência. Compreende a importância do que é ganhar o próprio sustento e produzir algo.<br /><br />
                  Sabe que a vida não é só planejar e sonhar, mas também realizar, deixar algo de concreto, cultivar seus valores e se distinguir através deles.<br /><br />
                  São seus valores, dons e talentos que filtram seu comportamento, suas escolhas e seu estilo de vida. <br />`,

                  `Indica necessidade de segurança proporcionada pelo dinheiro e pelas posses. Dá muita importância às questões materiais, porém pode haver dificuldade de obter ou conservar os recursos.<br /><br />
                  É preciso cuidado com demasiado apego por posses e bens materiais. A necessidade de segurança pode resultar de privações materiais ou emocionais durante a infância.<br /><br />
                  Tem habilidade para negócios. É perspicaz e ligeiramente calculista, mas esconde essa tendência atrás do seu jeito agradável de se colocar.<br /><br />
                  Mulheres podem influenciar nas finanças dando ajuda financeira ou heranças, como também por ligações familiares.<br /><br />
                  Pode se sentir atraído por profissões ou hobbies em áreas como em construção civil, artes, gastronomia, jardinagem, música, dança ou criações do que seja belo e poético. <br />`,

                  `...`,

                  `Mercúrio na Segunda Casa indica uma preocupação com assuntos comerciais e financeiros. O sistema de valores baseia-se em coisas que podem produzir resultados práticos e concretos.<br /><br />
                  Muitos economistas, consultores financeiros e planejadores de organizações possuem Mercúrio na Segunda Casa.<br /><br />
                  Existe uma habilidade para a literatura, o jornalismo, divulgação, radiodifusão, intercâmbios, ensino e outros meios de comunicação.<br /><br />
                  As pessoas que ganham a vida como secretárias, contabilistas, bibliotecárias, telefonistas ou escritoras também podem ter esta posição de Mercúrio.<br /><br />
                  Os nativos com esta posição buscam a educação visando sempre melhorar o seu poder aquisitivo.<br /><br />
                  Possuem ideias originais sobre maneiras de ganhar dinheiro e os seus assuntos financeiros são sempre metodicamente planejados. <br />`,

                  `Vênus na Segunda Casa indica amor à riqueza, a coisas belas, objetos de arte e adornos pessoais. Em geral, todas as coisas adoráveis que o dinheiro pode comprar.<br /><br />
                  Os nativos também buscam a riqueza para atingir status social. No romance ou casamento, procuram parceiros ricos, que possam proporcionar-lhes os confortos materiais que desejam.<br /><br />
                  Esta posição confere talento nos negócios, especialmente naqueles relacionados à arte. Os artistas com Vênus nesta casa têm boa chance de ganhar dinheiro com a sua arte.<br /><br />
                  As mulheres com esta posição de Vênus geralmente são extravagantes e os homens tendem a gastar muito dinheiro com as suas amizades femininas.<br /><br />
                  O nativo pode receber ajuda dos amigos e dos contatos sociais, levando a acordos em negócios e a posições que trazem riqueza. <br />`,

                  `Marte na Segunda Casa indica para os nativos um desejo ativo de lucros financeiros e bens materiais.<br /><br />
                  Embora a iniciativa nos negócios lhes proporcione boa habilidade para ganhar dinheiro, são impulsivos nos seus gastos e com frequência esgotam os seus recursos financeiros rapidamente.<br /><br />
                  Consequentemente, precisam verificar cuidadosamente o valor e o objetivo dos seus gastos. Essas pessoas desejam controlar seus próprios negócios.<br /><br />
                  Com frequência preferem iniciá los em vez de entrarem em organizações pertencentes a outras pessoas. São competitivas nas finanças e nos negócios e procuram demonstrar o seu valor por meio da habilidade para ganhar dinheiro.<br /><br />
                  Portanto, estão sempre ansiosas para superar os seus concorrentes. Elas lutarão para proteger a sua propriedade pessoal. Quando os outros tomam aquilo que não lhes pertence, ficam indignadas.<br /><br />
                  Por outro lado, podem também desfazer-se de mercadorias para obter favores ou causar boa impressão. Pode haver uma preocupação excessiva com os valores materiais.<br /><br />
                  Nos horóscopos de tipos menos evoluídos, pode haver brigas e furtos ou outro tipo de desonestidade para adquirir bens materiais ou satisfazer desejos. <br />`,

                  `Júpiter na Segunda Casa indica uma importante habilidade para a expansão dos negócios, proporcionando boa sorte com relação a dinheiro e propriedades.<br /><br />
                  Mas é preciso saber poupar, tomar cuidado para que o dinheiro desapareça tão rápido quanto surgiu, ou que os lucros existam apenas no papel.<br /><br />
                  O nativo com esta posição com frequência envolve-se em negócios relacionados a bens imobiliários, produtos domésticos, alimentos, hospitais e outras instituições, psicologia, educação, levantamento de fundos, viagens e publicações.<br /><br />
                  O nativo também pode estar desatento às contingências imprevistas em empreendimentos nos negócios. É necessário cautela em dívidas contraídas.<br /><br />
                  Outro cuidado a se tomar é com a tendência de considerar as coisas como garantidas e se frustrar. <br />`,

                  `Saturno na Segunda Casa indica ambição e trabalho árduo para adquirir dinheiro, bens materiais e o status que eles conferem.<br /><br />
                  Os nativos geralmente precisam trabalhar muito para ganhar a vida. São perspicazes nos negócios e podem lucrar em tudo o que compram.<br /><br />
                  Guardam dinheiro pensando em segurança na velhice. Se esta moderação for exagerada, pode resultar em avareza.<br /><br />
                  Assim, o nativo pode se tornar excessivamente cauteloso com dinheiro e não desejará gastar nem nas coisas necessárias.<br /><br />
                  Isso algumas vezes dificulta sua expansão profissional, que poderia lhe proporcionar mais ganhos. O nativo precisa perceber que, se quiser progredir financeiramente, o dinheiro deve circular para retornar.<br /><br />
                  Em muitos casos, essa cautela se origina de um profundo medo da pobreza. Com frequência trabalha muito devido a esse medo.<br /><br />
                  É preciso observar se há egoísmo e possessividade com relação ao dinheiro e aos seus recursos materiais.<br /><br />
                  Em princípio existe a possibilidade de haver muito trabalho e poucos lucros. Mas a segurança financeira e a aquisição de dinheiro e propriedades, especialmente nos últimos anos de vida.<br /><br />
                  A prudência, a competência e a sagacidade nas questões de negócios são adquiridas ao longo da vida. Em geral, as pessoas com esta posição adquirem terras e propriedades de valor duradouro.<br /><br />
                  O lucro material por intermédio do pai, patrão, chefes ou pessoas em posições de poder com frequência está indicado.<br /><br />
                  O dinheiro pode ser ganho em contratos com o governo, na administração de negócios, mineração e construção. <br />`,

                  `O nativo é revolucionário e excêntrico na forma como lida com os valores materiais. Pode haver vontade de se livrar dos deveres e obrigações advindas das coisas adquiridas.<br /><br />
                  Sentimento que as coisas adquiridas ao longo da vida são mais um problema do que uma ajuda. Vontade de se livrar do maior número de restrições possível.<br /><br />
                  Pode também haver o perigo de gastar dinheiro impulsivamente. Na idade madura pode tomar na vida um caminho inesperado, através de uma ocupação incomum. Gosto incomum.<br /><br />
                  No relacionamento afetivo, é necessário tomar muito cuidado ao discutir os próprios valores e princípios éticos, que são muito originais e estranhos para a pessoa comum.<br /><br />
                  O nativo pode procurar o relacionamento com uma pessoa que não dependa de dinheiro para a segurança emocional. <br />`,

                  `O nativo é pouco prático em relação aos valores e bens materiais. A casa onde se situa Netuno indica onde não queremos ver para a realidade, preferimos criar uma visão da vida mais sonhadora e encantada.<br /><br />
                  Se o nativo aprendesse a gerir o dinheiro como se fosse de outra pessoa, talvez conseguisse criar algumas regras e responsabilidades.<br /><br />
                  Há certa negligência na forma como encara a sua sobrevivência e as responsabilidades no mundo material. Pode haver culpa associada com os lucros financeiros.<br /><br />
                  Pode haver uma tendência de evitar o dinheiro por considerá-lo sujo de alguma forma, desprezar os bens materiais.<br /><br />
                  Ou mesmo sentir que não merece ser rico. O nativo pode sentir dificuldade em fazer contas e gastar mais do que o que tem.<br /><br />
                  Num outro extremo, pode querer uma vida fácil, quer obter lucros rapidamente, idealizando a riqueza e a segurança. É importante desenvolver uma relação adequada com os valores.<br /><br />
                  Esse desequilíbrio de colocar o nativo à mercê dos outros: fica nas mãos do banco ou de outra pessoa da qual possa ter emprestado dinheiro.<br /><br />
                  Há o risco de atrair parceiros endividados e ter que pagar as dívidas dos outros.<br /><br />
                  Caso não desenvolva a sensibilidade Netuniana de forma positiva, pode desenvolver dependências com o álcool ou outras substâncias com efeitos psicotrópicos.<br /><br />
                  Na via positiva pode desenvolver a caridade e ajudar os mais necessitados. Gastar seu dinheiro com coisas que o encantam: música, filmes e lazer, por exemplo.<br /><br />
                  Investe na qualidade estética dos objetos pessoais. Conta com o favorecimento da intuição nas gestões comerciais. Pode ganhar dinheiro com arte ou com venda de objetos religiosos.<br /><br />
                  O aprendizado é desenvolver o refinamento na forma como deve lidar com a matéria. Aprender a doar, a partilhar, a ser flexível nos valores pessoais.<br /><br />
                  Desenvolver a percepção clara do seu valor e perceber que faz parte de um todo. <br />`,

                  `Plutão nesta casa indica forte ambição para adquirir dinheiro e recursos materiais. As ambições financeiras pessoais provavelmente irão incluir o dinheiro de outras pessoas.<br /><br />
                  Na via positiva indica grande intuição e engenhosidade para ganhar dinheiro, graças à habilidade de perceber possibilidades financeiras ocultas, por insights ou por intermédio de informações confidenciais.<br /><br />
                  Na via negativa, significa que o nativo pode se tornar ganancioso e egoísta, o que faz com que perca os amigos e se envolva em problemas legais.<br /><br />
                  Nesses casos, podem surgir problemas com impostos, heranças e seguros. Podem ocorrer reveses financeiros por meio de especulações.<br /><br />
                  A lição básica de Plutão aqui é aprender a purificar as motivações financeiras e ampliar seus valores pessoais, percebendo que somos simplesmente administradores dos recursos materiais, que devem ser utilizados altruisticamente. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo valorizou muito seus interesses, viveu apegado à segurança e aos bens matérias, com dificuldade e resistência para fazer mudanças.<br /><br />
                  O nativo desenvolveu sistemas de crenças e valores muito rígidos, que precisam ser alterados levando em consideração os pontos de vista e as crenças de outras pessoas.<br /><br />
                  Alguns podem achar que, permitir que outros os ajudem financeiramente seja um sinal de fraqueza e que a autossuficiência em tudo é a prioridade.<br /><br />
                  O caminho da evolução é aprender a transformar-se interiormente, respeitando os valores e interesses dos outros, superando padrões e conceitos sociais ultrapassados.<br /><br />
                  Aprender a soltar, desapegar, compartilhar. Podem ter de aprender que dores e crises, antes de serem coisas a evitar a qualquer custo, muitas vezes trazem oportunidades para crescimento e mudanças positivas.<br /><br />
                  O nativo pode ajudar os outros a desenvolver um maior sentido de valor próprio. Ajudar os outros a prosperar. <br />`,

                  `O caminho da felicidade e do sucesso é encontrado quando o nativo aprende a manifestar prosperidade em sua vida.<br /><br />
                  Atrair “substância social” para si mesmo – dinheiro, propriedade, valores culturais herdados, etc.<br /><br />
                  Sentir-se feliz ao fazer isso, especialmente se precisa disso para tornar mais concreto e eficaz o seu processo de autoconhecimento e valorização pessoal.<br /><br />
                  O nativo pode e deve procurar apoio e sustento no seu esforço para deixar sua marca no seu meio.<br /><br />
                  Pode se tornar um bom administrador. Deve buscar valores materiais, espirituais, éticos e morais, cultivando seus dons, descobrindo seus talentos e sua segurança de forma taurina: com paciência, prazer, constância e sem pressa.<br /><br />
                  Aprender o significado da palavra ABUNDÂNCIA e acreditar em seu merecimento para manifestá-la. <br />`,

                  `Quíron na casa 2 gosta de ensinar e aconselhar. A casa 2 trata do dinheiro, dos bens e valores.<br /><br />
                  Você tende a ensinar os outros a cuidar dos seus bens, valores e dinheiro, mas você mesmo não sabe cuidar de seus próprios valores. Na verdade, suas próprias finanças podem estar numa verdadeira bagunça.<br /><br />
                  Às vezes esse posicionamento pode levar o nativo a ser um miserável, de forma que o dinheiro que ganha não traz nenhuma satisfação ou fazer com que tenha medo de não ter recursos necessários e pode até mesmo passar por privações.<br /><br />
                  Muitas vezes a pessoa tem baixa autoestima e sente que não merece ter nenhum dinheiro. Em outros casos, pode desperdiçar, doar e gastar seu dinheiro sem pensar.<br /><br />
                  Quando aprende a dar valor ao que tem, deixa de ter problemas. O senso de autoestima e merecimento é a chave para curar Quíron na casa 2. <br />`,

                  `Os relacionamentos mais importantes são aqueles que possam proporcionar segurança material e estabilidade financeira.<br /><br />
                  A parceria ideal é aquela que se constrói sobre algo concreto: uma casa, bens adquiridos, patrimônio. A casa 2 fala dos valores, do dinheiro. Juno inspira no nativo a vontade de uma vida sólida com o parceiro.<br /><br />
                  Pode também estabelecer parceria em instituições financeiras, durante negociações, em bancos, instituições financeiras que lidam com empréstimos e crediários etc.<br /><br />
                  O ideal é que o casal ou a parceria aprenda a manifestar Abundância. <br />`,

                  `Esta casa, em analogia com Touro, trata dos bens materiais e dos valores de uma forma geral.<br /><br />
                  Mercúrio retrógrado é lunático, mutante, demasiadamente influenciado pelos detalhes da vida quotidiana.<br /><br />
                  Isso indica que nas vidas passadas, o nativo se apegou demais à segurança material, cultivou valores materialistas acima de tudo.<br /><br />
                  Nenhuma perspectiva espiritual viera desligá-lo da busca dos bens terrestres.<br /><br />
                  Atualmente, o nativo deve fazer um esforço para cultivar valores mais elevados, recolocar cada valor em seu devido lugar e procurar o essencial, que é de ordem espiritual. <br />`,

                  `Sequioso de segurança, o nativo permanece apegado demais aos objetos, pessoas e instituições que oferecem segurança, para ele tranquilizadoras.<br /><br />
                  Pode ser, com frequência, um excelente artesão, ou artista, mas as suas criações nunca são de vanguarda: ele ficou preso à sensibilidade artística de épocas passadas.<br /><br />
                  O nativo tenta reciclar experiências passadas para ter sentimentos de segurança. É possessivo, quer absorver o universo à sua volta.<br /><br />
                  Pode ser muito materialista, enquanto procura restabelecer e fortalecer todos os seus sentimentos passados de autovalorização.<br /><br />
                  Tem uma forte tendência para repetir todas as coisas de que você gosta e se tornar uma pessoa de muitos hábitos.<br /><br />
                  A necessidade por segurança no plano físico e material pode ser tão grande, que o nativo se torna apegado, mas não é muito generoso.<br /><br />
                  Não é muito competitiva, pois há preguiça. Experimenta dificuldades com o sexo oposto como resultado da possessividade ou do medo de ser possuído.<br /><br />
                  Gosta de fazer as coisas à sua maneira e se aborrece quando sente que os outros estão invadindo seus métodos de fazer as coisas.<br /><br />
                  Pode haver um carma de ligação ao amor de uma vida passada e de bem-estar com respeito a pessoas, objetos e circunstâncias.<br /><br />
                  O nativo deve cultivar o desapego, transformar o medo de empobrecer com mais fé, espiritualidade e generosidade, para abandonar suas tendências materialistas. <br />`,

                  `O nativo com essa posição planetária. Comportou-se em vidas passadas como um novo-rico. Viveu preocupado apenas em lucrar e em exibir seus ganhos diante dos outros.<br /><br />
                  Tal como um industrial preocupado apenas com sua produção de peças de aço, sem nunca olhar para uma flor, nem ouvir a palavra de uma criança.<br /><br />
                  Resta-lhe uma inegável aptidão para manejar os poderes do dinheiro. Que o nativo agora os utilize para patrocinar artistas, amparar obras humanitárias e de caridade.<br /><br />
                  Assim, liquidará esse carma de materialismo (até mesmo, por vezes, de desonestidade). <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Esta casa diz respeito às posses, aos bens e ao dinheiro. Se está habitada por um Júpiter retrógrado, podemos pensar que o nativo usou mal seus bens.<br /><br />
                  Pode ter desperdiçado a fortuna que herdou da família. Ou pode também ter desviado o dinheiro em seu benefício, ao invés de utilizá-lo a serviço da sociedade.<br /><br />
                  O nativo, na vida atual, deve refletir sobre o fato de que o dinheiro só se justifica na perspectiva do auxílio prestado aos outros. A riqueza é, ao mesmo tempo, uma responsabilidade e uma função. <br />`,

                  `Em vidas passadas, o dinheiro, o lucro e a segurança material proporcionada pelas posses das riquezas foram prioridade para o nativo.<br /><br />
                  Pode ter vivido como um burguês, como um aproveitador, não desenvolveu responsabilidade com as questões financeiras ou valores mais elevados.<br /><br />
                  A gratificação proporcionada pelo dinheiro e o materialismo também têm os seus limites: "Os ricos também têm as suas preocupações!"<br /><br />
                  Na vida atual, de modo algum se pede que os nativos neguem o dinheiro ou a prosperidade.<br /><br />
                  É preciso aprender a trabalhar como qualquer ser humano para garantir a segurança material. O mais importante é aprender que a verdadeira segurança é espiritual.<br /><br />
                  Trata-se de ampliar a consciência e elevar os valores, deixar para trás a fascinação do dinheiro. A prosperidade espiritual deve ganhar prioridade. <br />`,

                  `Urano na Segunda Casa indica nativos com finanças mal organizadas. Tendem a ser impulsivos com o dinheiro, ganhando e perdendo com igual impetuosidade.<br /><br />
                  Mas no seu pior, podem se envolver em especulações financeiras pouco práticas. Podem ganhar dinheiro por intermédio de negócios relacionados a invenções, equipamentos eletrônicos ou outras áreas científicas.<br /><br />
                  Os nativos tendem a emprestar ou pedir dinheiro emprestado. É preciso cuidado para evitar conflitos sobre dívidas não pagas.<br /><br />
                  Os valores relacionados ao uso de recursos naturais são diferentes dos das pessoas comuns.<br /><br />
                  Essas pessoas podem considerar os valores convencionais inúteis ou, inversamente, os seus próprios valores podem ser desprezados pelos outros.<br /><br />
                  No seu melhor, podem desenvolver talentos e métodos incomuns para obter lucros e ganhos. O dinheiro pode ser utilizado para propósitos humanitários e científicos valiosos. <br />`,

                  `Netuno retrógrado na casa 2 indica vidas passadas desonestas: trapaças, enganos ou desvios de fundos, abuso dos bens públicos, lucros ilícitos graças a uma alta posição administrativa.<br /><br />
                  Podem ter feito fortuna nas costas das pessoas pobres. Estão sujeitos a ser, por sua vez, ludibriados por suas antigas vítimas, e, de qualquer modo, a passar por sérios problemas de dinheiro.<br /><br />
                  Na vida atual é preciso desenvolver rigorosa honestidade. Muitas vezes o nativo já pratica isso por si mesmo, em reação contra os seus excessos passados. <br />`,

                  `Em vidas passadas o nativo não desenvolveu sua honestidade. Caso não manifeste um esforço constante e consciente, pode recair na tentação de se apropriar de tudo o que lhe cai nas mãos.<br /><br />
                  Inveja, ciúme, vingança e atitudes passionais, caracterizadas por uma angústia ou frustração, pode estar latente aqui. Nesta vida deve se libertar.<br /><br />
                  Suas vidas passadas marcadas pela violência e até mesmo pela criminalidade podem leva-lo a uma tal repulsa por si mesmo, que enfim decidiu se purificar.<br /><br />
                  O carma, aqui, é uma reflexão sobre a finalidade dos bens materiais, um exercício de despojamento interior. É preciso transformar e purificar as tendências materialistas trazidas do passado.<br /><br />
                  Assim, o nativo pode passar por períodos de ruína ou de perdas financeiras, que são provações escolhidas por ele de antemão, antes do seu nascimento. <br />`,

                  `Quíron na casa 2 ensina e aconselha. A casa 2 trata do dinheiro, bens e valores e a tende a ensinar aos outros a cuidar dos seus bens, valores e dinheiro, mas ela mesma não sabe cuidar de seus próprios valores. Na verdade, suas próprias finanças podem estar numa verdadeira bagunça.<br /><br />
                  Às vezes esse posicionamento pode levar a pessoa a ser um miserável, de forma que o dinheiro que ganha não lhe traz nenhuma satisfação ou ela tem medo de não ter recursos necessários, e pode até mesmo passar por privações.<br /><br />
                  Muitas vezes a pessoa tem baixa autoestima e sente que não merece ter nenhum dinheiro. Em outros casos, pode desperdiçar, doar e gastar o seu dinheiro sem pensar.<br /><br />
                  Quando aprende a dar valor ao que tem, deixa de ter problemas. O senso de autoestima é a chave para curar Quíron na casa 2. <br />`,

                  `Juno nesse setor ou signo, uma vez que se associa ou se une a alguém não o faz pela metade ou por brincadeira.<br /><br />
                  Ela encarará suas parcerias e seu casamento como algo que lhe dará oportunidade de construir algo, mas remos alguém com tendências a ser muito possessiva (mapa feminino), como esposa (se estiver num mapa masculino).<br /><br />
                  As tendências possessivas vão ser mais fortes caso não exista nada de concreto que a pessoa, que tem Juno aí, possa construir com seu parceiro.<br /><br />
                  Melhora de situação social e financeira que advém de uma união. Uma parte do orçamento desta pessoa estará consagrada ao cuidado com a sua estética, com festas presentes, etc...<br /><br />
                  São pessoas que investem no luxo pessoal segundo suas disponibilidades financeiras. Este é o tipo de esposa de um homem com Juno em Touro ou na segunda casa. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 03</strong>`,
            text: [
                  `Os potenciais do Sol na casa 3 são revelados através do desenvolvimento mental, intelectual e da habilidade para se comunicar.<br /><br />
                  O prazer e o estímulo para ser único virão da troca de ideias, criando preciosas perspectivas pessoais.<br /><br />
                  É necessário um empenho e uma responsabilidade pessoal para que o potencial de clareza e eloquência intelectuais se desenvolva.<br /><br />
                  Assim o nativo consegue iluminar conscientemente as suas relações e a comunicação pessoal.<br /><br />
                  A mente do nativo com o Sol na casa 3 tende a manifestar uma atitude curiosa, voltada à exploração do mundo.<br /><br />
                  Há uma necessidade interna, nem sempre compreendida, de entender os processos de funcionamento da vida como um todo.<br /><br />
                  O amadurecimento desse Sol requer abertura para a variedade de expressões individuais e o compartilhar daquilo que sente e sabe, seja através de informações, de conhecimento ou de compressões, de si e do mundo.<br /><br />
                  Isso será importante não só para a própria pessoa, que ficará mais consciente de si mesma e evitará as armadilhas da arrogância intelectual que paralisa o crescimento, como também para as outras pessoas, que aprenderão e crescerão com essa troca.<br /><br />
                  A vida para o nativo é troca, é se relacionar com o que está próximo, é ver o que está ao redor, conversar com quem estiver perto, saber o que está acontecendo.<br /><br />
                  Ele crê que é preciso participar do mundo imediato e a sua vitalidade é ampliada por ele.<br /><br />
                  O interesse pelo mundo ao redor a leva cedo na vida a desenvolver a habilidade de se comunicar, de fazer uma ponte entre ela e o mundo. A sua forma de se comunicar é peculiar e tem uma marca pessoal. <br />`,

                  `Indica a necessidade de comunicação e pode se dedicar a viagens, mídia ou educação. Gosta de conversar e racionalizar os sentimentos.<br /><br />
                  Tem natureza inquieta e curiosa, mas pouca concentração e se aborrece com facilidade. Busca sempre por novidades.<br /><br />
                  Absorve informação casualmente, através dos outros, tendendo a estar constantemente aprendendo e transmitindo informação aos outros.<br /><br />
                  Os pais podem ser inteligentes, intelectuais ou apreciarem a leitura. Tem afinidade com profissões ligadas à comunicação, transportes e pode se dedicar a hobbies ligados a essas áreas. <br />`,

                  `...`,

                  `Mercúrio na Terceira Casa está favorecido, tende a proporcionar uma habilidade intelectual superior. Há talento e interesse por todos os tipos de comunicação.<br /><br />
                  Os nativos com esta posição são bons escritores e oradores, com muita originalidade e agilidade mental.<br /><br />
                  Viagens curtas e constante comunicação com irmãos, irmãs e vizinhos são características desta posição, e grande parte do tempo é gasto no telefone, nas redes sociais ou escrevendo mensagens.<br /><br />
                  É preciso cuidado com problemas devido ao discurso indiscreto ou informações falsas, incompletas ou errôneas.<br /><br />
                  Os nativos são competentes na busca de soluções práticas para todos os tipos de problemas. São bons secretários, telefonistas, repórteres, editores e redatores de textos. <br />`,

                  `Vênus na Terceira Casa indica interesse intelectual em atividades artísticas e culturais. Há um amor especial pela literatura e pela poesia.<br /><br />
                  Capacidade de se comunicar harmoniosamente por meio da fala e da escrita. As pessoas com esta posição podem ser bons artistas, eruditos e escritores.<br /><br />
                  Há muita movimentação e viagens curtas, por prazer e obrigação social. As pessoas com Vênus na casa 3 tendem a analisar os relacionamentos românticos e contatos sociais de maneira intelectual.<br /><br />
                  Geralmente se comunicam facilmente com os seus cônjuges e amigos íntimos. Têm bom relacionamento com irmãos, irmãs e vizinhos.<br /><br />
                  Os contatos sociais e românticos são realizados com vizinhos ou pessoas conhecidas em atividades comunitárias e intelectuais.<br /><br />
                  São pessoas que escrevem lindas mensagens de amor e poemas românticos. As relações sociais e românticas estabelecidas por intermédio de jornais ou redes sociais provavelmente são resultado de Vênus na casa 3. <br />`,

                  `Marte na Terceira Casa indica um intelecto agressivo, ativo. A habilidade mental assegura um raciocínio rápido em situações de emergência.<br /><br />
                  Contudo, há uma tendência a tirar conclusões precipitadas. Os nativos com Marte na Terceira Casa podem ser diretos, impulsivos e algumas vezes sarcásticos no seu discurso.<br /><br />
                  Fazem valer seus direitos de forma agressiva, visando obter ou transmitir informações. Muitos repórteres e comentaristas políticos possuem Marte nesta casa.<br /><br />
                  Não devemos esquecer que Marte tem ligação com a política, pela sua exaltação em Capricórnio.<br /><br />
                  As pessoas com esta posição com frequência trabalham com os mecanismos relacionados à comunicação, como telefones ou telefonia, redes sociais, impressoras ou transporte de correspondência.<br /><br />
                  Pessoas que trabalham com transporte de máquinas e mecânicos de automóveis também têm probabilidades de ter Marte nesta casa.<br /><br />
                  Há muita impulsividade nos movimentos diários e em viagens curtas. É preciso cuidado, esta posição pode produzir motoristas imprudentes.<br /><br />
                  Eles tendem a zangar-se com o que consideram estupidez de outros motoristas, porém não percebem que eles próprios muitas vezes são culpados dos mesmos atos.<br /><br />
                  É preciso observar se há tendência à discussão. Por causa da imprudência, podem ocorrer problemas com contratos, acordos, publicações e nas relações com irmãos, irmãs e vizinhos. <br />`,

                  `Júpiter na Terceira Casa indica uma mentalidade otimista, filosófica e espiritualmente dirigida.<br /><br />
                  Há interesse pela expansão mental nas áreas de educação, filosofia, ensino, publicações, religião, comunicação e viagens.<br /><br />
                  Geralmente o pensamento é compatível com as crenças e os tipos dominantes de comunicação da cultura.<br /><br />
                  Esta posição faz com que o nativo goste de viajar. Por isso muito tempo pode ser gasto em viagens curtas e longas.<br /><br />
                  Há muita curiosidade com relação às tendências do pensamento social e dos meios de comunicação manifestados por todas as formas de escrita e discurso.<br /><br />
                  Essas pessoas podem ser bons analistas, comentaristas sociais e políticos muito perspicazes. Esta posição pode proporcionar bons relacionamentos com irmãos, irmãs e pessoas próximas.<br /><br />
                  É preciso cuidado com excesso de confiança ou imprudência para evitar o perigo de acidentes durante viagens. Contudo, na maioria dos casos, o nativo não é fisicamente prejudicado. <br />`,

                  `Saturno na Terceira Casa indica disciplina mental e senso prático: as ideias são julgadas por sua utilidade. O discurso tende a ser objetivo e deliberado.<br /><br />
                  As habilidades matemáticas e científicas são evidentes, devido à paciência e ao método que Saturno proporciona ao processo de raciocínio.<br /><br />
                  Com frequência, os nativos com esta posição trabalham em publicações, na imprensa e nos meios de comunicação.<br /><br />
                  São bons contadores, secretários, pesquisadores, bibliotecários, escritores e professores. São cuidadosos com contratos e cautelosos ao assinar papéis ou fazer acordos.<br /><br />
                  Não gostam muito de viajar, a não ser por motivos de negócios. As atividades nos negócios podem exigir muitos intercâmbios de mensagens.<br /><br />
                  Podem ocorrer relações difíceis com irmãos, irmãs e vizinhos. É preciso observar se há excesso de preocupações e pensamentos negativos, capazes de provocar queixas e críticas.<br /><br />
                  Podem surgir algumas dificuldades ou desilusões na educação ou no treino profissional.<br /><br />
                  Mas se houver empenho e perseverança, o nativo consegue adquirir conhecimentos valiosos e aprendizados importantes ao longo da vida, para que avance profissionalmente. <br />`,

                  `A mente do nativo é rápida e original. Gosta de experimentar novas ideias e conceitos, especialmente aqueles considerados como radicais pela média das pessoas.<br /><br />
                  Há certo prazer em perturbar e chocar as pessoas com palavras. Suas ideias não são tão diferentes, mas pode haver o gosto de desafiar opiniões, especialmente aquelas cristalizadas.<br /><br />
                  Quando alguém faz uma declaração sobre o que acredita, frequentemente vem a vontade de argumentar e contradizer essas opiniões para ver qual é a reação.<br /><br />
                  É preciso cuidado com a comunicação rebelde. A mente pode ser indisciplinada por não conseguir concentrar-se em um único assunto. Este posicionamento pode trazer algum nervosismo.<br /><br />
                  Exercícios de respiração, yoga e terapias de relaxamento são recomendados. A relação com irmãos também pode ser muito mutável. <br />`,

                  `Netuno nessa casa inspira o nativo a se encantar com as pequenas coisas. Se expressa e aprende melhor através de imagens, emoções e metáforas.<br /><br />
                  Pode haver dificuldade para se expressar e comunicar com clareza, gerando confusão e mal entendidos. Na infância, pode ter sido uma criança que fugia da realidade.<br /><br />
                  As crianças com esta posição apresentam uma sensibilidade extrema, sentem-se à margem do que as rodeia e se refugiam no seu mundo imaginário.<br /><br />
                  A dificuldade de concentração, a confusão na organização de ideias pode de causado problemas na escola. Em processos de aprendizagem a mente pode ter se dispersado em sentimentos e pensamentos paralelos.<br /><br />
                  O nativo é muito poético e pode aprender a se expressar criativamente, graças à sua capacidade de abstração.<br /><br />
                  O desafio é desenvolver a predisposição para lidar com a inspiração, a sensibilidade e a mediunidade. Disponibilizar a sua sensibilidade mental, criativa e artística para fins superiores.<br /><br />
                  É conveniente seguir o caminho das artes para canalizar a sua sensibilidade, aptidão e capacidade de expressão pictórica.<br /><br />
                  Pode ser um contador de histórias, aprender música, pintura ou literatura. Ou ainda cinema, vídeos e fotografia. O nativo sonha acordado e pode ter alguns insights, ideias intuitivas, visualizações.<br /><br />
                  É guiado pela intuição e se adapta bem aos ambientes sociais. Ajudas, respostas e indicações podem surgir do nada. Tende a seguir o caminho do coração e o caminho mais belo. <br />`,

                  `Plutão nesta casa indica uma mente penetrante, capaz de compreender os motivos fundamentais das experiências e manifestações da vida.<br /><br />
                  O nativo com esta posição geralmente tem opiniões fortes, que não expressará a não ser que possa manifestá-las de maneira eficaz.<br /><br />
                  Em todo caso, não compromete suas crenças a não ser que evidências reais mostrem que estão erradas.<br /><br />
                  As suas ideias originais atraem amigos e parceiros que podem ajudá-lo a utilizar e melhorar seus projetos.<br /><br />
                  Esta posição proporciona engenhosidade mental e habilidade científica. Pode também haver interesse no estudo de assuntos ocultos.<br /><br />
                  Na via negativa, intrigas podem provocar dificuldades com irmãos, irmãs, vizinhos ou pessoas próximas.<br /><br />
                  Essa dificuldade também pode ocorrer com colaboradores, instituições que representam os valores da ordem social e inimigos secretos.<br /><br />
                  Pelas circunstâncias mais diversas, o nativo geralmente é responsável por informações exclusivas ou secretas, relacionadas a assuntos de grande importância.<br /><br />
                  Tudo que transmite e pensa pode ter sérias consequências. O nativo também tende a viajar em segredo por razões misteriosas, passando por estranhas experiências no decorrer de suas viagens. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo buscou o desenvolvimento racional. Em seus intercâmbios obteve informações variadas de muitas pessoas.<br /><br />
                  Pode haver ênfase demais na mente concreta e lógica, em detrimento da mente intuitiva e abstrata. Perdeu-se dos seus pensamentos e sentimentos, adiando decisões, dispersando-se.<br /><br />
                  Há o perigo de se tornar provinciano demais, O caminho da evolução é aprender que o mundo não é só conhecimento e informação.<br /><br />
                  Cultivando uma via filosófica ou espiritual, despertará em si qualidades de síntese, falando menos e ouvindo mais, aprofundando a sua reflexão, concentrando-se mais em ideias e menos em palavras.<br /><br />
                  Assim pode desenvolver o lado mais intuitivo, criativo e sensível do cérebro. O nativo deve buscar Sabedoria, expandir seu conhecimento explorando outras culturas e sistemas de crença. Viajar o ajuda a ampliar sua perspectiva.<br /><br />
                  O nativo pode encontrar seu maior sucesso longe do local de nascimento. Pode partilhar seu conhecimento através do ensino e da comunicação. Para alguns, a vida será muito influenciada por um estrangeiro. <br />`,

                  `Essa posição revela boa capacidade de comunicação e de aprendizado. Capacidade para enfrentar os obstáculos encontrados no ambiente imediato para lidar eficazmente com o problema.<br /><br />
                  Avaliar e assimilar, de forma inteligente, os valores intelectuais e culturais que o cercam. Em seu processo de crescimento, o nativo se esforça para alcançar estes fins e para comunicar suas ideias ou sentimentos aos outros.<br /><br />
                  Esse é o caminho da felicidade. Em certos casos, quando esta tendência natural é frustrada pelas circunstancias, a mente pode ficar tensa, tornar-se impiedosa e destrutiva.<br /><br />
                  Tudo está centralizado em torno de uma luta de vontades ou de ideologias. Nos primeiros anos de vida a tendência é procurar um “Exemplo” e seguir seu curso de ação, para depois tentar seguir um passo adiante.<br /><br />
                  O nativo deve buscar conhecimento, aprendizado constante, interação, comunicação e mobilidade, de forma geminiana: com análise e reflexão, trocando ideias, cultivando adaptabilidade, sempre questionando e sempre aberto para assimilar novos conceitos.<br /><br />
                  É preciso cultivar os dons de comunicação e expressão para alcançar o sucesso que tanto almeja. <br />`,

                  `Quíron na casa 3 representa um desafio com irmãos, vizinhos e comunicação. Se o nativo tem irmãos, eles podem ser a fonte de sofrimentos e problemas.<br /><br />
                  Se não tem, o sofrimento é pela falta de irmãos. Da mesma forma, os vizinhos e colegas próximos podem ser fonte de frustração e sofrimento.<br /><br />
                  O nativo pode ter problemas para se comunicar, se expressar ou não se sente compreendido.<br /><br />
                  Pode existir ainda problemas na fala, audição ou de movimentos. Em alguns casos, indica que não foi muito ouvido quando criança e assim desencadeia um processo de se fazer ouvir.<br /><br />
                  Não importa quanto os outros lhe deem atenção, continua a sentir a dor que sentia na infância. Reconhecer essa dor e superá-la é o primeiro passo para se livrar da dor de Quíron na casa 3.<br /><br />
                  Essa é uma posição de Quíron que indica um fonoaudiólogo, alguém que se dedica a ajudar aos outros a falar melhor do que a si mesmo, ou um professor de braile para cegos ou para surdos-mudos, por exemplo. <br />`,

                  `A comunicação é uma prioridade nos relacionamentos e se tornam significativos quando há troca de ideias e experiências que possam proporcionar aprendizado.<br /><br />
                  Pode estabelecer parcerias em áreas de comunicação, áreas de aprendizagem, transporte ou conhecer parceiros durante viagens curtas, através de irmãos e da vizinhança.<br /><br />
                  Também e m cursos de línguas ou cursos de pequena duração, pela internet, cartas, telefonemas e outros meios de comunicação.<br /><br />
                  Juno nesta casa inspira uma parceria onde sintonia intelectual, estímulos, novidades e constantes intercâmbios. <br />`,

                  `O nativo se vê confrontado com um problema de comunicação de origem cármica.<br /><br />
                  Nas vidas passadas, não conseguiu se comunicar realmente com os outros. Seu espírito crítico e seus preconceitos o haviam impedido de fazê-lo.<br /><br />
                  Demasiadamente racional e intelectual, não sabia promover intercâmbios no plano das emoções, nem partilhar o entusiasmo dos outros.<br /><br />
                  Essa posição de Mercúrio indica também um mau contato com irmãos e primos numa vida passada.<br /><br />
                  Essa atitude pode e deve ser superada com uma postura mais amorosa, aberta, simples e fraternal para com os parentes e as pessoas próximas. <br />`,

                  `Neste signo o nativo tem algo a aprender no campo da comunicação com os outros:<br /><br />
                  Em vidas passadas, seus discursos agressivos, canhestros ou indelicados haviam afastado os que o cercavam, particularmente seus irmãos e irmãs, primos e na escola até os seus colegas.<br /><br />
                  Há tendência de não se sincronizar na maioria de seus relacionamentos. Ama demais ou de menos em relação ao amor recebido. Ou, então, seu amor se torna fora de sintonia na dimensão do tempo.<br /><br />
                  Pode sentir um grande amor por uma pessoa enquanto se prepara para estar com ela, mas se desanima durante o contato pessoal e depois olhando para trás e o recria em sua mente.<br /><br />
                  Assim, cria problemas afetivos sem viver os relacionamentos no aqui e no agora. Passa muito tempo analisando tudo o que sente.<br /><br />
                  As qualidades mutáveis da casa 3 dificultam a pessoa da sintonia mental com seus próprios sentimentos.<br /><br />
                  Sente-se inseguro, especialmente com as pessoas da própria idade. Para sentir-se aceito, pode dizer ou fazer coisas que sabe que não são suas.<br /><br />
                  Deverá aprender a se amar, a se controlar, usar de integridade e sinceridade. Sobretudo a usar de mais tato nas relações faladas ou escritas com seus parentes e pessoas próximas. <br />`,

                  `Esta posição de Marte sugere vidas anteriores nas quais as relações com irmãos, irmãs e primos tinham sido conflituosas e mal vividas.<br /><br />
                  O nativo, recusando-se a se dobrar a qualquer disciplina coletiva, era sempre o aluno com problemas, o semeador de desordens e a ovelha negra de todos os professores.<br /><br />
                  A lição cármica buscada na vida atual é a aceitação de uma disciplina mental e intelectual, assim como maior prudência nos intercâmbios, na expressão escrita ou falada. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Como esta casa está relacionada com a atividade mental, deduzimos que o nativo teve problemas escolares.<br /><br />
                  Por outro lado, seu juízo não é muito firme. Recusou a disciplina necessária aos estudos. Pode ter havido falta de tato nas palavras, incapacidade de se calar.<br /><br />
                  Esta posição de Júpiter supõe uma falta de fé, uma recusa em levar a sério qualquer via espiritual ou religiosa. Há indicações de más relações com irmãos, primos e pessoas próximas.<br /><br />
                  O nativo deve se esforçar agora para se desprender do seu ego inferior. Esquecer a si próprio e com humildade aprender a pedir conselhos.<br /><br />
                  Deve começar por aplicar a ética e os bons princípios com seus parentes. Não se mostrar demasiado autoritário para com eles. Ter mais cuidado com as palavras, saber se calar. <br />`,

                  `Saturno está num setor do mapa que diz respeito aos irmãos e às irmãs, aos primos, aos colegas da escola e da universidade, à vida intelectual.<br /><br />
                  Em algumas de suas vidas anteriores, o nativo foi frio em suas relações, recusava-se a se comunicar com seus semelhantes.<br /><br />
                  Provavelmente também tinha responsabilidades familiares para com seus irmãos, primos e irmãs, que não assumiu.<br /><br />
                  Essas relações retornam com força na vida atual, solicitando com mais insistência ainda esta pessoa, que só tem, realmente, uma coisa a fazer: ajudar bravamente os seus, não lhes recusar sua afeição, seu tempo e seu dinheiro.<br /><br />
                  Deve também aprender a se comunicar com os outros de forma mais calorosa e assertiva. Sem agressividade, nem refúgio no mutismo. <br />`,

                  `Urano na Terceira Casa indica pessoas com mentes incomuns, intuitivas. Os nativos são livres-pensadores, formam as suas opiniões baseadas na experiência direta e em factos científicos.<br /><br />
                  A sua opinião não é influenciada pelos outros. Impessoais e imparciais na avaliação de ideias, os nativos estão sempre investigando áreas de interesse incomuns.<br /><br />
                  Essa exploração acarreta muita movimentação e viagens inesperadas. São abertas a novas ideias, que, com frequência, recebem através de súbitos insights.<br /><br />
                  Consequentemente, muitos inventores e os cientistas também têm Urano no mapa na Terceira Casa.<br /><br />
                  Essas pessoas tendem a expor ideias revolucionárias, procuram amizades e atividades em grupos intelectuais, que lhes proporcionarão estímulo mental e progresso educacional.<br /><br />
                  Mesmo os relacionamentos com irmãos, irmãs e vizinhos com frequência são diferentes e estimulantes. Essa posição produz muitos escritores de assuntos astrológicos, científicos ou ocultos.<br /><br />
                  Os nativos também podem se envolver com meios de comunicação em massa e redes sociais. No seu pior, a mente pode ser inquieta, pouco prática e volúvel.<br /><br />
                  Pode haver muitas conclusões precipitadas e frequentes mudanças de opinião. <br />`,

                  `Em vidas passadas, o nativo não conseguiu estabelecer nenhuma relação verdadeira com seus irmãos, seus colegas de escola, com as pessoas de sua geração.<br /><br />
                  Os hábitos de desonestidade intelectual adquiridos em sua juventude traduziram-se mais tarde numa personalidade indefinida.<br /><br />
                  Em outras palavras, na ausência de uma verdadeira personalidade. Decepcionante para seus companheiros, para seus parentes, pode ter sido um oportunista. Seu juízo estava confuso.<br /><br />
                  Na vida atual, deve esforçar-se por ser íntegro e verdadeiro. Esta posição netuniana indica um carma especial para com irmãos e irmãs, primos e pessoas próximas, que o nativo deve ajudar caridosamente. <br />`,

                  `Responsabilidades familiares, esquivadas nas vidas passadas, podem reaparecer: irmãos, irmãs, primos e pessoas próximas, de quem o nativo deveria ter cuidado outrora.<br /><br />
                  Nesta vida pode ter que trabalhar para permitir-lhes estudar, muitas vezes sacrificando seus próprios estudos. As provações desta vida presente lhe virão, sobretudo, dessa carga familiar cármica.<br /><br />
                  Por vezes também dos seus colegas de escola, quando se exige que responsabilidades anteriores sejam novamente assumidas.<br /><br />
                  A transformação é a purificação de Plutão também se dá no campo das ideias, na transformação de crenças e pensamentos limitantes.<br /><br />
                  Na forma com que o nativo promove intercâmbios e negociações - estas devem ser justas, íntegras e conscientes. <br />`,

                  `Quíron na casa 3 representa um desafio com irmãos, vizinhos e comunicação. Se a pessoa tem irmãos, eles podem ser a fonte de sofrimentos e problemas. Se não tem, o sofrimento é pela falta de irmãos.<br /><br />
                  Da mesma forma, os vizinhos e colegas próximos podem ser fonte de frustração e sofrimento. Pode ter problemas para se comunicar, se expressar ou a pessoa não se sente compreendida.<br /><br />
                  Podem existir ainda problemas na fala, audição ou de movimentos. Em alguns casos, indica que não foi muito ouvido quando criança e assim desencadeia um processo de se fazer ouvir.<br /><br />
                  Não importa quanto os outros lhe dê atenção, ela continua a sentir a dor que sentia na infância. Reconhecer essa dor e superá-la, é o primeiro passo para se livrar da dor de Quíron na casa 3.<br /><br />
                  Essa é uma posição de Quíron que indica um fonoaudiólogo, alguém que se dedica a ajudar aos outros a falar melhor do que a si mesmo, ou um professor de braile para cegos ou para surdos-mudos. <br />`,

                  `Possível sucesso em carreiras de comunicação ou no comércio. Se a pessoa nestas profissões, ocupar um lugar onde se destaque e brilhe.<br /><br />
                  Importância de trocas mentais e intelectuais numa parceria. No mapa de um homem mostra uma esposa/parceira, espontânea e esperta, viva.<br /><br />
                  Também no casamento essa mulher se comportará sempre de forma muito jovial, e tentará preservar seus comportamentos de juventude. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 04</strong>`,
            text: [
                  `Na casa 4, a procura da própria identidade passa pelas raízes, pelas heranças familiares, pelos padrões ancestrais e a vida em família.<br /><br />
                  É exigida do nativo uma iluminação consciente dos padrões emocionais, através da investigação e integração interiores.<br /><br />
                  É preciso se diferenciar e afirmar no meio dos fortes condicionamentos infantis e das poderosas tradições familiares, de modo que ela consiga criar um espaço para fincar suas próprias raízes, únicas e luminosas, com mais liberdade e sem culpas.<br /><br />
                  Com o Sol na Casa 4, há necessidade de vida familiar. Porém o desafio é criar independência para adquirir uma percepção do sentido e propósito da vida.<br /><br />
                  Do contrário, as mudanças na composição familiar e nos relacionamentos entre os membros da família e com filhos que crescem pais que morrem e irmãos que se casam e desestruturam a consciência do nativo.<br /><br />
                  Quando consegue se libertar dos primeiros condicionamentos ou encontra um caminho que o leva a redefinir seu senso identidade, então o nativo passa a olhar para as suas raízes verdadeiras, fruto da existência de todos os seus ancestrais, mas com características que só ele pode cultivar.<br /><br />
                  É possível olhar para as bases da infância como o que realmente são: o berço de onde viemos com o objetivo de construir uma vida adulta bem sucedida, permitindo que a individualidade se desenvolva.<br /><br />
                  Quando essa consciência se torna mais clara, então deixa de gastar energia seguindo o caminho socialmente aceito ou planejado pela família e vai em busca do prazer do próprio caminho.<br /><br />
                  O nativo guarda um sentimento de clã e de família e, quando gosta de alguém, aquela pessoa passa a fazer parte do seu mundo.<br /><br />
                  Possui o dom do acolhimento e de tornar especial o local em que vive. Seu interior é aconchegante e pode iluminar a vida íntima, o convívio familiar. <br />`,

                  `A quarta casa é a morada natural da Lua devido a sua associação com o signo de Câncer que é regido pela Lua.<br /><br />
                  Há uma tendência de buscar autonomia no trabalho, preferindo realizar uma atividade em casa, num negócio próprio.<br /><br />
                  Isto porque se sente nervoso diante do mundo exterior e prefere estar em casa. Tem forte ligação com os pais. Só se separa deles devido a circunstâncias que fogem ao seu controle.<br /><br />
                  Pode ter pouca confiança em si mesmo devido a problemas na infância. Precisa de amor e afeto, por isso deve evitar pessoas destrutivas que podem magoá-lo.<br /><br />
                  Pode ter uma simpatia maior pelos fracos e desamparados e até um amor especial pelos animais.<br /><br />
                  Pode se sentir atraído pelo passado e se dedicar a profissões que lidam com antiguidades, ancestralidade, memória ou que guarde valores, como também pode gostar de colecionar.<br /><br />
                  Tem um forte impulso de viver e aprecia muito os momentos que podem estar perto do mar. <br />`,

                  `...`,

                  `Mercúrio na Quarta Casa indica pode haver muita atividade educacional e intelectual no lar. Os nativos com esta posição com frequência possuem pais bem educados.<br /><br />
                  Tendem a investigar a sua árvore genealógica e a história dos seus ancestrais. O lar provavelmente será utilizado como um local de trabalho, porque Mercúrio rege Virgem e a Sexta Casa, que lida com o trabalho.<br /><br />
                  Com frequência possuem amplas bibliotecas em casa e passam muito tempo com as suas famílias, envolvidos em atividades intelectuais.<br /><br />
                  O lar pode se tornar um centro de relações sociais da vizinhança. São pessoas que costumam transformar a leitura do jornal num ritual diário durante o café da manhã.<br /><br />
                  Mercúrio nesta casa pode indicar um interesse por bens imobiliários, agricultura, ciências da terra (como Geologia) e pelos problemas ecológicos e ambientais.<br /><br />
                  O nativo pode escrever a respeito dessas questões. Possuem condições para mudar de casa ou se movimentar com frequência, viver em trailers ou de algum modo procurar uma vida nômade. <br />`,

                  `Vênus na Quarta Casa indica ligação emocional com o lar e o cenário doméstico. Os relacionamentos com os membros da família tendem a ser harmoniosos.<br /><br />
                  Os nativos gostam de receber seus amigos íntimos e namorados em casa, onde podem cozinhar para eles e criar um ambiente aconchegante, acolhedor e pessoal.<br /><br />
                  O lar desses nativos é sempre artisticamente decorado, de maneira tão bela quanto suas posses lhes permitam.<br /><br />
                  A proximidade emocional com os pais está favorecida e muita alegria pode vir por intermédio deles. Heranças podem vir dos pais.<br /><br />
                  Há a promessa de beleza e conforto no final da vida. Há amor pela terra, flores, jardinagem e vegetação exuberante e um amor patriótico pelas belezas naturais da terra natal. <br />`,

                  `Marte na Quarta Casa indica que muita energia é empregada no lar e existe o desejo de controlar o cenário doméstico. Isso pode ser motivo de desavenças familiares.<br /><br />
                  São realizados esforços vigorosos para melhorar o lar. As pessoas com esta posição de Marte frequentemente gostam de fazer consertos.<br /><br />
                  Pode haver também um interesse ativo pelos problemas ambientais e ecológicos. Marte nessa casa pode produzir pessoas que trabalham muito para melhorar o meio ambiente.<br /><br />
                  Pode haver conflitos com os pais. Essas pessoas necessitam melhorar o equilíbrio e o controle emocional para obter harmonia no lar.<br /><br />
                  Com frequência, melhores relações familiares podem ser mantidas se os nativos se afastarem do local de nascimento.<br /><br />
                  Esta posição proporciona uma constituição forte e muita energia, que são mantidas até idade avançada. <br />`,

                  `Esta posição de Júpiter oferece relacionamentos familiares agradáveis, segurança, conforto e tranquilidade no lar e em todos os assuntos domésticos.<br /><br />
                  Como os nativos geralmente pertencem a famílias financeiramente seguras, com boa posição na comunidade, obtêm muitos benefícios sociais e educacionais.<br /><br />
                  Esta posição também proporciona boa sorte em geral na segunda metade da vida. Essas pessoas com frequência herdam terras e propriedades dos pais ou outros membros da família.<br /><br />
                  Júpiter na casa 4 indica também harmonia familiar em relação aos padrões religiosos e morais. Os pais proporcionam bons ensinamentos religiosos e morais no início da vida.<br /><br />
                  O nativo geralmente conta com um amplo círculo familiar e casas amplas. O lar pode ser utilizado como centro de atividades religiosas, sociais, filosóficas e educacionais.<br /><br />
                  Se Júpiter estiver em harmonia com outros planetas, os benefícios materiais e espirituais se originarão no local de nascimento.<br /><br />
                  Mas também pode ser uma boa ideia deixar o local de nascimento e se estabelecer em outro lugar.<br /><br />
                  É preciso cuidado com exageros e excesso de otimismo, como por exemplo, contrair dívidas em família para mantê los de acordo com o modo de vida ao qual estão habituados.<br /><br />
                  É preciso observar se há limitação por crenças religiosas antiquadas impostas por membros da família. <br />`,

                  `Saturno na Quarta Casa indica pesadas responsabilidades no lar e na família. Os pais dos nativos geralmente são rígidos, conservadores e podem ser um fardo nos últimos anos.<br /><br />
                  Pode haver afastamento emocional da família. É preciso aprender a lidar com as frustrações emocionais para superá-las.<br /><br />
                  Ao longo da vida esses desafios o levarão a amadurecer, mas é preciso cuidado para não endurecer os sentimentos. Os nativos com frequência precisam lutar para obter segurança no lar e sustentar suas famílias.<br /><br />
                  As atividades profissionais e nos negócios provavelmente se dirigem para bens imobiliários, construção, contratos, agricultura ou fabricação de produtos domésticos.<br /><br />
                  Esta posição de Saturno indica cuidados na administração do lar, propriedades e possibilidade de receber heranças. O nativo procura preservar essas coisas, para que mais tarde possam ter segurança.<br /><br />
                  Se conseguir superar os receios emocionais, torna-se capaz de construir uma família bem estruturada, sendo aquele que oferece segurança.<br /><br />
                  Geralmente se tornam mais solitários ou introvertidos nos últimos anos de sua vida. <br />`,

                  `Muitas vezes Urano na casa 4 traz indícios de dificuldades na infância ou na juventude, ou de alguma mudança súbita que altera o curso normal nessa época da vida.<br /><br />
                  Se os pais conseguem dar o suporte adequado, isso não precisa ser necessariamente um problema. Pode indicar certo desprendimento da família de origem, que pode resultar em um espírito livre de raízes.<br /><br />
                  Por outro lado, pode advir insegurança causada por súbitas rupturas na vida pessoal. As mudanças de domicílio podem ser frequentes e inesperadas ao longo da vida.<br /><br />
                  Caso isso não ocorra a mudança deve acontecer dentro da casa através de frequentes e súbitas trocas de decoração, por exemplo. As relações com os pais podem fugir dos padrões convencionais.<br /><br />
                  Há indicações da possibilidade de afastar-se de um dos pais (ou de ambos) durante a infância ou adolescência.<br /><br />
                  O ambiente familiar, a residência, pode ser bastante peculiar. Provável desapego pode levar a não ter uma casa própria.<br /><br />
                  A dificuldade em viver apenas em um lugar e espírito livre reflete-se na vida afetiva. O coração é como o lar: anseia por mudança.<br /><br />
                  Se a outra pessoa necessita de segurança, esse padrão afeito à mudança pode tornar impraticável o relacionamento.<br /><br />
                  Por essa razão deve ser escolhida uma pessoa cuja segurança deve ser de dentro para fora e não de fora para dentro. <br />`,

                  `Netuno rege o mar. Portanto, há possibilidade do nativo no litoral. Este planeta também rege os órfãos e orfanatos (locais de restrição em geral).<br /><br />
                  O nativo pode ter pais confusos e nebulosos, ausentes das necessidades emocionais dos filhos.<br /><br />
                  O nativo sonha em construir uma família feliz. Os assuntos emocionais tendem a ser amplificados. Pode desenvolver uma ligação de telepatia, uma sintonia especial com os familiares.<br /><br />
                  Especialmente com a mãe.  Para uma relação mais objetiva com os seus familiares, deve colocar os pés no chão, fazer um esforço maior para amadurecer e se individualizar.<br /><br />
                  Na infância, o que for vivido no ambiente familiar impressiona profundamente.<br /><br />
                  Netuno pode exigir ajustamentos na esfera familiar: pessoas doentes em casa, responsabilidades com parentes em dificuldades ou alguém da família pode precisar de apoio.<br /><br />
                  É possível se desiludir e ter de trabalhar as consequências destas feridas emocionais.<br /><br />
                  Vítima de exigências, o nativo pode ter se sentido carente por não receber o carinho e atenção que seria suposto. Se a família lhe exige muita doação e dedicação, pode se sentir vítima ou usado.<br /><br />
                  Netuno nessa casa pode se manifestar por vários ângulos, o nativo pode ser visto como espiritualizado, artista, pessoa perdida, confusa ou tudo ao mesmo tempo.<br /><br />
                  Seus familiares também. Quando adulto, pode optar por uma nova família onde possa viver a sua sensibilidade especial.<br /><br />
                  Na via positiva, pode desenvolver o amor incondicional com seus familiares e conquistar o amor e carinho de todos.<br /><br />
                  Pode esforçar-se para conseguir entender os elementos da família. Terapias ajudam a processar seu profundo e amplo mundo emocional.<br /><br />
                  Aconselhável desenvolver sua sensibilidade artística e espiritualidade. O lar pode se tornar um templo, onde tudo é cuidado com carinho, onde reina a beleza, a boa música e os valores mais elevados. <br />`,

                  `Plutão nesta indica o desejo de ser o senhor de seu próprio lar e do ambiente doméstico. É preciso cuidado com uma atitude excessivamente dominadora, que pode afastar outros membros da família.<br /><br />
                  Contudo, uma profunda habilidade para perceber a essência da vida possibilita sustentar e melhorar a situação doméstica.<br /><br />
                  Plutão indica que pode ter havido uma perda na família, vivenciada nos primeiros anos de vida do nativo. Há a possibilidade do nativo interessar-se por ocultismo nos anos mais avançados de vida.<br /><br />
                  Podem também ocorrer circunstâncias misteriosas ou ocultas com relação ao lar e à família. Existe também o perigo de brigas e segredos com membros da família ou outros moradores da casa.<br /><br />
                  Uma forte ligação oculta com a terra pode se manifestar no amor pela natureza, no interesse por ecologia ou conservação, ou na habilidade para conhecer os segredos da terra através de atividades como mergulho, estudo de geologia ou outros meios. <br />`,

                  `O nodo sul mostra que em vidas passadas houve muito envolvimento familiar, com muita emotividade, excessiva susceptibilidade e imaturidade emocional.<br /><br />
                  Ficar preso ao lar, cuidar apenas da casa e da família não é suficiente. É preciso superar os medos, a tendência à reclusão ou à introspecção para que conquiste o sucesso profissional.<br /><br />
                  O caminho da evolução é aprender a se dedicar a outras esferas da vida além do envolvimento familiar assumindo a responsabilidade sozinha.<br /><br />
                  É preciso crescer e amadurecer, aventurando-se no desconhecido, para fora da base do lar. Isso pode contribuir com sua integração no mundo e com a sua maturidade emocional.<br /><br />
                  Pode ajudá-lo a equilibrar tendências à introspecções mórbidas ou a esconder o self, encontrando empregos ou carreiras que de algum modo sirvam à coletividade.<br /><br />
                  Desenvolver o empreendedorismo, cultivar metas claras, propósitos de projeção profissional.<br /><br />
                  Desenvolver também as qualidades de liderança, o sentido da própria autoridade, do poder e utilidade através de uma carreira. <br />`,

                  `O caminho da felicidade é cultivar o sentimento do lar e das raízes. Procurar uma base adequada para a integração da personalidade, sobre a qual construir a ambição pessoal, deverá ser da maior importância.<br /><br />
                  A felicidade exige uma sensação de estabilidade, uma sensação de estar em contato com valores permanentes, conceitos sólidos, ligações emocionais e afetivas.<br /><br />
                  Em alguns nativos a estabilidade poderá ser encontrada totalmente dentro de si mesmo. Contudo, a necessidade de descobrir outros que partilham esta maneira de ser ainda é básica.<br /><br />
                  “Lar” requer outras pessoas. A verdadeira integração da personalidade requer um quadro de referencias, uma comunidade que proporcione sentido e propósito aos esforços do indivíduo.<br /><br />
                  O nativo deve buscar privacidade e conforto, o seu espaço, seu lugar seguro, de forma canceriana: com cuidado, zelo e capricho. Cultivar sua intuição e sensibilidade.<br /><br />
                  O Ponto de iluminação também representa a possibilidade de encontrar satisfação de uma forma mais ampla, através da identificação com um todo social, profissional ou nacional.<br /><br />
                  O <strong> Presidente Kennedy</strong>  é uma ilustração significativa desta posição da Roda da Fortuna na quarta casa. <br />`,

                  `Quando Quíron está na casa 4 pode indicar problemas familiares ou com os pais.<br /><br />
                  É provável que passe a vida desejando ter um lar ou uma casa, mas há sempre algo que impede de usufruir de um lar ou do aconchego de uma família.<br /><br />
                  E mesmo que tenha uma casa, terá tantas obrigações externas que nunca permitirá estar junto da família ou em casa, ou tenha dificuldade de sentir bem estar em qualquer outro lugar.<br /><br />
                  Em alguns casos o pai pode ter uma doença crônica ou esteja ausente fisicamente ou emocionalmente, ou ter uma deficiente estrutura familiar, frieza afetiva ou abandono por parte de um dos progenitores.<br /><br />
                  Pode passar a infância numa creche ou o sofrimento pode advir devido ao divórcio dos pais ou à morte de um familiar muito querido.<br /><br />
                  Assim a pessoa sente necessidade de ajudar pessoas abandonadas pelos pais ou que não tem um lar, porque assim consegue compreender e superar sua dor.<br /><br />
                  Existe a tendência a ajudar os outros abrigando-os em sua própria casa ou ajudar outros a terem suas casas e família, enquanto o seu lugar está em ruínas. <br />`,

                  `A segurança emocional e laços íntimos fortes são essenciais para que um relacionamento se estabeleça.<br /><br />
                  O nativo considera mais importantes as pessoas que compartilham de sua intimidade familiar ou do ambiente doméstico.<br /><br />
                  Pode estabelecer parcerias com pessoas da família ou durante eventos familiares, na área de administração de imóveis, construções imobiliárias, antiquários, museus, etc.<br /><br />
                  A parceria ideal é aquela que costuma valorizar as suas alegrias afetivas íntimas. A decoração do lugar onde mora é realizada com gosto bem personalizado.<br /><br />
                  Há possibilidade de uma relação cármica entre uma união desta vida atual e outra, de uma vida passada. <br />`,

                  `A infância exerceu grande importância na vida do nativo, que não se esquece das suas primeiras impressões nesta vida.<br /><br />
                  Continua a procurar uma grande segurança afetiva e familiar, como fazia nas vidas anteriores. Na encarnação presente, sua emotividade pode criar bloqueios em seu desenvolvimento intelectual.<br /><br />
                  Só poderá se expressar realmente quando tiver progredido afetivamente. Sobretudo quando tiver aceitado crescer e amadurecer.<br /><br />
                  Quando tiver renunciado o apego às velhas emoções, mágoas e memórias frustrantes você sairá da imaturidade e sua verdadeira personalidade se revelará enfim (quase sempre na idade madura). <br />`,

                  `Em suas vidas passadas, o nativo não soube criar um ambiente satisfatório no seu lar (ou a sua pátria, se tinha responsabilidades políticas ou administrativas).<br /><br />
                  Seus familiares não se sentiam felizes em sua casa. Isso se deve ao fato de que seu lado afetivo estava subdesenvolvido. Gosta de ter alguém do sexo oposto em quem possa se apoiar.<br /><br />
                  Seu conceito de amor sempre envolve um grau de proteção dos pais, dos quais, embora possa se ressentir exteriormente, interiormente precisa demais.<br /><br />
                  É infantil, recriando continuamente o tipo de amor que experimentou em seus primeiros anos de vida, por não ter amadurecido seu amor e a ligação com um dos pais. Assim, continua tentando voltar ao útero materno.<br /><br />
                  Algumas vezes sente medo das pessoas e, como resultado, tem mais dificuldade para expressar seus gostos para o mundo exterior do que para os de sua intimidade.<br /><br />
                  Inconscientemente, limita o número de pessoas e de situações exteriores com as quais possa se sentir confortável.<br /><br />
                  Está aprendendo através de um Carma que continua repetindo o começo das experiências de amor até que tenha confiança suficiente para acreditar que, através delas, ganhará a segurança que precisa para expressar seu amor no mundo exterior.<br /><br />
                  Em suma: Eterna criança, apavorado com o mundo exterior, não tendo liquidado outrora seu Édipo, deve aprender agora a sair de sua concha para dar ternura e proteção aos seus. <br />`,

                  `Parece, de acordo com essa posição de Marte, que o nativo assumiu seu papel de paternidade com uma grande dureza, impondo aos seus uma ditadura familiar muito penosa.<br /><br />
                  Ninguém se sentia feliz em sua casa. Ali se vivia oprimido pelo terror daquela autoridade desumana.<br /><br />
                  Na vida atual, o nativo ainda faz os seus sofrerem, com um resquício dessa atitude. É possível também que ele próprio seja vítima de um pai autoritário (como ele, outrora).<br /><br />
                  Ou ainda que tenha uma dívida cármica para com uma mãe negligenciada ou maltratada. Deve esforçar-se por todos os meios para proporcionar alegria e ternura aos seus. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! O desenvolvimento da personalidade e das emoções realizou-se de forma retraída.<br /><br />
                  Preocupado demais consigo mesmo pode ter ignorado aquelas pessoas que o cercavam.<br /><br />
                  Com sua mentalidade "eu em primeiro lugar", não pôde, não quis, ou não teve a oportunidade de expandir sua família em vidas passadas. Hoje, tende a ser emotivo e suscetível demais.<br /><br />
                  Tudo fluirá melhor quando compreender que suas reações emocionais são resquícios de atitudes anteriores que não estão mais adaptadas a esta vida, que não condizem mais com sua consciência.<br /><br />
                  Poderá então criar sua própria família, cultivar suas relações íntimas, confiar nos seus e deixá-los viver! <br />`,

                  `A grande lição aqui é trabalhar a frieza, o egoísmo e a avareza, tanto material quanto emocional.<br /><br />
                  Com Saturno retrógrado na casa 4, o ambiente familiar do nativo tende a ser sombrio, lúgubre e opressivo. A pessoa não fez nada para alegrar a casa e o convívio com familiares.<br /><br />
                  Pelo contrário, impôs muitas limitações com o seu egoísmo. Isso tudo, enfim, numa vida passada. Porque, na vida atual, deve tomar consciência disso e abrir seu coração.<br /><br />
                  Zelar pelas relações de afeto com mais carinho. Assim pode zelar pelo conforto de quem ama e gastar um pouco mais para aliviar sua vida quotidiana. <br />`,

                  `Urano retrógrado nessa posição indica uma vida familiar e ligações familiares incomuns. Em certos casos, um dos pais é diferente de alguma maneira.<br /><br />
                  Os nativos buscam em seus lares a liberdade de ir e vir como quiserem. A própria casa pode possuir uma arquitetura ou decoração incomum, com muitos aparelhos e dispositivos eletrônicos.<br /><br />
                  Os amigos íntimos são aceitos como membros da família. O lar com frequência é utilizado como local de encontro para atividades em grupo e empreendimentos ocultos.<br /><br />
                  É provável que ocorram mudanças súbitas de residência. Pode haver muitas mudanças em situações familiares e domésticas. Nos últimos anos de vida, podem também surgir circunstâncias incomuns.<br /><br />
                  Os nativos não muito são ligados aos pais e à família. No seu pior, pode haver dificuldades com membros da família e perturbações no lar. <br />`,

                  `As vidas passadas do nativo, e talvez ainda a atual, foram marcadas pela perda ou pela dissolução de seu lar - por razões que lhe parecem misteriosas.<br /><br />
                  Num primeiro estágio, mais antigo, o nativo era responsável por isso, pois não soube fazer reinar a confiança e a ternura em seu lar.<br /><br />
                  Nessas encarnações antigas, pode ter sido o próprio nativo que provocou a fuga do cônjuge e dos filhos. Seus enganos com a família haviam gerado outros enganos.<br /><br />
                  Deve aprender que a própria base da felicidade familiar é a confiança recíproca.<br /><br />
                  Nesta vida, é possível que a pessoa minta, roube e engane, sobretudo em sua juventude: assim seus pais, irmãos e irmãs perdem a confiança nele.<br /><br />
                  Seu cônjuge pode ser vítima desse mesmo sentimento de insegurança. O nativo deve compreender que as traições, a fuga, a desconfiança dos outros são a consequência das suas próprias traições do passado. O respeito aos seus familiares exige a retidão com relação a eles. <br />`,

                  `Em vidas passadas o nativo foi manipulador em sua família, pode ter magoado seus familiares. Sua atitude para com eles foi destruidora, a ponto de criar um pesado carma familiar.<br /><br />
                  Agarrava-se à família porque tinha uma sede insaciável de segurança afetiva. Depois, exasperado com essa dependência emocional, tentava se libertar dela se tornando o mais odioso possível.<br /><br />
                  Agredindo seus parentes, oprimindo-os com exigências extravagantes, atraía para si toda a atenção, o tempo e as forças de todos.<br /><br />
                  Um vampiro do coração. De tal maneira que não restavam mais à sua família, alternativas senão a da escravidão ou da revolta.<br /><br />
                  Nesta vida o nativo deve reconhecer em si essa tendência de abusar dos laços familiares e se esforçar para transformar toda tirania.<br /><br />
                  Caso sua família decida de boa vontade morar com ele, é que terá ganhado: será enfim capaz de dar aos outros a ternura e harmonia! <br />`,

                  `Quando Quíron está na casa 4 indica problemas familiares ou com os pais.<br /><br />
                  É provável que passe a vida desejando ter um lar ou uma casa, mas há sempre algo que impede de usufruir de um lar ou do aconchego de uma família.<br /><br />
                  E mesmo que tenha uma casa, terá tantas obrigações externas que nunca permitirá estar junto da família ou em casa, ou tenha dificuldade de sentir bem estar em qualquer outro lugar.<br /><br />
                  Em alguns casos o pai pode ter uma doença crônica ou esteja ausente fisicamente ou emocionalmente, ou ter uma deficiente estrutura familiar, frieza afetiva ou abandono por parte de um dos progenitores.<br /><br />
                  Pode passar a infância numa creche ou o sofrimento pode advir devido ao divórcio dos pais ou à morte de um familiar muito querido.<br /><br />
                  Assim a pessoa sente necessidade de ajudar pessoas abandonadas pelos pais ou que não tem um lar, porque assim consegue compreender e superar sua dor.<br /><br />
                  Existe a tendência a ajudar os outros abrigando-os em sua própria casa ou ajudar outros a terem suas casas e família, enquanto o seu lugar está em ruínas. <br />`,

                  `Esta é uma esposa que será muito apegada a seu lar (no mapa feminino). A menos que suas tendências vingativas sejam estimuladas.<br /><br />
                  Impacto do meio infantil inicial sobre o tipo de escolha afetiva e de casamento. Costuma valorizar as suas alegrias afetivas íntimas.<br /><br />
                  Decoração do lugar onde mora com o gosto bem personalizado. Relação cármica entre uma união desta vida atual e outra, de uma vida passada.<br /><br />
                  Mas atenção ao considerar esta possibilidade! No mapa de um homem, escolha de uma esposa com características muito maternais e protetoras, mas verificar a posição e os aspectos de sua Lua Natal. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 05</strong>`,
            text: [
                  `É na casa 5 que o Sol encontra sua melhor expressão, pois essa é a casa de sua regência. É na busca do prazer, das atividades criativas, do lazer e do romance que desenvolve sua identidade.<br /><br />
                  A produção artística, sob forma intelectual, emocional ou material, são importantes para a auto expressão e também um canal das energias do Sol.<br /><br />
                  Esse posicionamento solar cria as emoções ardentes, a intensidade e a alegria de viver.<br /><br />
                  É importante que o nativo possa expressar sua criatividade. Assim pode cultivar uma autoimagem positiva, desenvolver um papel social que realmente influenciará o mundo através de suas ações e do seu entusiasmo.<br /><br />
                  A motivação está em empreender sua aventura na busca de satisfação pessoal, em seguir o caminho do coração.<br /><br />
                  Como acaba se sobressaindo por puro entusiasmo, corre o risco de criar personagens que agradam ao público e mascarar sua individualidade em busca de aplausos.<br /><br />
                  O autoconhecimento e a autoconfiança trazem a possibilidade de desenvolver sua totalidade, o amor à vida, a alegria e o carisma. Existe uma eterna criança brincalhona em quem tem o Sol na Casa 5.<br /><br />
                  O nativo deve aprender a ser livre e participar inteiramente da vida. Compreender que a vida também é diversão e gratificação.<br /><br />
                  Cultivar a alegria da criança interior, sempre em busca de um desafio, de algo criativo para ser realizado.<br /><br />
                  Quer amar com entusiasmo e ser amado. Sabe que na vida é preciso deixar uma marca e a vida sempre precisa ser um show. <br />`,

                  `Vivem fortes emoções e procura satisfação romântica ou prática, podendo ter inúmeros casos amorosos.<br /><br />
                  Sente atração pelo mundo jovem e infantil, por isso tende a se atrair por profissões que envolva crianças e jovens, especialmente na área de educação, lazer ou atividades esportivas.<br /><br />
                  Tem aparência atraente e jovial e também inclinação para se exibir, que pode levar a trabalhos nas áreas de teatro, shows, espetáculos ou que lide com o público, como marketing ou relações públicas.<br /><br />
                  Tem forte apego e amor aos filhos. Ter um canal de expressão criativa é uma necessidade emocional, por isso pode desejar ter filhos ou se apega a animais de estimação.<br /><br />
                  Há o instinto para criar nas artes em geral e pode se tornar um bom professor, apresentador, escritor ou editor. <br />`,

                  `...`,

                  `Mercúrio na Quinta Casa indica interesse intelectual em muitos empreendimentos artísticos e criativos. Por essa razão, ele pode criar dramaturgos, críticos de arte e escritores em geral.<br /><br />
                  Os nativos sentem se atraídos pelas formas de arte que transmitem informações ou que agem como meio de ensino ou propaganda.<br /><br />
                  Possuem a capacidade de se expressar de forma dramática e vigorosa na fala e na escrita, e querem ser admirados pelas suas realizações intelectuais.<br /><br />
                  Essas pessoas também tendem a preocupar-se e sentir orgulhosas das realizações intelectuais e de seus filhos. Mas é preciso cuidado com excessos de vaidade.<br /><br />
                  Uma vez que há interesse pela educação das crianças, muitos importantes professores possuem Mercúrio nesta casa.<br /><br />
                  A atração romântica está voltada a tipos intelectuais capazes de proporcionar excitação e estímulo mentais. <br />`,

                  `Vênus na Quinta Casa indica uma forte inclinação para o prazer e uma natureza romântica. Há amor pela vida, com um ponto de vista otimista. O romance é de importância fundamental.<br /><br />
                  Pode haver felicidade e prazer no romance, com muitas oportunidades românticas. Os nativos com esta posição geralmente são populares e queridos.<br /><br />
                  Amam as artes e podem ser muito talentosos, especialmente nas artes dramáticas. Gostam de frequentar teatros e assistem a apresentações musicais em suas atividades sociais e românticas.<br /><br />
                  Esta posição de Vênus proporciona amor pelas crianças. Ela também cria pais amorosos, professores e psicólogos infantis. Os filhos desses nativos provavelmente serão meninas com talento artístico e beleza física. <br />`,

                  `Marte na Quinta Casa indica aqueles que buscam o amor e o prazer de maneira ativa. São agressivos e emotivos no sexo e no romance.<br /><br />
                  Pode haver desavenças no namoro, resultantes da impaciência e do ciúme sexual. A paixão sexual e a impulsividade podem resultar em gravidez fora do casamento.<br /><br />
                  Os artistas (especialmente os que trabalham com ferramentas, como os escultores) com frequência têm Marte na Quinta Casa.<br /><br />
                  Há preferência também pela dança, pelo movimento e por esportes competitivos ao ar livre. Esta posição geralmente é encontrada nos horóscopos de atletas.<br /><br />
                  Com bastante frequência, o interesse pelo trabalho com crianças e jovens confere um senso de liderança, poder e autoridade.<br /><br />
                  Treinadores e professores de educação física têm maior probabilidade de possuir Marte nesta posição. Podem se tornar professores talentosos, que despertarão interesse e, assim, obterão resultados com os seus alunos.<br /><br />
                  Mas é preciso cuidado com atitudes autoritárias, dominadoras, para com aqueles que estiverem sob os seus cuidados. <br />`,

                  `Júpiter na Quinta Casa indica pessoas criativas nas artes, na educação, nos esportes e em todas as áreas relacionadas às crianças.<br /><br />
                  Por gostarem muito de crianças os nativos são professores e conselheiros espirituais que estimulam os jovens. Geralmente seus filhos são afortunados, podem alcançar honra e distinção.<br /><br />
                  É provável que os filhos mostrem interesse por filosofia, religião e seguem um bom caminho em sua educação.<br /><br />
                  A não ser que Júpiter esteja em grande desarmonia no mapa, esta posição indica felicidade no amor e a possibilidade de romance com uma pessoa de posses e status.<br /><br />

                  Os nativos com frequência envolvem-se em negócios relacionados à Bolsa de Valores, investimentos, educação, artes, lazer, entretenimento ou locais de diversão.<br /><br />
                  É preciso cuidado com o excesso de otimismo para que não haja grandes perdas financeiras como resultado de especulações ou investimentos imprudentes. <br />`,

                  `Saturno na Quinta Casa indica maiores responsabilidades com os filhos ou dificuldades para tê los.<br /><br />
                  Pode indicar também a capacidade de organização e percepção da estrutura na música e nas artes em geral.<br /><br />
                  Os negócios ou a carreira podem lidar com especulação, escolas, entretenimento, lazer ou lugares de diversão. Os nativos com esta posição são bons investidores e corretores da Bolsa, do tipo conservador.<br /><br />
                  Saturno na casa 5 com frequência indica ambição de poder e liderança por intermédio da auto expressão. A política e a administração de negócios podem servir como canais de expressão.<br /><br />
                  Os nativos com frequência se envolvem romanticamente com indivíduos mais velhos, maduros.<br /><br />
                  Os envolvimentos românticos provavelmente impõem responsabilidades e obrigações. Talvez haja poucas oportunidades românticas ou desilusões amorosas.<br /><br />
                  Os nativos são muito reservados em sua expressão criativa e em suas atitudes, com respeito à arte, ao lazer e ao prazer. Sua autocrítica pode dificultar a felicidade e o amor dos outros.<br /><br />
                  Pode haver dificuldade no relacionamento com crianças ou uma excessiva rigidez e severidade com elas. É preciso trabalhar a frieza emocional ou a incapacidade para amar.<br /><br />
                  É preciso observar se há inibição sexual ou frigidez devido a bloqueios emocionais. Os nativos devem aprender a se entregar e a buscar os outros com amor.<br /><br />
                  Somente quando descobrirem uma forma de se expressar aberta e calorosamente é que poderão encontrar a felicidade. Terapias artísticas é um bom caminho. <br />`,

                  `Urano nessa casa indica necessidade de liberdade para ser ou se tornar uma pessoa peculiar. O senso estético não é convencional.<br /><br />
                  O nativo sente prazer e gosto pelo exótico, principalmente no lazer e na diversão. Gosto por estar com pessoas diferentes, excitantes.<br /><br />
                  É difícil fazer algo que se pareça com trabalho, entretanto é possível envolver-se profundamente em tarefas ligadas a jogos e entretenimento.<br /><br />
                  Seguir as regras dos outros não é fácil, trata-se da razão mais provável dos problemas na escola e no trabalho diário.<br /><br />
                  Deve ser-lhe dado um ambiente relativamente pouco estruturado para que possa progredir. Este posicionamento de Urano é muito importante para os relacionamentos afetivos.<br /><br />
                  A limitação da liberdade de autoexpressão é frustrante. Atrair pessoas imprevisíveis é uma constante, por isso os relacionamentos podem ser muitas vezes instáveis. <br />`,

                  `Há tendência para fugir da realidade através da diversão ou dos romances. Vestir “óculos cor de rosa” para esconder a monotonia da realidade banal. Tendência a amores platônicos.<br /><br />
                  O nativo tende a doar-se com incondicionalidade, podendo exagerar na dedicação. Pode até se apaixonar por alguém e querer se sacrificar pela pessoa, acreditar que pode salvá-la.<br /><br />
                  O nativo idealiza a sua forma de viver o prazer e o amor. É romântico, suas altas expectativas podem causar decepções amorosas. É preciso cuidado com os vícios, os jogos, a procura de prazer permanentemente.<br /><br />
                  Pode ser demasiado condescendente com os filhos. Ou os filhos podem exigir muita atenção. É possível ter de abandonar o trabalho e se sacrificar por causa de sua prole.<br /><br />
                  É possível também uma forte telepatia com eles. O nativo é muito criativo, pode desenvolver as artes e a espiritualidade. É invadido constantemente por inspirações e insights.<br /><br />
                  Deve aprender a expressar seus sentimentos e sua sensibilidade, partilhar seus dons com os outros. A dedicação às artes pode ser um canal de harmonização muito eficaz. <br />`,

                  `Plutão na Quinta Casa indica poder criativo, manifestado na arte, em envolvimentos amorosos intensos ou filhos talentosos.<br /><br />
                  O nativo tem potencial para criar obras de arte inspiradas, transformadoras, em níveis de consciência mais elevados. É preciso cuidado com o perigo da autodegradação por excesso sexual.<br /><br />
                  O indivíduo tende a dominar ou a ser dominado pelo parceiro e pode ter uma atitude excessivamente severa com os filhos.<br /><br />
                  A regeneração espiritual ocorre através do amor e da criatividade. Os filhos do indivíduo podem demonstrar força de vontade, talento e gênio. <br />`,

                  `O nodo sul mostra vidas passadas sob os holofotes, sendo importante, orgulhoso e dominador, com desejo de ser reconhecido, recebendo aplausos e sendo amado.<br /><br />
                  Existe agora a necessidade de desenvolver um conhecimento social e/ou político, de promover uma causa comum, em vez de ficar preocupado apenas com seus próprios casos, prazeres e interesses.<br /><br />
                  É importante agora que o nativo procure se envolver em empreendimentos grupais. Desenvolver projetos em equipe envolver-se em causas humanitárias, expandir a rede de contatos, fazer amigos.<br /><br />
                  Desenvolver a consciência da coletividade e circular suas criações para o mundo.<br /><br />
                  O caminho da evolução é aprender a compartilhar e ser solidário, capaz de ser quem é sem exigir aplausos e reconhecimento, vendo-se como parte de outros e parte de uma causa maior. <br />`,

                  `O impulso de crescimento pessoal é alto. As energias criativas ou emocionais do nativo tendem a transbordar, de uma forma ou de outra.<br /><br />
                  A felicidade parece ser o resultado desse derramamento instintivo ou egocêntrico de si mesmo dentro da comunidade a que o indivíduo pertence.<br /><br />
                  A exultação emocional poderá ser encontrada na atividade artística criativa ou no desejo de poder.<br /><br />
                  O nativo deve cultivar sua criatividade para promover a transformação, tanto de si mesmo, quanto da sociedade.<br /><br />
                  Buscar a expressão dos sentimentos para tocar o coração das pessoas, o prazer consciente e a criação para deixar sua marca registrada, de forma leonina.<br /><br />
                  Com confiança em seu potencial criativo desenvolver seu estilo próprio, sua personalidade, um orgulho saudável e digno. <br />`,

                  `Quem tem Quíron na casa 5 é um ótimo conselheiro para assuntos românticos, porém sua vida amorosa é um caos.<br /><br />
                  Pode ser aquele ou aquela amante que satisfaz seu parceiro ou parceira, mas não tem nenhuma satisfação sexual.<br /><br />
                  Alguns se tornam grandes treinadores ajudando atletas a desenvolverem o melhor de si enquanto eles próprios não são tão bons no esporte.<br /><br />
                  Também são pessoas que se tornam conselheiros de crianças ou dos filhos dos outros, mas ela não tem filhos ou está impossibilitada de tê-los, ou tem problemas com os próprios filhos.<br /><br />
                  Em alguns casos, os pais tentam treinar o filho em algo que eles foram incapazes de realizar, ou tentam conduzir os filhos ao sucesso nas áreas em que eles se sentem fracassados.<br /><br />
                  Pessoas com Quíron na casa 5 também podem se tornar ótimos conselheiros para o mercado de ações, apostas, jogos e esportes.<br /><br />
                  Quíron em Leão dá a capacidade de ajudar os outros usando sua criatividade. Pode ser um professor de arte ou um terapeuta que usa de atividade lúdica ou arte.<br /><br />
                  Mas também pode indicar que a criatividade foi sufocada, pode ter sido ridicularizado na infância ou alguém pode ter duvidado de que teria talento.<br /><br />
                  Algumas crianças podem reagir ou tentar fazer algo extra para agradar aos pais e estes não estimularem sua criatividade.<br /><br />
                  O tratamento de Quíron na casa 5 é buscar a criança interior criativa e reaprender a criar e se divertir. <br />`,

                  `Juno nessa casa inspira o nativo a se casar ou se associar por amor. Caso isso não aconteça, o nativo tende a esperar que surja essa oportunidade.<br /><br />
                  Há possibilidade de realizar seu ideal afetivo no casamento ou numa parceria, mas deve aprender a fazer concessões.<br /><br />
                  Os filhos do casal contam com o favorecimento e a proteção de Juno. Que serão vistos como sua “obra”: “foi feito por mim”.<br /><br />
                  O mais importante nos relacionamentos é a fertilidade, os filhos, as artes e a expressão criativa.<br /><br />
                  Pode estabelecer parcerias em atividades criativas, de lazer ou divertimento, em locais destinados às crianças ou exposição de artes ou por motivo de gravidez. Aliás, diversão e lazer são importantes para essa parceria. <br />`,

                  `Nas encarnações passadas, o nativo era descuidado, leviano e infiel em seus amores. Talvez também fosse indiscreto, não levando a sério as suas responsabilidades.<br /><br />
                  O mesmo aconteceu com relação à família. Foi provavelmente um pai (ou mãe) "omisso".<br /><br />
                  Negligenciou a educação dos seus filhos, não se esforçando o bastante para se comunicar com eles. Na verdade, suas más relações com amores e filhos eram provenientes de um excessivo orgulho.<br /><br />
                  Deve então, nesta vida, assumir humildemente suas responsabilidades parentais, refletir sobre seus compromissos amorosos, buscar o prazer e o lazer com mais maturidade e responsabilidade. <br />`,

                  `Em suas vidas anteriores, a pessoa estava quase que exclusivamente voltado para o prazer, para o lazer e para os amores inconstantes.<br /><br />
                  Era provavelmente um jogador. Pode ter sido pouco ortodoxo em seu comportamento sexual. É possível também que tenha negligenciado os seus filhos em vidas passadas.<br /><br />
                  O nativo geralmente tem um ego muito forte, que se manifesta através do processo criativo. Algumas vezes, pode dominar as pessoas pela confiança interior que tenta transparecer.<br /><br />
                  Faz uma encenação para os outros e tende a projetar seus sentimentos nos outros porque não tolera rejeição e pode rejeitar os outros antes de perceber que eles a rejeitarão, quando sente que pode não estar à altura dos padrões alheios.<br /><br />
                  Em alguns casos traz consigo o orgulho, que os outros precisam reforçar antes que os admita em seu círculo social.<br /><br />
                  Sente-se melhor quando é capaz de ajudar os outros, considerando-os menos competentes. Uma das dificuldades nesta posição são as frustrações quando se prende a expectativas irrealistas.<br /><br />
                  É incapaz de achar a pessoa perfeita que possa preencher tudo o que você acha que precisa. Está aprendendo a lição cármica da satisfação.<br /><br />
                  A insatisfação que sente pelos outros é sempre a insatisfação que criou em si. A lição é esperar menos da vida e realizar a felicidade que está procurando.<br /><br />
                  Deverá tentar, na vida atual, amar sinceramente e também assumir seus compromissos paternos. <br />`,

                  `Em vidas passadas, o nativo "utilizava" seus parceiros amorosos como simples objetos sexuais, não sem impor-lhes suas perversões e sua violência física.<br /><br />
                  Deve, portanto, hoje, aprender o respeito por qualquer pessoa na relação amorosa. No que concerne às crianças (regidas por essa casa), o nativo parece ter sido sádico ou cruel para com elas.<br /><br />
                  Pode até mesmo ter se tornado culpado de abusos sexuais com menores. Razão pela qual os filhos lhe sejam talvez recusados na vida atual. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Dotado de grande criatividade em vidas passadas, mas de natureza dominadora, deixou de ouvir a opinião dos outros.<br /><br />
                  De qualquer modo, não seguiu os conselhos. Foi considerado intrometido e exibicionista.<br /><br />
                  É preciso cuidado para não exigir o impossível dos filhos, dos seus amores, de seu cônjuge, porque se superestima e tem ambições exageradas.  Numa vida passada, pode ter sido um pai ou uma mãe intransigente.<br /><br />
                  Ou um amante execrável, preocupado apenas com sua própria satisfação sexual e afetiva. Pode ter sido também um incorrigível jogador. Para se libertar, deve adotar uma atitude diferente.<br /><br />
                  Sobretudo prestar atenção às necessidades de seus filhos e de seu parceiro amoroso. Dedicando muito tempo às atividades de lazer, fará muito bem se zelar pela qualidade destas. <br />`,

                  `Na casa 5, Saturno retrógrado indica que o nativo cumpriu com suas responsabilidade paternas (ou maternas).<br /><br />
                  Foi omisso para com seus filhos. Seja porque os negligenciou, seja porque os considerou apenas do ponto de vista do seu próprio prazer, ou de sua comodidade.<br /><br />
                  Na vida atual, é comum não poder ter filhos. Ou, se os tem, são pouco numerosos e exigem mais responsabilidade.<br /><br />
                  Saturno é o senhor do carma e promove retorno das coisas. Que não se queixe da ingratidão dos filhos, uma vez que ele mesmo, em suas vidas passadas, cometera erros.<br /><br />
                  Atualmente, pode sentir grande alegria se nas horas vagas cuidar de crianças órfãs ou deficientes.<br /><br />
                  A casa 5 também fala do potencial criativo e dos amores. Em consequência disso, o nativo pode enfrentar nesta vida dissabores amorosos.<br /><br />
                  É preciso cultivar mais criatividade e consideração para com os seres amados. Se aprender a dar seu amor de maneira desinteressada e generosa, liquidará esta dívida cármica. Poderá então viver feliz. <br />`,

                  `Urano retrógrado nessa casa indica envolvimentos românticos inesperados e incomuns. Os uranianos terminam tão inesperadamente quanto começam.<br /><br />
                  Os parceiros podem ser excêntricos, imaginativos ou extraordinários. Os nativos não gostam de seguir a moralidade sexual convencional, pois tendem a buscar excitação em atividades agradáveis.<br /><br />
                  No seu pior, pode indicar promiscuidade e vida boêmia. Pode haver tendência a um comportamento antissocial ou preferência por prazeres obtidos mediante formas de excitação doentias.<br /><br />
                  Pode indicar também que em vidas passadas o nativo viveu casos amorosos extraconjugais. Nos mapas de mulheres, pode ocorrer gravidez fora do casamento.<br /><br />
                  Em geral, a vida romântica é instável. Os filhos desses nativos podem ser extraordinariamente talentosos se Urano estiver bem aspectado.<br /><br />
                  Se Urano estiver sob tensão, os filhos serão propensos a problemas peculiares ou dificuldades psicológicas.<br /><br />
                  Geralmente dão aos filhos muita liberdade, por isso é preciso cuidado, pois os filhos podem ter liberdade demais ou serem negligenciados.<br /><br />
                  Investimentos podem ocasionar mudanças precipitadas na sorte, para melhor ou para pior. Os nativos podem se interessar por novas técnicas de educação e ensino.<br /><br />
                  Em alguns casos, Urano na Quinta Casa pode produzir muita criatividade artística ou interesse por formas eletrônicas de arte.<br /><br />
                  Muitos artistas de cinema, músicos de rock, cantores e personalidades do rádio e televisão possuem Urano na Quinta Casa. <br />`,

                  `Em vidas passadas, a vida amorosa do nativo foi tumultuada e cheia de decepções: ligações desastrosas, múltiplas relações que terminavam sempre mal.<br /><br />
                  Pode não ter conseguido estabelecer um lar normal, nem criar filhos. Pois a casa 5, assim como Leão, descreve os amores e os filhos do nativo.<br /><br />
                  Essa posição indica, nas vidas passadas, um comportamento no âmbito sexual baseado unicamente nas emoções e nas satisfações.<br /><br />
                  Uma infalível fuga diante das responsabilidades para com o parceiro amoroso - uma tendência a enganá-lo, a jogar jogo duplo e a mentir.<br /><br />
                  A vida precedente parece também ter sido vivida como artista, tendo sido criativo, mas boêmio. As relações amorosas e conjugais foram muito mal vividas nas existências anteriores.<br /><br />
                  O nativo deve corrigir seu carma obrigando-se a um enorme respeito pelas pessoas, quer sejam crianças, filhos ou parceiros amorosos.<br /><br />
                  Deve também cultivar o lazer de forma madura. Enfim, vencerá melhor as dificuldades escolhendo um (a) parceiro (a) que tenha um nível espiritual elevado. <br />`,

                  `Em vidas passadas o nativo pode ter tido um filho fora do casamento. Pode tê-lo abandonado ou pelo menos deixou de reconhecê-lo.<br /><br />
                  No entanto, o nativo parece ter gozado de uma posição de liderança, à frente de uma grande família ou de uma tribo, sobre a qual reinava.<br /><br />
                  Mas o carma sugerido aqui pode ser proveniente de um mau uso da autoridade dos pais, de uma falta de consideração para com os filhos que estavam sob sua guarda.<br /><br />
                  Esta posição de Plutão retrógrado evoca possíveis histórias de escândalos: abusos e violências com crianças, escravos ou subalternos.<br /><br />
                  Em respeito à vida amorosa, houve também distorções: orgulho, violência ou exigências sexuais.<br /><br />
                  O aprendizado e a purificação cármica nesta vida pode se realizar através de rupturas, de rompimentos, de lutos ou de perdas que levam o nativo a rever sua escala de valores.<br /><br />
                  De qualquer modo, nesta vida o nativo deve se preocupar escrupulosamente com crianças e todos que estejam atualmente sob sua responsabilidade. <br />`,

                  `Quem tem Quíron na casa 5 é um ótimo conselheiro para assuntos românticos, porém sua vida amorosa é um caos.<br /><br />
                  Pode ser aquele ou aquela amante que satisfaz seu parceiro ou parceira, mas não tem nenhuma satisfação sexual.<br /><br />
                  Alguns se tornam grandes treinadores ajudando atletas a desenvolverem o melhor de si enquanto eles próprios não são tão bons no esporte.<br /><br />
                  Também são pessoas que se tornam conselheiros de crianças ou dos filhos dos outros, mas ela não tem filhos ou está impossibilitada de tê-los, ou tem problemas com os próprios filhos.<br /><br />
                  Alguns casos, os pais tentam treinar o filho em algo que eles foram incapazes de realizar, ou tentam conduzir os filhos ao sucesso nas áreas em que eles se sentem fracassados.<br /><br />
                  Pessoas com Quíron na casa 5 também podem se tornar ótimos conselheiros para o mercado de ações, apostas, jogos e esportes.<br /><br />
                  Quíron em Leão dá a capacidade de ajudar os outros usando sua criatividade. Pode ser um professor de arte ou um terapeuta que usa de atividade lúdica ou arte.<br /><br />
                  Mas também pode indicar que a criatividade foi sufocada, pode ter sido ridicularizado na infância ou alguém pode ter duvidado de que teria talento.<br /><br />
                  Algumas crianças podem reagir ou tentar fazer algo extra para agradar aos pais e estes não estimularem sua criatividade.<br /><br />
                  O tratamento de Quíron na casa 5 é buscar a criança interior criativa e reaprender a criar e se divertir. <br />`,

                  `Juno nessa casa ou signo sempre se casará ou se associará por amor. Senão ela esperará que apareça “o príncipe encantado”.<br /><br />
                  Possibilidades de realizar seu ideal afetivo no casamento ou numa parceria, mas se aprender a fazer concessões.<br /><br />
                  Capacidades e dons artísticos se Vênus, o Sol ou a Lua também mostram essas tendências. Proteção na procriação, que será vista por ela como sua “obra”, “foi feito por mim”. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 06</strong>`,
            text: [
                  `Na casa 6, a direção na vida e o senso de realização podem ser descobertos através do serviço que presta e dos cuidados com a saúde e dieta.<br /><br />
                  Dedicando a essas áreas ajudará na definição de seu senso de identidade única, pois proporcionará canais para uma expressão pessoal.<br /><br />
                  O desenvolvimento de rotinas e padrões de organização poderá proporcionar uma estruturação positiva e produtiva na vida.<br /><br />
                  As questões psicossomáticas serão ricas fontes de informação para o autoconhecimento, pois a vitalidade estará fortemente ligada à integração corpo-espírito e a pessoa tem que aprender, mais cedo ou mais tarde, a respeitar o seu corpo físico.<br /><br />
                  O Sol na casa 6 faz com que o nativo busque desenvolver suas habilidades e competência, de modo a ocupar um lugar ativo no mercado de trabalho.<br /><br />
                  Assim desenvolve um sentido de valor pessoal e de distinção. O objetivo não é apenas ganhar aplausos, mas criar a sua luz própria.<br /><br />
                  A consciência de si mesmo será desenvolvida na arte de viver um dia após o outro, o que poderá ser feito com tanto gosto e sutileza que causará admiração. Sua grandeza está na simplicidade.<br /><br />
                  É um artista do cotidiano, da rotina, das pequenas coisas, nas quais vê graça e deixa a sua graça, seu humor, sua vitalidade.<br /><br />
                  Brilha naquilo que faz e sabe que tem de se colocar inteiro nas suas tarefas, no seu trabalho. Usar todos os seus recursos e suas habilidades na realização de um Serviço. <br />`,

                  `Indica a necessidade e o forte impulso para cuidar e suprir as necessidades dos outros, por isso pode trabalhar em alguma profissão assistencial, enfermagem ou na medicina.<br /><br />
                  Também poderá se dedicar à produção, beneficiamento ou algo que envolva alimentos, nutricionismo ou em áreas que ajude a manter boa saúde.<br /><br />
                  É importante que se envolva emocionalmente com o trabalho. Pode ser extremamente paternalista com os colegas de seu convício diário.<br /><br />
                  Portanto, pode desistir de um emprego por não se adaptar ao ambiente ou aos colegas de trabalho.<br /><br />
                  Talvez trabalhe como prestador de serviços ou em empregos sem horário fixo ou para várias empresas diferentes.<br /><br />
                  É preciso cuidado com a tendência para a crítica, autocrítica ou perfeccionismo. A satisfação emocional está ligada à busca de qualidade e aprimoramento. <br />`,

                  `...`,

                  `Mercúrio na Sexta Casa está favorecido, porque esta casa corresponde a Virgem, que é regido por Mercúrio. Portanto, pode indicar capacidade intelectual superior.<br /><br />
                  Mercúrio na Sexta Casa indica pessoas que adquirem conhecimento e habilidades especializados, que possam ser aplicados em seu trabalho ou profissão.<br /><br />
                  São metódicas, eficientes para lidar com os detalhes de seu trabalho e consideram uma obrigação pessoal manter se informadas sobre técnicas e pesquisas mais recentes na sua área de atuação.<br /><br />
                  Esta é uma posição favorável para pessoas envolvidas com a medicina, a engenharia ou a ciência. Indica uma preocupação com os deveres, a higiene pessoal e roupas adequadas.<br /><br />
                  Pode indicar tendência ao trabalho excessivo e ao perfeccionismo. Os sentidos profundamente alertas dos nativos tornam desagradável a desordem no ambiente.<br /><br />
                  Podem sofrer efeitos psicológicos adversos e até ficar doentes em situações de caos. <br />`,

                  `Vênus na casa 6 indica a possibilidade de atividades sociais e envolvimentos românticos estabelecidos no trabalho. O trabalho geralmente está ligado a atividades artísticas, eventos ou acontecimentos sociais.<br /><br />
                  É importante cultivar o amor pelo trabalho, relacionamentos harmoniosos e amigáveis com colaboradores, empregados e patrões. As condições de trabalho podem ser belas e harmoniosas.<br /><br />
                  As pessoas com esta posição com frequência se casam com alguém que conhecem no seu trabalho, ou desenvolve projetos de trabalho em comum com seu amor.<br /><br />
                  Esta posição oferece o gosto por roupas bonitas e habilidade na criação e confecção de roupas. O afeto com frequência é dedicado a animais de estimação.<br /><br />
                  A saúde é boa, porém, não muito resistente. Essas pessoas podem ter boa saúde se não abusarem. Após o casamento, muitas vezes a saúde melhora. <br />`,

                  `Marte na Sexta Casa indica energia e habilidade canalizadas para o trabalho, que geralmente envolve o uso de ferramentas afiadas ou mecanismos que consomem ou produzem muita energia.<br /><br />
                  Assim, esta posição é encontrada nos horóscopos de maquinistas, construtores de máquinas, mecânicos, operadores de equipamentos pesados, operários siderúrgicos e engenheiros mecânicos.<br /><br />
                  Cirurgiões e outros profissionais da área de medicina também podem ter Marte nesta posição, assim como aqueles que utilizam ferramentas na preparação de alimentos e confecção de roupas.<br /><br />
                  Os nativos são trabalhadores dedicados, vigorosos. Têm pouca paciência com pessoas preguiçosas ou que não desejam de se esforçar para ganhar a vida.<br /><br />
                  Demonstram habilidade e precisão no seu trabalho. Sua autoestima origina-se da finalização e execução bem feita de um trabalho ou prestação de serviços.<br /><br />
                  Podem obter segurança e destaque trabalhando para uma empresa de negócios bem organizada e eficiente.<br /><br />
                  É preciso cuidado com a irritabilidade por causa do excesso de trabalho e a impaciência no cotidiano, que pode gerar acidentes.<br /><br />
                  Podem também existir envolvimentos em problemas de trabalhadores e conflitos com colaboradores, patrões ou empregados.<br /><br />
                  Algumas vezes surgem tendências perfeccionistas e uma preocupação excessiva com detalhes do trabalho, que provocam alguma negligência em relação a assuntos maiores e mais importantes. <br />`,

                  `Júpiter na Sexta Casa indica um interesse pelo trabalho construtivo. Os nativos com esta posição desejam realizar algo prático que possa servir aos outros e contribuir para a ordem social.<br /><br />
                  Há um interesse na cura do corpo e da mente, com frequência conduzindo ao trabalho em curas espirituais.<br /><br />
                  Pode haver a compreensão inata de que os estados emocionais e mentais de uma pessoa têm muito a ver com sua saúde física.<br /><br />
                  Como o trabalho, especialmente o de cura, com frequência está ligado à espiritualidade, essas pessoas se interessarão por missões médicas, cura espiritual, massagem, homeopatia, terapias e outras formas de medicina natural.<br /><br />
                  Essas pessoas geralmente são benquistas e respeitadas no seu trabalho. Podem manter relações agradáveis com colaboradores, empregados e patrões porque estão conscientes de seu trabalho e procuram realizá lo bem.<br /><br />
                  Se Júpiter estiver desarmônico no mapa, é preciso cuidado com a preguiça e a tendência de empurrar o próprio trabalho para outros.<br /><br />
                  É preciso observar se há uma atitude hipócrita em relação ao seu trabalho e ao que se espera das outras pessoas.<br /><br />
                  Cuidado também com problemas de saúde devido a excessos, que podem resultar em problemas do fígado. <br />`,

                  `Saturno na Sexta Casa indica capacidade para o trabalho árduo e eficiência no emprego. O trabalho é levado a sério. Muito conhecimento e habilidades específicas podem ser adquiridos.<br /><br />
                  Geralmente existem pesadas responsabilidades no trabalho e uma atitude séria em relação aos cuidados com a saúde.<br /><br />
                  Os nativos seguem carreiras na medicina, em processamento de alimentos, vestuário, ciência, engenharia e outras áreas mecânicas que exigem habilidade e precisão.<br /><br />
                  Esta posição de Saturno proporciona uma mente cuidadosa e analítica. Os nativos podem alcançar segurança financeira através de suas aptidões e habilidades especializadas.<br /><br />
                  No seu melhor, os nativos são respeitados por seus colaboradores, empregados e patrões. Contudo, no seu pior, as relações com essas pessoas são insatisfatórias.<br /><br />
                  Com frequência ocorrem doenças por resultado da preocupação e do excesso do seu trabalho. É preciso cuidar devidamente da alimentação, descansar e praticar exercícios físicos regulares. <br />`,

                  `O trabalho que exige rotina, paciência e atenção não é recomendado com este posicionamento. Pode haver muita inquietude para seguir os padrões convencionais de um trabalho estável.<br /><br />
                  Impaciência quando tem que deixar para amanhã algo que quer fazer hoje. Gosta de experimentar novidades no dia a dia, há dificuldade em manter-se muito tempo fechado num mesmo lugar.<br /><br />
                  Gosto por atacar tarefas com métodos novos, não gosta muito de procedimentos estabelecidos. A energia inquieta e inovadora pode ser utilizada para a matemática e a ciência.<br /><br />
                  Há tendência para o nervosismo e a atração por muitas coisas ao mesmo tempo. A vontade de levar tudo em frente pode exaurir as energias.<br /><br />
                  A impulsividade pode levar a acidentes. É necessário desenvolver a autodisciplina para suprimir o lado negativo desta energia e utilizar o lado positivo.<br /><br />
                  Facilidade em aprender e ensinar a arte do amor. O nativo pode desenvolver uma visão realista da sexualidade.<br /><br />
                  A não hesitação em expressar suas necessidades sexuais verbalmente favorece o mútuo ajustamento na relação. <br />`,

                  `Pode haver tendência à preguiça na rotina. O nativo é muito sensível e deve tomar cuidado com todo tipo de remédios e drogas.<br /><br />
                  Ganham destaque os assuntos ligados à saúde e ao trabalho. Este é um bom posicionamento para médicos, enfermeiros, terapeutas, humanitários e psiquiatras.<br /><br />
                  O trabalho deve envolver a caridade, a ajuda aos mais necessitados, ou estimular sua imaginação. Caso contrário, pode dispersar-se no trabalho ou se sentir como se estivesse aprisionado.<br /><br />
                  O nativo pode trabalhar também em locais netunianos (bares, álcool, espirituais, trabalhos artísticos, mar, músicos).<br /><br />
                  As doenças podem se manifestar de forma confusa, erros médicos são comuns. É importante cuidar do sistema nervoso e da imunidade, fortalecer seus dons psíquicos.<br /><br />
                  Pode curar-se através de entrega espiritual ou das medicinas alternativas. Compreender que o corpo é um instrumento do espírito.<br /><br />
                  Na via positiva, o nativo se entrega ao serviço ao outro, possui grande sensibilidade para desempenhar atividades ligadas à cura.<br /><br />Pode aprender a harmonizar-se, a cuidar de sua higiene alimentar e energética.<br /><br />
                  O desafio é trazer os assuntos transcendentais para o dia-a-dia. Para tanto, deve proceder primeiro à sua purificação, ao seu refinamento. <br />`,

                  `Plutão nesta casa indica habilidade para melhorar o serviço, o emprego e os métodos de trabalho.<br /><br />
                  As pessoas envolvidas em indústrias de salvamento e as que trabalham em projetos governamentais relacionados à energia atômica também podem ter Plutão localizado nesta casa.<br /><br />
                  O nativo deve utilizar a sua vontade para melhorar a saúde, o que pode ser conseguido mediante o pensamento positivo e hábitos corretos de dieta e higiene.<br /><br />
                  Podem estar presentes poderes ocultos de cura. Com frequência àqueles que realizam curas espirituais podem ter Plutão nesta casa.<br /><br />
                  Em alguns nativos, Plutão exige um trabalho sério para melhorar a saúde. Também pode indicar necessidade de mudanças de atitude com relação ao trabalho para adquirir segurança no emprego, pois o nativo tem tendência a ser autoritário ou pouco cooperativo com colaboradores, empregados e patrões.<br /><br />
                  A incapacidade de se relacionar no trabalho pode causar desorientação mental. A desonestidade no trabalho pode provocar problemas legais.<br /><br />
                  Na via positiva, Plutão indica que o trabalho regenerativo e o poder restaurador consciente pode trazer lucros financeiros, status e reconhecimento. <br />`,

                  `O nodo sul mostra uma vida passada em que responsabilidades, obrigações, trabalho, ordem e limites foram muito pesados.<br /><br />
                  O caminho da evolução é aprender a definir prioridades, deixando de julgar e criticar, ou perdendo-se em detalhes insignificantes.<br /><br />
                  Deve aceitar as fraquezas humanas, tanto suas quanto dos outros, sendo mais fiel ao que sente e não ao que pensa. Fiel à sua vontade e não às suas obrigações.<br /><br />
                  É preciso mais simpatia e compreensão para com os outros a fim de equilibrar uma natureza por demais crítica e julgadora.<br /><br />
                  O nativo pode ser controlador, metódico ou racional demais, só acreditando naquilo que pode ser visto e provado, medido ou testado.<br /><br />
                  Sua necessidade é de cultivar o lado metafísico da vida, abstrato, fortalecendo sua fé e assim encontrar sentido e significado mesmo nas experiências mais difíceis.<br /><br />
                  O "coração" precisa ser aberto para que se sintam ligadas a algo maior que elas próprias. A espiritualidade deve ser cultivada.<br /><br /> Dessa forma a vida se toma mais rica, transcendental, mágica e significativa. <br />`,

                  `O nativo quer completar, aperfeiçoar ou compreender a fundo, rapidamente, qualquer coisa que tenha sido iniciada no passado.<br /><br />
                  Deste modo, a felicidade pode ser encontrada no trabalho e no autoaperfeiçoamento. Na disciplina e na excelência técnica da formulação.<br /><br />
                  Consciente ou não consciente disso, o nativo com tal posição da Roda da Fortuna normalmente é inspirado por um passado social, cultural ou político, no qual encontra felicidade.<br /><br />
                  Quer não só trazer para uma conclusão, mas também transformar esse passado, de modo a torná-lo sensível a uma nova visão da qual ele sente que é o arauto.<br /><br />
                  O nativo normalmente é bem-sucedido em períodos de crise, quando as tradições estão sendo desafiadas por uma sociedade inquieta.<br /><br />
                  Deve buscar o servir, ser útil, o trabalho em cooperação, o cuidado com o corpo, de forma virginiana: usando suas habilidades e a capacidade de análise e discernimento.<br /><br />
                  Aperfeiçoamento e qualidade de vida são os caminhos para encontrar a sua felicidade. <br />`,

                  `A tendência de Quíron na casa 6 é ajudar ou ensinar colegas de trabalho a realizar suas tarefas com aptidão.<br /><br />
                  Pode se tornar um professor de cursos profissionalizantes, em áreas que eles só conhecem teoricamente, mas nunca exerceram a profissão que ensinam.<br /><br />
                  Talvez se torne um ótimo conselheiro sobre vida saudável, orientando outros sobre hábitos saudáveis enquanto eles mesmos fumam ou comem de forma inadequada.<br /><br />
                  São pessoas que deveriam aprender a cuidar mais de si. Existem duas possibilidades diferentes: hipocondria ou negligência com a saúde.<br /><br />
                  Também podem atuar de maneira oposta e exigir os outros devam servi-lo, mas eles nunca estão satisfeitos. Podem ocorrer transtornos alimentares: ou come muito ou se alimenta muito mal.<br /><br />
                  Quíron em Virgem mostra onde sabemos lidar melhor com detalhes e como lidamos com os problemas de saúde e bem-estar.<br /><br />
                  Alguns podem ser excessivamente críticos, obcecados com detalhes insignificantes e mania de limpeza. São pessoas que podem ter sido muito criticadas na infância.<br /><br />
                  Outros nativos podem se tornar pessoas muito desorganizadas e até não se importar com a sujeira.<br /><br />
                  A preocupação com a qualidade de vida pode e deve ser canalizada construtivamente, com serviços na área da saúde ou aprimoramento de técnicas em geral. <br />`,

                  `Juno neste signo inspira fidelidade e lealdade nas parcerias e casamento. Indica um casal que pode prestar serviços juntos.<br /><br />
                  É preciso tomar cuidado com as críticas, a sensibilidade, às insuficiências pessoais e do parceiro.<br /><br />
                  No mapa de um homem, ele procurará uma parceira que o ajude, e se o casamento em si for a causa de problemas, pode ser que ele não se sinta suficientemente apoiado pela parceira/esposa.<br /><br />
                  Talento para profissões que tem relação com a estética ou com funções de acolher as pessoas tipo terapeuta, recepcionista ou aeromoça. Boa posição para os artistas.<br /><br />
                  Os relacionamentos mais significativos devem ser práticos, objetivos e realistas, relacionados ao ambiente de trabalho ou em local de ajuda ao próximo.<br /><br />
                  Pode estabelecer parcerias em atividades de alimentação, hospedagem, restaurantes, hotéis ou numa prestação de serviços como oficina mecânica, locais de consertos etc. <br />`,

                  `Esta casa, em analogia com o signo de Virgem, é a da disciplina no trabalho, da saúde, da vida quotidiana.<br /><br />
                  O nativo com Mercúrio retrógrado na casa 6 pode sentir algumas dificuldades no relacionamento com os outros no trabalho.<br /><br />
                  É bom que ele evite dizer: "Ah, se tivessem feito o que eu disse”! Sente continuamente que deve obrigações aos outros, não conseguindo cumprir todas elas.<br /><br />
                  O seu espírito prático é por vezes crítico demais, mesmo para consigo mesmo. Assim, fica frequentemente angustiado e em estado de fragilidade nervosa.<br /><br />
                  Falta-lhe a autoconfiança. Quando os outros recusam sua ajuda, fica atormentado. Sente-se mais à vontade na mecânica, do que entre as pessoas.<br /><br />
                  Adquiriu grandes competências técnicas no passado, e estas muitas vezes reaparecerão na vida atual.<br /><br />
                  É bom que evite cultivar frustrações, que aprenda a se relaxar. Deve agora aprender que as pessoas não são máquinas! <br />`,

                  `Em vidas passadas, o nativo foi negligente com as leis naturais da higiene. Sua falta de disciplina na alimentação pode ter acarretado má saúde.<br /><br />
                  Ou ainda, segundo as indicações do resto do mapa astral, teria feito mal uso de sua boa saúde, que lhe havia sido dada para que se colocasse a serviço dos outros.<br /><br />
                  Cuidar do próximo, ministrar-lhe ensinamentos e prestar serviços, eis o que deveria ter feito, e não fez. Há uma tendência a experimentar relacionamentos decepcionantes, particularmente nas áreas associadas ao trabalho.<br /><br />
                  Costuma se afastar dos outros porque não entende como lidar com as imperfeições que vê neles. Assim, sua aproximação com as pessoas é muito mecânica.<br /><br />
                  Todo pensamento e ação que recebe de outra pessoa são vistos como parte de muitos movimentos em seu planejado jogo de xadrez da vida.<br /><br />
                  Pode fazer muitos favores para os outros, mas se satisfaz apenas quando sabe que estes podem ser devolvidos.<br /><br />
                  Tende a julgar os outros pelo que eles fazem, medindo suas realizações e atos em comparação com os seus próprios ideais.<br /><br />
                  Assim, tem dois padrões, não percebendo que os ideais de todas as pessoas que conhece podem ser tão elevados quanto os seus e que a falta de habilidade deles para viver de acordo com estes ideais, em sua presença, é um reflexo de suas próprias fraquezas humanas.<br /><br />
                  Usa a maior parte de sua energia sublimando e reprimindo muitas de suas necessidades. É preciso aprender a admitir a necessidade que tem dos outros.<br /><br />
                  O nativo deve, agora, para liquidar seu carma, respeitar uma higiene de vida, cultivar hábitos saudáveis e uma disciplina alimentar sem projetar isso nos outros. Colocar sua experiência a serviço da humanidade sofredora. <br />`,

                  `É provável que o nativo tenha gozado de boa saúde em vidas passadas, mas que tenha desperdiçado essa energia, ou então que tenha destruído essa saúde com abusos.<br /><br />
                  Marte retrógrado na casa 6 indica que o nativo deve meditar sobre o respeito e o uso do corpo. Impor-se uma vida saudável, uma higiene corporal e alimentar.<br /><br />
                  Essa posição de Marte sugere também vidas passadas nas quais o trabalho quotidiano foi mal vivido (em todo caso, não num espírito de colaboração).<br /><br />
                  Pode tratar-se também de um passado no qual a pessoa era cruel com os animais, com seus domésticos e seus subordinados.<br /><br />
                  E importante agora cultivar maturidade para respeitar as leis do convívio com colegas, cultivar diplomacia e gentileza para com seus subordinados. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Tendo negligenciado sua saúde em suas vidas passadas, é possível que o nativo tenha nesta vida problemas com o fígado.<br /><br />
                  Não é impossível que tenha abusado do álcool, ou da comida. Em todo caso, não escapa dos problemas de origem alimentar.<br /><br />
                  Nesta vida deve fazer dieta, cultivar alimentação saudável, não beber e fazer exercícios físicos regularmente. Por outro lado, outrora não refletiu suficientemente sobre a noção de auxílio.<br /><br />
                  Pode ter sido egoísta, não era apreciado por seus subordinados. Agora vai se sentir melhor se aprender a ajudar os outros, prestar serviços sem buscar glórias ou recompensas. <br />`,

                  `Em vidas passadas o nativo pode ter trabalhado num serviço público, mas não tinha espírito de colaboração.<br /><br />
                  Egoísta, burocrata, rotineiro, foi um funcionário que não compreendeu as dimensões sociais e espirituais de suas funções.<br /><br />
                  Na verdade estava mais ao seu próprio serviço, do que a serviço dos outros trabalhadores.<br /><br />
                  Esta posição saturniana acarreta, portanto, nesta vida, uma vida quotidiana laboriosa, com uma promoção difícil. O sucesso é tardio.<br /><br />
                  É provável também que o nativo sofra de algumas doenças pelo resultado de um mau uso da saúde em vidas passadas.<br /><br />
                  O cuidado com o corpo deve ser prioridade. A doença pode obrigá-lo, desta vez, à disciplina que ele não soube impor outrora. <br />`,

                  `Urano retrógrado aqui indica a utilização de métodos estranhos e avançados no trabalho.<br /><br />
                  Pode haver interesse por formas incomuns de cura, como terapia do som, medicina homeopática ou curas espirituais. Aqueles que experimentam diferentes tipos de dieta podem ter Urano nesta casa.<br /><br />
                  Engenheiros eletrônicos, técnicos, programadores de computador e profissionais cujo trabalho envolva tecnologia avançada, com frequência têm Urano na Sexta Casa.<br /><br />
                  A originalidade no desenvolvimento de novas técnicas irá ajudar a acelerar o trabalho. Pode indicar aptidões matemáticas e científicas e uma inventividade aplicável a problemas práticos.<br /><br />
                  Os nativos fazem amigos e se envolvem em atividades de grupo por intermédio do seu trabalho.<br /><br />
                  Pode haver relacionamentos amigáveis e mentalmente estimulantes com os colaboradores, empregados e patrões.<br /><br />
                  Mas no seu pior, esses relacionamentos podem ser explosivos e desarmoniosos. Urano nesta casa também pode indicar envolvimento político com sindicatos trabalhistas.<br /><br />
                  Os nativos são sensíveis às condições de trabalho e de relacionamento com colaboradores, empregados e patrões. É provável que deixem o emprego se esses relacionamentos não forem satisfatórios.<br /><br />
                  Os nativos com esta posição de Urano desejam liberdade para realizar o trabalho à sua maneira. Recusam-se a aceitar horários rígidos ou uma supervisão opressiva.<br /><br />
                  Pode indicar incapacidade para aceitar a rotina, pode também significar muitas mudanças e situação instável no emprego.<br /><br />
                  Com frequência, esses nativos deixam o emprego inesperadamente. É importante buscar terapias para o nervosismo, a inquietação e a irritabilidade. <br />`,

                  `O nativo, nas encarnações passadas, não tinha assimilado a noção de colaboração, de serviço e as consequências destes no trabalho quotidiano. Só tinha em vista seus interesses imediatos.<br /><br />
                  Esta posição planetária sugere uma falta de disciplina no trabalho e na rotina diária, um carácter confuso, preguiçoso e ineficaz. Pode ter sido em vidas passadas um doente amargurado, que não aceitava sua doença.<br /><br />
                  É possível também que tenha gozado de boa saúde e tenha abusado desta. Que tenha dispersado suas energias em diversas atividades inúteis e ou que se tenha dado à bebida, à droga e a diversos excessos.<br /><br />
                  Nesta vida, ainda sofre as consequências disso. É comum ser acometidos de uma doença crônica. Todas as doenças nascem no corpo etéreo do qual o corpo físico é apenas a materialização.<br /><br />
                  Assim, o nativo deve cuidar não só do seu corpo físico, mas, sobretudo de seu corpo etéreo e de seu corpo espiritual.<br /><br />
                  O nativo tem uma sensibilidade às drogas e remédios que pode confundir os médicos. Sensível às epidemias, à menor contrariedade, e também à angústia dos outros, ele pode ser tratado com remédios brandos e terapias naturais.<br /><br />
                  Recuperando a saúde por esses meios, pode enfim colocar-se a serviço dos outros - e talvez mesmo dos doentes, se atingir maturidade espiritual. Pode também se engajar num combate para melhorar a qualidade de vida ou as condições dos trabalhadores.<br /><br />
                  Mas deve fazer tudo num espírito de doação sem retorno, sem cultivar a amargura quando as pessoas são ingratas. Dedicar-se desinteressadamente pode contribuir muito para sua saúde. <br />`,

                  `As rupturas dolorosas podem afetar, por um lado, a saúde. Por outro, o trabalho quotidiano.<br /><br />
                  Nos piores casos, Plutão nesta casa indica o nativo que tinha dons para a medicina em vidas passadas, mas se serviu para satisfazer suas compulsões e sede de poder.<br /><br />
                  Pode ter sido um médico desonesto, que aproveitou seus talentos para encher os bolsos, sem aliviar os pacientes.<br /><br />
                  Pode ter sido um militar desumano, ou trabalhado numa organização de serviço público. Serviu-se de seu trabalho para destruir o próximo.<br /><br />
                  Em sua vida atual o nativo pode ter problemas de saúde ou uma vida quotidiana difícil no setor do trabalho. Pode se tornar vítima de médicos desumanos ou de funcionários sem piedade.<br /><br />
                  É sugerido que o nativo reencontre suas aptidões de outrora para curar os outros e fazer caridade. <br />`,

                  `A tendência de Quíron na casa 6 é ajudar ou ensinar colegas de trabalho a realizar suas tarefas com aptidão.<br /><br />
                  Pode se tornar um professor de cursos profissionalizantes, em áreas que eles só conhecem teoricamente, mas nunca exerceram a profissão que ensinam.<br /><br />
                  Talvez se torne um ótimo conselheiro sobre vida saudável, orientando outros sobre hábitos saudáveis enquanto eles mesmos fumam ou comem de forma inadequada.<br /><br />
                  São pessoas que deveriam aprender a cuidar mais de si. Existem duas possibilidades diferentes: hipocondria ou negligência com a saúde.<br /><br />
                  Também podem atuar de maneira oposta e exigir os outros devam servi-lo, mas eles nunca estão satisfeitos. Podem ocorrer transtornos alimentares: ou come muito ou se alimenta muito mal.<br /><br />
                  Quíron em Virgem mostra onde sabemos lidar melhor com detalhes e como lidamos com os problemas de saúde e bem estar. Alguns podem ser excessivamente críticos, obcecados com detalhes insignificantes e mania de limpeza.<br /><br />
                  São pessoas que podem ter sido muito criticadas na infância. Outros podem se tornar muito desorganizados e não se importar com sujeira. <br />`,

                  `Juno neste setor ou signo se comportará fiel e lealmente nas parcerias e casamento. Ela prestará serviços a seu parceiro. Sensibilidade às insuficiências pessoais e do parceiro.<br /><br />
                  No mapa de um homem, ele procurará uma parceira que o ajude, e se o casamento em si for a causa de problemas, pode ser que ele não se sinta suficientemente apoiado pela parceira/esposa.<br /><br />
                  Talento para profissões que tem relação com a estética ou com funções de acolher as pessoas tipo recepcionista, ou aeromoça.<br /><br />
                  Boa posição para os artistas. Terapia pela Beleza, que pode ser uma fonte para a regeneração da própria pessoa. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 07</strong>`,
            text: [
                  `O Sol na casa 7 leva ao desenvolvimento através dos relacionamentos, das associações e das parcerias amorosas ou sociais.<br /><br />
                  A participação em atividades conjuntas permite abrir canais de expressão para sua individualidade.<br /><br />
                  O processo do Sol na casa 7 se inicia com o encontro de alguém que serve de referência para a própria modelagem.<br /><br />
                  Posteriormente o nativo acrescenta as forças e qualidades inatas através de sua participação ativa na interação social.<br /><br />
                  Há o perigo de evitar o próprio desenvolvimento e se esconder atrás da identidade de outra pessoa.<br /><br />
                  Procurar alguém grande e forte que lhe diga o que deve fazer de sua vida, como uma tentativa de viver o princípio solar através do outro.<br /><br />
                  Mas como essa tática se mostra sempre improdutiva e decepcionante, o nativo acaba tendo que assumir suas responsabilidades e enfrentar seus próprios desafios na construção dos relacionamentos.<br /><br />
                  Assim pode aprender a ser único com a ajuda de parceiros e colaboradores, fazendo com que todos que a ele se associem possam brilhar também. Sua arte está nas habilidades sociais.<br /><br />
                  O nativo entende que ninguém é uma ilha e as pessoas têm impacto umas sobre a vida das outras. Pode desenvolver a política e a diplomacia, a arte do desvio, mas também do enfrentamento.<br /><br />
                  Entrando em contato com o outro, encontra a si mesmo e consegue ver o outro com maior clareza, mais do ninguém. <br />`,

                  `Indica a necessidade de companhia e companheirismo, por isso se dedica para agradar aos outros ou para salvar um relacionamento, mesmo que tenha de abdicar de seus próprios interesses.<br /><br />
                  Gosta de trabalhar em cooperação com outras pessoas ou num pequeno grupo. Pode haver a sensação de despersonalização ou tendência para absorver a personalidade de outros, precisando da aprovação e opinião de quem ama.<br /><br />
                  Pode ter um sócio ou parceiro temperamental e difícil, mas é possível que consiga entendê-lo mais que outros que não o entendem. Tem mentalidade e boa percepção política nas relações sociais e profissionais.<br /><br />
                  Pode se dedicar a algum trabalho assistencial para garantir a justiça ou gerência de pessoal, onde predomina a imparcialidade.<br /><br />
                  Sente o apelo do glamour e pode se atrair para o mundo da moda, do design e da música, que também pode ser um hobby. <br />`,

                  `...`,

                  `Mercúrio na Sétima Casa indica pessoas preocupadas com a comunicação e a colaboração mental com os outros. Preferem trabalhar em algum tipo de parceria, em vez de atuarem individualmente.<br /><br />
                  São competentes para se comunicar com o público. Portanto, podem ter sucesso em suas vendas, relações públicas e direito. Podem possuir habilidades em arbitragem, mediação e aconselhamento.<br /><br />
                  Também pode haver aptidão para a psicologia. Mas também haver discórdia no casamento, baseada em diferenças de opinião.<br /><br />
                  Os nativos com esta posição de Mercúrio se preocupam com o que os outros pensam. A tendência de buscar parcerias mentais faz com que casem com pessoas intelectuais, inteligentes e bem educadas.<br /><br />
                  As outras relações provavelmente também se estabelecerão com tipos intelectuais. Pode ocorrer um casamento com um empregado, colaborador ou parente. <br />`,

                  `Vênus na Sétima Casa pode indicar habilidade social e um casamento feliz. Os nativos têm muita popularidade devido às suas maneiras agradáveis e consideração pelos outros.<br /><br />
                  Há habilidade para lidar com o público, favorável para aqueles que se dedicam à psicologia, vendas, relações públicas e artes dramáticas.<br /><br />
                  O casamento e amizades íntimas são muito importantes para essas pessoas. Elas procuram o casamento para sua satisfação romântica e pela felicidade que ele oferece.<br /><br />
                  Geralmente se casam cedo e obtém prosperidade social e financeira por intermédio do casamento. Manifestam amor nos seus relacionamentos pessoais e, consequentemente, recebem amor de volta.<br /><br />
                  Essas pessoas raramente precisam se envolver em ações judiciais, porém, quando o fazem, tentam resolver o assunto sem recorrer a um tribunal. <br />`,

                  `Marte na Sétima Casa indica uma pessoa agressivamente envolvida em atividades conjuntas ou no trabalho com o público.<br /><br />
                  O parceiro no casamento, os amigos íntimos ou os companheiros de trabalho, provavelmente terão uma natureza agressiva, ativa, típica de Marte.<br /><br />
                  Os nativos com esta posição preferem trabalhar e agir em colaboração com outras pessoas. Podem realizar muitas coisas agindo dessa forma.<br /><br />
                  Contudo, tanto os nativos como os seus associados podem ter um comportamento impulsivo. É preciso observar se há tendência a criar desavenças com associados, discórdia no casamento e divórcio.<br /><br />
                  Com frequência, as atividades envolvem finanças conjuntas, o que pode ser motivo de controvérsias. Marte na casa 7 pode produzir vendedores e relações públicas agressivos.<br /><br />
                  Há necessidade de aprender a ter tato e diplomacia nos contatos com os outros. É preciso observar também se há tendência a interagir com os outros por razões egoístas ou por senso de competição. <br />`,

                  `Júpiter na Sétima Casa indica receptividade, benevolência e amizade, o que traz felicidade no casamento e em sociedades.<br /><br />
                  Um forte senso de justiça faz com que os nativos sejam honestos e justos em seus relacionamentos. Por isso esperam honestidade e justiça dos outros.<br /><br />
                  Os valores morais e espirituais íntegros geralmente resultam num casamento feliz e duradouro. Essas pessoas com frequência se casam com alguém de posses ou elevada posição social.<br /><br />
                  As parcerias nos negócios também podem prosperar, porque existe bom julgamento na escolha dos sócios e honestidade no relacionamento.<br /><br />
                  Em indivíduos mais evoluídos, o amor altruísta é abertamente manifestado. Os nativos desejam o maior bem-estar espiritual e material para os outros.<br /><br />
                  Essa sincera preocupação faz com que recebam de volta confiança e amizade. Há habilidade nas áreas relacionadas à lei, relações públicas, atendimento, vendas, negociações e mediação.<br /><br />
                  É preciso cuidado com a tendência de considerar as coisas como garantidas e a esperar muito dos outros. Pode haver ingenuidade em sociedades e negócios.<br /><br />
                  Isso pode acabar expondo os nativos a charlatães ou pessoas com ideias grandiosas e impraticáveis. <br />`,

                  `Há um forte senso de responsabilidade e justiça em todos os relacionamentos importantes e contatos com o público.<br /><br />
                  Os nativos podem se casar tarde ou com pessoas sérias, maduras, voltadas à carreira. É preciso desenvolver a maturidade para que o casamento seja estável e duradouro.<br /><br />
                  Cuidado com a tendência a ser crítico, inibido e negativo nos relacionamentos. Se houver imaturidade, o casamento e as sociedades trarão problemas.<br /><br />
                  As pessoas com Saturno na casa 7 são de alguma forma impelidas a relacionamentos que acarretam responsabilidades.<br /><br />
                  Podem trabalhar muito e conscienciosamente colaborando com os outros e assumindo a sua quota de responsabilidade.<br /><br />
                  Se forem bem aceitas, serão trabalhadores de confiança, dos quais se pode depender em todos os acordos.<br /><br />
                  Elas podem se interessar por leis, possuem capacidade para organização e administração de negócios ou formulação de contratos.<br /><br />
                  Podem determinar o seu bem estar futuro e progredir em suas carreiras trabalhando com outras pessoas. <br />`,

                  `Este posicionamento afeta especialmente as pessoas em fase de amadurecimento ou em idade madura. É fundamental ter relacionamentos em que consiga manter uma considerável liberdade.<br /><br />
                  No casamento, o nativo deve buscar uma forma que se adapte ao seu esquema de vida. Frequentemente rebela-se contra os tradicionais papéis e regras do casamento e tenta se livrar deles.<br /><br />
                  Os relacionamentos, por essa razão, podem não ser estáveis. Mesmo durante a juventude, evidencia-se claramente a necessidade de liberdade em todos os seus relacionamentos.<br /><br />
                  Quando alguém tenta falar de suas obrigações e restrições nos relacionamentos, recusa-se a ouvir.<br /><br />
                  Se fizer sempre concessões, ou arranjar os seus relacionamentos de acordo com as regras dos outros, fatalmente criará em si uma vontade constante de se libertar.<br /><br />
                  Essa vontade reprimida pode em algum momento se materializar num rompimento brusco.<br /><br />
                  Com este posicionamento, é preciso estar com outras pessoas que sejam estimulantes e desafiadoras, mesmo que não sejam estáveis.<br /><br />
                  Aqui estabilidade não é tão necessária quanto a excitação. O relacionamento deve sempre se reinventar, com propostas inovadoras, originais, criativas e ousadas.<br /><br />
                  É válido um caminho de liberdade plena tanto para a pessoa quanto para quem lhe acompanha. Somente assim o relacionamento pode ser uma fonte de riqueza e plenitude na sua vida. <br />`,

                  `Com simpatia e empatia, o nativo pode se tornar um terapeuta ou assistente social. Há sensibilidade especial para captar a energia dos ambientes e das pessoas.<br /><br />
                  Mas é preciso cuidado com ilusões no romance ao idealizar demais o parceiro. O nativo é romântico, sonha encontrar sua parceria de alma.<br /><br />
                  Quer a perfeição, mas pode não querer fazer esforço para se transformar. Pode ser escapista, engana, trai, promete e não cumpre. O crescimento se dá através do processo de ilusão/desilusão.<br /><br />
                  No polo oposto, pode dar tudo e sentir que não recebe nada. Sentir-se não correspondido pelas pessoas com quem se relaciona.<br /><br />
                  Atenção especial para não se relacionar com pessoas confusas, viciadas, ou loucas. Há tendência também para resistir à sua sensibilidade e espiritualidade.<br /><br />
                  A mente pode se tornar confusa, hesitante, cheia de dúvidas. O nativo é imaginativo, sonhador, irrealista, cria facilmente imagens e cenários.<br /><br />
                  Na via positiva, pode viver parcerias belas, artísticas, viver experiências de amor incondicional. Pode aprender a desenvolver seu lado mágico, sensível, espiritual e artista.<br /><br />
                  Com consciência, pode viver uma parceria de alma, onde prevalece o requinte, a delicadeza, a beleza e o amor.<br /><br />
                  Pode desfrutar do lado encantado e mágico do outro, viver em ambientes belos, onde reine o bom gosto. O nativo pode ser iniciado espiritualmente pelo parceiro.<br /><br />
                  O desafio é a entrega total, o nativo tem de estar inteiro nas relações, livre de suas projeções. Buscar discernimento, clareza, definição.<br /><br />
                  Precisa cultivar a objetividade e o pragmatismo na sua forma de se ver, viver e sentir a vida. <br />`,

                  `Plutão nesta casa indica pessoas cujas vidas são drasticamente alteradas ou transformadas pelo casamento, por sociedades e relações com os outros.<br /><br />
                  O nativo pode atrair um parceiro obstinado e até mesmo dominador, que pode manifestar tendências ocultas. O nativo possui um forte senso de justiça e reage contra qualquer injustiça.<br /><br />
                  Na via negativa, pode haver tendência para dominar pessoas cuja vontade é mais fraca ou ser dominado por pessoas cuja vontade é mais forte.<br /><br />
                  É preciso aprender a compartilhar a iniciativa e a responsabilidade. Desenvolver a percepção espiritual consciente sobre os relacionamentos.<br /><br />
                  Perceber a necessidade de uma colaboração construtiva com os outros e se esforçar positivamente para conseguir essa colaboração.<br /><br />
                  Nos melhores casos, uma profunda capacidade intuitiva permite que o nativo tenha insights e percepções sobre os outros, compreendendo as suas motivações. Portanto, esta é uma boa posição para psicólogos, advogados e juízes. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo foi dependente dos outros.<br /><br />
                  Pode ter mantido relacionamentos insatisfatórios por medo de não conseguir sobreviver sozinho, sendo influenciável, indeciso e com dificuldades de tomar decisões.<br /><br />
                  O nativo pode ter permitido que outros o dominassem. Ou se ajustou demais, tentando ser o que os outros precisavam ou queriam que ele fosse.<br /><br />
                  O caminho da evolução é aprender a ser independente, encontrando equilíbrio entre suas iniciativas e a receptividade aos outros. É importante agora cultivar autonomia, aprender a ficar de pé sobre seus próprios pés.<br /><br />
                  Aprender a dizer “não” quando necessário, tomar decisões e fazer escolhas baseadas naquilo que necessita ou quer para si mesmo. O nativo deve buscar o autoconhecimento e honrar quem é. <br />`,

                  `A felicidade é encontrada através das parcerias e da vida social.<br /><br />
                  Os relacionamentos devem ser cultivados da melhor forma possível, pois é isso o que determina toda a grande iluminação individual.<br /><br />
                  É preciso cuidado para não se tornar excessivamente preocupado com o fato de experimentar um relacionamento ou pode passar a depender dele.<br /><br />
                  Sentindo ser este o caso, o nativo pode focalizar a sua ânsia de relacionamento num sentido mais espiritual e transcendente.<br /><br />
                  O nativo pode e deve encontrar pessoas certas para suas parcerias, fazendo bons contatos, aprendendo a se relacionar e a enxergar o outro, de forma libriana: partilhando com harmonia, escutando o outro, sendo gentil, ponderado, educado e refinado. <br />`,

                  `As pessoas com Quíron na casa 7 podem decidir por passar toda a sua vida cuidando dos outros ou de um parceiro debilitado.<br /><br />
                  Também pode ser alguém que tenha grande habilidade para aconselhamento ou preparação de casamentos, enquanto ela própria não se casa. Isso pode acontecer nas parcerias de negócios.<br /><br />
                  É possível que ensine a um sócio a fazer um trabalho melhor do que faria e isso pode levar a uma grande frustação, quando o outro aprende tanto que vai embora para trabalhar sozinho.<br /><br />
                  Quíron na casa 7 indica sofrimento afetivo no casamento ou em parcerias. Pode sentir carente de afeto e para obter amor, se submete aos caprichos do outro, tornando-se muito dependente.<br /><br />
                  Pode acontecer também da pessoa sentir que deve salvar a outra pessoa, assumindo o papel de pai ou mãe.<br /><br />
                  A cura nos relacionamentos, a diplomacia e a harmonização de conflitos é um caminho de desenvolvimento espiritual para quem tem Quíron nesta casa. <br />`,

                  `Ela está poderosa nesta casa, favorecendo as parcerias amorosas. Juno é a protetora do casamento e está na casa das parcerias.<br /><br />
                  O nativo tende a dar o melhor de si mesmo quando forma uma ligação com alguém. Sobretudo depois de se ter certificado que este engajamento é forte no plano afetivo.<br /><br />
                  Este posicionamento indica que há grandes chances de o nativo ser um par ideal para alguém. A vida social tende a ser estimulante na vida do casal.<br /><br />
                  Os relacionamentos mais importantes são aqueles em que se forme uma parceria, uma sociedade ou casamento, onde haja troca ou compartilhamento de interesses.<br /><br />
                  Pode estabelecer sociedade com o cônjuge ou com pessoas que lidam com justiça, durante audiências, cerimônias, apresentação pública e eventos sociais. <br />`,

                  `O nativo teve em suas vidas passadas grandes dificuldades nas parcerias e na vida associativa:
                  Por seu espírito crítico demais e por sua inconstância, provocou rupturas em contratos de negócios ou no próprio casamento.<br /><br />
                  Seus sócios ou seu cônjuge de uma vida passada reprovavam-no por não manter os seus compromissos, por mentir e por só levar em consideração seus próprios interesses.<br /><br />
                  O nativo deve agora aprender a negociar com equilíbrio e justiça, deve cultivar integridade, comprometer-se sinceramente num contrato não sem ter examinado cuidadosamente as cláusulas deste, antes de assiná-lo! <br />`,

                  `O nativo pode viver dissabores no casamento (ou nas associações) por causa das vidas passadas demasiado individualistas. O nativo aceitava o amor que lhe era oferecido e não o retribuía.<br /><br />
                  Não respeitava os compromissos assumidos em contratos e "puxava a brasa para a sua sardinha" em todas as circunstâncias.<br /><br />
                  Seu humor e seus sentimentos são desviados pelo mundo ao seu redor. Pode assumir diferentes identidades.<br /><br />
                  Seus sentimentos são como um pêndulo, balançando de um lado para outro conforme os ventos dos sentimentos de outras pessoas, sempre passando pelo centro, mas raramente ficando lá.<br /><br />
                  Nunca tem certeza se é visto ou não como sendo adequado aos olhos dos outros. Muito sensível ao seu meio ambiente externo, inicialmente se submete e se perde nele e então foge para recobrar seu equilíbrio.<br /><br />
                  Contudo, não gosta de fazer as suas coisas sozinho. Está vivendo um Carma de experimentar as partes desequilibradas de si mesmo através dos caminhos nos quais os outros o veem.<br /><br />
                  <strong> É preciso aprender a ver o seu verdadeiro reflexo através dos olhos daqueles a quem ama.</strong><br /><br />
                  Entretanto, se lutar contra o fato de que muitas de suas ideias, pensamentos e sentimentos parecem ser rejeitados e não compreender o porquê disto, então continuará repetindo o desequilíbrio.<br /><br />
                  Deve aprender também a respeitar os direitos dos outros e a desenvolver a harmonia conjugal. A se conduzir de maneira generosa e construtiva em todas as associações nas quais esteja envolvido. <br />`,

                  `Essa casa diz respeito a contratos de associação (inclusive o casamento). Marte retrógrado na casa 7 indica que o nativo não era um bom parceiro em suas vidas passadas.<br /><br />
                  Na vida atual você deve se esforçar para cooperar, ser leal e gentil sempre que se comprometer.<br /><br />
                  Deve sair de seu universo egocêntrico e passional para respeitar os direitos (e a sensibilidade) dos seus associados.<br /><br />
                  Se ainda estiver solteiro, o nativo deve refletir e ponderar muito bem antes de se casar, para que sua motivação não seja unicamente uma atração física.<br /><br />
                  Neste setor, as paixões violentas não combinam com o respeito aos outros, seja no casamento ou nos negócios.<br /><br />
                  Se o nativo repete os comportamentos violentos das vidas anteriores, arrisca-se, na vida atual, a atrair para si o que causou e praticou anteriormente. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Em vidas passadas, o nativo não parece ter brilhado por suas qualidades conjugais, ou cultivado parcerias éticas e saudáveis.<br /><br />
                  Ele (ou ela) não se preocupava em ser fiel (tanto nas associações, quanto no seu casamento).<br /><br />
                  O dinheiro tinha, certamente, um papel determinante: procura de um parceiro rico ou perda de dinheiro pelo parceiro ou ainda chantagem exercida sobre este último pelo nativo, que detinha o dinheiro.<br /><br />
                  De qualquer modo, tudo lhe servia de meio de dominação: o dinheiro, a lei, os contratos, a influência social.<br /><br />
                  Na vida atual, o nativo está sujeito a novos dissabores conjugais (e legais) se não respeitar seus parceiros. Deve aprender a crescer em conjunto, cultivar parcerias equilibradas e justas. <br />`,

                  `Saturno está no sector das relações sociais, das associações e parcerias. O nativo não assumiu as responsabilidades enquanto parceiro. Ignorou a lealdade e o respeito à palavra dada, deve.<br /><br />
                  Em associações de negócios o nativo pode ter traído, usado, ou até mesmo roubado seus sócios. No casamento, revelou-se um cônjuge mesquinho.<br /><br />
                  Nesta vida deve empenhar-se em compreender o que é um “acordo de cavalheiros”, um acordo entre parceiros dignos de confiança.<br /><br />
                  Deve aprender sobre o respeito aos contratos e não ignorar mais os direitos dos seus associados.<br /><br />
                  Cultivar ética e maturidade nas relações. Estudos jurídicos lhe seriam úteis. Caso se case, deve respeitar seus compromissos conjugais. <br />`,

                  `Urano retrógrado mostra desejo de liberdade no casamento e em sociedades, trazido de vidas passadas.<br /><br />
                  Os nativos são propensos ao rompimento, pois a extrema necessidade de independência dificulta um compromisso duradouro com um parceiro.<br /><br />
                  Geralmente, o casamento acontece inesperadamente e sob circunstâncias singulares. O parceiro pode ser incomum, brilhante ou excêntrico.<br /><br />
                  Às vezes, os nativos ficam ressentidos com seus parceiros, porque eles podem ofuscar o seu brilho. Pode haver percepção telepática do humor e dos sentimentos de outras pessoas.<br /><br />
                  É possível se envolver em relacionamentos em geral e estão sujeitos a súbitas reviravoltas.<br /><br />
                  Há o perigo de perdas por meio de processos e relações públicas mal sucedidas que ocorrem devido à má vontade ou incapacidade de colaboração.<br /><br />
                  Súbitas mudanças de humor, de opinião e de atitudes podem deixar os outros confusos e insatisfeitos. Em alguns casos, pode ficar desorientado devido ações imprevisíveis de seu parceiro.<br /><br />
                  A imprevisibilidade não favorece o envolvimento em política, lei ou relações com o público. Imprevistos podem provocar dificuldades, pelas quais os nativos serão responsabilizados.<br /><br />
                  Em geral, experiências incomuns são ocasionadas pelo casamento, em sociedades e relações com o público. <br />`,

                  `É uma indicação provável de dois ou vários casamentos: na verdade, no início de sua vida, o nativo arrisca uma união amorosa sobre bases ruins. Seja enganando o cônjuge, seja ele próprio sendo enganado.<br /><br />
                  Ou ainda pode descobrir que, apesar da aliança no dedo, seu cônjuge lhe escondeu algo. Cai das nuvens ao descobrir que o casamento não é, de modo algum, o que pensara! Grande desilusão!<br /><br />
                  Ela provém de vidas anteriores nas quais o próprio nativo enganou, traiu, iludiu ou desprezou seu parceiro. Não ouvia as queixas do outro, não tinha qualquer compaixão pelos seus sofrimentos, e só pensava em si.<br /><br />
                  Por outro lado, o que acontece no casamento ocorre também em todas as associações de negócios: o nativo foi um mau sócio numa vida anterior e na atual reencontra os associados que traíra, enganara ou decepcionara. É preciso cuidado, nesta vida, com os contratos que assinar.<br /><br />
                  Para uma parceria amorosa duradoura, é preciso tomar consciência dessa fraqueza. Decidir firmemente ser agora, enfim, um bom cônjuge. Alguém que age com um grande respeito pelo outro.<br /><br />
                  Consciente desse carma, o nativo deve empreender ao mesmo tempo um trabalho de pesquisa espiritual e um trabalho de terapia para compreender suas más reações emocionais.<br /><br />
                  É importante também que ele encontre um cônjuge bastante avançado espiritualmente para compreendê-lo e bastante forte para sustentar seus esforços.<br /><br />
                  Caso contrário, pode se iludir com pessoas perdidas, com tendência ao consumo de drogas ou bebidas. Ou ele mesmo evadir-se na bebida, nas drogas ou em todas as fugas netunianas da realidade. <br />`,

                  `Plutão retrógrado nesta casa indica disputas de poder e manipulações nas parcerias do passado. O nativo foi um parceiro difícil em suas vidas anteriores.<br /><br />
                  Susceptível quando se trata dos seus direitos (mas não muito quando se trata dos seus associados), pode ter sido desonesto e até violento.<br /><br />
                  Pode ter sido desonesto também, nas associações de negócios e nos contratos que assinava. Perverso sexual no casamento abusava do poder e julgava que isso era um direito seu.<br /><br />
                  Suas exigências haviam levado o (a) parceiro (a) ao desespero, à fuga, ao assassinato ou ao suicídio,
                  num sobressalto de revolta.<br /><br />
                  O nativo (ou nativa) deve agora purificar essas tendências através de suas relações. Mas com frequência isso acontece apenas no segundo casamento (o primeiro cônjuge ainda sofre as consequências dessas tendências).<br /><br />
                  Pode acontecer também que alguma tentativa de casamento fracasse. Em todo caso, esta vida pode ser marcada por rupturas e rompimentos.<br /><br />
                  Lutos, divórcios, separações e processos: lições que podem ensinar os nativos a respeitar os direitos elementares dos seus associados. <br />`,

                  `As pessoas com Quíron na casa 7 podem passar toda vida cuidando dos outros ou de um parceiro debilitado.<br /><br />
                  Também pode ser alguém que tenha grande habilidade para aconselhamento ou preparação de casamentos, enquanto ela própria não se casa. Isso pode funcionar também para parcerias de negócios.<br /><br />
                  É possível que ensine a um sócio a fazer um trabalho melhor do que faria e isso pode levar a uma grande frustação, quando o outro aprende tanto que vai embora para trabalhar sozinho.<br /><br />
                  Quíron na casa 7 indica sofrimento afetivo no casamento ou em parcerias. Pode sentir carente de afeto e para obter amor, se submete aos caprichos do outro, tornando-se muito dependente.<br /><br />
                  Pode acontecer também da pessoa sentir que deve salvar a outra pessoa, assumindo o papel de pai ou mãe. Por exemplo: Netuno ou Peixes na casa 7, são indícios de relacionamentos vitima/salvador. <br />`,

                  `Ela está em trono neste signo e neste setor. E nesta casa e signo ela se expande de forma ideal, ou deveria...<br /><br />
                  Pode dar o melhor de si mesma, quando forma uma ligação com alguém, sobretudo depois de se ter certificado que este engajamento é forte no plano afetivo.<br /><br />
                  Este posicionamento, se não está demasiado tencionado, predestina a pessoa a ser um par ideal para alguém.<br /><br />
                  A vida social da pessoa com Juno nesta casa se valoriza mais, quando ela se torna a parte de um casal. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 08</strong>`,
            text: [
                  `Os relacionamentos que expõem paixões ocultas e esbarram em emoções primárias não resolvidas fazem parte do processo de desenvolvimento do Sol na Casa 8.<br /><br />
                  Há um grande interesse por tudo o que está oculto ou o que é misterioso. Com o sol nesta casa a vida se mostra de uma forma intensa.<br /><br />
                  Às vezes pode temer a intensidade de seus sentimentos, resistindo a uma compreensão mais profunda de si mesmo e rejeitando o próprio potencial de transformação.<br /><br />
                  É necessário que desenvolva coragem para explorar os porões da mente e os segredos da vida. Então as tensões se dissolvem através da autoexpressão consciente.<br /><br />
                  Os relacionamentos deixam de ser um campo de batalhas e se tornam a base para o crescimento e para o prazer. A união traz potencial de cura, crescimento e autodesenvolvimento.<br /><br />
                  Para que esse Sol brilhe, o nativo deve valorizar o desejo de se unir a algo maior que si mesmo, através do amor e da fusão com outro ser humano.<br /><br />
                  Com esse objetivo, aprende a se expandir e transcender seus limites emocionais, deixando para trás o separatismo e o isolamento que o desvitalizam.<br /><br />
                  O nativo que tem o Sol na Casa 8 pode buscar tudo aquilo que é profundo, ver sempre o que há por dentro, o âmago de qualquer questão.<br /><br />
                  Tem facilidade para descobrir as coisas e para dar diagnósticos, pois vive sempre atrás do que do que é oculto ou disfarçado.<br /><br />
                  Entende a arte da intimidade, dos vínculos profundos, dos quais não tem medo. Conhece os sentimentos mais turbulentos e as perdas, mas também o renascimento.<br /><br />
                  Sempre se redescobre cada vez que morre e é obrigada a renascer. Muitas vezes, perde para poder ganhar e se encontrar. <br />`,

                  `Perspicaz ao extremo, entretanto a forma de usar essa qualidade depende de outros fatores do mapa.<br /><br />
                  O amor apaixonado, a sensualidade e o sexo são fatores importantes na vida e os maiores êxitos podem ser obtidos através de alguém que proporcione inspiração mental e sexual.<br /><br />
                  A Lua nessa posição aumenta ainda mais o comportamento instintivo e reativo do nativo.<br /><br />
                  É preciso cuidado com a desonestidade ou as reações emocionais exacerbadas ao se sentir ameaçado, que podem prejudicar a carreira e as chances de sucesso.<br /><br />
                  Mulheres podem exercer alguma influência, ajudando a ganhar prestígio e dinheiro. Para os homens, pode significar um casamento ou relacionamento com uma mulher de grandes posses.<br /><br />
                  Pode se dedicar a áreas que atenda as necessidades femininas ou trabalhar entre mulheres. Tem interesse pelo ocultismo, pelas questões psíquicas, mediúnicas e espirituais. <br />`,

                  `...`,

                  `Mercúrio na Oitava Casa indica interesse pelas fases mais profundas da ciência e do oculto.<br /><br />
                  O interesse também pode se concentrar em finanças corporativas, impostos, seguros e bens de pessoas falecidas, uma vez que a Oitava Casa é a casa da morte.<br /><br />
                  As pessoas com esta posição tendem a ser reservadas, especialmente a respeito de informações que consideram pessoais ou importantes.<br /><br />
                  Tendem a fazer planos em segredo e são engenhosas na formulação de estratégias. Talvez façam viagens relacionadas à morte.<br /><br />
                  Com frequência são herdeiras de informações secretas ou importantes documentos. Os nativos não esquecem facilmente das ações, atitudes e desrespeitos dos outros.<br /><br />
                  É preciso cuidado com a tendência para guardar rancor, falar em vingança e se envolver em planos secretos vingativos.<br /><br />
                  Adoram mistérios, investigações e intrigas. Gostam de ler e escrever histórias de detetives e de mistério.<br /><br />
                  Possuem o desejo e a habilidade para desvendar segredos e descobrir as motivações ocultas por trás do comportamento humano, pois desejam chegar à essência das coisas. <br />`,

                  `Vênus na Oitava Casa indica lucros financeiros por intermédio do casamento, outras sociedades e relações sociais.<br /><br />
                  Com frequência, esta posição indica uma herança ao longo da vida. O casamento também pode ser motivado pela possibilidade de ganhos financeiros.<br /><br />
                  Há tendência a uma natureza sensual. A posição de Vênus na casa 8 proporciona emoções excessivamente intensas.<br /><br />
                  É preciso cuidado com o ciúme e a possessividade, porque aqui Vênus está na casa relacionada a Escorpião, o signo de seu detrimento. <br />`,

                  `Com esta posição, existem desejos fortes e intensidade emocional. A energia, a determinação e a persistência são utilizadas para realizar coisas.<br /><br />
                  A agressividade em relação ao dinheiro de outras pessoas em finanças conjuntas ou corporativas é característica.<br /><br />
                  É preciso cuidado com conflitos a respeito de heranças, impostos e finanças conjuntas.<br /><br />
                  Os indivíduos mais evoluídos podem se interessar por estudos de ocultismo, poderes psíquicos e vida após a morte. Em indivíduos menos evoluídos, podem existir tendências criminosas.<br /><br />
                  Esta posição cria um poderoso impulso sexual. Os nativos com frequência agem em segredo por uma variedade de motivos, tanto bons quanto maus. <br />`,

                  `Júpiter na Oitava Casa indica possíveis benefícios por intermédio de heranças, seguros e finanças conjuntas.<br /><br />
                  Contudo, se Júpiter estiver sob tensão no mapa, pode haver litígios com relação a pesados impostos sobre heranças.<br /><br />
                  Nos assuntos religiosos, há um forte interesse pela vida após a morte. É provável que essas pessoas se interessem pelo desenvolvimento espiritual.<br /><br />
                  Alguns podem até mesmo contar com dons mediúnicos e se comunicar telepaticamente com habitantes de outras esferas.<br /><br />
                  Com frequência, os nativos se sentem atraídos por negócios como casas funerárias, seguros, contabilidade de impostos e levantamento corporativo de fundos. <br />`,

                  `Saturno na Oitava Casa indica envolvimento com finanças de parceiros, dinheiro corporativo, seguros, impostos e heranças, o que sempre traz responsabilidades.<br /><br />
                  Os nativos devem desenvolver seu senso de justiça na utilização de recursos materiais, porque são responsáveis pelas suas propriedades, bem como pelas dos outros.<br /><br />
                  Há possibilidade de ocorrer litígios ou outros problemas com dinheiro, heranças ou bens de outras pessoas.<br /><br />
                  Talvez lhes neguem direitos legais sobre heranças. Ou em caso de divórcio, podem sofrer perdas por meio de pensões alimentícias.<br /><br />
                  Há responsabilidade com impostos e devem pagá los em dia para prevenir dificuldades legais.<br /><br />
                  O nativo pode se casar com uma pessoa pobre ou com renda limitada, o que pode tornar o casamento um fardo em termos financeiros.<br /><br />
                  Há também a possibilidade de haver restrições nas inibições profissionais devido à falta de capital.<br /><br />
                  Entretanto, o dinheiro pode ser ganho por intermédio da habilidosa administração do dinheiro de outras pessoas e de recursos colocados sob a sua jurisdição.<br /><br />
                  É preciso trabalhar os valores espirituais e o medo da morte. São comuns os sonhos angustiantes e experiências psíquicas de efeito psicológico perturbador.<br /><br />
                  Se houver essa dedicação, Saturno pode trazer um profundo conhecimento espiritual sobre os mistérios da vida. <br />`,

                  `Mudanças na vida podem surgir subitamente. Há impaciência com as mudanças lentas: elas têm que acontecer rápido.<br /><br />
                  Em tudo há uma grande necessidade de experimentar a paciência para andar em sintonia com o ritmo da natureza e o fluxo da vida.<br /><br />
                  O pensamento é frutífero e criativo, cheio de novas ideias. O nativo tem suas próprias opiniões, resiste a todas as pressões de outras pessoas em fazer-lhe a cabeça.<br /><br />
                  As paixões e a atração física podem tomar a proporção de um furacão. Os relacionamentos podem trazer algo de fatal e ser muitas vezes subitamente interrompidos.<br /><br />
                  Atenção para o mundo afetivo: problemas de saúde podem vir decorrentes de infelicidades emocionais. <br />`,

                  `O nativo possui grande imaginação, pode lidar com assuntos místicos ou ocultismo. Pode desenvolver um canal aberto para as dimensões sutis, intuição, telepatia ou mediunidade.<br /><br />
                  Sente-se atraído pelo lado profundo e misterioso da vida. Os sonhos podem ser fonte de conhecimento através de experiências fora do corpo (viagem astral).<br /><br />
                  O nativo pode ser solicitado a fazer sacrifícios para ajudar os outros a ampliarem seus recursos.<br /><br />
                  Ou pode haver engano ou confusão ao lidar com recursos e bens compartilhados. Sempre que uma cirurgia for recomendada, o nativo deve obter uma segunda e/ou terceira opinião médica.<br /><br />
                  Crises e mudanças decorrem em segredo, no íntimo do ser. Pode sentir dificuldades em colocar fronteiras entre o lado de cá (matéria) e o lado de lá (sutil).<br /><br />
                  Deve aprender a dizer não, para não se envolver com pessoas confusas. Há tendência para sonhos estranhos, pesadelos ou insônia.<br /><br />
                  Na via positiva, pode desenvolver seu lado mágico, sensível e espiritual. Cultivar a inspiração, o amor às artes e viver uma sexualidade sagrada.<br /><br />
                  O desafio é apurar a sensibilidade, cultivar refinamento dos relacionamentos íntimos e viver as grandes transformações emocionais que deles resultam.<br /><br />
                  É importante que o nativo vivencie os assuntos ligados à sexualidade com o máximo de beleza e sacralidade possível. <br />`,

                  `Plutão nesta casa exerce poderosa influência, que lida com a compreensão da continuidade da vida e da consciência após a destruição do corpo físico.<br /><br />
                  A necessidade de conhecer o mundo espiritual e oculto pode manifestar-se como um interesse pela reencarnação, pelo carma, por astrologia, ioga, meditação e outros assuntos ocultos.<br /><br />
                  A percepção dos planos sutis de energia proporciona profundos insights na física, um assunto que lida com a energia e os componentes essenciais da matéria.<br /><br />
                  Nos piores casos, podem surgir sérios problemas com dinheiro de parceiros, seguros, impostos e heranças. Pode também haver tentação a utilizar forças ocultas egoisticamente para adquirir as habilidades de outros.<br /><br />
                  Esta posição proporciona ao nativo uma poderosa vontade, algumas vezes combinada à dons mediúnicos. Com frequência, está presente uma atitude radical do tipo “fazer ou morrer”.<br /><br />
                  A vida para o nativo é um assunto sério. Geralmente se preocupa somente com assuntos realmente importantes, com pouca paciência para trivialidades.<br /><br />
                  Portanto, tendem a se envolver em drásticas situações de vida ou morte, o que algumas vezes faz com que mude a sua maneira de viver ou sua visão moral.<br /><br />
                  Nos melhores casos, o nativo é capaz de superar forças malignas pela confiança em poderes espirituais mais elevados.<br /><br />
                  Possui a capacidade de restauração e regeneração dos recursos rejeitados pelos outros. Possui também grande força e engenhosidade nas crises.<br /><br />
                  Muitas das suas atividades são realizadas em segredo e só aparecem nos estágios finais de desenvolvimento. <br />`,

                  `É preciso observar se há tendência de viver com base nos recursos alheios.<br /><br />
                  O nodo sul mostra que em vidas passadas o nativo utilizou seu poder de envolvimento emocional e sexual para manipular os outros.<br /><br />
                  Nesta vida deve desenvolver seus próprios recursos e valores, em vez de confiar nos recursos e valores alheios.<br /><br />
                  Há a necessidade de ganhar dinheiro por seus próprios meios, mesmo que possam viver sem problemas com o que ganham de outros. Desta forma, desenvolvem um sentido mais verdadeiro de seu próprio valor.<br /><br />
                  Há necessidade de entender a si mesmo, desenvolver seus dons e talentos inatos. De aprender e de aceitar o mundo da forma e da matéria.<br /><br />
                  O caminho da evolução passa pela construção de seu merecimento, desenvolvendo autoestima e acreditando em suas capacidades para obter a paz e a segurança de que necessita. <br />`,

                  `Esta casa se refere tradicionalmente à morte e ao renascimento, ou a regeneração.<br /><br />
                  Mas ela também está muito ligada ao uso que está sendo feito das energias que nascem de todos os tipos de relacionamento, particularmente daquelas que resultam dos acordos contratuais, nos bens compartilhados e na vida íntima.<br /><br />
                  Nosso mundo moderno está basicamente apoiado em contratos feitos por indivíduos e/ou grupos. Mas estes contratos mudam com muita frequência – são feitos, desfeitos e refeitos.<br /><br />
                  Isto se aplica até mesmo aos casamentos e àquelas associações de trabalho que, no passado, tinham um caráter permanente.<br /><br />
                  O nativo com a Parte da Fortuna nessa posição pode se envolver demais em problemas administrativos. É importante administrar com eficiência o poder depositado sobre si.<br /><br />
                  Deve abandonar hábitos e comportamentos destrutivos. Deve também buscar introspecção profunda, investigação dos mistérios, desejo e transformação, poder e transcendência de forma escorpiana: mergulhando intensamente, com paixão, renovando-se a cada instante. <br />`,

                  `Quem tem Quíron na casa 8 pode se tornar um bom terapeuta sexual e ajudar outros a encontrar o prazer na vida sexual, porém sua vida sexual não é satisfatória.<br /><br />
                  Alguns podem se sentir impotentes como uma fuga do sexo, com medo que outros possam dominá-lo. No outro extremo, há possibilidade ainda da compulsão por sexo.<br /><br />
                  O mito de Quíron está muito presente nessa colocação: tem talento para curar ou reabilitar os outros, mas não a si mesmo e isso pode estar presente também na reabilitação de qualquer deficiência, mental ou física.<br /><br />
                  Também pode ser incumbido de cuidar de recursos dos outros, enquanto tem muito pouco para si ou ao contrário, depender do dinheiro de outras pessoas ou destinar o que ganha para apoiar os outros.<br /><br />
                  Tem a tendência de aceitar os valores da família, grupo ou sociedade rapidamente. A cura de Quíron na casa 8 é confrontar os seus sentimentos mais íntimos de fraqueza.<br /><br />
                  Reconhecer e assumir a responsabilidade por seu próprio poder e encontrar maneiras de expressá-lo de forma construtiva. <br />`,

                  `As uniões do nativo com Juno neste signo são vividas com paixão. Sua vida sexual é vivenciada sobretudo no casamento.<br /><br />
                  Aliás, essa sexualidade vivida no casamento, libera uma espécie de fogo regenerador para a própria pessoa e para o parceiro/a. O sexo adquire ares sagrados.<br /><br />
                  É importante afastar os fantasmas e as sabotagens que rondam a relação. Em matéria de negócios, os nativos tendem a investir no que é belo ou no que passa promover harmonia.<br /><br />
                  Os relacionamentos mais importantes são aqueles que proporcionam profundidade e intensidade. Onde haja confiança, sexualidade e bens em conjunto.<br /><br />
                  Pode estabelecer parcerias através de investimento conjunto, em atividades ocultas, exploração de recursos minerais ou atividades que lidam com artigos e atividades sexuais, em minas, grutas, selvas, durante rituais ou em locais de cura ou ocultismo. <br />`,

                  `Nas vidas passadas o nativo foi muito materialista. Sentia que as pesquisas espirituais eram algo que absolutamente não lhe diziam respeito.<br /><br />
                  O seu comportamento de visão limitada pode ter acarretado muitos fracassos em outras vidas.<br /><br />
                  Era também muito duro em seus julgamentos (e continuará a sê-lo, no início desta vida). Mas sua perspicácia psicológica e seu faro causarão espanto.<br /><br />
                  Deve agora e se mostrar mais tolerante. Cultivar uma busca mais profunda acerca dos mistérios da vida e procurar um ideal espiritual. <br />`,

                  `Em suas vidas passadas tudo acabava mal para o nativo, por causa de certos traços de carácter negativos, dos quais ele deve agora se livrar.<br /><br />
                  O nativo se complicava nas relações humanas, deixava-se levar a situações inverossímeis por sua necessidade de sexo e de dinheiro.<br /><br />
                  É possível que tenha tido faculdades mediúnicas, dons ocultos que tenha utilizado mal (para fins materiais e pessoais). É possível também que tenha vivido mortes muito dolorosas.<br /><br />
                  A natureza do desejo energiza a necessidade de criar uma satisfação futura. A emoção do amor é frequentemente ligada a uma raiva ou a um ressentimento do passado, a lembranças dolorosas.<br /><br />
                  Sexualmente, oscila de períodos de intensa necessidade a períodos de completa falta de interesse. Seu impulso sexual está relacionado a um forte desejo de possuir.<br /><br />
                  Às vezes, pode secretamente ter ciúmes dos outros ou inveja dos que parecem ter mais do que ela. Há tendência de esconder de seus próprios sentimentos.<br /><br />
                  Há muita impaciência, uma vez que está experimentando a profundidade de suas próprias necessidades e sentindo a influência das necessidades de outras pessoas.<br /><br />
                  Isto frequentemente provoca um conflito entre a maneira como se relaciona com a sociedade e o modo como verdadeiramente se sente.<br /><br />
                  Muitas vezes existe grande ressentimento, porque se sente enganada ou privada de muitas coisas que ela acredita serem suas.<br /><br />
                  Tende a passar a vida fazendo as coisas da maneira mais difícil, invejando o modo com os outros podem atingir as mesmas metas com menos esforço.<br /><br />
                  Experimenta um sentimento de isolamento do mundo. Há alguns resíduos de vidas passadas, de um amor perdido.<br /><br />
                  Como resultado, acha difícil confiar inteiramente nas pessoas que encontra na sua vida atual porque, inconscientemente, vê em cada uma delas, uma das partes simbólicas do amor do qual foi privado no passado.<br /><br />
                  Lições cármicas: fazer bom uso do dinheiro dos outros, aprender a perdoar para se abrir ao amor, buscar uma perspectiva espiritual mais elevada, que permitirá a pessoa não temer a morte, as perdas e as transformações da vida. <br />`,

                  `O nativo se esforçou para corrigir os desvios de comportamento das suas vidas passadas.<br /><br />
                  Pode ter sofrido muito com as catástrofes que ele mesmo desencadeara com sua agressividade destruidora: fim brutal das relações afetivas, fracassos dolorosos em seus empreendimentos profissionais, dilapidação de suas heranças, rupturas violentas com amigos e parceiros, etc.<br /><br />
                  É provável também que você tenha conhecido uma (ou algumas) morte (s) violenta (s).<br /><br />
                  Como sua desonestidade, sua brutalidade ou suas pulsões destruidoras causaram um grande mal, escolheu para esta vida um programa positivo: aprendizado da paciência, controle do mau equilíbrio emocional, transformação, purificação, busca espiritual e progresso na honestidade financeira. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! A posição de Júpiter nesta casa sugere que em vidas passadas, o nativo esteve envolvido em mistérios, questões de feitiçaria ou de magia negra ou talvez também com espionagem e polícia secreta.<br /><br />
                  Pode ter sido obcecado pelo medo de morrer.  Em todo caso, sua filosofia de vida era pouco ética e sua honestidade financeira, das mais duvidosas.<br /><br />
                  Com a busca da espiritualidade e um esforço de discernimento, nesta vida evitará que se deixe cair na armadilha de grupos de fanáticos ou de seitas mal intencionadas.<br /><br />
                  Um esforço de honestidade financeira lhe dará razões reais para ficar orgulhoso de si. Enfim (se isso tiver acontecido no passado) cessará de provocar medo nos outros, deixará de usar os assuntos de morte para garantir seu poder. <br />`,

                  `Nesta casa, Saturno indica diversas possibilidades. A pessoa foi iniciada em conhecimentos espirituais elevados, mas não utilizou seu saber de maneira construtiva.<br /><br />
                  Ou então, tinha a possibilidade de se instruir espiritualmente e negligenciou esses estudos. Ou se recusou a fazê-los.<br /><br />
                  Terá o nativo praticado magia negra? É possível. A sua atitude negativa se projetava sobre os que o cercavam e acarretava a morte (física ou simbólica) dos seus, de sua família, dos seus amigos, das suas empresas.<br /><br />
                  Esta posição de Saturno indica muitas vezes poderes mediúnicos mal utilizados no passado, mas que permanecem.<br /><br />
                  O nativo é agora inspirado a desenvolvê-los numa ótica de auxílio aos outros, de pesquisa espiritual.<br /><br />
                  Deve ser prudente na escolha dos grupos religiosos ou esotéricos que frequenta. Sabe muitas coisas sobre a vida e a morte.<br /><br />
                  Pode reencontrar, melhor do que ninguém, a história das suas próprias vidas anteriores. Uma vez consciente, pode progredir no conhecimento espiritual e se tomar um guia para os outros. <br />`,

                  `Urano retrógrado aqui indica preocupação com os mistérios da vida que ultrapassam a simples aparência física visível.<br /><br />
                  Como Urano está exaltado na Oitava Casa, pode indicar interesse por ocultismo, telepatia, vida após a morte e áreas científicas, como a física atômica e multidimensional.<br /><br />
                  Pode haver insights sobre os mistérios da natureza e do universo. Os nativos com frequência passam por súbitas mudanças da sorte devido a heranças, casamento, sociedades, seguros, impostos e finanças corporativas.<br /><br />
                  É importante desenvolver o desapego e um maior distanciamento emocional em relação ao sexo e às riquezas materiais.<br /><br />
                  A vida precisa e deve ser considerada como um processo dinâmico: a única coisa certa no reino material é a mudança.<br /><br />
                  Esta posição destina-se a criar a percepção de que os valores espirituais são as únicas coisas de importância duradoura. <br />`,

                  `Os nativos que têm Netuno retrógrado na casa 8, traz de vidas passadas experiências obscurecidas pela feitiçaria, pela magia negra ou pelo envolvimento com  seitas distorcidas.<br /><br />
                  Podem ter utilizado seus dons mediúnicos ou sensoriais para fins maléficos: explorar a credulidade pública, garantir a promoção social ou ludibriar os incautos.<br /><br />
                  Quando falo de feitiçaria, isso pode parecer talvez muito exagerado, ou muito distante. Entretanto, as sociedades que nos precederam praticaram incríveis horrores, com o pretexto da religião.<br /><br />
                  Portanto, o nativo que desembarca nesta vida com essas lembranças inconscientes pode se comportar de duas maneiras: ou bem não compreendeu ainda inteiramente, e continua a se deixar seduzir por profetas duvidosos e por seitas estranhas.<br /><br />
                  Ou então se mantém afastado, prudentemente, para não recair nas armadilhas de outrora. A casa 8 é a casa das heranças. O nativo pode ter espoliado ou enganado seus familiares, tomando para si tudo o que podia.<br /><br />
                  Nesta vida, as perdas de heranças podem fazê-lo refletir sobre as responsabilidades que o dinheiro acarreta. Alguns nem sempre compreendem isso e desenvolvem um complexo de perseguição, julgando que seus irmãos e irmãs os "despojaram" dos seus direitos "naturais".<br /><br />
                  Se você é praticante de uma religião, tende a agarrar-se à tradição, de tal modo está tomado pelo medo de se desviar. Pode adquirir crenças reacionárias ou rígidas, mas tão tranquilizadoras!<br /><br />
                  É preciso cuidado com o fanatismo! O caminho é desapegar-se. Tanto de suas crenças rígidas, quanto de seu materialismo. Desenvolver a espiritualidade com liberdade, respeito e tolerância. <br />`,

                  `Levado por um forte instinto vital, o nativo dispõe de um excepcional poder. Tanto para o bem, quanto para o mal.<br /><br />
                  Que fez ele, em suas vidas anteriores? Muitas experiências sexuais e aventuras na vida noturna. É alguém que "viveu muito" e que, como tal, conhece os recantos secretos da alma humana.<br /><br />
                  Tendo usado os poderes do dinheiro em seu proveito e tendo manipulado as pessoas para saciar sua própria sede de poder, foi tanto mais negativo quanto grande era a sua influência.<br /><br />
                  Tendo desvirtuado os mais altos valores espirituais em seu benefício, abusou da fé dos outros. Assim, semeou a morte em tomo de si, acarretando o fim violento das suas empresas, e das suas relações afetivas.<br /><br />
                  Nesta vida Plutão lhe dá poderosos meios para mudar o eixo de sua evolução. Seus dons devem ser utilizados para a cura, a transformação, a purificação e o desenvolvimento espiritual. <br />`,

                  `Quem tem Quíron na casa 8 pode se tornar um bom terapeuta sexual e ajudar outros a encontrar o prazer na vida sexual, porém sua vida sexual não é satisfatória. Alguns podem se sentir impotentes como uma fuga do sexo, com medo que outros possam dominá-lo.<br /><br />
                  Há possibilidade ainda da compulsão por sexo. O mito de Quíron está muito presente nessa colocação: tem talento para curar ou reabilitar os outros, mas não a si mesmo e isso pode estar presente também na reabilitação de qualquer deficiência, mental ou física.<br /><br />
                  Também pode ser incumbido de cuidar de recursos dos outros, enquanto tem muito pouco para si ou ao contrário, depender do dinheiro de outras pessoas ou destinar o que ganha para apoiar os outros. A tendência é aceitar os valores da família, grupo ou sociedade muito rapidamente.<br /><br />
                  A cura de Quíron na casa 8 é confrontar seus sentimentos mais íntimos de fraqueza. Reconhecer e assumir a responsabilidade por seu próprio poder e encontrar maneiras de expressá-lo de forma construtiva <br />`,

                  `As uniões desta pessoa com Juno neste signo ou setor são vividas com paixão. Sua vida sexual é vivenciada sobre tudo no casamento, ou nas uniões que tiverem.<br /><br />
                  Aliás, essa sexualidade vivida no casamento, libera uma espécie de fogo regenerador para a própria pessoa e para o parceiro/a.<br /><br />
                  Se existir uma forte influência de Netuno/Marte/Vênus, perigo de fantasmas que rondam a relação.<br /><br />
                  São pessoas que em matéria de negócios tenderão a investir no que é belo ou no que possui uma certa harmonia. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 09</strong>`,
            text: [
                  `Ao aumentar a compreensão e a perspectiva da vida através de viagens, leituras ou pesquisas filosóficas, o Sol na casa 9 se vitaliza e potencializa.<br /><br />
                  A jornada do nativo atravessa diferentes grupos, religiões, filosofias e estudos para criar uma visão pessoal da verdade que ao ser compartilhada com os outros, criará o seu senso de identidade e a sua distinção como ser único.<br /><br />
                  É através do caminho pela busca de sabedoria que o nativo ganhará a inspiração da sua alma.<br /><br />
                  O que aprender em seu caminho deve ser ensinado e compartilhado, pois esse conhecimento também será útil para os outros e só terá significado real se puder ser passado para frente.<br /><br />
                  O grande aprendizado é no sentido de conseguir vivenciar a filosofia e os grandes significados da vida na realidade do aqui-agora.<br /><br />
                  Assim as descobertas dos aspectos mais abstratos da vida podem orientar seus compromissos pessoais e iluminar a vida mais mundana.<br /><br />
                  A vida jorra do conhecimento e é ali que esse Sol vai buscá-la, transitando com facilidade entre conceitos abstratos, linguagens simbólicas, diferentes culturas, princípios ou leis.<br /><br />
                  O nativo descobre que a vida é expansão, por isso quer viajar e pode estar sempre se aventurando. Compreende que a alma precisa ir longe, pois é do longínquo que volta reabastecida.<br /><br />
                  Sabe que não é possível ficar apenas com experiências conhecidas, pois só podemos crescer ao sair da área de segurança. <br />`,

                  `A Lua nessa posição indica uma natureza inquieta e nômade que não cria raízes. O nativo está sempre andando pelo mundo ou diversificando interesses.<br /><br />
                  A religião, a filosofia e o conhecimento são necessidades emocionais. Pensa com profundidade e leve em consideração dos aspectos mais profundos da vida.<br /><br />
                  É psíquico por natureza própria e é capaz de ver e sentir além das fronteiras do mundo material.<br /><br />
                  As viagens ao exterior, o contato com estrangeiros ou com mercadorias importadas podem ter muita importância na vida ou no trabalho.<br /><br />
                  Talvez, antes de encontrar o próprio caminho, passe por uma grande busca, uma jornada interior. Entretanto, tem uma visão clara sobre a maneira de fazer as coisas.<br /><br />
                  Pode se sentir atraído por profissões ou hobbies nas áreas de ensino (professor ou instrutor) ou que promova intercâmbios com regiões distantes, com viagens, ou com outras visões sobre o mundo. <br />`,

                  `...`,

                  `Mercúrio nesta casa indica interesse por filosofia, leis e educação superior, conduzindo a uma educação elevada e a altos títulos.<br /><br />
                  Os nativos com esta posição de Mercúrio adoram viajar e são curiosas a respeito de países e culturas estrangeiras. Podem ser bons historiadores e antropólogos.<br /><br />
                  É preciso cuidado com o orgulho e esnobismo intelectual assim como crenças e opiniões sectárias, dogmáticas. Suas decisões se baseiam na ética e na moral, bem como em considerações práticas.<br /><br />
                  Percorre longas distâncias para adquirir o conhecimento que considera importante ou para buscar ensinamentos religiosos e gurus que os esclareçam.<br /><br />
                  É importante para os nativos com esta posição compreender a evolução das ideias fundamentais que orientam o pensamento social, as leis, a filosofia e a religião dominantes.<br /><br />
                  Muitos professores possuem Mercúrio na casa 9. <br />`,

                  `Vênus na Nona Casa indica amor pela filosofia, pela religião e pela arte. As pessoas com esta posição com frequência fazem longas viagens por prazer.<br /><br />
                  Os parceiros no casamento e outros importantes contatos sociais e românticos podem acontecer por intermédio de universidades e igrejas, durante longas viagens ou em países estrangeiros.<br /><br />
                  Podem ocorrer fortes ligações com estrangeiros ou pessoas de outras raças e religiões. Os nativos possuem ideais elevados sobre o amor.<br /><br />
                  Podem tentar converter as pessoas amadas às suas próprias opiniões religiosas ou filosóficas. Essas pessoas geralmente são bem informadas no que se refere à história cultural e artística.<br /><br />
                  Em alguns casos, tornam se especialistas nessas áreas. Vênus nesta casa muitas vezes proporciona amor à música e à arte religiosas.<br /><br />
                  Pode haver relacionamentos harmoniosos e lucrativos com as pessoas da família. <br />`,

                  `Marte na Nona Casa indica uma pessoa interessada em viagens, esportes ao ar livre e causas religiosas, filosóficas, sociais ou educacionais. O nativo é um cruzado que defende agressivamente os ideais que abraça.<br /><br />
                  Se houver ampla compreensão da vida, esses nativos podem ser muito valiosos na liderança de atos que visam reformas sociais. Trabalham para inspirar atitudes e comportamentos mais éticos ou elevados nas pessoas.<br /><br />
                  Podem apoiar ativamente instituições de aprendizado superior, religiosas e filosóficas, que servem à Humanidade. Como manifestam esses interesses por meio de ações, os seus esforços podem ser muito eficientes.<br /><br />
                  Essas pessoas procuram aventura e experiências amplas, que com frequência as conduzem a viagens ao exterior, bem como à exploração das áreas de filosofia e educação superior.<br /><br />
                  Algumas vezes, as pessoas com esta posição de Marte juntam se a este tipo de organizações.<br /><br />
                  A sua militância social pode manifestar-se por meio de organizações que abrangem um amplo aspecto político, do violentamente revolucionário até o reacionário.<br /><br />
                  Essa posição também pode criar evangelistas do tipo “fogo do inferno e condenação eterna”.<br /><br />
                  Os nativos podem provocar ressentimentos nos outros, se o nível da sua compreensão lhes oferecer um ponto de vista limitado ou fanático.<br /><br />
                  Aqueles que lutam agressivamente por suas crenças e organizações e são intolerantes com as abordagens alheias podem ter Marte sob tensão na casa 9.<br /><br />
                  A tendência a condenar aqueles com quem não concordam surge da falta de paciência para compreender as circunstâncias e experiências da vida de outras pessoas.<br /><br />
                  Além disso, pode haver uma identificação pessoal com alguma crença religiosa, política ou filosófica que proporcione ao indivíduo um sentimento de vaidade. <br />`,

                  `Júpiter na Nona Casa indica profundo amor pela filosofia, pela religião, espiritualidade e educação superior.<br /><br />
                  Os nativos com esta posição costumam formular um padrão moral e um sistema de filosofia definidos, pelos quais moldam as suas vidas.<br /><br />
                  Também se interessam bastante por todas as codificações de pensamento, incluindo leis, espiritualidade, religião, filosofia e educação superior.<br /><br />
                  Assim, são bons professores e com frequência se associam a instituições de ensino superior e geralmente, procuram adquirir o máximo de educação.<br /><br />
                  Mas se Júpiter estiver sob tensão no mapa, talvez não tenham oportunidade de uma educação superior, ou podem desperdiçá-la devido à preguiça ou à indiferença pela disciplina que a educação exige.<br /><br />
                  Se optarem por um caminho religioso, tornam-se sacerdotes ou ocupam posições de importância dentro da hierarquia da Igreja, pois geralmente são liberais e tolerantes com as pessoas.<br /><br />
                  Mas e preciso cuidado com posturas dogmáticas e crenças religiosas extremistas, que podem provocar intolerância.<br /><br />
                  Os nativos gostam de viajar, procuram estudar em países estrangeiros, aprender línguas ou visitá-los para aprender as suas culturas.<br /><br />
                  As atividades profissionais podem-se relacionar a publicação, instrução, turismo e viagens. <br />`,

                  `Saturno na Nona Casa indica um sério interesse pela religião, pela filosofia e pela educação superior.<br /><br />
                  Os sistemas de crença são julgados por seu valor prático e por sua contribuição para a estabilidade social, especialmente na fase mais avançada da vida.<br /><br />
                  Os nativos com esta posição geralmente buscam a educação em instituições tradicionais de ensino superior, como acesso ao status e progresso profissional.<br /><br />
                  Desejam destaque pessoal por intermédio de alguma realização nas áreas de educação, filosofia ou religião.<br /><br />
                  Procuram posições de poder e autoridade dentro de importantes instituições educacionais ou religiosas.<br /><br />
                  Muitos professores e membros de universidades podem ter Saturno nesta casa. Elas também se preocupam com a sua reputação moral.<br /><br />
                  Os seus padrões religiosos costumam ser conservadores e tradicionais. É preciso observar se há tendência para atitudes autoritárias intolerantes no que se refere à religião e à moralidade.<br /><br />
                  As atividades profissionais e os negócios provavelmente se dirigem para leis, ensino, publicações, religião e viagens.<br /><br />
                  As pessoas com esta posição de Saturno viajam mais a negócios ou como meio de obter status do que por prazer. <br />`,

                  `Urano nessa posição inspira a liberdade de pensamento. A compreensão do mundo o deixa livre para escolher seu próprio caminho.<br /><br />
                  Quanto maior a vontade dos outros em submeter o nativo a algum tipo de controle, maior será o anseio deste pela liberdade.<br /><br />
                  O pensamento original favorece o estudo da ciência, da tecnologia e da matemática. Pode haver dedicação e interesse por ciências ocultas.<br /><br />
                  Atração pelo que é revolucionário. Mas os processos mentais podem ser um tanto indisciplinados e pouco cuidadosos. Pode indicar impaciência com pessoas de resposta lenta.<br /><br />
                  O trabalho é uma fonte de excitação desde que seja algo que fuja da rotina. Há preferência por relações livres e mutáveis, que não sejam limitantes.<br /><br />
                  Não gosta que ninguém influencie a escolha da própria direção. Quanto mais fácil for o fluir do relacionamento, maior será a sua duração. Especial prazer em explorar novos territórios da experiência sexual. <br />`,

                  `O nativo tende a ser mentalmente aberto, impressionável e místico. Pode desenvolver uma filosofia muito refinada e até mesmo ter visões espirituais.<br /><br />
                  É inspirado, com potencial para ideias brilhantes e geniais. Mas é preciso cuidado com o excesso de idealismo, com sonhos irreais, para não se iludir com supostos mestres ou professores.<br /><br />
                  A filosofia e a religião podem se tornar uma fuga, um refúgio para o mundo quotidiano. O nativo pode perder-se num emaranhado de ideias, ideologias e crenças que não o levam a nenhum lugar.<br /><br />
                  Atenção para a confusão na escolha da faculdade ou dificuldades no estabelecimento de metas. Há potencial para poderes psíquicos.<br /><br />
                  Possibilidade de viagens além-mar, viagens místicas a lugares sagrados. O nativo é atraído por assuntos ligados a outros países, outras culturas.<br /><br />
                  Estudos, pesquisas ou trabalhos ligados à arte, cultura e religião. Na via positiva, pode desenvolver uma visão superior, uma força inspiradora que renova suas esperanças e fé.<br /><br />
                  Uma visão do mundo bastante generosa, ampla e flexível, onde prevalece a compaixão. O desafio é cultivar dedicação ao caminho do amor, da arte e da espiritualidade como autoconhecimento e aprimoramento.<br /><br />
                  Desenvolver o refinamento mental, a mediunidade, a ligação e a comunicação com o divino para ser um canal de inteligências superiores. <br />`,

                  `Plutão nesta casa indica interesse pela regeneração dos sistemas legais, educacionais, morais e filosóficos.<br /><br />
                  Isso se manifesta na capacidade para perceber as causas fundamentais dos problemas relacionados à ordem social mais ampla.<br /><br />
                  A intuição para essas questões é bastante desenvolvida, proporcionando profundos insights sobre o futuro da humanidade e as suas instituições.<br /><br />
                  Mas a ambição de adquirir destaque através da educação superior, de viagens ou realizações espirituais, quando levada a extremos, pode resultar em orgulho espiritual e competitividade.<br /><br />
                  O nativo com esta posição não tolera a hipocrisia e a injustiça social. Algumas vezes pode se tornar revolucionário, caso sinta que as instituições existentes não merecem respeito.<br /><br />
                  Nos piores casos Plutão pode indicar um fanático religioso autoritário, inclinado a impor as suas opiniões aos outros.<br /><br />
                  Ou a possibilidade de filosofias antissociais e crenças ateístas. Contudo, o nativo pode eventualmente passar por profundas experiências que o forçam a mudar sua visão religiosa.<br /><br />
                  Nos melhores casos, fica evidente a capacidade de liderança espiritual. São realizados empreendimentos significativos.<br /><br />
                  Essa pode ser uma boa posição para Plutão, porque aqui a vontade é guiada por um padrão moral. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo teve muita necessidade de liberdade, desenvolveu interesse por questões filosóficas, conhecimento, estudos superiores, viagens ao exterior e aventuras.<br /><br />
                  Sua visão intuitiva pode ser boa, a questão agora é integrá-la na vida prática de todo dia. Há necessidade de desenvolver a capacidade de pensar de modo racional e lógico, ao invés de se guiar pela fé cega.<br /><br />
                  O caminho da evolução é aprender a viver mais o dia-a-dia, convivendo mais com as pessoas e situações do seu meio mais próximo, irmãos, parentes e vizinhos, que podem ajudar a encontrar as respostas para os seus problemas.<br /><br />
                  Comunicar-se com humildade e flexibilidade. Ensinar e compartilhar com os outros o seu conhecimento, sempre aberto para aprender.<br /><br />
                  Vale a pena explorar todas as possibilidades que têm à mão, tudo aquilo que o ambiente próximo tem a oferecer, antes de comer para longe à procura de loucas aventuras. <br />`,

                  `Tal posição da Roda da Fortuna acentua a tendência de procurar a felicidade em processos de expansão e autoengrandecimento.<br /><br />
                  Pode indicar um forte desejo de viagens a lugares distantes, conhecer outras culturas e descobrir “como vivem outras pessoas”.<br /><br />
                  Pode também levar a uma vontade ardente de perder o próprio ego num vasto movimento religioso, num reino de existência transcendente. O caminho é a busca da Sabedoria.<br /><br />
                  O nativo deve se aprofundar em estudos superiores e buscar uma compreensão maior da vida, indo além dos limites do cotidiano, explorando, de forma sagitariana: com uma visão ampla, otimista e expansiva. Aventure-se. <br />`,

                  `Quíron na casa 9 mostra aqueles que podem programar viagens fantásticas para os outros enquanto eles estão presos no escritório fazendo reservas.<br /><br />
                  Também pode ser um editor ou professor de redação que prepara com dedicação os livros escritos por outros, enquanto secretamente alimenta o desejo de escrever e publicar seus próprios livros.<br /><br />
                  Os pais com Quíron na casa 9 podem tentar direcionar os filhos para um ensino superior enquanto eles nunca tiveram essa chance.<br /><br />
                  Negativamente, também pode significar que pode forçar um filho a estudar uma área de conhecimento que os pais gostariam de ter estudado, embora os filhos queiram outra coisa.<br /><br />
                  Alguns pais podem até mesmo privar seus filhos do ensino superior devido à sua própria frustração.<br /><br />
                  A casa 9 também trata das crenças e da religião e Quíron na casa 9 pode levar à busca fanática de alguma doutrina religiosa ou de uma crença, com a finalidade de curar todas as feridas interiores, ou uma obsessão por viagens ou estudos esquecendo de outras áreas da vida.<br /><br />
                  A questão de Quíron em Sagitário também se relaciona à capacidade de julgamento, a pessoa tende a não ouvir opiniões e conselhos achando que sabe tudo.<br /><br />
                  No entanto, Quíron na casa 9 pode produzir grandes sábios e conselheiros porque tem um grande conhecimento, embora sejam muito modestos. <br />`,

                  `Os relacionamentos mais importantes são aqueles em que há respeito pela religião, crenças e dogmas ou que haja os mesmos interesses religiosos ou filosóficos.<br /><br />
                  Juno enfatiza aqui a dimensão espiritual da parceria, a sintonia filosófica, a busca de sabedoria, as aventuras e viagens junto com o parceiro. A busca de uma parceria ideal que opera em conjunto.<br /><br />
                  Esta também é uma posição que favorece mais de uma união, será provável que na segunda ou terceira união a pessoa seja mais bem sucedida.<br /><br />
                  Há também a tendência de idealizar o parceiro(a) que deve corresponder, de alguma forma ou em algum campo a esta idealização. Tendência de legalizar suas uniões e parcerias.<br /><br />
                  O nativo pode estabelecer parcerias em universidades, agências de viagens, durante viagens internacionais, num país estrangeiro ou com estrangeiros, igrejas, templos, locais religiosos, durante estudos filosóficos ou em locais onde tenham grandes animais. <br />`,

                  `Provavelmente o nativo viveu vidas agitadas, desenraizadas, sem foco ou objetivos estáveis.<br /><br />
                  É possível que tenha sido muito religioso, mas de maneira dogmática ou fanática. Certamente fez um bocado de inimigos, em virtude dos seus excessos verbais.<br /><br />
                  Portanto, deve agora cultivar humildade. Refletir sobre como pode ser mais prático e organizar com bom senso sua vida quotidiana.<br /><br />
                  Deve, ao mesmo tempo, procurar uma orientação mais ampla, elevada e espiritual que irá inspirar toda a sua vida.<br /><br />
                  Respeitar outras culturas, filosofias e religiões. Respeitar as leis, equilibrando a liberdade com a responsabilidade. <br />`,

                  `Esta posição de Vênus sugere que o nativo tenha sido um beato nas vidas passadas, praticando uma religião conformista, puramente social.<br /><br />
                  Ao mesmo tempo, você poder ter permitido inúmeras distorções da lei que pretendia honrar.<br /><br />
                  Além disso, o nativo tem uma grande necessidade por liberdade pessoal e não permite que os outros dificultem ou obstruam o seu espaço.<br /><br />
                  <strong> Em algumas pessoas esta posição se manifesta num grande amor pela vida espiritual.</strong><br /><br />
                  Há necessidade por um sentido de amplitude na vida e sacrifica a intimidade com as outras pessoas a fim de preencher esta necessidade.<br /><br />
                  É uma pessoa independente e por isso não gosta de ser colocado no molde dos desejos dos outros.<br /><br />
                  Pode ser uma posição difícil para o casamento ou qualquer outro relacionamento de natureza duradoura, pois não aceita compromissos permanentes.<br /><br />
                  Carmicamente traz consigo para esta vida um resíduo muito forte de fazer o que gosta e quando gosta de fazê-lo.<br /><br />
                  O nativo deve, portanto, buscar um real progresso espiritual. Praticar amplamente a tolerância religiosa e a abertura para o relacionamento sem medo de perder sua liberdade. <br />`,

                  `Terá o nativo representado um papel ativo na Inquisição da Idade Média? Na época dos puritanos na Inglaterra?<br /><br />
                  Teria ele sido um reformador intransigente? Talvez tenha chegado a torturar prisioneiros e a condená-los à morte, motivado por um fanatismo religioso estreito.<br /><br />
                  Uma coisa é certa: em vidas passadas, o nativo impulsionou filosofias ou religiões dogmáticas e intolerantes. Também pode ter sido um ateu militante, perseguindo sistematicamente os crentes.<br /><br />
                  A lição cármica que se destaca dessa posição de Marte é a de trabalhar para propagar a tolerância, o respeito a outras culturas, às liberdades religiosas e cívicas. Acima de tudo, cultivar uma filosofia prática e humana. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! A casa 9 é a dos ideais que motivam o nativo.<br /><br />
                  Portanto, Júpiter retrógrado na casa 9 indica um nativo cuja filosofia em vidas passadas coube em duas palavras: primeiro eu.<br /><br />
                  "Puxando a brasa para a sua sardinha", o nativo foi impermeável a qualquer grande causa generosa e desinteressada. Pode ter provocado à dedicação dos outros, para em seguida abusar dela.<br /><br />
                  Conquistador, ditador ou guru, vampirizava os seus fiéis, por simples satisfação pessoal. Consequentemente o seu progresso mental e cultural estava bloqueado.<br /><br />
                  Na vida atual, deve encontrar uma filosofia que abra mais espaço aos outros: ser tolerante o bastante para admitir a pluralidade das religiões, respeitar as outras culturas e a liberdade das consciências.<br /><br />
                  Assim poderá descobrir muitas coisas que lhe haviam escapado até aqui. <br />`,

                  `A aptidão para o ensino e para a transmissão dos conhecimentos é ainda mais marcante com Saturno retrógrado na casa 9.<br /><br />
                  O nativo viveu como monge, sacerdote ou sacerdotisa, iniciado ou guia espiritual em civilizações passadas. Mas em seu trabalho, pode ter sido intolerante, dogmático, inquisidor ou fanático.<br /><br />
                  Arrastado por meras questões partidárias, o nativo não procurou estender os seus conhecimentos. Não ampliou a consciência, não expandiu os horizontes, não cultivou a abertura de espírito.<br /><br />
                  Hoje deve liquidar essa dívida estudando com honestidade e tolerante, sem a rigidez de velhas crenças ou filosofias, sem os entraves das correntes religiosas e filosóficas de sua época.<br /><br />
                  Que trabalhe com as novas tecnologias, a história das religiões e das culturas ou o direito, com liberdade de pensamento. Esta busca constante e honesta da verdade lhe trará grandes alegrias. <br />`,

                  `Urano retrógrado aqui indica ideias avançadas em filosofia, religião, espiritualidade e educação superior, trazidas de vidas passadas.<br /><br />
                  As pessoas com esta posição com frequência se afastam de pontos de vista religiosos ortodoxos e se interessam por astrologia, telepatia, ciências ocultas ou a ideia de reencarnação, por exemplo.<br /><br />
                  Os seus conceitos sobre educação são rebeldes e progressistas, com um interesse por novos métodos de ensino, como a utilização de técnicas eletrônicas e audiovisuais.<br /><br />
                  Com frequência, cultivam ideias utópicas e os nativos tendem a viajar de repente, à procura de estímulo e aventura.<br /><br />
                  O mistério do passado remoto, de longas distâncias ou de um futuro utópico os fascina. Daí o seu interesse por assuntos como astronomia ou arqueologia.<br /><br />
                  No seu pior, pode indicar adesão fanática a cultos esotéricos, filosofias políticas ou sociais. Suas respostas prontas para os males do mundo não têm qualquer fundamento prático.<br /><br />
                  Podem ocorrer ideias inspiradas sobre soluções alternativas e mudanças necessárias para a realização de uma ordem social mais humana.<br /><br />
                  Escritores e filósofos que se dedicam à astrologia e ao ocultismo com frequência também têm Urano nesta casa em seu Mapa. <br />`,

                  `Esta casa diz respeito à religião, à filosofia, à expansão da consciência e a buscar espirituais. É provável que o nativo tenha demonstrado, quer muita confusão, quer uma grande intransigência, em suas existências passadas.<br /><br />
                  Em virtude dessa intolerância, faltou-lhe compaixão. Talvez tenha sido sacerdote, ou alto dignitário de uma igreja e não tivesse levado aos fiéis o auxílio que estes tinham direito a esperar dele.<br /><br />
                  Em suas vidas anteriores, vividas no estrangeiro, Netuno indica que o nativo não desenvolveu a verdadeira pesquisa espiritual (que não se deixa encerrar nos dogmas).<br /><br />
                  Talvez inúmeras viagens tivessem constituído o pretexto para essa recusa das responsabilidades.<br /><br />
                  Nesta vida deve abrir seu espírito, compreender que os muros que separam as igrejas não sobem até o céu. Liquidará seu carma buscando a sabedoria, procurando se informar o mais ampla e honestamente possível. É importante não julgar nem condene ninguém. <br />`,

                  `A casa 9 fala dos ideais filosóficas e espirituais, da justiça e da Lei. Portanto, a transformação de Plutão se dá nesses assuntos.<br /><br />
                  Nos melhores casos, o planeta indica apenas a continuação de um trabalho que não pôde ser completado numa vida passada.<br /><br />
                  O nativo pode ter sido sacerdote, missionário ou juiz. Quando morreu, não estava satisfeito com sua tarefa, julgava que algo não fora realizado.<br /><br />
                  Desejava então recomeçar nesta vida. Nos piores casos, o nativo abusou do poder, quer jurídico, quer religioso (ou os dois, num país e numa época em que estavam misturados).<br /><br />
                  Era ele um missionário que impunha à força suas ideias religiosas? Tinha ele matado pessoas em nome de sua fé?<br /><br />
                  Tinha ele exportado para um país estrangeiro ideias destruidoras, embaladas numa apresentação sedutora?<br /><br />
                  De qualquer modo, uma sede de poder e desejos sexuais dissimulados sob uma autoridade religiosa tinham conduzido o nativo a um comportamento sem piedade.<br /><br />
                  Nesta vida, o nativo deve sobre tudo cultivar a tolerância. Pode reencontrar suas antigas vítimas ao sabor das circunstâncias.<br /><br />
                  Mas se expandir a consciência, buscar sabedoria e praticar uma espiritualidade generosa, sua dívida cármica será eliminada. <br />`,

                  `Quíron na casa 9 mostra aqueles que podem programar viagens fantásticas para os outros enquanto eles estão presos no escritório fazendo reservas.<br /><br />
                  Também pode ser um editor ou um professor de redação que prepara com dedicação os livros escritos por outros, enquanto secretamente alimenta o desejo de escrever e publicar seus próprios livros.<br /><br />
                  Os pais com Quíron na casa 9 podem tentar direcionar os filhos para um ensino superior enquanto eles nunca tiveram essa chance.<br /><br />
                  Negativamente, também pode significar que pode forçar um filho a estudar uma área de conhecimento que os pais gostariam de ter estudado, embora os filhos queiram outra coisa.<br /><br />
                  Alguns pais podem até mesmo privar seus filhos do ensino superior devido à sua própria frustração.<br /><br />
                  A casa 9 também trata das crenças e da religião e Quíron na casa 9 pode levar à busca fanática de alguma doutrina religiosa ou de uma crença, com a finalidade de curar todas as feridas interiores, ou uma obsessão por viagens ou estudos esquecendo de outras áreas da vida.<br /><br />
                  A questão de Quíron em Sagitário também se relaciona à capacidade de julgamento, a pessoa tende a não ouvir opiniões e conselhos achando que sabe tudo.<br /><br />
                  No entanto, Quíron na casa 9 pode produzir grandes sábios e conselheiros porque tem um grande conhecimento, embora sejam muito modestos. <br />`,

                  `Juno enfatiza aí, a dimensão espiritual da parceria, a sintonia filosófica. A busca de uma parceria ideal que opera em conjunto.<br /><br />
                  Esta também é uma posição que favorece mais de uma união, será provável que na segunda ou terceira união a pessoa seja mais bem sucedida.<br /><br />
                  Há também uma tendência para idealizar o parceiro/a e que deve se corresponder, de alguma forma ou em algum campo a esta idealização. Tendência a legalizar suas uniões e parcerias. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 10</strong>`,
            text: [
                  `Quando o Sol ocupa a casa 10, o nativo constrói sua identidade no desenvolvimento da carreira, das conquistas profissionais e do status social.<br /><br />
                  Na casa 10, o Sol expressa seus potenciais na busca do reconhecimento de suas habilidades únicas. Há necessidade de ser admirado, de cultivar ambição e realizar seu propósito de vida.<br /><br />
                  Na luta para concretizar suas ambições, acaba desenvolvendo disciplina, perseverança e habilidade de concentrar sua vontade e energia para conquistar a projeção profissional.<br /><br />
                  O ideal é tornar-se uma pessoa centrada, expressando suas forças e qualidades de modo direcionado. Assim pode tornar-se fonte de inspiração e autoridade. Mas é preciso cuidado!<br /><br />
                  Essa inspiração interna pode ser confundida com uma simples posição de destaque, que reluz como se fosse o resumo de um sonho, mas que é apenas ilusão, o verdadeiro “ouro de tolo".<br /><br />
                  Quando esse desvio é tomado e o sentido de identidade ou de valor pessoal se prende demais a títulos ou posições sociais, a vida do nativo pode tornar-se limitada.<br /><br />
                  Isso pode causar uma crise de identidade, fazendo-o perder o sentido da vida se essas coisas lhe são tiradas.<br /><br />
                  Em algum momento da vida algo pode fazer com que o nativo perceba que seu poder vem de si mesmo e não da necessidade que tem da admiração dos outros.<br /><br />
                  O nativo entende o mundo, como ele funciona, quais são suas leis, como alguém deve se comportar na esfera pública, pois sabe que dali é sempre observado.<br /><br />
                  Entende intuitivamente que só conquista o mundo quem escala sua própria montanha e trabalha dia após dia para isso adaptando-se às regras do mundo.<br /><br />
                  Fica claro que, não importa o que os seus antepassados, marido ou esposa fizeram, pois quem precisa fazer algo de significativo e realizar algo é si mesmo. <br />`,

                  `A Lua na casa 10 proporciona o impulso interior para brilhar de alguma forma diante do público ou de ajudar a humanidade numa escala grandiosa.<br /><br />
                  Pode ter uma carência marcada por acontecimentos desagradáveis que ocorreram na infância.<br /><br />
                  Também indica popularidade e destaque na sociedade, isso funciona como um efeito de compensação para os sentimentos de insegurança resultantes da infância difícil.<br /><br />
                  Os pais, sobretudo a mãe, podem ser muito voltados a uma carreira. Há tendência para querer competir com ela ou com outras mulheres.<br /><br />
                  Podem se sentir atraídos por profissões que atendam as necessidades femininas, como em moda, estética, artigos femininos, aparelhos domésticos ou artigos para residência.<br /><br />
                  Pode também se sobressair na comunidade, no país ou na profissão. Isso pode representar extrema importância para si e para outros.<br /><br />
                  É muito importante que o nativo cultive a força de pensamento e a autoconfiança para alcançar sucesso e projeção profissional. <br />`,

                  `...`,

                  `Mercúrio localizado na Décima Casa indica pessoas que buscam a educação por razões de ambição profissional. Elas desejam aumentar o seu conhecimento visando carreiras lucrativas e influentes.<br /><br />
                  Esta posição de Mercúrio oferece aos nativos uma boa habilidade de organização e capacidade para planejar o futuro.<br /><br />
                  As suas carreiras não são acidentais, mas o resultado de planos deliberados destinados a atingir metas específicas.<br /><br />
                  É preciso cuidado com a ambição pessoal desmedida. Isso pode vir acompanhado de uma atitude egoísta, fria ou algumas vezes desonesta, na qual a ambição tem precedência sobre os princípios.<br /><br />
                  Mercúrio na Décima Casa oferece a capacidade de comunicação com as pessoas em posições de poder e liderança.<br /><br />
                  Consequentemente, muitos estrategistas políticos e redatores de discursos possuem esta posição.<br /><br />
                  Também pode indicar habilidade executiva e capacidade de comunicação com o público. É a posição de políticos que se destacaram por suas ideias brilhantes.<br /><br />
                  Pessoas que pertencem a profissões relacionadas aos meios de comunicação, imprensa, literatura, divulgação, ensino ou oratória também podem ter Mercúrio nesta casa. <br />`,

                  `Vênus na Décima Casa indica ambição social e artística. O indivíduo provavelmente irá escolher uma profissão relacionada às artes e, se possuir talento artístico, tem boa chance de reconhecimento.<br /><br />
                  É provável que procure se casar com alguém capaz de lhe proporcionar status e riqueza. Podem existir boas relações e amizade com patrões e pessoas em posições de poder.<br /><br />
                  Esta posição de Vênus proporciona ao nativo sucesso nos contatos com o sexo oposto, o que pode favorecer as suas carreiras.<br /><br />
                  É preciso cuidado para não se tornar socialmente interesseiro ou alguém que esquece os seus velhos amigos assim que realiza suas ambições sociais. <br />`,

                  `Marte na Décima Casa indica pessoas que desejam fama e status. Como são vigorosas na busca de uma carreira possui um forte impulso competitivo para chegar ao topo.<br /><br />
                  Isso com frequência as conduzem a áreas como a política, a administração ou a engenharia. Profissões militares também as atraem. Aqui, Marte é muito poderoso.<br /><br />
                  Revela iniciativa e capacidade executiva na realização prática. Ele também pode produzir líderes políticos eficientes e construtivos.<br /><br />
                  A ambição profissional competitiva dessas pessoas geralmente lhes traz fama ou notoriedade. É preciso cuidado para não utilizar meios desleais na busca de poder ou posição.<br /><br />
                  Quando os erros são revelados, podem resultar em má reputação e mudanças súbitas na sorte. Em casos extremos, pode haver desejo de poder a qualquer custo no que se refere à carreira e ambições. <br />`,

                  `Júpiter na Décima Casa indica destaque e posição elevada na profissão, na maioria das vezes manifestada na última parte da vida.<br /><br />
                  Os princípios religiosos e éticos são utilizados em contatos de negócios e responsabilidades públicas. Ações benevolentes podem levá-los a posições de influência.<br /><br />
                  Porém, essas boas ações podem não ser visíveis ao observador casual.<br /><br />
                  Com esta colocação de Júpiter podem contar com considerável ambição profissional, bem como honestidade e confiabilidade no que diz respeito aos deveres profissionais ou cargos públicos.<br /><br />
                  Os nativos geralmente adquirem boa reputação e são considerados pilares da sociedade. Essa posição de Júpiter confere boa capacidade executiva e de organização.<br /><br />
                  É favorável para aqueles que buscam cargos públicos ou que se envolvem em política. Favorável também para administradores e executivos.<br /><br />
                  Na área da educação superior, estes nativos costumam se preparar com afinco para serem dignos de maior confiança e responsabilidade, sendo recompensados com o reconhecimento dos outros.<br /><br />
                  Possuí atitudes dignas, especialmente nos últimos anos e pode adquirir riquezas nessa fase da vida.<br /><br />
                  Mas a negligência dos assuntos domésticos, enquanto procuram realizar as suas ambições, pode provocar relacionamentos insatisfatórios no lar.<br /><br />
                  É preciso observar-se quanto há hipocrisia e vaidade que podem conduzir ao revés da sorte. <br />`,

                  `Saturno na Décima Casa está poderosamente localizado, porque esta casa corresponde ao signo de Capricórnio, regido por Saturno. Portanto, indica fortes ambições profissionais.<br /><br />
                  O desejo de obter status na profissão é ocorre especialmente após a idade de 29 anos e em anos posteriores. Saturno na casa 10 proporciona capacidade de organização e administração.<br /><br />
                  Desse modo, favorece executivos e políticos. No seu melhor, a integridade moral e o trabalho árduo resultam em autoridade, posição elevada, riqueza e liderança.<br /><br />
                  Mas no seu pior, a tendência de comprometer princípios em nome da ambição finalmente conduz a reveses da sorte, desgraça pública ou perda de posições elevadas.<br /><br />
                  Os nativos com Saturno nesta casa precisam cultivar responsabilidade e extrema cautela com relação aos princípios.<br /><br />
                  Caso contrário, podem se expor à desgraça ou a pesadas dívidas cármicas. Um preço elevado deve ser pago pela violação da lei universal.<br /><br />
                  É importante que a ambição e o sucesso não se tornem fins em si mesmo, mas meios para servir a ordem social mais ampla. Por isso, é exigido um exame cuidadoso dos motivos da busca pelo poder.<br /><br />
                  É muito melhor que as posições de liderança jamais sejam alcançadas se forem mal utilizadas, provocando sofrimentos aos outros.<br /><br />
                  Os erros resultantes só podem ser corrigidos sob circunstâncias difíceis e desfavoráveis. <br />`,

                  `O nativo sente necessidade de escolher uma profissão diferente, inovadora ou excêntrica. Urano nessa casa indica muita inquietação, própria de quem quer resolver tudo por seus próprios meios.<br /><br />
                  Pode haver problemas com chefes e figuras de autoridade, a começar na infância com os próprios pais e professores.<br /><br />
                  É preciso cultivar liberdade, pois acredita que este é o único caminho para a realização. Os trabalhos técnicos e científicos estão favorecidos, mas devem ter um forte vínculo com o futuro da civilização.<br /><br />
                  A carreira pode ser desenvolvida com independência e autonomia, com interesses voltados para as novas correntes de pensamento. Pode haver interesse pela Astrologia.<br /><br />
                  Reputação de modernidade, criatividade e originalidade no amor. O nativo pode se conectar com as novas tendências, descobrir ou introduzir ideias e conceitos que são imediatamente adotados. <br />`,

                  `Netuno nessa casa pode indicar alguma confusão nas escolhas profissionais. Contudo, é um bom posicionamento para uma carreira espiritual ou metafísica.<br /><br />
                  Ou para as artes, o serviço humanitário e a medicina. Netuno tem relação com o mar: a biologia marinha, oceanografia, pesca ou marinha mercante também são opções.<br /><br />
                  É importante realizar seus sonhos através da profissão e o trabalho. Há tendência de se encantar com facilidade pelos mais diversos assuntos e se dispersar.<br /><br />
                  Por outro lado, o nativo pode entregar-se com sacrifício ao trabalho e sentir que não é reconhecido. Desiludir-se com os retornos obtidos no trabalho e a falta de reconhecimento.<br /><br />
                  Há predisposição para se envolver em situações embaraçosas com figuras de autoridade e instituições sociais.<br /><br />
                  Pode também querer fugir de qualquer função social, de compromissos no trabalho e no mundo.<br /><br />
                  Na via positiva pode tocar o espírito humano de uma forma bela, encantadora, artística, doadora e humanitária. Entregar-se aos ideais humanitários e elevados.<br /><br />
                  Com seu trabalho, inspirar nas pessoas a capacidade de sonhar, imaginar e criar. O desafio é estabelecer metas definidas e objetivas.<br /><br />
                  Optar por uma profissão que lhe permita desenvolver talentos e qualidades para canalizar sua sensibilidade.<br /><br />
                  Desenvolver encanto, carisma, senso refinado de beleza, diplomacia, bons costumes, compaixão, confraternização, espiritualidade, imaginação e sonhos. <br />`,

                  `Plutão nesta casa indica força de vontade muito desenvolvida e forte impulso de atingir o sucesso. O nativo com esta posição pode se tornar um líder espiritual na reforma das estruturas de poder existentes.<br /><br />
                  Também é provável que seja líder na ciência ou no ocultismo. Em alguns casos, pode haver inclinação especial para a cura, a clarividência ou a profecia.<br /><br />
                  O desejo de reformar e reabilitar o mundo cria amigos e inimigos poderosos. O nativo tende a ser mal compreendido e pode se tornar uma figura polêmicas.<br /><br />
                  Crises em suas carreiras podem forçá-las a alterar drasticamente as suas atividades profissionais. Nos piores casos, Plutão pode indicar tendências autoritárias e ambições pessoais egoístas.<br /><br />
                  Por vezes, esta posição faz com que os nativos se sintam afastados dos outros devido às suas próprias responsabilidades opressivas.<br /><br />
                  Como são hábeis para lidar com pessoas em posições de poder e para compreender as suas motivações, esta é uma posição favorável para a política e outras formas de trabalho público.<br /><br />
                  Nos melhores casos, a perspicácia conduz a uma liderança sábia. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo buscou projeção e reconhecimento social, autoridade e poder.<br /><br />
                  Mas o lar, a família e a vida emocional não deveriam ser negligenciados pelo sucesso mundano. O nativo pode trazer de outras vidas fortes laços cármicos familiares.<br /><br />
                  O caminho da evolução revela que para que haja crescimento, o nativo deve construir uma base emocional sólida.<br /><br />
                  São encorajadas atividades que alimentem a vida sentimental do nativo, que aumentem seu autoconhecimento psicológico. O aprendizado vem através do "trabalho interior" do self.<br /><br />
                  Mais do que o êxito social, seu aprendizado é cultivar os afetos em relação ao lar e à família para que os seus sentimentos possam finalmente fluir e ser expressos livremente.<br /><br />
                  Ao invés de buscar apenas o sucesso profissional, o nativo deve reservar um tempo para desenvolver as esferas privadas e pessoais da vida, especialmente no ambiente familiar. <br />`,

                  `Aqui lidamos com o empreendedor e o profissional, no sentido mais profundo.<br /><br />
                  O indivíduo com a Parte da Fortuna nesta casa aceita cumprir o seu papel na sociedade – um papel que normalmente foi formulado pelas gerações passadas.<br /><br />
                  Esta identificação com uma função social ou “destino” nunca é totalmente significativa e criativa, a menos que o nativo também tenha suas bases emocionais e familiares bem construídas.<br /><br />
                  Que seja uma pessoa segura e ao mesmo tempo sensível, profundamente enraizada no próprio terreno da personalidade individual.<br /><br />
                  Assim pode buscar a projeção profissional e contribuir com algo significativo para o mundo.<br /><br />
                  Concretizar seus sonhos de forma capricorniana: sendo realista, paciente, ambicioso na medida certa, aprendendo com os erros. <br />`,

                  `Não importa a carreira escolhida, Quíron na casa 10 sempre se sente responsável para cuidar dos outros, exceto de si mesmo.<br /><br />
                  Quíron na casa 10 tende a ajudar os outros a serem bem sucedidos, mais do que consegue para si próprio. Pode ocorrer de não se sentir apoiado na sua carreira ou realizar tarefas inadequadas às suas reais capacidades.<br /><br />
                  Isso pode funcionar quando a pessoa rejeita qualquer ambição ou responsabilidade por medo do fracasso. Talvez os pais possam ter tido muito sucesso e queiram que o filho alcance o mesmo patamar, embora ele não queira seguir os caminhos dos pais.<br /><br />
                  Ou pode acontecer do filho ter grande ambição profissional devido ao fracasso profissional do pai. Quíron na casa 10 indica sacrifício e abnegação, que pode estar numa ajuda humanitária.<br /><br />
                  O nativo sente uma necessidade de ajudar e quando Quíron está proeminente no mapa ou em aspectos com a casa 10, confere competência curadora, mas negligencia suas próprias dores, sentindo-se desprotegido.<br /><br />
                  Esta é uma boa posição para terapeutas e profissionais da área da saúde. <br />`,

                  `Os relacionamentos mais significativos são aqueles estabelecidos no ambiente da profissão ou no ambiente social, onde haja interesse mútuo para alcançar status e projeção.<br /><br />
                  Pode estabelecer parcerias com pessoas da mesma profissão ou da mesma empresa onde trabalha, instituições governamentais ou sociais. As parcerias que o nativo formar terão algum teor público.<br /><br />
                  Mas o nativo com Juno na casa 10 terá que aprender a ficar um pouco apagado diante desse parceiro/a, ou pelo menos a partilhar com ele todos os seus louros e sucessos.<br /><br />
                  A posição de Juno nessa casa mostra certa predestinação conjugal. Essa parceria pode auxiliar o nativo a se afirmar no mundo, desenvolver um empreendimento ou mesmo trabalhar junto com o parceiro.<br /><br />
                  No mapa de uma mulher indica que esta será uma parceira de muita confiabilidade, prudente e séria. No de um homem, que a esposa que ele escolherá terá estas características. <br />`,

                  `Nas profissões que a pessoa exercia durante certas vidas passadas, tinha tendência a se mostrar indeciso, leviano, irresponsável.<br /><br />
                  Tinha dificuldade em assumir seriamente uma carreira. Muito oportunista, só se empenhava na medida dos seus próprios interesses. Isso pode tê-lo impedido de ser bem sucedido.<br /><br />
                  Era, entretanto, observador, e possuía o senso do comércio. Pode agora, por exemplo, buscar uma carreira na administração ou no serviço público: ali, aprenderá a inspirar confiança, obrigando-se a uma rigorosa honestidade.<br /><br />
                  Em muitos casos, é possível também que o nativo tenha uma dívida cármica para com sua mãe ou seu pai. <br />`,

                  `O nativo traz frustrações de vidas passadas, o que desejara lhe fora recusado. Almejara particularmente o prestígio, as honras, a glória - ou, pelo menos, a aprovação dos seus chefes.<br /><br />
                  O fracasso vem de certos traços negativos de sua personalidade, particularmente a falta de tato e de diplomacia.<br /><br />
                  Por um orgulho mal colocado, o nativo deseja ser aceito por seus superiores, mas não faz nada para isso. É capaz, mas não se deve deixar bloquear por um excessivo sentimento de superioridade.<br /><br />
                  Gosta de olhar para trás, para as realizações de seus desejos e necessidades, para saber que é aceito por aqueles que anteriormente você admirou como sendo os seus superiores.<br /><br />
                  Deseja a aceitação social, mas não procura por ela. Assim, sua expressão exterior de criatividade é dificultada pela expectativa de ser ou não ser rejeitada pelos outros.<br /><br />
                  Pode se tornar excessivamente preocupado sobre como está se integrando com os outros e como resultado torna-se muito sensível em situações sociais.<br /><br />
                  Isto tende a fazê-lo se sentir menos confortável em público. Sente fortemente a responsabilidade do passado e não tem certeza se é capaz de viver de acordo com ela.<br /><br />
                  No mapa de um homem isto pode trazer dificuldades com as mulheres, como resultado do domínio de uma mulher mais velha no começo da vida.<br /><br />
                  Geralmente existe muita habilidade criativa já desenvolvida em encarnações passadas, mas o indivíduo precisa desenvolver a confiança em si mesmo, se quiser expressá-la.<br /><br />
                  Carmicamente passa pela vida tentando reunir os sentimentos que lhe darão propósito de que necessita. Tão logo possa fazê-lo, começará a expressar o que esteve procurando em sua vida. <br />`,

                  `Uma grande instabilidade profissional é sugerida por esta posição de Marte. O nativo, em vidas passadas, não tinha apreendido todo o alcance da atividade profissional.<br /><br />
                  Alimentou conflitos com seus superiores, não respeitou a disciplina ou revoltou-se contra seus chefes. Imediatista, tinha em vista apenas seu próprio interesse e o momento presente.<br /><br />
                  Se foi um cirurgião, talvez fizesse com que o dinheiro e o desejo de promoção passassem à frente da saúde de seus pacientes. É possível também que tenha tido, em sua profissão, um comportamento sádico.<br /><br />
                  A lição cármica, aqui escolhida pelo nativo, é a de aprender a perseverança nos esforços profissionais. Que o nativo seja prudente, ponderado, e se preserve de sacrificar sua honra às ambições. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Nas vidas anteriores, o nativo não desenvolveu a expansão nas metas de vida, nas realizações profissionais, na carreira e nos empreendimentos.<br /><br />
                  Pode ter sido irresponsável ou desonesto na vida profissional. Ou pode não ter tido a oportunidade de avançar, conquistar o sucesso e a projeção profissional. Agora é preciso redobrar o cuidado para não estragar a carreira por sua própria culpa.<br /><br />
                  Na vida atual, escolheu uma nova oportunidade de cultivar e obter sucesso, tanto financeiro, quanto profissional. É preciso cultivar a ética, manter-se digno, responsável, confiante, otimista, leal e honesto. <br />`,

                  `Saturno retrógrado nesta casa indica que o nativo foi e ambicioso em vidas passadas. O culto da personalidade, o poder e a ausência de compaixão para com os outros foi marcante.<br /><br />
                  Ou então fugiu dos compromissos profissionais. Os dois extremos são possíveis: seja um abuso de autoridade, seja uma fuga, diante das responsabilidades que esta implica.<br /><br />
                  Na vida atual, o nativo deve progredir com empenho e determinação, lentamente. Terá todo o tempo, em cada etapa, para meditar sobre o poder, sobre a autoridade dada em função do serviço para o bem do coletivo.<br /><br />
                  Talvez chegue a um cargo de alta responsabilidade, tarde na vida. Terá tido tempo para refletir sobre as motivações da sua ambição.<br /><br />
                  Caso consiga utilizar a autoridade com uma preocupação de promover a justiça e o crescimento de todos, liquidará suas dívidas cármicas. <br />`,

                  `Urano retrógrado aqui indica profissões e reputações incomuns, tendência trazida de vidas passadas.<br /><br />
                  Esta posição pode criar líderes nas áreas científicas e humanitárias ou no ocultismo. Eletrônica, matemática e astrologia são profissões típicas.<br /><br />
                  Seja qual for a carreira escolhida, pode inovar desenvolvendo novos métodos e técnicas de atuação.<br /><br />
                  Os nativos geralmente são liberais ou radicais na política, não são conservadores. Podem manifestar tendências rebeldes ou revolucionárias.<br /><br />
                  Os nativos têm muita força de vontade e ambicionam adquirir destaque por intermédio de contribuições singulares na sua profissão.<br /><br />
                  Muitos executivos das áreas de eletrônica e ciência têm Urano nesta posição. Mas as mudanças da sorte e de status podem ser repentinas.<br /><br />
                  Também existe a possibilidade de muitos empregos diferentes, incapacidade de lidar com chefes e pessoas em posições de autoridade.<br /><br />
                  No seu pior, uma súbita ascensão a posições de destaque pode ser seguida de uma queda igualmente repentina para a obscuridade.<br /><br />
                  Pode também haver má vontade em se submeter às responsabilidades do dia-a-dia. Os nativos exigem e precisam de liberdade no seu trabalho.<br /><br />
                  Os nativos são mais felizes quando tem a oportunidade de dirigir as atividades da sua carreira. <br />`,

                  `Em vidas passadas o nativo deteve o poder e não fez bom  uso dele. Como se trata do místico Netuno, este poder pode ter sido de carácter religioso, ligado a uma religião ou a uma doutrina, como, por exemplo, certos chefes de Estado atuais em torno do Mediterrâneo e do golfo Pérsico.<br /><br />
                  Um poder oficial combinado com um poder religioso se toma extremamente forte. O nativo não havia conservado o espírito de colaboração e amabilidade para com seus irmãos. Pode ter se transformado num ditador, sempre em nome de uma mística.<br /><br />
                  Daí as suas dificuldades profissionais hoje: orientação difícil entre várias profissões, patrões odiosos que o perseguem ou trapaças no emprego. Se o nativo ainda não aprendeu uma lição suficiente das suas vidas passadas, seus superiores, até mesmo os melhores, irão recusar-lhe a confiança.<br /><br />
                  Mas é possível também que, tendo compreendido isso, o nativo seja perfeitamente íntegro, embora deva ainda liquidar algumas dívidas para com aqueles que lesara anteriormente.<br /><br />
                  Isso se traduz por desilusões nos seus sucessivos empregos. O nativo deve então desenvolver uma atitude de desprendimento com relação à vida profissional.<br /><br />
                  Caso consiga, pela integridade, inspirar confiança, é capaz de ir longe, pois desde muitas vidas passadas tem a experiência das responsabilidades superiores. <br />`,

                  `Plutão retrógrado nesta casa inspira grandes ambições ao nativo. Indica que grandes poderes foram conquistados em vidas passadas. Mas esse poder foi negociado ou usado mal.<br /><br />
                  Ou ainda, se esse poder foi perdido gerou uma grande frustração. O nativo reencarna com o desejo apaixonado de retomá-lo. Mas não como ditadores. Seu gosto muito forte pelo poder não chega a tanto.<br /><br />
                  Muitos dos nativos com Plutão nessa posição já refletiram, de vida em vida, sobre o bom e o mau uso do poder. Continuam a almejar uma posição de destaque. Empregam toda a energia para chegar a ele e sacrificarão tudo com esse fim.<br /><br />
                  Mas uma vez instalados, uma armadilha os espreita: é a possibilidade de o poder transformar-se num fim em si mesmo.<br /><br />
                  O risco é esquecer o objetivo de Serviço que motivou sua reencarnação atual. Quando chegamos muito idosos aos cargos de autoridade, arriscamo-nos a esquecer nosso programa no caminho.<br /><br />
                  Esta posição plutoniana indica viva intuição, dons parapsicológicos. O nativo está fortemente ligado aos mundos invisíveis e por vezes é mais clarividente do que os que o cercam.<br /><br />
                  De qualquer modo, é um carácter muito complexo, bastante secreto, que muitas pessoas, mesmo entre seus parentes, queixam-se de não entender. <br />`,

                  `Não importa a carreira escolhida, Quíron na casa 10 sempre se sente responsável para cuidar dos outros, exceto de si mesmo.<br /><br /> Quíron na casa 10 tende a ajudar os outros a serem bem sucedidos, mais do que consegue para si próprio.<br /><br />
                  Pode ocorrer de não se sentir apoiado na sua carreira ou realizar tarefas inadequadas às suas reais capacidades. Isso pode funcionar quando a pessoa rejeita qualquer ambição ou responsabilidade por medo do fracasso.<br /><br />
                  Talvez os pais possam ter tido muito sucesso e queiram que o filho alcance o mesmo patamar, embora ele não queira seguir os caminhos dos pais. Ou pode acontecer do filho ter grande ambição profissional devido ao fracasso profissional do pai.<br /><br />
                  Quíron na casa 10 indica sacrifício e abnegação, que pode estar numa ajuda humanitária, principalmente com Quíron em Câncer.<br /><br />
                  A pessoa sente uma necessidade de ajudar e quando Quíron está proeminente no mapa ou em aspectos com a casa 10, confere competência curadora, mas negligencia suas próprias dores, sentindo-se desprotegida. <br />`,

                  `Se o asteroide está no Meio do Céu conjunto a este ou mesmo na décima casa, as parcerias que esta pessoa formar, terão algum teor público, e serão de alguma forma responsáveis pela forma que esta aparece para os outros. Podem também indicar a união do profissional e do conjugal.<br /><br />
                  Mas a pessoa com Juno da décima casa terá que aprender a ficar um pouco apagada diante desse parceiro/a, ou pelo menos a partilhar com ele todos os seus louros e sucessos.<br /><br />
                  Essa posição por signo, ou casa mostra uma certa predestinação conjugal, a qual permitirá a ela que se afirme no mundo, ou mesmo que trabalhe com essa pessoa.<br /><br />
                  Considerar o posicionamento de Júpiter para avaliar o potencial de sucesso social, que pode ser alcançado através de parcerias.<br /><br />
                  No mapa de uma mulher indica que esta será uma parceira de muita confiabilidade, prudente e séria. No de um homem, que a esposa que ele escolherá terá estas características. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 11</strong>`,
            text: [
                  `O Sol na Casa 11 se desenvolve através da participação num grupo, na busca contínua de progresso social e cultural.<br /><br />
                  A consciência se volta para a interação entre o individual e o coletivo, com grande sensibilidade para os sofrimentos injustos de homens, animais e da natureza.<br /><br />
                  Isso faz com que a criatividade ao longo do tempo acabe se vinculando à consciência pública e às soluções alternativas para os conflitos sociais.<br /><br />
                  As amizades tem uma grande importância para o desenvolvimento da sua personalidade.<br /><br />
                  Os esforços para construir a própria identidade estão vinculados às suas aspirações e metas coletivas.<br /><br />
                  É importante que os nativos com o Sol na Casa 11 façam um esforço consciente para estabelecer metas praticáveis quando se sentem inspiradas.<br /><br />
                  Esse esforço para a realizações concretas permitem um sentido de identidade, propósito e poder.<br /><br />
                  O mais importante ingrediente para a própria realização e a própria cura é ter uma razão para viver, criando uma função pessoal e interiormente ditada.<br /><br />
                  Esse Sol se alimenta com a esperança na transformação social, nas soluções inovadoras e alternativas, na capacidade que temos de viver juntos de maneira harmônica.<br /><br />
                  O nativo sabe que uma das maiores riquezas da vida são os amigos. Nunca se sentirá sem rumo se tiver amigos.<br /><br />
                  Sabe que todos nós estamos interligados. Sabe que o destino de uma pessoa não está desvinculado do destino de outros. Vive os fatos e a cultura do seu tempo e com certeza participa dele.<br /><br />
                  Gosta de estar de se conectar com o futuro e com as novas correntes de pensamento. Sintoniza-se tanto com o coletivo que muitas vezes personifica em sua vida as tendências de vanguarda. <br />`,

                  `A Lua nessa casa indica necessidade de companhia de amigos ou participação em clubes e grupos. Porém gosta de cultivar independência e não tolera restrições.<br /><br />
                  Pode ocultar da família seus planos e sentimentos, pode haver dificuldade de reconhecer suas emoções ou formular planos para o futuro.<br /><br />
                  Nutre um forte sentimento de solidariedade, pode se envolver em projetos ligados as causas sociais ou organizar movimentos em grupo.
                  Porém, pode cometer alguns erros de julgamento e ser enganado por gente astuta e leviana.<br /><br />
                  Alguns objetivos de vida podem sofrer alterações e mudanças radicais devido a circunstâncias além do próprio controle.<br /><br />
                  Mulheres podem se tornar importantes na vida e no trabalho, dando apoio e prestando ajuda mesmo que não peça. <br />`,

                  `...`,

                  `Mercúrio nessa casa indica pessoas profundamente interessadas na comunicação e na troca de ideias com amigos e grupos.
                  Buscam em especial associações que estimulem suas mentes e aumentem o seu conhecimento.<br /><br />
                  Ensinam e aprendem com seus amigos e podem receber ajuda deles para obter empregos. Contudo, seu pensamento pode ser fortemente influenciado pelas ideias do grupo no qual está inserido.<br /><br />
                  Mercúrio na casa 11 inspira amor à verdade, imparcialidade, a capacidade de pensar com originalidade e objetividade.<br /><br />
                  Os nativos muitas vezes se interessam por investigações científicas, astrologia, filosofia oculta avançada, ideais e objetivos humanitários. Possuem amigos com interesses semelhantes.<br /><br />
                  A sua atitude é impessoal, porém amigável. É preciso cuidado com ideias demasiadamente excêntricas ou pouco práticas.<br /><br />
                  Podem usar seus amigos para obter vantagens pessoais, ou os amigos podem orientá lo de forma errada por motivações próprias.<br /><br />
                  Os nativos desejam trocar ideias e se comunicar com todos, independentemente da sua educação ou posição social.<br /><br />
                  Esta receptividade a toda a humanidade amplia a mente, proporciona compaixão e grande interesse pelas questões sociais mais amplas. <br />`,

                  `Vênus na Décima Primeira Casa indica amizades sinceras e relacionamentos estabelecidos por meio de atividades em grupo.<br /><br />
                  A generosidade com os amigos assegura que receberá bom retorno deles. Por essa razão, as esperanças e desejos têm boa chance de se realizarem.<br /><br />
                  O nativo com Vênus nesta casa cultiva muitos amigos do sexo oposto. As amizades também são estabelecidas com artistas e músicos.<br /><br />
                  O parceiro no casamento com frequência é apresentado por amigos ou conhecido em atividades de grupo. Os amigos com frequência se tornam namorados. E os namorados, amigos. <br />`,

                  `Marte na Décima Primeira Casa indica energia orientada às amizades e atividades em grupo. Os amigos provavelmente serão do tipo masculino e agressivo.<br /><br />
                  Com frequência seus amigos o ajudam a realizar o seu trabalho e a satisfazer as suas ambições profissionais. Pode haver habilidade mecânica, que produz inventores de equipamentos mecânicos.<br /><br />
                  Num indivíduo mentalmente alerta, a energia será utilizada em projetos humanitários e de reforma social.<br /><br />
                  Mas pode haver também insatisfação com a ordem social dominante e tendências revolucionárias.<br /><br />
                  Essa energia deve ser orientada por esforços de melhoria, e não se voltar à destruição das condições existentes ou desavenças com amigos e associações. <br />`,

                  `Júpiter na Décima Primeira Casa indica pessoas que atingem os seus objetivos por intermédio de amizades e atividades em grupo.<br /><br />
                  Os nativos são bondosos com os seus amigos e preocupados com o bem-estar da Humanidade. Portanto, são benquistos, atraem amigos generosos e prestativos.<br /><br />
                  Em indivíduos mais evoluídos, os amigos oferecem e recebem muitos conselhos morais e espirituais importantes e inspiradores.<br /><br />
                  Há um espírito de colaboração e consideração mútua, o que possibilita ao nativo realizar esforços amplos e construtivos com sucesso.<br /><br />
                  As atividades de grupo com frequência possuem objetivos humanitários e caritativos, que quase sempre se concretizam por meio de organizações religiosas, educacionais ou fraternais.<br /><br />
                  As atividades nos negócios podem estar relacionadas a invenções, ciência, assistência social, Ongs ou esforços de organização.<br /><br />
                  Porém, se Júpiter estiver sob tensão, a expressão dos conselhos nem sempre são bons ou práticos.<br /><br />
                  O nativo pode ter tendência a se aproveitar dos amigos e considerá-los garantidos, negligenciando as responsabilidades para com eles.<br /><br />
                  Algumas vezes as amizades se estabelecem por motivos ocultos de lucros pessoais. <br />`,

                  `Saturno na Décima Primeira Casa indica senso de responsabilidade nas amizades e associações de grupo. Os nativos procuram conhecer pessoas importantes e influentes como meio de favorecer o status e a carreira.<br /><br />
                  No seu melhor, há troca de lealdade e bons conselhos entre amigos, que também podem proporcionar ao nativo, oportunidades de conhecimento e crescimento intelectual.<br /><br />
                  Indica senso de justiça, manifestado no reconhecimento da necessidade de ajudar igualmente outras pessoas a terem sucesso naquilo por que se interessam.<br /><br />
                  Se o princípio de justiça for aplicado nas amizades e associações de grupo, todos receberão benefícios iguais da colaboração do grupo e da estrutura da organização.<br /><br />
                  Contudo, no seu pior, o nativo e seus amigos podem usar uns aos outros por razões pessoais de lucro e ambição.<br /><br />
                  Os nativos com esta posição provavelmente mantém amizade com pessoas mais velhas, sérias, voltadas à carreira, que terão influência no seu amadurecimento.<br /><br />
                  Podem ter associações cármicas com pessoas com as quais tiveram contato em vidas passadas. <br />`,

                  `Urano aqui está bem posicionado, pois está na casa de sua regência. Indica um interesse natural por inovações, soluções alternativas, redes sociais e novas tecnologias.<br /><br />
                  O nativo pode expressar positivamente suas qualidades revolucionárias. Mesmo sendo uma pessoa convencional, pode cultivar amizades variadas, diferentes e anticonvencionais.<br /><br />
                  Este posicionamento indica uma preferência trabalhos em grupo, em equipe, por relações através das quais seja possível compartilhar interesses e valores humanitários.<br /><br />
                  Isso é mais importante do que uma forte ligação emocional. Os amigos mostram pontos de vista diferentes que permitem muitas descobertas sobre o mundo a partir deles.<br /><br />
                  A ligação com o ocultismo pode surgir na sua maturidade. <br />`,

                  `É importante que suas metas e objetivos sejam bem definidos e pensados, senão corre o risco de permanecer no sonho ao invés de agir. Ou acreditar que sua imaginação seja realidade.<br /><br />
                  O nativo é muito aberto às sugestões, opiniões e energia psíquica em geral dos amigos, deve aprender, a saber, filtrar o que é importante e fazer escolhas.<br /><br />
                  O nativo pode se orientar para a ajuda humanitária em geral, com grupos, comunidades e serviços. É idealista, pode sonhar com um mundo onde a unidade e a harmonia, são uma realidade.<br /><br />
                  É preciso cuidado com decepções e ilusões no círculo de amizades. Pode idealizar e projetar muitas expectativas nos amigos ou grupos a que pertence.<br /><br />
                  Ao estabelecer um contato mais íntimo, tende a se decepcionar. Pode até ser enganado pelos amigos, ser usado e explorado por eles.<br /><br />
                  Na via positiva, pode se relacionar com amigos e grupos envolvidos com arte, espiritualidade, sensibilidade e doação.<br /><br />
                  Quando consegue se entregar de forma amorosa e ao mesmo tempo realista, o nativo pode viver a plenitude em seus relacionamentos com os amigos e pessoas em geral.<br /><br />
                  O nativo pode seguir o desejo íntimo de “salvar” a comunidade na qual pertence. Entregar-se ao amor e à doação de forma incondicional.<br /><br />
                  De forma altruísta, compreender a diferença entre doar-se ou perder-se nos outros. <br />`,

                  `Plutão nessa casa indica tendências reformistas expressadas nas amizades e associações de grupo.<br /><br />
                  O nativo pode atrair amigos poderosos e associações que o ajudarão a alcançar progressos científicos e humanitários.<br /><br />
                  Se as motivações e relações com amigos forem egoístas, podem resultar em perdas financeiras, desilusões no amor e problemas com impostos e recursos conjuntos.<br /><br />
                  Por outro lado, a colaboração com os outros tornará possíveis sociedades bem sucedidas de grande aumento de conhecimento pessoal.<br /><br />
                  Há tendência para a liderança de grupo ou trabalho em equipe bem sucedido e dinâmico. Tendem a se unir a organizações ocultas e possuem amigos ocultos.<br /><br />
                  Pode indicar também amizades que terminam subitamente e perdas financeiras provocadas por gastos extravagantes com amigos.<br /><br />
                  A natureza das motivações do nativo é importantíssima com esta posição de Plutão, uma vez que ela irá determinar se seus associados sentem que ele os está ajudando ou usando.<br /><br />
                  Devem ter cuidado para respeitar os direitos dos outros e utilizarem sua própria força de vontade de maneira cooperativa, para que possam atuar criativamente dentro do grupo. <br />`,

                  `O nodo sul mostra que em vidas passadas o nativo buscou sua projeção através de amigos, grupos e associações, na esperança de realizar certos desejos e aspirações.<br /><br />
                  Traz a tendência de preferir as metas e objetivos comunitários, ao invés de definir suas próprias necessidades e desejos.<br /><br />
                  Ficou mais fácil ser levado pelos outros do que manter-se de pé por si mesmo. O nativo pode ter ficado idealista ou inseguro.<br /><br />
                  O desafio é conseguir sair do encantamento de seus sonhos e esperanças. Há necessidade de individuação.<br /><br />
                  O caminho da evolução é aprender que para sua realização, o nativo deve se encontrar como ser individual. O que quer que aumente o seu sentido de ser especial e único pode ser encorajado, ao invés de se misturar à multidão.<br /><br />
                  Desenvolver a confiança para sua autoexpressão, seu poder criativo, vivenciando sentimentos nas relações afetivas e integrando-se com outros. A casa 5 também a casa dos romances do lazer e dos filhos, esses são temas a serem desenvolvidos em sua vida.<br /><br />
                  O nativo deve cultivar seu potencial fértil, dando mais expressão espontânea ao self e aos sentimentos. <br />`,

                  `A ampliação da consciência pessoal não somente permite a percepção de grandes questões coletivas, mas também traz a capacidade de participar em empreendimentos importantes destinados a renovar e transformar instituições e valores tradicionais.<br /><br />
                  Num sentido mais negativo, esta casa se refere a meros sonhos ou a ideais que não estão em harmonia com o ritmo da humanidade.<br /><br />
                  O nativo com a Parte da Fortuna nessa posição pode procurar a felicidade nos sonhos, ou pode procurar uma compensação para seus complexos em atividades revolucionarias.<br /><br />
                  Pode também, ser um pioneiro e um reformador de valores sociais, culturais ou espirituais. <strong> Darwin</strong> , o pai da teoria moderna da evolução das espécies, e <strong> Mahatma Gandhi</strong>, ao mesmo tempo sonhadores profetas e estadistas, são exemplos significativos.<br /><br />
                  O nativo expandir sua rede de amizades, cultivar o senso de coletividade, buscar caminhos diferentes e novas soluções. Priorizar a inovação e o inusitado de forma aquariana: com originalidade, visão futurista, pronto para mudar. <br />`,

                  `Quíron na casa 11 influencia diretamente sobre os amigos, as esperanças, projetos e desejos. Pode haver dificuldade em ter ou manter os amigos ou pode criar o medo de multidões ou grupos.<br /><br />
                  Também ao contrário, pode buscar participar compulsivamente de grupos, associações de classe, especialmente grupos que querem mudar a sociedade a fim de compensar medos interiores da solidão.<br /><br />
                  Quando o nativo faz amigos apenas para não ficar só, pode ter muitos amigos, mas a maioria dos amigos apenas ambiciona aproveitar de sua amizade.<br /><br />
                  Frequentemente pode ser o conselheiro de amigos, porque isso lhe dá uma sensação de controle.<br /><br />
                  Mas também, pode ser aquele que sempre busca a opinião e conselho dos amigos a fim de compensar uma carência psicológica que parece nunca ser preenchida.<br /><br />
                  Quíron é a ponte entre o que é velho e conservador (Saturno) e o que é inovação (Urano).<br /><br />
                  Portanto, é importante não se apegar ao que é velho e obsoleto, mas gradativamente ir criando coisas novas, misturando o antigo com o novo. Esta é a solução para lidar com Quíron na casa 11. <br />`,

                  `Os relacionamentos mais significativos são aqueles no qual a amizade e o companheirismo prevalecem. O casal pode ser ligado aos mesmos grupos ou amigos.<br /><br />
                  Há tendência para indagações sobre o futuro da parceria/casamento. É importante elaborar planos e projetos a serem vividos a dois, ou para o próprio casamento.<br /><br />
                  Na via negativa, pode haver medo que suas parcerias não deem certo. Ou temer que o casamento coloque limites para sua liberdade, sua independência, sua atuação e participação no mundo.<br /><br />
                  Pode estabelecer parcerias trabalhos de equipe, em organizações não governamentais que se dedicam aos problemas sociais, grupo de amigos ou em associações comunitárias.<br /><br />
                  Juno favoreceu que o nativo brilhe em todas as associações e parcerias que sejam manifestações da vida associativa ou cultural.<br /><br />
                  Capacidade de viver sua associação conjugal junto com amigos. De construir um casamento que pode fazer parte de diversos grupos. <br />`,

                  `Nesta casa o nativo teve problemas com seus amigos ou com o grupo no qual estava inserido.<br /><br />
                  Eram mal escolhidos e a sua influência foi desastrosa. A inferioridade deles permitia ao nativo valorizar-se, ganhando uma popularidade fácil.<br /><br />
                  Em outros casos, ele não tinha amigos, porque não vivenciava as leis da amizade: respeito pelos outros, ajuda desinteressada.<br /><br />
                  Na vida atual deve escolher aqueles cuja qualidade espiritual o ajudará a crescer e a amadurecer.<br /><br />
                  Liquidará esse carma integrando-se a grupos sociais, humanitários e solidários, centrados no auxílio ao próximo. <br />`,

                  `Os amigos do nativo em vidas passadas foram tão mal acolhidos que o-impediram de progredir. Seduzido pelas lisonjas interesseiras desses amigos, não tinha coragem de afastá-los.<br /><br />
                  <strong> Na vida atual, o nativo reencontra as suas antigas relações e o mesmo tipo de vida social.</strong>
                  O nativo poderá viver uma imensa curiosidade sem direção.<br /><br />
                  Procura por satisfação em muitas direções diferentes e algumas vezes, o senso de realidade é tão singular que quase se separa de seu plano terreno de identidade.<br /><br />
                  Quer experimentar tudo, mas não sabe por quê. Precisa aprender a discriminar para que cada nova extravagância e ilusão que atraia, seja bonita em si mesma.<br /><br />
                  A mistura de todas elas é desarmoniosa e o fazem sentir desconfortável com elas. Expressa muita rejeição pessoal, isso o torna mais afastado.<br /><br />
                  Seu secreto desejo de viver experiências por si mesmas o mantém ligeiramente afastado do resto da humanidade, que ele ama tão ternamente.<br /><br />
                  Alguns, com esta posição, passam por experiências sexuais bizarras, uma vez que a necessidade por exploração está sempre tentando transcender as normas da sociedade.<br /><br />
                  Em encarnações passadas experimentou tantas coisas diferentes que o agradaram, que se tornou uma pessoa constantemente à procura do que ainda não experimentou.<br /><br />
                  Seus sonhos podem ser irrealistas, mas a natureza de sua realidade pessoal é desinibida com as restrições da sociedade convencional.<br /><br />
                  Seu futuro é inteiramente baseado no quanto ele se apega às suas fantasias passadas. Deve agora aprender o discernimento e escolher relações mais refinadas, que o ajudarão a se elevar cultural e moralmente. <br />`,

                  `Com Marte na casa 11, o nativo se envolveu com más companhias em vidas passadas. Teve como amigos indivíduos perversos ou violentos.<br /><br />
                  Não dando qualquer valor à amizade propriamente dita, convivia com as pessoas apenas por bajulação, por interesses financeiros ou sociais.<br /><br />
                  Ou mesmo como companhia na devassidão. Más relações passadas são sempre indicadas por um planeta retrógrado na casa 11, mas quando se trata de Marte, acrescentam-se a violência e a sexualidade.<br /><br />
                  Nesta vida o nativo deve amadurecer e fazer uma triagem das suas relações. Sem, entretanto, julgar as más, que seguirão seu próprio caminho até o dia em que, enfim, compreenderem e despertarem.<br /><br />
                  Enquanto não souber dizer "não", é melhor que se afaste. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! Reinar sobre imbecis, sobre bajuladores interesseiros, pessoas pouco exigentes quanto à moralidade: tal é a armadilha na qual o nativo parece ter caído em suas vidas anteriores.<br /><br />
                  Padecendo de um sólido complexo de inferioridade, sentia-se mais à vontade num mundo fraudulento, cujos vícios não o obrigavam a progredir.<br /><br />
                  Nesta vida deve selecionar melhor seus amigos e os grupos com os quais se envolve. Pode se poupar de muitos dissabores na vida ao evitar se envolver com drogados, vagabundos, escroques ou devassos, por exemplo. <br />`,

                  `"Diz-me com quem andas e te direi quem és." O nativo, em suas vidas passadas, não entendeu nada sobre leis da amizade.<br /><br />
                  Não cultivou a responsabilidade necessária para o cultivo de bons amigos. Não se comprometeu com o trabalho em grupo. Pode ter sido egoísta ou interesseiro.<br /><br />
                  Pode ter cultivado amigos “inferiores” para se valorizar. Ou amigos "úteis" para suas ambições. Nesta vida, corre o risco de ficar privado de verdadeiros amigos.<br /><br />
                  Pode sofrer com isso e questionar o motivo. É importante que agora escolha seus amigos sem motivações egoístas ou interesses mesquinhos.<br /><br />
                  Com abertura para a troca espiritual e afetiva, reencontrará pouco a pouco o sentido das amizades.<br /><br />
                  O trabalho com assistência social, ongs, causas humanitárias ou os projetos de grupo conscientes também podem ajudá-lo a liquidar essa dívida cármica. <br />`,

                  `Esta posição indica pessoas liberais, preocupadas com a verdade e os acontecimentos e que não levam em consideração a tradição ou aprovação alheia.<br /><br />
                  Os nativos trazem tendências revolucionárias e humanitárias de vidas passadas, um sentimento de fraternidade por pessoas de todas as posições e classes sociais.<br /><br />
                  A sua abordagem impessoal em relação ao casamento e às parcerias românticas faz com que assumam atitudes não convencionais ou boêmias nessas relações.<br /><br />
                  O seu desejo de estímulo e novidades o tornam relutante em se ligar a um único relacionamento.<br /><br />
                  No seu pior, as amizades podem ser instáveis e, às vezes, falsas. O nativo pode ser irresponsável para com amigos e compromissos com grupos.<br /><br />
                  Suas motivações egoístas provavelmente atuarão como um bumerangue, pois ninguém gosta de ser usado. Podem também existir ideais sociais pouco práticos e irresponsáveis.<br /><br />
                  As pessoas com Urano nesta posição possuem uma habilidade intuitiva para perceber as leis e os princípios universais.<br /><br />
                  Isso geralmente se manifesta num interesse pela ciência e pelo ocultismo ou, em algumas vezes, por ambos os assuntos.<br /><br />
                  Geralmente possuem muitos amigos incomuns, mental e espiritualmente estimulantes. Gostam de atividades em grupo que tenham propósitos humanitários ou científicos.<br /><br />
                  O seu senso de igualdade as torna tolerantes com aqueles que têm ideias e comportamento semelhantes. Nisso, são muito democráticas. <br />`,

                  `O nativo traz de vidas passadas o desconhecimento dos valores da amizade. Netuno acrescenta aí uma matriz de traição: a entidade seduzia as pessoas, fazia amigos facilmente e os usava.<br /><br />
                  Depois abandonava quando não tinha mais nada a oferecer. Todos nós conhecemos pessoas assim: quando se trata de uma brilhante festa, elas se aproximam.<br /><br />
                  Mas quando o anfitrião, arruinado, está no hospital ou na prisão, quem irá visitá-lo? Certamente não os falsos amigos.<br /><br />
                  Nesta vida, pode haver dificuldade de fazer amigos: as suas amizades terminam rapidamente, ou desaparecem misteriosamente.<br /><br />
                  Os nativos nem sempre são responsáveis por isso, mas o foram, em vidas passadas. Trata-se de velhas dívidas cármicas.<br /><br />
                  A incapacidade de ser um bom amigo leal e fiel acarreta, também, ao longo prazo, a incapacidade de ser um amante fiel. As questões do amor e das amizades têm diretamente e indiretamente as mesmas causas.<br /><br />
                  De qualquer modo, Netuno retrógrado na casa 11 mostra vidas passadas nas quais o nativo se deixou seduzir por amigos instáveis, desonestos, de ideias confusas e nebulosas.<br /><br />
                  Esses mesmos amigos desastrosos podem retornar nesta vida atual: o nativo deve então cultivar muito bom-senso na escolha dos que a cercam. <br />`,

                  `Os nativos com Plutão retrógrado nessa casa experimentaram no passado a amargura de decepções com amigos e devem agora aprender a amizade desinteressada.<br /><br />
                  Em suas vidas anteriores estavam, antes de tudo, mais preocupados em receber, do que em dar. O nativo deseja conquistar amigos, não importa a que preço.<br /><br />
                  Traz a tendência de fechar os olhos para suas próprias motivações e para a qualidade do "amigo", estabelecendo uma relação baseada apenas no interesse e nas manipulações.<br /><br />
                  É por isso que esse tipo de amizade muitas vezes acaba mal: o ciúme não demora a se infiltrar. Colhendo o que haviam semeado, perguntam-se hoje por que os amigos lhes fogem.<br /><br />
                  Mas caminham em direção à descoberta da verdadeira amizade: simpatia espontânea baseada numa pesquisa espiritual comum.<br /><br />
                  Esta só pode existir ao longo prazo, entre dois seres suficientemente conscientes e esclarecidos. <br />`,

                  `Quíron na casa 11 influencia diretamente sobre os amigos, as esperanças, projetos e desejos. Pode haver dificuldade em ter ou manter os amigos, ou pode criar o medo de multidões ou grupos.<br /><br />
                  Também ao contrário, pode buscar participar compulsivamente de grupos, associações de classe, especialmente grupos que querem mudar a sociedade a fim de compensar medos interiores da solidão.<br /><br />
                  Quando a pessoa faz amigos apenas para não ficar só, pode ter muitos amigos, mas a maioria dos amigos apenas ambiciona aproveitar de sua amizade.<br /><br />
                  Frequentemente pode ser o conselheiro de amigos, porque isso lhe dá uma sensação de controle. Mas também, pode ser aquele que sempre busca a opinião e conselho dos amigos a fim de compensar uma carência psicológica que parece nunca ser preenchida.<br /><br />
                  Quíron é a ponte entre o que é velho e conservador (Saturno) e o que é inovação (Urano). Assim não apegar-se ao que é velho, mas gradativamente ir criando coisas novas, misturando o antigo com o novo, é a solução para lidar com Quíron na casa 11. <br />`,

                  `Juno aí permite que a pessoa brilhe em todas as associações e parcerias que sejam manifestações da vida associativa ou cultural.<br /><br />
                  Capacidade de viver sua associação conjugal junto com amigos. De construir um casal que pode fazer parte de diversos grupos.<br /><br />
                  Tendência para se indagar sobre o que vai acontecer no futuro com sua parceria/casamento, elaborar planos e projetos a serem vividos a dois, ou para o próprio casamento.<br /><br />
                  No negativo pode ser uma pessoa que tem muito medo que suas parcerias não deem certo, ou que tema que o casamento lhe coloque limites para sua atuação e participação no mundo.<br /><br />
                  Nas parcerias de amizade, fidelidade que não suporta as limitações dos amigos nem as desilusões com eles. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      },
      {
            title: `Casa 12</strong>`,
            text: [
                  `Quando o Sol ocupa a casa 12 há um paradoxo, pois o Sol estabelece, esclarece e desenvolve uma identidade separada e única e a casa 12 trabalha no sentido de dissolver, desestruturar e subverter as fronteiras individuais.<br /><br />
                  Há um conflito que requer da pessoa o desenvolvimento do sentido de identidade para além da conscientização normal.<br /><br />
                  O <strong> ego</strong>  e a vontade tem que desempenhar seu papel de servidor da alma, das causas espirituais. O Sol representa o consciente e a casa 12 é a casa do inconsciente.<br /><br />
                  Na jornada da casa 12, o nativo deve aprender a manejar o limite sutil entre o que é pessoal, individual e consciente, e o que é universal, coletivo e inconsciente.<br /><br />
                  Isso significa ter que gastar muito tempo consigo mesmo, com meditações, retiros, vivências espirituais e mergulhos na alma.<br /><br />
                  Durante o processo de formação do ego, há uma luta feroz para impedir a entrada de qualquer coisa mais vaga, irracional, mística ou transpessoal.<br /><br />
                  Mas, quando chega à noite, tudo o que foi afastado da consciência invade os espaços e geralmente sob formas assustadoras.<br /><br />
                  Isso pode causar conflitos de identidade, doenças e um estranho e dolorido sentimento de ser rejeitado, o que acaba levando a pessoa ao isolamento e a voltar sua atenção ao que ocorre em seu interior.<br /><br />
                  Só quando aceita conscientemente as correntes inconscientes, buscando uma expressão criativa para essas forças, será possível a esse Sol a sua realização.<br /><br />
                  Isso implica uma coabitação entre o pessoal e o universal, uma profunda conexão com a Fonte Universal. A pessoa se dissolve no mistério da vida, compreendendo que é parte do Universo.<br /><br />
                  Por isso não separa a vida em escaninhos. Percebe que está tudo interligado, que nada acontece por acaso e que a frente de algo pode ser os fundos de outra coisa.<br /><br />
                  Sua compreensão tende a ser um pouco mais larga do que a de outras pessoas, porque abrange dimensões mais sutis.<br /><br />
                  Não é algo que apareça em sua linguagem, mas que se reflete bastante em suas atitudes, em coisas que acaba fazendo e muitas vezes nem sabe por quê.<br /><br />
                  Muitas vezes vê o que ninguém viu e vice-versa, o que é claro para os outros pode não ser óbvio para si. <br />`,

                  `A Lua nessa casa indica tendência para se esconder ou se isolar do mundo.<br /><br />
                  O nativo pode se sentir mais feliz quando cuida de si e da própria vida, quando trabalha e fica dentro de casa. Há uma forte ligação com a mãe.<br /><br />
                  O nativo é discreto, misterioso e cultiva alguns segredos em sua vida.<br /><br />
                  É possível que trabalhe em uma área que precise guardar segredos de outras pessoas e nas relações sociais, pode ser considerada apta a compartilhar de seus segredos.<br /><br />
                  É muito sensível e intuitivo, seu universo interior é muito rico. A imaginação abastece a criatividade, que pode levar a criações poéticas, musicais e artísticas.<br /><br />
                  Há necessidade de se isolar do mundo para recarregar as energias, pois o stress pode resultar em doenças.<br /><br />
                  A necessidade instintiva de cuidar dos outros pode levar a trabalhar na área de enfermagem ou cuidar de animais ou a sacrificar-se pelos outros. <br />`,

                  `...`,

                  `Mercúrio nessa casa indica que o pensamento do nativo tende a ser fortemente influenciado por lembranças e hábitos inconscientes originados de experiências passadas.<br /><br />
                  As decisões podem se basear mais pelos sentimentos do que pelo raciocínio prático, uma vez que muitas impressões fluem da mente inconsciente.<br /><br />
                  A imaginação é muito ativa. Porém, com frequência são tímidos e hesitam em dizer o que realmente pensam. Os nativos com esta posição são mais reservados a respeito de seus pensamentos e ideias.<br /><br />
                  É preciso cuidado com neuroses, ou a fixação em experiências passadas, que não são importantes nas circunstâncias presentes.<br /><br />
                  O indivíduo pode achar difícil se relacionar com o ambiente externo e por isso passar por dificuldades no aprendizado.<br /><br />
                  Muitas crianças com Mercúrio nessa casa têm problemas de relacionamento durante a educação inicial, o que pode resultar em problemas na leitura ou outros bloqueios mentais.<br /><br />
                  Há a possibilidade de se obter ideias e conhecimentos valiosos por intermédio da habilidade psíquica, mediúnica ou intuitiva. <br />`,

                  `Vênus na Décima Segunda Casa indica amor pela tranquilidade isolamento e solidão. Os contatos pessoais e sociais com frequência são mais reservados. Podem ocorrer casos secretos de amor.<br /><br />
                  A timidez social pode levar à solidão ou à frustração romântica. Há harmonia emocional com a mente inconsciente, que pode proporcionar profunda inspiração artística.<br /><br />
                  Grande parte do comportamento social é motivada por um nível inconsciente. As pessoas com esta posição são gentis e compreensivas com aqueles que se encontra em uma situação de dificuldade.<br /><br />
                  Possui grande sensibilidade e podem se magoar com facilidade. Há muita compaixão nesta posição, porque ela corresponde ao signo de Peixes, no qual Vênus está exaltado. <br />`,

                  `Marte na Décima Segunda Casa indica desejos e ações fortemente influenciados pela mente inconsciente. O trabalho e outras atividades podem ser realizados em segredo ou isolamento.<br /><br />
                  Pode haver tendência a agir em segredo a fim de evitar a oposição aberta de outras pessoas. Os nativos tendem a ser reservados sobre os seus desejos e propósitos.<br /><br />
                  Podem também ter envolvimentos sexuais secretos. Com frequência, trabalham em amplas instituições, onde podem ocultar ou perder a sua identidade pessoal.<br /><br />
                  Em indivíduos menos evoluídos, pode haver envolvimento com conspirações secretas. Podem ter inimigos secretos ou sentir inimizades por outros.<br /><br />
                  É preciso agir com ética e correção, evitar também problemas por razões políticas. É importante que sejam mais honestos e abertos a respeito da sua raiva inconsciente. <br />`,

                  `Júpiter na Décima Segunda Casa indica o interesse pela busca espiritual interior por meio do isolamento, da meditação e do estudo introspectivo.<br /><br />
                  O misticismo e a intuição podem ser predominantes. Nesta posição de Júpiter, há também uma profunda compaixão pelos mais necessitados.<br /><br />
                  Os nativos mais evoluídos tem o costume de auxiliar os mais necessitados com generosas doações.<br /><br />
                  Obtêm satisfação emocional ajudando os outros e com frequência trabalham nos bastidores de grandes instituições, como hospitais, asilos, universidades e igrejas.<br /><br />
                  Com humildade, recebem apoio e amparo em tempos de crise, merecidos pelas suas boas ações passadas.<br /><br />
                  Há também a capacidade de transformar inimigos em amigos. Mas se Júpiter estiver sob tensão, podem existir tendências neuróticas, complexo de mártir ou um idealismo pouco prático.<br /><br />
                  Os nativos podem se tornar protegidos de instituições religiosas ou de caridade, ou parasitas dos que se compadecem delas.<br /><br />
                  Dessa maneira, negligenciam a responsabilidade de desenvolver as suas próprias aptidões para o trabalho criativo e produtividade. Igualmente, há uma tendência a refugiar-se na fantasia. <br />`,

                  `Saturno na Décima Segunda Casa indica que o nativo pode passar muito tempo em isolamento ou trabalhando nos bastidores de grandes instituições, como hospitais, universidades, corporações e órgãos, governamentais.<br /><br />
                  O trabalho pode ser realizado na área da psicologia ou em instituições de caridade. É preciso observar se há tendência para a solidão ou a depressão.<br /><br />
                  É importante se responsabilizar e se comprometer com o crescimento espiritual e trabalhar seus fantasmas emocionais. Pode haver inimigos secretos, que contribuem para a ruína do nativo.<br /><br />
                  Mas em muitos casos esses inimigos são imaginários. Tudo vai depender do quanto se dedica a investigar as profundas regiões do inconsciente.<br /><br />
                  Os nativos com esta posição precisam se libertar de seus problemas psicológicos por intermédio do serviço aos outros e se energizar através do trabalho prático e construtivo.<br /><br />
                  Práticas espirituais e boas terapias podem ajudá-lo na organização interior. Ao assumir a responsabilidade por seus próprios limites e se esforçar para superá-los, inicia seu amadurecimento espiritual. <br />`,

                  `Urano nessa casa indica tendência para suprimir os sentimentos de individualidade, a favor de viver as expectativas dos outros.<br /><br />
                  Entretanto, é fundamental aprender a respeitar a si mesmo, respeitar sua natureza e sua individualidade, porque sem isso podem surgir ressentimentos.<br /><br />
                  Na maturidade surgem interesses por estudos de assuntos incomuns, interesses pelo ocultismo e pelos mistérios do universo.<br /><br />
                  Alguns nativos com este posicionamento reprimem a vontade de serem individualmente diferentes. Essa energia se manifesta em algumas atitudes que não fazem sentido para as pessoas comuns.<br /><br />
                  Em sua imaginação, há o desejo de se libertar. Um lado do nativo deseja ser livre e peculiar para viver uma vida excitante e diferente.<br /><br />
                  Durante a juventude, algumas experiências trouxeram alguns receios e temores incorporados à personalidade. É importante vencer isso.<br /><br />
                  Pode haver um medo interno que esteja reprimindo algum aspecto importante da personalidade e isso precisa ser devidamente analisado e resolvido. <br />`,

                  `A casa 12 é a morada natural de Netuno. Com suficiente autodisciplina, o nativo pode desenvolver forte espiritualidade e dons psíquicos.<br /><br />
                  Possui forte imaginação, demasiado ativa. Devido à extrema sensibilidade, experimenta forças do inconsciente que por vezes podem até afetar a saúde.<br /><br />
                  Tende a ter medo de ser confinado ou preso, ou tem uma tendência a confinar-se. Por ser muito sensível ao mundo sutil, sente necessidade de recolhimento, de estabelecer um contato profundo com o ser.<br /><br />
                  Na via negativa, pode haver um sentimento de culpa que não consegue identificar e explicar.<br /><br />
                  Deve aprender a lidar com tensões e confusões, libertar-se de dilemas que podem alimentar fantasias, medos e paranoias.<br /><br />
                  Há tendência de consumir drogas como fuga da realidade, uma forma de atingir o lado mágico e encantado da vida. Apesar da necessidade de ajudar os outros, pode sentir solidão.<br /><br />
                  A ausência de contato profundo com o seu ser pode causar dor, infelicidade e a sensação de que a vida não faz sentido.<br /><br />
                  Na via positiva, pode alimentar sua vida espiritual e o contato com o seu interior. Fortalecer o contato com seus guias e mentores, sua proteção espiritual.<br /><br />
                  Tem talento para música, a dança ou outras artes. Pode se tornar uma fonte de sabedoria e compreensão.<br /><br />
                  É importante que se dedique a ajudar, a colaborar com o bem-estar e a felicidade geral das pessoas. Desenvolver trabalho humanitário.<br /><br />
                  Apurar o gosto pelo serviço, a caridade, através do trabalho espiritual das religiões ou de organizações caridosas, serviço em prol dos necessitados e de pessoas em sofrimento.<br /><br />
                  Trabalhar sua sensibilidade e mediunidade através das artes, meditação, yoga, terapias alternativas ou práticas espirituais. <br />`,

                  `Plutão na Décima Segunda Casa indica a necessidade de regenerar a mente inconsciente, trazendo o seu conteúdo para a consciência.<br /><br />
                  Isso pode se manifestar como interesse por psicologia, ocultismo ou misticismo. Um Plutão bem desenvolvido nesta casa indica um insight profundo e clarividência.<br /><br />
                  Têm uma sensibilidade telepática inconsciente para com os pensamentos, sentimentos e motivações dos outros, mas isso pode fazer com que se isolem, ou que ajam secretamente contra aqueles de quem não gostam.<br /><br />
                  A preocupação mental com seus próprios problemas faz com que ignorem as ideias e pontos de vista morais dos outros, o que com frequência resulta na incapacidade de um bom relacionamento no trabalho.<br /><br />
                  É preciso estar atento para a possibilidade de indicar inimigos traiçoeiros, problemas neuróticos ou o perigo de envolvimento com forças psíquicas destrutivas.<br /><br />
                  Os nativos devem evitar contato com seitas práticas espirituais distorcidas, magias perigosas, drogas e outras situações que provavelmente as envolverão com fenômenos astrais inferiores.<br /><br />
                  No seu melhor, Plutão indica solidariedade e capacidade para melhorar as condições de vida dos menos afortunados.<br /><br />
                  Os nativos com esta posição são capazes de desenvolver profunda meditação e compreendem os mistérios ocultos, uma habilidade que está evidenciada em poderes intuitivos muito desenvolvidos. <br />`,

                  `O nodo sul mostra uma vida passada em isolamento, contemplação, sofrimento, necessidade de recolhimento para refletir sobre as situações vividas.<br /><br />
                  Não aceitar as responsabilidades da existência mundana pode provocar muito sonho acordado ou o secreto desejo de serem libertados, salvos e mantidos pelos outros.<br /><br />
                  O caminho da evolução é aprender a ser útil, responsabilizar-se e prestar serviços. Só assim poderá ajudar o próximo.<br /><br />
                  O nativo deve aprender a se organizar, criar métodos de trabalho que ajudem no seu aperfeiçoamento e também para o crescimento dos outros.<br /><br />
                  Desenvolver e aprimorar suas qualidades, talentos, recursos e capacidades práticas proporcionará mais satisfação.<br /><br />
                  É preciso prestar mais atenção ao eficiente e prático direcionamento da vida de cada dia. O corpo precisa ser cuidado e respeitado. <br />`,

                  `Esta casa se refere ao inconsciente coletivo, a espiritualidade, a necessidade de transcendência.<br /><br />
                  A Roda da Fortuna nesta casa poderá indicar a capacidade que o indivíduo tem para desenvolver esses temas em sua vida.<br /><br />
                  O nativo pode encontrar a felicidade aceitando-se e deste modo, transformando ou dissolvendo o seu próprio carma. Ele pode se tornar uma “semente” para o inconsciente coletivo.<br /><br />
                  Em outras palavras, suas realizações poderão se transformar na base de um novo ciclo para a coletividade.<br /><br />
                  O nativo pode até mesmo alcançar a imortalidade pessoal: seu legado é capaz de sobreviver a desintegração do corpo físico. Para tanto, o nativo deve buscar conhecer o seu eu interior.<br /><br />
                  Compreender o seu ser, seus sonhos e sua intuição de forma pisciana: abrindo-se para outras dimensões da vida e outros planos, com fé e visão interior. <br />`,

                  `Quíron sempre mostra o que e onde podemos fazer mais pelos outros do que para nós mesmos.<br /><br />
                  Quando Quíron está na casa 12, a tendência é de cuidar compulsivamente dos enfermos e dos infelizes, negligenciando as próprias necessidades ou aquelas de sua própria família.<br /><br />
                  Em alguns casos, o nativo pode se exaurir na tentativa de ser o salvador dos outros, desgastando-se em trabalhos e missões que podem torná-lo doente ou até levá-lo à morte.<br /><br />
                  É o herói que salva as outras pessoas mesmo que corra o risco de morrer durante as batalhas.<br /><br />
                  Outras pessoas ao contrário, fingem uma necessidade de ajuda, mostram-se infelizes, quando na verdade elas são a causa dos próprios problemas. A questão principal é a situação de vítima ou a de salvador.<br /><br />
                  Se o nativo opta por salvar, irá buscar pelo mundo a quem possa salvar, dedicando-se a causas humanitárias quando na verdade não consegue salvar a si mesmo.<br /><br />
                  Outros tendem a se fazer de vítima. A solução é usar a imaginação e a criatividade para gerar algo que traga alegria aos outros.<br /><br />
                  Algumas vezes pode levar a paixões por pessoas vigaristas, pessoas drogadas ou mentirosas que trazem ruína ou levam à falência.<br /><br />
                  Ou aquelas que iludem e enganam para roubar. A cura é dedicar-se às qualidades criativas e artísticas (fazer aula de dança, curso de pintura, de música, etc.). Ou realizar um serviço voluntário. <br />`,

                  `O nativo sonha com uma parceria amorosa que reproduzirá o céu na terra. Tem medos ocultos de se ligar conjugalmente a alguém, por temer que essa pessoa não corresponda a esse ideal.<br /><br />
                  Às vezes o nativo pode optar por não se ligar a ninguém por causa destes medos.<br /><br />
                  Mas quando se liga a alguém, tem um grande potencial de se sacrificar pela manutenção da parceria / casamento. Destino, carma e espiritualidade são temas presentes nesses relacionamentos.<br /><br />
                  Na via negativa, pode se envolver em algum sofrimento ou exigir muita dedicação. O nativo também pode estabelecer parcerias em ambientes hospitalares, instituições de caridade ou ate mesmo em atividades ilegais.<br /><br />
                  Na via positiva, Juno nessa posição indica a busca de uma união espiritual e mística.<br /><br />
                  É importante desenvolver consciência na forma como o nativo vivencia seu ideal afetivo. Observar se esse grande ideal romântico ajuda ou atrapalha suas associações. <br />`,

                  `Em suas vidas passadas o nativo se descuidou do seu aperfeiçoamento espiritual.<br /><br />
                  Tinha muita intuição e imaginação poética, que não foram utilizadas positivamente. Teve tendência a se evadir no sonho, em discursos delirantes e obscuros.<br /><br />
                  Recusou-se, provavelmente, a se dedicar aos outros, o que lhe teria exigido uma disciplina e sacrifícios que não estava disposto a fazer.<br /><br />
                  Deve utilizar hoje sua viva intuição para cuidar dos outros, particularmente os doentes (seria muito eficiente num hospital). Agir mais do que sonhar (e não contar tudo a todo mundo).<br /><br />
                  O nativo deve tomar consciência das suas dívidas cármicas e se tornar um farol de luz nesta vida. <br />`,

                  `Em vidas passadas o nativo permaneceu apegado a um amor antigo, um amor que nunca se rompeu.<br /><br />
                  O nativo demonstra tendência à autocompaixão, pois sabe, mais ou menos conscientemente, que deixou esse ser amado para trás.<br /><br />
                  Muito romântico, não tem realmente os pés na Terra, e caminha na vida atual trazendo essa ferida secreta. Tem a possibilidade de transformar essa carga emotiva em obra de arte, ou em criações humanitárias.<br /><br />
                  O nativo tenta esconder os sentimentos que pensa que possam ser rejeitados. Pode ser feliz quando está sozinho, mas não gosta de se sentir abandonado pelos outros.<br /><br />
                  Ao menor sinal de rejeição, pode passar por longos períodos sentindo pena de si mesmo, pois sabe instintivamente que veio para esta encarnação deixando para trás seu verdadeiro amor.<br /><br />
                  Como tal, tenta se contentar encontrando aspectos simbólicos daquele amor em todas as pessoas que encontra, porém dentro de conceitos românticos do passado.<br /><br />
                  Pode ser insatisfeito com as experiências de sua vida atual, pois tudo o que percebe é visto através das lentes coloridas de seus conceitos preconcebidos.<br /><br />
                  Caminha pela vida com uma silenciosa mágoa e não gosta que os outros lhe façam exigências.<br /><br />
                  Geralmente, nesta posição, existe muita emoção contida e, embora os outros raramente vejam isto, está consciente disso e se recusa a viver o presente.<br /><br />
                  Pode ser muito criativo se não for forçado, pois tende a gastar muito tempo dentro de si mesma, absorvendo lembranças passadas de momentos nos quais sentiu paz consigo mesmo. Não procura a popularidade exterior.<br /><br />
                  Podem surgir casos de amores clandestinos tentando manter no presente um amor do passado. Emocionalmente controlado, tende a permitir que oportunidades da vida a passem para trás.<br /><br />
                  Cessará de perder seu tempo em vãs lamentações (cármicas), no dia em que compreender que deve viver plenamente o presente.<br /><br />
                  Alcançará a felicidade quando perceber que, por viver no presente, não está realmente perdendo o seu passado. <br />`,

                  `Do ponto de vista da saúde, o nativo destruiu-se a si mesmo (drogas, bebidas ou uso neurótico de medicamentos perigosos). Em todo caso, faltava-lhe qualquer disciplina na gestão de sua saúde.<br /><br />
                  É possível também que o nativo já tenha encarnado várias vezes para liquidar esse carma, sem conseguir: a cada vez, perdeu o pé e se afogou.<br /><br />
                  Nesta vida pode se libertar através do auxilio ao próximo e com trabalhos de caridade (cuidar de doentes num hospital ou de prisioneiros, por exemplo).<br /><br />
                  Deve cultivar humildade e respeitar seus limites, sem se encarregar de programas impossíveis e pesados.<br /><br />
                  É preciso aprender a respeitar seus limites energéticos, cuidar da saúde junto com o desenvolvimento da espiritualidade. <br />`,

                  `Quando Júpiter está retrógrado, indica que o nativo não alçara voo em vidas passadas e suas vidas precedentes foram vividas no desperdício ou na limitação. Não renderam os frutos previstos.<br /><br />
                  Conclusão: pouco ou nenhum progresso... É preciso recomeçar! A vida atual oferece uma oportunidade para se libertar de seu carma.<br /><br />
                  Trata-se provavelmente de uma dívida que a pessoa não conseguiu liquidar em várias encarnações precedentes.<br /><br />
                  Estando Júpiter muito bem situado na casa 12, proporciona sua energia de maneira positiva, com a condição de que o nativo trabalhe seus progressos espirituais.<br /><br />
                  A ênfase está na compaixão para com os doentes, os marginalizados e os prisioneiros. O nativo encontrará a sua felicidade ao sacrificar seu ego inferior em benefício dos mais pobres e menos afortunados. <br />`,

                  `Saturno está na casa da espiritualidade e do carma. O nativo se recusou durante várias vidas sucessivas a liquidar suas dívidas.<br /><br />
                  Esta fuga e esta falta de coragem se agravaram. O nativo escolheu para si, desta vez, um programa de muita responsabilidade, a fim de se livrar de um pesado carma.<br /><br />
                  Todas as vezes que o nativo se colocar a serviço daqueles que sofrem (particularmente os prisioneiros e os doentes hospitalizados), aliviará consideravelmente esta dívida.<br /><br />
                  Caso tenha se tornado prisioneiro ou doente, se aceitar serenamente o fato esse carma se liquidará com mais rapidez.<br /><br />
                  O programa de Saturno retrógrado na casa 12 é desenvolver a compaixão para com os outros, o amor universal.<br /><br />
                  Aceitar com paciência seu próprio sofrimento, sem fugir dele. Comprometer-se com seu crescimento espiritual.<br /><br />
                  Assim, o nativo poderá renascer para uma vida mais luminosa. Talvez até mesmo não mais renascer no mundo da matéria, encontrando enfim a felicidade total. <br />`,

                  `Urano na Décima Segunda Casa indica uma busca oculta no inconsciente.<br /><br />
                  A procura de uma identidade espiritual mais elevada e de mergulhos no inconsciente pode manifestar-se no interesse pela ioga, pela meditação e outras formas de misticismo.<br /><br />
                  Pode haver aptidões intuitivas e mediúnicas. Com frequência, os nativos com esta posição se tornam confidentes dos segredos dos seus amigos. Muitas vezes se juntam a organizações secretas.<br /><br />
                  Possuem capacidade para trabalhar nos bastidores na busca de objetivos científicos e humanitários. Mas, no seu pior, haver tendências mediúnicas ilusórias, baseadas em motivações neuróticas.<br /><br />
                  A dedicação superficial a fenómenos psíquicos negativos, ao invés de permitir que a intuição se desenvolva naturalmente, pode criar muita confusão e desilusão na vida desses indivíduos. <br />`,

                  `Netuno está em sua casa titular, aquela que corresponde ao signo de Peixes. Daí sua importância. O nativo nascido com Netuno retrógrado na 12 é uma alma velhíssima, que chega no fim de um ciclo.<br /><br />
                  A entidade se encarnou pelo menos 11 vezes anteriormente e experimentou um ciclo zodiacal completo.<br /><br />
                  Entretanto, algo não foi perfeito: como a casa 12 está ligada à 6 (o auxílio) e representa a caridade universal, é provável que o nativo não tenha prestado os serviços que lhe eram solicitados.<br /><br />
                  De qualquer modo, não na perspectiva espiritual necessária. Esta posição planetária indica que o nativo fora escolhido como mensageiro espiritual e havia abusado disso.<br /><br />
                  Desta vez ainda, a mesma oportunidade lhe é dada: levar alegria, amor e luz aos outros. Programa belo e difícil, que implica responsabilidade e sacrifícios. <br />`,

                  `O nativo vivenciou conhecimentos espirituais elevados e iniciáticos em vidas passadas. Foi destinado, por um ritual religioso, a um ofício preciso, que não realizou.<br /><br />
                  Bloqueado por inibições, neuroses ou obsessões de todo tipo, que a encerravam numa prisão mental, não pode soltar o controle do ego para se tomar útil.<br /><br />
                  Nesta vida pode desenvolver ainda mais sua espiritualidade e se libertar. Pode se transformar através de terapias, escolhendo, quando sentir-se melhor, um ofício que preste serviço aos outros.<br /><br />
                  O trabalho em hospitais, assistência social e associações de caridade, lhe serão muito convenientes. Permitirão aliviar os sofrimentos dos outros - o que não fizera outrora. <br />`,

                  `Quíron sempre mostra o que e onde podemos fazer mais pelos outros do que para nós mesmos.<br /><br />
                  Quando Quíron está na casa 12 ou em Peixes, a tendência é de cuidar compulsivamente dos enfermos e dos infelizes, negligenciando as próprias necessidades ou aquelas de sua própria família.<br /><br />
                  Em alguns casos, a pessoa pode exaurir-se na tentativa de ser o salvador dos outros, se desgastando em trabalhos e missões que podem torná-lo doente ou até levá-lo à morte.<br /><br />
                  É o herói que salva as outras pessoas mesmo que tenha que morrer durante as batalhas.<br /><br />
                  Outras pessoas ao contrário, fingem uma necessidade de ajuda, mostram-se infelizes, quando na verdade elas são a causa dos próprios problemas. Quando Quíron está em Peixes, o problema é a situação de vítima ou salvador.<br /><br />
                  Se a pessoa opta por salvar, irá buscar pelo mundo a quem possa salvar, dedicando-se a causas humanitárias quando na verdade não consegue salvar nem a si mesmo.<br /><br />
                  Outros tendem a se fazer de vítima ou vitimam a si mesmo. A solução é usar a imaginação e criatividade para gerar algo que traga alegria aos outros.<br /><br />
                  Algumas vezes podem levar a paixões por pessoas vigaristas, drogadas ou mentirosas que trazem ruína ou levam à falência; ou aquelas que enganam para roubar.<br /><br />
                  A cura é dedicar-se às qualidades criativas, fazer uma aula de dança, um curso de pintura ou realizar um serviço voluntário. <br />`,

                  `Juno neste signo ou setor sonha com uma união que reproduzirá o céu na terra. Tem medos ocultos de se ligar conjugalmente a alguém, por temer que essa pessoa não corresponda a esse ideal.<br /><br />
                  Às vezes essa pessoa pode optar por não se ligar a ninguém por causa destes medos. Mas se liga a alguém, tem um grande potencial de se sacrificar pela manutenção da parceria/casamento.<br /><br />
                  Busca de uma união espiritual e mística. Avaliar a posição do signo de Libra e de seu regente Vênus, nas suas relações com Juno para ter ideia da natureza global desta pessoa, de forma pela qual ela vivencia seu ideal afetivo e de que forma esse ideal pode ajudar ou atrapalhar suas associações. <br />`,

                  `... <br />`,
            ],
            levels: [ `...` ],
            nodosLunares: [ `...` ]
      }]
};
