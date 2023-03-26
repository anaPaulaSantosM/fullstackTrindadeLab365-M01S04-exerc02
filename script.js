class Conta {
    saldo = 0;
    #senha = 1234;
  
    constructor(saldoInicial, senha) {
      this.saldo = saldoInicial;
      this.#senha = senha;
    }
  
    get senha() {
      return this.#senha;
    }
  
    deposito(valor, senha) {
      this.#checkSenha(senha);
      this.saldo += valor;
    }
  
    retirada(valor) {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente!");
      }
      this.saldo -= valor;
    }
  
    #checkSenha(senha) {
      if (senha !== this.#senha) {
        throw new Error("Senha incorreta. Tente novamente!");
      }
    }
  }
  
  const contaCorrente = new Conta(0, 1234);
  contaCorrente.deposito(200, 1234);
  contaCorrente.retirada(80);
  console.log(contaCorrente.saldo);