import Block from '../../../core/Block';

interface LinkProps {
  text: string;
  to: string;
  className?: string;
}

export class Link extends Block {
  constructor(props: LinkProps) {
    const onClick = (e: MouseEvent) => {
      // const router = new Router();
      // router.go(this.props.to);
      console.log('Кольян питух')
      e.preventDefault();
    }

    super({...props, events: { click: onClick }});
  }

  render() {
    // language=hbs
    return `<a class='{{className}}' href="{{to}}">{{text}} </a>`;
  }
}