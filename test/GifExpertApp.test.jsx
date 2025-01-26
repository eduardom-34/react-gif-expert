const { render, screen, fireEvent } = require("@testing-library/react");
const { GifExpertApp } = require("../src/GifExpertApp");

describe('Pruebas en el GifEpertApp', () => {

  test('debe agregar una nueva categoria', () => {     

    const { container } = render(<GifExpertApp />);

    const input = screen.getByRole('textbox');

    const form = screen.getByRole('form');

    // Simulamos los eventos

    fireEvent.input(input, { target: { value: 'New Category' } });

    fireEvent.submit(form);

    screen.debug();

      // Verifica que se haya agregado una categoría

    expect(container.querySelectorAll('h3').length).toBe(2);

})
  
  
});
