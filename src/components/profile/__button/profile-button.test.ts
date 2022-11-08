import {renderDOM} from 'core';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import {screen, getByTestId} from '@testing-library/dom';
import {Component} from 'core/Block';
import {ProfileButton} from './profile-button';

type RenderDomParams = {
    Block: Component;
    props: any;
};

function renderBlock({Block, props}: RenderDomParams) {
    document.body.innerHTML = '<div id="root"></div>';
    renderDOM(new Block(props));
}

describe('components/button', () => {
    let btn = null;
    let answer = null;
    afterEach(() => {
        // cleanup on exiting
        btn = null;
        answer = null;
    });
    it('should render default template', () => {
        btn = new ProfileButton({});
        answer = btn.render();
        expect(answer).toBe('<button data-testid="custom-element" type="submit" name="save" class="{{#if className}}{{className}}{{else}}profile__form-submit{{/if}}" id="button_registor" disabled>Сохранить</button>')
    });
    
    it('should be and be render with className', () => {
        renderBlock({
            Block: ProfileButton as any,
            props: {className: '13213124'},
        });
        expect(getByTestId(document.body,'custom-element')).toBeInTheDocument()
        expect(screen.getByRole('button')).toHaveClass('13213124');
    });
});
