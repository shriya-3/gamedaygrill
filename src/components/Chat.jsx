import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Chat() {
    useEffect(() => {
        (function(d, m){
            var kommunicateSettings =
            {"appId":"1ab0ac1a425a4644c4edb50e339102611","popupWidget":true,"automaticChatOpenOnNavigation":true};
            var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
            s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
            var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
            window.kommunicate = m; m._globals = kommunicateSettings;
        })(document, window.kommunicate || {});
    }, []); // The empty dependency array makes it behave like componentDidMount

    return (
        <div className="chat">
        </div>
    )
}
