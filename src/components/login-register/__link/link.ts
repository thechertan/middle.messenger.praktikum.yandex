import Block from "core/Block";

interface LinkProps {
  text: string;
  to: string;
  className?: string;
}

export class Link extends Block {
  static componentName = "Link";

  constructor(props: LinkProps) {
    const onClick = (e: MouseEvent) => {
      e.preventDefault();
      window.router.go(this.props.to);
    };
    super({ ...props, events: { click: onClick } });
  }

  render() {
    return `<a class='{{className}}' href="{{to}}">{{text}}</a>`;
  }
}
