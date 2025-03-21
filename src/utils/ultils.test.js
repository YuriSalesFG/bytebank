import { calculaNovoSaldo } from './index';

describe('Quando eu realizo uma transação', () => {
    test('que é um depósito, o saldo deve aumentar', () => {
        const transacao = {
            transacao: 'Depósito',
            valor: 50,
        }

        const novoSaldo = calculaNovoSaldo(transacao, 100)

        expect(novoSaldo).toBe(150);

    })
})

test('que é uma transferência, o saldo deve diminuir', () => {
    const transacao = {
        transacao: 'transferencia',
        valor: 50,
    }

    const novoSaldo = calculaNovoSaldo(transacao, 100)

    expect(novoSaldo).toBe(50);

})

test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn(saldo => saldo + saldo*0.005);
    
    const saldo = 100;
    const novoSaldo = calculaRendimento(saldo);
    
    expect(novoSaldo).toBe(100.5)
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);

});