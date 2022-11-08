// import { renderDOM } from 'core';
// // @ts-ignore
// import { screen, getByTestId } from '@testing-library/dom';
// import { BlockClass } from 'core/Block';
// import Button from './button';
//
// type RenderDomParams = {
//     Block: BlockClass;
//     props: any;
// };
//
// function renderBlock({ Block, props }: RenderDomParams) {
//     document.body.innerHTML = '<div id="root"></div>';
//     renderDOM(new Block(props));
// }
//
// describe('components/button', () => {
//     let btn = null;
//     let answer = null;
//     afterEach(() => {
//         // cleanup on exiting
//         btn = null;
//         answer = null;
//     });
//     it('should be render with or without label', () => {
//         btn = new Button({});
//
//         answer = btn.render();
//         expect(answer).toBe(
//             '<button class="{{className}}" type="submit" data-testid="btn-test">Кнопка</button>'
//         );
//
//         btn = new Button({ label: 'label' });
//         answer = btn.render();
//
//         expect(answer).toBe(
//             '<button class="{{className}}" type="submit" data-testid="btn-test">label</button>'
//         );
//     });
//
//     it('should be and be render with className', () => {
//         renderBlock({
//             Block: Button as any,
//             props: { className: 'qwerty' },
//         });
//         expect(getByTestId(document.body, 'btn-test')).toBeInTheDocument();
//         expect(screen.getByRole('button')).toHaveClass('qwerty');
//     });
// });
