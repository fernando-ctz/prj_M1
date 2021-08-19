var botao=document.getElementById('inicio')
var paragrafo=document.getElementById('txt')
function inicio(){
var resposta1 = prompt("1 - Olá, você vem sempre aqui? \n 2 - Olá, como vai?")


if(resposta1==='1') {
paragrafo.innerHTML='meu deus, você só pode ser dos anos 80!'
botao.onclick=r1
}
else if(resposta1==='2') {
paragrafo.innerHTML='vou bem, obrigado por perguntar!'
botao.onclick=r70
}
}
function r1(){
let resposta = prompt("1 - (se ofender ¬¬)\n 2 - (entrar na brincadeira ;))")
if(resposta ==='1') {
paragrafo.innerHTML='ei, não se ofenda, só quis tirar um sarro com você! Adoro anos 80'    
botao.onclick=r2
}
else if(resposta ==='2'){
paragrafo.innerHTML='eu mesmo prefiro muito mais os anos 80, principalmente a musica. O que você ouve?'
botao.onclick=r62
}
}
function r2(){
let resposta = prompt('1 - (Você com tanto interesse no carinha e ele te zoa assim? Jogar bebida na cara dele)')
if(resposta ==='1') 
{
paragrafo.innerHTML='(ele fica perplexo com sua atitude e sai do bar _|_ )(FIM)'
botao.onclick=r333
}
else if(resposta ==='2') {
paragrafo.innerHTML='(relevar, afinal, ele parece ter um bom senso de humor.) - Você é engraçado!'}
botao.onclick=r3
}
function r3(){
let resposta = prompt("1 - Entrar na zueira. - Na verdade eu não sabia muito como vir falar com você,\n sabe quando você quer parecer a pessoa descolada e na hora de falar você diz: oi eu sou uma batata?\n 2 - (Você cora pois não sabia que esse papinho infalível realmente funcionava.)")
if(resposta ==='1') {
paragrafo.innerHTML='kkkkkkkkkkkkk, demais! Você também é muito comédia! Quer? (ele te oferece o uísque que está bebendo.)'    
botao.onclick=r4
}
else if(resposta ==='2'){
paragrafo.innerHTML='o que você ouve?'
botao.onclick=r62
}
}
function r4(){
let resposta = prompt("1 - pegar o copo dele do balcão e beber\n 2 - recusar, pois não gosta de uísque")
if(resposta ==='1') {
paragrafo.innerHTML='ele olha interessado a maneira direta que pega o uísque'    
botao.onclick=r5
}
else if(resposta ==='2'){
paragrafo.innerHTML='- nunca fiz amigos bebendo leite'
botao.onclick=r51
}
}
function r5(){
let resposta = prompt("1 - Você só pegou o uísque para impressionar, no fundo você nem sabia que não gostava.\n 2 - Você curte muito uísque, sempre bebeu com seu pai")
if(resposta ==='1') {
paragrafo.innerHTML='Tudo começa a subir'    
botao.onclick=r6
}
else if(resposta ==='2'){
paragrafo.innerHTML='o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'
botao.onclick=r15
}
}
function r6(){
let resposta = prompt("1 - Você sai correndo para o banheiro\n 2 - Você tenta se manter firme")
if(resposta ==='1') {
paragrafo.innerHTML='Você vomita na pia, se enxagua e pega um chiclete para disfarçar. Mas quando você volta para encontrar M1 ele não está mais lá.'    
botao.onclick=r7
}
else if(resposta ==='2'){
paragrafo.innerHTML='Meu deus, não devia ter saído de casa de estomago vazio, é quase certo, você vai acabar vomitando'
botao.onclick=r8
}
}
function r7(){
paragrafo.innerHTML='(FIM)'    
}
function r8(){
let resposta = prompt("1 - Você sai correndo para o banheiro mais próximo\n 2 - Você tenta manter a educação e pedir licença para ir ao banheiro.")
if(resposta ==='1') {
paragrafo.innerHTML='não vai dar tempo de chegar no banheiro'    
botao.onclick=r9
}
else if(resposta ==='2'){
paragrafo.innerHTML='conforme você começa a falar, você percebe que será tarde demais. Na ultima palavra sai um jato em direção a M1'
botao.onclick=r12
}
}
function r9(){
let resposta = prompt("1 - vomitar no vaso de planta mais próximo\n 2 - tentar chegar até o banheiro")
if(resposta ==='1') {
paragrafo.innerHTML='o segurança te vê fazendo isso e te coloca para fora do bar'    
botao.onclick=r10
}
else if(resposta ==='2'){
paragrafo.innerHTML='Você deveria ter prestado atenção nos seus sentidos, um incontido jato de vomito cai no chão, na pressa de chegar no banheiro você escorrega, bate a cabeça e morre'
botao.onclick=r11
}
}
function r10(){
paragrafo.innerHTML='(FIM)'
}
function r11(){
paragrafo.innerHTML='(FIM TRÁGICO)'
}
function r12(){
let resposta = prompt("1 - você tenta limpar\n 2 - pede desculpa e finge demência")
if(resposta ==='1') {
paragrafo.innerHTML='ele fica com nojo e vomita em você. vocês entram em um loop infinito até o fim dos tempos'    
botao.onclick=r13
}
else if(resposta ==='2'){
paragrafo.innerHTML='ele se levanta bastante constrangido e vai embora sem dizer nada'
botao.onclick=r14
}
}
function r13(){
paragrafo.innerHTML='(FIM)'
}
function r14(){
paragrafo.innerHTML='(FIM)'
}
function r15(){
let resposta = prompt("1 - Claro\n 2 - Você propõe de sairem de la e irem até sua casa")
if(resposta ==='1') {
paragrafo.innerHTML='vocês vão até a área externa, o céu está lindo, sem nuvens, com muitas estrelas e uma leve brisa fria bate no rosto de vocês'    
botao.onclick=r16
}
else if(resposta ==='2'){
paragrafo.innerHTML='vim para cá para o aniversário de um amigo meu da época da faculdade, queria aproveitar mais com ele.'
botao.onclick=r50
}
}
function r16(){
let resposta = prompt("1 - (ataca ele com seu beijo infalível)\n 2 - (vocês se encostam em uma mureta e em silêncio contemplam o céu)")
if(resposta ==='1') {
paragrafo.innerHTML='(ele retribui, o beijo é muito bom e intenso)'    
botao.onclick=r17
}
else if(resposta ==='2'){
paragrafo.innerHTML='(M1 pega sua mão)'
botao.onclick=r47
}
}
function r17(){
let resposta = prompt("1 - (esquentar as coisas)\n 2 - (contemplar o céu)")
if(resposta ==='1') {
paragrafo.innerHTML='(as coisas esquentam, mas ele parece um pouco vacilante) - Olha achei demais te conhecer, mas acabei de sair de um relacionamento e não estou muito no clima. Por que não vamos com mais calma?'    
botao.onclick=r18
}
else if(resposta ==='2'){
paragrafo.innerHTML='(vocês contemplam o céu e o ar frio leva vocês a ficarem mais próximos, vocês sentem a respiração um do outro e aquele frio na barriga que a muito não sentia, faz parecer que há uma revoada de borboletas no seu estômago. Vocês se beijam demoradamente)'
botao.onclick=r44
}
}
function r18(){
let resposta = prompt("1 - (forçar a barra)\n 2 - (entender) - por que não voltamos para dentro?")
if(resposta ==='1') {
paragrafo.innerHTML='(ele não curtiu sua atitude e sem dizer mais nada volta para dentro do bar e se senta com alguns amigos)'    
botao.onclick=r19
}
else if(resposta ==='2'){
paragrafo.innerHTML='(vocês voltam para dentro e ele te apresenta aos amigos dele, a noite continua muito divertida, mas o bar começa a fechar)'
botao.onclick=r20
}
}
function r19(){
paragrafo.innerHTML='(FIM)'
}
function r20(){
let resposta = prompt("1 - (você convida ele para sua casa)\n 2 - (você convida todos os amigos dele para sua casa)\n 3 - (ainda não tem certeza se quer avançar com M1) - me passa seu Whats?")
if(resposta ==='1') {
paragrafo.innerHTML='eu adoraria ir, mas esse encontro com meus amigos está marcado a mais de ano, me passa seu Whats?'    
botao.onclick=r21
}
else if(resposta ==='2'){
paragrafo.innerHTML='a mesa vira uma muvuca, todos comemoram -AEEEEEEEEEE!!!! -YUPIIIII!!!! -ISSAAAAAAAAA!!!!! você percebe que todo mundo está muito bêbado, você veio de uber'
botao.onclick=r22
}
else if(resposta ==='3'){
paragrafo.innerHTML='Claro - Disse M1 - Adorei te conhecer, quero te ver em breve! Vamos combinar algo só nós dois'
botao.onclick=r111
}
}
function r111(){
paragrafo.innerHTML='(FINAL FELIZ)'
}
function r21(){
let resposta = prompt("1 - (me dispensou para ficar com os amigos?) - Claro, aqui! (passar o número errado)\n 2 - (mesmo não chegando aos finalmentes foi uma noite muito agradável) - Claro, aqui! (passar número certo)")
if(resposta ==='1') {
paragrafo.innerHTML='(você passou o número errado) - FIM'    
botao.onclick=r112
}
else if(resposta ==='2'){
paragrafo.innerHTML='(você passou o número correto)'
botao.onclick=r113
}
}
function r112(){
paragrafo.innerHTML='(FIM)'
}
function r113(){
paragrafo.innerHTML='(FINAL FELIZ)'
}
function r22(){
let resposta = prompt("1 - E ai, quem está de carro?\n 2 - Acho que estamos um pouco bêbados, o que acham de irmos de uber?")
if(resposta ==='1') {
paragrafo.innerHTML='(duas das meninas que estavam na mesa levantam a mão um pouco vacilantes e olhos semicerrados)'    
botao.onclick=r23
}
else if(resposta ==='2'){
paragrafo.innerHTML='Imagine - disse uma das meninas - Dirijo melhor quando tô assim, EU PILOTO!'
botao.onclick=r32
}
}
function r23(){
let resposta = prompt("1 - e ai? bora?\n 2 - Acho que estamos um pouco bêbados, o que acham de irmos de uber")
if(resposta ==='1') {
paragrafo.innerHTML='(vocês entram em um dos carros, a amiga de M1 está dirigindo um pouco rápido demais)'    
botao.onclick=r24
}
else if(resposta ==='2'){
paragrafo.innerHTML='como faremos com os carros? - disse Joana, a menina com traços orientais - Sem chance!'
botao.onclick=r33 
}
}
function r24(){
let resposta = prompt("1 - Meu! para o carro, você ta doida de dirigir assim?\n 2 - Acho que estamos um pouco bêbados, o que acham de irmos de uber?")
if(resposta ==='1') {
paragrafo.innerHTML='- O carro é meu, ninguem me diz como dirigir!!!'    
botao.onclick=r25
}
else if(resposta ==='2'){
paragrafo.innerHTML='2 - (você abre o teto solar e coloca metade do corpo para fora para aproveitar o vento)'
botao.onclick=r29
}
}
function r25(){
let resposta = prompt("1 - Então para o carro que eu vou descer e pedir um uber\n 2 - Realmente, bobagem, vamos curtir (você abre o teto solar e coloca metade do corpo para fora para aproveitar o vento)")
if(resposta ==='1') {
paragrafo.innerHTML='- Calma - diz M1 - Joana vai dirigir tranquila, não vai? (Joana acena positivamente com a cabeça)'    
botao.onclick=r26
}
else if(resposta ==='2'){
paragrafo.innerHTML='(havia um comando policial em uma das esquinas que passaram, os policiais ligam a sirene, Joana acelera mais e mostra que dentro da sua bolsa tem MDMA, devia ter umas 100 balas dentro de um frasco) - vamos ter que tomar - Disse Joana'
botao.onclick=r39
}
}
function r39(){
    let resposta = prompt("1 - (você toma um punhado)\n 2 - (você se recusa a tomar)")
   if(resposta ==='1') {
   paragrafo.innerHTML='(Você começa sentir muito mais o seu corpo, as sensações ficam mais fortes. Você começa a sentir tontura, um calor absurdo e uma repentina dor no peito. Então tudo escurece)'    
    botao.onclick=r40
   }
   else if(resposta ==='2'){
   paragrafo.innerHTML='(Joana acelera cada vez mais, mas a viatura está cada vez mais próxima. Ela abre fogo, você sente sua roupa úmida e quente. Sangue, escuridão, zumbido e o nada)'
   botao.onclick=r41
   }
   }
   function r40(){
    paragrafo.innerHTML='(FINAL TRÁGICO)'
    }
    function r41(){
    paragrafo.innerHTML='(FINAL TRÁGICO)'
    }
function r26(){
 let resposta = prompt("1 - Eu quero descer mesmo assim\n 2 - Certo, mas não faça mais isso, você está bêbada e ta arriscando nossas vidas")
if(resposta ==='1') {
paragrafo.innerHTML='(você desce do carro com muita frustração, pede um uber e dentro do uber percebe que esqueceu de pedir o Whats de M1)'    
 botao.onclick=r27
}
else if(resposta ==='2'){
paragrafo.innerHTML='- HAHAHAHAHAHAHA - Diz Joana, pisando fundo no acelerador. Ela fura um sinal vermelho, dois sinais vermelhos, no terceiro o carro se choca contra um ônibus. (Não houve sobreviventes)'
botao.onclick=r28
}
}
function r27(){
paragrafo.innerHTML='(FIM)'
}
function r28(){
paragrafo.innerHTML='(FINAL TRÁGICO)'
}
function r29(){
let resposta = prompt("1 - (você toma um punhado)\n  2 - (você se recusa a tomar)")
if(resposta ==='1') {
paragrafo.innerHTML='(Você começa sentir muito mais o seu corpo, as sensações ficam mais fortes. Você começa a sentir tontura, um calor absurdo e uma repentina dor no peito. Então tudo escurece)'    
botao.onclick=r30
}
else if(resposta ==='2'){
paragrafo.innerHTML='(Joana acelera cada vez mais, mas a viatura está cada vez mais próxima. Ela abre fogo, você sente sua roupa úmida e quente. Sangue, escuridão, zumbido e o nada)'
botao.onclick=r31
}
} 
function r30(){
paragrafo.innerHTML='(FINAL TRÁGICO)'
}
function r31(){
paragrafo.innerHTML='(FINAL TRÁGICO)'
}
function r32(){
let resposta = prompt("1 - Vamos de uber vai!\n 2 - Quer saber, mudei de ideia, não estou me sentindo muito bem, acho que preciso descansar.")
if(resposta ==='1') {
paragrafo.innerHTML='como faremos com os carros? - disse Joana, a menina com traços orientais - Sem chance!'    
botao.onclick=r33
}
else if(resposta ==='2'){
paragrafo.innerHTML='(M1 se aproxima, te da um beijo e passa seu número de Whats) - Quero te ver novamente - Disse M1'
botao.onclick=r43
}
} 
function r43(){
paragrafo.innerHTML='(FINAL FELIZ)'
}
function r33(){
let resposta = prompt("1 - (topar ir de carro)\n  2 - (não aceitar, pois no estado que todos estão é muito arriscado. pedir um uber)")
if(resposta ==='1') {
paragrafo.innerHTML='(vocês entram em um dos carros, Joana, a amiga de M1 está dirigindo um pouco rápido demais)'    
botao.onclick=r24
}
else if(resposta ==='2'){
paragrafo.innerHTML='(você pede um uber, e deixa todos perplexos para trás. E um detalhe, você se esqueceu de pedir o telefone de M1)'
botao.onclick=r42
}
}
function r42(){
paragrafo.innerHTML='(FIM)'
}
function r44(){
let resposta = prompt("1 - Uau! Quanto tempo não me sentia assim!\n  2 - (esquentar as coisas)")
if(resposta ==='1') {
paragrafo.innerHTML='para ser sincero, eu também'    
botao.onclick=r45
}
else if(resposta ==='2'){
paragrafo.innerHTML='(as coisas esquentam, mas ele parece um pouco vacilante) - Olha achei demais te conhecer, mas acabei de sair de um relacionamento e não estou muito no clima. Por que não vamos com mais calma?'
botao.onclick=r18
}
} 
function r45(){
let resposta = prompt("1 - o que acha de irmos para minha casa?\n  2 - está um pouco frio, vamos voltar?")
if(resposta ==='1') {
paragrafo.innerHTML='só estava esperando você me chamar (final super feliz)'    
botao.onclick=r46
}
else if(resposta ==='2'){
paragrafo.innerHTML='(vocês voltam para dentro e ele te apresenta aos amigos dele, a noite continua muito divertida, mas o bar começa a fechar)'
botao.onclick=r20
}
} 
function r46(){
paragrafo.innerHTML='(FINAL SUPER FELIZ)'
}
function r47(){
let resposta = prompt("1 - (se aproximar e dar um beijo em M1)\n  2 - (aguardar M1 tomar iniciativa)")
if(resposta ==='1') {
paragrafo.innerHTML='para ser sincero, eu também'    
botao.onclick=r45
}
else if(resposta ==='2'){
paragrafo.innerHTML='(M1 alisa seu rosto, você sente sua inebriante respiração e você recebe o melhor beijo de sua vida)'
botao.onclick=r48
}
}
function r48(){
let resposta = prompt("1 - uau! o que foi isso?\n  2 - (esquentar as coisas)")
if(resposta ==='1') {
paragrafo.innerHTML='não sei, mas sinto que é muito especial. O que acha de irmos para minha casa?'    
botao.onclick=r49
}
else if(resposta ==='2'){
paragrafo.innerHTML='(vocês voltam para dentro e ele te apresenta aos amigos dele, a noite continua muito divertida, mas o bar começa a fechar)'
botao.onclick=r20
}
} 
function r49(){
    paragrafo.innerHTML='(FINAL SUPER FELIZ)'
}
function r50(){
let resposta = prompt("1 - (se ofender, pois estava totalmente na dele e ele dispensa ir para sua casa para ficar com o amigo dele?)\n  2 - (entender, afinal amigos de longa data tem muita importância) - Me apresente seus amigos!")
if(resposta ==='1') {
paragrafo.innerHTML='(Ir embora)'    
botao.onclick=r1000
}
else if(resposta ==='2'){
paragrafo.innerHTML='(vocês voltam para dentro e ele te apresenta aos amigos dele, a noite continua muito divertida, mas o bar começa a fechar)'
botao.onclick=r20
}
} 
function r1000(){
    paragrafo.innerHTML='(FIM)'
}
function r51(){
let resposta = prompt("1 - você ri e pede uma cerveja\n  2 - decide pegar o copo de uísque e tomar")
if(resposta ==='1') {
paragrafo.innerHTML='o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'    
botao.onclick=r52
}
else if(resposta ==='2'){
paragrafo.innerHTML='(Tudo começa a subir)'
botao.onclick=r53
}
}
function r52(){
let resposta = prompt("1 - Claro\n  2 - Você propõe de sairem de la e irem até sua casa")
if(resposta ==='1') {
paragrafo.innerHTML='vocês vão até a área externa, o céu está lindo, sem nuvens, com muitas estrelas e uma leve brisa fria bate no rosto de vocês.'    
botao.onclick=r16
}
else if(resposta ==='2'){
paragrafo.innerHTML='- vim para cá para o aniversário de um amigo meu da época da faculdade, queria aproveitar mais com ele.'
botao.onclick=r50
}
} 
function r53(){
let resposta = prompt("1 - Você sai correndo para o banheiro\n 2 - Você tenta se manter firme)")
if(resposta ==='1') {
paragrafo.innerHTML=' Você vomita na pia, se enxagua e pega um chiclete para disfarçar. Mas quando você volta para encontrar M1 ele não está mais lá.'    
botao.onclick=r7
}
else if(resposta ==='2'){
paragrafo.innerHTML='Meu deus, não devia ter saído de casa de estomago vazio, é quase certo, você vai acabar vomitando.'
botao.onclick=r8
}
} 
function r55(){
let resposta = prompt("1 - Você sai correndo para o banheiro\n 2 - Você tenta manter a educação e pedir licença para ir ao banheiro.)")
if(resposta ==='1') {
paragrafo.innerHTML=' não vai dar tempo de chegar no banheiro.'    
botao.onclick=r56
}
else if(resposta ==='2'){
paragrafo.innerHTML='conforme você começa a falar, você percebe que será tarde demais. Na ultima palavra sai um jato em direção a M1.'
botao.onclick=r59
}
}
function r56(){
let resposta = prompt("1 - vomitar no vaso de planta mais próximo\n 2 - tentar chegar até o banheiro)")
if(resposta ==='1') {
paragrafo.innerHTML='o segurança te vê fazendo isso e te coloca para fora do bar'    
botao.onclick=r57
}
else if(resposta ==='2'){
paragrafo.innerHTML='Você deveria ter prestado atenção nos seus sentidos, um incontido jato de vomito cai no chão, na pressa de chegar no banheiro você escorrega, bate a cabeça e morre.'
botao.onclick=r58
}
} 
function r57(){
    paragrafo.innerHTML='(FIM)'
}
function r58(){
    paragrafo.innerHTML='(FINAL SUPER TRÁGICO)'
}
function r59(){
let resposta = prompt("1 - você tenta limpar\n 2 - pede desculpa e finge demência)")
if(resposta ==='1') {
paragrafo.innerHTML='ele fica com nojo e vomita em você. vocês entram em um loop infinito até o fim dos tempos'    
botao.onclick=r60
}
else if(resposta ==='2'){
paragrafo.innerHTML='ele se levanta bastante constrangido e vai embora sem dizer nada'
botao.onclick=r61
}
}
function r60(){
paragrafo.innerHTML='(FIM COM LOOP)'
}
function r61(){
paragrafo.innerHTML='(FINAL TRISTE)'
}
function r62(){
let resposta = prompt("1 - Adoro sertanejo universitário e funk\n 2 - curto muito o pop dos anos 80. MJ, Madonna (rainha) Cindy Lauper, Bonnie Tyler etc. Mas gosto também de rock, Bon Jovi, Whitesnake, Scorpions, sabe esses rocks mela cueca? \n 3 - Minha vida é o Jazz, poderia ouvir o dia inteiro Sarah Vaughan, Ella Fitzgerald, Duke Ellington (meu favorito)) \n 4 - Não sou muito de música, escuto o que estiver tocando \n 5 - Vozes usahasuhsauashuashsa")
if(resposta ==='1') {
paragrafo.innerHTML='verdade? Sou muito ligado em Rock progressivo, Jazz fusion, Doom Metal e Bossa Nova. Poderia falar sobre isso o dia inteiro.'    
botao.onclick=r64
}
else if(resposta ==='2'){
paragrafo.innerHTML='Caramba, sou muito ligado em rock progressivo, mas acho fantástico esse som, escuto direto também! o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'
botao.onclick=r15
}
else if(resposta ==='3'){
paragrafo.innerHTML='Nossa, não acredito! tem sido tão raro encontrar alguem com um gosto musical tão bom! Sou fã de todos esses e em especial Duke Ellington! Olha, não sou muito de fazer isso, mas tenho vários LPs. O que acha de irmos em casa para escutarmos? '
botao.onclick=r68
}
else if(resposta ==='4'){
paragrafo.innerHTML='(ele parece um pouco desinteressado agora) - poxa... bom eu preciso voltar para a mesa dos meus amigos, é aniversário de um deles e não nos vemos desde a época da faculdade, foi muito legal te conhecer (M1 parte)'
botao.onclick=r69
}
else if(resposta ==='5'){
paragrafo.innerHTML='o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'
botao.onclick=r15
}
}
function r64(){
let resposta = prompt("1 - Ele não parece mais tão interessante, gosto de musica mas nem tanto e eu to aqui dando em cima dele e ele querendo falar desse monte de coisa que nunca ouvi falar?\n 2 - Nossa, em pensar que musica para mim é praticamente para dançar e fazer faxina uahauhauhauha, adoraria conhecer mais sobre tudo isso que falou.)")
if(resposta ==='1') {
paragrafo.innerHTML='Uau, você parece com sono... bem, eu vou ali na mesa onde estão meus amigos, de qualquer maneira, prazer em te conhecer. (ele vai embora)'    
botao.onclick=r65
}
else if(resposta ==='2'){
paragrafo.innerHTML='Legal, me passa seu Whats? Assim poderiamos marcar para eu te mostrar mais sobre. (final feliz)'
botao.onclick=r66
}
}
function r65(){
paragrafo.innerHTML='(FIM)'
}
function r66(){
paragrafo.innerHTML='(FINAL FELIZ)'
}
function r68(){
paragrafo.innerHTML='(FINAL MUITO FELIZ)'
}
function r69(){
paragrafo.innerHTML='(FIM)'
}
function r70(){
let resposta = prompt("1 - o que está bebendo?\n 2 - desculpa te falar assim, mas te achei muito bonito! quer conversar?)")
if(resposta ==='1') {
paragrafo.innerHTML='uísque, quer um pouco?'    
botao.onclick=r71
}
else if(resposta ==='2'){
paragrafo.innerHTML='poxa, obrigado, adoro elogios gratuitos, sobre musica, o que você ouve?'
botao.onclick=r72
}
}
function r71(){
let resposta = prompt("1 - pegar o copo dele do balcão e beber\n 2 - recusar, pois não gosta de uísque)")
if(resposta ==='1') {
paragrafo.innerHTML='ele olha interessado a maneira direta que pega o uísque'    
botao.onclick=r5
}
else if(resposta ==='2'){
paragrafo.innerHTML='- nunca fiz amigos bebendo leite'
botao.onclick=r51
}
}
function r72(){
let resposta = prompt("1 - Adoro sertanejo universitário e funk\n 2 - curto muito o pop dos anos 80. MJ, Madonna (rainha) Cindy Lauper, Bonnie Tyler etc. Mas gosto também de rock, Bon Jovi, Whitesnake, Scorpions, sabe esses rocks mela cueca? \n 3 - Minha vida é o Jazz, poderia ouvir o dia inteiro Sarah Vaughan, Ella Fitzgerald, Duke Ellington (meu favorito)) \n 4 - Não sou muito de música, escuto o que estiver tocando \n 5 - Vozes usahasuhsauashuashsa")
if(resposta ==='1') {
paragrafo.innerHTML='verdade? Sou muito ligado em Rock progressivo, Jazz fusion, Doom Metal e Bossa Nova. Poderia falar sobre isso o dia inteiro.'    
botao.onclick=r64
}
else if(resposta ==='2'){
paragrafo.innerHTML='Caramba, sou muito ligado em rock progressivo, mas acho fantástico esse som, escuto direto também! o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'
botao.onclick=r15
}
else if(resposta ==='3'){
paragrafo.innerHTML='Nossa, não acredito! tem sido tão raro encontrar alguem com um gosto musical tão bom! Sou fã de todos esses e em especial Duke Ellington! Olha, não sou muito de fazer isso, mas tenho vários LPs. O que acha de irmos em casa para escutarmos? '
botao.onclick=r68
}
else if(resposta ==='4'){
paragrafo.innerHTML='(ele parece um pouco desinteressado agora) - poxa... bom eu preciso voltar para a mesa dos meus amigos, é aniversário de um deles e não nos vemos desde a época da faculdade, foi muito legal te conhecer (M1 parte)'
botao.onclick=r69
}
else if(resposta ==='5'){
paragrafo.innerHTML='o papo flui muito bem. - O que acha de irmos para a área externa? ta um pouco barulhento'
botao.onclick=r15
}
}
