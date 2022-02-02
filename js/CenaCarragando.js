import Cena from "./Cena.js";

export default class CenaCarragando extends Cena
{
    desenhar()
    {
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = "20px Impact";
        // this.mapa?.desenhar(this.ctx, this.assets);
        this.ctx.fillStyle = "yellow";
        this.ctx.textAlign = "center";
        this.ctx.fillText(this.assets?.progresso(), this.canvas.width / 2, this.canvas.height / 2);
        if (this.assets.acabou())
        {
            this.ctx.fillText("Aperte espaco para continuar", this.canvas.width / 2, this.canvas.height / 2 + 20);

        }
    }

    quadro(t)
    {
        const that = this;
        this.t0 = this.t0 ?? t;
        this.dt = (t - this.t0) / 1000;

        if (this.assets.acabou())
        {
            if (this.input.comandos.get("PROXIMA_CENA"))
            {
                this.game.selecionaCena("jogo");
                return;
            }
        }

        this.desenhar();
        this.iniciar();
        this.t0 = t;
    }


};