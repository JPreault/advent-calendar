import { useState, useEffect, useRef } from 'react';

// url : contient l'url web vers le svg
// className : class que l'on veux donner à notre div parente de notre svg

function SvgInline({url, className, onError = null, setLoading = null}) {
    const [svg, setSvg] = useState(null);
    const containSvg = useRef();

    useEffect(() => {
        fetch(url).then(res => res.text()).then(setSvg);
    }, [url]);

    useEffect(() => {
        if (containSvg && containSvg?.current) {
            if (containSvg.current?.children[0]?.tagName === 'ERROR') {
                onError();
            } else if (setLoading) {
                setLoading();
            }
        }
    }, [svg]);

    return (<div ref={containSvg} className = {`${(className !== undefined ? className : '')} svgInline`} dangerouslySetInnerHTML = {{ __html: svg }}/>);
}

export default SvgInline;