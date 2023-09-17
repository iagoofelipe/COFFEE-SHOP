# Coffee-Shops
Site do Coffee-Shops, voltado para a divulgação do estabelecimento e de seus produtos.

# Tópicos
- [Descrição do código-fonte](#descrição-do-código-fonte)
# Descrição do código-fonte

- `index.html`:
    
    [github link](https://github.com/iagoofelipe/COFFEE-SHOP/blob/main/index.html)

    - A parte central do html foi dividido em três partes principais, `header`, `section container-center` e `footer`.
    
    - `header` foi separada para a topbar e fixada através do css
        ```html
        <header class="topbar">
            <h1>COFFEE SHOPS</h1>
            <div class="topbar-links">
                <a href="">Home</a>
                <a href="#produtos">Produtos</a>
                <a href="">Contato</a>
            </div>
        </header>
        ```
    - `container-center`, onde os produtos são exibidos
        ```html
        <section class="container-center">
            <section id="header-descricao">
                <div class="texto">
                    <h1>Nosso café</h1>
                    <p>
                        Feito com o mais puro grão, representa
                        o que há de mais belo na experiência de tomar café,
                        trazendo uma sensação única em cada toque.
                    </p>
                </div>
            </section>
            <section id="produtos">
                <h1 style="text-align: center;">Produtos</h1>
                <div style="display: flex; justify-content: center;" id="div-produtos">
                    <!-- os produtos serão inseridos automaticamente aqui através da função setProdutos -->
                </div>
                <h2>conheça mais os nossos produtos</h2>
                <p id="produto-descricao">(posicione o mouse sob uma de nossas opções para exibir a descrição)</p>
            </section>
        </section>        
        ```

    - `footer` rodapé da página, possui as informações relevantes como formas de pagamento, endereço e as redes sociais. Os elementos foram divididos em div para facilitar a  distribuição e centralização dos elementos no css
        ```html
        <footer id="footer">
            <div style="margin: 0;">
                <p>Formas de pagamento</p>
                <img src="img/footer/formas-2.png">
            </div>
            <div>
                <p>00.000.000/0000-00 <br> Rua São José de Algum Lugar <br> 12345-678</p>
            </div>
            <div>
                <p>Clique e acesse nossas Redes Sociais!</p>
                <button onclick="popupMidias('WhastApp')" style="border: 0; background-color: rgba(255, 255, 255, 0);"><img src="img/footer/whatsapp.png"></button>
                <button onclick="popupMidias('Instagram')" style="border: 0; background-color: rgba(255, 255, 255, 0);"><img src="img/footer/instagram.png"></button>
            </div>
        </footer>        
        ```

- `style.css`:
    
    [github link](https://github.com/iagoofelipe/COFFEE-SHOP/blob/main/style.css)

- `script.js`:

    [github link](https://github.com/iagoofelipe/COFFEE-SHOP/blob/main/script.js)
    
    Possui funções básicas para acessar a `base de dados`, `responsividade` e outras necessárias para elementos dentro da página. Cada função possui uma breve descrição de sua finalidade.
