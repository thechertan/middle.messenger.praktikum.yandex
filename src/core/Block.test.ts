import {renderDOM} from 'core';
// @ts-ignore
// eslint-disable-next-line import/no-extraneous-dependencies
import {screen} from '@testing-library/dom';
import {Component} from 'core/Block';
import Block from "./Block";

type RenderDomParams = {
    Block: Component;
    props: any;
};


// eslint-disable-next-line @typescript-eslint/no-shadow
function renderBlock({Block, props}: RenderDomParams) {
    document.body.innerHTML = '<div id="root"></div>';
    renderDOM(new Block(props));
}

describe('Block', () => {
    
    interface IButton {
        className?: string
        text?: string;
    }
    
    class Button extends Block {
        constructor({...props}: IButton) {
            super({...props});
        }
        
        // language=hbs
        render(): string {
            return `
                <button class="{{#if className}}{{className}}{{else}}defaultClass{{/if}}">{{#if text}}{{text}}{{esle}}
                    clickMe{{/if}}</button>`
        }
    }
    
    let btn: any;
    
    beforeEach(() => {
        btn = new Button({});
    })
    
    it('should return defaultClass and custom ClassName', () => {
        renderBlock({
            Block: Button as any,
            props: {},
        });
        expect(screen.getByRole('button')).toHaveClass('defaultClass');
        renderBlock({
            Block: Button as any,
            props: {className: 'CustomClassNames'},
        })
        expect(screen.getByRole('button')).toHaveClass('CustomClassNames');
        
    })
    
    it('should add class to props and test default props', () => {
        expect(btn.props).toEqual({})
        expect(btn.props.className).toBe(undefined)
        expect(btn.props.text).toBe(undefined)
        btn.setProps({className: 'CustomClassNames', text: 'CustomText'})
        expect(btn.props.className).toBe('CustomClassNames')
        expect(btn.props.text).toBe('CustomText')
    })
    
    it('should return contentName', () => {
        expect(btn.getContent().tagName).toBe('BUTTON')
    })
})
