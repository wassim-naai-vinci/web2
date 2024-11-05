interface Footerprops{
    footer : string;
}

const Footer = (props : Footerprops) => {
    return <footer>{props.footer}</footer>
}

export default Footer;