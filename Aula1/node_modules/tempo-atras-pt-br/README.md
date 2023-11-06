# tempo-atras-pt-br

tempo-atras-pt-br é um pacote que fornece por escrito a diferença entre duas datas.

## Instalação
```sh
npm i tempo-atras-pt-br
```
Repositorio npm: https://www.npmjs.com/package/tempo-atras-pt-br

## Importação

```javascript
const ta = require('tempo-atras-pt-br');
```
## Como usar

A função tempoAtras() espera receber uma data no tipo Date ou Timestamp e irá comparar com a data atual.
```javascript
ta.tempoAtras(new Date(2021,03,14)); // => Há 15 horas
ta.tempoAtras(new Date(2021,03,01)); // => Há 2 semanas
ta.tempoAtras(new Date(2015,3,1)); // => Há 6 anos
ta.tempoAtras(new Date("December 17, 1995 03:24:00").getTime())); // => Há 25 anos
ta.tempoAtras(new Date("December 17, 2000 03:24:00")); // => Há 20 anos
ta.tempoAtras(new Date(1995,11,17)); // => Há 25 anos
ta.tempoAtras(new Date(1995,11,17,3,24,0)); // => Há 25 anos
ta.tempoAtras(Date.now()); // => Agora
```
É possivel também passar duas datas para serem comparadas, caso a segunda data nao for passada como parâmetro, será considerado a data atual.

```javascript
ta.tempoAtras(Date.now() - 600000, Date.now()); // => Há 10 minutos
```

Sempre a primeira data tem que ser menor que a segunda

```javascript
ta.tempoAtras(Date.now(), Date.now() - 600000); // => Data Inválida
```

## Atenção
O numero passado nos meses das datas começam no indice 0, ou seja 0 = Janeiro, 1 = Fevereiro, etc.
```javascript
new Date(1995,11,17); // => 17/12/1999 || 17 de Dezembro de 1995
new Date(2021,0,2); // => 17/12/1999 || 2 de Janeiro de 2021
```
