# Key no React

## Porque unica?

3 momentos em que um componente é renderizado novamente no React.

1. Quando o estado altera; 
2. Quando a propriedade altera;
3. Quando um componente pai renderiza novamente;

--- 

Key vai ajudar a fazer uma comparação para o React não renderizar tudo novamente.

Ex: elementos com key = 1, 2, 3, 4

se eu receber depois: 1, 2, 3, 4, 5. 

***O react vai procurar e ver qual é possivel nova key e mostrar ela***. Os elementos com key 1, 2, 3, 4 ele não vai renderizar porque ele já renderizou anteriormente, para não deixar a aplicação lenta.

--- 



