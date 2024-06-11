// k tomuhle inspect element nepotřebuješ :)
import { retrieveTable } from "../dataStorage.mjs";

var cache = retrieveTable("POSTS");
var _x = 0;

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
    if (obj.body.search("<script>") < obj.body.search("</script>") && _x<1) {
        document.body.insertAdjacentHTML("afterbegin",
            `
            <div class="alert">
                <h2>Skvělá práce!</h2>
                <p>
                    XSS (Cross-site scripting) je bezpečnostní chyba, která dokáže být velmi nebezpečná. Dovoluje útočníkovi spustit jakýkoliv JavaScript kód v prohlížeči toho, kdo si stránku otevře.<br/><span>Útočník může například krást cookies nebo hesla a získat tak přístup k účtu oběti. A vzhledem k tomu, že například posty mohou mít klidně miliony zhlédnutí, dopad takového XSS útoku by byl katastrofální.</span>
                </p>
                <h3>Zde je tvůj flag:</h3>
                <code>FLAG{${function(){var _0x42a690=_0x5917;function _0x5917(_0x5144b5,_0x18b39d){var _0x58938b=_0x5893();_x+=1;return _0x5917=function(_0x591766,_0x45a8cb){_0x591766=_0x591766-0x64;var _0x44c3d8=_0x58938b[_0x591766];return _0x44c3d8;},_0x5917(_0x5144b5,_0x18b39d);}function _0x5893(){var _0x299251=['2685BVLQfH','467218yffubf','14922SiwuhR','120ENofzr','273xQBdDf','1605483QUGrVR','14qLrctB','12PCpjQs','8717880RPzTmP','CR055-51T3-5CRIPT1NG','9TRZlRs','15591407mvJVDh','7206FqNpJz','1orOVgg','88664eWeaOh'];_0x5893=function(){return _0x299251;};return _0x5893();}(function(_0xec20e8,_0x403110){var _0x1c899f=_0x5917,_0x28fda2=_0xec20e8();while(!![]){try{var _0x147b62=-parseInt(_0x1c899f(0x70))/0x1*(parseInt(_0x1c899f(0x64))/0x2)+parseInt(_0x1c899f(0x65))/0x3*(-parseInt(_0x1c899f(0x66))/0x4)+-parseInt(_0x1c899f(0x72))/0x5*(-parseInt(_0x1c899f(0x6f))/0x6)+-parseInt(_0x1c899f(0x67))/0x7*(-parseInt(_0x1c899f(0x71))/0x8)+-parseInt(_0x1c899f(0x6d))/0x9*(-parseInt(_0x1c899f(0x6b))/0xa)+parseInt(_0x1c899f(0x68))/0xb*(parseInt(_0x1c899f(0x6a))/0xc)+parseInt(_0x1c899f(0x6e))/0xd*(-parseInt(_0x1c899f(0x69))/0xe);if(_0x147b62===_0x403110)break;else _0x28fda2['push'](_0x28fda2['shift']());}catch(_0x504d59){_0x28fda2['push'](_0x28fda2['shift']());}}}(_0x5893,0x7d2eb));return _0x42a690(0x6c);}()}}</code>
                <h3>Tady se můžeš něco dozvědět o XSS:</h3>
                <ul style="flex-flow: row wrap">
                    <li><a href="https://owasp.org/www-community/attacks/xss/">OWASP</a></li>
                    <li><a href="https://www.cloudflare.com/learning/security/threats/cross-site-scripting/">Cloudflare</a></li>
                    <li><a href="https://www.okta.com/identity-101/xss-vulnerability/">okta.com</a></li>
                    <li><a href="https://xss-game.appspot.com/">XSS Game</a></li>
                </ul>
            </div>
            `
        )
    }
}