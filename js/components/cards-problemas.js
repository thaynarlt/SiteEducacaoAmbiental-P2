function createCardView(problemas) {
    return `
        <div id="problema-${problemas.id}" style="    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25); width: 333px; height: 313px; border-radius: 20px; background: var(--White, #FFF); display: flex; justify-content: center;align-items: center; margin: 8px 10px;" class="sombra">
            <div style="display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; width: 80%;">
            <img src="${problemas.imagem}" alt="">
            <h3 style="color: var(--Grey, #393E46);
            font-family: Poppins;
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;">${problemas.titulo}</h3>
            <p style="color: var(--Grey, #393E46);
            text-align: center;
            font-family: Poppins;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;">${problemas.descricao}</p>
            </div>
        </div>
    `;
}

export default createCardView;