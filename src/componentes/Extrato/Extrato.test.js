import { render, screen } from '@testing-library/react';
import Extrato from './index';

test('Deve Renderizar uma lista de transações', () =>{
    const transacoes = [
        {
            transacoes: 'Depósito',
            valor: 100,
        }
    ];

    render(<Extrato transacoes={transacoes} />)
    const lista = screen.getByRole('listitem')
    expect(lista).toBeInTheDocument();
});


