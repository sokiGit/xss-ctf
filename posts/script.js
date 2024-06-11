import { retrieveTable } from "../dataStorage.mjs";

var cache = retrieveTable("POSTS");

for (let [_, obj] of Object.entries(cache)) {
    document.body.insertAdjacentHTML("beforeend",
        `
        <div class="post">
            <h3>${obj.usr}</h3>
            <h4>${obj.mail}</h4>
            <p>${obj.body}</p>
        </div>
        `
    )
    if (obj.body.search("<script>") < obj.body.search("</script>")) {
        document.body.insertAdjacentHTML("afterbegin",
            `
            <div class="alert">
                <h2>Skvělá práce!</h2>
                <p>
                    XSS (Cross-site scripting) je bezpečnostní chyba, která dokáže být velmi nebezpečná. Dovoluje útočníkovi spustit jakýkoliv JavaScript kód v prohlížeči toho, kdo si stránku otevře.
                </p>
                <h3>Zde je tvůj flag:</h3>
                <code>FLAG{abc}</code>
                <h3>Tady se můžeš něco dozvědět o XSS:</h3>
                <ul>
                <li><a href="https://owasp.org/www-community/attacks/xss/">OWASP</a></li>
                <li><a href="https://www.cloudflare.com/learning/security/threats/cross-site-scripting/">Cloudflare</a></li>
                    <li><a href="https://xss-game.appspot.com/">XSS Game</a></li>
                </ul>
            </div>
            `
        )
    }
}